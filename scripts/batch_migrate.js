const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');
const crypto = require('crypto');

const baseDir = path.join(__dirname, '../client/public/imported');
const componentsDir = path.join(__dirname, '../client/src/components/imported');

// Ensure directories exist using native fs
const dirs = [
    baseDir,
    path.join(baseDir, 'css'),
    path.join(baseDir, 'js'),
    path.join(baseDir, 'images'),
    path.join(baseDir, 'fonts'),
    componentsDir
];

dirs.forEach(dir => {
    try {
        fs.mkdirSync(dir, { recursive: true });
    } catch (e) {
        if (e.code !== 'EEXIST') throw e;
    }
});

const urls = [
    "https://www.kryptocasinos.net/",
    "https://www.kryptocasinos.net/datenschutz/",
    "https://www.kryptocasinos.net/tests/mbit/",
    "https://www.kryptocasinos.net/tests/arcanebet/",
    "https://www.kryptocasinos.net/tests/joo/",
    "https://www.kryptocasinos.net/tests/1xbit/",
    "https://www.kryptocasinos.net/verantwortungsbewusstes-spielen/",
    "https://www.kryptocasinos.net/ueber-uns/",
    "https://www.kryptocasinos.net/kaufen/",
    "https://www.kryptocasinos.net/freispiele-ohne-einzahlung/",
    "https://www.kryptocasinos.net/krypto-casino-boni/krypto-casinos-bonus-ohne-umsatzbedingungen/",
    "https://www.kryptocasinos.net/ripple-casinos/",
    "https://www.kryptocasinos.net/casino-tokens/",
    "https://www.kryptocasinos.net/ethereum-casinos/",
    "https://www.kryptocasinos.net/krypto-poker/",
    "https://www.kryptocasinos.net/neue-krypto-casinos/",
    "https://www.kryptocasinos.net/krypto-slots/",
    "https://www.kryptocasinos.net/crash-spiele/",
    "https://www.kryptocasinos.net/vergleich/",
    "https://www.kryptocasinos.net/tests/jackbit-casino/",
    "https://www.kryptocasinos.net/tests/cryptoleo-casino/",
    "https://www.kryptocasinos.net/tests/7bit/",
    "https://www.kryptocasinos.net/tests/trueflip/",
    "https://www.kryptocasinos.net/tests/kripty-casino/",
    "https://www.kryptocasinos.net/tests/lucky-block-casino/",
    "https://www.kryptocasinos.net/tests/metawin-casino/",
    "https://www.kryptocasinos.net/tests/mega-dice-casino/",
    "https://www.kryptocasinos.net/tests/wsm-casino/",
    "https://www.kryptocasinos.net/tests/flush-casino/",
    "https://www.kryptocasinos.net/tests/bc-game/",
    "https://www.kryptocasinos.net/tests/bitkingz-casino/",
    "https://www.kryptocasinos.net/tests/cloudbet/",
    "https://www.kryptocasinos.net/tests/tg-casino/",
    "https://www.kryptocasinos.net/tests/betplay/",
    "https://www.kryptocasinos.net/tests/vip-casino/",
    "https://www.kryptocasinos.net/tests/billionairespin/",
    "https://www.kryptocasinos.net/krypto-casino-sofortauszahlung/",
    "https://www.kryptocasinos.net/7bit-bonus-ohne-einzahlung/",
    "https://www.kryptocasinos.net/bitkingz-bonus-ohne-einzahlung/",
    "https://www.kryptocasinos.net/cryptoleo-bonus-ohne-einzahlung/",
    "https://www.kryptocasinos.net/krypto-wallets/",
    "https://www.kryptocasinos.net/blockchain-casinos/",
    "https://www.kryptocasinos.net/bitcoin-casinos/",
    "https://www.kryptocasinos.net/impressum/",
    "https://www.kryptocasinos.net/kontakt/",
    "https://www.kryptocasinos.net/krypto-casinos-ohne-verifizierung/",
    "https://www.kryptocasinos.net/krypto-casino-boni-ohne-einzahlung/",
    "https://www.kryptocasinos.net/krypto-casino-boni/",
    "https://www.kryptocasinos.net/krypto-casino-spiele/",
    "https://www.kryptocasinos.net/plinko/",
    "https://www.kryptocasinos.net/krypto-sportwetten/",
    "https://www.kryptocasinos.net/tests/",
    "https://www.kryptocasinos.net/krypto-wallets/metamask/",
    "https://www.kryptocasinos.net/krypto-wallets/trust-wallet/",
    "https://www.kryptocasinos.net/kryptowissen/",
    "https://www.kryptocasinos.net/kryptowissen/top-5-warnsignale-auf-die-sie-bei-der-auswahl-eines-krypto-casinos-achten-sollten/",
    "https://www.kryptocasinos.net/kryptowissen/exotische-krypto-slots-mit-faszinierenden-themen-grafiken/",
    "https://www.kryptocasinos.net/kryptowissen/die-5-besten-online-krypto-crash-kurse-2024/",
    "https://www.kryptocasinos.net/kryptowissen/was-ist-provably-fair-ein-leitfaden-zur-fairness-in-krypto-casinos/",
    "https://www.kryptocasinos.net/kryptowissen/der-kampf-zwischen-krypto-casinos-und-fiat-casinos-wer-wird-die-branche-erobern/",
    "https://www.kryptocasinos.net/kryptowissen/so-bewaeltigen-sie-die-volatilitaet-von-kryptowaehrungen-in-krypto-casinos/",
    "https://www.kryptocasinos.net/kryptowissen/krypto-wallet-gebuehren-erklaert-was-sie-ueber-casino-transaktionen-wissen-muessen/",
    "https://www.kryptocasinos.net/kryptowissen/2025-jahr-der-ki-wie-kuenstliche-intelligenz-krypto-casinos-veraendern-wird/",
    "https://www.kryptocasinos.net/kryptowissen/evolution-von-krypto-casinos-2024-2025/",
    "https://www.kryptocasinos.net/kryptowissen/wie-verbessern-smart-contracts-die-transparenz-und-fairness-mit-kryptowaehrungen/",
    "https://www.kryptocasinos.net/kryptowissen/muss-kyc-in-krypto-casinos-sein-warum-es-nicht-so-schlimm-ist/",
    "https://www.kryptocasinos.net/kryptowissen/haben-sie-den-zugang-zu-ihrer-krypto-wallet-verloren-hier-sind-unsere-tipps/",
    "https://www.kryptocasinos.net/kryptowissen/wie-man-unfaire-bonusbedingungen-ohne-einzahlung-in-krypto-casinos-erkennt/",
    "https://www.kryptocasinos.net/kryptowissen/die-beliebtesten-coins-fuer-krypto-casinos/",
    "https://www.kryptocasinos.net/kryptowissen/saisonale-feiertagsboni-wann-und-wo-sie-sie-finden/",
    "https://www.kryptocasinos.net/kryptowissen/neue-krypto-casinos-versprechen-dir-das-blaue-vom-himmel-hier-ist-worauf-du-achten-musst/",
    "https://www.kryptocasinos.net/kryptowissen/so-bleibst-du-2025-sicher-in-krypto-casinos/",
    "https://www.kryptocasinos.net/kryptowissen/mobile-krypto-casinos-2025/",
    "https://www.kryptocasinos.net/kryptowissen/layer-2-loesungen-in-kryptocasinos-schneller-und-einfacher-spielen/",
    "https://www.kryptocasinos.net/kryptowissen/der-kostenlose-test-warum-deutsche-spieler-nie-einzahlen-bevor-sie-testen/",
    "https://www.kryptocasinos.net/kryptowissen/krypto-casino-boni-2026-trends/"
];

