import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Welcome from './pages/Welcome'

function App() {
  const username = localStorage.getItem('username')

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    window.location.href = '/'
  }

  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Home username={username} onLogout={handleLogout} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
