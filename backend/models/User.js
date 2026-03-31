// // models/User.js
// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   fullName: { type: String, required: true },
//   username: { type: String, required: true, unique: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String },
//   firebaseId: { type: String },
//   profilePic: { type: String },

//   // For email verification code
//   verificationCode: { type: String },
//   codeExpiresAt: { type: Date },
// }, { timestamps: true });

// export default mongoose.model("User", userSchema);


// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  firebaseId: { type: String },
  profilePic: { type: String },
  isVerified: { type: Boolean, default: false }, // <-- added field

  // For email verification code (optional now)
  verificationCode: { type: String },
  codeExpiresAt: { type: Date },
}, { timestamps: true });

export default mongoose.model("User", userSchema);