import React, { useEffect } from "react";
import { useSocketContext } from "./SocketContext.jsx";
import useConversation from "../statemanage/useConversation.js"

function useGetSocketMessage() {
    const {socket}= useSocketContext();
    const {messages, setMessages} = useConversation();


    useEffect(()=>{
        socket.on("newMessage", (newMessage) =>{
            setMessages(...Messages, newMessage);
        });
        return ()=> socket.off("newMessage");
    },[socket, messages, setMessages]) 
    //[] shows the dependencies..
    //By the help of this function we can use [socket, messages, setMessages] anywhere we need.

}

export default useGetSocketMessage;
