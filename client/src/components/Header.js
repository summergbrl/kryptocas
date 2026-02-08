import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container container">
        <Link to="/" className="logo">
          <img src="/images/logo.png" alt="Krypto Casinos" className="header-logo" />
        </Link>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/casinos" onClick={() => setIsMenuOpen(false)}>Casinos</Link></li>
            <li><Link to="/bonuses" onClick={() => setIsMenuOpen(false)}>Bonusse</Link></li>
            <li><Link to="/guide" onClick={() => setIsMenuOpen(false)}>Leitfaden</Link></li>
          </ul>
        </nav>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;
