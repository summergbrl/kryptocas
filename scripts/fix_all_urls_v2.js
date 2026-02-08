const fs = require('fs');
const path = require('path');

const directories = [
  'client/src/components',
  'client/src/components/imported'
];

let fixedCount = 0;

directories.forEach(dir => {
  const fullDir = path.join(__dirname, '..', dir);

  if (!fs.existsSync(fullDir)) return;

  const files = fs.readdirSync(fullDir).filter(f => f.endsWith('.js'));

  files.forEach(file => {
    const filePath = path.join(fullDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    // Replace all kryptocasinos.net URLs (more aggressive)
    content = content.split('https://www.kryptocasinos.net').join('');
    content = content.split('https://kryptocasinos.net').join('');
    content = content.split('http://www.kryptocasinos.net').join('');
    content = content.split('http://kryptocasinos.net').join('');

    // Fix wp-content paths that might remain
    content = content.replace(/\/wp-content\/uploads\/[^\s"')<>]+/g, '/imported/images/placeholder.webp');

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Fixed:', file);
      fixedCount++;
    }
  });
});

console.log('\nTotal files fixed:', fixedCount);
