import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Seo from "../components/Seo"

const About = ({ data }) => {
  console.log(data)
  const {
    strapiAbout: {
      data: {
        attributes: {
          stack,
          info,
          title,
          image: {
            data: {
              attributes: {
                localFile: { publicURL },
              },
            },
          },
        },
      },
    },
  } = data
  return (
    <>
      <Seo title="About" />
      <section className="about-page">
        <div className="section-center about-center">
          <img src={publicURL} alt={title} className="about-img-svg" />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(s => {
                const { title, id } = s
                return <span key={id}>{title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
export const query = graphql`
  {
    strapiAbout {
      data {
        attributes {
          stack {
            title
            id
          }
          info
          title
          image {
            data {
              attributes {
                localFile {
                  publicURL
                }
              }
            }
          }
        }
      }
    }
  }
`
export default About
