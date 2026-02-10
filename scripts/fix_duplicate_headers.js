// Script to remove duplicate Header and Footer imports/usage from all page components
// since App.js already renders them globally
const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '..', 'client', 'src', 'components');

// Files that import Header
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.js') && f !== 'Header.js' && f !== 'Footer.js');

let fixedCount = 0;

files.forEach(file => {
    const filePath = path.join(componentsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // Remove Header import
    if (content.includes("import Header from './Header';")) {
        content = content.replace("import Header from './Header';\r\n", '');
        content = content.replace("import Header from './Header';\n", '');
        changed = true;
    }

    // Remove Footer import  
    if (content.includes("import Footer from './Footer';")) {
        content = content.replace("import Footer from './Footer';\r\n", '');
        content = content.replace("import Footer from './Footer';\n", '');
        changed = true;
    }

    // Remove <Header /> usage (with various whitespace)
    if (content.includes('<Header />') || content.includes('<Header/>')) {
        content = content.replace(/\s*<Header\s*\/>\s*\n?/g, '\n');
        changed = true;
    }

    // Remove <Footer /> usage
    if (content.includes('<Footer />') || content.includes('<Footer/>')) {
        content = content.replace(/\s*<Footer\s*\/>\s*\n?/g, '\n');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        fixedCount++;
        console.log(`Fixed: ${file}`);
    }
});

console.log(`\nDone! Fixed ${fixedCount} files.`);
