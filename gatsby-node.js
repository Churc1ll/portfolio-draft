const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query getTitles {
      allStrapiProject {
        nodes {
          data {
            attributes {
              title
              slug
              description
            }
          }
        }
      }
    }
  `)
  result.data.allStrapiProject.nodes.forEach(node => {
    node.data.forEach(d => {
      createPage({
        path: `/projects/${d.attributes.slug}`,
        component: path.resolve(`src/templates/tag-template.js`),
        context: {
          title: d.attributes.title,
          slug: d.attributes.slug,
          description: d.attributes.description,
        },
      })
    })
  })
}
