import React from 'react'
import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link'
import './navigation.css'

function Navigation() {
  return (
    <nav className="navigation">
      <div className="items">
        <Link to="/" className="item">Home</Link>
        <HashLink to="/#work" className="item">Work</HashLink>
        {/* <a href="/#work" className="item">Work</a> */}
        <Link to="/about" className="item">About</Link>
        <HashLink to="/#contact" className="item">Get in touch</HashLink>
        {/* <a href="/#contact" className="item">Get in touch</a> */}
      </div>
    </nav>
  );
}

export default Navigation;
