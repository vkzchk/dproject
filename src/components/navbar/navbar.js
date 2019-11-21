import React from 'react';

import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/">Home</a>
            <a href="/contact">Contact</a>
            <a href="/about">About</a>
        </nav>
    );
}
export default Navbar;