import React, { useEffect } from "react";
import { useSocketContext } from "./SocketContext.jsx";
import useConversation from "../statemanage/useConversation.js";
import sound from "../assets/msgSend.mp3"

function useGetSocketMessage() {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    const handleNewMessage = (newMessage) => {
      //FOR SOUND PLAY FEATURE:
      // const msgSound = new Audio(sound);
      // msgSound.volume = 1.0;
      // msgSound.play();
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    if (socket) {
      socket.on("newMessage", handleNewMessage);
    }

    return () => {
      if (socket) {
        socket.off("newMessage", handleNewMessage); // Clean up listener
      }
    };
  }, [socket, setMessages]); // Only depend on `socket` and `setMessages`
}

export default useGetSocketMessage;
