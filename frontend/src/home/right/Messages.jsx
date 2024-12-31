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
  // const [isUserAtBottom, setIsUserAtBottom] = useState(true);

  // Scroll to bottom logic when messages change, unless user has manually scrolled up
  // const handleScroll = () => {
  //   const container = containerRef.current;
  //   if (!container) return;

  //   const isAtBottom =
  //     container.scrollHeight - container.scrollTop === container.clientHeight;
  //   setIsUserAtBottom(isAtBottom);
  // };

  // useEffect(() => {
  //   if (isUserAtBottom && messagesEndRef.current) {
  //     messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [messages, isUserAtBottom]);

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
    <div
      className="messages-container"
    >
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </div>
  );
}

export default Messages;
