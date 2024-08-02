import React from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import FooterEnd from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

function App() {

  // 404-page
  const location = useLocation();

  return (
    <>
      {/* To Prevent Header from Appearing on the 404 Page */}
      {location.pathname !== '/not-found' && <Header />}
      {/* To Prevent Header from Appearing on the 404 Page */}


      {/* Routes and Route */}
      <Routes>
        {/* Home-Page */}
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />

        {/* Login-Page */}
        <Route path="/login" element={<Login />} />

        {/* NotFound-Page */}
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />

      </Routes>
      {/* Routes and Route */}


      {/* To Prevent Footer from Appearing on the 404 Page */}
      {location.pathname !== '/not-found' && <FooterEnd />}
      {/* To Prevent Footer from Appearing on the 404 Page */}
    </>
  )
}

export default App
