import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from './Hero';
import FeaturedCasinos from './FeaturedCasinos';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <Helmet>
        <title>Deutsche Krypto Casinos – Sicher und zuverlässig</title>
        <meta name="description" content="Entdecken Sie die besten deutschen Krypto-Casinos. Spielen Sie sicher mit Bitcoin, Ethereum und anderen Kryptowährungen." />
      </Helmet>

      <Hero />
      <FeaturedCasinos />

      <section className="info-section">
        <div className="container">
          <h2>Warum Krypto-Casinos?</h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="icon">🔒</div>
              <h3>Sicher & Anonym</h3>
              <p>Spielen Sie sicher mit Kryptowährungen ohne persönliche Daten preiszugeben.</p>
            </div>
            <div className="info-card">
              <div className="icon">⚡</div>
              <h3>Schnelle Transaktionen</h3>
              <p>Ein- und Auszahlungen werden in Minuten statt Tagen verarbeitet.</p>
            </div>
            <div className="info-card">
              <div className="icon">💰</div>
              <h3>Bessere Boni</h3>
              <p>Krypto-Casinos bieten oft höhere Boni und bessere Konditionen.</p>
            </div>
            <div className="info-card">
              <div className="icon">🌍</div>
              <h3>Global Verfügbar</h3>
              <p>Zugang zu Top-Casinos ohne geografische Einschränkungen.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="crypto-section">
        <div className="container">
          <h2>Akzeptierte Kryptowährungen</h2>
          <p className="section-subtitle">Spielen Sie mit Ihren bevorzugten Kryptowährungen</p>
          <div className="crypto-grid">
            <div className="crypto-item">
              <h4>Bitcoin (BTC)</h4>
              <p>Die beliebteste und am weitesten akzeptierte Kryptowährung</p>
            </div>
            <div className="crypto-item">
              <h4>Ethereum (ETH)</h4>
              <p>Schnelle Transaktionen mit Smart Contract Technologie</p>
            </div>
            <div className="crypto-item">
              <h4>Litecoin (LTC)</h4>
              <p>Schneller und günstiger als Bitcoin</p>
            </div>
            <div className="crypto-item">
              <h4>Dogecoin (DOGE)</h4>
              <p>Die Meme-Coin mit echter Akzeptanz</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
