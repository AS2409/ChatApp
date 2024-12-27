import React from "react";
import Messages from "./Messages";

function Message({ message }) {
  console.log("Received message: ", message);

  const authUser = JSON.parse(localStorage.getItem("messenger"));
  console.log("message: ", message);
  const itsme = message.senderId === authUser.user._id ;
  if (!authUser || !authUser.user || !authUser.user._id) {
    console.error("Auth user is not available or has an incorrect structure.");
    return null;  // Return null or an error message if there's an issue
  }
  console.log("authUser: ", authUser);
  const chatName = itsme? "chat-end" : "chat-start";
  const chatcolor = itsme? "bg-neonCyan" : "";



  return (
    <div className="pt-3 pl-3 p-2 font-sourceSans ">
      <div className= {`chat ${chatName}`}>
        <div className={`chat-bubble chat-bubble-accent ${chatcolor}`}>
          {Messages.message}
        </div>
      </div>


      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-info bg-neonCyan">
          This chat is not from Database for now
          {/* {Message.message}  */}
        </div>
      </div>
    </div>
  );
}

export default Message;
