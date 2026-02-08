import React from 'react';
import { Helmet } from 'react-helmet-async';
import './BonusesPage.css';

function BonusesPage() {
  const bonuses = [
    {
      id: 1,
      casino: 'BC.Game',
      type: 'Willkommensbonus',
      offer: '180% bis zu 20.000 $',
      code: 'CRYPTO180',
      wager: '40x',
      minDeposit: '0.0001 BTC'
    },
    {
      id: 2,
      casino: 'Stake',
      type: 'Willkommensbonus',
      offer: '200% Match Bonus',
      code: 'STAKE200',
      wager: '35x',
      minDeposit: '0.0001 BTC'
    },
    {
      id: 3,
      casino: 'Bitcasino',
      type: 'Einzahlungsbonus',
      offer: '100% bis zu 1 BTC',
      code: 'BIT100',
      wager: '30x',
      minDeposit: '0.001 BTC'
    },
    {
      id: 4,
      casino: 'FortuneJack',
      type: 'Paketbonus',
      offer: '6 BTC + 250 FS',
      code: 'JACK6BTC',
      wager: '40x',
      minDeposit: '0.002 BTC'
    }
  ];

  return (
    <div className="bonuses-page">
      <Helmet>
        <title>Krypto Casino Bonusse 2024 | Deutsche Krypto Casinos</title>
        <meta name="description" content="Die besten Krypto Casino Boni. Exklusive Willkommensboni und Freispiele für deutsche Spieler." />
      </Helmet>

      <div className="page-header">
        <div className="container">
          <h1>Krypto Casino Bonusse</h1>
          <p>Exklusive Boni und Promotionen für Krypto-Spieler</p>
        </div>
      </div>

      <div className="container">
        <div className="bonuses-grid">
          {bonuses.map((bonus) => (
            <div key={bonus.id} className="bonus-card">
              <div className="bonus-header">
                <h3>{bonus.casino}</h3>
                <span className="bonus-type">{bonus.type}</span>
              </div>

              <div className="bonus-offer">
                <div className="offer-amount">{bonus.offer}</div>
              </div>

              <div className="bonus-details">
                <div className="bonus-row">
                  <span className="label">Bonuscode:</span>
                  <span className="value code">{bonus.code}</span>
                </div>
                <div className="bonus-row">
                  <span className="label">Umsatz:</span>
                  <span className="value">{bonus.wager}</span>
                </div>
                <div className="bonus-row">
                  <span className="label">Min. Einzahlung:</span>
                  <span className="value">{bonus.minDeposit}</span>
                </div>
              </div>

              <button className="btn btn-primary bonus-btn">
                Bonus holen
              </button>
            </div>
          ))}
        </div>

        <div className="bonus-info-section">
          <h2>So funktionieren Krypto Casino Boni</h2>
          <div className="info-cards">
            <div className="info-card-bonus">
              <h3>1. Casino auswählen</h3>
              <p>Wählen Sie ein Casino mit einem attraktiven Bonus aus unserer Liste.</p>
            </div>
            <div className="info-card-bonus">
              <h3>2. Registrieren</h3>
              <p>Erstellen Sie ein Konto beim ausgewählten Casino.</p>
            </div>
            <div className="info-card-bonus">
              <h3>3. Einzahlen</h3>
              <p>Machen Sie Ihre erste Einzahlung mit Kryptowährungen.</p>
            </div>
            <div className="info-card-bonus">
              <h3>4. Bonus erhalten</h3>
              <p>Ihr Bonus wird automatisch oder mit einem Code aktiviert.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BonusesPage;
