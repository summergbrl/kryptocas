import React from 'react';
import { Helmet } from 'react-helmet-async';
import './CasinoReviewTemplate.css';

function CasinoReviewTemplate({ casinoData }) {
  const {
    name,
    slug,
    rating,
    tagline,
    description,
    welcomeBonus,
    bonusDetails,
    games,
    gameCount,
    cryptos,
    pros,
    cons,
    features,
    license,
    minDeposit,
    withdrawalTime,
    withdrawalLimit,
    supportHours,
    languages,
    restrictedCountries,
    faqs,
  } = casinoData;

  return (
    <div className="casino-review-page">
      <Helmet>
        <title>{name} Bewertung & Test 2026 | Deutsche Krypto Casinos</title>
        <meta name="description" content={`${name} im Test: ${welcomeBonus}. Lesen Sie unsere ehrliche Bewertung mit Bonus-Details, Spielen und Auszahlungen.`} />
      </Helmet>
<div className="review-hero">
        <div className="container">
          <div className="review-hero-content">
            <div className="casino-badge">
              <span className="rating">{rating}/100</span>
            </div>
            <h1>{name}</h1>
            <p className="tagline">{tagline}</p>
            <div className="hero-bonus">
              <span className="bonus-label">Willkommensbonus:</span>
              <span className="bonus-value">{welcomeBonus}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="review-content">
          {/* Quick Info Box */}
          <section className="quick-info-box">
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Bewertung</span>
                <span className="info-value rating-value">{rating}/100</span>
              </div>
              <div className="info-item">
                <span className="info-label">Spiele</span>
                <span className="info-value">{gameCount}+</span>
              </div>
              <div className="info-item">
                <span className="info-label">Min. Einzahlung</span>
                <span className="info-value">{minDeposit}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Auszahlung</span>
                <span className="info-value">{withdrawalTime}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Lizenz</span>
                <span className="info-value">{license}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Support</span>
                <span className="info-value">{supportHours}</span>
              </div>
            </div>
          </section>

          {/* Introduction */}
          <section className="content-section">
            <h2>Über {name}</h2>
            <p>{description}</p>
          </section>

          {/* Pros & Cons */}
          <section className="content-section">
            <h2>Vor- und Nachteile</h2>
            <div className="pros-cons-grid">
              <div className="pros-box">
                <h3>Vorteile</h3>
                <ul>
                  {pros.map((pro, index) => (
                    <li key={index}>
                      <span className="icon pro">✓</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="cons-box">
                <h3>Nachteile</h3>
                <ul>
                  {cons.map((con, index) => (
                    <li key={index}>
                      <span className="icon con">✗</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Bonus Details */}
          <section className="content-section">
            <h2>Bonus & Aktionen</h2>
            <div className="bonus-cards">
              {bonusDetails.map((bonus, index) => (
                <div key={index} className="bonus-card">
                  <h3>{bonus.title}</h3>
                  <p className="bonus-amount">{bonus.amount}</p>
                  <p className="bonus-desc">{bonus.description}</p>
                  {bonus.code && <span className="bonus-code">Code: {bonus.code}</span>}
                </div>
              ))}
            </div>
          </section>

          {/* Games */}
          <section className="content-section">
            <h2>Spielangebot</h2>
            <p>{name} bietet über {gameCount} Spiele in folgenden Kategorien:</p>
            <div className="games-grid">
              {games.map((game, index) => (
                <div key={index} className="game-category">
                  <span className="game-icon">{game.icon}</span>
                  <span className="game-name">{game.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Cryptos */}
          <section className="content-section">
            <h2>Akzeptierte Kryptowährungen</h2>
            <div className="crypto-list">
              {cryptos.map((crypto, index) => (
                <span key={index} className="crypto-badge">{crypto}</span>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="content-section">
            <h2>Besondere Features</h2>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Restricted Countries */}
          {restrictedCountries && restrictedCountries.length > 0 && (
            <section className="content-section">
              <h2>Eingeschränkte Länder</h2>
              <p>Spieler aus folgenden Ländern können nicht teilnehmen: {restrictedCountries.join(', ')}</p>
            </section>
          )}

          {/* FAQs */}
          {faqs && faqs.length > 0 && (
            <section className="content-section faq-section">
              <h2>Häufig gestellte Fragen</h2>
              <div className="faq-list">
                {faqs.map((faq, index) => (
                  <div key={index} className="faq-item">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Conclusion */}
          <section className="content-section conclusion">
            <h2>Fazit</h2>
            <p>
              {name} erhält von uns eine Bewertung von {rating}/100. Mit {gameCount}+ Spielen,
              schnellen Krypto-Transaktionen und einem attraktiven Willkommensbonus ist {name}
              eine empfehlenswerte Wahl für Krypto-Casino-Spieler.
            </p>
          </section>
        </div>
      </div>
</div>
  );
}

export default CasinoReviewTemplate;
