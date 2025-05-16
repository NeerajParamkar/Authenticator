import React, { useContext } from 'react'
import headerimg from '../assets/header_img.png'
import handwave from '../assets/hand_wave.png'
import arrow from '../assets/arrow_icon.svg';
import { AppContent } from '../context/AppContext';
const Header = () => {
  const {userData}=useContext(AppContent)
  return (
    <div className='justify-items-center mt-3'>
      <img src={headerimg} alt="header_image" className='w-39 h-39 rounded-full mb-6 '/>
      <h2 className='flex text-3xl gap-2'>Hey {userData ? userData.name : 'Developer' } <img src={handwave} alt="HandWave" className='w-8 aspect-square'/></h2>
      <h1 className='text-6xl text-black m-4'>Wellcome to our Website</h1>
      <p className='m-4 flex justify-center'>Lets start with a quick product tour and we will have you up and running in no time!</p>
      <button className=' flex px-6 py-2 rounded-full text-gray-800 border border-gray-500 cursor-pointer hover:bg-gray-300 gap-2'>Get Started<img src={arrow} alt="" /></button>
    </div>
  )
}

export default Header
