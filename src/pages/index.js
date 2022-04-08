import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
const IndexPage = ({ data }) => {
  const {
    allStrapiProject: { nodes: projects },
  } = data
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Jobs />
        <Projects title="featured projects" showLink projects={projects} />
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProject(
      filter: {
        data: { elemMatch: { attributes: { featured: { eq: true } } } }
      }
    ) {
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
export default IndexPage
