const fs = require('fs');
const path = require('path');

const homePagePath = path.join(__dirname, 'client/src/components/NewHomePage.js');
const affiliateLinksPath = path.join(__dirname, 'client/src/data/affiliateLinks.js');

try {
    // 1. Get slugs from NewHomePage.js
    const homePageContent = fs.readFileSync(homePagePath, 'utf8');
    const goLinkRegex = /href=["']\/go\/([^"']+)["']/g;
    const foundSlugs = new Set();
    let match;
    while ((match = goLinkRegex.exec(homePageContent)) !== null) {
        foundSlugs.add(match[1]);
    }
    console.log(`Found ${foundSlugs.size} unique /go/ links in NewHomePage.js:`, Array.from(foundSlugs));

    // 2. Get keys from affiliateLinks.js
    // Since it's an ES module, we'll read it as text and extract keys manually
    const affiliateLinksContent = fs.readFileSync(affiliateLinksPath, 'utf8');
    // Simple parsing assuming the structure is `const affiliateLinks = { ... };`
    const affiliateKeys = new Set();
    const linksMatch = affiliateLinksContent.match(/const affiliateLinks = \{([\s\S]*?)\};/);

    if (linksMatch && linksMatch[1]) {
        const lines = linksMatch[1].split('\n');
        lines.forEach(line => {
            const keyMatch = line.trim().match(/^['"]?([^'":]+)['"]?\s*:/);
            if (keyMatch) {
                affiliateKeys.add(keyMatch[1]);
            }
        });
    }
    console.log(`Found ${affiliateKeys.size} keys in affiliateLinks.js:`, Array.from(affiliateKeys));

    // 3. Compare
    const missingSlugs = [];
    foundSlugs.forEach(slug => {
        if (!affiliateKeys.has(slug)) {
            missingSlugs.push(slug);
        }
    });

    if (missingSlugs.length === 0) {
        console.log('\nSUCCESS: All /go/ links in NewHomePage.js have corresponding entries in affiliateLinks.js.');
    } else {
        console.log('\nWARNING: The following /go/ links are missing from affiliateLinks.js:');
        missingSlugs.forEach(slug => console.log(` - ${slug}`));
    }

} catch (err) {
    console.error('Error:', err);
}
