import React, { useContext, useState } from 'react'
import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import email_icon from '../assets/mail_icon.svg';
import password_icon from '../assets/lock_icon.svg';
import { AppContent } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const ResetPassword = () => {
  const {backendURL,isLogedIn,getUserData,userData}=useContext(AppContent)
  axios.defaults.withCredentials=true
  const navigate=useNavigate();
  const [email,setEmail]=useState('')
  const [newPassword,setnewPassword]=useState('')
  const [isEmailSend,setisEmailSend]=useState('')
  const [otp,setotp]=useState('')
  const [isOtpSubmited,setisOtpSubmited]=useState('')

  const inputRef=React.useRef([])
      const handleInput=(e,index)=>{
        if(e.target.value.length>0 && index<inputRef.current.length-1){
          inputRef.current[index+1].focus()
        }
      }
      const handleKeyDown=(e,index)=>{
        if(e.key==='Backspace' && e.target.value==='' && index>0){
          inputRef.current[index-1].focus()
          
        }
      }
      const handlePaste=(e)=>{
        const paste=e.clipboardData.getData('text')
        const pasteArray=paste.split('');
        pasteArray.forEach((char,index)=>{
          if(inputRef.current[index]){
            inputRef.current[index].value=char
          }
        })
      }

      const onSubmitEmail=async (e)=>{
        e.preventDefault(); 
        try {
          const {data}=await axios.post(`${backendURL}/api/auth/send-reset-otp`,{email})
          data.success? toast.success(data.message) : toast.error(data.message)
          data.success && setisEmailSend(true)
        } catch (error) {
          toast.error(error.message)
        }
      }
      
      const onSubmitOtp=async (e)=>{
        e.preventDefault();
        try {
        const otpArray=inputRef.current.map(e=>e.value);
        const newotp= otpArray.join('')
        setotp(newotp);
        const {data}=await axios.post(`${backendURL}/api/auth/checkotp`,{email,otp:newotp})
        data.success && setisOtpSubmited(true)
        data.success ? toast.success(data.message) : toast.error(data.message)
        } catch (error) {
          toast.error(error.message)
        }
        
      }

      const onSubmitnewPassword=async (e)=>{
        e.preventDefault();
        try {
          const {data}=await axios.post(`${backendURL}/api/auth/reset-password`,{email,otp,newPassword})
          data.success ? toast.success(data.message) : toast.error(data.message)
          data.success && navigate('/')
        } catch (error) {
           toast.error(error.message)
        }
      }
  return (
    <div className='flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-blue-200 to-purple-400'>
      <img onClick={()=>navigate('/')} src={logo} alt="" className='absolute h-22 w-20 sm:w-29 left-5 top-0 cursor-pointer'/>
      {!isEmailSend && 
      <form onSubmit={onSubmitEmail}
      className='bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm'>
        <h1 className='text-white text-2xl font-semibold text-center mb-4'>Reset Password</h1>
        <p className='text-center mb-6 text-indigo-600'>Enter your resistered email address</p>
        <div className='mb-4 flex text-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]' >
                    <img className='' src={email_icon} alt="" />
                    <input className='outline-none bg-transparent text-white' 
                    onChange={(e)=>setEmail(e.target.value)} 
                    value={email}
                    type="email" 
                    placeholder='Email Id' />
                  </div>
        <button type='submit' className='text-white w-full rounded-full py-2.5 bg-gradient-to-br from-indigo-500 to-indigo-900 cursor-pointer'>Submit</button>
      </form>
      
      }
      {!isOtpSubmited && isEmailSend &&
      <form 
      onSubmit={onSubmitOtp}
      className='bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm'>
        <h1 className='text-white text-2xl font-semibold text-center mb-4'>Reset Password OTP</h1>
        <p className='text-center mb-6 text-indigo-600'>Enter the 6-digit code send to your email id.</p>
        <div className='flex justify-between mb-8' onPaste={handlePaste}>
        {Array(6).fill(0).map((_,index)=>(
          <input type="text" maxLength='1' key={index} required
          className='w-12 h-12 bg-[#333A5c] text-white text-center text-xl rounded-md'
          ref={e=>inputRef.current[index]=e}
          onInput={(e)=>handleInput(e,index)}
          onKeyDown={(e)=>handleKeyDown(e,index)}
          />
        ))}  
        </div>
        <button className='w-full py-3 bg-gradient-to-r from-indigo-500 to-indigo-900 rounded-full text-white cursor-pointer'>Submit</button>
      </form>
      }

      {isOtpSubmited && isEmailSend && 
      <form 
      onSubmit={onSubmitnewPassword}
      className='bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm'>
        <h1 className='text-white text-2xl font-semibold text-center mb-4'>New Password</h1>
        <p className='text-center mb-6 text-indigo-600'>Enter new password</p>
        <div className='mb-4 flex text-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]' >
                    <img className='' src={password_icon} alt="" />
                    <input className='outline-none bg-transparent text-white' 
                    onChange={(e)=>setnewPassword(e.target.value)} 
                    value={newPassword}
                    type="password" 
                    placeholder='New Password' required />
                  </div>
        <button type='submit' className='text-white w-full rounded-full py-2.5 bg-gradient-to-br from-indigo-500 to-indigo-900 cursor-pointer'>Submit</button>
      </form>
      }
    </div>
  )
}

export default ResetPassword
