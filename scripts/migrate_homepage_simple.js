const fs = require('fs');
const path = require('path');

const sourceDir = 'C:\\Users\\arnel\\Documents\\kryptocasinos\\pagess';
const destBase = 'C:\\Users\\arnel\\Documents\\kryptocasinos\\client\\public\\imported';
const assetsDirName = 'homepage_files';
const destAssetsDir = path.join(destBase, assetsDirName);

// Ensure dest dir exists
if (!fs.existsSync(destBase)) {
    fs.mkdirSync(destBase, { recursive: true });
}

// Find the source file and folder dynamically to handle special characters correctly
const files = fs.readdirSync(sourceDir);
const htmlFile = files.find(f => f.includes('Deutsche Krypto Casinos') && f.endsWith('.html'));
const assetsFolder = files.find(f => f.includes('Deutsche Krypto Casinos') && f.endsWith('_files') && fs.statSync(path.join(sourceDir, f)).isDirectory());

if (!htmlFile || !assetsFolder) {
    console.error('Could not find source HTML file or assets folder in ' + sourceDir);
    process.exit(1);
}

const sourceHtmlPath = path.join(sourceDir, htmlFile);
const sourceAssetsPath = path.join(sourceDir, assetsFolder);

console.log(`Found HTML: ${htmlFile}`);
console.log(`Found Assets: ${assetsFolder}`);

// Function to copy directory recursively
function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        // Clean the filename of query strings if any (though usually not on disk)
        const cleanName = entry.name.split('?')[0];
        const destPath = path.join(dest, cleanName);

        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

console.log(`Copying assets from ${sourceAssetsPath} to ${destAssetsDir}...`);
try {
    copyDir(sourceAssetsPath, destAssetsDir);
    console.log('Assets copied successfully.');
} catch (err) {
    console.error('Error copying assets:', err);
}

// Process HTML
console.log('Processing HTML...');
let htmlContent = fs.readFileSync(sourceHtmlPath, 'utf8');

// Replace asset paths
// The path in HTML usually matches the folder name
// We need to escape special regex chars in the folder name
// The folder name might be URL encoded in the HTML or raw.
// We'll replace both just in case.

const folderNameRegexSafe = assetsFolder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const assetPathPattern = new RegExp(`\\./${folderNameRegexSafe}/`, 'g');
const assetPathPatternEncoded = new RegExp(`\\./${encodeURIComponent(assetsFolder)}/`, 'g');

const newAssetPath = `/imported/${assetsDirName}/`;

let processedHtml = htmlContent.replace(assetPathPattern, newAssetPath);
processedHtml = processedHtml.replace(assetPathPatternEncoded, newAssetPath);

// Extract Body
const bodyStartRegex = /<body[^>]*>/i;
const bodyEndRegex = /<\/body>/i;
const bodyStartMatch = processedHtml.match(bodyStartRegex);
const bodyEndMatch = processedHtml.match(bodyEndRegex);

if (bodyStartMatch && bodyEndMatch) {
    const bodyContent = processedHtml.substring(
        bodyStartMatch.index + bodyStartMatch[0].length,
        bodyEndMatch.index
    );
    fs.writeFileSync(path.join(destBase, 'homepage_body.html'), bodyContent);
    console.log('Saved homepage_body.html');
} else {
    console.error('Could not find body tags');
}

// Extract Styles (Link and Style tags from Head)
const headStartRegex = /<head[^>]*>/i;
const headEndRegex = /<\/head>/i;
const headStartMatch = processedHtml.match(headStartRegex);
const headEndMatch = processedHtml.match(headEndRegex);

if (headStartMatch && headEndMatch) {
    const headContent = processedHtml.substring(
        headStartMatch.index + headStartMatch[0].length,
        headEndMatch.index
    );

    // Extract <link rel="stylesheet"> and <style>
    const styleMatches = headContent.match(/<style[^>]*>[\s\S]*?<\/style>/gi) || [];
    const linkMatches = headContent.match(/<link[^>]*rel=["']stylesheet["'][^>]*>/gi) || [];

    // We also need to fix paths in the extracted styles/links (already done by global replace above, but double check)
    // Actually processedHtml already has the replacements, so headContent has them too.

    const stylesHtml = [...linkMatches, ...styleMatches].join('\n');
    fs.writeFileSync(path.join(destBase, 'homepage_styles.html'), stylesHtml);
    console.log('Saved homepage_styles.html');
} else {
    console.error('Could not find head tags');
}
