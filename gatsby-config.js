/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

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
  siteMetadata: {
    title: `template portfolio`,
    description: `awesome portfolio build with Gatsby and Strapi`,
    titleTemplate: `%s | Web dev`,
    url: `https://portfolio-drafts.netlify.app`,
    twitterUsername: `@dart_vader`,
    image: `/mainImg.png`,
  },
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
  ],
}
