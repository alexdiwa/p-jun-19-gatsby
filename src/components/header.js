import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MyAnimation from "./gsap.js"
import "./header.scss"


const Header = ({ siteTitle }) => (
  <header className="site-header">
    <nav className="main-navigation">
      <Link id="homepage" to="/">
        <div className="hidden">{siteTitle}</div>
        <MyAnimation></MyAnimation>
      </Link>
      <ul className="nav-links">
        <li><Link to="/work" activeClassName="current-page">Work</Link></li>
        <li><Link to="/about" activeClassName="current-page">About</Link></li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}



export default Header
