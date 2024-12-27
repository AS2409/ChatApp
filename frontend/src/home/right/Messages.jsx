import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessage from "../../context/useGetMessage.js";
import Loading from "../../components/Loading.jsx";

function Messages() {
  const { messages, loading } = useGetMessage();
  console.log(messages);

  const lastMessageRef = useRef();
  useEffect(()=>{
    setTimeout(()=>{
      if(lastMessageRef.current){
        lastMessageRef.current.scrollIntoView({behavior : "smooth"})
      }
    }, 100);
  }, [messages]);

  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        messages.length > 0 &&
        messages.map((message) => {
        return <Message key={message._id} message={message} />
        })
      )}

      <div className="users-container" style={{ maxHeight: "calc(92vh-8vh)" }}>
        {!loading && messages.length === 0 && (
          <div>
            <p className="text-center font-bold font-robotoMono text-neonMagenta mt-[20%] ">
              Say Hii!!    
            </p>
          </div>
        )}
      </div>
    </>
  );
}


export default Messages;