function getSlug(url) {
    const u = new URL(url);
    let pathname = u.pathname;
    // Normalize: remove trailing slash, replace / with -
    if (pathname.endsWith('/')) pathname = pathname.slice(0, -1);
    // If empty (home), handle
    if (!pathname) return 'home';
    // Remove leading slash
    if (pathname.startsWith('/')) pathname = pathname.slice(1);

    return pathname.replace(/\//g, '-').toLowerCase();
}

function getComponentName(slug) {
    if (slug === 'home' || slug === '') return 'ImportedHome';
    // parts, capitalize each, join
    const parts = slug.split('-');
    const capitalized = parts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
    return 'Imported' + capitalized + 'Page';
}

function getAssetFilename(url) {
    const u = new URL(url);
    const ext = path.extname(u.pathname) || '';
    const name = path.basename(u.pathname, ext);
    // Use hash to avoid collision and invalid chars
    const hash = crypto.createHash('md5').update(url).digest('hex').substring(0, 8);
    // Try to keep original name if safe
    const safeName = name.replace(/[^a-zA-Z0-9-]/g, '_');
    return `${safeName}_${hash}${ext}`;
}

async function downloadAsset(url, type) {
    try {
        const filename = getAssetFilename(url);
        const localDir = path.join(baseDir, type);
        const localPath = path.join(localDir, filename);

        if (fs.existsSync(localPath)) {
            return `/imported/${type}/${filename}`;
        }

        const response = await axios.get(url, { responseType: 'arraybuffer', timeout: 10000 });
        fs.writeFileSync(localPath, response.data);
        console.log(`Downloaded ${type}: ${url}`);
        return `/imported/${type}/${filename}`;
    } catch (err) {
        console.error(`Failed to download ${url}: ${err.message}`);
        return url; // Fallback to remote URL
    }
}

async function processUrl(url) {
    try {
        console.log(`Processing: ${url}`);
        const slug = getSlug(url);
        const componentName = getComponentName(slug);
        const routePath = new URL(url).pathname; // keep original path for route

        const response = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        const html = response.data;
        const $ = cheerio.load(html);

        // Assets to download
        const cssFiles = [];
        const jsFiles = [];

        // 1. CSS
        const linkPromises = $('link[rel="stylesheet"]').map(async (i, el) => {
            const href = $(el).attr('href');
            if (href) {
                const absoluteUrl = new URL(href, url).href;
                const localUrl = await downloadAsset(absoluteUrl, 'css');
                cssFiles.push(localUrl);
            }
        }).get();
        await Promise.all(linkPromises);

        // 2. Images
        const imgPromises = $('img').map(async (i, el) => {
            const src = $(el).attr('src');
            if (src) {
                const absoluteUrl = new URL(src, url).href;
                const localUrl = await downloadAsset(absoluteUrl, 'images');
                $(el).attr('src', localUrl);
                // Remove srcset to avoid broken links
                $(el).removeAttr('srcset');
                $(el).removeAttr('sizes');
            }
        }).get();
        await Promise.all(imgPromises);

        // 3. JS (Scripts) - Only src scripts
        const scriptPromises = $('script[src]').map(async (i, el) => {
            const src = $(el).attr('src');
            if (src) {
                const absoluteUrl = new URL(src, url).href;
                // strict filter: avoid analytics/ads
                if (!absoluteUrl.includes('google-analytics') && !absoluteUrl.includes('facebook') && !absoluteUrl.includes('googletagmanager')) {
                    const localUrl = await downloadAsset(absoluteUrl, 'js');
                    jsFiles.push(localUrl);
                }
                // Remove script tag from body to clean up
                $(el).remove();
            }
        }).get();
        await Promise.all(scriptPromises);

        // 4. Internal Links
        $('a').each((i, el) => {
            const href = $(el).attr('href');
            if (href && (href.startsWith('/') || href.includes('kryptocasinos.net'))) {
                // Convert to local route
                // e.g. https://www.kryptocasinos.net/foo/ -> /foo
                try {
                    const u = new URL(href, url);
                    if (u.hostname === 'www.kryptocasinos.net' || u.hostname === 'kryptocasinos.net') {
                        $(el).attr('href', u.pathname);
                    }
                } catch (e) { }
            }
        });

        // Extract Title
        const pageTitle = $('title').text() || 'Krypto Casinos';

        // Extract Body Content
        let bodyContent = $('body').html();
        if (!bodyContent) bodyContent = $.html(); // fallback

        // Clean artifacts
        $('script:not([src])').each((i, el) => {
            const content = $(el).html();
            if (content.includes('gtag') || content.includes('window.dataLayer')) {
                $(el).remove();
            }
        });

        // Re-read html
        bodyContent = $('body').html();
        if (!bodyContent) bodyContent = ''; // safe fallback

        const escapeContent = (str) => {
            return str.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\${/g, '\\${');
        };

        const finalBody = escapeContent(bodyContent);

        // Create Component
        const componentContent = `import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const ${componentName} = () => {
    useEffect(() => {
        // Add specific body classes if needed
        document.body.classList.add('imported-page-${slug}');
        return () => {
            document.body.classList.remove('imported-page-${slug}');
        };
    }, []);

    return (
        <div className="imported-page-wrapper">
            <Helmet>
                <title>${pageTitle.replace(/"/g, '&quot;')}</title>
                ${cssFiles.map(c => `<link rel="stylesheet" href="${c}" />`).join('\n                ')}
                ${jsFiles.map(j => `<script src="${j}"></script>`).join('\n                ')}
            </Helmet>
            <div dangerouslySetInnerHTML={{ __html: \`
${finalBody}
            \` }} />
        </div>
    );
};

export default ${componentName};
`;

        const componentPath = path.join(componentsDir, `${componentName}.js`);
        fs.writeFileSync(componentPath, componentContent);

        return {
            slug,
            componentName,
            routePath,
            importLine: `import ${componentName} from './components/imported/${componentName}';`,
            routeLine: `<Route path="${routePath}" element={<${componentName} />} />`
        };

    } catch (err) {
        console.error(`Error processing ${url}:`, err.message);
        return null; // Skip
    }
}

async function main() {
    console.log(`Starting migration of ${urls.length} URLs...`);
    const results = [];
    const BATCH_SIZE = 5;

    for (let i = 0; i < urls.length; i += BATCH_SIZE) {
        const batch = urls.slice(i, i + BATCH_SIZE);
        const batchResults = await Promise.all(batch.map(url => processUrl(url)));
        batchResults.forEach(r => {
            if (r) results.push(r);
        });
        // Small delay between batches
        await new Promise(r => setTimeout(r, 1000));
    }

    console.log('--- Migration Complete ---');
    const imports = results.map(r => r.importLine).join('\n');
    const routes = results.map(r => r.routeLine).join('\n');

    fs.writeFileSync('migration_imports.txt', imports);
    fs.writeFileSync('migration_routes.txt', routes);

    console.log('Imports saved to migration_imports.txt');
    console.log('Routes saved to migration_routes.txt');
}

main();
