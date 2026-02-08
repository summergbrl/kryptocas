import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';
import './KryptoSlotsPage.css';

function KryptoSlotsPage() {
  const topCasinos = [
    { rank: 1, name: 'Jackbit Casino', games: '4.600+', bonus: '100 Freispiele ohne Umsatz', feature: 'Schnelle Auszahlungen' },
    { rank: 2, name: 'CryptoLeo Casino', games: '1.794+', bonus: '225% bis €5.000', feature: 'Modernes Design' },
    { rank: 3, name: '7bit Casino', games: '8.000+', bonus: '5 BTC + 100 Freispiele', feature: 'Seit 2014' },
  ];

  const popularSlots = [
    { name: 'Book of Dead', provider: 'Play\'n GO', rtp: '96.21%' },
    { name: 'Sugar Rush', provider: 'Pragmatic Play', rtp: '96.50%' },
    { name: '9 Pots of Gold', provider: 'Microgaming', rtp: '96.24%' },
    { name: 'King Carrot', provider: 'Hacksaw Gaming', rtp: '96.30%' },
    { name: 'Sweet Bonanza', provider: 'Pragmatic Play', rtp: '96.51%' },
    { name: 'Gates of Olympus', provider: 'Pragmatic Play', rtp: '96.50%' },
  ];

  const cryptos = ['Bitcoin', 'Ethereum', 'Tether', 'Litecoin', 'Ripple', 'Tron', 'Dogecoin', 'Bitcoin Cash'];

  const advantages = [
    { title: 'Anonymität', description: 'Spielen Sie ohne persönliche Daten preiszugeben. Nur eine Wallet-Adresse ist nötig.' },
    { title: 'Niedrigere Gebühren', description: 'Krypto-Transaktionen haben deutlich niedrigere Gebühren als traditionelle Zahlungsmethoden.' },
    { title: 'Bessere Sicherheit', description: 'Fortschrittliche Verschlüsselung und Blockchain-Technologie schützen Ihre Transaktionen.' },
    { title: 'Innovative Spiele', description: 'Exklusive Krypto-Slots mit einzigartigen Features und Designs.' },
  ];

  const steps = [
    { step: 1, title: 'Wallet einrichten', description: 'Wählen Sie eine sichere Krypto-Wallet wie MetaMask, Trust Wallet, Ledger oder Trezor.' },
    { step: 2, title: 'Krypto kaufen', description: 'Kaufen Sie Kryptowährungen über eine Börse wie Binance, Coinbase oder Kraken.' },
    { step: 3, title: 'Casino-Konto erstellen', description: 'Registrieren Sie sich bei einem Krypto-Casino und verifizieren Sie Ihr Konto.' },
    { step: 4, title: 'Einzahlen & Spielen', description: 'Tätigen Sie eine Einzahlung und beginnen Sie Ihre Lieblings-Slots zu spielen.' },
  ];

  const bonusTypes = [
    { title: 'Willkommensbonus', description: 'Prozentuale Aufstockung Ihrer ersten Einzahlung.' },
    { title: 'Freispiele', description: 'Kostenlose Slot-Runden ohne eigenen Einsatz.' },
    { title: 'VIP-Belohnungen', description: 'Exklusive Boni für treue Spieler.' },
    { title: 'Cashback', description: 'Rückerstattung eines Teils Ihrer Verluste.' },
  ];

  return (
    <div className="krypto-slots-page">
      <Helmet>
        <title>Krypto-Slots: Anonym & mit Top-Boni spielen! | Deutsche Krypto Casinos</title>
        <meta name="description" content="Entdecken Sie die besten Krypto-Slots. Spielen Sie anonym mit Bitcoin und Ethereum. Exklusive Boni und schnelle Auszahlungen." />
      </Helmet>

      <Header />

      <div className="page-header">
        <div className="container">
          <h1>Krypto-Slots</h1>
          <p>Anonym spielen mit Top-Boni! Entdecken Sie die besten Bitcoin-Slots und exklusive Krypto-Bonusangebote.</p>
        </div>
      </div>

      <div className="container">
        <div className="page-content">
          <section className="content-section">
            <h2>Was sind Krypto-Slots?</h2>
            <p>
              Krypto-Slots sind Spielautomaten, die Kryptowährungen wie Bitcoin und Ethereum als Zahlungsmittel
              akzeptieren. Sie bieten sichere und anonyme Transaktionen sowie exklusive Boni, die in traditionellen
              Casinos oft nicht verfügbar sind.
            </p>
          </section>

          <section className="content-section">
            <h2>Top Krypto Casinos mit Slots</h2>
            <div className="casinos-list">
              {topCasinos.map((casino) => (
                <div key={casino.rank} className="casino-card">
                  <div className="casino-rank">#{casino.rank}</div>
                  <div className="casino-info">
                    <h3>{casino.name}</h3>
                    <div className="casino-details">
                      <span className="detail"><strong>Spiele:</strong> {casino.games}</span>
                      <span className="detail"><strong>Bonus:</strong> {casino.bonus}</span>
                      <span className="detail highlight">{casino.feature}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2>Beliebte Krypto-Slots</h2>
            <div className="slots-grid">
              {popularSlots.map((slot, index) => (
                <div key={index} className="slot-card">
                  <h3>{slot.name}</h3>
                  <p className="provider">{slot.provider}</p>
                  <span className="rtp">RTP: {slot.rtp}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2>Vorteile von Krypto-Slots</h2>
            <div className="advantages-grid">
              {advantages.map((item, index) => (
                <div key={index} className="advantage-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2>Unterstützte Kryptowährungen</h2>
            <div className="crypto-list">
              {cryptos.map((crypto, index) => (
                <span key={index} className="crypto-badge">{crypto}</span>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2>So starten Sie mit Krypto-Slots</h2>
            <div className="steps-list">
              {steps.map((item) => (
                <div key={item.step} className="step-item">
                  <div className="step-number">{item.step}</div>
                  <div className="step-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2>Krypto-Slot Boni</h2>
            <div className="bonus-grid">
              {bonusTypes.map((bonus, index) => (
                <div key={index} className="bonus-card">
                  <h3>{bonus.title}</h3>
                  <p>{bonus.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2>Fazit</h2>
            <p>
              Krypto-Slots bieten das beste aus beiden Welten: die Spannung klassischer Spielautomaten kombiniert
              mit den Vorteilen von Kryptowährungen wie Anonymität, schnelle Transaktionen und exklusive Boni.
              Wählen Sie ein seriöses Krypto-Casino und genießen Sie ein sicheres Spielerlebnis.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default KryptoSlotsPage;
