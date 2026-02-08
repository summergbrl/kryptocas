const fs = require('fs');
const path = require('path');

const indexHtmlPath = 'c:\\Users\\arnel\\Documents\\kryptocasinos\\client\\public\\index.html';
const headSnippetPath = 'c:\\Users\\arnel\\Documents\\kryptocasinos\\client\\public\\head_snippet.html';

const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
const headSnippet = fs.readFileSync(headSnippetPath, 'utf8');

// Insert snippet before </head>
if (indexHtml.includes('</head>')) {
    const newHtml = indexHtml.replace('</head>', headSnippet + '\n</head>');
    fs.writeFileSync(indexHtmlPath, newHtml);
    console.log('Successfully injected head snippet into index.html');
} else {
    console.error('Could not find </head> in index.html');
}
