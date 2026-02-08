import React from 'react';
import { Helmet } from 'react-helmet-async';
import './GuidePage.css';

function GuidePage() {
  return (
    <div className="guide-page">
      <Helmet>
        <title>Krypto Casino Leitfaden 2024 | Deutsche Krypto Casinos</title>
        <meta name="description" content="Kompletter Leitfaden für Krypto-Casinos. Lernen Sie, wie Sie sicher mit Bitcoin und Kryptowährungen spielen." />
      </Helmet>

      <div className="page-header">
        <div className="container">
          <h1>Krypto Casino Leitfaden</h1>
          <p>Alles, was Sie über Krypto-Casinos wissen müssen</p>
        </div>
      </div>

      <div className="container">
        <div className="guide-content">
          <section className="guide-section">
            <h2>Was sind Krypto-Casinos?</h2>
            <p>
              Krypto-Casinos sind Online-Glücksspielplattformen, die Kryptowährungen wie Bitcoin,
              Ethereum und andere digitale Währungen als Zahlungsmethode akzeptieren. Diese Casinos
              bieten oft anonymes Spielen, schnellere Transaktionen und höhere Boni als traditionelle
              Online-Casinos.
            </p>
          </section>

          <section className="guide-section">
            <h2>Vorteile von Krypto-Casinos</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">🔒</div>
                <h3>Anonymität & Privatsphäre</h3>
                <p>Spielen Sie ohne persönliche Daten preiszugeben. Nur eine Wallet-Adresse ist nötig.</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">⚡</div>
                <h3>Schnelle Transaktionen</h3>
                <p>Ein- und Auszahlungen werden in Minuten statt Tagen verarbeitet.</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">💰</div>
                <h3>Niedrigere Gebühren</h3>
                <p>Keine Bankgebühren oder Wechselkurskosten bei Krypto-Transaktionen.</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🎲</div>
                <h3>Provably Fair</h3>
                <p>Überprüfbare Fairness durch Blockchain-Technologie.</p>
              </div>
            </div>
          </section>

          <section className="guide-section">
            <h2>So starten Sie</h2>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Wallet erstellen</h3>
                  <p>Erstellen Sie eine Krypto-Wallet (z.B. MetaMask, Trust Wallet) und kaufen Sie Kryptowährungen.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Casino auswählen</h3>
                  <p>Wählen Sie ein seriöses Krypto-Casino aus unserer Liste der empfohlenen Anbieter.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Registrieren</h3>
                  <p>Melden Sie sich an (oft nur mit E-Mail oder anonym) und verifizieren Sie Ihr Konto.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Einzahlung tätigen</h3>
                  <p>Senden Sie Kryptowährungen von Ihrer Wallet zur Casino-Wallet-Adresse.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3>Spielen & Gewinnen</h3>
                  <p>Genießen Sie Ihre Lieblingsspiele und ziehen Sie Gewinne jederzeit ab.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="guide-section">
            <h2>Beliebte Kryptowährungen</h2>
            <div className="crypto-info">
              <div className="crypto-card">
                <h3>Bitcoin (BTC)</h3>
                <p>Die ursprüngliche und am weitesten akzeptierte Kryptowährung. Ideal für große Transaktionen.</p>
              </div>
              <div className="crypto-card">
                <h3>Ethereum (ETH)</h3>
                <p>Schnellere Transaktionen als Bitcoin mit Smart Contract Funktionalität.</p>
              </div>
              <div className="crypto-card">
                <h3>Litecoin (LTC)</h3>
                <p>Schneller und günstiger als Bitcoin, perfekt für kleinere Transaktionen.</p>
              </div>
              <div className="crypto-card">
                <h3>Dogecoin (DOGE)</h3>
                <p>Die Meme-Coin mit echter Verwendung und niedrigen Gebühren.</p>
              </div>
            </div>
          </section>

          <section className="guide-section">
            <h2>Sicherheitstipps</h2>
            <div className="tips-list">
              <div className="tip">
                <span className="tip-icon">✓</span>
                <p>Verwenden Sie nur lizenzierte und verifizierte Casinos</p>
              </div>
              <div className="tip">
                <span className="tip-icon">✓</span>
                <p>Bewahren Sie Ihre Private Keys sicher auf</p>
              </div>
              <div className="tip">
                <span className="tip-icon">✓</span>
                <p>Aktivieren Sie die Zwei-Faktor-Authentifizierung</p>
              </div>
              <div className="tip">
                <span className="tip-icon">✓</span>
                <p>Spielen Sie nur mit Geld, das Sie sich leisten können zu verlieren</p>
              </div>
              <div className="tip">
                <span className="tip-icon">✓</span>
                <p>Lesen Sie die Bonusbedingungen sorgfältig</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default GuidePage;
