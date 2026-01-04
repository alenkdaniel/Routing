import React from 'react'
import './App.css'
import Registration from './registration/Registration'
import Login from './login/Login'
import Home from './home/Home'
import { Route, Routes } from 'react-router-dom'

const App = () => {

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
