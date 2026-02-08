const fs = require('fs');
const path = require('path');

const sourcePath = 'C:\\Users\\arnel\\Documents\\kryptocasinos\\Datenschutzbestimmungen – So schützen wir Ihre Daten.html';
const content = fs.readFileSync(sourcePath, 'utf8');

// Define replacements
// Use split/join for replacement to avoid regex issues with special characters
const targetString = './Datenschutzbestimmungen – So schützen wir Ihre Daten_files/';
const replacementPath = '/imported/';

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
let processedBody = bodyContent.split(targetString).join(replacementPath);

// Escape backticks for JS template literal
processedBody = processedBody.replace(/`/g, '\\`').replace(/\$/g, '\\$');

// Remove redirect links (pattern: href=".../go/...")
const goLinkRegex = new RegExp('href="https:\\/\\/www\\.kryptocasinos\\.net\\/go\\/[^"]*"', 'g');
processedBody = processedBody.replace(goLinkRegex, 'href="#"');


// Generate React Component
const componentContent = `import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const NewPrivacyPolicyPage = () => {
  useEffect(() => {
    // Apply body classes from the original HTML
    const bodyClassString = "${bodyAttrs}";
    const classes = bodyClassString.split(' ');
    classes.forEach(c => document.body.classList.add(c));

    // Cleanup function to remove classes when component unmounts
    return () => {
      classes.forEach(c => document.body.classList.remove(c));
    };
  }, []);

  return (
    <div id="imported-privacy-wrapper" style={{ width: '100%' }}>
      <Helmet>
         <title>Datenschutzbestimmungen – So schützen wir Ihre Daten</title>
      </Helmet>
      <div dangerouslySetInnerHTML={{ __html: \`${processedBody}\` }} />
    </div>
  );
};

export default NewPrivacyPolicyPage;
`;

// Write Component
fs.writeFileSync('C:\\Users\\arnel\\Documents\\kryptocasinos\\client\\src\\components\\NewPrivacyPolicyPage.js', componentContent);

console.log('Privacy Policy extraction complete.');
