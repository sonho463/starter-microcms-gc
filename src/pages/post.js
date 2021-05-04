import React from "react"
import { graphql } from "gatsby"

import Back from "../components/background"
import Seo from "../components/seo"
import Layout from "../components/layout"

import "../styles/global.css"

export default function Home({ data }) {

	const category = data.microcmsPosts.category.category ? data.microcmsPosts.category.category : "カテゴリなし"

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

          <Back>
            <header className="masthead">

              <div className="overlay" />
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-md-10 mx-auto">
                    <div className="post-heading">
                      <h1>{data.microcmsPosts.title}</h1>
                      <h2 className="subheading">
                        {category}
                      </h2>
                      <span className="meta">
                        Posted by
                        <a href="#!">Start Bootstrap</a>
                        on {data.microcmsPosts.updatedAtJP}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </Back>
          {/* Post Content*/}
          <article>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                  <p>
                    Never in all their history have men been able truly to
                    conceive of the world as one: a single sphere, a globe,
                    having the qualities of a globe, a round earth in which all
                    the directions eventually meet, in which there is no center
                    because every point, or none, is center — an equal earth
                    which all men occupy as equals. The airman's earth, if free
                    men make it, will be truly round: a globe in practice, not
                    in theory.
                  </p>
                  <p>
                    Science cuts two ways, of course; its products can be used
                    for both good and evil. But there's no turning back from
                    science. The early warnings about technological dangers also
                    come from science.
                  </p>
                  <p>
                    What was most significant about the lunar voyage was not
                    that man set foot on the Moon but that they set eye on the
                    earth.
                  </p>
                  <p>
                    A Chinese tale tells of some men sent to harm a young girl
                    who, upon seeing her beauty, become her protectors rather
                    than her violators. That's how I felt seeing the Earth for
                    the first time. I could not help but love and cherish her.
                  </p>
                  <p>
                    For those who have seen the Earth from space, and for the
                    hundreds and perhaps thousands more who will, the experience
                    most certainly changes your perspective. The things that we
                    share in our world are far more valuable than those which
                    divide us.
                  </p>
                  <h2 className="section-heading">The Final Frontier</h2>
                  <p>
                    There can be no thought of finishing for ‘aiming for the
                    stars.’ Both figuratively and literally, it is a task to
                    occupy the generations. And no matter how much progress one
                    makes, there is always the thrill of just beginning.
                  </p>
                  <p>
                    There can be no thought of finishing for ‘aiming for the
                    stars.’ Both figuratively and literally, it is a task to
                    occupy the generations. And no matter how much progress one
                    makes, there is always the thrill of just beginning.
                  </p>
                  <blockquote className="blockquote">
                    The dreams of yesterday are the hopes of today and the
                    reality of tomorrow. Science has not yet mastered prophecy.
                    We predict too much for the next year and yet far too little
                    for the next ten.
                  </blockquote>
                  <p>
                    Spaceflights cannot be stopped. This is not the work of any
                    one man or even a group of men. It is a historical process
                    which mankind is carrying out in accordance with the natural
                    laws of human development.
                  </p>
                  <h2 className="section-heading">Reaching for the Stars</h2>
                  <p>
                    As we got further and further away, it [the Earth]
                    diminished in size. Finally it shrank to the size of a
                    marble, the most beautiful you can imagine. That beautiful,
                    warm, living object looked so fragile, so delicate, that if
                    you touched it with a finger it would crumble and fall
                    apart. Seeing this has to change a man.
                  </p>
                  <a href="#!">
                    <img
                      className="img-fluid"
                      src="assets/img/post-sample-image.jpg"
                      alt="..."
                    />
                  </a>
                  <span className="caption text-muted">
                    To go places and do things that have never been done before
                    – that’s what living is all about.
                  </span>
                  <p>
                    Space, the final frontier. These are the voyages of the
                    Starship Enterprise. Its five-year mission: to explore
                    strange new worlds, to seek out new life and new
                    civilizations, to boldly go where no man has gone before.
                  </p>
                  <p>
                    As I stand out here in the wonders of the unknown at Hadley,
                    I sort of realize there’s a fundamental truth to our nature,
                    Man must explore, and this is exploration at its greatest.
                  </p>
                  <p>
                    Placeholder text by
                    <a href="http://spaceipsum.com/">Space Ipsum</a>· Images by
                    <a href="https://www.flickr.com/photos/nasacommons/">
                      NASA on The Commons
                    </a>
                  </p>
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
query {
  microcmsPosts(link: {eq: "setup-gatsby"}) {
    title
    updatedAtJP: updatedAt(formatString: "")
    updatedAt
    link
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
