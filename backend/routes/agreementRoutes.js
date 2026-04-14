import express from "express";
import { 
  saveAgreement, 
  getUserAgreements, 
  getAgreement, 
  deleteAgreement,
  verifyToken 
} from "../controllers/agreementController.js";

const router = express.Router();

// Apply authentication middleware to all routes
router.use(verifyToken);

// POST /api/agreements/save - Save or update agreement
router.post("/save", saveAgreement);

// GET /api/agreements - Get all user agreements
router.get("/", getUserAgreements);

// GET /api/agreements/:id - Get specific agreement
router.get("/:id", getAgreement);

// DELETE /api/agreements/:id - Delete agreement
router.delete("/:id", deleteAgreement);

export default router;
