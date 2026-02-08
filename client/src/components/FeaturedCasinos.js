import React from 'react';
import './FeaturedCasinos.css';

function FeaturedCasinos() {
  const casinos = [
    {
      id: 1,
      name: 'BC.Game',
      rating: 4.8,
      bonus: '180% bis zu 20.000 $',
      features: ['Instant Auszahlung', 'Provably Fair', '10.000+ Spiele']
    },
    {
      id: 2,
      name: 'Stake',
      rating: 4.9,
      bonus: '200% Willkommensbonus',
      features: ['VIP Programm', 'Live Casino', 'Sports Betting']
    },
    {
      id: 3,
      name: 'Bitcasino',
      rating: 4.7,
      bonus: '100% bis zu 1 BTC',
      features: ['24/7 Support', 'Mobile App', 'Cashback']
    }
  ];

  return (
    <section className="featured-casinos">
      <div className="container">
        <h2>Top Krypto-Casinos 2024</h2>
        <p className="section-subtitle">Unsere Empfehlungen für sicheres Spielen</p>

        <div className="casinos-grid">
          {casinos.map((casino) => (
            <div key={casino.id} className="casino-card">
              <div className="casino-header">
                <h3>{casino.name}</h3>
                <div className="rating">
                  <span className="star">★</span>
                  <span>{casino.rating}</span>
                </div>
              </div>

              <div className="casino-bonus">
                <span className="bonus-label">Willkommensbonus</span>
                <span className="bonus-value">{casino.bonus}</span>
              </div>

              <div className="casino-features">
                {casino.features.map((feature, index) => (
                  <div key={index} className="feature">
                    <span className="checkmark">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className="btn btn-primary casino-btn">
                Jetzt spielen
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCasinos;
