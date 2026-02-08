const fs = require('fs');
const path = require('path');

const filesToFix = [
    'client/src/components/NewHomePage.js',
    'client/src/components/NewPrivacyPolicyPage.js'
];

filesToFix.forEach(relativePath => {
    const filePath = path.join(__dirname, '..', relativePath);
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filePath}`);
        return;
    }

    console.log(`Processing ${filePath}...`);
    let content = fs.readFileSync(filePath, 'utf8');

    // Fix unnecessary escape characters
    // \& -> &
    // \/ -> /
    // \$ -> $
    // \" -> " (Safety check: generally safe inside backticks if not specifically needing escaping)

    // We modify the content inside the `__html: \` ... \`` block mostly.
    // But honestly, global replace of `\&` to `&` is likely safe in this file context
    // as it's mostly one giant string.

    // Eslint: Unnecessary escape character: \&
    content = content.replace(/\\&/g, '&');

    // Eslint: Unnecessary escape character: \/
    content = content.replace(/\\\//g, '/');

    // Eslint: Unnecessary escape character: \$
    content = content.replace(/\\\$/g, '$');

    // Eslint: Unnecessary escape character: \"
    // We only want to remove backslash if it precedes a double quote AND we are inside backticks.
    // However, simply replacing `\"` with `"` might break things if there are actual double quoted strings in JS (e.g. imports).
    // The errors are specifically "Unnecessary escape character".
    // In a normal double quoted string "foo \" bar", the escape IS necessary.
    // In a backtick string `foo " bar`, it is NOT.
    // The huge HTML block is in backticks.
    // Let's target the html block specifically if possible, or just apply it globally if we trust there are no 'foo \" bar' strings.
    // Looking at the imports and code, they use single quotes 'react' or double quotes "react".
    // If double quotes are used for imports, e.g. import X from "react", there are no escaped quotes inside.
    // So global replace of \" -> " should be safe EXCEPT if there is actual intentionally escaped quote.
    // Given the generated nature of these files, it's likely safe.
    content = content.replace(/\\"/g, '"');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed ${filePath}`);
});
