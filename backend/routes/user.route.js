// user.route.js
import express from "express";
import { signup, login, getUserProfile, logout, sendOtp, verifyOtp } from "../controller/user.controller.js";
import secureRoute from "../middleware/secureRoute.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);
router.get("/getUserProfile", secureRoute, getUserProfile);


export default router;
