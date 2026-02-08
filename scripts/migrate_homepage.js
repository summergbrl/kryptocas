const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '../Deutsche Krypto Casinos – Sicher und zuverlässig.html');
const jsPath = path.join(__dirname, '../client/src/components/NewHomePage.js');

try {
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');

  // Extract body content
  const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  let bodyContent = bodyMatch ? bodyMatch[1] : '';

  if (!bodyContent) {
    console.error("Could not find body content");
    process.exit(1);
  }

  // Replace asset paths
  // URL encoded: "Deutsche%20Krypto%20Casinos%20%E2%80%93%20Sicher%20und%20zuverl%C3%A4ssig_files"
  // We moved it to "/imported/homepage_assets/"
  // Handle both raw and URL encoded versions if present
  bodyContent = bodyContent.replace(/Deutsche Krypto Casinos – Sicher und zuverlässig_files\//g, '/imported/homepage_assets/');
  bodyContent = bodyContent.replace(/Deutsche%20Krypto%20Casinos%20%E2%80%93%20Sicher%20und%20zuverl%C3%A4ssig_files\//g, '/imported/homepage_assets/');

  // Fix potential double slashes or dot slash issues from original invalid relative paths
  // e.g. src="./Deutsche..." becomes src=".//imported..." if we replaced just the folder name
  // So we replace .//imported with /imported
  bodyContent = bodyContent.replace(/\.\/\/imported\/homepage_assets\//g, '/imported/homepage_assets/');
  bodyContent = bodyContent.replace(/\.\/imported\/homepage_assets\//g, '/imported/homepage_assets/');

  // REPLACE EXTERNAL WP-CONTENT URLS
  // The browser prioritizes srcset, so we must replace these external links with our local assets
  // Regex matches https://www.kryptocasinos.net/wp-content/uploads/YYYY/MM/ and replaces with /imported/homepage_assets/
  // General replacement for wp-content/uploads to local assets
  bodyContent = bodyContent.replace(/https:\/\/www\.kryptocasinos\.net\/wp-content\/uploads\/\d{4}\/\d{2}\//g, '/imported/homepage_assets/');

  // Fix footer logo specific path and styling
  // Original might have been https://www.kryptocasinos.net/wp-content/uploads/.../logogrm...
  // But after above replace it is /imported/homepage_assets/logogrm...
  // We want to target the logogrm file specifically.
  // We also want to inject style for circular image.

  // Note: The previous regex replaced the path, but the filename remains.
  // We can target the filename 'logogrm-1-2048x546.png' or similar.
  // RegEx to find the image tag containing this file and modify it is hard on a string.
  // Easier to replace the specific src and add style.

  // Fix footer logo and header logo to use the global asset /images/logo.png

  // Header Logo replacement (if it matches the wp-content pattern, it's already /imported/..., but we want /images/logo.png)
  // We can be specific: replace the imported logo path with the global one if it matches expected patterns
  bodyContent = bodyContent.replace(/\/imported\/homepage_assets\/logo(-\d+x\d+)?\.png/g, '/images/logo.png');

  // Specific footer logo fix - replace the previous logogrm references or the already-replaced footerpic references
  // Cleaning up from previous runs or fresh runs
  bodyContent = bodyContent.replace(/\/imported\/homepage_assets\/footerpic\.jpeg/g, '/images/logo.png');
  bodyContent = bodyContent.replace(/\/imported\/homepage_assets\/logogrm-[^"]+\.png/g, '/images/logo.png');

  // Remove srcset completely for these logo images to prevent browser choosing wrong size
  // Target images with src="/images/logo.png"
  bodyContent = bodyContent.replace(
    /<img([^>]*?)src="\/images\/logo\.png"([^>]*?)>/g,
    (match, p1, p2) => {
      let newTag = `<img${p1}src="/images/logo.png"${p2}>`;
      newTag = newTag.replace(/srcset="[^"]*"/, '');
      newTag = newTag.replace(/sizes="[^"]*"/, '');

      // Check if it's the footer logo (often has specific class or context, or we can apply generic logo style)
      // But since Header and Footer components are React, this script mainly affects the 'body' content from Elementor.
      // If the Elementor content *contains* the header/footer (which it seems to, based on previous inspection), we style it.

      // If it has wp-image-415 (footer), apply footer style
      if (newTag.includes('wp-image-415')) {
        // Apply standard footer styling - max width to keep it sane
        newTag = newTag.replace(/>$/, ' style="max-width: 150px; height: auto;">');
      }

      return newTag;
    }
  );

  // Split content to remove the static footer
  const footerSplit = bodyContent.split('<div data-elementor-type="footer"');
  if (footerSplit.length > 1) {
    console.log('Found sidebar/footer split point, truncating static footer.');
    bodyContent = footerSplit[0];
  } else {
    console.log('Warning: Could not find footer split point. Footer might be duplicated.');
  }

  // Also handle possible other absolute paths if they exist
  bodyContent = bodyContent.replace(/https:\/\/www\.kryptocasinos\.net\/wp-content\/uploads\//g, '/imported/homepage_assets/');

  // Ensure the header logo is correct
  bodyContent = bodyContent.replace(/src="[^"]*logo\.png"[^>]*>/g, 'src="/images/logo.png" alt="Krypto Casinos" class="header-logo" >');

  // Fix content typos requested by user (BJ Casino -> JB Casino)
  bodyContent = bodyContent.replace(/BJ Casino/g, 'JB Casino');
  bodyContent = bodyContent.replace(/BJCasino/g, 'JBCasino');
  bodyContent = bodyContent.replace(/BJ CASINO/g, 'JB CASINO');

  // Remove content artifacts (alt text appearing as content)
  const artifactsToRemove = [
    'Blauer Lichtschein auf Weiß',
    'Vorhängeschloss',
    'Goldmünzen',
    'Hand hält eine Medaille',
    'Ein Pfeil',
    'Bild unseres Chefredakteurs',
    'Unterschrift von Nico Steinbauer',
    'Gib hier deine Überschrift ein'
  ];

  artifactsToRemove.forEach(artifact => {
    // Regex to remove the artifact, handling potential whitespace
    const regex = new RegExp(artifact, 'gi');
    bodyContent = bodyContent.replace(regex, '');
  });

  // Remove "Stern" only if it appears alone or in specific context (risky if "Stern" is used elsewhere)
  // User context: "Stern Bonuse" -> likely an icon description before the word "Bonuse"
  bodyContent = bodyContent.replace(/Stern\s+Bonuse/gi, 'Bonuse');
  // Safety: If "Stern" is used in "Sternzeichen" (Zodiac), we don't want to remove it.
  // But context "Stern Bonuse" is what user pasted.

  // Escape backticks and backslashes for JS string template literal
  // We need to be careful not to double escape if we run this multiple times, but this is a one-shot generation.
  bodyContent = bodyContent.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\${/g, '\\${');

  const newJsContent = `import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from './Footer';
import EnglishContent from './EnglishContent';
import './EnglishContent.css';

const NewHomePage = () => {
  useEffect(() => {
    // Apply body classes from the original HTML
    // These classes are taken from the source HTML body tag
    const bodyClasses = "home wp-singular page-template-default page page-id-29 wp-embed-responsive wp-theme-hello-elementor hello-elementor-default elementor-default elementor-kit-394 elementor-page elementor-page-29 e--ua-blink e--ua-chrome e--ua-webkit cookies-not-set";
    const classes = bodyClasses.split(' ');
    classes.forEach(c => document.body.classList.add(c));

    // Cleanup function to remove classes when component unmounts
    return () => {
      classes.forEach(c => document.body.classList.remove(c));
    };
  }, []);

  return (
    <div id="imported-body-wrapper" style={{ width: '100%' }}>
      <Helmet>
        <title>Deutsche Krypto Casinos – Sicher und zuverlässig</title>
      </Helmet>
      <div dangerouslySetInnerHTML={{
        __html: \`
${bodyContent}
        \`
      }} />
      <EnglishContent />
      <Footer />
    </div>
  );
};

export default NewHomePage;
`;

  fs.writeFileSync(jsPath, newJsContent);
  console.log('NewHomePage.js generated successfully.');

} catch (err) {
  console.error('Error migrating homepage:', err);
  process.exit(1);
}
