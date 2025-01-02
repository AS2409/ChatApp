import React, { useEffect } from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import Type from "./Type";
import useConversation from "../../statemanage/useConversation.js";
import { useAuth } from "../../context/AuthProvider.jsx";
import { io } from "socket.io-client"; // Import Socket.io Client
let socket;

function Right() {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="border border-lavenderBlue w-[75%] bg-cyberNavy font-raleway text-lavenderBlue h-screen flex flex-col">
      {!selectedConversation ? (
        <Nochat />
      ) : (
        <>
          <Chatuser />
          <div className="flex-grow mb-16 overflow-y-auto">
            <Messages />
          </div>
          <Type />
        </>
      )}
    </div>
  );
}

export default Right;

const Nochat = () => {
  const { authUser } = useAuth();
  return (
    <div className="flex items-center justify-center h-full font-raleway text-lavenderBlue">
      <h1 className="text-center font-semibold text-xl">
        Welcome <span className="text-cyberPink">{authUser.user.name}</span>
        <br />
        Select a Chat to start a conversation!
      </h1>
    </div>
  );
};
