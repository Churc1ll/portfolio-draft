import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
const ProjectsPage = ({
  data: {
    allStrapiProject: { nodes: projects },
  },
}) => {
  return (
    <>
      <main>
        <section className="projects-page">
          <Projects title="all projects" projects={projects} />
        </section>
      </main>
    </>
  )
}
export const query = graphql`
  {
    allStrapiProject {
      nodes {
        data {
          attributes {
            title
            image {
              data {
                attributes {
                  localFile {
                    childrenImageSharp {
                      gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
                    }
                  }
                }
              }
            }
            stack {
              id
              title
            }
            featured
            description
            slug
            url
            github
          }
          id
        }
      }
      totalCount
    }
  }
`
export default ProjectsPage
