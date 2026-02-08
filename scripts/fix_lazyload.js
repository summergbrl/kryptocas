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

    // Convert data-src to src for images (lazy loading fix)
    // Pattern: data-src="/imported/ -> src="/imported/
    content = content.replace(/data-src="(\/imported\/[^"]+)"/g, 'src="$1"');

    // Also handle data-src with other paths
    content = content.replace(/data-src="(\/images\/[^"]+)"/g, 'src="$1"');

    // Remove lazyload class that might hide images
    content = content.replace(/class="([^"]*\s)?lazyload(\s[^"]*)?"/g, 'class="$1$2"');

    // Clean up double spaces in class attributes
    content = content.replace(/class="\s+/g, 'class="');
    content = content.replace(/\s+"/g, '"');

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Fixed lazyload in:', file);
      fixedCount++;
    }
  });
});

console.log('\nTotal files fixed:', fixedCount);
