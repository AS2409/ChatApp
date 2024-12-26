import React from "react";

function Message({ message }) {

  const authUser = JSON.parse(localStorage.getItem("messenger"));
  //console.log(message);
  const itsme = message.senderId === authUser._id ;
  // console.log(authUser);
  const chatName = itsme? "chat-end" : "chat-start";
  const chatcolor = itsme? "bg-neonCyan" : "";



  return (
    <div className="pt-3 pl-3 p-2 font-sourceSans ">
      <div className= {`chat ${chatName}`}>
        <div className={`chat-bubble chat-bubble-accent ${chatcolor}`}>
          {message.message}
        </div>
      </div>


      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-info bg-neonCyan">
          This chat is not from Database for now
        </div>
      </div>
    </div>
  );
}

export default Message;
