const fs = require('fs-extra');
const path = require('path');
const axios = require('axios');
const crypto = require('crypto');

const baseDir = path.join(__dirname, '../client/public/imported');
const componentsDir = path.join(__dirname, '../client/src/components/imported');

// Ensure directories
fs.ensureDirSync(path.join(baseDir, 'images'));
fs.ensureDirSync(path.join(baseDir, 'fonts'));
fs.ensureDirSync(path.join(baseDir, 'css'));

function getAssetFilename(url) {
    const u = new URL(url);
    const ext = path.extname(u.pathname) || '';
    const name = path.basename(u.pathname, ext);
    const hash = crypto.createHash('md5').update(url).digest('hex').substring(0, 8);
    // sanitize
    const safeName = name.replace(/[^a-zA-Z0-9-]/g, '_');
    return `${safeName}_${hash}${ext}`;
}

async function downloadAsset(url, type) {
    if (!url || url.startsWith('data:') || url.startsWith('/imported/')) return url;

    // Handle relative URLs if base provided? No, assuming absolute here.
    if (!url.startsWith('http')) return url;

    try {
        const filename = getAssetFilename(url);
        const localDir = path.join(baseDir, type);
        const localPath = path.join(localDir, filename);

        if (fs.existsSync(localPath)) {
            return `/imported/${type}/${filename}`;
        }

        console.log(`Downloading ${type}: ${url}`);
        const response = await axios.get(url, { responseType: 'arraybuffer', timeout: 10000 });
        fs.writeFileSync(localPath, response.data);
        return `/imported/${type}/${filename}`;
    } catch (err) {
        console.error(`Failed to download ${url}: ${err.message}`);
        return url;
    }
}

async function processCssFiles() {
    const cssDir = path.join(baseDir, 'css');
    if (!fs.existsSync(cssDir)) return;

    const files = fs.readdirSync(cssDir).filter(f => f.endsWith('.css'));
    console.log(`Processing ${files.length} CSS files...`);

    for (const file of files) {
        const filePath = path.join(cssDir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        // Regex for url(...)
        // Need to be careful with quotes
        const urlRegex = /url\((['"]?)(.*?)\1\)/g;
        let match;

        // We can't use replace directly with async, so we match all then replace
        const matches = [];
        while ((match = urlRegex.exec(content)) !== null) {
            matches.push({ full: match[0], url: match[2], index: match.index });
        }

        for (const m of matches) {
            const originalUrl = m.url;
            if (originalUrl.startsWith('data:') || originalUrl.startsWith('/imported/')) continue;

            // If relative, we don't know the base easily unless we assume origin
            // But most absolute paths in Elementor CSS are... absolute.
            // If relative (e.g. "../fonts/foo.woff"), we might have issues if we don't know the original CSS URL.
            // Fortunately, Elementor usually puts full URLs in the CSS or inline CSS.
            // Let's assume absolute for now, or if it starts with /wp-content/

            let absoluteUrl = originalUrl;
            if (originalUrl.startsWith('/')) {
                absoluteUrl = `https://www.kryptocasinos.net${originalUrl}`;
            } else if (!originalUrl.startsWith('http')) {
                // Relative path... tricky without source mapping.
                // Assuming standard WP structure: /wp-content/uploads/...
                // If the CSS was at /wp-content/uploads/elementor/css/post-29.css
                // and url is ../fonts/foo
                // real is /wp-content/uploads/elementor/fonts/foo
                // Let's try to construct it if it looks like a font or image
                // skipping for now unless it's clearer
                continue;
            }

            // Determine type
            const ext = path.extname(absoluteUrl).toLowerCase();
            let type = 'images';
            if (['.woff', '.woff2', '.ttf', '.eot', '.otf'].includes(ext)) type = 'fonts';

            const newUrl = await downloadAsset(absoluteUrl, type);
            if (newUrl !== originalUrl && newUrl !== absoluteUrl) {
                // Replace in content
                // Naive replace might kill identical strings that weren't the match, 
                // but unlikely to be an issue here.
                content = content.replace(originalUrl, newUrl);
                modified = true;
            }
        }

        if (modified) {
            fs.writeFileSync(filePath, content);
            console.log(`Updated ${file}`);
        }
    }
}

async function processComponentFiles() {
    if (!fs.existsSync(componentsDir)) return;
    const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.js'));
    console.log(`Processing ${files.length} Component files...`);

    for (const file of files) {
        const filePath = path.join(componentsDir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        // 1. Check for inline styles with background-image
        // background-image: url(...)
        // Encoded in React usually as style={{ backgroundImage: 'url(...)' }} or inside dangerouslySetInnerHTML strings
        // Since we used dangerouslySetInnerHTML, it's just HTML strings.

        // Regex for url() inside string
        // We'll trust the previous downloader got most <img> src.
        // We need to fetch data-src, data-srcset, and style urls.

        const regexes = [
            /data-src="([^"]+)"/g,
            /data-srcset="([^"]+)"/g, // this is tricky as it has multiple urls
            /url\(&quot;([^&]+)&quot;\)/g, // escaped quotes in HTML
            /url\(([^)]+)\)/g // standard url()
        ];

        // Let's do a simple pass for all https://www.kryptocasinos.net URLs that look like assets
        const assetRegex = /https:\/\/www\.kryptocasinos\.net\/wp-content\/uploads\/[^"'\s\\]+/g;
        const matches = [...content.matchAll(assetRegex)];

        // Unique them
        const uniqueUrls = [...new Set(matches.map(m => m[0]))];

        for (const url of uniqueUrls) {
            const ext = path.extname(url).toLowerCase().split('?')[0]; // strip query
            if (['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.mp4'].includes(ext)) {
                const newUrl = await downloadAsset(url, 'images');
                if (newUrl !== url) {
                    // Global replace
                    content = content.split(url).join(newUrl);
                    modified = true;
                }
            }
        }

        if (modified) {
            fs.writeFileSync(filePath, content);
            console.log(`Updated ${file}`);
        }
    }
}

async function main() {
    await processCssFiles();
    await processComponentFiles();
    console.log('--- Asset Fix Complete ---');
}

main();
