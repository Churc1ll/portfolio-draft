import React from "react"
import links from "../constants/links"
import socialLinks from "../constants/social_links"
import { Link } from "gatsby"
import { FaTimes } from "react-icons/fa"
const Sidebar = ({ toggleButton, isOpen }) => {
  return (
    <aside className={isOpen ? "sidebar show-sidebar" : "sidebar"}>
      <button className="close-btn" type="button" onClick={toggleButton}>
        <FaTimes />
      </button>
      <div className="side-container">
        <ul className={isOpen && "sidebar-links"}>
          {links.map(link => {
            const { id, url, text } = link
            return (
              <li key={id}>
                <Link to={url} onClick={toggleButton}>
                  {text}
                </Link>
              </li>
            )
          })}
        </ul>
        <ul className={isOpen && "sidebar-icons social-links"}>
          {socialLinks.map(link => {
            const { id, url, icon } = link
            return (
              <li key={id}>
                <a href={url} className="social-link">
                  {icon}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
