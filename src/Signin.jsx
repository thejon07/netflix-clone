import React from 'react'
import "./signin.css"
import logo from "./assets/netflixlogo.png"

export default function Signin() {
  return (
    <div>
      <div className='signin'>
        <img src={logo} className='logo' alt="" /><br/>
         <input type="text" id='input' name='input' placeholder='enter your email or mobile number' /><br/>
         <input type="password" id='password'  name="password" placeholder='type your password' /><br/>
         <button className='button'>sign up</button>
         <p className='p'>Already have an account? <span className='span'>sign in</span></p>
      </div>
    </div>
  )
}
