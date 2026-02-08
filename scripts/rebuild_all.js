const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

const baseDir = path.join(__dirname, '..');
const importedComponentsDir = path.join(baseDir, 'client/src/components/imported');
const importedAssetsDir = path.join(baseDir, 'client/public/imported');

console.log('--- STARTING FULL REBUILD ---');

// 1. Clean Directories
console.log('1. Cleaning imported directories...');
fs.emptyDirSync(importedComponentsDir);
fs.emptyDirSync(importedAssetsDir);
console.log('   Cleaned.');

// 2. Run Batch Migrate
console.log('2. Running batch_migrate.js (this may take a while)...');
try {
    execSync('node scripts/batch_migrate.js', { stdio: 'inherit', cwd: baseDir });
} catch (e) {
    console.error('Error running batch_migrate.js. Continuing...');
}

// 3. Update App Routes
console.log('3. Updating App routes...');
try {
    execSync('node scripts/update_app_routes.js', { stdio: 'inherit', cwd: baseDir });
} catch (e) {
    console.error('Error updating routes. Continuing...');
}

// 4. Fix Assets (Images/Fonts)
console.log('4. Fixing assets (Images/Fonts)...');
try {
    execSync('node scripts/fix_assets.js', { stdio: 'inherit', cwd: baseDir });
} catch (e) {
    console.error('Error fixing assets. Continuing...');
}

// 5. Fix Remaining (Scripts/Links/Rel Paths)
console.log('5. Fixing remaining scripts and links...');
try {
    execSync('node scripts/fix_remaining.js', { stdio: 'inherit', cwd: baseDir });
} catch (e) {
    console.error('Error fixing remaining items. Continuing...');
}

console.log('--- REBUILD COMPLETE ---');
console.log('Please verify the application.');
