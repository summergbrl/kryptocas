const fs = require('fs');
const path = require('path');
const https = require('https');
const { JSDOM } = require('jsdom');

// Configuration
const SOURCE_URL = 'https://www.kryptocasinos.net/freispiele-ohne-einzahlung/';
const ASSETS_DIR = path.join(__dirname, '../client/public/imported/freispiele_assets');
const COMPONENT_PATH = path.join(__dirname, '../client/src/components/FreispieleOhneEinzahlungPage.js');
const CSS_PATH = path.join(__dirname, '../client/src/components/FreispieleContent.css'); // New CSS file

// Helper to download files
const downloadFile = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close(() => resolve(dest));
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err));
        });
    });
};

async function migrate() {
    console.log(`🚀 Starting migration for ${SOURCE_URL}...`);

    // 1. Fetch HTML
    console.log('📄 Fetching HTML...');
    const dom = await JSDOM.fromURL(SOURCE_URL);
    const document = dom.window.document;

    // 2. Prepare Assets Directory
    if (!fs.existsSync(ASSETS_DIR)) {
        fs.mkdirSync(ASSETS_DIR, { recursive: true });
        console.log(`📁 Created directory: ${ASSETS_DIR}`);
    }

    // 3. Process CSS
    console.log('🎨 Processing CSS...');
    const linkTags = document.querySelectorAll('link[rel="stylesheet"]');
    let cssImports = '';

    for (const link of linkTags) {
        const href = link.href;
        if (href) {
            const fileName = path.basename(href).split('?')[0]; // Remove query params
            const destPath = path.join(ASSETS_DIR, fileName);

            try {
                await downloadFile(href, destPath);
                console.log(`✅ Downloaded CSS: ${fileName}`);
                cssImports += `@import url('/imported/freispiele_assets/${fileName}');\n`;
            } catch (err) {
                console.warn(`⚠️ Failed to download CSS ${href}:`, err.message);
            }
        }
    }

    // Write CSS file
    fs.writeFileSync(CSS_PATH, cssImports);
    console.log(`✅ Created CSS file: ${CSS_PATH}`);

    // 4. Process Images
    console.log('🖼️ Processing Images...');
    const images = document.querySelectorAll('img');
    for (const img of images) {
        const src = img.src;
        if (src) {
            const fileName = path.basename(src).split('?')[0];
            const destPath = path.join(ASSETS_DIR, fileName);

            try {
                // Determine absolute URL for download if relative
                const absoluteUrl = new URL(src, SOURCE_URL).href;
                await downloadFile(absoluteUrl, destPath);
                console.log(`✅ Downloaded Image: ${fileName}`);

                // Update img src to local path
                img.src = `/imported/freispiele_assets/${fileName}`;

                // Clean up other attributes
                img.removeAttribute('srcset');
                img.removeAttribute('sizes');
                img.removeAttribute('loading'); // Let React handle it or browser default
                img.removeAttribute('decoding');
                img.removeAttribute('fetchpriority');

            } catch (err) {
                console.warn(`⚠️ Failed to download Image ${src}:`, err.message);
            }
        }
    }

    // 5. Extract Content
    console.log('📝 Extracting Content...');
    // Try to find the main content container. 
    // Based on previous files, it seems to be often #content or .elementor-section-wrap
    // Adjust selector based on inspection of the page structure if needed.
    // For now, let's try to get everything in 'body' but exclude scripts and hidden elements?
    // A better approach for WordPress pages often used here is to grab the main elementor container
    // or the specific article/page content.

    let contentElement = document.querySelector('#content') || document.querySelector('main') || document.querySelector('.elementor');
    if (!contentElement) {
        console.warn('⚠️ Could not find specific content container (#content, main, .elementor). Using body.');
        contentElement = document.body;
    }

    // Remove scripts, styles, meta, etc. from content
    const elementsToRemove = contentElement.querySelectorAll('script, style, link, meta, noscript, iframe, .skip-link');
    elementsToRemove.forEach(el => el.remove());

    // Fix Links: Replace absolute URLs to kryptocasinos.net with relative paths if possible
    const links = contentElement.querySelectorAll('a');
    links.forEach(link => {
        const href = link.href;
        if (href.includes('kryptocasinos.net')) {
            const url = new URL(href);
            link.href = url.pathname + url.search + url.hash;
        }
    });

    let htmlContent = contentElement.innerHTML;
    // Escape for JS template string
    htmlContent = htmlContent.replace(/`/g, '\\`').replace(/\$/g, '\\$');

    // 6. Generate React Component
    console.log('⚛️ Generating React Component...');
    const componentCode = `import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './FreispieleContent.css'; // Import the downloaded styles

const FreispieleOhneEinzahlungPage = () => {
    useEffect(() => {
        // Optional: Add body class if needed for specific styles
        document.body.classList.add('freispiele-imported');
        return () => {
            document.body.classList.remove('freispiele-imported');
        };
    }, []);

    return (
        <div className="freispiele-imported-wrapper">
             <Helmet>
                <title>Krypto Casino Freispiele ohne Einzahlung - Kryptocasinos.net</title>
                <meta name="description" content="Krypto Casino Freispiele ohne Einzahlung - Alle Infos und Top Angebote." />
            </Helmet>
            <div dangerouslySetInnerHTML={{ __html: \`
${htmlContent}
            \` }} />
        </div>
    );
};

export default FreispieleOhneEinzahlungPage;
`;

    fs.writeFileSync(COMPONENT_PATH, componentCode);
    console.log(`✅ Updated Component: ${COMPONENT_PATH}`);

    console.log('🎉 Migration Complete!');
}

migrate().catch(console.error);
