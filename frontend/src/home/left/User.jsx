import React from "react";
import useConversation from "../../statemanage/useConversation.js";

function User({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;

  return (
    <div
      className={`${
        isSelected
          ? " bg-cyberNight shadow-md shadow-neonCyan"
          : " hover:bg-cyberNight " 
      } transition duration-300 cursor-pointer rounded-lg mb-2`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className="flex items-center space-x-4 px-6 py-5 gap-4">
        {/* Avatar with neon effect */}
        <div className="avatar">
          <div className="w-14 h-14 rounded-full border-1 border-cyberNavy shadow-md shadow-neonCyan overflow-hidden">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="User Avatar"
            />
          </div>
        </div>

        {/* User Details */}
        <div>
          <h1 className="font-bold text-lg text-neonMagenta font-raleway bg-clip-text">
            {user.name}
          </h1>
          <span className="text-lavenderBlue font-oswald text-sm">{user.email}</span>
        </div>
      </div>
    </div>
  );
}

export default User;
