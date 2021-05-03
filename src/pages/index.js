import React from "react"
import { graphql } from "gatsby"
import Back from "../components/background"
import { Link } from "gatsby"

import Seo from "../components/seo"
import Layout from "../components/layout"

import "../styles/global.css"

export default function Home({ data }) {
  return (
    <>
      <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800"
        rel="stylesheet"
        type="text/css"
      />

      <Seo />

      <Layout>
        <Back>
          <header className="masthead">
            <div class="overlay" />
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                  <div className="site-heading">
                    <h1>Clean Blog</h1>
                    <span className="subheading">
                      A Blog Theme by Start Bootstrap
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </Back>

        {/* Main Content*/}
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              {data.allMicrocmsPosts.edges.map(({ node }) => {
                const author = node.author || "そんほんす"
								const description = node.description || "no description"
                return (
                  <>
                    <div key={node.id} className="post-preview">
                      <Link to="{node.link}">
                        <h2 className="post-title">{node.title}</h2>
                        <h3 className="post-subtitle">
                          {node.description}
                        </h3>
                      </Link>
                      <p className="post-meta">
                        Posted by
                        <a href="#!">{author}</a><br/>
                        {node.updatedAt}
                      </p>
                    </div>
                    <hr />
                  </>
                )
              })}
              <hr />
              {/* Pager*/}
              <div className="clearfix">
                <a className="btn btn-primary float-right" href="#!">
                  Older Posts →
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </Layout>
      <div className="container"></div>
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
          link
          author
					updatedAt
					description
					article
        }
      }
    }
  }
`
