import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-content">
          <div className="footer-section brand-section">
            <img src="/images/logo.png" alt="Krypto Casinos" className="footer-logo" />
            <p>Kryptocasinos.net ist die neue unabhängige Anlaufstelle für Krypto-Online-Glücksspiele. Bei uns finden Sie vertrauenswürdige Krypto-Casino-Nachrichten, Anleitungen, Bewertungen und Informationen.</p>
          </div>

          <div className="footer-section">
            <h4>Beliebte Ratgeber</h4>
            <ul>
              <li><a href="/neue-krypto-casinos">Neue Krypto Casinos</a></li>
              <li><a href="/sofortauszahlung">Sofortauszahlung</a></li>
              <li><a href="/ohne-verifizierung">Krypto Casinos Ohne Verifizierung</a></li>
              <li><a href="/blockchain-casinos">Blockchain Casinos</a></li>
              <li><a href="/ethereum-casinos">Ethereum Casinos</a></li>
              <li><a href="/ripple-casinos">Ripple Casinos</a></li>
              <li><a href="/kryptowaehrungen-kaufen">Kryptowährungen Kaufen</a></li>
              <li><a href="/casino-tokens">Casino Tokens</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Wichtige Links</h4>
            <ul>
              <li><a href="/ueber-uns">Über Uns</a></li>
              <li><a href="/datenschutz">Datenschutz</a></li>
              <li><a href="/impressum">Impressum</a></li>
              <li><a href="/verantwortungsbewusstes-spielen">verantwortungsbewusstes Spielen</a></li>
              <li><a href="/kontakt">Kontakt</a></li>
            </ul>
          </div>

          <div className="footer-section newsletter-section">
            <h4>Newsletter abonnieren</h4>
            <p>Erhalten Sie täglich exklusive Boni und Sonderangebote.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Ihre E-Mail-Adresse" />
              <button type="submit">Abonnieren</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Krypto Casinos. Alle Rechte vorbehalten.</p>
          <p className="disclaimer">18+ | Spielen Sie verantwortungsvoll</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
