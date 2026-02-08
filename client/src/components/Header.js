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
          <img src="/images/logo.png" alt="Kryptocasinos.net" className="header-logo" />
        </Link>

        {/* Skip Link for Accessibility (User requested 'Zum Inhalt wechseln' which is usually a skip link) */}
        <a href="#first_sec" className="skip-link" style={{ display: 'none' }}>Zum Inhalt wechseln</a>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Krypto Casinos</Link></li>
            <li><Link to="/krypto-casino-boni/" onClick={() => setIsMenuOpen(false)}>Casino Boni</Link></li>
            <li><Link to="/bitcoin-casinos/" onClick={() => setIsMenuOpen(false)}>Bitcoin Casinos</Link></li>
            <li><Link to="/krypto-casino-spiele/" onClick={() => setIsMenuOpen(false)}>Casino-Spiele</Link></li>
            <li><Link to="/tests/" onClick={() => setIsMenuOpen(false)}>Casino Tests</Link></li>
            <li><Link to="/krypto-wallets/" onClick={() => setIsMenuOpen(false)}>Krypto-Wallets</Link></li>
            <li><Link to="/kryptowissen/" onClick={() => setIsMenuOpen(false)}>Kryptowissen</Link></li>
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
