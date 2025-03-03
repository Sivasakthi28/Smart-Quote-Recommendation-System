
/* import './App.css'
import Home from './Component/Home'
import About from './Component/About'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Services from './Component/Services'
import NoMatch from './Component/NoMatch'
import Order from './Component/Order'
import Product from './Component/Product'
import NewProduct from './Component/NewProduct'
import FeatProd from './Component/FeatProd'
import User from './Component/User'
import Signup from './Component/Signup'
import UserDet from './Component/UserDet'
import AuthProvider from './Component/auth'
import Profile from './Component/Profile'
import Login from './Component/Login'
import MobilePage from './Component/MobilePage'
import MobileUsers from './Component/MobileUsers'
import ReqAuth from './Component/ReqAuth'
import Mobile from './Component/Mobile'
const LazyAbout=React.lazy(()=>import('./Component/About'))
export default function App() {
return (
<AuthProvider>
<div className='App'>
<Navbar/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={
<React.Suspense fallback='Loading ... '>
<LazyAbout/>
</React.Suspense>}/>
<Route path='/services' element ={<Services/>}/>
<Route path='/order' element={<Order/>}/>
<Route path='*' element={<NoMatch/>}/>
<Route path='/product' element={<ReqAuth><Product/></ReqAuth>}>
<Route index element={<FeatProd/>}/>
<Route path='new' element={<NewProduct/>}/>
<Route path='featured' element={<FeatProd/>}/>
</Route>
<Route path='/user' element={<User/>}>
<Route path=':userId'element={<UserDet/>}/>
</Route>
<Route path='/profile' element={
<ReqAuth>
<Profile/>
</ReqAuth>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path='/mobile' element={<Mobile/>}/>
<Route path='/mobileusers' element={<MobileUsers/>}/>
<Route path='/mobile/:pid' element={<MobilePage/>}/>
</Routes>
</div>
</AuthProvider>
);
} */

/* /* import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Signup1 from './Component/Signup1';
import Login1 from './Component/Login1';
import Menu from './Component/Menu';
import Donate from './Component/Donate';
import Receiver from './Component/Receiver';
import Receive from './Component/Receive';
import './App.css';
function App() {
  return (
      <div className="App">
        <Routes>
        <Route path="/" element={<Signup1 />} />
          <Route path="/signup1" element={<Signup1 />} />
          <Route path="/login1" element={<Login1 />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/receiver" element={<Receiver />} />
          <Route path="/receive" element={<Receive />} />
        </Routes>
      </div>
    
  );
}

export default App; */


/* import React from "react";
import { Route,Routes } from "react-router-dom";
import Signup from "./source/Signup";
import Login from "./source/Login";
import Menu from "./source/Menu";
import Donate from "./source/Donate"
import Food from './source/Food'
import Receiver from './source/Receiver'
import Desc from './source/Desc'
import { AuthProvider } from "./source/Auth";
function App() {
  return (
    <AuthProvider>
    <div className="App">
     <Routes>
      <Route path='/' element={<Desc/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Menu' element={<Menu/>}/>
      <Route path='/donate' element={<Donate/>}/>
      <Route path='/receiver' element={<Receiver/>}/>
      <Route path='/food' element={<Food/>}/>
     
     </Routes>
    </div>
    </AuthProvider>
  );
}
export default App; */

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

/*   import React from 'react'
  import { Route,Routes } from "react-router-dom"
  import Home from './src2/Home'
  export default function App() {
    return (
      <div>
        <Routes>
        <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    )
  } */
  
