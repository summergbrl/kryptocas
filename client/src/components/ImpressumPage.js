import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';
import './ImpressumPage.css';

function ImpressumPage() {
  return (
    <div className="impressum-page">
      <Helmet>
        <title>Impressum | Deutsche Krypto Casinos</title>
        <meta name="description" content="Impressum und rechtliche Informationen zu Kryptocasinos.net" />
      </Helmet>

      <Header />

      <div className="page-header">
        <div className="container">
          <h1>Impressum</h1>
          <p>Rechtliche Informationen gemäß § 5 TMG</p>
        </div>
      </div>

      <div className="container">
        <div className="page-content">
          <section className="content-section">
            <h2>Angaben gemäß § 5 TMG</h2>
            <div className="info-block">
              <p><strong>Kryptocasinos.net</strong></p>
              <p>Musterstraße 123</p>
              <p>12345 Musterstadt</p>
              <p>Deutschland</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Kontakt</h2>
            <div className="info-block">
              <p>E-Mail: info@kryptocasinos.net</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <div className="info-block">
              <p>Kryptocasinos.net</p>
              <p>Musterstraße 123</p>
              <p>12345 Musterstadt</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Haftungsausschluss</h2>

            <h3>Haftung für Inhalte</h3>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
              zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
              Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
              der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>

            <h3>Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
            <p>
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
              Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
              Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
              zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          <section className="content-section">
            <h2>Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
              Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem
              auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
              Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>

          <section className="content-section">
            <h2>Hinweis zu Glücksspiel</h2>
            <p>
              Die auf dieser Website bereitgestellten Informationen dienen ausschließlich Informationszwecken.
              Online-Glücksspiel kann süchtig machen. Spielen Sie verantwortungsvoll und nur, wenn Sie das
              gesetzliche Mindestalter erreicht haben (18+).
            </p>
            <p>
              Wir empfehlen, die rechtlichen Bestimmungen in Ihrem Land zu prüfen, bevor Sie an Online-Glücksspielen
              teilnehmen. Wenn Sie Hilfe bei Spielsucht benötigen, wenden Sie sich bitte an entsprechende
              Beratungsstellen.
            </p>
          </section>

          <section className="content-section">
            <h2>Affiliate-Hinweis</h2>
            <p>
              Diese Website enthält Affiliate-Links zu Online Casinos. Wenn Sie sich über unsere Links registrieren,
              erhalten wir möglicherweise eine Provision. Dies beeinflusst unsere Bewertungen nicht – wir bleiben
              stets unabhängig und objektiv in unseren Empfehlungen.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ImpressumPage;
