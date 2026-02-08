const fs = require('fs');
const path = require('path');

const sourcePath = 'C:\\Users\\arnel\\Documents\\kryptocasinos\\Deutsche Krypto Casinos – Sicher und zuverlässig.html';
const content = fs.readFileSync(sourcePath, 'utf8');

// Define replacements
const originalDirName = 'Deutsche Krypto Casinos – Sicher und zuverlässig_files';
const encodedDirName = encodeURIComponent(originalDirName).replace(/%20/g, ' '); // browsers might just show space or %20
// The HTML file uses "./Deutsche Krypto Casinos – Sicher und zuverlässig_files/"
// We want to replace it with "/imported/"

// Regex to find the assets path.
// Note: In the file content provided in Step 17, it looks like: "./Deutsche Krypto Casinos – Sicher und zuverlässig_files/"
const assetsRegex = /\.\/Deutsche Krypto Casinos – Sicher und zuverlässig_files\//g;
const replacementPath = '/imported/';

// Extract Head Content (Styles and Scripts)
// We want <link rel="stylesheet"> and <style> and <script> from the head.
// Finding <head> content
const headStart = content.indexOf('<head>');
const headEnd = content.indexOf('</head>');
let headContent = '';
if (headStart !== -1 && headEnd !== -1) {
    headContent = content.substring(headStart + 6, headEnd);
}

// Filter head content to only keep relevant tags?
// For now, let's just grab all CSS links and JS scripts.
// But some might be inline styles we want to keep.
// We'll process headContent to replace paths.
let processedHead = headContent.replace(assetsRegex, replacementPath);

// Extract Body Content
const bodyStartRegex = /<body[^>]*>/;
const bodyEndRegex = /<\/body>/;
const bodyStartMatch = content.match(bodyStartRegex);
const bodyEndMatch = content.match(bodyEndRegex);

let bodyContent = '';
let bodyAttrs = '';
if (bodyStartMatch && bodyEndMatch) {
    const startIndex = bodyStartMatch.index + bodyStartMatch[0].length;
    const endIndex = bodyEndMatch.index;
    bodyContent = content.substring(startIndex, endIndex);
    
    // Extract body attributes (classes)
    const bodyTag = bodyStartMatch[0];
    const classMatch = bodyTag.match(/class="([^"]*)"/);
    if (classMatch) {
        bodyAttrs = classMatch[1];
    }
}

// Process Body Content
let processedBody = bodyContent.replace(assetsRegex, replacementPath);

// Escape backticks for JS template literal
processedBody = processedBody.replace(/`/g, '\\`').replace(/\$/g, '\\$');

// Generate React Component
const componentContent = `import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const NewHomePage = () => {
  useEffect(() => {
    // Manually add scripts if needed, or rely on them being in index.html
    // This is safe-ish for now.
  }, []);

  return (
    <div className="${bodyAttrs}" id="imported-body-wrapper">
      <Helmet>
        {/* Inject head content roughly - this might be duplicative if we also put in index.html, 
            but Helmet handles title and meta management well.
            Scripts and Links might be better in index.html for loading order.
         */}
         <title>Deutsche Krypto Casinos – Sicher und zuverlässig</title>
      </Helmet>
      <div dangerouslySetInnerHTML={{ __html: \`${processedBody}\` }} />
    </div>
  );
};

export default NewHomePage;
`;

// Write Component
fs.writeFileSync('C:\\Users\\arnel\\Documents\\kryptocasinos\\client\\src\\components\\NewHomePage.js', componentContent);

// Generate Head Snippet for index.html
// We'll write this to a file so we can read it and manually insert, or write a script to insert it.
fs.writeFileSync('C:\\Users\\arnel\\Documents\\kryptocasinos\\client\\public\\head_snippet.html', processedHead);

console.log('Extraction complete.');
