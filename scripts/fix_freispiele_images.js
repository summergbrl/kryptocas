const fs = require('fs');
const path = require('path');
const https = require('https');
const { JSDOM } = require('jsdom');

const COMPONENT_PATH = path.join(__dirname, '../client/src/components/FreispieleOhneEinzahlungPage.js');
const ASSETS_DIR = path.join(__dirname, '../client/public/imported/freispiele_assets');
const SOURCE_DOMAIN = 'https://www.kryptocasinos.net';

const downloadFile = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                file.close();
                fs.unlink(dest, () => { });
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

async function fixImages() {
    console.log('🔧 Starting Image Fix...');

    let content = fs.readFileSync(COMPONENT_PATH, 'utf8');

    // Extract the HTML part from the component
    const htmlMatch = content.match(/dangerouslySetInnerHTML={{ __html: `([\s\S]*)` }}/);
    if (!htmlMatch) {
        console.error('Could not find HTML content in component');
        return;
    }

    let htmlChunk = htmlMatch[1];

    // Use JSDOM to manipulate
    // Note: We need to be careful not to break the template literals ${} if any (though migration script escaped them)
    // The previous script escaped ` and $. JSDOM might unescape entities.
    // We will do simple string replacement for attributes if possible, or use JSDOM and re-escape.
    // JSDOM is safer for parsing.

    const dom = new JSDOM(htmlChunk);
    const doc = dom.window.document;
    const images = doc.querySelectorAll('img');

    for (const img of images) {
        const dataSrc = img.getAttribute('data-src');
        if (dataSrc) {
            console.log(`Found lazy image: ${dataSrc}`);

            const fileName = path.basename(dataSrc).split('?')[0];
            const destPath = path.join(ASSETS_DIR, fileName);
            const relativePath = `/imported/freispiele_assets/${fileName}`;

            // Download if missing
            if (!fs.existsSync(destPath)) {
                try {
                    console.log(`Downloading ${fileName}...`);
                    await downloadFile(dataSrc, destPath);
                } catch (err) {
                    console.error(`Failed to download ${dataSrc}:`, err.message);
                    continue; // Skip update if download fails? Or update anyway if we assume it might work later?
                    // Better verify.
                }
            }

            // Update attributes
            img.setAttribute('src', relativePath);
            img.removeAttribute('data-src');
            img.removeAttribute('srcset');
            img.removeAttribute('data-srcset');
            img.removeAttribute('sizes');
            img.removeAttribute('data-sizes');
            img.removeAttribute('loading');
            img.classList.remove('lazyload');
        }
    }

    // Serialize back
    let newHtml = doc.body.innerHTML;

    // Re-escape for React
    newHtml = newHtml.replace(/`/g, '\\`').replace(/\$/g, '\\$');

    // Replace in file
    const newContent = content.replace(htmlMatch[1], newHtml);

    fs.writeFileSync(COMPONENT_PATH, newContent);
    console.log('✅ Component updated with fixed images.');
}

fixImages().catch(console.error);
