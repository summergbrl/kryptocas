const fs = require('fs');
const path = require('path');

const files = [
    'client/src/components/NewHomePage.js',
    'client/src/components/NewPrivacyPolicyPage.js'
];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        let originalContent = content;

        // 1. Fix Footer "Datenschutz" text (specifically in NewHomePage.js mostly)
        // I previously wrote: <li>Datenschutz</li>
        // Replace with link.
        content = content.replace(
            '<li>Datenschutz</li>',
            '<li><a href="/datenschutz" style="color: inherit; text-decoration: none;">Datenschutz</a></li>'
        );

        // 2. Fix Absolute Links in hrefs to be relative
        // We want to keep remote images (src="...") pointing to wherever if they are external, 
        // but we know we already fixed src to /imported/ for local assets.
        // However, we want to fix navigation links: href="https://www.kryptocasinos.net/..."
        // We will replace 'href="https://www.kryptocasinos.net' with 'href="'

        // This regex matches href="https://www.kryptocasinos.net and captures the rest until the closing quote
        // But actually we just want to remove the domain prefix inside hrefs.

        // Safety: Only replace in href attributes.
        content = content.replace(/href="https:\/\/www\.kryptocasinos\.net\//g, 'href="/');
        content = content.replace(/href="https:\/\/www\.kryptocasinos\.net"/g, 'href="/"');

        // Also fix the case without www if it exists (just in case)
        content = content.replace(/href="https:\/\/kryptocasinos\.net\//g, 'href="/');
        content = content.replace(/href="https:\/\/kryptocasinos\.net"/g, 'href="/"');

        if (content !== originalContent) {
            fs.writeFileSync(file, content);
            console.log(`Updated links in ${file}`);
        } else {
            console.log(`No changes needed for ${file}`);
        }
    } else {
        console.log(`File not found: ${file}`);
    }
});
