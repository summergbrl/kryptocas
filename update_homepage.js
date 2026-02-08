const fs = require('fs');

const englishSection = `
<section class="elementor-section elementor-top-section elementor-element" style="padding: 40px 20px; background-color: #0f172a; color: white;">
    <div class="elementor-container elementor-column-gap-default">
        <div class="elementor-column elementor-col-100">
            <h2 style="color: #6366f1; font-size: 2em; margin-bottom: 20px;">German Crypto Casinos For English Speakers</h2>
            <p style="margin-bottom: 20px;">
                It’s already a known fact that many Germans prefer to communicate and interact online in English. 
                Besides that, Germany hosts a lot of English-speaking immigrants interested in our crypto casino content. 
                Thus, we decided to create a dedicated section for those readers, a short brief in English helping foreigners 
                who live in Germany better understand what crypto casinos are.
            </p>
            
            <h3 style="color: #a5b4fc; margin-top: 30px;">Crypto Casino 2025: Advantages!</h3>
            <p>Crypto casinos offer faster transactions, higher bonuses, and enhanced privacy compared to traditional online casinos.</p>

            <h3 style="color: #a5b4fc; margin-top: 30px;">How to Choose and Play at a Crypto Casino</h3>
            <p>Look for licensed casinos with a good reputation, a wide variety of games, and responsive customer support.</p>

            <h3 style="color: #a5b4fc; margin-top: 30px;">Popular Crypto Casino Bonuses and Games</h3>
            <p>From welcome packages to no-deposit bonuses, crypto casinos offer lucrative rewards. Popular games include slots, live dealer games, and crypto-exclusive crash games.</p>

            <h3 style="color: #a5b4fc; margin-top: 30px;">Last Words</h3>
            <p>Safe gaming and knowing your limits are key to a great experience.</p>
        </div>
    </div>
</section>
`;

const footer = `
<footer style="background-color: #1e293b; color: white; padding: 40px 20px; margin-top: 40px;">
    <div style="display: flex; flex-wrap: wrap; justify-content: space-between; max-width: 1200px; margin: 0 auto;">
        <div style="flex: 1; min-width: 250px; margin-bottom: 20px;">
            <h3 style="color: #6366f1;">Krypto Casinos</h3>
            <p>Kryptocasinos.net ist die neue unabhängige Anlaufstelle für Krypto-Online-Glücksspiele. Bei uns finden Sie vertrauenswürdige Krypto-Casino-Nachrichten, Anleitungen, Bewertungen und Informationen.</p>
        </div>
        <div style="flex: 1; min-width: 200px; margin-bottom: 20px;">
            <h4 style="color: #cbd5e1;">Beliebte Ratgeber</h4>
            <ul style="list-style: none; padding: 0;">
                <li>Neue Krypto Casinos</li>
                <li>Sofortauszahlung</li>
                <li>Krypto Casinos Ohne Verifizierung</li>
                <li>Blockchain Casinos</li>
                <li>Ethereum Casinos</li>
            </ul>
        </div>
        <div style="flex: 1; min-width: 200px; margin-bottom: 20px;">
            <h4 style="color: #cbd5e1;">Wichtige Links</h4>
            <ul style="list-style: none; padding: 0;">
                <li>Über Uns</li>
                <li>Datenschutz</li>
                <li>Impressum</li>
                <li>Verantwortungsbewusstes Spielen</li>
                <li>Kontakt</li>
            </ul>
        </div>
    </div>
    <div style="text-align: center; margin-top: 40px; border-top: 1px solid #334155; padding-top: 20px;">
        <p>Kryptocasinos.net – Berlin, Deutschland</p>
        <p id="cookie-notice" style="font-size: 0.8em; color: #94a3b8; margin-top: 10px;">
            Wir verwenden Cookies, um unseren Service und Ihr Nutzererlebnis auf unserer Website zu verbessern. 
            Indem Sie unsere Website weiterhin nutzen, stimmen Sie der Verwendung von Cookies zu.
            <button style="background: #6366f1; border: none; padding: 5px 10px; color: white; border-radius: 4px; margin-left: 10px; cursor: pointer;">Akzeptieren</button>
        </p>
    </div>
</footer>
`;

