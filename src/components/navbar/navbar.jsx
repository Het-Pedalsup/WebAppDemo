import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">MyWebsite</div>
      <div
        className="hamburger"
        onClick={()=>toggleMenu()}
        aria-expanded={isMenuOpen}
        aria-controls="nav-menu"
      >
        ☰
      </div>
      <ul id="nav-menu" className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
