import React from 'react';
import { Helmet } from 'react-helmet-async';
import './CasinosPage.css';

function CasinosPage() {
  const casinos = [
    {
      id: 1,
      name: 'BC.Game',
      rating: 4.8,
      bonus: '180% bis zu 20.000 $',
      minDeposit: '0.0001 BTC',
      games: '10,000+',
      license: 'Curaçao'
    },
    {
      id: 2,
      name: 'Stake',
      rating: 4.9,
      bonus: '200% Willkommensbonus',
      minDeposit: '0.0001 BTC',
      games: '5,000+',
      license: 'Curaçao'
    },
    {
      id: 3,
      name: 'Bitcasino',
      rating: 4.7,
      bonus: '100% bis zu 1 BTC',
      minDeposit: '0.001 BTC',
      games: '3,000+',
      license: 'Curaçao'
    },
    {
      id: 4,
      name: 'FortuneJack',
      rating: 4.6,
      bonus: '6 BTC + 250 Freispiele',
      minDeposit: '0.002 BTC',
      games: '2,500+',
      license: 'Curaçao'
    }
  ];

  return (
    <div className="casinos-page">
      <Helmet>
        <title>Beste Krypto Casinos 2024 | Deutsche Krypto Casinos</title>
        <meta name="description" content="Vergleichen Sie die besten Krypto-Casinos. Sichere Plattformen mit Bitcoin, Ethereum und mehr." />
      </Helmet>

      <div className="page-header">
        <div className="container">
          <h1>Beste Krypto Casinos</h1>
          <p>Vergleichen Sie die top Krypto-Casinos und finden Sie die beste Plattform für Sie</p>
        </div>
      </div>

      <div className="container">
        <div className="casinos-list">
          {casinos.map((casino, index) => (
            <div key={casino.id} className="casino-item">
              <div className="casino-rank">#{index + 1}</div>

              <div className="casino-main">
                <div className="casino-info">
                  <h2>{casino.name}</h2>
                  <div className="rating-large">
                    <span className="stars">★★★★★</span>
                    <span className="rating-value">{casino.rating}/5.0</span>
                  </div>
                </div>

                <div className="casino-details">
                  <div className="detail-item">
                    <span className="detail-label">Bonus:</span>
                    <span className="detail-value">{casino.bonus}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Min. Einzahlung:</span>
                    <span className="detail-value">{casino.minDeposit}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Spiele:</span>
                    <span className="detail-value">{casino.games}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Lizenz:</span>
                    <span className="detail-value">{casino.license}</span>
                  </div>
                </div>
              </div>

              <div className="casino-actions">
                <button className="btn btn-primary">Jetzt spielen</button>
                <button className="btn btn-secondary">Mehr erfahren</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CasinosPage;
