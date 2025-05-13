import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import userModule from "../modules/userModule.js";


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
    return res.json({success:true});
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

    return res.json({success:true});
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

    return res.json({success:false,message:"logged Out"})
  } catch (error) {
    res.json({success:false,message:error.message});
  }
}