import { graphql } from "gatsby"
import React from "react"
import Seo from "../components/Seo"

const TagTemplate = ({ data, pageContext }) => {
  return (
    <>
      <main className="project-template-page">
        <h2>{pageContext.title}</h2>
        <p>{pageContext.description}</p>
      </main>
    </>
  )
}
// export const query = graphql`
//   query getSingleProject($title: String) {
//     strapiProject(
//       data: { elemMatch: { attributes: { title: { eq: $title } } } }
//     ) {
//       data {
//         attributes {
//           description
//           title
//           image {
//             data {
//               attributes {
//                 localFile {
//                   publicURL
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
export default TagTemplate
