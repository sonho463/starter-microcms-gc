import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function Test({ data }) {
  return (
    <>
      <div className="container">
        <h1>test</h1>
        {data.allMicrocmsPosts.edges.map(({ node }) => (
          <>
            <h1>{node.title}</h1>
						<StaticImage
							src="https://images.microcms-assets.io/assets/a20dd30d3f4d43d8814295dae8cee134/dfca02dd8a04407f837c48f01bd410fc/icon.jpg"
							alt="test"
							placeholder="blurred"
							width={300}
						/>
						<img src={node.eye_catch.url} alt=""/>
          </>
        ))}

      </div>
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
					eye_catch{
						url
					}
        }
      }
    }
  }
`
