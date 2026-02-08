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

    // Fix date-based paths to flat structure
    // /imported/images/2024/07/file.ext -> /imported/images/file.ext
    // /imported/images/2024/08/file.ext -> /imported/images/file.ext
    // /imported/images/2025/01/file.ext -> /imported/images/file.ext
    content = content.replace(/\/imported\/images\/\d{4}\/\d{2}\//g, '/imported/images/');

    // Also fix homepage_assets references to use images folder (as backup)
    // Since we already have the files there

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Fixed image paths in:', file);
      fixedCount++;
    }
  });
});

console.log('\nTotal files fixed:', fixedCount);
