import React, { useState } from 'react';
import './Home.css'
import { useNavigate } from 'react-router-dom'
export default function Home() {
    const navigate = useNavigate();
    return (
      <div className="div1">
        <div className="div2">
          <h1 className='h11'>Welcome to A Smart Quote Recommendation System</h1>
          <p className='p1'>Find the perfect quote to match your mood!</p>
          <div className="div3">
            <button className="b1" onClick={() => navigate('/signup')}>Signup</button>
            <button className="b2" onClick={() => navigate('/login')}>Login</button>
          </div>
        </div>
      </div>
    );
}
