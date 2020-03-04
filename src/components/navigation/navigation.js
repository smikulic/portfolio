import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import './navigation.css'

function Navigation() {
  return (
    <nav className="navigation">
      <div className="items">
        <Link to="/" className="item">Home</Link>
        <HashLink to="/#work" className="item">Work</HashLink>
        <Link to="/about" className="item">About</Link>
        <HashLink to="/#contact" className="item">Get in touch</HashLink>
      </div>
    </nav>
  );
}

export default Navigation;
