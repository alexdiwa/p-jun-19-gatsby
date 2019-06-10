import React from 'react'
import { Link } from "gatsby"
import "./menu.scss"

const Menu = () => (
  <ul className="nav-links">
    <li><Link to="/work">Work</Link></li>
    <li><Link to="/about">About</Link></li>
    {/* <li><Link to="/blog">Blog</Link></li> */}
  </ul>
)

export default Menu;