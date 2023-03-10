import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoute from "./routes/auth.js";
const app = express();
dotenv.config();
//Constans
const PORT = process.env.PORT || 3001;
const USER = process.env.DB_USER;
const USER_PASS = process.env.DB_USER_PASS;
const DB_NAME = process.env.DB_NAME;

//Middleware

app.use(cors());
app.use(express.json());

//Routes
app.use("/api/auth", authRoute);
async function start() {
  try {
    await mongoose.connect(
      `mongodb+srv://${USER}:${USER_PASS}@cluster0.sijhrop.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
    );
    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
  } catch (err) {
    console.log(err);
  }
}
start();
