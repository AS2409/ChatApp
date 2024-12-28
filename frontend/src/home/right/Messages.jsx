import React from "react";
import Message from "./Message";
import Loading from "../../components/Loading.jsx";
import useGetMessage from "../../context/useGetMessage.js";

function Messages() {
  const { messages, loading, error } = useGetMessage();

  // Handle loading state
  if (loading) {
    return <Loading />; // Show loading spinner while messages are being fetched
  }

  // Handle error state
  if (error) {
    return (
      <div className="error-message">
        <p>{error}</p> {/* Show error message if fetching messages fails */}
      </div>
    );
  }

  // Ensure messages is an array before using map
  if (!Array.isArray(messages)) {
    return (
      <div className="error-message">
        <p>Invalid message data received.</p>
      </div>
    );
  }

  // Handle no messages
  if (messages.length === 0) {
    return (
      <div className="no-messages">
        <p>No messages yet. Start the conversation!</p>
      </div>
    );
  }

  // Render the list of messages
  return (
    <div className="messages-container">
      {messages.map((message) => (
        <Message key={message._id} message={message} />
      ))}
    </div>
  );
}

export default Messages;
