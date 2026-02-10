const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../client/src/components/NewHomePage.js');
const content = fs.readFileSync(filePath, 'utf8');

const target = 'Casino Boni';
const index = content.indexOf(target);

if (index !== -1) {
    const start = Math.max(0, index - 500);
    const end = Math.min(content.length, index + 500);
    console.log('--- Context around "Casino Boni" ---');
    console.log(content.substring(start, end));
    console.log('--- End context ---');
} else {
    console.log('Target string not found.');
}
