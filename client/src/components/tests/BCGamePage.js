import React from 'react';
import CasinoReviewTemplate from '../CasinoReviewTemplate';

const casinoData = {
  name: 'BC.Game',
  slug: 'bc-game',
  rating: 98,
  tagline: 'Das ultimative Krypto-Casino Erlebnis',
  description: 'BC.Game ist eine der führenden Krypto-Gaming-Plattformen mit über 10.000 Spielen und Unterstützung für mehr als 20 Kryptowährungen. Mit einem eigenen BCD Token, innovativem Rakeback-Programm und täglichen Quests bietet BC.Game ein unvergleichliches Spielerlebnis.',
  welcomeBonus: 'Bis zu 220.000 BCD über 4 Einzahlungen',
  bonusDetails: [
    {
      title: '1. Einzahlung',
      amount: '180% bis €20.000',
      description: '300% innerhalb der ersten 7 Minuten! Maximaler Bonus auf die erste Einzahlung.',
      code: null,
    },
    {
      title: '2. Einzahlung',
      amount: '240% bis €40.000',
      description: 'Noch mehr Bonus auf Ihre zweite Einzahlung.',
      code: null,
    },
    {
      title: '3. Einzahlung',
      amount: '300% bis €60.000',
      description: 'Dritte Einzahlung mit 300% Bonus.',
      code: null,
    },
    {
      title: '4. Einzahlung',
      amount: '360% bis €100.000',
      description: 'Maximaler Bonus von 360% auf die vierte Einzahlung.',
      code: null,
    },
  ],
  games: [
    { name: 'Slots', icon: '🎰' },
    { name: 'Live Casino', icon: '🎲' },
    { name: 'Crash Games', icon: '📈' },
    { name: 'Sportwetten', icon: '⚽' },
    { name: 'Poker', icon: '🃏' },
    { name: 'Würfelspiele', icon: '🎯' },
    { name: 'BC Originals', icon: '💎' },
    { name: 'Lottery', icon: '🎟️' },
  ],
  gameCount: 10000,
  cryptos: ['Bitcoin', 'Ethereum', 'USDT', 'Litecoin', 'XRP', 'Dogecoin', 'Bitcoin Cash', 'Solana', 'BNB', 'BCD Token', 'TRON', 'Cardano', 'Polygon', 'Avalanche', 'Arbitrum'],
  pros: [
    'Über 10.000 Spiele verfügbar',
    'Eigener BCD Token mit Vorteilen',
    'Rakeback auf alle Wetten',
    'Tägliche Quests und Belohnungen',
    '24-Stunden Auszahlungsbearbeitung',
    'Keine Ein-/Auszahlungsgebühren',
    'Über 20 Kryptowährungen unterstützt',
    'Provably Fair Spiele',
  ],
  cons: [
    'Keine native Mobile App',
    'Curaçao Lizenz',
    'Komplexe Bonusbedingungen',
  ],
  features: [
    {
      title: 'BCD Token',
      description: 'Eigener Casino-Token mit exklusiven Vorteilen, höheren Rakeback-Raten und Zugang zu speziellen Aktionen.',
    },
    {
      title: 'Rakeback Programm',
      description: 'Erhalten Sie automatisch einen Prozentsatz aller Ihrer Wetten zurück. Je höher Ihr Level, desto mehr Rakeback.',
    },
    {
      title: 'Tägliche Quests',
      description: 'Erfüllen Sie tägliche Aufgaben und erhalten Sie Belohnungen bis zu 5 BTC, Freispiele und mehr.',
    },
    {
      title: 'Chat Rain',
      description: 'Erhalten Sie zufällige Krypto-Drops im Chat. Aktive Community-Mitglieder werden belohnt.',
    },
  ],
  license: 'Curaçao',
  minDeposit: '0.0001 BTC',
  withdrawalTime: 'Unter 24 Std.',
  withdrawalLimit: '€5.000/Tag',
  supportHours: '24/7',
  languages: ['Deutsch', 'Englisch', 'Spanisch', 'Portugiesisch', 'Russisch', 'Türkisch', 'Japanisch', 'Koreanisch'],
  restrictedCountries: ['USA', 'UK', 'Frankreich', 'Niederlande'],
  faqs: [
    {
      question: 'Was ist der BCD Token?',
      answer: 'BCD ist der native Token von BC.Game. Er bietet exklusive Vorteile wie höheres Rakeback, Zugang zu speziellen Aktionen und kann gegen andere Kryptowährungen getauscht werden.',
    },
    {
      question: 'Ist BC.Game seriös?',
      answer: 'Ja, BC.Game wurde 2017 gegründet und ist von Curaçao lizenziert. Die Plattform verwendet Provably Fair Technologie für transparente Spiele.',
    },
    {
      question: 'Gibt es Sportwetten bei BC.Game?',
      answer: 'Ja, BC.Game bietet über 80 Sportarten zum Wetten an, darunter Fußball, Basketball, Tennis und eSports.',
    },
    {
      question: 'Wie lange dauern Auszahlungen?',
      answer: 'Krypto-Auszahlungen werden in der Regel innerhalb von 24 Stunden bearbeitet. Es gibt keine Auszahlungsgebühren.',
    },
  ],
};

function BCGamePage() {
  return <CasinoReviewTemplate casinoData={casinoData} />;
}

export default BCGamePage;
