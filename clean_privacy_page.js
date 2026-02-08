const fs = require('fs');

const targetFile = 'client/src/components/NewPrivacyPolicyPage.js';
let content = fs.readFileSync(targetFile, 'utf8');

const garbageStart = '<div id="give-freely-root-mbnbehikldjhnfehhnaidhjhoofhpehk"';
const index = content.indexOf(garbageStart);

if (index === -1) {
    console.log('Garbage content not found, file might already be clean.');
} else {
    // Find the end of the HTML string (the backtick)
    // We assume the garbage is at the very end of the HTML string.
    // The HTML string is wrapped in ` ... `
    // We want to keep everything BEFORE garbageStart, and then find the closing backtick.

    // Check what is after the garbage.
    // In view_file: ... </template></div>` }} />
    // So we just need to find the next backtick after index.
    const closingBacktick = content.indexOf('`', index);

    if (closingBacktick === -1) {
        console.error('Could not find closing backtick!');
        process.exit(1);
    }

    const cleanContent = content.substring(0, index) + content.substring(closingBacktick);

    fs.writeFileSync(targetFile, cleanContent);
    console.log('Successfully cleaned NewPrivacyPolicyPage.js');
}
