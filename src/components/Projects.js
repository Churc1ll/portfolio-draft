import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
const Projects = props => {
  const { title, showLink, projects } = props
  const [{ data }] = projects
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {data.map((project, i) => {
          return <Project key={project.id} index={i} {...project} />
        })}
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          projects
        </Link>
      )}
    </section>
  )
}

export default Projects
