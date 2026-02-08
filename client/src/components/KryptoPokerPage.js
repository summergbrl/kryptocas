import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';
import './KryptoPokerPage.css';

function KryptoPokerPage() {
  const pokerHands = [
    { name: 'Royal Flush', description: 'A, K, Q, J, 10 der gleichen Farbe' },
    { name: 'Straight Flush', description: 'Fünf aufeinanderfolgende Karten der gleichen Farbe' },
    { name: 'Vierling', description: 'Vier Karten des gleichen Werts' },
    { name: 'Full House', description: 'Drilling + Paar' },
    { name: 'Flush', description: 'Fünf Karten der gleichen Farbe' },
    { name: 'Straight', description: 'Fünf aufeinanderfolgende Karten' },
    { name: 'Drilling', description: 'Drei Karten des gleichen Werts' },
    { name: 'Zwei Paare', description: 'Zwei verschiedene Paare' },
    { name: 'Paar', description: 'Zwei Karten des gleichen Werts' },
    { name: 'High Card', description: 'Höchste Karte gewinnt' },
  ];

  const pokerVariants = [
    {
      name: 'Texas Hold\'em',
      description: 'Jeder Spieler erhält zwei Karten. Fünf Gemeinschaftskarten werden aufgedeckt. Die beste 5-Karten-Hand gewinnt.',
    },
    {
      name: 'Omaha',
      description: 'Ähnlich wie Texas Hold\'em, aber jeder Spieler erhält vier Karten und muss genau zwei davon verwenden.',
    },
    {
      name: '7-Card Stud',
      description: 'Jeder Spieler erhält drei verdeckte und vier offene Karten. Keine Gemeinschaftskarten.',
    },
  ];

  const bonusTypes = [
    {
      name: 'Willkommensbonus',
      description: 'Für neue Spieler bei der Registrierung. Oft ein Bonusbetrag und kostenlose Turniertickets mit der ersten Einzahlung.',
    },
    {
      name: 'Einzahlungsbonus',
      description: 'Zusätzliches Bonusguthaben, das sich prozentual nach der Höhe Ihrer Einzahlung richtet.',
    },
    {
      name: 'Rakeback-Programme',
      description: 'Loyale Spieler erhalten einen Anteil der gezahlten Rakes zurück. Verschiedene Belohnungsstufen verfügbar.',
    },
  ];

  const topPokerSites = [
    {
      rank: 1,
      name: 'CoinPoker',
      features: ['Krypto-native Plattform', 'Provably Fair Technologie', 'Niedrige Rakes', 'Eigener CHP Token'],
    },
    {
      rank: 2,
      name: 'GG Poker',
      features: ['Große Spielerbasis', 'Viele Turniere', 'Mobile App verfügbar', 'Krypto-Einzahlungen'],
    },
    {
      rank: 3,
      name: 'PokerStars',
      features: ['Weltgrößte Poker-Plattform', 'Riesige Turnierauswahl', 'Hohe Liquidität', 'Krypto akzeptiert'],
    },
    {
      rank: 4,
      name: 'StakePoker',
      features: ['Krypto-fokussiert', 'Schnelle Auszahlungen', 'Anonymes Spielen', 'Gute Bonusangebote'],
    },
    {
      rank: 5,
      name: 'WPT Global',
      features: ['Offizielle WPT Plattform', 'Hochkarätige Events', 'Krypto-Zahlungen', 'Exklusive Turniere'],
    },
  ];

  const steps = [
    {
      step: 1,
      title: 'Wallet einrichten',
      description: 'Wählen Sie eine Krypto-Wallet wie MetaMask oder Trust Wallet und richten Sie diese vollständig ein.',
    },
    {
      step: 2,
      title: 'Kryptowährung kaufen',
      description: 'Kaufen Sie Bitcoin oder Ethereum über eine Kryptobörse und übertragen Sie diese auf Ihre Wallet.',
    },
    {
      step: 3,
      title: 'Poker-Seite wählen',
      description: 'Wählen Sie die beste Krypto Poker Seite und registrieren Sie ein neues Spielerkonto.',
    },
    {
      step: 4,
      title: 'Einzahlen & Spielen',
      description: 'Tätigen Sie eine Einzahlung an die angezeigte Wallet-Adresse und beginnen Sie zu spielen.',
    },
  ];

  return (
    <div className="krypto-poker-page">
      <Helmet>
        <title>Krypto Poker – Die besten Poker Seiten im Überblick | Deutsche Krypto Casinos</title>
        <meta name="description" content="Entdecken Sie die besten Krypto Poker Seiten. Spielen Sie anonym mit Bitcoin und Ethereum. Provably Fair Technologie für faires Spiel." />
      </Helmet>

      <Header />

      <div className="page-header">
        <div className="container">
          <h1>Krypto Poker</h1>
          <p>Spielen Sie Poker mit Bitcoin, Ethereum und anderen Kryptowährungen. Schnelle Transaktionen, Anonymität und Provably Fair Technologie.</p>
        </div>
      </div>

      <div className="container">
        <div className="page-content">
          <section className="content-section">
            <h2>Was ist Krypto Poker?</h2>
            <p>
              Krypto Poker erfreut sich wachsender Beliebtheit. Mit den Vorteilen von Kryptowährungen können Sie
              anonym, schnell und sicher Ein- und Auszahlungen tätigen. Bitcoin ist die beliebteste Kryptowährung
              für das Pokerspielen, doch auch Ethereum und andere Coins werden akzeptiert.
            </p>
            <p>
              Dank moderner Provably Fair Technologie können Spieler über die Blockchain Spielergebnisse verifizieren
              und somit einen fairen Spielablauf sicherstellen. Es ist für Anbieter unmöglich, den Spielausgang zu manipulieren.
            </p>
          </section>

          <section className="content-section">
            <h2>Pokerhände im Überblick</h2>
            <p>Bevor Sie mit Krypto Poker beginnen, sollten Sie die Pokerhände kennen (von stärkster zu schwächster):</p>
            <div className="hands-grid">
              {pokerHands.map((hand, index) => (
                <div key={index} className="hand-card">
                  <span className="hand-rank">{index + 1}</span>
                  <div className="hand-info">
                    <h3>{hand.name}</h3>
                    <p>{hand.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2>Die wichtigsten Pokervarianten</h2>
            <div className="variants-grid">
              {pokerVariants.map((variant, index) => (
                <div key={index} className="variant-card">
                  <h3>{variant.name}</h3>
                  <p>{variant.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2>Poker: Glück oder Geschick?</h2>
            <p>
              Im Poker wird häufig diskutiert, ob es sich um ein Glücksspiel oder Geschicklichkeitsspiel handelt.
              Mit mathematischer Wahrscheinlichkeitsrechnung können Sie den Spielausgang abschätzen. Theoretisch
              ist es möglich, mit einem rechnerischen Ansatz profitabel zu spielen.
            </p>
            <p>
              Tatsächlich gewinnen etwa 70% der Spielrunden nicht die besten Starthände. Es ist wichtig, sich
              dynamisch am Spielgeschehen zu orientieren und die Mitspieler sorgfältig zu lesen.
            </p>
          </section>

          <section className="content-section">
            <h2>Die besten Krypto Poker Seiten</h2>
            <div className="poker-sites-list">
              {topPokerSites.map((site) => (
                <div key={site.rank} className="poker-site-card">
                  <div className="site-rank">#{site.rank}</div>
                  <div className="site-info">
                    <h3>{site.name}</h3>
                    <ul className="site-features">
                      {site.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2>Bonusangebote im Krypto Poker</h2>
            <div className="bonus-grid">
              {bonusTypes.map((bonus, index) => (
                <div key={index} className="bonus-card">
                  <h3>{bonus.name}</h3>
                  <p>{bonus.description}</p>
                </div>
              ))}
            </div>
            <p className="bonus-note">
              Krypto-Plattformen bieten oft großzügigere Bonusangebote als traditionelle Anbieter.
            </p>
          </section>

          <section className="content-section">
            <h2>So starten Sie mit Krypto Poker</h2>
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
            <h2>Krypto Poker vs. Traditionelles Online Poker</h2>
            <div className="comparison-list">
              <div className="comparison-item advantage">
                <span className="icon">✓</span>
                <p>Schnellere Ein- und Auszahlungen</p>
              </div>
              <div className="comparison-item advantage">
                <span className="icon">✓</span>
                <p>Höhere Anonymität beim Spielen</p>
              </div>
              <div className="comparison-item advantage">
                <span className="icon">✓</span>
                <p>Provably Fair Technologie für nachweislich faire Spiele</p>
              </div>
              <div className="comparison-item advantage">
                <span className="icon">✓</span>
                <p>Oft bessere Bonusangebote</p>
              </div>
              <div className="comparison-item advantage">
                <span className="icon">✓</span>
                <p>Niedrigere Transaktionsgebühren</p>
              </div>
            </div>
          </section>

          <section className="content-section">
            <h2>Fazit</h2>
            <p>
              Krypto Poker bietet eine moderne Alternative zum traditionellen Online Poker. Mit schnellen Transaktionen,
              hoher Anonymität und der Sicherheit durch Provably Fair Technologie ist es die ideale Wahl für
              Poker-Enthusiasten, die die Vorteile von Kryptowährungen nutzen möchten.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default KryptoPokerPage;
