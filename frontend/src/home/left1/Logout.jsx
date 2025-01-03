// components/Logout.js

import React from "react";
import LogoutButton from "./LogoutButton"; // Import the LogoutButton component
import DeleteAccountButton from "./DeleteAccountButton"; // Import the DeleteAccountButton component

export default function Logout() {
  return (
    <div className="border w-[4%] border-cyberNavy bg-cyberNavy flex flex-col justify-end">
      <div className="welcome-section flex items-center justify-center h-full">
        <h1 className="rotated-text text-lavenderBlue text-2xl font-extrabold neon-font">
          Welcome to CyChat!
        </h1>
      </div>

      <div className="p-3 align-bottom">
        <form action="">
          <div className="flex flex-col space-y-4">
            {/* Render the Logout button */}
            <LogoutButton />

            {/* Render the Delete Account button */}
            <DeleteAccountButton />
          </div>
        </form>
      </div>
    </div>
  );
}
