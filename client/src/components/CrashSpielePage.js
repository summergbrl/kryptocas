import React from 'react';
import { Helmet } from 'react-helmet-async';
import './CrashSpielePage.css';

function CrashSpielePage() {
  const topCasinos = [
    { rank: 1, name: 'WSM Casino', bonus: '200% bis €25.000', withdrawal: '€9.500/Tag' },
    { rank: 2, name: 'Mega Dice', bonus: '200% bis 1 BTC', withdrawal: 'Unbegrenzt' },
    { rank: 3, name: 'Flush Casino', bonus: '150% bis €1.000', withdrawal: '€2.500/Tag' },
    { rank: 4, name: 'Kripty Casino', bonus: 'Bis zu €2.250', withdrawal: 'Unbegrenzt' },
    { rank: 5, name: 'Cloudbet', bonus: '100% bis 5 BTC', withdrawal: 'Unbegrenzt' },
  ];

  const popularGames = [
    { name: 'Aviator', provider: 'Spribe', description: 'Der Klassiker: Ein Flugzeug steigt und Sie müssen auscashen bevor es abstürzt.' },
    { name: 'JetX', provider: 'SmartSoft Gaming', description: 'Jet und Fallschirm-Mechanik mit spannenden Multiplikatoren.' },
    { name: 'Cash or Crash', provider: 'Evolution', description: 'Raketen-Variante mit Live-Dealer Elementen.' },
    { name: 'Bustabit', provider: 'Bustabit Games', description: 'Der Original Chart-basierte Crash-Klassiker.' },
    { name: 'Space XY', provider: 'BGaming', description: 'Space Shuttle Konzept mit innovativen Features.' },
  ];

  const advantages = [
    { title: 'Niedriger Hausvorteil', description: 'Crash Games haben oft nur 1-3% Hausvorteil, verglichen mit 5-20% bei Slots.' },
    { title: 'Provably Fair', description: 'Blockchain-basierte Verifizierung garantiert faire Spielergebnisse.' },
    { title: 'Spieler-Entscheidungen', description: 'Im Gegensatz zu Slots entscheiden Sie selbst, wann Sie auscashen.' },
    { title: 'Schnelle Runden', description: 'Jede Runde dauert nur wenige Sekunden für schnelle Action.' },
  ];

  const strategies = [
    { title: 'Niedrige Multiplikatoren', description: 'Cashen Sie früh bei 1.2x-1.5x aus für häufigere, kleinere Gewinne.' },
    { title: 'Hohe Multiplikatoren', description: 'Warten Sie auf hohe Multiplikatoren für seltene, aber große Gewinne.' },
    { title: 'Double Bet Strategie', description: 'Setzen Sie zwei Wetten: Eine früh auscashen, eine auf höhere Multiplikatoren.' },
    { title: 'Bankroll Management', description: 'Setzen Sie nur 1-2% Ihres Guthabens pro Runde.' },
  ];

  return (
    <div className="crash-spiele-page">
      <Helmet>
        <title>Crash Spiele | Die besten Krypto Crash Games | Deutsche Krypto Casinos</title>
        <meta name="description" content="Entdecken Sie die besten Crash Spiele in Krypto Casinos. Aviator, JetX und mehr mit Provably Fair Technologie." />
      </Helmet>
<div className="page-header">
        <div className="container">
          <h1>Crash Spiele</h1>
          <p>Entdecken Sie die aufregendsten Crash Games in Krypto Casinos. Schnelle Action, niedrige Hausvorteile und Provably Fair Technologie.</p>
        </div>
      </div>

      <div className="container">
        <div className="page-content">
          <section className="content-section">
            <h2>Was sind Crash Spiele?</h2>
            <p>
              Bei Crash Spielen beginnt ein Multiplikator bei Null und steigt kontinuierlich an. Zu einem
              zufälligen Zeitpunkt endet die Runde. Das Ziel ist es, auszucashen bevor die Runde endet,
              um Ihren Einsatz mit dem aktuellen Multiplikator zu multiplizieren.
            </p>
          </section>

          <section className="content-section">
            <h2>Top Casinos für Crash Spiele</h2>
            <div className="casinos-list">
              {topCasinos.map((casino) => (
                <div key={casino.rank} className="casino-card">
                  <div className="casino-rank">#{casino.rank}</div>
                  <div className="casino-info">
                    <h3>{casino.name}</h3>
                    <p className="casino-bonus">{casino.bonus}</p>
                    <span className="withdrawal-limit">Auszahlung: {casino.withdrawal}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2>Beliebte Crash Games</h2>
            <div className="games-grid">
              {popularGames.map((game, index) => (
                <div key={index} className="game-card">
                  <h3>{game.name}</h3>
                  <p className="provider">{game.provider}</p>
                  <p className="description">{game.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2>Vorteile von Crash Games</h2>
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
            <h2>Crash Game Strategien</h2>
            <div className="strategies-grid">
              {strategies.map((strategy, index) => (
                <div key={index} className="strategy-card">
                  <h3>{strategy.title}</h3>
                  <p>{strategy.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2>Crash Games vs. Slots</h2>
            <div className="comparison-table">
              <div className="comparison-header">
                <div className="comparison-cell">Feature</div>
                <div className="comparison-cell highlight">Crash Games</div>
                <div className="comparison-cell">Slots</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell">Hausvorteil</div>
                <div className="comparison-cell highlight">1-3%</div>
                <div className="comparison-cell">5-20%</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell">Spieler-Entscheidung</div>
                <div className="comparison-cell highlight">Ja</div>
                <div className="comparison-cell">Nein</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell">Provably Fair</div>
                <div className="comparison-cell highlight">Verfügbar</div>
                <div className="comparison-cell">Selten</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell">Rundendauer</div>
                <div className="comparison-cell highlight">Sekunden</div>
                <div className="comparison-cell">Sekunden</div>
              </div>
            </div>
          </section>

          <section className="content-section">
            <h2>Fazit</h2>
            <p>
              Crash Spiele bieten durch ihre niedrigen Hausvorteile, Provably Fair Verifizierung und
              Spieler-Entscheidungen eine einzigartige Alternative zu traditionellen Casino-Spielen.
              Nutzen Sie Boni, setzen Sie sich ein Budget und wählen Sie eine Strategie die zu Ihrem
              Spielstil passt.
            </p>
          </section>
        </div>
      </div>
</div>
  );
}

export default CrashSpielePage;
