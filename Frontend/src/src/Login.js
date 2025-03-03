import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'
import './Login.css'
export default function Login() {
  const navigate=useNavigate()
    const[username,setusername]=useState('')
    const[password,setpassword]=useState('')
    const[message,setmessage]=useState('')
    const[formData,setFormData]=useState({
      'username':'',
      'password':''
    })
    const Auth=useAuth()
    const handleLogin=(e)=>{
      setFormData({ username, password });
        Auth.Login(username,password)
        e.preventDefault()
        console.log(formData)
        axios.post(`http://localhost:3000/users`,formData)
        .then(res=>{
            setmessage('Login Successfull Redirecting to Home Page......')
            setTimeout(()=>{
                navigate('/MoodMenu')},3000)
                console.log(res)
            })
            .catch(err=>{
                setmessage('Something went wrong')
                console.log(err)
            })
            navigate('/MoodMenu')
    }      
  return (
    <div className='div4' >
      <form className='form1'>
        <label className='l1' htmlFor='user'>Username:</label><br/>
        <input className='i1' type='text' id='user' value={username} onChange={(e)=>setusername(e.target.value)}/><br/><br/>
        <label className='l2' htmlFor='pass'>Password:</label><br/>
        <input className='i2' type='password'id='pass' value={password} onChange={(e)=>setpassword(e.target.value)}/><br/><br/>
        <button  className='b3' onClick={handleLogin}>Login</button>
        </form>
    </div>
    
  )
}