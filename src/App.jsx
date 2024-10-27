import React, { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react';

import './index.scss'
import Work from './pages/work/work/Work';
import Header from './components/header/Header';
import Legal from './pages/legal/Legal';
import Footer from './components/header/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Header/>
          <Routes>  
            <Route path="/Grooming" element={<Work/>} /> 
            <Route path="/Grooming/:id" element={<Work/>} /> 
            <Route path="/Women" element={<Work/>} />
            <Route path="/Women/:id" element={<Work/>} /> 
            <Route path="/Kids" element={<Work/>} /> 
            <Route path="/Kids/:id" element={<Work/>} /> 
            <Route path="/Advertising" element={<Work/>} /> 
            <Route path="/Advertising/:id" element={<Work/>} />
            <Route path="/Celeb" element={<Work/>} /> 
            <Route path="/Celeb/:id" element={<Work/>} />
            <Route path="/Legal" element={<Legal/>} /> 
            <Route path="/Legal/:id" element={<Legal/>} /> 
            <Route path="/:id" element={<Work/>} />
            <Route path="/" element={<Work/>} />      
            {/* <Route path="*" element={<Navigate to={'/'}/>} />       */}
          </Routes>
      <Footer/>
      </BrowserRouter>
      <Analytics/>
      </>
  )
}

export default App
