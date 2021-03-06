import React from "react"
import logo from "../assets/images/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import pageLinks from "../constants/links"
import { Link } from "gatsby"
const Navbar = ({ toggleButton }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="webdev" />
          </Link>
          <button type="button" className="toggle-btn" onClick={toggleButton}>
            {<FaAlignRight />}
          </button>
        </div>
        <div className="nav-links">
          {pageLinks.map(link => {
            const { id, text, url } = link
            return (
              <Link key={id} to={url}>
                {text}{" "}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
