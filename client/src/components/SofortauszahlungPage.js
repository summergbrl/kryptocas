import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';
import './SofortauszahlungPage.css';

function SofortauszahlungPage() {
  const topCasinos = [
    {
      rank: 1,
      name: 'BC.Game',
      withdrawalTime: 'Unter 10 Minuten',
      features: ['150+ Kryptowährungen', 'Keine Verifizierung nötig', 'Automatische Auszahlungen'],
    },
    {
      rank: 2,
      name: 'Stake Casino',
      withdrawalTime: 'Unter 15 Minuten',
      features: ['Große Spielauswahl', 'VIP Programm', 'Schnelle Krypto-Auszahlungen'],
    },
    {
      rank: 3,
      name: 'Mega Dice',
      withdrawalTime: 'Unter 10 Minuten',
      features: ['Telegram Casino', 'Anonymes Spielen', 'Blitzschnelle Transaktionen'],
    },
    {
      rank: 4,
      name: 'Lucky Block',
      withdrawalTime: 'Sofort',
      features: ['Keine KYC', 'LBLOCK Token Vorteile', 'Über 5.500 Spiele'],
    },
  ];

  const advantages = [
    {
      title: 'Sofortige Verfügbarkeit',
      description: 'Ihre Gewinne sind innerhalb von Minuten auf Ihrer Wallet verfügbar – nicht Tage oder Wochen.',
    },
    {
      title: 'Keine Wartezeiten',
      description: 'Kein manuelles Prüfen durch Casino-Mitarbeiter. Blockchain-Transaktionen werden automatisch verarbeitet.',
    },
    {
      title: 'Volle Kontrolle',
      description: 'Sie haben jederzeit Zugriff auf Ihre Gewinne und können frei über Ihr Geld verfügen.',
    },
    {
      title: 'Transparenz',
      description: 'Jede Transaktion ist auf der Blockchain nachverfolgbar und unveränderbar.',
    },
  ];

  const cryptoSpeeds = [
    { crypto: 'Bitcoin (BTC)', time: '10-60 Minuten', note: 'Abhängig von Netzwerkauslastung' },
    { crypto: 'Ethereum (ETH)', time: '2-5 Minuten', note: 'Schneller als BTC' },
    { crypto: 'Litecoin (LTC)', time: '2-5 Minuten', note: 'Schnell und günstig' },
    { crypto: 'Ripple (XRP)', time: '3-5 Sekunden', note: 'Blitzschnell' },
    { crypto: 'Solana (SOL)', time: 'Unter 1 Sekunde', note: 'Extrem schnell' },
    { crypto: 'USDT (TRC20)', time: '1-3 Minuten', note: 'Stablecoin auf Tron' },
  ];

  const steps = [
    {
      step: 1,
      title: 'Casino-Konto aufrufen',
      description: 'Melden Sie sich in Ihrem Krypto Casino an und navigieren Sie zum Auszahlungsbereich.',
    },
    {
      step: 2,
      title: 'Kryptowährung wählen',
      description: 'Wählen Sie die Kryptowährung, in der Sie auszahlen möchten (z.B. BTC, ETH, XRP).',
    },
    {
      step: 3,
      title: 'Wallet-Adresse eingeben',
      description: 'Geben Sie Ihre persönliche Wallet-Adresse ein. Prüfen Sie diese sorgfältig!',
    },
    {
      step: 4,
      title: 'Betrag bestätigen',
      description: 'Geben Sie den Auszahlungsbetrag ein und bestätigen Sie die Transaktion.',
    },
    {
      step: 5,
      title: 'Gewinne erhalten',
      description: 'Die Kryptowährung wird innerhalb von Minuten auf Ihrer Wallet gutgeschrieben.',
    },
  ];

  const tips = [
    'Wählen Sie schnelle Kryptowährungen wie XRP oder SOL für sofortige Auszahlungen',
    'Prüfen Sie Ihre Wallet-Adresse immer doppelt vor der Bestätigung',
    'Beachten Sie minimale Auszahlungslimits des Casinos',
    'Nutzen Sie Casinos ohne KYC-Anforderungen für schnellere Prozesse',
    'Achten Sie auf die Netzwerkgebühren der gewählten Kryptowährung',
  ];

  return (
    <div className="sofortauszahlung-page">
      <Helmet>
        <title>Krypto Casinos mit Sofortauszahlung | Deutsche Krypto Casinos</title>
        <meta name="description" content="Entdecken Sie Krypto Casinos mit Sofortauszahlung. Erhalten Sie Ihre Gewinne in Minuten statt Tagen. Die schnellsten Auszahlungen 2026." />
      </Helmet>

      <Header />

      <div className="page-header">
        <div className="container">
          <h1>Krypto Casinos mit Sofortauszahlung</h1>
          <p>Erhalten Sie Ihre Gewinne in Minuten statt Tagen. Die schnellsten Krypto Casinos für sofortige Auszahlungen.</p>
        </div>
      </div>

      <div className="container">
        <div className="page-content">
          <section className="content-section">
            <h2>Warum Sofortauszahlung?</h2>
            <p>
              Einer der größten Vorteile von Krypto Casinos ist die Möglichkeit, Gewinne sofort auszuzahlen.
              Während traditionelle Casinos oft Tage oder sogar Wochen für Auszahlungen benötigen, erhalten
              Sie bei Krypto Casinos Ihr Geld in wenigen Minuten.
            </p>
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
            <h2>Die schnellsten Krypto Casinos</h2>
            <div className="casinos-list">
              {topCasinos.map((casino) => (
                <div key={casino.rank} className="casino-card">
                  <div className="casino-rank">#{casino.rank}</div>
                  <div className="casino-info">
                    <h3>{casino.name}</h3>
                    <p className="withdrawal-time">Auszahlung: {casino.withdrawalTime}</p>
                    <ul className="casino-features">
                      {casino.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2>Auszahlungsgeschwindigkeit nach Kryptowährung</h2>
            <div className="speed-table">
              <div className="speed-header">
                <div className="speed-cell">Kryptowährung</div>
                <div className="speed-cell">Typische Dauer</div>
                <div className="speed-cell">Hinweis</div>
              </div>
              {cryptoSpeeds.map((item, index) => (
                <div key={index} className="speed-row">
                  <div className="speed-cell crypto-name">{item.crypto}</div>
                  <div className="speed-cell time-cell">{item.time}</div>
                  <div className="speed-cell">{item.note}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2>So funktioniert die Sofortauszahlung</h2>
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
            <h2>Tipps für schnelle Auszahlungen</h2>
            <div className="tips-list">
              {tips.map((tip, index) => (
                <div key={index} className="tip-item">
                  <span className="tip-icon">✓</span>
                  <p>{tip}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2>Fazit</h2>
            <p>
              Krypto Casinos mit Sofortauszahlung bieten Ihnen maximale Flexibilität und Kontrolle über Ihre Gewinne.
              Dank Blockchain-Technologie werden Transaktionen automatisch verarbeitet, ohne manuelle Prüfung.
              Wählen Sie schnelle Kryptowährungen wie XRP oder Solana für die schnellsten Auszahlungen.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SofortauszahlungPage;
