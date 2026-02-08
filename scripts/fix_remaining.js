const fs = require('fs');
const path = require('path');
const axios = require('axios');
const crypto = require('crypto');

const baseDir = path.join(__dirname, '../client/public/imported');
const componentsDir = path.join(__dirname, '../client/src/components/imported');

// Ensure directories using native fs with recursive true (Node 10+)
// But handle if it already exists to avoid EEXIST on some systems/versions if not fully compliant
function ensureDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

ensureDir(path.join(baseDir, 'js'));
ensureDir(path.join(baseDir, 'css'));

function getAssetFilename(url, type) {
    try {
        const u = new URL(url);
        let ext = path.extname(u.pathname);
        if (!ext || ext.length > 5) {
            ext = (type === 'js' ? '.js' : '.css');
        }
        const name = path.basename(u.pathname, ext);
        const hash = crypto.createHash('md5').update(url).digest('hex').substring(0, 8);
        const safeName = name.replace(/[^a-zA-Z0-9-]/g, '_');
        return `${safeName}_${hash}${ext}`;
    } catch (e) {
        return null;
    }
}

async function downloadAsset(url, type) {
    if (!url || url.startsWith('data:') || url.startsWith('/imported/') || url.startsWith('/')) return url;

    // Ignore google fonts for now as they are complex (css imports woff/ttf)
    // Actually we want everything local... but Google fonts often use query params.

    try {
        const filename = getAssetFilename(url, type);
        if (!filename) return url;

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
        // console.error(`Failed to download ${url}: ${err.message}`);
        // If fail, return original
        return url;
    }
}

function normalizeInternalLink(href) {
    if (!href) return href;
    try {
        const urlObj = new URL(href);
        if (urlObj.hostname === 'www.kryptocasinos.net' || urlObj.hostname === 'kryptocasinos.net') {
            return urlObj.pathname + (urlObj.search || '') + (urlObj.hash || '');
        }
    } catch (e) {
        // If it's already relative or invalid URL, check if it starts with /
        if (href.startsWith('/')) return href;
    }
    return href;
}

async function processComponentFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let modified = false;

    // HELMET SECTION (React components)
    // <script src="...">
    const scriptSrcRegex = /<script\s+[^>]*src=["'](https?:\/\/[^"']+)["'][^>]*>/g;
    let match;

    // Use manual iteration to await
    // Note: iterating regex while replacing content can be tricky if length changes.
    // Better to collect replacements first.
    let replacements = [];

    while ((match = scriptSrcRegex.exec(content)) !== null) {
        const url = match[1];
        if (url.includes('kryptocasinos.net') || url.includes('wp-content')) {
            const newUrl = await downloadAsset(url, 'js');
            if (newUrl !== url) {
                replacements.push({ old: url, new: newUrl });
            }
        }
    }

    // LINK HREF (CSS) inside Helmet
    const linkHrefRegex = /<link\s+[^>]*href=["'](https?:\/\/[^"']+)["'][^>]*>/g;
    while ((match = linkHrefRegex.exec(content)) !== null) {
        const url = match[1];
        if ((url.endsWith('.css') || url.includes('css')) && (url.includes('kryptocasinos.net') || url.includes('wp-content'))) {
            const newUrl = await downloadAsset(url, 'css');
            if (newUrl !== url) {
                replacements.push({ old: url, new: newUrl });
            }
        }
    }

    // Apply download replacements
    // Sort by length desc to avoid substring issues just in case
    replacements.sort((a, b) => b.old.length - a.old.length);
    for (const r of replacements) {
        // Global replace
        content = content.split(r.old).join(r.new);
    }
    if (content !== originalContent) modified = true;

    // Standard Links
    // href="..."
    // We regex for https://www.kryptocasinos.net...

    // Note: dangerouslySetInnerHTML content often has escaped quotes like &quot; or \" 
    // But simple href="..." usually fine.
    // Let's look for https://www.kryptocasinos.net specifically.

    const domainRegex = /https:\/\/www\.kryptocasinos\.net([a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=%]*)/g;

    content = content.replace(domainRegex, (match, pathPart) => {
        // If it's an image src we skip? No, we want internal links to be relative.
        // But wait, what if it's an image src we missed?
        // If it ends in .jpg/.png it's an image.
        // If it's a page, it usually doesn't end in extension or ends in /

        if (pathPart.match(/\.(jpg|png|webp|gif|svg|jpeg|css|js|woff|woff2)$/i)) {
            // It's an asset. We hopefully downloaded it. 
            // If not, we should probably leave it or use the download tool?
            // But we can't await here directly in replace callback.
            // For now assume assets are handled by fix_assets.js
            return match;
        }

        // Assume it's a link
        modified = true;
        return pathPart || '/';
    });

    if (modified) {
        fs.writeFileSync(filePath, content);
        console.log(`Updated ${path.basename(filePath)}`);
    }
}

async function main() {
    if (!fs.existsSync(componentsDir)) return;
    const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.js'));
    console.log(`Scanning ${files.length} component files...`);

    for (const file of files) {
        await processComponentFile(path.join(componentsDir, file));
    }
    console.log('--- Link and Script Fix Complete ---');
}

main();
