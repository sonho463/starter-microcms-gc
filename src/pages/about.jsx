import React from "react"
import Back from "../components/background"

import Seo from "../components/seo"
import Layout from "../components/layout"

import "../styles/global.css"

export default function Home() {
  return (
    <>
      <>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        {/* Font Awesome icons (free version)*/}

				<Seo
				pageTitle="About"
				pageDescription="これはアバウトページです"
				/>

				<Layout>
					{/* Page Header*/}
					<Back>
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
        </Back>
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
				</Layout>
      </>
    </>
  )
}
