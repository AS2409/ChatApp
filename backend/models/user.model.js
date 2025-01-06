import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  otp: { type: String },
  otpExpiresAt: { type: Date },
}, { timestamps: true });


userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    // Hash the password using bcrypt
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});


userSchema.pre("save", function (next) {
  if (this.isVerified) {
    this.otp = undefined;
    this.otpExpiresAt = undefined;
  }
  next();
});

// Ensure that only one unverified user exists for an email
userSchema.index({ email: 1, isVerified: 1 }, { unique: true });

const User = mongoose.model("User", userSchema);
export default User;
