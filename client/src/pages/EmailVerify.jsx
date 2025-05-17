import React, { useContext, useEffect } from 'react'
import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { AppContent } from '../context/AppContext';
const EmailVerify = () => {
    axios.defaults.withCredentials=true;
    const {backendURL,isLogedIn,getUserData,userData}=useContext(AppContent)
    const navigate=useNavigate();
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

    const onSubmitHandler=async (e)=>{
      try {
        e.preventDefault();
        const otpArray=inputRef.current.map(e=>e.value)
        const otp=otpArray.join('')
        const {data}=await axios.post(`${backendURL}/api/auth/verify-Email`,{otp})
        if(data.success){
          toast.success(data.message)
          getUserData()
          navigate('/')
        }
        else{
        toast.error(data.message)
        }
      } catch (error) {
        toast.error(error.message)
      }
    }
    useEffect(()=>{
      isLogedIn && userData && userData.isAccountVerified && navigate('/')
    },[isLogedIn,userData])
  return (
    <div className='flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-blue-200 to-purple-400'>
      <img onClick={()=>navigate('/')} src={logo} alt="" className='absolute h-22 w-20 sm:w-29 left-5 top-0 cursor-pointer'/>
      <form 
      onSubmit={onSubmitHandler}
      className='bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm'>
        <h1 className='text-white text-2xl font-semibold text-center mb-4'>Email Verify Otp</h1>
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
        <button className='w-full py-3 bg-gradient-to-r from-indigo-500 to-indigo-900 rounded-full text-white'>Verify Email</button>
      </form>
    </div>
  )
}

export default EmailVerify