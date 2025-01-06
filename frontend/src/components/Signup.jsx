import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Signup() {
  const { setAuthUser } = useAuth();
  const [otpSent, setOtpSent] = useState(false); // Tracks if OTP was sent
  const [otp, setOtp] = useState(""); // Tracks entered OTP
  const [formData, setFormData] = useState({}); // Temporarily stores user info
  const navigate = useNavigate(); // To navigate after successful signup

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");
  const validatePasswordMatch = (value) =>
    value === password || "*Password and Confirm Password don't match";

  const handleSendOtp = async (data) => {
    console.log("Sending OTP with data:", data);  // This will show the form data
    try {
      const response = await axios.post("/api/user/send-otp", data);
      console.log("OTP sent successfully", response.data);
      setOtpSent(true); // Mark OTP as sent
      setFormData(data); // Save the email in formData
    } catch (error) {
      console.error("Error sending OTP", error.response.data);
      toast.error("Failed to send OTP");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post("/api/user/verify-otp", {
        email: formData.email, // Use saved email to verify OTP
        otp,
      });
      if (response.data.success) {
        await handleSignup(); // Call signup logic after successful OTP verification
      } else {
        toast.error("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error verifying OTP. Please try again.");
    }
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post("/api/user/signup", formData);
      if (response.data) {
        // Check if the account is already verified
        if (response.data.isVerified) {
          toast.error("This account is already verified. Try to Login!");
        } else {
          toast.success("Signup successful! Redirecting to home...");
          localStorage.setItem("messenger", JSON.stringify(response.data));
          setAuthUser(response.data); // Set user data globally
          setTimeout(() => {
            navigate("/"); // Delay navigation to make sure state is updated
          }, 1000); // Adjust time if needed
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("Signup failed. Please try again.");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-cyberNavy">
      <form
        onSubmit={otpSent ? handleVerifyOtp : handleSubmit(handleSendOtp)}
        className="border border-neonMagenta px-6 py-5 rounded-md space-y-4 w-96 shadow-lg shadow-neonCyan"
      >
        <h1 className="text-neonMagenta text-center font-bold font-montserrat text-3xl neon-font">
          Cy<span className="text-neonCyan">Chat</span>
        </h1>
        <h2 className="text-center text-xl font-roboto text-cyberPink">
          {otpSent ? "Enter OTP" : "Create a New Account!"}
        </h2>

        {!otpSent && (
          <>
            {/* Username */}
            <label className="input input-bordered flex items-center font-raleway gap-2">
              <input
                type="text"
                className="grow bg-cyberNavy text-cyberNavy placeholder-lavenderBlue"
                placeholder="name"
                {...register("name", { required: true })}
              />
            </label>
            {errors.name && (
              <span className="text-red-600 text-sm font-semibold">
                *This field is required
              </span>
            )}

            {/* Email */}
            <label className="input input-bordered flex items-center font-raleway gap-2">
              <input
                type="email"
                className="grow bg-cyberNavy text-cyberNavy placeholder-lavenderBlue"
                placeholder="email"
                {...register("email", { required: true })}
                disabled={otpSent} // Disable email input after OTP is sent
              />
            </label>
            {errors.email && (
              <span className="text-red-600 text-sm font-semibold">
                *This field is required
              </span>
            )}

            {/* Password */}
            <label className="input input-bordered flex items-center font-raleway gap-2">
              <input
                type="password"
                className="grow bg-cyberNavy text-cyberNavy placeholder-lavenderBlue"
                placeholder="password"
                {...register("password", { required: true })}
              />
            </label>
            {errors.password && (
              <span className="text-red-600 text-sm font-semibold">
                *This field is required
              </span>
            )}

            {/* Confirm Password */}
            <label className="input input-bordered flex items-center font-raleway gap-2">
              <input
                type="password"
                className="grow bg-cyberNavy text-cyberNavy placeholder-lavenderBlue"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: true,
                  validate: validatePasswordMatch,
                })}
              />
            </label>
            {errors.confirmPassword && (
              <span className="text-red-600 text-sm font-semibold">
                {errors.confirmPassword.message}
              </span>
            )}
          </>
        )}

        {/* OTP Section */}
        {otpSent && (
          <>
            <label className="input input-bordered flex items-center font-raleway gap-2">
              <input
                type="text"
                className="grow bg-cyberNavy text-cyberNavy placeholder-lavenderBlue"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </label>
          </>
        )}

        {/* Submit Button */}
        <div className="text-center space-y-2">
          <button
            type="submit"
            className="text-cyberNavy bg-neonCyan w-full font-montserrat rounded-md py-1 cursor-pointer hover:bg-neonMagenta font-bold text-lg scale-100 neon-font shadow-md hover:shadow-neonCyan transition duration-300 ease-in-out hover:scale-105"
          >
            {otpSent ? "Verify OTP" : "Signup"}
          </button>
          <p className="text-cyberPink font-roboto pt-1">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-lavenderBlue underline cursor-pointer"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
