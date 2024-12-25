// Will store sender and reciever' id here (store in form of array)
import mongoose from "mongoose";
import User from "../models/user.model.js";
import Message from "./message.model.js";

const conservationSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Message,
        default: [],
      },
    ],
  },
  {
    timestamps: true,
  }
);
const Conversation = mongoose.model("Conversation", conservationSchema);

export default Conversation;
