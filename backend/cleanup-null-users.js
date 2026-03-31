// backend/cleanup-null-users.js
import mongoose from "mongoose";
import User from "./models/User.js";
import dotenv from "dotenv";

dotenv.config();

async function cleanup() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const result = await User.deleteMany({ username: null });
    console.log(`Deleted ${result.deletedCount} users with null username.`);
    mongoose.disconnect();
  } catch (err) {
    console.error(err);
    mongoose.disconnect();
  }
}

cleanup();