import React from "react"
import { graphql, Link } from "gatsby"
import { htmlToText } from "html-to-text"

import Back from "../components/background"
import Seo from "../components/seo"
import Layout from "../components/layout"
import CategoryList from "../components/category-list"

import "../styles/global.css"

export default function Home({ data, location, pageContext }) {
  // 次のページ、前のページのパラメータ設定

  // const catid = pageContext.catid

  return (
    <>
      <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />

      <Seo
        pageTitle={`CATEGORY: ${pageContext.catName}`}
        pageDescription={`「${pageContext.catName}」カテゴリーの記事です`}
        pagepath={location.pathname}
      />

      <Layout>
        <Back>
          <header className="masthead">
            <div class="overlay" />
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                  <div className="site-heading">
                    <h1>カテゴリ: {pageContext.catName}</h1>
                  </div>
						<CategoryList />
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
                const author = node.author || "Dそんほんす"
                const article = node.article || "no article"
                const textData = htmlToText(article, {
                  tags: {
                    a: { options: { ignoreHref: true } },
                    img: { format: "skip" },
                  },
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
            </div>
          </div>
        </div>
        <hr />
      </Layout>
    </>
  )
}

export const query = graphql`
  query($catSlug: String) {
    allMicrocmsPosts(
      filter: { category: { categorySlug: { eq: $catSlug } } }
      sort: { order: DESC, fields: updatedAt }
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
