import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Logo from "./logo.js";
import "./header.scss";

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <Link className="home" to="/">
        <span className="sr-only">{siteTitle}</span>
        <Logo></Logo>
      </Link>
      <ul className="nav-links">
        <li><Link to="/work" activeClassName="current-page">Work</Link></li>
        <li><Link to="/blog" activeClassName="current-page">Blog</Link></li>
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

export default Header;
