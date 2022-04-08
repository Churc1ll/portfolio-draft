import React, { useState } from "react"
import Navbar from "./Navbar"
import "../assets/css/main.css"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleButton = () => setIsOpen(!isOpen)
  return (
    <>
      <Navbar toggleButton={toggleButton} />
      <Sidebar toggleButton={toggleButton} isOpen={isOpen} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
