import userModule from "../modules/userModule.js";

export const getUserData=async (req,res)=>{
  try {
    const {userID}=req.body;
    const user=await userModule.findById(userID)
    if(!user){
    return res.json({success:false,message:"User not found"})
    }

    res.json({
      success:true,
      userData:{
        name:user.name,
        isAccountVerified:user.isAccountVerified,
      }
    })
  } catch (error) {
    return res.json({success:false,message:error.message})
  }
}

export default getUserData;