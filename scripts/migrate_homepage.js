const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const htmlPath = path.join(__dirname, '..', 'pagess', 'Deutsche Krypto Casinos – Sicher und zuverlässig.html');
const assetsSourceDir = path.join(__dirname, '..', 'pagess', 'Deutsche Krypto Casinos – Sicher und zuverlässig_files');
const assetsDestDir = path.join(__dirname, '..', 'client', 'public', 'imported', 'home_assets');
const componentPath = path.join(__dirname, '..', 'client', 'src', 'components', 'NewHomePage.js');
const cssPath = path.join(__dirname, '..', 'client', 'src', 'components', 'HomePageContent.css');

console.log('📄 Reading HTML file...');
const html = fs.readFileSync(htmlPath, 'utf-8');
const $ = cheerio.load(html);

// Create assets directory
if (!fs.existsSync(assetsDestDir)) {
  fs.mkdirSync(assetsDestDir, { recursive: true });
}

console.log('📁 Copying assets...');
if (fs.existsSync(assetsSourceDir)) {
  const files = fs.readdirSync(assetsSourceDir);
  files.forEach(file => {
    const src = path.join(assetsSourceDir, file);
    const dest = path.join(assetsDestDir, file);
    if (fs.statSync(src).isFile()) {
      fs.copyFileSync(src, dest);
    }
  });
  console.log(`✅ Copied ${files.length} asset files`);
}

// Extract and copy CSS files
console.log('🎨 Extracting styles...');
let cssImports = [];
$('link[rel="stylesheet"]').each((i, el) => {
  const href = $(el).attr('href');
  if (href && href.startsWith('./')) {
    const cssFile = href.replace('./', '');
    cssImports.push(`/imported/home_assets/${cssFile}`);
  }
});

// Clean up problematic elements
$('script').remove();
$('noscript').remove();
$('link[rel="stylesheet"]').remove();
$('style').remove();
$('meta').remove();
$('plasmo-csui').remove();
$('title').remove();

// Remove sticky headers and navigation that conflict with app routing
$('header[data-elementor-type="header"]').remove();
$('.elementor-sticky').remove();

// Update image paths and clean attributes
$('img').each((i, el) => {
  const src = $(el).attr('src');
  const dataSrc = $(el).attr('data-src');

  if (dataSrc && dataSrc.includes('wp-content')) {
    const filename = dataSrc.split('/').pop();
    $(el).attr('src', `/imported/home_assets/${filename}`);
    $(el).removeAttr('data-src');
  } else if (src && src.includes('wp-content')) {
    const filename = src.split('/').pop();
    $(el).attr('src', `/imported/home_assets/${filename}`);
  }

  // Clean up attributes
  $(el).removeAttr('srcset');
  $(el).removeAttr('sizes');
  $(el).removeAttr('data-srcset');
  $(el).removeAttr('data-sizes');
  $(el).removeAttr('fetchpriority');
  $(el).removeAttr('decoding');
  $(el).removeAttr('loading');
  $(el).removeAttr('style'); // Remove inline styles from images
});

// Remove inline styles from containers that use fixed/sticky positioning
$('[style*="position: fixed"]').removeAttr('style');
$('[style*="position: sticky"]').removeAttr('style');
$('[style*="position: absolute"]').each((i, el) => {
  $(el).removeAttr('style');
});

// Get only the main content area
let bodyContent = $('#content').html() || $('main').html() || $('body').html() || '';

// Generate React component with proper structure
const componentCode = `import React from 'react';
import './HomePageContent.css';

/**
 * NewHomePage - Main homepage component
 * Migrated from: Deutsche Krypto Casinos – Sicher und zuverlässig.html
 */
function NewHomePage() {
  return (
    <div className="imported-homepage">
      <link rel="stylesheet" href="/imported/home_assets/css" />
      <div dangerouslySetInnerHTML={{ __html: \`${bodyContent.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
    </div>
  );
}

export default NewHomePage;
`;

// Write the component
fs.writeFileSync(componentPath, componentCode, 'utf-8');
console.log('✅ Created React component:', componentPath);

// Write minimal CSS
const cssContent = `/* Migrated Homepage Styles */
/* Source: Deutsche Krypto Casinos – Sicher und zuverlässig.html */

.imported-homepage {
  background: #0a0e1a;
  color: #ffffff;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  position: relative;
}

/* Import original styles */
${cssImports.map(css => `@import url('${css}');`).join('\n')}

/* Override problematic positioning */
.imported-homepage .elementor-sticky,
.imported-homepage header[data-elementor-type="header"] {
  position: static !important;
  width: 100% !important;
  margin: 0 !important;
  top: auto !important;
}

.imported-homepage .elementor-element {
  position: relative !important;
}

/* Fix scrolling */
.imported-homepage {
  overflow-y: auto;
  overflow-x: hidden;
}

/* Responsive images */
.imported-homepage img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Links */
.imported-homepage a {
  color: #00A0FF;
  text-decoration: none;
}

.imported-homepage a:hover {
  text-decoration: underline;
}
`;

fs.writeFileSync(cssPath, cssContent, 'utf-8');
console.log('✅ Created CSS file:', cssPath);

console.log('\n✨ Homepage migration complete!');
console.log('📦 Assets copied to:', assetsDestDir);
console.log('📄 Component created at:', componentPath);
console.log('🎨 Styles created at:', cssPath);
console.log('\n💡 Note: Original WordPress header/navigation removed to avoid conflicts with app routing');
