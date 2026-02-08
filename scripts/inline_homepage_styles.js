const fs = require('fs');
const path = require('path');

const destDir = 'C:\\Users\\arnel\\Documents\\kryptocasinos\\client\\public\\imported';
const assetsDir = path.join(destDir, 'homepage_files');
const stylesFile = path.join(destDir, 'homepage_styles.html');

if (!fs.existsSync(stylesFile)) {
    console.error(`Styles file not found: ${stylesFile}`);
    process.exit(1);
}

let stylesHtml = fs.readFileSync(stylesFile, 'utf8');

// Regex to find link tags
// Expected format: <link rel="stylesheet" id="..." href="/imported/homepage_files/filename.css" ...>
// We verify it points to our imported files
const linkRegex = /<link[^>]+href=["'](\/imported\/homepage_files\/[^"']+)["'][^>]*>/gi;

let newStylesHtml = stylesHtml.replace(linkRegex, (match, href) => {
    // Extract filename
    const filename = path.basename(href);
    const filePath = path.join(assetsDir, filename);

    if (fs.existsSync(filePath)) {
        console.log(`Inlining ${filename}...`);
        let cssContent = fs.readFileSync(filePath, 'utf8');

        // Rewrite URLs
        // url('foo.jpg') -> url('/imported/homepage_files/foo.jpg')
        // Ignore data: and http:// and https://
        cssContent = cssContent.replace(/url\(\s*(['"]?)(?!['"]?(?:data:|http:|https:|content:))([^'"\)]+)(['"]?)\s*\)/gi, (urlMatch, quote1, urlPath, quote2) => {
            // Check if it's already absolute or what
            // Our assets are flat in homepage_files
            const assetName = path.basename(urlPath);
            // Some urls might have query strings like font.woff?v=1.2.3
            // We should strip query string for local check? No, keep it or handle it.
            // Actually, keep the query string in the rewriting?
            // If the file exists in our folder (without query string), we link to it.

            // Just prepend the path prefix
            // Remove any existing path components if they are relative like ../fonts/
            // Since we flattened the directory structure in migrate_homepage_simple.js (using recursion but flattening to dest? No, the copyDir was recursive).

            // Wait. My copyDir was recursive:
            // if (entry.isDirectory()) copyDir(...)
            // So subdirectories ARE preserved.
            // But the CSS files are at the root of homepage_files (from the list_dir output).
            // If a CSS file references `fonts/glyphicons...`, it expects `homepage_files/fonts/glyphicons...`.
            // My rewrite `newAssetPath = '/imported/homepage_files/'` applies to the inlined CSS.
            // So `url('fonts/glyphicons...')` becomes `url('/imported/homepage_files/fonts/glyphicons...')`.

            // However, if the CSS is `url('../images/bg.jpg')` and the CSS was in `css/style.css`, it goes to `images/bg.jpg`.
            // But in the source `_files` folder, everything seems flat-ish or standard.
            // The `list_dir` of `homepage_files` showed NO subdirectories.
            // Wait. Step 931: "Summary: This directory contains 0 subdirectories and 79 files."
            // So it IS flat.
            // That means any relative path in CSS like `images/bg.jpg` would FAIL if it expects a subdirectory.
            // BUT, `list_dir` said 0 subdirectories.
            // So `autoptimize` probably flattened everything or the source was flat.

            // If the source was flat, `url('bg.jpg')` is correct relative to CSS.
            // So prepending `/imported/homepage_files/` is correct.
            // But I should assume the referenced file is also in the root of `homepage_files`.

            // We strip any folder prefix from the url path just in case, ensuring we link to the flat file?
            // Or trust the CSS author?
            // "autoptimize" usually bundles everything.
            // Let's rely on the fact that `list_dir` showed flat files.
            // So `urlPath` likely is just a filename.

            const cleanUrlPath = path.basename(urlPath); // Force flat linking
            return `url(${quote1}/imported/homepage_files/${cleanUrlPath}${quote2})`;
        });

        return `<style>\n/* Inlined from ${filename} */\n${cssContent}\n</style>`;
    } else {
        console.warn(`Could not find file for inlining: ${filePath}`);
        return match; // Keep original link if file missing
    }
});

fs.writeFileSync(stylesFile, newStylesHtml);
console.log(`Updated ${stylesFile} with inlined styles.`);
