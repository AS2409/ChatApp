import React from "react";
import { IoSend } from "react-icons/io5";
import useConversation from "../../statemanage/useConversation.js";

function Message({ message }) {
  console.log("Received message: ", message); // Check the message structure

  // Ensure message object is valid and contains expected properties
  if (!message || !message._id || !message.message) {
    console.error("Invalid message object:", message);
    return null; // Return null or an error message if there's an issue with the message data
  }

  const authUser = JSON.parse(localStorage.getItem("messenger"));
  if (!authUser || !authUser.user || !authUser.user._id) {
    console.error("Auth user is not available or has an incorrect structure.");
    return null; // Handle case where auth user is missing
  }

  console.log("AuthUser: ", authUser);
  const isMyMessage = message.senderId === authUser.user._id;
  const chatClass = isMyMessage ? "chat-end" : "chat-start";
  const chatColor = isMyMessage ? "bg-neonCyan" : "";

  return (
    <div className="pt-3 pl-3 p-2 font-sourceSans">
      <div className={chatClass}>
        <div className={`chat-bubble chat-bubble-accent ${chatColor}`}>
          {message.message}{" "}
          {/* Corrected property: use 'message' instead of 'text' */}
        </div>
      </div>
    </div>
  );
}

export default Message;
