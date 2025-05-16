import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AppContent=createContext();
export const AppContextProvider=(props)=>{
  const backendURL=import.meta.env.VITE_BACKEND_URL;
  const [isLogedIn,setisLogedIn]=useState(false);
  const [userData,setuserData]=useState(false);
  const getUserData=async ()=>{
    try {

      const {data}=await axios.get(`${backendURL}/api/user/data`);
      data.success ? setuserData(data.userData) :toast.error(data.message);
    } catch (error) {
      toast.error(data.message);
    }
  }
    const value={
      backendURL,
      isLogedIn,setisLogedIn,
      userData,setuserData,
      getUserData
    }
  return(
    <AppContent.Provider value={value}>
      {props.children}
    </AppContent.Provider>
  )
}