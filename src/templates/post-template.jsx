import React from "react"
import { graphql } from "gatsby"

import Back from "../components/background"
import Seo from "../components/seo"
import Layout from "../components/layout"
import MicroCmsImage from "../components/microcms-img"

import "../styles/global.css"

export default function Home({ data }) {
  const article = data.microcmsPosts.article
  const author = data.microcmsPosts.author
    ? data.microcmsPosts.author
    : "Dそんほんす"
  // const url = data.microcmsPosts.eye_catch.url ? data.microcmsPosts.eye_catch.url : "src/images/post-bg.jpg"

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
        <>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
          {/* Font Awesome icons (free version)*/}
          {/* Google fonts*/}
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

          <Seo
            pagetitle="PostPage"
            pageDescription="これは投稿ページ。次にcreatePageで動的に生成します"
          />

          {/* <Back> */}
          <header className="masthead">
            <div className="overlay" />
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                  <div className="post-heading">
                    <MicroCmsImage
                      url={data.microcmsPosts.eye_catch.url}
                      width="w=300"
                      compress="auto=compress"
                      fill="fill=blur"
											format="auto=format"
											darken="blend-mode=darken"
											darkenColor="blend=b0c4de"
                    />
                    <h1>{data.microcmsPosts.title}</h1>
                    <h2 className="subheading">カテゴリ</h2>
                    <span className="meta">
                      Posted by
                      <a href="#!">{author}</a>
                      on {data.microcmsPosts.updatedAtJP}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* </Back> */}
          {/* Post Content*/}
          <article>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: article,
                    }}
                  />
                </div>
              </div>
            </div>
          </article>
          <hr />
        </>
      </Layout>
    </>
  )
}

export const query = graphql`
  query($id: String!) {
    microcmsPosts(id: { eq: $id }) {
      title
      updatedAtJP: updatedAt(formatString: "YYYY/MM/DD")
      updatedAt
      link
      article
      author
      eye_catch {
        url
      }
      category {
        category
        categorySlug
      }
    }
    microcmsCategory {
      category
      categorySlug
    }
  }
`
