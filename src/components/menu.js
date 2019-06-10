import React from 'react'
import { Link } from "gatsby"
import "./menu.scss"

const Menu = () => (
  <ul className="nav-links">
    <li><Link to="/work" activeClassName="current-page">Work</Link></li>
    <li><Link to="/about" activeClassName="current-page">About</Link></li>
  </ul>
)

export default Menu;