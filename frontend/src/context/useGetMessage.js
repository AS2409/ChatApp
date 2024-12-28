import React, { useEffect, useState, useCallback } from "react";
import useConversation from "../statemanage/useConversation";
import axios from "axios";

function useGetMessage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // To store any error from the API
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    setMessages([]); // Clear messages whenever conversation changes
  }, [selectedConversation, setMessages]);

  const getMessages = useCallback(async () => {
    if (!selectedConversation || !selectedConversation._id) {
      return; // Prevent API call if no selected conversation
    }

    setLoading(true);
    setError(null); // Reset error state before fetching new messages
    console.log("Selected conversation ID:", selectedConversation._id);

    try {
      const res = await axios.get(
        `/api/message/get/${selectedConversation._id}`
      );
      console.log("Fetched Messages:", res.data); // Check the structure here
      if (res.data && Array.isArray(res.data.messages)) {
        setMessages(res.data.messages); // Access the messages array inside the response object
      } else {
        console.error("Invalid data format received:", res.data);
        setError("Failed to load messages. Invalid data format.");
      }
    } catch (error) {
      console.log("Error in useGetMessage:", error);
      setError("Failed to load messages. Please try again later.");
    } finally {
      setLoading(false); // Ensure loading state is reset regardless of success or failure
    }
  }, [selectedConversation, setMessages]);

  useEffect(() => {
    getMessages(); // Trigger message fetch when selectedConversation changes
  }, [selectedConversation, getMessages]); // Effect is dependent on selectedConversation

  return {
    messages,
    loading,
    error, // Returning error for potential UI use
  };
}

export default useGetMessage;
