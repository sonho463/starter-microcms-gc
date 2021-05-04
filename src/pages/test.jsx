import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default function Test({data}) {
  return (
    <>
      <Layout>
        <div className="container">
					<h1>test</h1>
          {data.allMicrocmsPosts.edges.map(({ node }) => (
            <>
              <h1>{node.title}</h1>
            </>
          ))}

        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    allMicrocmsPosts(sort: { order: DESC, fields: updatedAt }) {
      edges {
        node {
          title
          id
        }
      }
    }
  }
`
