import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Seo from "../components/seo"
import Layout from "../components/layout"
import MicroCmsImage from "../components/microcms-img"

import "../styles/global.css"

export default function Home({ data, pageContext }) {
  const article = data.microcmsPosts.article
  const author = data.microcmsPosts.author
    ? data.microcmsPosts.author
    : "Dそんほんす"

	//　アイキャッチ画像未設定のときデフォルト画像設定
		const url = data.microcmsPosts.eye_catch ? data.microcmsPosts.eye_catch.url : "https://images.microcms-assets.io/assets/a20dd30d3f4d43d8814295dae8cee134/b6697014dafc49e29be207d11715c62a/default.png"

	// const EyeCatch = styled.div`
	// 	position: absolute;
	// 	top: 0;	`

const ArticleWrapper = styled.div`
	& img{
		width:80%;
	}`


  return (
    <>
      <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />

      <Seo />

      <Layout>
        <>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
          {/* Font Awesome icons (free version)*/}

          <Seo
            pagetitle="PostPage"
            pageDescription="これは投稿ページ。次にcreatePageで動的に生成します"
          />

          <header className="masthead" style={{position:"relative",overflow:"hidden"}}>
              {/* <EyeCatch> */}
								{/* １つ目のpropsは必ずurl それ以外は順不同でOK */}
								<MicroCmsImage
									// url={data.microcmsPosts.eye_catch.url}
									url={url}
									compress="auto=compress"
									format="auto=format"
									ar="ar=2:1&fit=crop&fp-y=0.5&fp-x=0.5"
								/>
							{/* </EyeCatch> */}
            <div className="overlay" />
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                  <div className="post-heading">
                    <h1>{data.microcmsPosts.title}</h1>
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
                  <ArticleWrapper
                    dangerouslySetInnerHTML={{
                      __html: article,
                    }}
                  />
                </div>
              </div>
            </div>
          </article>
          <hr />

          {pageContext.previous && (
            <Link
              className="btn btn-primary d-block mx-auto"
              to={`/blog/posts/${pageContext.previous.link}/`}
              rel="prev"
            >
            　{pageContext.previous.title}　＞＞＞new
            </Link>
          )}
					{pageContext.next && (
            <Link
              className="btn btn-primary d-block mx-auto mb-1"
              to={`/blog/posts/${pageContext.next.link}/`}
              rel="next"
            >
              old＜＜＜　{pageContext.next.title}
            </Link>
          )}
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
        category_name
        category_slug
      }
    }
  }
`
