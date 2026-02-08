import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';
import './BitcoinCasinosPage.css';

function BitcoinCasinosPage() {
  const topCasinos = [
    { rank: 1, name: 'BC.Game', rating: 98, bonus: '100% + 400 Freispiele' },
    { rank: 2, name: 'CryptoLeo', rating: 97, bonus: '225% bis €5.000' },
    { rank: 3, name: 'Jackbit', rating: 96, bonus: '100% bis €100 + 100 Freispiele' },
    { rank: 4, name: 'Motherland', rating: 95, bonus: '$20 Einzahlung → 100 Freispiele' },
    { rank: 5, name: 'CryptoRoyal', rating: 94, bonus: '100% bis 1 BTC + 10% Cashback' },
    { rank: 6, name: 'Mega Dice', rating: 94, bonus: '200% bis 1 BTC + 50 Freispiele' },
    { rank: 7, name: 'Lucky Block', rating: 92, bonus: '200% bis €10.000 + 50 Freispiele' },
    { rank: 8, name: 'MetaWin', rating: 92, bonus: 'Web3 Casino mit Tesla Gewinnspiel' },
  ];

  const gameTypes = [
    { name: 'Bitcoin Slots', description: '3-Reel, Video Slots und Progressive Jackpots' },
    { name: 'Live Dealer', description: 'Blackjack, Roulette und Baccarat mit echten Dealern' },
    { name: 'Crash Games', description: 'Schnelle Action mit Provably Fair Technologie' },
    { name: 'Sportwetten', description: 'Bitcoin-Wetten auf Fußball, Basketball und mehr' },
    { name: 'Tischspiele', description: 'Klassische Casino-Spiele mit Krypto-Integration' },
    { name: 'Blockchain Spiele', description: 'Exklusive Spiele auf Blockchain-Basis' },
  ];

  const benefits = [
    { title: 'Schnelle Transaktionen', description: 'Bitcoin-Einzahlungen und Auszahlungen werden in Minuten verarbeitet.' },
    { title: 'Anonymität', description: 'Spielen Sie ohne persönliche Daten preiszugeben.' },
    { title: 'Niedrige Gebühren', description: 'Keine Bank- oder Kreditkartengebühren.' },
    { title: '24/7 Support', description: 'Rund um die Uhr Kundensupport in mehreren Sprachen.' },
    { title: 'Provably Fair', description: 'Überprüfbare Fairness durch Blockchain-Technologie.' },
    { title: 'Großzügige Boni', description: 'Bessere Bonusangebote als bei traditionellen Casinos.' },
  ];

  const depositSteps = [
    { step: 1, title: 'Casino wählen', description: 'Wählen Sie ein lizenziertes Bitcoin-Casino aus unserer Liste.' },
    { step: 2, title: 'Konto erstellen', description: 'Registrieren Sie sich und verifizieren Sie Ihr Konto.' },
    { step: 3, title: 'Bitcoin auswählen', description: 'Wählen Sie Bitcoin als Zahlungsmethode.' },
    { step: 4, title: 'Betrag eingeben', description: 'Geben Sie den gewünschten Einzahlungsbetrag ein.' },
    { step: 5, title: 'Transaktion bestätigen', description: 'Bestätigen Sie die Transaktion in Ihrer Wallet.' },
  ];

  const bonusTypes = [
    { title: 'Willkommensbonus', description: 'Prozentuale Aufstockung Ihrer ersten Einzahlung' },
    { title: 'Einzahlungsbonus', description: 'Bonus auf weitere Einzahlungen' },
    { title: 'Freispiele', description: 'Kostenlose Slot-Runden' },
    { title: 'Rakeback', description: 'Rückerstattung eines Teils Ihrer Einsätze' },
    { title: 'VIP Programm', description: 'Exklusive Belohnungen für treue Spieler' },
    { title: 'Cashback', description: 'Wöchentliche Rückerstattung von Verlusten' },
  ];

  return (
    <div className="bitcoin-casinos-page">
      <Helmet>
        <title>Bitcoin Casinos | Die besten BTC Casinos für Deutsche | Deutsche Krypto Casinos</title>
        <meta name="description" content="Entdecken Sie die besten Bitcoin Casinos für deutsche Spieler. Getestet und empfohlen. Schnelle Auszahlungen und großzügige Boni." />
      </Helmet>

      <Header />

      <div className="page-header">
        <div className="container">
          <h1>Bitcoin Casinos</h1>
          <p>Die besten Bitcoin Casinos für deutsche Spieler. Getestet, bewertet und empfohlen.</p>
        </div>
      </div>

      <div className="container">
        <div className="page-content">
          <section className="content-section">
            <h2>Top 8 Bitcoin Casinos für Deutsche</h2>
            <div className="casinos-list">
              {topCasinos.map((casino) => (
                <div key={casino.rank} className="casino-card">
                  <div className="casino-rank">#{casino.rank}</div>
                  <div className="casino-info">
                    <h3>{casino.name}</h3>
                    <div className="casino-meta">
                      <span className="rating">{casino.rating}/100</span>
                      <span className="bonus">{casino.bonus}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2>Vorteile von Bitcoin Casinos</h2>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2>Beliebte Spiele in Bitcoin Casinos</h2>
            <div className="games-grid">
              {gameTypes.map((game, index) => (
                <div key={index} className="game-type-card">
                  <h3>{game.name}</h3>
                  <p>{game.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2>Bitcoin Einzahlung - Schritt für Schritt</h2>
            <div className="steps-list">
              {depositSteps.map((item) => (
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
            <h2>Bitcoin Casino Boni</h2>
            <div className="bonus-types-grid">
              {bonusTypes.map((bonus, index) => (
                <div key={index} className="bonus-type-card">
                  <h3>{bonus.title}</h3>
                  <p>{bonus.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2>Sicherheit & Regulierung</h2>
            <p>
              Seriöse Bitcoin Casinos verfügen über Lizenzen von anerkannten Behörden wie der Malta Gaming
              Authority, Curaçao eGaming oder der UK Gambling Commission. Achten Sie auf SSL-Verschlüsselung,
              Provably Fair Spiele und verantwortungsvolles Spielen-Tools.
            </p>
          </section>

          <section className="content-section">
            <h2>Fazit</h2>
            <p>
              Bitcoin Casinos haben das Online-Glücksspiel revolutioniert. Mit schnellen Transaktionen,
              mehr Anonymität und oft besseren Bonusangeboten bieten sie echte Vorteile gegenüber
              traditionellen Casinos. Wählen Sie ein lizenziertes Casino aus unserer Liste für das
              beste Spielerlebnis.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default BitcoinCasinosPage;
