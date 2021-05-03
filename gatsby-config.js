const path = require(`path`)

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `ほるもんTのブログ`,
    siteUrl: "https://blog-by-microcms.netlify.app",
    description: `これは、GatsbyとmicroCMSで作ったブログです。`,
		lang: `ja`,
  },
  /* Your site config here */
  plugins: [
		{
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.MICROCMS_API_KEY,
        serviceId: process.env.MICROCMS_SERVICE_ID,
        apis: [{
          endpoint: 'posts',
        }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
		`gatsby-plugin-react-helmet`,
  ],
}
