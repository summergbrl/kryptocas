import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content container">
        <h1 className="hero-title">
          Deutsche Krypto Casinos
        </h1>
        <p className="hero-subtitle">
          Sicher und zuverlässig mit Bitcoin & Co. spielen
        </p>
        <p className="hero-description">
          Entdecken Sie die besten deutschen Krypto-Casinos mit fairen Boni,
          schnellen Auszahlungen und anonymen Transaktionen.
        </p>
        <div className="hero-buttons">
          <Link to="/casinos" className="btn btn-primary">
            Casinos entdecken
          </Link>
          <Link to="/bonuses" className="btn btn-secondary">
            Boni anzeigen
          </Link>
        </div>

        <div className="hero-features">
          <div className="feature-item">
            <span className="feature-icon">✓</span>
            <span>100% Anonym</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">✓</span>
            <span>Sofortige Auszahlungen</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">✓</span>
            <span>Provably Fair</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
