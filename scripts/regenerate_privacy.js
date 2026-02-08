const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '../Datenschutzbestimmungen – So schützen wir Ihre Daten.html');
const jsPath = path.join(__dirname, '../client/src/components/NewPrivacyPolicyPage.js');

try {
    let htmlContent = fs.readFileSync(htmlPath, 'utf8');

    // Extract body content
    const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    if (!bodyMatch) {
        throw new Error('Could not find body tag in HTML');
    }
    let bodyContent = bodyMatch[1];

    // Fix asset paths
    // Replace "Datenschutzbestimmungen – So schützen wir Ihre Daten_files/" with "/imported/"
    bodyContent = bodyContent.replace(/Datenschutzbestimmungen – So schützen wir Ihre Daten_files\//g, '/imported/');

    // Also check for encoded URL if any
    bodyContent = bodyContent.replace(/Datenschutzbestimmungen%20–%20So%20schützen%20wir%20Ihre%20Daten_files\//g, '/imported/');

    // Remove any self-references to absolute path if present (unlikely)

    // Escape backticks if any
    bodyContent = bodyContent.replace(/`/g, '\\`');

    // Remove redirect links (re-applying previous fix)
    bodyContent = bodyContent.replace(/href=["'](\/go\/[^"']*)["']/g, 'href="#"');
    bodyContent = bodyContent.replace(/href=["'](https?:\/\/[^"']+\/go\/[^"']*)["']/g, 'href="#"');

    // Read JS file
    let jsContent = fs.readFileSync(jsPath, 'utf8');

    // Find the insertion point
    const startMarker = 'dangerouslySetInnerHTML={{ __html: `';
    const endMarker = '` }} />';

    const startIdx = jsContent.indexOf(startMarker);
    const endIdx = jsContent.lastIndexOf(endMarker);

    if (startIdx === -1 || endIdx === -1) {
        throw new Error('Could not find marker points in JS file');
    }

    const newJsContent = jsContent.substring(0, startIdx + startMarker.length) +
        bodyContent +
        jsContent.substring(endIdx);

    fs.writeFileSync(jsPath, newJsContent);
    console.log('Successfully regenerated Privacy Policy content.');

} catch (err) {
    console.error('Error:', err);
    process.exit(1);
}
