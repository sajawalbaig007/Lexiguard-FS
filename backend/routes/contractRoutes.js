import express from "express";
import { generateContract } from "../controllers/contractController.js";

const router = express.Router();

// Public route: no JWT required
router.post("/ai/generate", generateContract);

export default router;