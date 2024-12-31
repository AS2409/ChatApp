import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import Loading from "../../components/Loading.jsx";
import useGetMessage from "../../context/useGetMessage.js";
import useGetSocketMessage from "../../context/useGetSocketMessage.jsx";

function Messages() {
  const { messages, loading, error } = useGetMessage();
  // useGetSocketMessage();

  // const messagesEndRef = useRef(null);
  const containerRef = useRef(null);

  // Handle loading state
  if (loading) {
    return <Loading />;
  }

  // Error handling if messages is not an array
  if (!Array.isArray(messages)) {
    return (
      <div className="error-message">
        <p>
          Invalid message data received. Try refreshing the page or log in
          again.
        </p>
      </div>
    );
  }

  // Handle no messages
  if (messages.length === 0) {
    return (
      <div className="no-messages flex h-screen items-center justify-center text-center font-semibold text-xl">
        <p>
          No messages yet. Let's start the conversation now <span></span> Start
        </p>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="error-message flex h-screen items-center justify-center text-center font-semibold text-xl">
        <p>{error}</p> {/* Show error message if fetching messages fails */}
      </div>
    );
  }

  return (
    <div className="messages-container">
      {messages.map((message, index) => (
        <Message
          key={message._id} // Use unique identifier for key
          message={message}
          previousMessage={index > 0 ? messages[index - 1] : null} // Pass the previous message
        />
      ))}
    </div>
  );
}

export default Messages;
