import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';
import './KryptoWalletsPage.css';

function KryptoWalletsPage() {
  const wallets = [
    {
      name: 'MetaMask',
      type: 'Hot Wallet',
      best: 'Ethereum-basierte Casinos',
      features: ['Browser-Extension', 'Mobile App', 'ERC-20 Token Support', 'DApp Integration'],
      description: 'Die beliebteste Wallet für Ethereum und ERC-20 Tokens. Ideal für die Interaktion mit dezentralen Anwendungen.',
    },
    {
      name: 'Trust Wallet',
      type: 'Hot Wallet',
      best: 'Mobile Nutzer',
      features: ['iOS & Android', 'Multi-Chain Support', 'Staking möglich', 'NFT Support'],
      description: 'Optimale Wahl für mobile Nutzer. Unterstützt eine Vielzahl von Blockchains und Kryptowährungen.',
    },
    {
      name: 'Exodus',
      type: 'Hot Wallet',
      best: 'Multi-Währung Support',
      features: ['Desktop & Mobile', '115+ Kryptowährungen', '60+ Blockchains', 'Benutzerfreundlich'],
      description: 'Perfekt für Nutzer, die verschiedene Kryptowährungen verwalten möchten. Intuitive Benutzeroberfläche.',
    },
    {
      name: 'Ledger Nano',
      type: 'Cold Wallet',
      best: 'Maximale Sicherheit',
      features: ['Hardware Wallet', 'Offline Speicherung', '5.500+ Coins', 'Bluetooth (Nano X)'],
      description: 'Die sicherste Option für die Aufbewahrung größerer Beträge. Schützt Ihre Keys offline.',
    },
    {
      name: 'Trezor',
      type: 'Cold Wallet',
      best: 'Open Source Sicherheit',
      features: ['Hardware Wallet', 'Open Source', 'Touchscreen (Model T)', 'Passphrase Support'],
      description: 'Open Source Hardware Wallet mit bewährter Sicherheit. Ideal für sicherheitsbewusste Nutzer.',
    },
    {
      name: 'Coinbase Wallet',
      type: 'Hot Wallet',
      best: 'Anfänger',
      features: ['Einfache Bedienung', 'Börsen-Integration', 'DApp Browser', 'Cloud Backup'],
      description: 'Perfekt für Krypto-Neulinge. Nahtlose Integration mit der Coinbase-Börse.',
    },
  ];

  const walletTypes = [
    {
      type: 'Hot Wallets',
      description: 'Internet-verbundene Wallets für häufige Transaktionen',
      pros: ['Schneller Zugriff', 'Benutzerfreundlich', 'Kostenlos'],
      cons: ['Weniger sicher', 'Anfällig für Hacks'],
    },
    {
      type: 'Cold Wallets',
      description: 'Offline-Speicherung für maximale Sicherheit',
      pros: ['Höchste Sicherheit', 'Offline-Schutz', 'Langzeit-Speicherung'],
      cons: ['Kostenpflichtig', 'Weniger praktisch'],
    },
  ];

  const securityTips = [
    'Aktivieren Sie die Zwei-Faktor-Authentifizierung (2FA)',
    'Verwenden Sie starke, einzigartige Passwörter',
    'Speichern Sie Ihre Seed-Phrase offline an einem sicheren Ort',
    'Laden Sie Wallets nur von offiziellen Quellen herunter',
    'Seien Sie vorsichtig bei Phishing-Versuchen',
    'Teilen Sie niemals Ihre Private Keys',
  ];

  const steps = [
    { step: 1, title: 'Wallet herunterladen', description: 'Laden Sie die Wallet-App von der offiziellen Website oder dem App Store herunter.' },
    { step: 2, title: 'Konto einrichten', description: 'Erstellen Sie ein neues Wallet und notieren Sie Ihre Seed-Phrase sicher.' },
    { step: 3, title: 'Krypto einzahlen', description: 'Senden Sie Kryptowährungen von einer Börse oder einem anderen Wallet.' },
    { step: 4, title: 'Mit Casino verbinden', description: 'Verbinden Sie Ihre Wallet mit dem Krypto-Casino Ihrer Wahl.' },
  ];

  return (
    <div className="krypto-wallets-page">
      <Helmet>
        <title>Beste Krypto Wallets für Casinos | Deutsche Krypto Casinos</title>
        <meta name="description" content="Entdecken Sie die besten Krypto-Wallets für Casino-Transaktionen. MetaMask, Trust Wallet, Ledger und mehr im Vergleich." />
      </Helmet>

      <Header />

      <div className="page-header">
        <div className="container">
          <h1>Krypto Wallets</h1>
          <p>Die besten Wallets für sichere Casino-Transaktionen. Vergleichen Sie Features, Sicherheit und Benutzerfreundlichkeit.</p>
        </div>
      </div>

      <div className="container">
        <div className="page-content">
          <section className="content-section">
            <h2>Was ist eine Krypto-Wallet?</h2>
            <p>
              Eine Krypto-Wallet ermöglicht die direkte Interaktion mit der Blockchain und die Verwaltung
              Ihrer Kryptowährungen ohne Drittanbieter. Sie können damit Kryptowährungen senden, empfangen
              und sicher aufbewahren.
            </p>
          </section>

          <section className="content-section">
            <h2>Wallet-Typen</h2>
            <div className="wallet-types-grid">
              {walletTypes.map((type, index) => (
                <div key={index} className="wallet-type-card">
                  <h3>{type.type}</h3>
                  <p>{type.description}</p>
                  <div className="pros-cons">
                    <div className="pros">
                      <h4>Vorteile</h4>
                      <ul>
                        {type.pros.map((pro, i) => (
                          <li key={i}><span className="icon pro">✓</span>{pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="cons">
                      <h4>Nachteile</h4>
                      <ul>
                        {type.cons.map((con, i) => (
                          <li key={i}><span className="icon con">✗</span>{con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2>Empfohlene Wallets</h2>
            <div className="wallets-grid">
              {wallets.map((wallet, index) => (
                <div key={index} className="wallet-card">
                  <div className="wallet-header">
                    <h3>{wallet.name}</h3>
                    <span className="wallet-type-badge">{wallet.type}</span>
                  </div>
                  <p className="wallet-best">Beste für: {wallet.best}</p>
                  <p className="wallet-desc">{wallet.description}</p>
                  <div className="wallet-features">
                    {wallet.features.map((feature, i) => (
                      <span key={i} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2>Wallet einrichten</h2>
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
            <h2>Sicherheitstipps</h2>
            <div className="security-tips">
              {securityTips.map((tip, index) => (
                <div key={index} className="tip-item">
                  <span className="tip-icon">🔒</span>
                  <p>{tip}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2>Fazit</h2>
            <p>
              Die Wahl der richtigen Wallet hängt von Ihren Bedürfnissen ab. Für häufige Casino-Transaktionen
              eignen sich Hot Wallets wie MetaMask oder Trust Wallet. Für die sichere Aufbewahrung größerer
              Beträge empfehlen wir Hardware Wallets wie Ledger oder Trezor.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default KryptoWalletsPage;
