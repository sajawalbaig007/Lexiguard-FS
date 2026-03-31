// import User from "../models/User.js";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";

// // REGISTER USER
// export const registerUser = async (req, res) => {
//   const { fullName, username, email, password } = req.body;

//   if (!fullName || !username || !email || !password) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   try {
//     // Check if email or username already exists
//     const existingUser = await User.findOne({ $or: [{ email }, { username }] });
//     if (existingUser) {
//       return res.status(400).json({ message: "Email or username already exists" });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = new User({
//       fullName,
//       username,
//       email,
//       password: hashedPassword,
//     });

//     await user.save();

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
//     res.status(201).json({ token });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // LOGIN USER (EMAIL OR USERNAME + PASSWORD)
// export const loginUser = async (req, res) => {
//   const { login, password } = req.body; // login can be email or username

//   if (!login || !password) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   try {
//     // Find user by email OR username
//     const user = await User.findOne({ $or: [{ email: login }, { username: login }] });
//     if (!user) return res.status(400).json({ message: "Invalid email/username or password" });

//     // If user has no password (Google/Firebase user)
//     if (!user.password) {
//       return res.status(400).json({ message: "This account uses Google login. Use Google sign-in." });
//     }

//     // Compare password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid email/username or password" });

//     // Generate JWT token
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
//     res.status(200).json({ token });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // GOOGLE/FIREBASE AUTH
// export const googleAuth = async (req, res) => {
//   const { email, fullName, googleId, profilePic } = req.body;

//   if (!email || !googleId) return res.status(400).json({ message: "Invalid data" });

//   try {
//     let user = await User.findOne({ email });

//     if (!user) {
//       user = new User({
//         email,
//         fullName,
//         firebaseId: googleId,
//         profilePic,
//       });
//       await user.save();
//     }

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
//     res.status(200).json({ token });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// };


// controllers/authController.js
// controllers/authController.js
import User from "../models/User.js";
import VerificationCode from "../models/VerificationCode.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";

// -------------------- SEND VERIFICATION CODE --------------------
export const sendVerificationCode = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email is required" });

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already registered" });

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const codeExpiry = new Date(Date.now() + 5 * 60 * 1000);

    await VerificationCode.findOneAndUpdate(
      { email },
      { code, expiresAt: codeExpiry },
      { upsert: true, returnDocument: "after" }
    );

    // ----------- ETHEREAL TRANSPORTER -----------
    const testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    const info = await transporter.sendMail({
      from: `"Lexiguard" <no-reply@example.com>`,
      to: email,
      subject: "Your Verification Code",
      text: `Your verification code is ${code}. It will expire in 5 minutes.`,
    });

    console.log("Preview URL:", nodemailer.getTestMessageUrl(info)); // Check email in browser
    res.status(200).json({ message: "Verification code sent", preview: nodemailer.getTestMessageUrl(info) });
  } catch (err) {
    console.error("Failed to send verification code:", err);
    res.status(500).json({ message: "Failed to send code" });
  }
};

// -------------------- VERIFY CODE & REGISTER USER --------------------
export const verifyRegister = async (req, res) => {
  const { fullName, username, email, password, code } = req.body;

  if (!fullName || !username || !email || !password || !code) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) return res.status(400).json({ message: "Email or username already exists" });

    const verification = await VerificationCode.findOne({ email, code });
    if (!verification) return res.status(400).json({ message: "Invalid verification code" });

    if (verification.expiresAt < new Date()) {
      return res.status(400).json({ message: "Verification code expired" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullName,
      username,
      email,
      password: hashedPassword,
      isVerified: true,
    });

    await newUser.save();
    await VerificationCode.deleteOne({ email });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.status(201).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// -------------------- LOGIN USER --------------------
export const loginUser = async (req, res) => {
  const { login, password } = req.body;

  if (!login || !password) return res.status(400).json({ message: "All fields are required" });

  try {
    const trimmedLogin = login.trim();

    const user = await User.findOne({
      $or: [
        { email: { $regex: `^${trimmedLogin}$`, $options: "i" } },
        { username: { $regex: `^${trimmedLogin}$`, $options: "i" } }
      ],
      isVerified: true
    });

    if (!user) return res.status(400).json({ message: "Invalid email/username or password" });

    if (!user.password) {
      return res.status(400).json({ message: "This account uses Google login. Use Google sign-in." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid email/username or password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// -------------------- GOOGLE / FIREBASE AUTH --------------------
export const googleAuth = async (req, res) => {
  const { email, fullName, googleId, profilePic } = req.body;
  if (!email || !googleId) return res.status(400).json({ message: "Invalid data" });

  try {
    let user = await User.findOne({ email });

    if (!user) {
      const baseUsername = fullName.replace(/\s+/g, "").toLowerCase();
      const uniqueUsername = baseUsername + Date.now();

      user = new User({
        email,
        fullName,
        firebaseId: googleId,
        profilePic,
        username: uniqueUsername,
        isVerified: true,
      });

      await user.save();
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};