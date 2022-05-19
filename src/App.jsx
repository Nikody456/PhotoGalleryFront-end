import React from 'react'
import MainPage from './components/MainPage'
import NavBar from './components/NavBar'
import More from './components/More'
import { Routes, Route } from "react-router-dom"
import Contact from './components/Contact'



export default function App() {

  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<NavBar />} />
        <Route path="/more" element={<More />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}
