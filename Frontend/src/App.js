import React from 'react'
import { Route,Routes } from "react-router-dom"
import Home from './src/Home'
import Signup from './src/Signup'
import Login from './src/Login'
import MoodMenu from './src/MoodMenu'
import { AuthProvider } from "./src/Auth"
import Quotes from './src/Quotes'
export default function App() {
  return (
    <AuthProvider>
    <div className='App'>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/moodMenu'element={<MoodMenu/>}/>
      <Route path='/quotes' element={<Quotes/>}/>
      </Routes>
    </div>
    </AuthProvider>
  )
}
  
