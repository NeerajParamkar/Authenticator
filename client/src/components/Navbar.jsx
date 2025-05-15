import React from 'react'
import logo from '../assets/logo.svg';
import arrow from '../assets/arrow_icon.svg';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigator=useNavigate()
  return (
    <div className=' w-full flex justify-between items-center p:4 px-8 mx:py-6 mx:px-6 absoulte top-0'>
      <img src={logo} alt="logo" className='h-22 w-20 sm:w-29' />
      <button 
      onClick={()=>navigator('/login')}
      className='flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2 text-gray-800 hover:bg-gray-300 cursor-pointer transition-all'>Login <img src={arrow} alt="" /></button>
    </div>
  )
}

export default Navbar
