import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import Home from "./components/Home"
import Project from "./components/Project"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/footer"


function App() {
  

  return (
  
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    
  )
}

export default App
