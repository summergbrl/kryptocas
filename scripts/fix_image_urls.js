const fs = require('fs');
const path = require('path');

// Directory containing imported components
const importedDir = path.join(__dirname, '../client/src/components/imported');

// Map external URLs to local paths
const urlReplacements = [
  // Replace www.kryptocasinos.net URLs with local paths
  { from: /https:\/\/www\.kryptocasinos\.net\/wp-content\/uploads\//g, to: '/imported/images/' },
  { from: /https:\/\/kryptocasinos\.net\/wp-content\/uploads\//g, to: '/imported/images/' },
  // Fix any remaining external references
  { from: /src="https:\/\/www\.kryptocasinos\.net/g, to: 'src="' },
  { from: /href="https:\/\/www\.kryptocasinos\.net/g, to: 'href="' },
];

// Process all JS files in imported directory
function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  urlReplacements.forEach(replacement => {
    if (replacement.from.test(content)) {
      content = content.replace(replacement.from, replacement.to);
      modified = true;
    }
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${path.basename(filePath)}`);
    return true;
  }
  return false;
}

// Get all JS files in the imported directory
const files = fs.readdirSync(importedDir).filter(f => f.endsWith('.js'));

let fixedCount = 0;
files.forEach(file => {
  const filePath = path.join(importedDir, file);
  if (processFile(filePath)) {
    fixedCount++;
  }
});

console.log(`\nTotal files fixed: ${fixedCount}`);
