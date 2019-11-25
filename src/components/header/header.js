import React from 'react'
import { Link } from 'react-router-dom'
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/portfolio'>Portfolio</Link></li>
          <li><Link to='/contact'>Contact me</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;