const fs = require('fs');
const content = fs.readFileSync('client/src/components/NewHomePage.js', 'utf8');
const match = content.match(/__html: \`([\s\S]*)\`/);
if (match) {
    console.log("--- LAST 1000 CHARS ---");
    console.log(match[1].slice(-1000));
    console.log("--- END ---");
} else {
    console.log('No match found');
}
