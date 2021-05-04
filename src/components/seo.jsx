import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = (props) => {
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

	const title =
		props.pageTitle
			? `${props.pageTitle} | ${site.siteMetadata.title}`
			: site.siteMetadata.title
	const description =
		props.pageDescription || site.siteMetadata.description

  return (
    <Helmet>
      <html lang={site.siteMetadata.lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}

export default SEO
