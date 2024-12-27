import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage.js";
// import axios from "axios";

function Type() {
const { loading,  sendMessages} = useSendMessage();
const [message, setMessage] = useState("");
const handleSubmit = async(e) => {
  e.preventDefault();
  if(message.trim()){
    await sendMessages(message);
    setMessage("");
  }
}


  return (
    <>
    <form onSubmit={handleSubmit}>
      <div
        className="flex items-center w-full pl-4 pt-2 pb-2 bg-black sticky bottom-0 z-10"
        style={{
          position: "sticky",
          bottom: 0,
          background: "black",
          zIndex: 10,
        }}
      >
       
        

        <div className=" flex items-center w-full pr-3 h-[5vh]">
          <input
            type="text"
            value={message}
            onChange={(e)=>{
              setMessage(e.target.value);
            }}  
            className="grow outline-none rounded-lg bg-brightWhite text-coolGray font-sourceSans  h-[5vh]  pl-2 pr-5"
            placeholder="Type your message..."
          />
          <button className="ml-6 text-2xl rounded-xl text-black bg-brightWhite hover:text-coolGray hover:shadow-lg hover:shadow-coolGray hover:scale-105 transition-all duration-300 ease-in-out h-[5vh] p-2">
            <IoSend />
          </button>
        </div>

        
      </div>
      </form>
    </>
  );
}

export default Type;
