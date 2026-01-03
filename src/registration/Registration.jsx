import React, { useState } from 'react'
import './Reg.css'
import {useNavigate } from 'react-router-dom'

const Registration = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()
 const handleSubmit = (e) => {
  e.preventDefault()

  if (!name || !email || !password) {
    setError("Please fill all fields")
    return
  }

  const users = JSON.parse(localStorage.getItem("users")) || []

  const userExists = users.find(user => user.email === email)

  if (userExists) {
    setError("User already registered")
    return
  }

  const newUser = { name, email, password }

  users.push(newUser)
  localStorage.setItem("users", JSON.stringify(users))

  setError("")
  navigate("/login")
}

  
  return (
    <div className='main-conatiner'>
      <div className='form-conatiner'>
        <h1>Registration Form</h1>
         {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className='name-div'>
            <label htmlFor="">Full Name</label>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className='email-div'>
            <label htmlFor="">Email Address</label>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className='password-div'>
            <label htmlFor="">Password</label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <button type='submit'>Sign up</button>
        </form>
      </div>
    </div>
  )
}

export default Registration
