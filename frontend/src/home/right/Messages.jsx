import React from "react";
import Message from "./Message";
import Loading from "../../components/Loading.jsx";
import useGetMessage from "../../context/useGetMessage.js";

function Messages() {
  const { messages, loading, error } = useGetMessage();

  // Handle loading state
  if (loading) {
    return <Loading />;
  }
  



  if (!Array.isArray(messages)) {
    return (
      <div className="error-message">
        <p>Invalid message data received. Try Refeshing the page or Login again</p>
      </div>
    );
  }

  // Handle no messages
  if (messages.length === 0) {
    return (
      <div className="no-messages flex h-screen items-center justify-center text-center font-semibold text-xl">
        <p>No messages yet. Let's start the conversation now <span></span> Start </p>
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
