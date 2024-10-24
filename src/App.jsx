import React, { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react';

import './index.scss'
import Work from './pages/work/work/Work';
import Header from './components/header/Header';
import Legal from './pages/legal/Legal';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Header/>
          <Routes>
            <Route path="/" element={<Work/>} />  
            <Route path="/:id" element={<Work/>} />  
            <Route path="/Legal" element={<Legal/>} />       
            <Route path="*" element={<Work/>} />      
          </Routes>
      </BrowserRouter>
      <Analytics/>
      </>
  )
}

export default App
