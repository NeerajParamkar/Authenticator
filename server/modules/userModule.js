import mongoose  from "mongoose";

const userSchema= new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  },
  verifyOTP:{
    type:String,
    default:''
  },
  verifyOtpExpire:{
    type:Number,
    default:0
  },
  isAccountVerified:{
    type:Boolean,
    default:false
  },
  reSetOtp:{
    type:String,
    default:'',
  },
  reSetOtpExpireAt:{
    type:Number,
    default:0,
  }
})

const userModule=mongoose.models.user || mongoose.model('user',userSchema);

export default userModule;