// Insert plain HTML for missing content based on user paste
const missingContent = `
<div style="max-width: 1200px; margin: 0 auto; padding: 20px; color: #333;">
    <h2>So wählen Sie ein Krypto-Casino aus</h2>
    <p>Bei der Auswahl eines Krypto-Casinos sind einige wichtige Parameter zu berücksichtigen, die Ihre Entscheidung beeinflussen sollten:</p>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 20px;">
        <div>
            <h3>Sicherheit und Datenschutz</h3>
            <p>Um beim Spiel in lizenzierten und seriösen Crypto-Casinos auf Nummer sicher zu gehen, ist die Wahrung Ihrer Privatsphäre ein wichtiger Aspekt.</p>
        </div>
        <div>
            <h3>Spielauswahl</h3>
            <p>Ein gutes Spielangebot ist alles! Ihre Vorlieben sind die Basis für die Auswahl Ihres idealen Casinos.</p>
        </div>
        <div>
            <h3>Boni</h3>
            <p>Boni können über den Erfolg oder Misserfolg eines Krypto-Casinos entscheiden. Suchen Sie nach regelmäßigen Boni und einem VIP-Programm.</p>
        </div>
        <div>
            <h3>Reputation</h3>
            <p>Spielerbewertungen sind der wichtigste Hinweis. Prüfen Sie Rezensionen und wie das Casino mit Beschwerden umgeht.</p>
        </div>
    </div>

    <h2 style="margin-top: 40px;">Krypto-Casinos bieten zahlreiche Vorteile</h2>
    <ul>
        <li><strong>Höhere Boni:</strong> Bis zu 3 separate Einzahlungsboni oder Boni ohne Einzahlung.</li>
        <li><strong>Bessere Limits:</strong> Niedrigere Mindesteinzahlungen und oft keine maximalen Einzahlungen.</li>
        <li><strong>Schnellere Auszahlungen:</strong> Oft in Minuten statt Tagen.</li>
        <li><strong>Anonymität:</strong> Keine Weitergabe personenbezogener Daten.</li>
        <li><strong>In-House-Spiele:</strong> Exklusive Spiele, die Sie sonst nirgends finden.</li>
    </ul>

    <h2 style="margin-top: 40px;">Was ist Blockchain?</h2>
    <p>Der Begriff Blockchain bedeutet auf Deutsch Blockkette und steht für ein dezentrales Buchführungssystem. Transaktionen werden über kryptographische Prozesse miteinander verkettet.</p>
</div>
`;

// Read the file
const targetFile = 'client/src/components/NewHomePage.js';
let content = fs.readFileSync(targetFile, 'utf8');

// The split point: Lucky block casino
// We used "Lucky block" in find_split.js
// The context was: Lucky block casino" src="/imported/luckyblock-logo-2.webp" ... title elementor-size-default">Keine Limits</p></div></div></div><div cl

// We want to keep everything up to the end of the Lucky Block card.
// We'll search for the Lucky Block image src, then find the NEXT few closing divs.
const luckyBlockMarker = 'luckyblock-logo-2.webp"';
const markerIndex = content.lastIndexOf(luckyBlockMarker);

if (markerIndex === -1) {
    console.error("Could not find Lucky Block marker!");
    process.exit(1);
}

// Find the string "92/100" or rating which is near the end of the card?
// Or "Keine Limits".
// "Keine Limits</p></div></div></div>"
const cutPointMarker = 'Keine Limits</p></div></div></div>';
const cutPointIndex = content.indexOf(cutPointMarker, markerIndex);

if (cutPointIndex === -1) {
    console.error("Could not find cut point after Lucky Block!");
    process.exit(1);
}

// The cut point should be AFTER the closing divs
const finalCutIndex = cutPointIndex + cutPointMarker.length;

// Construct new content
const newHtmlContent = content.substring(0, finalCutIndex) + missingContent + englishSection + footer + '` }} /> \n    </div>\n  );\n};\n\nexport default NewHomePage;';

fs.writeFileSync(targetFile, newHtmlContent);
console.log("Updated NewHomePage.js successfully.");
