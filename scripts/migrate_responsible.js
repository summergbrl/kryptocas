const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '../Was bedeutet verantwortungsbewusstes Spielen_.html');
const jsPath = path.join(__dirname, '../client/src/components/ResponsibleGamingPage.js');

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
    // Original: "Was bedeutet verantwortungsbewusstes Spielen__files/"
    // Target: "/imported/responsible_assets/"
    // Handle URL encoded version if necessary, though file name usually has underscores.
    bodyContent = bodyContent.replace(/Was bedeutet verantwortungsbewusstes Spielen__files\//g, '/imported/responsible_assets/');

    // Also handle absolute WP paths if any
    bodyContent = bodyContent.replace(/https:\/\/www\.kryptocasinos\.net\/wp-content\/uploads\/\d{4}\/\d{2}\//g, '/imported/responsible_assets/');

    // Fix logo to use global asset
    // Matches /imported/responsible_assets/logo.png (or variations) -> /images/logo.png
    bodyContent = bodyContent.replace(/\/imported\/responsible_assets\/logo(-\d+x\d+)?\.png/g, '/images/logo.png');

    // Remove srcset/sizes causing issues
    bodyContent = bodyContent.replace(
        /<img([^>]*?)src="\/images\/logo\.png"([^>]*?)>/g,
        (match, p1, p2) => {
            let newTag = `<img${p1}src="/images/logo.png"${p2}>`;
            newTag = newTag.replace(/srcset="[^"]*"/, '');
            newTag = newTag.replace(/sizes="[^"]*"/, '');
            return newTag;
        }
    );

    // Split content to remove the static footer
    const footerSplit = bodyContent.split('<div data-elementor-type="footer"');
    if (footerSplit.length > 1) {
        console.log('Found sidebar/footer split point, truncating static footer.');
        bodyContent = footerSplit[0];
    } else {
        console.log('Warning: Could not find footer split point. Footer might be duplicated or missing tag.');
    }

    // Ensure the header logo is correct and has class
    bodyContent = bodyContent.replace(/src="\/images\/logo\.png"[^>]*>/g, 'src="/images/logo.png" alt="Krypto Casinos" class="header-logo" >');

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
        const regex = new RegExp(artifact, 'gi');
        bodyContent = bodyContent.replace(regex, '');
    });

    // Escape backticks and backslashes for JS string template literal
    bodyContent = bodyContent.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\${/g, '\\${');

    const newJsContent = `import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from './Footer';

const ResponsibleGamingPage = () => {
  useEffect(() => {
    // Apply body classes from the original HTML
    const bodyClasses = "page-template-default page wp-embed-responsive wp-theme-hello-elementor hello-elementor-default elementor-default elementor-page";
    const classes = bodyClasses.split(' ');
    classes.forEach(c => document.body.classList.add(c));

    return () => {
      classes.forEach(c => document.body.classList.remove(c));
    };
  }, []);

  return (
    <div id="imported-body-wrapper" style={{ width: '100%' }}>
      <Helmet>
        <title>Verantwortungsbewusstes Spielen - Krypto Casinos</title>
      </Helmet>
      <div dangerouslySetInnerHTML={{
        __html: \`
${bodyContent}
        \`
      }} />
      <Footer />
    </div>
  );
};

export default ResponsibleGamingPage;
`;

    fs.writeFileSync(jsPath, newJsContent);
    console.log('ResponsibleGamingPage.js generated successfully.');

} catch (err) {
    console.error('Error migrating responsible gaming page:', err);
    process.exit(1);
}
