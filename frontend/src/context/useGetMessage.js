import React, { useEffect, useState } from 'react'
import useConversation from '../statemanage/useConversation.js';
import axios from "axios";

function useGetMessage() {

    const [loading, setLoading] = useState(false);
    const {messages, setMessages, selectedConversation} = useConversation();


    useEffect(()=>{
        const getMessages =  async() =>{
           setLoading(true);
           console.log("Selected conversation ID:", selectedConversation?._id);

            if(selectedConversation && selectedConversation._id){
                try{
                    const res = await axios.get(
                        //we are now trying to obtain the id of selected user for sending/receiving messages:
                        
                        `/api/message/get/${selectedConversation._id}/messages`
                    );
                    setMessages(res.data);
                    setLoading(false);
                   } catch (error){
                        console.log("Error in useGetMessage: ", error);
                   }
            }
        };
        getMessages();
    }, [selectedConversation, setMessages]);
    return {
        messages,
        loading
    };
}

export default useGetMessage;