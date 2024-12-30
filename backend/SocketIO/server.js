import { Server } from "socket.io";
import http from "http";
import express from "express";
import { Socket } from "dgram";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:4001",
    methods: ["GET", "POST"],
  },
});
const users = {};
//Socket is used on both size frontend and backend
io.on("connection", (socket) => {
  console.log("New client", socket.id);
  const userId = socket.handshake.query.userId;
  if (userId) {
    users[userId] = socket.id;
    console.log("Hellooo", users);
  }
  io.emit("get online", Object.keys(users)); //Will show whether the user is online or offline
  socket.on("disconnect", () => {
    console.log("Client disconnected", socket.id);
    delete users[userId];
    io.emit("get online", Object.keys(users));
  });
});

export { app, io, server };
