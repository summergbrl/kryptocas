const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '../client/src/components/FreispieleContent.css');
const componentPath = path.join(__dirname, '../client/src/components/FreispieleOhneEinzahlungPage.js');

try {
    const cssContent = fs.readFileSync(cssPath, 'utf8');
    const urls = [];
    const regex = /url\('([^']+)'\)/g;
    let match;
    while ((match = regex.exec(cssContent)) !== null) {
        urls.push(match[1]);
    }

    console.log(`Found ${urls.length} CSS imports.`);

    let componentContent = fs.readFileSync(componentPath, 'utf8');

    // Remove import
    componentContent = componentContent.replace("import './FreispieleContent.css'; // Import the downloaded styles", '');
    componentContent = componentContent.replace("import './FreispieleContent.css';", '');

    // Add links to Helmet
    // We look for <Helmet> and append after it.
    const helmetOpenTag = '<Helmet>';

    // Check if links are already there to avoid duplicates if run multiple times
    if (!componentContent.includes(urls[0])) {
        const linkTags = urls.map(url => `<link rel="stylesheet" href="${url}" />`).join('\n                ');
        componentContent = componentContent.replace(helmetOpenTag, `${helmetOpenTag}\n                ${linkTags}`);
    } else {
        console.log('Link tags appear to be already present.');
    }

    fs.writeFileSync(componentPath, componentContent);
    console.log('✅ Updated component with link tags.');

    // Empty CSS file
    fs.writeFileSync(cssPath, '/* Imports moved to component to avoid Webpack resolution errors */');
    console.log('✅ Cleared CSS file.');

} catch (err) {
    console.error('Error fixing CSS:', err);
}
