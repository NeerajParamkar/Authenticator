import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from "./Routes/authRoutes.js";
import userRouter from "./Routes/usersRoutes.js";
const app=express();

const allowedOrigin=['http://localhost:5173']


app.use(cors({origin:allowedOrigin,credentials:true}));
connectDB(); //Database connected/
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true })); 
app.get('/',(req,res)=>{
  res.send("Hello their");
})

app.use('/api/auth',authRouter);
app.use('/api/user',userRouter);

const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
  console.log("Your app is live")
})