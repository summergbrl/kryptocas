import React from 'react';
import CasinoReviewTemplate from '../CasinoReviewTemplate';

const casinoData = {
  name: 'Jackbit Casino',
  slug: 'jackbit-casino',
  rating: 96,
  tagline: 'Spielen auf höchstem Niveau!',
  description: 'Jackbit Casino ist eine führende Krypto-Gaming-Plattform, die über 3.500 Spiele von Top-Anbietern anbietet. Mit schneller Registrierung, großzügigen Boni ohne Umsatzbedingungen und blitzschnellen Krypto-Auszahlungen ist Jackbit eine erstklassige Wahl für deutsche Spieler.',
  welcomeBonus: '100 Freispiele ohne Umsatzbedingungen',
  bonusDetails: [
    {
      title: 'Willkommensbonus',
      amount: '100 Freispiele',
      description: 'Keine Umsatzbedingungen! Min. Einzahlung $50. Maximaler Gewinn $100.',
      code: 'WELCOME',
    },
    {
      title: '3+1 Freebet',
      amount: '15% der Einsätze',
      description: 'Jede 3. Wette löst eine Gratiswette im Wert von 15% der kumulierten Einsätze aus.',
      code: null,
    },
    {
      title: 'VIP Rakeback Club',
      amount: 'Sofortiges Rakeback',
      description: 'Rakeback auf alle Einsätze ohne Umsatzbedingungen. Punkte jederzeit in Echtgeld umwandeln.',
      code: null,
    },
  ],
  games: [
    { name: 'Slots', icon: '🎰' },
    { name: 'Live Dealer', icon: '🎲' },
    { name: 'Tischspiele', icon: '♠️' },
    { name: 'Crash Games', icon: '📈' },
    { name: 'Poker', icon: '🃏' },
    { name: 'Megaways', icon: '💎' },
    { name: 'Würfelspiele', icon: '🎯' },
    { name: 'Roulette', icon: '🎡' },
  ],
  gameCount: 3500,
  cryptos: ['Bitcoin', 'Ethereum', 'Litecoin', 'XRP', 'USDT', 'Dogecoin', 'Cardano', 'TRON', 'BCH', 'BNB'],
  pros: [
    'Schneller Registrierungsprozess',
    'Über 3.500 Spiele verfügbar',
    'Große Kryptowährungsauswahl',
    'Innovatives Treueprogramm',
    'Boni ohne Umsatzbedingungen',
    'Keine Auszahlungslimits',
    'Live Dealer Spiele',
  ],
  cons: [
    'Keine native Mobile App',
    'Curaçao Lizenz (nicht EU-reguliert)',
    'Englischsprachiger Support',
  ],
  features: [
    {
      title: 'VIP Rakeback Club',
      description: 'Erhalten Sie sofortiges Rakeback auf alle Ihre Wetten. Keine Umsatzbedingungen - wandeln Sie Punkte jederzeit in Echtgeld um.',
    },
    {
      title: 'Provably Fair',
      description: 'Überprüfen Sie die Fairness jedes Spielergebnisses mit der Blockchain-basierten Provably Fair Technologie.',
    },
    {
      title: 'Blitzschnelle Auszahlungen',
      description: 'Krypto-Auszahlungen werden innerhalb von Minuten verarbeitet. Keine maximalen Auszahlungslimits.',
    },
    {
      title: '24/7 Support',
      description: 'Kundenservice rund um die Uhr per E-Mail und Live-Chat in mehreren Sprachen.',
    },
  ],
  license: 'Curaçao',
  minDeposit: '0.0001 BTC',
  withdrawalTime: 'Unter 10 Min.',
  withdrawalLimit: 'Unbegrenzt',
  supportHours: '24/7',
  languages: ['Deutsch', 'Englisch', 'Türkisch', 'Russisch', 'Spanisch', 'Französisch'],
  restrictedCountries: ['Australien', 'Lettland', 'Niederlande'],
  faqs: [
    {
      question: 'Ist Jackbit Casino sicher?',
      answer: 'Ja, Jackbit Casino ist von Curaçao lizenziert und verwendet moderne Sicherheitstechnologien zum Schutz Ihrer Daten und Gelder.',
    },
    {
      question: 'Wie viele Spiele bietet Jackbit?',
      answer: 'Jackbit bietet über 6.000 Spiele insgesamt, darunter Slots, Live Dealer, Tischspiele und Crash Games.',
    },
    {
      question: 'Gibt es eine Jackbit Casino App?',
      answer: 'Es gibt keine dedizierte App, aber die Website ist vollständig für mobile Geräte optimiert.',
    },
    {
      question: 'Welche Kryptowährungen werden akzeptiert?',
      answer: 'Bitcoin, Ethereum, Litecoin, XRP, USDT, Dogecoin, Cardano, TRON, Bitcoin Cash und BNB.',
    },
  ],
};

function JackbitCasinoPage() {
  return <CasinoReviewTemplate casinoData={casinoData} />;
}

export default JackbitCasinoPage;
