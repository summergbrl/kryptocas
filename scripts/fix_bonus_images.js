const fs = require('fs');
const path = require('path');

const componentPath = path.join(__dirname, '../client/src/components/BonusOhneUmsatzbedingungenPage.js');

try {
    let content = fs.readFileSync(componentPath, 'utf8');

    // Regex to find images with data-src but maybe not src, or src="data:..."
    // The migration script usually handles this, but sometimes Elementor leaves 
    // data-src attributes that might confuse things or we want to be sure.
    // Also, we might want to ensure 'srcset' is gone.

    // We already do a lot in the migration script.
    // This script can be a backup to sweep for any missed data-src
    // and convert them to src if src is missing or placeholder.

    // Pattern: data-src="/imported/..."
    // We want to make sure src is set to that.

    content = content.replace(/<img([^>]+)data-src="([^"]+)"([^>]*)>/g, (match, p1, p2, p3) => {
        // If src is already set to p2, ignore
        if (match.includes(`src="${p2}"`)) return match;

        if (p1.includes('src=')) {
            // Replace existing src
            return `<img${p1.replace(/src="[^"]*"/, `src="${p2}"`)}${p3}>`;
        } else {
            // Add src
            return `<img src="${p2}"${p1}${p3}>`;
        }
    });

    // Remove remaining data-src, srcset, sizes
    content = content.replace(/data-src="[^"]*"/g, '');
    content = content.replace(/srcset="[^"]*"/g, '');
    content = content.replace(/sizes="[^"]*"/g, '');
    content = content.replace(/loading="lazy"/g, '');

    fs.writeFileSync(componentPath, content);
    console.log('✅ Fixed images in component.');

} catch (err) {
    console.error('Error fixing images:', err);
}
