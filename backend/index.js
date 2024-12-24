import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();

app.use(express.json());

app.use(cors()); //Enable CORS for all requests
app.use(cookieParser());
const PORT = process.env.PORT || 5001;
const URI = process.env.MONGODB_URI;
//Connecting to DB
try {
  mongoose.connect(URI).then(console.log("Mongodb Connected"));
} catch (error) {
  console.log(error);
}

//route
app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
