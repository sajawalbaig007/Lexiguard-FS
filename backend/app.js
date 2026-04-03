import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import contractRoutes from "./routes/contractRoutes.js"
dotenv.config();

const app = express();
app.use(cors({
  origin: [
    'https://lexiguard-fs.vercel.app',
    'http://localhost:3000'
  ],
  credentials: true
}));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/contracts", contractRoutes);
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(5000, () => console.log("Server running on port 5000"));