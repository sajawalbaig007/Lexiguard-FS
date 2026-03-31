// backend/send-code.js
import VerificationCode from "./models/VerificationCode.js";
import nodemailer from "nodemailer";

export const sendCode = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email is required" });

  try {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const codeExpiry = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

    await VerificationCode.findOneAndUpdate(
      { email },
      { code, expiresAt: codeExpiry },
      { upsert: true, new: true }
    );

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your Verification Code",
      text: `Your verification code is ${code}. It expires in 5 minutes.`,
    });

    res.status(200).json({ message: "Verification code sent" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to send code" });
  }
};