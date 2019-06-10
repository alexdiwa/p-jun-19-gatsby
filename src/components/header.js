import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MyAnimation from "./gsap.js"
import Menu from "./menu"
import "./header.scss"


const Header = ({ siteTitle }) => (
  <header className="site-header">
    <nav className="main-navigation">
      <Link id="homepage" to="/">
        <div className="hidden">{siteTitle}</div>
        <MyAnimation></MyAnimation>
      </Link>
      <Menu />
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
