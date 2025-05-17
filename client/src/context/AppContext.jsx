import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContent=createContext();
export const AppContextProvider=(props)=>{

  axios.defaults.withCredentials=true;

  const backendURL=import.meta.env.VITE_BACKEND_URL;
  const [isLogedIn,setisLogedIn]=useState(false);
  const [userData,setuserData]=useState(false);
  const getUserData=async ()=>{
      axios.defaults.withCredentials = true;
    try {

      const {data}=await axios.get(`${backendURL}/api/user/data`);
      data.success ? setuserData(data.userData) :toast.error(data.message);
    } catch (error) {
      toast.error(data.message);
    }
  }
  useEffect(()=>{
    getAuthState();
  },[])
    const value={
      backendURL,
      isLogedIn,setisLogedIn,
      userData,setuserData,
      getUserData
    }

    const getAuthState=async ()=>{
      try {
        const {data}= await axios.get(`${backendURL}/api/auth/is-auth`)
        if(data.success){
          setisLogedIn(true)
          getUserData()
        }
      } catch (error) {
        toast.error(error.message)
      }
    }
  return(
    <AppContent.Provider value={value}>
      {props.children}
    </AppContent.Provider>
  )
}