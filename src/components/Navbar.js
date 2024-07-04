import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logom from './logom.png'; // Adjust the path as needed

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logom} alt="Logo" className="navbar-logo" />
        Ishan Lamsal
      </div>
      <button className={`navbar-toggler ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="navbar-toggler-icon">&#9776;</span>
      </button>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
        <li><Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
