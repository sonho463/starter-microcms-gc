import React from "react"
import { graphql, Link } from "gatsby"
import { htmlToText } from "html-to-text"

import Back from "../components/background"
import Pager from "../components/pager"
import Seo from "../components/seo"
import Layout from "../components/layout"
import CategoryList from "../components/category-list"

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
                    <h1>{pageContext.title}</h1>
                    <span className="subheading">{pageContext.subtitle}</span>
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
                  tags: {
                    a: { options: { ignoreHref: true } },
                    img: { format: "skip" },
                  },
                  // tags: { img: { format: "skip" } },
                  limits: { ellipsis: "...", maxInputLength: 200 },
                })
                const description = node.description || `${textData}...`
                const category = node.category
                  ? node.category.category
                  : "カテゴリ未設定"
                const categorySlug = node.category
                  ? `/cat/${node.category.categorySlug}/`
                  : "/"

                return (
                  <>
                    <div key={node.id} className="post-preview">
                      <Link to={`/blog/posts/${node.link}`}>
                        <h2 className="post-title">{node.title}</h2>
                        <h3 className="post-subtitle">{description}</h3>
                      </Link>
                      <p className="post-meta">
                        Posted by
                        <span>{author}</span>
                        <br />
                        <Link to={categorySlug}>カテゴリ：{category}</Link>
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
          category {
            category
            categorySlug
          }
        }
      }
    }
  }
`
