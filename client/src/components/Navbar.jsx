import React, { useContext } from 'react'
import logo from '../assets/logo.svg';
import arrow from '../assets/arrow_icon.svg';
import { useNavigate } from 'react-router-dom';
import { AppContent } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
const Navbar = () => {
  const navigator=useNavigate()
  const {userData,backendURL,setuserData,setisLogedIn} =useContext(AppContent)
  const logout= async ()=>{
    try {
      axios.defaults.withCredentials=true;
      const {data}=await axios.post(`${backendURL}/api/auth/logout`)
      data.success && setisLogedIn(false)
      data.success && setuserData(false)
      toast.success(data.message)
      navigator('/')
    } catch (error) {
      toast.error(error.message);
    }
  }

  const sendVerificationOtp=async ()=>{
    try {
      axios.defaults.withCredentials=true;
      const {data}=await axios.post(`${backendURL}/api/auth/send-verify-Otp`)
      if(data.success){
        toast.success(data.message);
        navigator('/email-verify')
      }
      else{
        toast.error(error.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <div className=' w-full flex justify-between items-center p:4 px-8 mx:py-6 mx:px-6 absoulte top-0'>
      <img src={logo} alt="logo" className='h-22 w-20 sm:w-29' />
      {userData?<div className='w-8 h-8 flex justify-center items-center bg-black text-white rounded-full relative group'>
        {userData.name[0].toUpperCase()}
        <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded p-10 '>
          <ul className='list-none m-0 p-2 bg-gray-100 text-sm'>
            {
            !userData.isAccountVerified && <li 
            onClick={sendVerificationOtp}
            className='py-1 px-2 m-2 hover:bg-gray-400 cursor-pointer rounded-2xl'>Verify Email</li>
            }
            
            <li
            onClick={logout}
            className='py-1 px-2 m-2 hover:bg-gray-400 cursor-pointer rounded-2xl pr-10'>Logout</li>
          </ul>
        </div>
      </div>:<button 
      onClick={()=>navigator('/login')}
      className='flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2 text-gray-800 hover:bg-gray-300 cursor-pointer transition-all'>Login <img src={arrow} alt="" /></button>}
      
    </div>
  )
}

export default Navbar
