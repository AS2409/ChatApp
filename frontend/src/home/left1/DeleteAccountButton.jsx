import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const DeleteAccountButton = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleDeleteAccount = async () => {
    setLoading(true);
    try {
      // Step 1: Send delete request to the backend
      const res = await axios.delete("/api/user/delete", {
        headers: {
          Authorization: `Bearer ${Cookies.get("jwt")}`, // Send JWT token for authorization
        },
      });

      if (res.status === 200) {
        // Step 2: On success, clear all user data from localStorage and cookies
        localStorage.removeItem("messenger");
        Cookies.remove("jwt");

        // Log the result to ensure it's cleared
        console.log(
          "LocalStorage after delete:",
          localStorage.getItem("messenger")
        );
        console.log("Cookies after delete:", Cookies.get("jwt"));

        // Step 3: Show success message
        toast.success("Account deleted successfully");
        window.location.reload(); // Optionally reload the page
        // Step 4: Redirect to the signup page after account deletion
        setTimeout(() => {
          navigate("/signup"); // Ensure there's no immediate blocking action
        }, 1000); // Delay for toast message to show before redirecting
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Failed to delete account");
    }
  };

  return (
    <button
      onClick={handleDeleteAccount}
      className="flex space-x-4 mt-4"
      disabled={loading}
    >
      <RiDeleteBin5Line className="text-4xl text-red-600 bg-softDark hover:text-red-600 hover:shadow-lg hover:shadow-red-600 hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-2" />
    </button>
  );
};

export default DeleteAccountButton;
