const fs = require('fs');
const path = require('path');

const importsFile = path.join(__dirname, '../migration_imports.txt');
const routesFile = path.join(__dirname, '../migration_routes.txt');
const appJsFile = path.join(__dirname, '../client/src/App.js');

try {
    const newImports = fs.readFileSync(importsFile, 'utf8').split('\n').filter(l => l.trim() !== '');
    const newRoutes = fs.readFileSync(routesFile, 'utf8').split('\n').filter(l => l.trim() !== '');
    let appJs = fs.readFileSync(appJsFile, 'utf8');

    // 0. Clean previous migrations
    const importBlockRegex = /\/\/ --- MIGRATED IMPORTS ---[\s\S]*?\/\/ ------------------------\n?/g;
    if (importBlockRegex.test(appJs)) {
        console.log('Removing old MIGRATED IMPORTS block...');
        appJs = appJs.replace(importBlockRegex, '');
    }

    const routeBlockRegex = /\{\/\* --- MIGRATED ROUTES --- \*\/\}[\s\S]*?\{\/\* ----------------------- \*\/\}\n?/g;
    if (routeBlockRegex.test(appJs)) {
        console.log('Removing old MIGRATED ROUTES block...');
        appJs = appJs.replace(routeBlockRegex, '');
    }

    // 1. Extract new paths
    const newPaths = newRoutes.map(line => {
        const match = line.match(/path="([^"]+)"/);
        return match ? match[1] : null;
    }).filter(Boolean);

    console.log(`Checking conflicts for ${newPaths.length} new routes...`);

    // 2. Comment out existing routes that conflict
    // NOTE: This might comment out routes that were just manually restored if the user isn't careful.
    // But for a full rebuild, we assume priority to migrated routes.
    newPaths.forEach(p => {
        // Look for <Route path="p" ... />
        // Be careful with regex special chars
        const escapedPath = p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(<Route\\s+path="${escapedPath}"\\s+element=\\{[^}]+\\}\\s*\\/>)`, 'g');

        // Only comment out if it's NOT inside a comment already (simplistic check)
        // Actually, if we just removed the migrated block, the remaining routes are "original" or "manual".
        if (regex.test(appJs)) {
            // check if already commented
            // match: <Route ... />
            // We can check surround context but simplistic replacement is risky.
            // Let's iterate matches.

            appJs = appJs.replace(regex, (match) => {
                if (match.startsWith('{/*')) return match;
                console.log(`Commenting out existing route for: ${p}`);
                return `{/* ${match} */}`;
            });
        }
    });

    // 3. Add new imports
    // Find the last import statement
    const lastImportIndex = appJs.lastIndexOf('import ');
    if (lastImportIndex !== -1) {
        const afterImport = appJs.substring(lastImportIndex).indexOf('\n');
        // Need to find end of that line
        const insertPos = lastImportIndex + afterImport + 1;

        const importsBlock = `\n// --- MIGRATED IMPORTS ---\n${newImports.join('\n')}\n// ------------------------\n`;
        appJs = appJs.slice(0, insertPos) + importsBlock + appJs.slice(insertPos);
    } else {
        // Prepend if no imports
        appJs = newImports.join('\n') + '\n' + appJs;
    }

    // 4. Add new routes
    // Find <Routes>
    const routesStart = appJs.indexOf('<Routes>');
    if (routesStart !== -1) {
        const insertPos = routesStart + '<Routes>'.length;
        const routesBlock = `\n        {/* --- MIGRATED ROUTES --- */}\n        ${newRoutes.join('\n        ')}\n        {/* ----------------------- */}\n`;
        appJs = appJs.slice(0, insertPos) + routesBlock + appJs.slice(insertPos);
    } else {
        console.error('Could not find <Routes> in App.js');
    }

    fs.writeFileSync(appJsFile, appJs);
    console.log('App.js updated successfully.');

} catch (err) {
    console.error('Error updating App.js:', err);
}
