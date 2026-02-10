const fs = require('fs');
const content = fs.readFileSync('client/src/components/NewHomePage.js', 'utf8');

const target = 'krypto-casino-boni';
let idx = 0;
while ((idx = content.indexOf(target, idx)) !== -1) {
    console.log(`--- Match at ${idx} ---`);
    const start = Math.max(0, idx - 100);
    const end = Math.min(content.length, idx + 200);
    console.log(content.substring(start, end));
    idx += target.length;
}
