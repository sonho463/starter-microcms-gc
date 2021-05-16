import React from "react"
import { graphql, Link } from "gatsby"
import { htmlToText } from "html-to-text"

import Back from "../components/background"
import Pager from "../components/pager"
import Seo from "../components/seo"
import Layout from "../components/layout"

import "../styles/global.css"

export default function Home({ data, pageContext }) {

	// 次のページ、前のページのパラメータ設定
	const prev = pageContext.currentPage + 1
	const next = pageContext.currentPage - 1

  return (
    <>
      <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />

      <Seo />

      <Layout>
        <Back>
          <header className="masthead">
            <div class="overlay" />
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                  <div className="site-heading">
                    <h1>HorumonT's Blog</h1>
                    <span className="subheading">Over40WebClub 学習会</span>
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
              {/* Pager*/}
              <div className="clearfix">
                <Pager
                  currentPage={pageContext.currentPage}
									prev={prev}
									next={next}
                  isFirst={pageContext.isFirst}
                  isLast={pageContext.isLast}
                />
              </div>

              {data.allMicrocmsPosts.edges.map(({ node }) => {
                const author = node.author || "Dそんほんす"
                const article = node.article || "no article"
                const textData = htmlToText(article, {
                  tags: { a: { options: { ignoreHref: true } },img: { format: "skip" } },
                  // tags: { img: { format: "skip" } },
                  limits: { ellipsis: "...", maxInputLength: 200 },
                })
                const description = node.description || `${textData}...`

                return (
                  <>
                    <div key={node.id} className="post-preview">
                      <Link to={`/blog/posts/${node.link}`}>
                        <h2 className="post-title">{node.title}</h2>
                        <h3 className="post-subtitle">{description}</h3>
                      </Link>
                      <p className="post-meta">
                        Posted by
                        <a href="#!">{author}</a>
                        <br />
                        {node.updatedAtJP}
                      </p>
                    </div>
                    <hr />
                  </>
                )
              })}
              <hr />
              {/* Pager*/}
              <Pager
                currentPage={pageContext.currentPage}
								prev={prev}
								next={next}
                isFirst={pageContext.isFirst}
                isLast={pageContext.isLast}
              />
            </div>
          </div>
        </div>
        <hr />
      </Layout>
    </>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMicrocmsPosts(
      sort: { order: DESC, fields: updatedAt }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          title
          id
          link
          author
          updatedAtJP: updatedAt(formatString: "YYYY/MM/DD")
          updatedAt
          description
          article
        }
      }
    }
  }
`
