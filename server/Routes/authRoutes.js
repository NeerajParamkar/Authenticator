import express from "express";
import { checkOtp, isAuthentication, login, logout, register, resetPassword, sendVerifiedOtp, setResendOtp, verifyEmail } from "../controllers/authController.js";
import userAuth from "../Middleware/userAuth.js";

const authRouter=express.Router();

authRouter.post('/register',register);
authRouter.post('/login',login);
authRouter.post('/logout',logout);
authRouter.post('/send-verify-Otp',userAuth,sendVerifiedOtp);
authRouter.post('/verify-Email',userAuth,verifyEmail);
authRouter.get('/is-auth',userAuth,isAuthentication);
authRouter.post('/send-reset-otp',setResendOtp);
authRouter.post('/reset-password',resetPassword);
authRouter.post('/checkotp',checkOtp);

export default authRouter;