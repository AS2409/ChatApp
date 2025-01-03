// components/LogoutButton.js

import React, { useState } from "react";
import { RiLogoutCircleRLine } from "react-icons/ri";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const LogoutButton = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("messenger");
      Cookies.remove("jwt");

      console.log(
        "LocalStorage after logout:",
        localStorage.getItem("messenger")
      );
      console.log("Cookies after logout:", Cookies.get("jwt"));

      setLoading(false);
      toast.success("Logout Successful");

      // Reload the page to ensure the UI reflects the logout state
      window.location.reload(); // Optionally reload the page

      navigate("/signup");
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Failed to LogOut");
    }
  };

  return (
    <button onClick={handleLogout} className="flex space-x-4">
      <RiLogoutCircleRLine className="text-4xl text-cyberPink bg-softDark hover:text-cyberPink hover:shadow-lg hover:shadow-cyberPink hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-2" />
    </button>
  );
};

export default LogoutButton;
