import React, { useContext, useState } from 'react'
import logo from '../assets/logo.svg';
import person_icon from '../assets/person_icon.svg';
import email_icon from '../assets/mail_icon.svg';
import password_icon from '../assets/lock_icon.svg';
import {useNavigate} from 'react-router-dom'
import { AppContent } from '../context/AppContext';
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
  const navigate=useNavigate();
  const {backendURL,setisLogedIn,getUserData}=useContext(AppContent)
  const [state,setState]=useState('sign up');
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');


  const OnSubmitHandler=async (e)=>{
      e.preventDefault();
    try {
      axios.defaults.withCredentials = true;
      if(state==='sign up'){
      const {data}=  await axios.post(`${backendURL}/api/auth/register`,{name,email,password});
      if(data.success){
        setisLogedIn(true);
        getUserData()
        navigate('/')
      }else{
      toast.error(data.message);
      }
      }else{
        const {data}=  await axios.post(`${backendURL}/api/auth/login`,{email,password})
      if(data.success){
        setisLogedIn(true);
        getUserData()
        navigate('/')
      }else{
      toast.error(data.message);
      }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong.');
    }
  }
  return (
    <div className='flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-blue-200 to-purple-200'>
      <img onClick={()=>navigate('/')} src={logo} alt="" className='absolute h-22 w-20 sm:w-29 left-5 top-0 cursor-pointer'/>
      <div className='bg-slate-900 p-10 rounded-lg shadow-ld w-full sm:w-96 text-indigo-300 text-sm'>
        <h2 className='text-white text-3xl text-center mb-3 '>{state==='sign up'? 'Create Account' : 'Login Account'}</h2>
        <p className='text-blue-300 text-center mb-6'>{state==='sign up'? 'Create your Account' : 'Login to your  Account'}</p>
        <form onSubmit={OnSubmitHandler}>
          {state ==='sign up' && (
            <div className='mb-4 flex text-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]' >
            <img className='' src={person_icon} alt="" />
            <input className='outline-none bg-transparent' 
            onChange={(e)=>setName(e.target.value)} 
            value={name} type="text" 
            placeholder='Full Name' required />
          </div>
        )}
          
          <div className='mb-4 flex text-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]' >
            <img className='' src={email_icon} alt="" />
            <input className='outline-none bg-transparent' 
            onChange={(e)=>setEmail(e.target.value)} 
            value={email}
            type="email" 
            placeholder='Email Id' required />
          </div>
          <div className='mb-4 flex text-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]' >
            <img className='' src={password_icon} alt="" />
            <input className='outline-none bg-transparent' 
            onChange={(e)=>setPassword(e.target.value)} 
            value={password}
            type="password" 
            placeholder='Password' required />
          </div>
           {state!=='sign up' && (
            <p 
            onClick={()=>navigate('/reset-password')}
            className='mb-4 text-indigo-500 cursor-pointer'>Forgot password?</p>
            )}
              <button type='submit' className='text-white w-full rounded-full py-2.5 bg-gradient-to-br from-indigo-500 to-indigo-900 cursor-pointer'>{state}</button>
              
          {state==='sign up' && (
            <p className='text-gray-400 text-center text-xs mt-4'>Already have Account?{' '}
            <span 
            onClick={()=>{setState('Log in')}}
            className='text-blue-400 cursor-pointer underline'>Login here</span></p>
            )}
          {state!=='sign up' && (
          <p className='text-gray-400 text-center text-xs mt-4'>Don't have an Account?{' '}
          <span
          onClick={()=>{setState('sign up')}}
          className='text-blue-400 cursor-pointer underline'>Sign up</span></p>
        )}
        </form>
      </div>
    </div>
  )
}

export default Login
