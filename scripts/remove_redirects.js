const fs = require('fs');
const path = require('path');

const filePath = 'c:\\Users\\arnel\\Documents\\kryptocasinos\\client\\src\\components\\NewHomePage.js';
let content = fs.readFileSync(filePath, 'utf8');

// The user wants to "remove all the redirect links".
// Based on typical scraping, these are likely links to "https://www.kryptocasinos.net/go/..."
// or just modify ALL links to be non-functional for now?
// "from everywhere" implies all links in the content.

// Strategy 1: Replace keys typical of redirects
// Looking at previous file content, links look like: href="https://www.kryptocasinos.net/go/bc-game"
// We will replace 'href="https://www.kryptocasinos.net/go/[^"]*"' with 'href="#"'

// Strategy 2: Removing the anchor tag but keeping content?
// "remove the redirect links" -> usually means the link functionality.
// Let's replace the href with "#" for now, or remove the href attribute.
// Removing href makes it not a link in most browsers styles, or just a pointer.

// Let's go with replacing the href target with "#" and removing target="_blank" to be safe.
// Regex for /go/ links
const goLinkRegex = /href="https:\/\/www\.kryptocasinos\.net\/go\/[^"]*"/g;
content = content.replace(goLinkRegex, 'href="#"');

// Also remove rel="nofollow sponsored" if present associated with these?
// Simpler to just neuter the href.

// Strategy 3: The user said "remove all the redirect links".
// This might also include internal links that redirect?
// But usually "redirect links" in affiliate contexts means the /go/ ones.

// Let's also look for any other external links?
// For now, let's target the /go/ pattern specifically as that is the definition of a redirect link in this context.

fs.writeFileSync(filePath, content);
console.log('Redirect links replaced with #');
