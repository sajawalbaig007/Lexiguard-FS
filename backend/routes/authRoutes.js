// // routes/authRoutes.js
// import express from "express";
// import { registerUser, loginUser, googleAuth } from "../controllers/authController.js";

// const router = express.Router();

// router.post("/register", registerUser);
// router.post("/login", loginUser);
// router.post("/google", googleAuth);

// export default router;


// routes/authRoutes.js
import express from "express";
import { sendVerificationCode, verifyRegister, loginUser, googleAuth } from "../controllers/authController.js";

const router = express.Router();

router.post("/send-code", sendVerificationCode);
router.post("/verify-register", verifyRegister);
router.post("/login", loginUser);
router.post("/google", googleAuth);

export default router;