import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import createTokenAndSaveCookie from "../jwt/generateToken.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

export const sendOtp = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    // Check if all required fields are provided
    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if user already exists
    let existingUser = await User.findOne({ email });

    if (existingUser) {
      // If user already exists and is not verified, generate a new OTP
      if (!existingUser.isVerified) {
        // Generate OTP and expiry time
        const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
        const otpExpiresAt = Date.now() + 5 * 60 * 1000; // OTP valid for 5 minutes

        // Update OTP and expiry time
        existingUser.otp = otp;
        existingUser.otpExpiresAt = otpExpiresAt;

        // Save the updated user with new OTP
        await existingUser.save();

        // Send OTP via email
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: email,
          subject: "OTP for Account Verification",
          text: `Welcome to the CyChat Web App. Your OTP is ${otp}. It is valid for 5 minutes.`,
        };

        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: "OTP sent to your email." });
      } else {
        // If the user is already verified
        return res.status(400).json({ message: "This account is already verified. Try to Login on it!" });
      }
    } else {
      // If the user does not exist, create a new user
      const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
      const otpExpiresAt = Date.now() + 5 * 60 * 1000; // OTP valid for 5 minutes

      // Create new user with OTP and expiration time
      const newUser = new User({
        name,
        email,
        password, // Store password directly (will hash later during signup)
        otp,
        otpExpiresAt,
        isVerified: false,
      });

      // Save the new user
      await newUser.save();

      // Send OTP via email
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Verify Your Account - OTP",
        text: `Your OTP is ${otp}. It is valid for 5 minutes.`,
      };

      await transporter.sendMail(mailOptions);

      return res.status(200).json({ message: "OTP sent to your email." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Verify OTP and complete the signup
export const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    // Find the user by email and check if OTP is valid
    const user = await User.findOne({ email, isVerified: false });
    if (!user) {
      return res.status(404).json({ message: "User not found or already verified" });
    }

    // Check if OTP matches and hasn't expired
    if (user.otp !== otp || Date.now() > user.otpExpiresAt) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    // Update user as verified
    user.isVerified = true;
    user.otp = undefined; // Clear OTP once it's verified
    user.otpExpiresAt = undefined; // Clear OTP expiration time

    await user.save();

    res.status(200).json({ message: "Account verified successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const signup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, otp } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const user = await User.findOne({ email, otp, isVerified: false });
    if (!user || Date.now() > user.otpExpiresAt) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword, // Store hashed password
      isVerified: true, // User is verified after OTP success
    });

    await newUser.save();

    res.status(201).json({ message: "User created and verified successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};


export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }); //User is like database here
    if (!user) {
      return res.status(404).json({ message: "Invalid User or Password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!user || !isMatch) {
      return res.status(404).json({ message: "Invalid User or Password" });
    }
    createTokenAndSaveCookie(user._id, res);
    res.status(201).json({
      message: "User logged in successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};


export const logout = async (req,res) =>{
  try{
    res.clearCookie("jwt");
    res.status(201).json({message: "User logged out Successfully"});
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "Server Error"});
  }
};


export const getUserProfile = async (req, res) => {
  try {
    //from line 72 to 80 I have modified for the error "cannot read properties of undefinde (reading 'id').
    const token = req.cookies.jwt; //cookies.jwt => will get jwt token
    if (!token) {
      return res.status(401).json({ message: "not authorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    if (!decoded) {
      return res.status(401).json({ message: "Invalid token" });
    }
    const loggedInUser = await User.findById(decoded.userId);
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUser },
    }).select("-password"); //select("-password")=> use to eliminate password field when we see user data
    res.status(201).json({ filteredUsers });
  } catch (error) {
    console.log("Error in allUsers Controller " + error);
    res.status(500).json({ message: "Server Error" });
  }
};
