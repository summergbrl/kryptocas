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

    if (content.includes('kryptocasinos.net')) {
      // Replace wp-content URLs with local paths
      content = content.replace(/https:\/\/www\.kryptocasinos\.net\/wp-content\/uploads\/[^\s"')<>]+/g, '/imported/images/placeholder.webp');
      content = content.replace(/https:\/\/kryptocasinos\.net\/wp-content\/uploads\/[^\s"')<>]+/g, '/imported/images/placeholder.webp');

      // Remove remaining https URLs (but keep email addresses)
      content = content.replace(/https:\/\/www\.kryptocasinos\.net/g, '');
      content = content.replace(/https:\/\/kryptocasinos\.net/g, '');

      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Fixed:', file);
      fixedCount++;
    }
  });
});

console.log('\nTotal files fixed:', fixedCount);
