import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { useState } from "react"

// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

// let url = `${process.env.STRAPI_API_URL}/images`
// console.log(url)
// let response = await fetch(url, { method: "GET" })
// let answer = await response.json()
// console.log(response)

const Jobs = () => {
  const [index, setIndex] = useState(0)
  const allData = useStaticQuery(query)
  const {
    allStrapiJob: { nodes },
  } = allData
  const { data } = nodes[0]

  const {
    attributes: { descriptions, company, date, position },
  } = data[index]

  return (
    <section className="section ">
      <Title title="exprerience" />
      <div className="jobs-center">
        <div className="btn-container">
          {data.map((jobs, i) => {
            const {
              attributes: { company },
            } = jobs
            return (
              <button
                key={i}
                className={i === index ? "job-btn active-btn" : "job-btn"}
                onClick={() => setIndex(i)}
              >
                {company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {descriptions.map(desc => {
            const { id, description } = desc
            return (
              <div key={id} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{description}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        More info
      </Link>
    </section>
  )
}
const query = graphql`
  query MyQuery {
    allStrapiJob(
      sort: { order: DESC, fields: data___attributes___publishedAt }
    ) {
      nodes {
        data {
          attributes {
            descriptions {
              description
              id
            }
            position
            company
            date
          }
        }
      }
    }
  }
`
export default Jobs
