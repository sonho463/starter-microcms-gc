import React from "react"
import { Link } from "gatsby"

const HeaderNav = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      id="mainNav"
    >
      <div className="container">
        <Link to="/" className="navbar-brand">
          HorumonT'sBlog
        </Link>

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
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/post">PostPage</Link>
            </li>
            <li className="nav-item">
              <Link to="/test">TestPage</Link>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  )
}

export default HeaderNav
