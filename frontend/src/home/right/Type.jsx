import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage.js";
// import axios from "axios";

function Type() {
  const { loading, sendMessages } = useSendMessage();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim()) {
      await sendMessages(message);
      setMessage("");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="fixed bottom-1 w-[70%] z-50 flex items-center bg-black pl-3 pb-1  rounded-lg shadow-lg"
        style={{
          minWidth: "300px", // Ensure enough width for input and button
        }}
      >
        <input
          type="text"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="border-2 border-neonMagenta shadow-sm shadow-neonMagenta bg-cyberNight rounded-lg flex-grow outline-none placeholder-neonCyan text-neonCyan font-sourceSans h-[40px] pl-3 pr-5 mr-3"
          placeholder="Type your message..."
        />
        <button
          type="submit"
          className="text-2xl rounded-xl text-neonMagenta shadow-md shadow-neonMagenta bg-cyberNavy hover:text-cyberPink hover:shadow-lg  hover:shadow-neonCyan hover:scale-105 transition-all duration-300 ease-in-out h-[40px] p-2"
        >
          <IoSend />
        </button>
      </form>
    </>
  );
}

export default Type;
