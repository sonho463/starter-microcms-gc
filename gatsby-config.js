const path = require(`path`)

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
