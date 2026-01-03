import React from 'react'
import './App.css'
import Registration from './registration/Registration'
import Login from './login/Login'
import Home from './home/Home'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  const isRegistered = localStorage.getItem("isRegistered");
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
      </Routes>
    </>
  )
}

export default App
