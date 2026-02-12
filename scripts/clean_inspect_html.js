const fs = require('fs');
const path = require('path');

const targets = [
    'client/src/components/NewHomePage.js',
    'client/public/index.html',
    // We can add other imported pages here if needed, scanning the directory
];

function processFile(filePath) {
    const fullPath = path.resolve(filePath);
    if (!fs.existsSync(fullPath)) {
        console.error(`File not found: ${fullPath}`);
        return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');

    // defined patterns to remove
    const attributesToRemove = [
        'data-id',
        'data-element_type',
        'data-widget_type',
        'data-settings',
        'data-kc-type',
        'data-kc-id',
        'data-kc-post-type',
        // 'data-tab'  <-- CAREFUL: likely used by JS
    ];

    // Regex to remove specific attributes
    // Matches: space + attribute + ="..." or ='...'
    // We use a specific regex to be safe. 
    // \s+ matches leading space
    // attribute name
    // =
    // " or '
    // captures content until next matching quote

    attributesToRemove.forEach(attr => {
        // Regex to match attribute="value" or attribute='value'
        // Matches: space + attribute + = + ( "..." OR '...' )
        const regex = new RegExp(`\\s+${attr}=(?:"[^"]*"|'[^']*')`, 'g');
        content = content.replace(regex, '');
    });

    // Remove comments <!-- ... -->
    // carefull with potential script tags, but in React JSX/strings it should be fine if inside the backticks
    // The HTML is inside `__html: \` ... \``

    // We only want to touch the string inside `__html: ...`
    // But since these are mostly purely visual attributes, global replace on the file for these patterns 
    // (given they are React components) should be fine, as long as we don't break JS variables.
    // However, data-id might be used in JS? unlikely in this codebase context for these specific names.

    // Let's rely on the fact that these attributes are mostly inside HTML strings. 
    // Ideally we'd parse the Backticks, but global replace is usually safe for "data-element_type" etc.

    // Remove HTML comments
    content = content.replace(/<!--[\s\S]*?-->/g, '');

    // Remove WP Emoji script (useless and clutter)
    content = content.replace(/<script[^>]*>[\s\S]*?_wpemojiSettings[\s\S]*?<\/script>/g, '');
    // Remove WP Emoji release script
    content = content.replace(/<script[^>]*src="[^"]*wp-emoji-release\.min\.js"[^>]*><\/script>/g, '');


    // Write back
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Cleaned ${filePath}`);
}

// Get all files in Imported Components
const importedDir = path.resolve('client/src/components/imported');
if (fs.existsSync(importedDir)) {
    const files = fs.readdirSync(importedDir);
    files.forEach(file => {
        if (file.endsWith('.js')) {
            targets.push(`client/src/components/imported/${file}`);
        }
    });
}

targets.forEach(processFile);
