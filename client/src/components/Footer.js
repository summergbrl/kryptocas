import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-content">
          <div className="footer-section brand-section">
            <Link to="/" className="footer-logo-link">
              <img src="/images/logo.png" alt="Kryptocasinos.net" className="footer-logo" />
            </Link>
            <p>Kryptocasinos.net ist die neue unabhängige Anlaufstelle für Krypto-Online-Glücksspiele. Bei uns finden Sie vertrauenswürdige Krypto-Casino-Nachrichten, Anleitungen, Bewertungen und Informationen.</p>
          </div>

          <div className="footer-section">
            <h4>Beliebte Ratgeber</h4>
            <ul>
              <li><Link to="/neue-krypto-casinos/">Neue Krypto Casinos</Link></li>
              <li><Link to="/krypto-casino-sofortauszahlung/">Sofortauszahlung</Link></li>
              <li><Link to="/krypto-casinos-ohne-verifizierung/">Krypto Casinos Ohne Verifizierung</Link></li>
              <li><Link to="/blockchain-casinos/">Blockchain Casinos</Link></li>
              <li><Link to="/ethereum-casinos/">Ethereum Casinos</Link></li>
              <li><Link to="/ripple-casinos/">Ripple Casinos</Link></li>
              <li><Link to="/kryptowaehrungen-kaufen/">Kryptowährungen Kaufen</Link></li>
              <li><Link to="/casino-tokens/">Casino Tokens</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Wichtige Links</h4>
            <ul>
              <li><Link to="/ueber-uns/">Über Uns</Link></li>
              <li><Link to="/datenschutz/">Datenschutz</Link></li>
              <li><Link to="/impressum/">Impressum</Link></li>
              <li><Link to="/verantwortungsbewusstes-spielen/">verantwortungsbewusstes Spielen</Link></li>
              <li><Link to="/kontakt/">Kontakt</Link></li>
            </ul>
          </div>

          <div className="footer-section newsletter-section">
            <h4>Newsletter abonnieren</h4>
            <p>Erhalten Sie täglich exklusive Boni und Sonderangebote.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Ihre E-Mail-Adresse" />
              <button type="submit">Abonnieren</button>
            </form>
            <p className="footer-address">Kryptocasinos.net – Berlin, Deutschland</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Krypto Casinos. Alle Rechte vorbehalten.</p>
          <div className="footer-bottom-links">
            {/* Additional bottom links if needed */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
