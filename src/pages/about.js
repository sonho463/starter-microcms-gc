import React from "react"
import { StaticImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

import SEO from "../components/seo"

import "../styles/global.css"

export default function Home() {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "about-bg.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 1000
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )
  // getImageでイメージデータを取得して
  const image = getImage(placeholderImage)
  // gatsby-background-imageで使えるように変換（ｖ３への対応）
  const bgImage = convertToBgImage(image)

  return (
    <>
      <>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content />
        <meta name="author" content />
        <title>Clean Blog - Start Bootstrap Theme</title>
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
        {/* Core theme CSS (includes Bootstrap)*/}
        <link href="css/styles.css" rel="stylesheet" />
        {/* Navigation*/}
        <nav
          className="navbar navbar-expand-lg navbar-light fixed-top"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand" href="index.html">
              Start Bootstrap
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="post.html">
                    Sample Post
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Page Header*/}
        <header
          className="masthead"
          style={{ backgroundImage: 'url("assets/img/about-bg.jpg")' }}
        >
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="page-heading">
                  <h1>About Me</h1>
                  <span className="subheading">This is what I do.</span>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Main Content*/}
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
                nostrum ullam eveniet pariatur voluptates odit, fuga atque ea
                nobis sit soluta odio, adipisci quas excepturi maxime quae totam
                ducimus consectetur?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                praesentium recusandae illo eaque architecto error, repellendus
                iusto reprehenderit, doloribus, minus sunt. Numquam at quae
                voluptatum in officia voluptas voluptatibus, minus!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                consequuntur magnam, excepturi aliquid ex itaque esse est vero
                natus quae optio aperiam soluta voluptatibus corporis atque iste
                neque sit tempora!
              </p>
            </div>
          </div>
        </div>
        <hr />
        {/* Footer*/}
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <ul className="list-inline text-center">
                  <li className="list-inline-item">
                    <a href="#!">
                      <span className="fa-stack fa-lg">
                        <i className="fas fa-circle fa-stack-2x" />
                        <i className="fab fa-twitter fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#!">
                      <span className="fa-stack fa-lg">
                        <i className="fas fa-circle fa-stack-2x" />
                        <i className="fab fa-facebook-f fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#!">
                      <span className="fa-stack fa-lg">
                        <i className="fas fa-circle fa-stack-2x" />
                        <i className="fab fa-github fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                  </li>
                </ul>
                <p className="copyright text-muted">
                  Copyright © Your Website 2021
                </p>
              </div>
            </div>
          </div>
        </footer>
        {/* Bootstrap core JS*/}
        {/* Core theme JS*/}
      </>
    </>
  )
}
