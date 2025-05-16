import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx' 
import EmailVerify from './pages/EmailVerify.jsx' 
import ResetPassword from './pages/ResetPassword.jsx' 
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/email-verify' element={<EmailVerify/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
      </Routes>
    </div>
  )
}

export default App
