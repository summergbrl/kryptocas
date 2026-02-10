import React from 'react';
import { Helmet } from 'react-helmet-async';
import './UeberUnsPage.css';

function UeberUnsPage() {
  const values = [
    {
      title: 'Unabhängigkeit',
      description: 'Wir sind nicht an Casino-Betreiber gebunden. Unsere Bewertungen sind objektiv und unvoreingenommen.',
    },
    {
      title: 'Transparenz',
      description: 'Wir legen unsere Bewertungskriterien offen und erklären, wie wir zu unseren Empfehlungen kommen.',
    },
    {
      title: 'Aktualität',
      description: 'Wir aktualisieren unsere Informationen regelmäßig, um Ihnen stets die neuesten Entwicklungen zu bieten.',
    },
    {
      title: 'Spielerschutz',
      description: 'Verantwortungsvolles Spielen steht bei uns an erster Stelle. Wir fördern nur sichere und faire Casinos.',
    },
  ];

  const testCriteria = [
    {
      title: 'Sicherheit & Lizenz',
      description: 'Wir prüfen Lizenzen, Verschlüsselung und Sicherheitsmaßnahmen jedes Casinos.',
    },
    {
      title: 'Krypto-Optionen',
      description: 'Welche Kryptowährungen werden akzeptiert? Wie schnell sind Transaktionen?',
    },
    {
      title: 'Spielangebot',
      description: 'Vielfalt und Qualität der Spiele, von Slots bis Live Casino.',
    },
    {
      title: 'Bonusangebote',
      description: 'Fairness der Bonusbedingungen und tatsächlicher Wert für Spieler.',
    },
    {
      title: 'Kundenservice',
      description: 'Erreichbarkeit, Reaktionszeit und Qualität des Supports.',
    },
    {
      title: 'Ein- & Auszahlungen',
      description: 'Geschwindigkeit, Limits und Gebühren bei Transaktionen.',
    },
  ];

  const team = [
    {
      role: 'Krypto-Experten',
      description: 'Unser Team besteht aus erfahrenen Blockchain- und Kryptowährungs-Spezialisten.',
    },
    {
      role: 'Casino-Tester',
      description: 'Professionelle Spieler, die jedes Casino ausführlich testen und bewerten.',
    },
    {
      role: 'Redakteure',
      description: 'Erfahrene Autoren, die komplexe Themen verständlich aufbereiten.',
    },
  ];

  return (
    <div className="ueber-uns-page">
      <Helmet>
        <title>Über Uns | Deutsche Krypto Casinos</title>
        <meta name="description" content="Erfahren Sie mehr über Kryptocasinos.net – Ihre unabhängige Anlaufstelle für Krypto Casino Bewertungen, Tests und Informationen." />
      </Helmet>
<div className="page-header">
        <div className="container">
          <h1>Über Uns</h1>
          <p>Ihre unabhängige Anlaufstelle für Krypto Casino Bewertungen und Informationen</p>
        </div>
      </div>

      <div className="container">
        <div className="page-content">
          <section className="content-section">
            <h2>Wer wir sind</h2>
            <p>
              Kryptocasinos.net ist die führende unabhängige Plattform für Krypto-Online-Glücksspiele im
              deutschsprachigen Raum. Wir bieten vertrauenswürdige Bewertungen, Anleitungen und aktuelle
              Informationen rund um Bitcoin Casinos, Ethereum Casinos und andere Krypto-Glücksspielplattformen.
            </p>
            <p>
              Unser Ziel ist es, Spielern dabei zu helfen, informierte Entscheidungen zu treffen und die
              besten und sichersten Krypto Casinos zu finden. Wir testen jeden Anbieter selbst und berichten
              ehrlich über unsere Erfahrungen.
            </p>
          </section>

          <section className="content-section">
            <h2>Unsere Werte</h2>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2>Wie wir testen</h2>
            <p>
              Jedes Casino durchläuft einen umfassenden Testprozess, bevor wir es empfehlen. Unsere
              Bewertungskriterien umfassen:
            </p>
            <div className="criteria-grid">
              {testCriteria.map((criterion, index) => (
                <div key={index} className="criterion-card">
                  <h3>{criterion.title}</h3>
                  <p>{criterion.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2>Unser Team</h2>
            <div className="team-grid">
              {team.map((member, index) => (
                <div key={index} className="team-card">
                  <h3>{member.role}</h3>
                  <p>{member.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2>Unsere Mission</h2>
            <p>
              Die Welt der Krypto Casinos kann verwirrend und undurchsichtig sein. Unsere Mission ist es,
              Klarheit zu schaffen und Spielern zu helfen, sichere und faire Plattformen zu finden. Wir
              glauben, dass Blockchain-Technologie das Online-Glücksspiel revolutioniert – mit mehr
              Transparenz, Fairness und Sicherheit.
            </p>
            <p>
              Gleichzeitig setzen wir uns für verantwortungsvolles Spielen ein. Glücksspiel soll Unterhaltung
              sein, kein finanzielles Risiko. Deshalb informieren wir auch über Risiken und bieten Ressourcen
              für Spieler, die Hilfe benötigen.
            </p>
          </section>

          <section className="content-section">
            <h2>Kontaktieren Sie uns</h2>
            <p>
              Haben Sie Fragen, Anregungen oder möchten Sie mit uns zusammenarbeiten? Wir freuen uns über
              Ihre Nachricht. Besuchen Sie unsere <a href="/kontakt">Kontaktseite</a> oder schreiben Sie
              uns direkt.
            </p>
          </section>
        </div>
      </div>
</div>
  );
}

export default UeberUnsPage;
