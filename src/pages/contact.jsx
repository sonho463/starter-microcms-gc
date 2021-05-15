import React from "react"
import { getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

import Seo from "../components/seo"
import Layout from "../components/layout"
// import "../styles/global.css"

export default function Home() {
	const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "contact-bg.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 200
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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        {/* Font Awesome icons (free version)*/}

        <Seo pageTitle="About" pageDescription="これはアバウトページです" />

        <Layout>
          {/* Page Header*/}
          <BackgroundImage
            Tag="section"
            // Spread bgImage into BackgroundImage:
            {...bgImage}
            preserveStackingContext
          >
            <header
              className="masthead"
              style={{ backgroundImage: 'url("assets/img/about-bg.jpg")' }}
            >
              <div className="overlay" />
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-md-10 mx-auto">
                    <div className="page-heading">
                      <h1>Contact Me</h1>
                      <span className="subheading">Have questions? I have answers.</span>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </BackgroundImage>
          {/* Main Content*/}
          <>
            {/* Main Content*/}
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                  <p>
                    Want to get in touch? Fill out the form below to send me a
                    message and I will get back to you as soon as possible!
                  </p>
                  {/* Contact Form - Enter your email address on line 19 of the mail/contact_me.php file to make this form work.*/}
                  {/* WARNING: Some web hosts do not allow emails to be sent through forms to common mail hosts like Gmail or Yahoo. It's recommended that you use a private domain email address!*/}
                  {/* To use the contact form, your site must be on a live web host with PHP! The form will not work locally!*/}
                  <form id="contactForm" name="sentMessage" noValidate>
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls">
                        <label>Name</label>
                        <input
                          className="form-control"
                          id="name"
                          type="text"
                          placeholder="Name"
                          required
                          data-validation-required-message="Please enter your name."
                        />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls">
                        <label>Email Address</label>
                        <input
                          className="form-control"
                          id="email"
                          type="email"
                          placeholder="Email Address"
                          required
                          data-validation-required-message="Please enter your email address."
                        />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="form-group col-xs-12 floating-label-form-group controls">
                        <label>Phone Number</label>
                        <input
                          className="form-control"
                          id="phone"
                          type="tel"
                          placeholder="Phone Number"
                          required
                          data-validation-required-message="Please enter your phone number."
                        />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls">
                        <label>Message</label>
                        <textarea
                          className="form-control"
                          id="message"
                          rows={5}
                          placeholder="Message"
                          required
                          data-validation-required-message="Please enter a message."
                          defaultValue={""}
                        />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <br />
                    <div id="success" />
                    <button
                      className="btn btn-primary"
                      id="sendMessageButton"
                      type="submit"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <hr />
          </>
        </Layout>
      </>
    </>
  )
}
