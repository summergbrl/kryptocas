const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'Deutsche Krypto Casinos – Sicher und zuverlässig.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Simple regex to find the footer section
// Look for data-elementor-type="footer" or just <footer
const footerMatch = htmlContent.match(/<footer[^>]*>([\s\S]*?)<\/footer>/i) ||
    htmlContent.match(/data-elementor-type="footer"[^>]*>([\s\S]*?)<\/div>/i); // This might be weak if nested divs

if (footerMatch) {
    console.log("Footer section found.");
    const footerContent = footerMatch[0]; // Take the whole match to be safe if regex group is tricky

    // Find images in footer
    // Match img tags and capture the whole tag
    const imgTagRegex = /<img[^>]+>/g;
    let match;
    while ((match = imgTagRegex.exec(footerContent)) !== null) {
        const imgTag = match[0];
        console.log("\nFound footer image tag:", imgTag);

        // Extract src
        const srcMatch = imgTag.match(/src=["']([^"']+)["']/);
        if (srcMatch) console.log("  src:", srcMatch[1]);

        // Extract data-src
        const dataSrcMatch = imgTag.match(/data-src=["']([^"']+)["']/);
        if (dataSrcMatch) console.log("  data-src:", dataSrcMatch[1]);

        // Extract class
        const classMatch = imgTag.match(/class=["']([^"']+)["']/);
        if (classMatch) console.log("  class:", classMatch[1]);
    }

    // Search for "logo" string in footer content
    console.log("\nSearching for 'logo' string in footer content...");
    const logoIndex = footerContent.indexOf('logo');
    if (logoIndex !== -1) {
        const start = Math.max(0, logoIndex - 50);
        const end = Math.min(footerContent.length, logoIndex + 100);
        console.log(`Context around 'logo': ...${footerContent.substring(start, end)}...`);
    } else {
        console.log("'logo' string not found in footer section.");
    }
} else {
    // Fallback: search for "footer" keyword and print context
    console.log("Footer tag regex didn't match cleanly. Searching for 'footer' strings...");
    const indices = [];
    let idx = htmlContent.indexOf('footer');
    while (idx !== -1) {
        indices.push(idx);
        idx = htmlContent.indexOf('footer', idx + 1);
    }

    indices.forEach(i => {
        const start = Math.max(0, i - 100);
        const end = Math.min(htmlContent.length, i + 300);
        console.log(`Context at ${i}:\n`, htmlContent.substring(start, end));
    });

    // Also search for "logo" at the end of the file
    console.log("\nSearching for 'logo' in the last 20% of the file...");
    const lastPart = htmlContent.substring(Math.floor(htmlContent.length * 0.8));
    const logoRegex = /<img[^>]+src="[^"]*logo[^"]*"[^>]*>/g;
    let lMatch;
    while ((lMatch = logoRegex.exec(lastPart)) !== null) {
        console.log("Found possible footer logo:", lMatch[0]);
    }
}
