const fs = require('fs');
const path = require('path');
const https = require('https');
const { JSDOM } = require('jsdom');

// Configuration
const SOURCE_URL = 'https://www.kryptocasinos.net/krypto-casino-boni/krypto-casinos-bonus-ohne-umsatzbedingungen/';
const ASSETS_DIR = path.join(__dirname, '../client/public/imported/bonus_ohne_umsatz_assets');
const COMPONENT_PATH = path.join(__dirname, '../client/src/components/BonusOhneUmsatzbedingungenPage.js');

// Helper to download files
const downloadFile = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                // Consume response data to free up memory
                response.resume();
                reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close(() => resolve(dest));
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err)); // Delete the file async. (But we don't check result)
        });
    });
};

async function migrate() {
    console.log(`🚀 Starting migration for ${SOURCE_URL}...`);

    // 1. Fetch HTML
    console.log('📄 Fetching HTML...');
    // JSDOM fromURL might fail with some headers, but usually works for static sites
    let dom;
    try {
        dom = await JSDOM.fromURL(SOURCE_URL);
    } catch (e) {
        console.error("Error fetching URL:", e);
        return;
    }
    const document = dom.window.document;

    // 2. Prepare Assets Directory
    if (!fs.existsSync(ASSETS_DIR)) {
        fs.mkdirSync(ASSETS_DIR, { recursive: true });
        console.log(`📁 Created directory: ${ASSETS_DIR}`);
    }

    // 3. Process CSS
    console.log('🎨 Processing CSS...');
    const linkTags = document.querySelectorAll('link[rel="stylesheet"]');
    const cssFiles = [];

    for (const link of linkTags) {
        const href = link.href;
        if (href) {
            const fileName = path.basename(href).split('?')[0]; // Remove query params
            const destPath = path.join(ASSETS_DIR, fileName);

            try {
                // Ensure mapped properly if relative, though link.href from JSDOM usually absolute
                console.log(`Downloading CSS: ${href}`);
                await downloadFile(href, destPath);
                console.log(`✅ Downloaded CSS: ${fileName}`);
                cssFiles.push(fileName);
            } catch (err) {
                console.warn(`⚠️ Failed to download CSS ${href}:`, err.message);
            }
        }
    }

    // 4. Process Images
    console.log('🖼️ Processing Images...');
    const images = document.querySelectorAll('img');
    for (const img of images) {
        // Prefer src, but check data-src (lazy loading)
        let src = img.src;
        const dataSrc = img.getAttribute('data-src');

        // If src is empty or is a placeholder, try data-src
        if ((!src || src.includes('data:image')) && dataSrc) {
            src = dataSrc;
        }

        if (src) {
            const fileName = path.basename(src).split('?')[0];
            // Handle duplicate filenames? For now, overwrite is fine or add random hash if needed
            // But simple migration usually fine with basename.
            const destPath = path.join(ASSETS_DIR, fileName);

            try {
                // JSDOM normalizes src to absolute URL if it can
                // If we grabbed data-src, it might be relative
                let absoluteUrl = src;
                if (!src.startsWith('http')) {
                    absoluteUrl = new URL(src, SOURCE_URL).href;
                }

                await downloadFile(absoluteUrl, destPath);
                console.log(`✅ Downloaded Image: ${fileName}`);

                // Update img src to local path for the React component
                // We'll update the 'src' attribute. 
                // We should also clear data-src to prevent confusion
                img.setAttribute('src', `/imported/bonus_ohne_umsatz_assets/${fileName}`);
                img.removeAttribute('data-src');
                img.removeAttribute('srcset');
                img.removeAttribute('sizes');
                img.removeAttribute('loading');
                img.removeAttribute('decoding');
                img.removeAttribute('fetchpriority');

            } catch (err) {
                console.warn(`⚠️ Failed to download Image ${src}:`, err.message);
            }
        }
    }

    // 5. Extract Content
    console.log('📝 Extracting Content...');
    // Strategy: Look for specific Elementor containers
    let contentElement = document.querySelector('.elementor-location-single'); // Common in Elementor
    if (!contentElement) {
        contentElement = document.querySelector('#content') || document.querySelector('main');
    }

    // Fallback
    if (!contentElement) {
        console.warn('⚠️ Could not find specific content container. Using Body.');
        contentElement = document.body;
    }

    // Remove scripts, styles, meta, etc. from content
    const elementsToRemove = contentElement.querySelectorAll('script, style, link, meta, noscript, iframe, .skip-link, header, footer');
    elementsToRemove.forEach(el => el.remove());

    // Fix Links: Replace absolute URLs to kryptocasinos.net with relative paths if possible
    const links = contentElement.querySelectorAll('a');
    links.forEach(link => {
        const href = link.href;
        if (href.includes('kryptocasinos.net')) {
            try {
                const url = new URL(href);
                // Keep the path, but maybe map simple paths?
                // For now, just make it relative root
                link.href = url.pathname + url.search + url.hash;
            } catch (e) {
                // ignore invalid urls
            }
        }
    });

    let htmlContent = contentElement.innerHTML;
    // Escape for JS template string
    htmlContent = htmlContent.replace(/`/g, '\\`').replace(/\$/g, '\\$');

    // Generate Helmet Links
    const helmetLinks = cssFiles.map(file => `<link rel="stylesheet" href="/imported/bonus_ohne_umsatz_assets/${file}" />`).join('\n                ');

    // 6. Generate React Component
    console.log('⚛️ Generating React Component...');

    // We do NOT import a CSS file here. We use Helmet links.

    const componentCode = `import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const BonusOhneUmsatzbedingungenPage = () => {
    useEffect(() => {
        document.body.classList.add('bonus-ohne-umsatz-imported');
        return () => {
            document.body.classList.remove('bonus-ohne-umsatz-imported');
        };
    }, []);

    return (
        <div className="bonus-ohne-umsatz-wrapper">
             <Helmet>
                <title>Krypto Casino Bonus ohne Umsatzbedingungen - Kryptocasinos.net</title>
                <meta name="description" content="Krypto Casino Bonus ohne Umsatzbedingungen - Alle Infos und Top Angebote." />
                ${helmetLinks}
            </Helmet>
            <div dangerouslySetInnerHTML={{ __html: \`
${htmlContent}
            \` }} />
        </div>
    );
};

export default BonusOhneUmsatzbedingungenPage;
`;

    fs.writeFileSync(COMPONENT_PATH, componentCode);
    console.log(`✅ Updated Component: ${COMPONENT_PATH}`);

    console.log('🎉 Migration Complete!');
}

migrate().catch(console.error);
