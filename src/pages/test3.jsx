import React from "react"
import { graphql } from "gatsby"
import MicroCmsImage from "../components/microcms-img"

export default function Test2() {
  return (
    <>
      <div>
        <MicroCmsImage width="w=100" compress="auto=compress" />
      </div>
    </>
  )
}
