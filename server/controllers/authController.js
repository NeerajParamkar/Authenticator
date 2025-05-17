import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import userModule from "../modules/userModule.js";
import transpoter from "../config/nodeMailer.js"
import { EMAIL_VERIFY_TEMPLATE,PASSWORD_RESET_TEMPLATE,WELLCOME_TEMPLATE } from "../../client/config/emailTemplate.js";

export const register =async (req,res)=>{
  const {name,email,password}=req.body;
  if(!name || !email || !password){
    return res.json({success:false,message:'Missing details'})
  }

  try {
    const existingUser= await userModule.findOne({email})
    if(existingUser){
      return res.json({success:false,message:'User already exists'})
    }
    const hashPassword= await bcrypt.hash(password,10);
    const user=new userModule({name,email,password:hashPassword});
    await user.save();

    const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'});
    res.cookie('token',token,{
      httpOnly:true,
      secure:process.env.NODE_ENV==='production',
      samesite:process.env.NODE_ENV==='production' ?'none':'strict',
      maxAge:7*24*60*60*1000
    });

    const mailOptions={
      from:process.env.SENDER_EMAIL,
      to:email,
      subject:"Wellcome to My webpage",
      // text:`Wellcome to neeraj's website your account has been created with email id : ${email}`
      html:WELLCOME_TEMPLATE.replace("{{email}}",email)
    }

    await transpoter.sendMail(mailOptions);
    
    return res.json({success:true,message:"Successfully Resistered"});
  } catch (error) {
    res.json({success:false,message:error.message})
  }
}

export const login= async (req,res)=>{
  const {email,password}=req.body;
  if(!email || !password){
    return res.json({success:false,message:'Email or Password is required'});
  }
    try {
    const user=await userModule.findOne({email})
    if(!user){
      return res.json({success:false,message:'invalid Email'})
    }
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
      return res.json({success:false,message:'invalid Password'})
    }
    const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'});

    res.cookie('token',token,{
      httpOnly:true,
      secure:process.env.NODE_ENV==='production',
      samesite:process.env.NODE_ENV==='production' ?'none':'strict',
      maxAge:7*24*60*60*1000
    });

     res.json({success:true,message:"You are logged in"});
    } catch (error) {
      res.json({success:false,message:error.message});
    }
}

export const logout= async (req,res)=>{
  try {
    res.clearCookie('token',{
      httpOnly:true,
      secure:process.env.NODE_ENV==='production',
      samesite:process.env.NODE_ENV==='production' ?'none':'strict',
    })

    return res.json({success:true,message:"logged Out"})
  } catch (error) {
    res.json({success:false,message:error.message});
  }
}

export const sendVerifiedOtp= async (req,res)=>{
  try {
    const {userID}=req.body;
    const user=await userModule.findById(userID);
    if(user.isAccountVerified){
       return res.json({success:false,error:"Account Already verified"});
    } 

    const otp=String(Math.floor(100000+Math.random()*900000));
    user.verifyOTP=otp;
    user.verifyOtpExpire=Date.now()+5*60*1000;

    await user.save();
    const mailOptions={
      from:process.env.SENDER_EMAIL,
      to:user.email,
      subject:"Account verification OTP",
      // text:`Your otp is ${otp} . Verify your account using this OTP`
      html: EMAIL_VERIFY_TEMPLATE.replace("{{otp}}",otp).replace("{{email}}",user.email)
    }

    await transpoter.sendMail(mailOptions);
    res.send({success:true,message:"Verification OTP send to your Email"})

  } catch (error) {
    return res.json({success:false,error:error.message});
  }
}

export const verifyEmail= async (req,res)=>{
  const {userID,otp}=req.body;
  if(!userID,!otp){
    return res.json({success:false,message:"Missing Details"});
  }

  try {
    const user=await userModule.findById(userID);

    if(!user){
      return res.json({success:false,message:"User not found"});
    }
    if(user.verifyOTP==='' || user.verifyOTP !==otp){
      return res.json({success:false,message:"Invalid Otp"});
    }
    if(user.verifyOtpExpire<Date.now()){
      return res.json({success:false,message:"Otp Expired"})
    }

    user.isAccountVerified=true;
    user.verifyOTP='';
    user.verifyOtpExpire=0;

    await user.save();
     
    return res.json({success:true,message:"Email Verified Successfully"})
  } catch (error) {
    return res.json({success:false,message:error.message});
  }
}

export const isAuthentication= async (req,res)=>{
  try {
    return res.json({success:true,message:"User is logged in"});
  } catch (error) {
    res.json({success:false,message:error.message});
  }
}

export const setResendOtp= async (req,res)=>{
  const {email}=req.body;
  if(!email){
   return res.json({success:false,message:"Email is Required"})
  }
  try {
  const user=await userModule.findOne({email});
  if(!user){
    return res.json({success:false,message:"User not found"})
  }
  const otp=String(Math.floor(100000+Math.random()*900000));
  user.reSetOtp=otp;
  user.reSetOtpExpireAt=Date.now()+ 5*60*1000;

  await user.save();
    const mailOptions={
      from:process.env.SENDER_EMAIL,
      to:user.email,
      subject:"Password Reset OTP",
      // text:`Your otp for resetting your password is  ${otp} . Use this otp to process with resetting your password.`
      html: PASSWORD_RESET_TEMPLATE.replace("{{otp}}",otp).replace("{{email}}",user.email)

    }

    await transpoter.sendMail(mailOptions);
    return res.send({success:true,message:"OTP send to your Email"})

  } catch (error) {
   return res.json({success:false,message:error.message})
  }
 
  
  
}
export const checkOtp=async (req,res)=>{
  const {email,otp}=req.body;
  const user=await userModule.findOne({email});
  if(user.reSetOtp ==="" || user.reSetOtp!==otp){
      return res.json({success:false,message:"Invalid OTP"})
    }else if(user.reSetOtpExpireAt<Date.now()){
      return res.json({success:false,message:"OTP Expired"})
    }else{
    return res.json({success:true,message:"correct OTP"}); 
    }
}
export const resetPassword=async (req,res)=>{
  const {email,otp,newPassword}=req.body;
  if(!email || !otp || !newPassword){
    return res.json({success:false,message:"Email , OTP , newPassword is required"})
  }

  try {
    const user=await userModule.findOne({email});
    if(!email){
      return res.json({success:false,message:"user not found"})
    }

    if(user.reSetOtp ==="" || user.reSetOtp!==otp){
      return res.json({success:false,message:"Invalid OTP"})
    }

    if(user.reSetOtpExpireAt<Date.now()){
      return res.json({success:false,message:"OTP Expired"})
    }

    const hashedPassword=await bcrypt.hash(newPassword,10); 
    user.password=hashedPassword;
    user.reSetOtp="";
    user.reSetOtpExpireAt=0;
    await user.save();
    return res.json({success:true,message:"Password Reseted Successfully"});
  } catch (error) {
    return res.json({success:false,message:error.message})
  }
}