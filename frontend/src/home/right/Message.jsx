import React from "react";
import { IoSend } from "react-icons/io5";
import useConversation from "../../statemanage/useConversation.js";

function Message({ message, previousMessage }) {
  console.log("Received message: ", message); // Check the message structure

  if (!message || !message._id || !message.message) {
    console.error("Invalid message object:", message);
    return null;
  }

  const authUser = JSON.parse(localStorage.getItem("messenger"));
  if (!authUser || !authUser.user || !authUser.user._id) {
    console.error("Auth user is not available or has an incorrect structure.");
    return null;
  }

  const isMyMessage = message.senderId === authUser.user._id;
  const chatClass = isMyMessage ? "chat-end pr-2" : "chat-start pl-2";
  const chatColor = isMyMessage ? "bg-neonCyan" : "bg-lavenderBlue";

  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const formattedDate = createdAt.toLocaleDateString();

  let showDate = false;
  if (
    !previousMessage || // First message or no previous message
    new Date(previousMessage.createdAt).toLocaleDateString() !== formattedDate
  ) {
    showDate = true;
  }

  return (
    <div className="pt-3 pl-3 p-2">
      {showDate && (
        <div className="text-center text-sm font-bold font-robotoMono my-2">
          {formattedDate}

        </div>
      )}
      <div className={chatClass}>
        <div
          className={`chat-bubble chat-bubble-accent ${chatColor} font-sansSarif text-md shadow-md`}
        >
          {message.message}
        </div>
        <div className="text-xs font-robotoMono">{formattedTime}</div>
      </div>
    </div>
  );
}

export default Message;
