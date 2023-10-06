import React from 'react'
import Homepg from './Homepage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bookform from './Bookform'



function App() {
  
  return (
    <div>
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepg/>} />
    <Route path="/book-form" element={<Bookform/>} />
    </Routes>
   
    </BrowserRouter>
    
    </div>
  )
}

export default App

