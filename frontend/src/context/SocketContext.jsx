import { createContext, useState, useEffect, useContext } from "react";
import { useAuth } from "./AuthProvider.jsx";
import React from "react";
import io from "socket.io-client";

const socketContext = createContext();
//created a hook so that we can use it anywhere----
export const useSocketContext = () => {
  return useContext(socketContext);
};
//----

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuth(); // Assuming useAuth gives the authenticated user. here useAuth is a function returning an object not an array so to destructure it we use {authUser} rather [authUser]

  useEffect(() => {
    if (authUser) {
      const socket = io("http://localhost:5002/", {
        query: { userId: authUser.user._id }, // Passing userId in the query
      });
      // User connection disconnection
      setSocket(socket);
      socket.on("getOnline", (users) => {
        setOnlineUsers(users);
        console.log("Socket/client disconnected");
      });
      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]); // Reconnect when authUser changes
  return (
    <socketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </socketContext.Provider>
  );
};
