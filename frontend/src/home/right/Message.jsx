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
  const chatClass = isMyMessage ? "chat-end pr-2" : "chat-start pl-2";
  const chatColor = isMyMessage ? "bg-neonCyan" : "bg-lavenderBlue";

  return (
    <div className="pt-3 pl-3 p-2">
      <div className={chatClass}>
        <div
          className={`chat-bubble chat-bubble-accent ${chatColor} font-sansSarif text-md shadow-md`}
        >
          {message.message}
        </div>
      </div>
    </div>
  );
}

export default Message;
