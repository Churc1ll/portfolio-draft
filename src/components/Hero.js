import React from "react"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
// import heroImg from "../assets/images/hero.svg"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>Cogito</h1>
            <h4>Ergo sum</h4>
            <Link className="btn" to="/contact">
              Contact
            </Link>
            <div className="social-links">
              {socialLinks.map(link => {
                const { id, icon, url } = link
                return (
                  <a href={url} key={id} className="social-link">
                    {icon}
                  </a>
                )
              })}
            </div>
          </div>
        </article>
        <StaticImage
          src="../assets/images/hero.svg"
          alt="portfolio"
          class="hero-img"
          placeholder="blurred"
        />
      </section>
    </header>
  )
}

export default Hero
