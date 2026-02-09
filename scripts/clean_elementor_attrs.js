/**
 * Script to clean WordPress/Elementor-specific attributes from imported page components
 * This removes data-elementor-*, data-id, data-element_type, data-widget_type, data-settings
 * attributes while preserving the visual appearance of the pages
 */

const fs = require('fs');
const path = require('path');

const IMPORTED_DIR = path.join(__dirname, '..', 'client', 'src', 'components', 'imported');
const COMPONENTS_DIR = path.join(__dirname, '..', 'client', 'src', 'components');

// Attributes to remove (WordPress/Elementor specific)
const ATTRS_TO_REMOVE = [
    'data-elementor-type',
    'data-elementor-id',
    'data-elementor-post-type',
    'data-id',
    'data-element_type',
    'data-widget_type',
    'data-settings',
    'data-load-mode',
    'data-src',
    'data-srcset',
    'data-sizes',
    'data-tab',
    'aria-controls',
    'aria-labelledby'
];

// Regex patterns for attribute removal
const ATTR_PATTERNS = ATTRS_TO_REMOVE.map(attr => {
    // Match attribute="value" or attribute='value' or attribute={...}
    return new RegExp(`\\s+${attr}=(?:"[^"]*"|'[^']*'|\\{[^}]*\\})`, 'gi');
});

// Also remove escaped attribute patterns
const ESCAPED_ATTR_PATTERNS = ATTRS_TO_REMOVE.map(attr => {
    // Match escaped quotes like \"attribute\"=\"value\"
    return new RegExp(`\\s+${attr}=(?:\\\\?"[^"]*\\\\?"|\\\\?'[^']*\\\\?')`, 'gi');
});

// Pattern for data-elementor-* attributes (catch-all)
const DATA_ELEMENTOR_PATTERN = /\s+data-elementor-[a-z-]+=(?:"[^"]*"|'[^']*'|\{[^}]*\})/gi;
const ESCAPED_DATA_ELEMENTOR_PATTERN = /\s+data-elementor-[a-z-]+=(?:\\?"[^"]*\\?"|\\?'[^']*\\?')/gi;

function cleanHtmlContent(content) {
    let cleaned = content;

    // Remove specific attributes
    ATTR_PATTERNS.forEach(pattern => {
        cleaned = cleaned.replace(pattern, '');
    });

    // Remove escaped specific attributes  
    ESCAPED_ATTR_PATTERNS.forEach(pattern => {
        cleaned = cleaned.replace(pattern, '');
    });

    // Remove any remaining data-elementor-* attributes
    cleaned = cleaned.replace(DATA_ELEMENTOR_PATTERN, '');
    cleaned = cleaned.replace(ESCAPED_DATA_ELEMENTOR_PATTERN, '');

    // Clean up multiple spaces that might result from attribute removal
    cleaned = cleaned.replace(/\s+>/g, '>');
    cleaned = cleaned.replace(/"\s+"/g, '" "');

    return cleaned;
}

function processFile(filePath) {
    console.log(`Processing: ${path.basename(filePath)}`);

    try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalLength = content.length;

        const cleaned = cleanHtmlContent(content);

        if (cleaned !== content) {
            fs.writeFileSync(filePath, cleaned, 'utf8');
            const savedBytes = originalLength - cleaned.length;
            console.log(`  ✓ Cleaned ${savedBytes} bytes`);
            return true;
        } else {
            console.log(`  ○ No changes needed`);
            return false;
        }
    } catch (error) {
        console.error(`  ✗ Error: ${error.message}`);
        return false;
    }
}

function main() {
    console.log('='.repeat(60));
    console.log('Cleaning WordPress/Elementor attributes from imported pages');
    console.log('='.repeat(60));
    console.log('');

    // Get all JS files in the imported directory
    const importedFiles = fs.readdirSync(IMPORTED_DIR)
        .filter(f => f.endsWith('.js') && f.startsWith('Imported'))
        .map(f => path.join(IMPORTED_DIR, f));

    // Also get specific component files in main components directory
    const componentFiles = fs.readdirSync(COMPONENTS_DIR)
        .filter(f => f.endsWith('.js') && !f.startsWith('Imported') && fs.lstatSync(path.join(COMPONENTS_DIR, f)).isFile())
        .map(f => path.join(COMPONENTS_DIR, f));

    const allFiles = [...importedFiles, ...componentFiles];

    console.log(`Found ${importedFiles.length} imported page files`);
    console.log(`Found ${componentFiles.length} component files\n`);

    let modifiedCount = 0;

    allFiles.forEach(file => {
        if (processFile(file)) {
            modifiedCount++;
        }
    });

    console.log('');
    console.log('='.repeat(60));
    console.log(`Completed: ${modifiedCount}/${allFiles.length} files modified`);
    console.log('='.repeat(60));
}

main();
