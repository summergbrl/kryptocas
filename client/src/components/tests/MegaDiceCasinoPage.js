import React from 'react';
import CasinoReviewTemplate from '../CasinoReviewTemplate';

const casinoData = {
  name: 'Mega Dice',
  slug: 'mega-dice-casino',
  rating: 94,
  tagline: 'Das weltweite Krypto-Casino',
  description: 'Mega Dice ist ein weltweit verfügbares Krypto-Casino mit 200% Willkommensbonus bis zu 1 BTC. Mit über 40 Sportarten, schnellen Auszahlungen unter 10 Minuten und großen wöchentlichen Turnieren ist Mega Dice eine Top-Wahl für Krypto-Spieler.',
  welcomeBonus: '200% bis zu 1 BTC + 50 Freispiele',
  bonusDetails: [
    {
      title: 'Willkommensbonus',
      amount: '200% bis zu 1 BTC',
      description: 'Plus 50 Freispiele auf Ihre erste Einzahlung. Mindesteinzahlung €20.',
      code: null,
    },
    {
      title: 'Sportwetten Freebet',
      amount: 'Gratis Wette',
      description: 'Kostenlose Sportwette als Teil des Willkommenspakets.',
      code: null,
    },
    {
      title: 'Viking Runecraft Giveaway',
      amount: '50.000 USDT',
      description: 'Großer Preispool im aktuellen Turnier.',
      code: null,
    },
    {
      title: 'Drops & Wins',
      amount: '2.000.000 USDT/Monat',
      description: 'Pragmatic Play monatliches Turnier mit riesigem Preispool.',
      code: null,
    },
  ],
  games: [
    { name: 'Slots', icon: '🎰' },
    { name: 'Live Casino', icon: '🎲' },
    { name: 'Sportwetten', icon: '⚽' },
    { name: 'Crash Games', icon: '📈' },
    { name: 'Plinko', icon: '⬇️' },
    { name: 'Mines', icon: '💣' },
    { name: 'Poker', icon: '🃏' },
    { name: 'Game Shows', icon: '🎬' },
  ],
  gameCount: 5000,
  cryptos: ['Bitcoin', 'Ethereum', 'Litecoin', 'Dogecoin', 'Bitcoin Cash', 'Binance Coin', 'Cardano', 'Tether', 'Ripple', 'Solana'],
  pros: [
    'Weltweit verfügbar',
    '200% Willkommensbonus bis 1 BTC',
    'Über 40 Sportarten',
    'Auszahlungen unter 10 Minuten',
    'Keine Auszahlungslimits',
    '24/7 Support in 20 Sprachen',
    'Mobile-optimierte Plattform',
    'Große monatliche Turniere',
  ],
  cons: [
    'Nicht in Australien verfügbar',
    'Keine dedizierte App',
    'Curaçao Lizenz',
  ],
  features: [
    {
      title: 'Sofortige Auszahlungen',
      description: 'Krypto-Auszahlungen werden innerhalb von 10 Minuten verarbeitet. Keine Gebühren, keine Limits.',
    },
    {
      title: 'Drops & Wins',
      description: 'Pragmatic Play Turnier mit 2 Millionen USDT monatlichem Preispool. Tägliche und wöchentliche Preise.',
    },
    {
      title: 'Sportwetten',
      description: 'Über 40 Sportarten verfügbar, von Fußball bis eSports. Live-Wetten und Pre-Match.',
    },
    {
      title: 'Loyalty Programm',
      description: 'Sammeln Sie Punkte, Freispiele und Rakeback-Belohnungen durch regelmäßiges Spielen.',
    },
  ],
  license: 'Curaçao',
  minDeposit: '€20',
  withdrawalTime: 'Unter 10 Min.',
  withdrawalLimit: 'Unbegrenzt',
  supportHours: '24/7',
  languages: ['Deutsch', 'Englisch', 'Spanisch', 'Portugiesisch', 'Französisch', 'Italienisch', 'Russisch', 'Türkisch'],
  restrictedCountries: ['Australien', 'Lettland', 'Niederlande'],
  faqs: [
    {
      question: 'Ist Mega Dice ein legitimes Casino?',
      answer: 'Ja, Mega Dice ist eine legitime Plattform mit Curaçao-Lizenz. Sie bietet sichere Transaktionen und faire Spiele.',
    },
    {
      question: 'Können US-Spieler bei Mega Dice spielen?',
      answer: 'Offiziell ist Mega Dice in den USA nicht verfügbar. Ein VPN-Zugang ist technisch möglich, aber wir empfehlen, die lokalen Gesetze zu beachten.',
    },
    {
      question: 'Wie sicher sind Bitcoin-Transaktionen?',
      answer: 'Mega Dice verwendet starke Verschlüsselung für alle Transaktionen. Krypto-Zahlungen sind von Natur aus sicher und anonym.',
    },
    {
      question: 'Gibt es Bitcoin-Würfelspiele?',
      answer: 'Ja, Mega Dice bietet faire Bitcoin-Würfelspiele mit Provably Fair Technologie.',
    },
  ],
};

function MegaDiceCasinoPage() {
  return <CasinoReviewTemplate casinoData={casinoData} />;
}

export default MegaDiceCasinoPage;
