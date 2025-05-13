import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";

const app=express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials:true}));
connectDB(); //Database connected


app.get('/',(req,res)=>{
  res.send("Hello their");
})

const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
  console.log("Your app is live")
})