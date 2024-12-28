import React, { useState } from "react";
import useConversation from "../statemanage/useConversation.js";
import axios from "axios";

function useSendMessage() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const sendMessages = async (message) => {
    setLoading(true);
    console.log("Selected conversation ID:", selectedConversation?._id);

    if (selectedConversation && selectedConversation._id) {
      try {
        const res = await axios.post(
          //we are now trying to obtain the id of selected user for sending/receiving messages:

          `/api/message/send/${selectedConversation._id}`,
          { message }
        );
        setMessages([...messages, res.data]); // We have to retain the previous message too!!
        setLoading(false);
      } catch (error) {
        console.log("Error in Send Message: ", error);
        setLoading(false);
      }
    }
  };
  //   sendMessages();
  //Calling sendMessages() immediately within the hook or on every render causes this infinite loop.
  //So we will conditionally call it, for instance, on button click or form submit.

  return {
    loading,
    sendMessages,
  };
}

export default useSendMessage;
