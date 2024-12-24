import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import createTokenAndSaveCookie from "../jwt/generateToken.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    if (password != confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }
    //Hashing the password. 10 is saltvalue
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await new User({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    if (newUser) {
      createTokenAndSaveCookie(newUser._id, res);
      res.status(201).json({
        message: "User registered successfully",
        user: {
          _id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        },
      });
    }
  } catch (error) {
    console.log(error);
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
    res.status(200).json({message: "User logged out Successfully"});
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
