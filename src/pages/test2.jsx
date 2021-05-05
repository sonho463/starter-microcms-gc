import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import microCmsImage from "../components/microcms-img"

export default function Test2({ data }) {
  const width = "w=100"
  const url =
    "https://images.microcms-assets.io/assets/a20dd30d3f4d43d8814295dae8cee134/dfca02dd8a04407f837c48f01bd410fc/icon.jpg"

  const url2 = `${url}?${width}`

  return (
    <>
      <StaticImage
        src="https://images.microcms-assets.io/assets/a20dd30d3f4d43d8814295dae8cee134/dfca02dd8a04407f837c48f01bd410fc/icon.jpg"
        alt="test"
      />
      
      <img src={url2} alt="" />
    </>
  )
}

export const query = graphql`
  query {
    microcmsPosts(link: { eq: "second" }) {
      eye_catch {
        url
        width
      }
    }
  }
`
