import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ author, charset, description, siteUrl, title, lang }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            title
            lang
          }
        }
      }
    `
  )

  return (
    <Helmet>
      <html lang={site.siteMetadata.lang} />
      <title>{site.siteMetadata.title}</title>
      <meta name="description" content={site.siteMetadata.description} />
    </Helmet>
  )
}

export default SEO
