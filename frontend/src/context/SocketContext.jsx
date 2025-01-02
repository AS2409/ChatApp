import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { io } from "socket.io-client";

// Create the SocketContext and provide the socket
const SocketContext = createContext(null);

// Custom hook to use the socket context
export const useSocketContext = () => useContext(SocketContext);

let socket;

export const SocketProvider = ({ children }) => {
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socketRef = useRef(null);

  useEffect(() => {
    if (!socketRef.current) {
      socketRef.current = io("ws://localhost:4001", {
        query: {
          userId: "676bbeb0533f8ab564ba12e5", // User ID
        },
      });

      socket = socketRef.current;

      socket.on("connect", () => {
        console.log("WebSocket connected", socket.id); // Log successful connection
      });

      socket.on("disconnect", () => {
        console.log("WebSocket disconnected");
      });

      // Listen for updates to online users
      socket.on("onlineUsers", (users) => {
        setOnlineUsers(users); // Update the online users list
      });

      return () => {
        if (socket) {
          socket.close();
          console.log("WebSocket closed");
        }
      };
    }
  }, []);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
