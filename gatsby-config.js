/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

// const qs = require("qs")

// const quer = qs.stringify(
//   {
//     populate: "*",
//     pagination: {
//       pageSize: 10,
//       page: 1,
//     },
//     publicationState: "live",
//     locale: ["en"],
//   },
//   {
//     encodeValuesOnly: true, // prettify url
//   }
//   )

// const getData = async () => {
//   try {
//     const request = await fetch(`/api/projects?${quer}`)
//     // const data = await request.json()
//     console.log(request.url)
//   } catch (error) {
//     console.log(error)
//   }
// }
// getData()

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    { name: "job", endpoint: "api/jobs?populate=*" },
    // "project",
    { name: "project", endpoint: "api/projects?populate=image,stack" },
    // { name: "project", endpoint: "api/projects?populate=stack" },
  ],
  singleTypes: [{ name: "about", endpoint: "api/about?populate=image,stack" }],
  // singleTypes: [`about`],
}

module.exports = {
  /* Your site config here */

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },

    // resolve: `gatsby-source-strapi`,
    // options: {
    // apiURL: `http://localhost:1337/api`,
    // queryLimit: 1000, // Default to 100
    // collectionTypes: [`job`],
    // components: [description]
  ],
}
