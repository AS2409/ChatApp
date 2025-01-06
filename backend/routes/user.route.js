// user.route.js
import express from "express";
import { signup, login, getUserProfile, logout, sendOtp, verifyOtp } from "../controller/user.controller.js";
import secureRoute from "../middleware/secureRoute.js";
import User from "../models/user.model.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);
router.get("/getUserProfile", secureRoute, getUserProfile);
// Delete user route
router.delete("/delete", secureRoute, async (req, res) => {
  try {
    const userId = req.user.id; // Get the user ID from JWT
    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.status(200).json({ msg: "User deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});


export default router;
