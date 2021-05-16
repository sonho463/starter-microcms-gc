import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import {
  faTwitter,
  faFacebookF,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <ul className="list-inline text-center">
              <SnsLink
                to="https://twitter.com/horumont"
                className="list-inline-item"
              >
                <span className="fa-layers fa-fw">
                  <FontAwesomeIcon icon={faCircle} size="2x" />
                  <FontAwesomeIcon
                    icon={faTwitter}
                    inverse
                    size="1x"
                    transform="right-6"
                  />
                </span>
              </SnsLink>
              <SnsLink
                to="https://facebook.com/horumont"
                className="list-inline-item"
              >
                <span className="fa-layers fa-fw">
                  <FontAwesomeIcon icon={faCircle} size="2x" />
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    inverse
                    size="1x"
                    transform="right-6"
                  />
                </span>
              </SnsLink>
              <SnsLink
                to="https://github.com/sonho463"
                className="list-inline-item"
              >
                <span className="fa-layers fa-fw">
                  <FontAwesomeIcon icon={faCircle} size="2x" />
                  <FontAwesomeIcon
                    icon={faGithub}
                    inverse
                    size="1x"
                    transform="right-6"
                  />
                </span>
              </SnsLink>
            </ul>
            <p className="copyright text-muted">
              Copyright © Your Website 2021
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

const SnsLink = styled(Link)`
  margin: 10px;
`

export default Footer
