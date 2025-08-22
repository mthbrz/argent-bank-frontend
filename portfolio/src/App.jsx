import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Home from './pages/home.jsx'
import Projects from './pages/projects.jsx'
import Contact from './pages/contact.jsx'
import Error from './pages/error.jsx'
import Navbar from './components/jsx/navbar.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App

