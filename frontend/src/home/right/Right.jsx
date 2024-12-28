import React, { useEffect } from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import Type from "./Type";
import useConversation from "../../statemanage/useConversation.js";
import {useAuth} from "../../context/AuthProvider.jsx";
 function Right() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="border w-[75%] bg-softDark text-white pl-1">
      {!selectedConversation ? (
        <Nochat /> // This renders when no conversation is selected
      ) : (
        <>
          <Chatuser /> {/* Chat user component */}
          <div
            className="pt-1 flex-aditi overflow-y-auto"
            style={{ maxHeight: "calc(92vh - 12vh)" }}
          >
            <Messages /> {/* Messages component */}
          </div>
          <Type /> {/* Type component */}
        </>
      )}
    </div>
  );
 }  

export default Right;

const Nochat = () => {
  const {authUser}= useAuth();
  return(
    <>
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-center font-semibold text-xl">
          Welcome <span>{authUser.user.name}</span>
          <br></br>
          Select a Chat to start a conversation!
        </h1>
        {authUser.name && <Nochat/>}
      </div>
    </>
  );
};
