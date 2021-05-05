import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function MicroCmsImg(props) {

  const { width, compress, url } = props

  return (
    <>
      <h1>image</h1>
      <img src={`${url}?${width}&${compress}`} alt="" />
    </>
  )
}
