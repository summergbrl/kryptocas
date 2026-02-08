const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../client/src/components/imported/ImportedHome.js');
let content = fs.readFileSync(filePath, 'utf8');

// The image filename details we found
const uniqueStr = '2025_2710433d';

// Regex to find img tag containing this image
// Handles different attributes order and quoting
const imgRegex = new RegExp(`<img[^>]*${uniqueStr}[^>]*>`, 'g');

// Also check for background image reference if any
// This regex is a bit loose, be careful
const bgRegex = new RegExp(`background-image:\\s*url\\(['"]?.*?${uniqueStr}.*?['"]?\\)`, 'g');

let changed = false;

// Remove img tags
if (imgRegex.test(content)) {
    console.log('Found img tag with 2025 image. Removing...');
    content = content.replace(imgRegex, ''); // Remove the tag completly
    changed = true;
} else {
    console.log('No img tag found with 2025 image.');
}

// Remove background styles
if (bgRegex.test(content)) {
    console.log('Found background-image style with 2025 image. Removing...');
    content = content.replace(bgRegex, 'background-image: none');
    changed = true;
}

// Also check for Elementor data-settings or similar JSON string
// Elementor often stores URLs in escaped JSON
// We might need to handle escaped slashes
const jsonRegex = new RegExp(`"url":"[^"]*${uniqueStr}[^"]*"`, 'g');
if (jsonRegex.test(content)) {
    console.log('Found JSON reference in data-settings. Removing URL...');
    // Replacing with empty URL might be safer than removing key
    content = content.replace(jsonRegex, `"url":""`);
    changed = true;
}

if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully removed 2025 image references from ImportedHome.js');
} else {
    console.log('No changes made. Could not find 2025 image reference.');
    // Debug: print a snippet around "2025" to see what it is
    const idx = content.indexOf('2025');
    if (idx !== -1) {
        console.log('Context around "2025":');
        console.log(content.substring(idx - 100, idx + 100));
    }
}
