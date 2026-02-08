import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';
import './KontaktPage.css';

function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactReasons = [
    {
      title: 'Allgemeine Anfragen',
      description: 'Fragen zu unseren Inhalten, Bewertungen oder der Website.',
      email: 'info@kryptocasinos.net',
    },
    {
      title: 'Partnerschaften',
      description: 'Zusammenarbeit, Werbung oder Casino-Listings.',
      email: 'partner@kryptocasinos.net',
    },
    {
      title: 'Feedback',
      description: 'Vorschläge, Kritik oder Verbesserungsideen.',
      email: 'feedback@kryptocasinos.net',
    },
  ];

  const faqs = [
    {
      question: 'Wie schnell erhalte ich eine Antwort?',
      answer: 'Wir bemühen uns, alle Anfragen innerhalb von 24-48 Stunden zu beantworten.',
    },
    {
      question: 'Können Sie mir bei Problemen mit einem Casino helfen?',
      answer: 'Wir können allgemeine Ratschläge geben, aber für spezifische Kontoprobleme wenden Sie sich bitte direkt an den Casino-Support.',
    },
    {
      question: 'Wie kann ich ein Casino zur Bewertung vorschlagen?',
      answer: 'Schreiben Sie uns über das Kontaktformular mit dem Betreff "Casino Vorschlag" und wir prüfen den Anbieter.',
    },
  ];

  return (
    <div className="kontakt-page">
      <Helmet>
        <title>Kontakt | Deutsche Krypto Casinos</title>
        <meta name="description" content="Kontaktieren Sie das Team von Kryptocasinos.net. Wir freuen uns auf Ihre Fragen, Anregungen und Feedback." />
      </Helmet>

      <Header />

      <div className="page-header">
        <div className="container">
          <h1>Kontakt</h1>
          <p>Wir freuen uns auf Ihre Nachricht</p>
        </div>
      </div>

      <div className="container">
        <div className="page-content">
          <section className="content-section">
            <h2>Schreiben Sie uns</h2>
            <p>
              Haben Sie Fragen, Anregungen oder Feedback? Füllen Sie das Formular aus und wir melden uns
              so schnell wie möglich bei Ihnen.
            </p>
          </section>

          <div className="contact-grid">
            <section className="contact-form-section">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Ihr Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-Mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="ihre@email.de"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Betreff *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Worum geht es?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Nachricht *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Ihre Nachricht an uns..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">Nachricht senden</button>
              </form>
            </section>

            <section className="contact-info-section">
              <h3>Kontaktmöglichkeiten</h3>
              <div className="contact-reasons">
                {contactReasons.map((reason, index) => (
                  <div key={index} className="contact-reason-card">
                    <h4>{reason.title}</h4>
                    <p>{reason.description}</p>
                    <a href={`mailto:${reason.email}`}>{reason.email}</a>
                  </div>
                ))}
              </div>
            </section>
          </div>

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

          <section className="content-section">
            <h2>Social Media</h2>
            <p>
              Folgen Sie uns auf Social Media für die neuesten Updates, exklusive Angebote und
              Community-Diskussionen rund um Krypto Casinos.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default KontaktPage;
