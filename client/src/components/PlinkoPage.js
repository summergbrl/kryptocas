import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';
import './PlinkoPage.css';

function PlinkoPage() {
  const topCasinos = [
    { rank: 1, name: 'BC.Game', rating: 98, bonus: '100% + 400 Freispiele' },
    { rank: 2, name: 'CryptoLeo', rating: 97, bonus: '225% bis €5.000' },
    { rank: 3, name: 'WSM Casino', rating: 97, bonus: '200% bis €25.000' },
    { rank: 4, name: 'Jackbit', rating: 96, bonus: 'Keine Auszahlungslimits' },
    { rank: 5, name: 'Mega Dice', rating: 94, bonus: '200% bis 1 BTC + 50 Freispiele' },
  ];

  const plinkoVariants = [
    { name: 'Plinko 1000', provider: 'CryptoLeo', feature: 'Bis zu 1000x Multiplikator' },
    { name: 'Turbo Plinko', provider: 'Turbo Games', feature: 'Futuristische Oberfläche, anpassbare Einstellungen' },
    { name: 'Plinko', provider: 'Game Art', feature: 'Einstellbares Risiko, bis zu 2.501x' },
    { name: 'Plinko', provider: 'Ela Games', feature: 'Flexible Mechanik, höchste Gewinne in der Mitte' },
    { name: 'Plinko X', provider: 'Smartsoft', feature: 'Farbige Kugeln mit zufälligen Multiplikatoren bis 10x' },
    { name: '8bit Plinko', provider: 'Lamda Gaming', feature: 'Retro-Ästhetik mit Bonus-Kugel-Features' },
    { name: 'Pawsome Plinko', provider: 'One Touch Gaming', feature: 'Multiplikator-System, bis 10.000x möglich' },
    { name: 'Plinko Rush', provider: 'Betsoft', feature: 'Anpassbare Variablen mit Autoplay' },
  ];

  const howToPlay = [
    { step: 1, title: 'Einsatz wählen', description: 'Legen Sie Ihren Einsatzbetrag fest.' },
    { step: 2, title: 'Risiko einstellen', description: 'Wählen Sie niedrig, mittel oder hoch für verschiedene Auszahlungsmuster.' },
    { step: 3, title: 'Reihen wählen', description: 'Mehr Reihen bedeuten mehr mögliche Landepositionen.' },
    { step: 4, title: 'Kugel fallen lassen', description: 'Die Kugel fällt durch Hindernisse und landet in einer Auszahlungszone.' },
  ];

  const tips = [
    'Passen Sie das Risikoniveau an Ihre Toleranz an',
    'Nutzen Sie Willkommensboni für maximales Spielerlebnis',
    'Wählen Sie zuverlässige Krypto-Wallets für Ein-/Auszahlungen',
    'Testen Sie kostenlose Demo-Versionen bevor Sie echtes Geld einsetzen',
    'Setzen Sie sich ein Budget und halten Sie sich daran',
  ];

  return (
    <div className="plinko-page">
      <Helmet>
        <title>Plinko Krypto-Casino | Top Casinos mit Plinko | Deutsche Krypto Casinos</title>
        <meta name="description" content="Spielen Sie Plinko in den besten Krypto Casinos. Provably Fair Technologie, bis zu 10.000x Multiplikatoren und exklusive Boni." />
      </Helmet>

      <Header />

      <div className="page-header">
        <div className="container">
          <h1>Plinko Krypto-Casino</h1>
          <p>Entdecken Sie die besten Plinko-Spiele mit Provably Fair Technologie und aufregenden Multiplikatoren.</p>
        </div>
      </div>

      <div className="container">
        <div className="page-content">
          <section className="content-section">
            <h2>Was ist Plinko?</h2>
            <p>
              Bei Plinko lassen Sie Kugeln von oben durch Hindernisse fallen. Je nachdem, wo die Kugel
              landet, wird ein Gewinn ausgezahlt. Zentrale Felder bieten niedrigere Belohnungen, während
              äußere Felder höhere Preise bieten. Dank Provably Fair Technologie können Sie die Fairness
              jeder Runde selbst überprüfen.
            </p>
          </section>

          <section className="content-section">
            <h2>Top Casinos für Plinko</h2>
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
            <h2>So spielen Sie Plinko</h2>
            <div className="steps-list">
              {howToPlay.map((item) => (
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
            <h2>Beliebte Plinko-Varianten</h2>
            <div className="variants-grid">
              {plinkoVariants.map((variant, index) => (
                <div key={index} className="variant-card">
                  <h3>{variant.name}</h3>
                  <p className="provider">{variant.provider}</p>
                  <p className="feature">{variant.feature}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2>Tipps für Plinko</h2>
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
            <h2>Warum Plinko so beliebt ist</h2>
            <p>
              Spieler schätzen die Kombination aus Einfachheit, Spannung und schnellen Runden.
              Das Provably Fair System ermöglicht es Spielern, die Legitimität des Spiels
              unabhängig zu überprüfen, was für Vertrauen und Transparenz sorgt.
            </p>
          </section>

          <section className="content-section">
            <h2>Fazit</h2>
            <p>
              Plinko ist ein aufregendes Krypto-Casino-Spiel mit einfachen Regeln aber hohem
              Unterhaltungswert. Mit Multiplikatoren bis zu 10.000x und der Sicherheit von
              Provably Fair Technologie ist es keine Überraschung, dass Plinko eines der
              beliebtesten Krypto-Casino-Spiele geworden ist.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PlinkoPage;
