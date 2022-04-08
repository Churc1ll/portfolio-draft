import React from "react"
import socialLinks from "../constants/social_links"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-links social-links">
          {socialLinks.map(link => {
            const { url, id, icon } = link
            return (
              <a href={url} key={id} className="social-link">
                {icon}
              </a>
            )
          })}
        </div>
        <h4>
          copiright &copy; {new Date().getFullYear()}
          <span> Chuchill</span> all rights reserved
        </h4>
      </div>
    </footer>
  )
}

export default Footer
