import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';
import './KryptoSportwettenPage.css';

function KryptoSportwettenPage() {
  const topSportsbooks = [
    { rank: 1, name: 'BC Game', games: '7.000+', cryptos: '50+', feature: 'Eigener Token' },
    { rank: 2, name: 'WSM Casino', games: '5.000+', cryptos: '20+', feature: 'Meme-Coin Integration' },
    { rank: 3, name: 'Cloudbet', bonus: '100% bis 5 BTC', cryptos: '30+', feature: 'Keine Limits' },
    { rank: 4, name: 'TG Casino', bonus: '150% Sportbonus', cryptos: '15+', feature: 'Telegram Integration' },
  ];

  const advantages = [
    { title: 'Kosteneffizienz', description: 'Deutlich niedrigere Gebühren als bei traditionellen Wettanbietern.' },
    { title: 'Geschwindigkeit', description: 'Ein- und Auszahlungen erfolgen nahezu augenblicklich.' },
    { title: 'Datenschutz', description: 'Keine persönlichen Informationen für Zahlungen erforderlich.' },
    { title: 'Transparenz', description: 'Blockchain-Technologie gewährleistet faire Abläufe.' },
  ];

  const sports = [
    'Fußball', 'Basketball', 'Tennis', 'MMA', 'Cricket', 'eSports',
    'Pferderennen', 'Golf', 'Motorsport', 'Eishockey', 'Baseball', 'Rugby'
  ];

  const esports = ['Dota 2', 'League of Legends', 'CS:GO', 'Valorant', 'Overwatch'];

  const cryptos = ['Bitcoin', 'Ethereum', 'Litecoin', 'Tether (USDT)', 'XRP', 'Binance Coin', 'Dogecoin'];

  const trends = [
    { title: 'Web3 & dApp Integration', description: 'Dezentrale Wett-Applikationen ermöglichen mehr Kontrolle und Transparenz.' },
    { title: 'Smart Contracts', description: 'Automatische Auszahlungen und Wettabwicklung ohne Mittelsmänner.' },
    { title: 'eSports Wachstum', description: 'Krypto-Sportwetten werden bei eSports-Fans immer beliebter.' },
    { title: 'Stablecoins', description: 'USDT und andere Stablecoins reduzieren Volatilitätsrisiken.' },
  ];

  return (
    <div className="krypto-sportwetten-page">
      <Helmet>
        <title>Krypto Sportwetten 2026 | Die besten Bitcoin Wettanbieter | Deutsche Krypto Casinos</title>
        <meta name="description" content="Entdecken Sie die besten Krypto-Sportwetten 2026. Wetten Sie mit Bitcoin auf Fußball, eSports und mehr. Schnelle Auszahlungen und Top-Quoten." />
      </Helmet>

      <Header />

      <div className="page-header">
        <div className="container">
          <h1>Krypto Sportwetten 2026</h1>
          <p>Trends, Vorteile und die besten Wettanbieter für Bitcoin-Sportwetten.</p>
        </div>
      </div>

      <div className="container">
        <div className="page-content">
          <section className="content-section">
            <h2>Vorteile von Krypto-Sportwetten</h2>
            <p>
              Krypto-Sportwetten bieten gegenüber traditionellen Wettanbietern klare Vorteile durch
              reduzierte Gebühren, sofortige Transaktionen und mehr Privatsphäre.
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
            <h2>Top Krypto-Wettanbieter</h2>
            <div className="casinos-list">
              {topSportsbooks.map((book) => (
                <div key={book.rank} className="casino-card">
                  <div className="casino-rank">#{book.rank}</div>
                  <div className="casino-info">
                    <h3>{book.name}</h3>
                    <div className="casino-details">
                      {book.games && <span className="detail">Spiele: {book.games}</span>}
                      {book.bonus && <span className="detail">Bonus: {book.bonus}</span>}
                      <span className="detail">Kryptos: {book.cryptos}</span>
                      <span className="detail highlight">{book.feature}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2>Verfügbare Sportarten</h2>
            <div className="sports-grid">
              {sports.map((sport, index) => (
                <span key={index} className="sport-badge">{sport}</span>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2>eSports Wetten</h2>
            <p>eSports sind ein wachsender Bereich in der Krypto-Wettszene:</p>
            <div className="esports-grid">
              {esports.map((game, index) => (
                <span key={index} className="esport-badge">{game}</span>
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
            <h2>Aktuelle Trends 2026</h2>
            <div className="trends-grid">
              {trends.map((trend, index) => (
                <div key={index} className="trend-card">
                  <h3>{trend.title}</h3>
                  <p>{trend.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2>Fazit</h2>
            <p>
              Krypto-Sportwetten haben sich zu einem der wichtigsten Elemente der gesamten Wettszene
              entwickelt. Mit niedrigeren Gebühren, sofortigen Transaktionen und mehr Privatsphäre
              bieten sie echte Vorteile gegenüber traditionellen Anbietern. Die Integration von
              Web3-Technologie und Smart Contracts wird das Erlebnis weiter verbessern.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default KryptoSportwettenPage;
