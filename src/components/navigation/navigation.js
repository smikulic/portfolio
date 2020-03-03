import React from 'react'
import { Link } from "react-router-dom"
import './navigation.css'

function Navigation() {
  return (
    <nav className="navigation">
      <div className="items">
        <Link to="/" className="item">Home</Link>
        <a href="/#work" className="item">Work</a>
        <Link to="/about" className="item">About</Link>
        <a href="/#contact" className="item">Get in touch</a>
      </div>
    </nav>
  );
}

export default Navigation;
