import mongoose  from "mongoose";

const mongooseDB= async()=>{
  mongoose.connection.on('connected',()=> console.log("Database connected"));
  await mongoose.connect(`${process.env.MONGODB_URL}/Authentication`)
}

export default mongooseDB;