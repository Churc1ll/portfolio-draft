import React from "react"
import Seo from "../components/Seo"

const TagTemplate = ({ data, pageContext }) => {
  return (
    <>
      <Seo
        title={pageContext.title.toUpperCase()}
        description={pageContext.description}
      />
      <main className="project-template-page">
        <h2>{pageContext.title}</h2>
        <p>{pageContext.description}</p>
      </main>
    </>
  )
}
export default TagTemplate
