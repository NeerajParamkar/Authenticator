import React, { useState } from 'react'
import logo from '../assets/logo.svg';
import person_icon from '../assets/person_icon.svg';
import email_icon from '../assets/mail_icon.svg';
import password_icon from '../assets/lock_icon.svg';

const Login = () => {
  const [state,setState]=useState('sign up');
  return (
    <div className='flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-blue-200 to-purple-200'>
      <img src={logo} alt="" className='absolute h-22 w-20 sm:w-29 left-5 top-0 cursor-pointer'/>
      <div className='bg-slate-900 p-10 rounded-lg shadow-ld w-full sm:w-96 text-indigo-300 text-sm'>
        <h2 className='text-white text-3xl text-center mb-3 '>{state==='sign up'? 'Create Account' : 'Login Account'}</h2>
        <p className='text-blue-300 text-center mb-6'>{state==='sign up'? 'Create your Account' : 'Login to your  Account'}</p>
        <form action="">
          {state ==='sign up' && (
            <div className='mb-4 flex text-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]' >
            <img className='' src={person_icon} alt="" />
            <input className='outline-none bg-transparent' type="text" placeholder='Full Name' required />
          </div>
        )}
          
          <div className='mb-4 flex text-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]' >
            <img className='' src={email_icon} alt="" />
            <input className='outline-none bg-transparent' type="email" placeholder='Email Id' required />
          </div>
          <div className='mb-4 flex text-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]' >
            <img className='' src={password_icon} alt="" />
            <input className='outline-none bg-transparent' type="password" placeholder='Password' required />
          </div>
           {state!=='sign up' && (
            <p className='mb-4 text-indigo-500 cursor-pointer'>Forgot password?</p>
            )} 
            {state==='sign up' && (
              <button className='text-white w-full rounded-full py-2.5 bg-gradient-to-br from-indigo-500 to-indigo-900 cursor-pointer'>Sign up</button>
              )}
            {state!=='sign up' && (
              <button className='text-white w-full rounded-full py-2.5 bg-gradient-to-br from-indigo-500 to-indigo-900 cursor-pointer'>Login</button>
              )}
          
          {state==='sign up' && (
            <p className='text-gray-400 text-center text-xs mt-4'>Already have Account?{' '}
            <span className='text-blue-400 cursor-pointer underline'>Login here</span></p>
            )}
          {state!=='sign up' && (
          <p className='text-gray-400 text-center text-xs mt-4'>Don't have an Account?{' '}
          <span className='text-blue-400 cursor-pointer underline'>Sign up</span></p>
        )}
          
          
        </form>
      </div>
    </div>
  )
}

export default Login
