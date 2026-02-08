import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';
import './VerantwortungsbewusstesSpielenPage.css';

const ResponsibleGamingPage = () => {
  const tenCommandments = [
    {
      number: 1,
      title: 'Legen Sie ein Budget fest und halten Sie sich daran',
      description: 'Überschreiten Sie nicht den Betrag, den Sie für Ausgaben vorgesehen haben.',
    },
    {
      number: 2,
      title: 'Spielen Sie nicht mit geliehenem Geld',
      description: 'Alles was Sie ausgeben, sollte nur aus Ihrem eigenen Portemonnaie stammen.',
    },
    {
      number: 3,
      title: 'Legen Sie regelmäßig Pausen ein',
      description: 'Pausen sind wichtig, um Konzentration und Kontrolle zu bewahren.',
    },
    {
      number: 4,
      title: 'Wissen Sie, wann Sie aufhören müssen',
      description: 'Setzen Sie sich klare Grenzen für Gewinne und Verluste.',
    },
    {
      number: 5,
      title: 'Verfolgen Sie keine Verluste',
      description: 'Verluste sind Teil des Spiels. Der Versuch, sie zurückzugewinnen, führt oft zu größeren Verlusten.',
    },
    {
      number: 6,
      title: 'Spielen Sie zur Unterhaltung, nicht als Einnahmequelle',
      description: 'Niemand sollte Glücksspiele als Einnahmequelle betrachten. Es soll ein Hobby sein.',
    },
    {
      number: 7,
      title: 'Kennen Sie die Vorschriften und Wahrscheinlichkeiten',
      description: 'Verstehen Sie die Spielmechanik und ihre möglichen Folgen.',
    },
    {
      number: 8,
      title: 'Suchen Sie sich Hilfe, wenn nötig',
      description: 'Erkennen Sie gefährliche Situationen und ergreifen Sie entsprechende Maßnahmen.',
    },
    {
      number: 9,
      title: 'Nutzen Sie Zeit- und Einzahlungsbeschränkungen',
      description: 'Diese Instrumente helfen Ihnen, Ihre Grenzen einzuhalten.',
    },
    {
      number: 10,
      title: 'Lassen Sie Spielen nicht Ihre Beziehungen stören',
      description: 'Betrachten Sie das Spielen als Freizeitbeschäftigung, die andere Verpflichtungen nicht beeinträchtigt.',
    },
  ];

  const warningSignals = [
    'Mehr Zeit und Geld für Glücksspiele ausgeben als geplant',
    'Lügen über Spielgewohnheiten gegenüber Familie und Freunden',
    'Spielen, um Probleme oder negative Gefühle zu vergessen',
    'Schwierigkeiten, das Spielen zu kontrollieren oder aufzuhören',
    'Vernachlässigung von Arbeit, Familie oder anderen Verpflichtungen',
    'Geld leihen oder stehlen, um zu spielen',
    'Gereiztheit oder Unruhe, wenn man nicht spielen kann',
  ];

  const actionSteps = [
    'Geben Sie zu, dass Sie möglicherweise ein Problem haben',
    'Sprechen Sie mit einer vertrauenswürdigen Person darüber',
    'Setzen Sie sich klare Grenzen für Ihr Spielverhalten',
    'Nutzen Sie Selbstsperr-Optionen bei Casinos',
    'Suchen Sie professionelle Hilfe bei einer Beratungsstelle',
  ];

  const resources = [
    {
      name: 'Spielsucht-Therapie.de',
      description: 'Professionelle Behandlung und Therapie von Spielsucht. Vermittlung an kompetente Kliniker für Gruppentherapie und Einzelberatungen.',
      link: 'https://www.spielsucht-therapie.de/'
    },
    {
      name: 'Aktive-Suchthilfe.de',
      description: 'Umfassende Hilfsangebote für Menschen mit Suchtproblemen.',
      link: 'https://www.aktive-suchthilfe.de/'
    },
    {
      name: 'Anonyme-Spieler.org',
      description: 'Selbsthilfegruppen nach dem 12-Schritte-Programm für Betroffene.',
      link: 'https://www.anonyme-spieler.org/'
    },
    {
      name: 'Check-dein-Spiel.de',
      description: 'Selbsttest und Informationen der Bundeszentrale für gesundheitliche Aufklärung.',
      link: 'https://www.check-dein-spiel.de/'
    },
  ];

  const disciplineTips = [
    'Spielen Sie niemals unter dem Einfluss von Alkohol oder Drogen',
    'Setzen Sie sich vor dem Spielen ein klares Budget',
    'Planen Sie feste Spielzeiten und halten Sie diese ein',
    'Spielen Sie nicht, wenn Sie emotional aufgewühlt sind',
    'Führen Sie ein Spieltagebuch, um Ihr Verhalten zu tracken',
  ];

  return (
    <div className="verantwortungsbewusstes-spielen-page">
      <Helmet>
        <title>Verantwortungsbewusstes Spielen | Deutsche Krypto Casinos</title>
        <meta name="description" content="Erfahren Sie alles über verantwortungsbewusstes Spielen. Tipps, Warnsignale und Hilfsangebote für ein sicheres Spielerlebnis." />
      </Helmet>

      <Header />

      <div className="page-header">
        <div className="container">
          <h1>Verantwortungsbewusstes Spielen</h1>
          <p>Das wichtigste Merkmal des Glücksspiels: Genießen Sie das Erlebnis und behalten Sie gleichzeitig die Kontrolle.</p>

          <div className="hero-testimonial">
            <blockquote>"Denn wenn das Glücksspiel keinen Spaß mehr macht, kann dies auf eine Spielsucht hindeuten."
            </blockquote>
            <div className="testimonial-author">
              <img src="/imported/responsible_assets/nico.webp" alt="Nico Steinbauer" />
              <div className="author-info">
                <h4>Nico Steinbauer</h4>
                <span>Chefredakteur</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="page-content">
          <section className="content-section">
            <h2>Was bedeutet verantwortungsbewusstes Spielen?</h2>
            <p>
              Verantwortungsvolles Spielen bedeutet, das Erlebnis zu genießen und gleichzeitig die Kontrolle
              zu behalten. Nur so kann man ein Gleichgewicht zwischen Verantwortung und Vergnügen wahren.
              Dazu gehört, dass man seine Grenzen anerkennt und respektiert.
            </p>
          </section>

          <section className="content-section">
            <h2>Die Bedeutung von Disziplin</h2>
            <p>
              Der erste Punkt bei verantwortungsbewusstem Spielen ist Disziplin. So versteht man, dass
              Spielen eine angenehme Aktivität ist. Mangelnde Disziplin kann zu enormem Schaden führen –
              da Glücksspiel eine Wahl bleiben muss, kein Zwang.
            </p>
            <div className="discipline-tips">
              <h3>So bleiben Sie diszipliniert:</h3>
              <ul>
                {disciplineTips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="content-section commandments-section">
            <h2>Die 10 Gebote des verantwortungsvollen Spielens</h2>
            <p>
              Gewohnheiten sind die Grundlage für verantwortungsvolles Spielen.
              Kleine, erreichbare Maßnahmen können eine erhebliche Wirkung haben.
            </p>
            <div className="commandments-grid">
              {tenCommandments.map((commandment) => (
                <div key={commandment.number} className="commandment-card">
                  <div className="commandment-number">{commandment.number}</div>
                  <div className="commandment-content">
                    <h3>{commandment.title}</h3>
                    <p>{commandment.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section warning-section">
            <h2>Wie erkennen Sie ein Glücksspielproblem?</h2>
            <p>
              Probleme mit dem Glücksspiel beginnen häufig klein und können sich unbemerkt
              weiterentwickeln. Zu den wichtigsten Warnsignalen gehören:
            </p>
            <div className="warning-signals">
              {warningSignals.map((signal, index) => (
                <div key={index} className="warning-item">
                  <span className="warning-icon">⚠</span>
                  <p>{signal}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2>Was tun, wenn Sie ein Problem haben?</h2>
            <p>
              Es ist mutig zuzugeben, dass man eine Spielsucht haben könnte. Dies markiert den
              Beginn einer konstruktiven Veränderung.
            </p>
            <div className="action-steps">
              {actionSteps.map((step, index) => (
                <div key={index} className="action-step">
                  <div className="step-number">{index + 1}</div>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section resources-section">
            <h2>Wichtige Ressourcen, die helfen können</h2>
            <p>
              Manchmal braucht man die richtigen Experten oder Menschen an seiner Seite.
              Diese Organisationen bieten professionelle und vertrauliche Hilfe:
            </p>
            <div className="resources-grid">
              {resources.map((resource, index) => (
                <div key={index} className="resource-card">
                  <h3>{resource.name}</h3>
                  <p>{resource.description}</p>
                  {resource.link && (
                    <a href={resource.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginTop: '10px', color: 'var(--primary-color)' }}>
                      Website besuchen →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="content-section editor-section">
            <h2>Ein Wort unseres Chefredakteurs</h2>
            <div className="editor-content">
              <p>Liebe Leserinnen und Leser,</p>
              <p>
                Glücksspiel sollte in erster Linie Freude und Unterhaltung bieten. Es soll keine Einnahmequelle darstellen und deshalb empfehle ich allen, klare Grenzen zu setzen und einzuhalten. Denn ich habe mich 100 % dem verantwortungsvollen Glücksspiel gewidmet. Denken Sie immer daran, immer ein Ende zu setzen wenn die Umstände außerhalb der eigenen Kontrolle zu liegen scheinen.
              </p>
              <p>
                Die erwähnten Hilfsmittel und Ressourcen sind für Ihren Gebrauch bestimmt. Nutzen Sie sie, wann immer nötig. Am wichtigsten ist jedoch, dass Sie nicht zögern, Hilfe zu suchen, wenn Sie glauben, dass Sie sie benötigen.
              </p>
              <p>
                Bleiben Sie wachsam. Bleiben Sie ausgeglichen. Und vor allem: Behalten Sie die Kontrolle.
              </p>

              <div className="editor-profile">
                <img src="/imported/responsible_assets/nico.webp" alt="Nico Steinbauer" className="editor-image-small" />
                <div className="editor-details">
                  <p className="editor-name">Nico Steinbauer</p>
                  <span>Chefredakteur</span>
                  <img src="/imported/responsible_assets/signature.png" alt="Signature" className="editor-signature" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ResponsibleGamingPage;
