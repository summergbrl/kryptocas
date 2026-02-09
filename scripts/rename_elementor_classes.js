/**
 * Script to rename Elementor/WordPress class names to semantic class names
 * This updates both HTML (in JS component files) and CSS files
 */

const fs = require('fs');
const path = require('path');

// Directories to process
const COMPONENTS_DIR = path.join(__dirname, '..', 'client', 'src', 'components');
const IMPORTED_DIR = path.join(COMPONENTS_DIR, 'imported');
const CSS_DIR = path.join(__dirname, '..', 'client', 'public', 'imported', 'css');

// Class name mappings: Elementor -> Semantic
const CLASS_MAPPINGS = {
    // Layout containers
    'elementor': 'kc-builder',
    'elementor-inner': 'kc-inner',
    'elementor-section': 'kc-section',
    'elementor-section-wrap': 'kc-section-wrap',
    'elementor-container': 'kc-container',
    'elementor-row': 'kc-row',
    'elementor-column': 'kc-column',
    'elementor-column-wrap': 'kc-column-wrap',
    'elementor-widget-wrap': 'kc-widget-wrap',
    'elementor-location-header': 'kc-header',
    'elementor-location-footer': 'kc-footer',

    // Flex containers
    'e-con': 'kc-flex-container',
    'e-con-inner': 'kc-flex-inner',
    'e-con-full': 'kc-flex-full',
    'e-con-boxed': 'kc-flex-boxed',
    'e-flex': 'kc-flex',
    'e-parent': 'kc-parent',
    'e-child': 'kc-child',

    // Elements
    'elementor-element': 'kc-element',
    'elementor-widget': 'kc-widget',
    'elementor-widget-container': 'kc-widget-content',

    // Widget types
    'elementor-widget-heading': 'kc-widget-heading',
    'elementor-widget-text-editor': 'kc-widget-text',
    'elementor-widget-image': 'kc-widget-image',
    'elementor-widget-button': 'kc-widget-button',
    'elementor-widget-icon': 'kc-widget-icon',
    'elementor-widget-icon-list': 'kc-widget-icon-list',
    'elementor-widget-divider': 'kc-widget-divider',
    'elementor-widget-spacer': 'kc-widget-spacer',
    'elementor-widget-toggle': 'kc-widget-accordion',
    'elementor-widget-accordion': 'kc-widget-accordion',
    'elementor-widget-nav-menu': 'kc-widget-nav',
    'elementor-widget-shortcode': 'kc-widget-shortcode',
    'elementor-widget-rating': 'kc-widget-rating',
    'elementor-widget-breadcrumbs': 'kc-widget-breadcrumbs',

    // Headings
    'elementor-heading-title': 'kc-heading',
    'elementor-size-default': 'kc-size-default',
    'elementor-size-small': 'kc-size-sm',
    'elementor-size-medium': 'kc-size-md',
    'elementor-size-large': 'kc-size-lg',
    'elementor-size-xl': 'kc-size-xl',
    'elementor-size-xxl': 'kc-size-xxl',

    // Buttons
    'elementor-button': 'kc-btn',
    'elementor-button-wrapper': 'kc-btn-wrapper',
    'elementor-button-link': 'kc-btn-link',
    'elementor-button-content-wrapper': 'kc-btn-content',
    'elementor-button-text': 'kc-btn-text',
    'elementor-button-icon': 'kc-btn-icon',
    'elementor-size-sm': 'kc-btn-sm',
    'elementor-size-xs': 'kc-btn-xs',

    // Navigation
    'elementor-nav-menu': 'kc-nav-menu',
    'elementor-nav-menu--main': 'kc-nav-main',
    'elementor-nav-menu--dropdown': 'kc-nav-dropdown',
    'elementor-nav-menu__container': 'kc-nav-container',
    'elementor-nav-menu--layout-horizontal': 'kc-nav-horizontal',
    'elementor-nav-menu--layout-vertical': 'kc-nav-vertical',
    'elementor-nav-menu--stretch': 'kc-nav-stretch',
    'elementor-nav-menu--dropdown-tablet': 'kc-nav-dropdown-tablet',
    'elementor-nav-menu--dropdown-mobile': 'kc-nav-dropdown-mobile',
    'elementor-nav-menu--toggle': 'kc-nav-toggle',
    'elementor-nav-menu--burger': 'kc-nav-burger',
    'elementor-nav-menu__align-center': 'kc-nav-align-center',
    'elementor-nav-menu__align-left': 'kc-nav-align-left',
    'elementor-nav-menu__align-right': 'kc-nav-align-right',
    'elementor-nav-menu__text-align-aside': 'kc-nav-text-aside',
    'elementor-item': 'kc-nav-item',
    'elementor-sub-item': 'kc-nav-sub-item',
    'elementor-menu-toggle': 'kc-menu-toggle',
    'elementor-menu-toggle__icon--open': 'kc-menu-icon-open',
    'elementor-menu-toggle__icon--close': 'kc-menu-icon-close',

    // Accordion/Toggle
    'elementor-toggle': 'kc-accordion',
    'elementor-toggle-item': 'kc-accordion-item',
    'elementor-toggle-title': 'kc-accordion-title',
    'elementor-toggle-content': 'kc-accordion-content',
    'elementor-tab-title': 'kc-tab-title',
    'elementor-tab-content': 'kc-tab-content',
    'elementor-toggle-title': 'kc-toggle-title',
    'elementor-clearfix': 'kc-clearfix',

    // Images
    'elementor-image': 'kc-image',
    'attachment-full': 'kc-img-full',
    'attachment-large': 'kc-img-large',
    'attachment-medium': 'kc-img-medium',
    'attachment-thumbnail': 'kc-img-thumb',
    'size-full': 'kc-size-full',
    'size-large': 'kc-size-large',
    'size-medium': 'kc-size-medium',
    'size-thumbnail': 'kc-size-thumb',

    // Icons
    'elementor-icon': 'kc-icon',
    'elementor-icon-list': 'kc-icon-list',
    'elementor-icon-list-item': 'kc-icon-list-item',
    'elementor-icon-list-icon': 'kc-icon-list-icon',
    'elementor-icon-list-text': 'kc-icon-list-text',
    'e-icon': 'kc-icon',
    'e-icon-wrapper': 'kc-icon-wrapper',
    'e-icon-marked': 'kc-icon-marked',
    'e-icon-unmarked': 'kc-icon-unmarked',

    // Rating
    'e-rating': 'kc-rating',
    'e-rating-wrapper': 'kc-rating-wrapper',

    // Divider
    'elementor-divider': 'kc-divider',
    'elementor-divider-separator': 'kc-divider-line',

    // Spacer
    'elementor-spacer': 'kc-spacer',
    'elementor-spacer-inner': 'kc-spacer-inner',

    // Text
    'elementor-text-editor': 'kc-text-editor',

    // Visibility
    'elementor-hidden-desktop': 'kc-hide-desktop',
    'elementor-hidden-tablet': 'kc-hide-tablet',
    'elementor-hidden-mobile': 'kc-hide-mobile',
    'elementor-visible-desktop': 'kc-show-desktop',
    'elementor-visible-tablet': 'kc-show-tablet',
    'elementor-visible-mobile': 'kc-show-mobile',

    // Alignment
    'elementor-align-center': 'kc-align-center',
    'elementor-align-left': 'kc-align-left',
    'elementor-align-right': 'kc-align-right',
    'elementor-align-justify': 'kc-align-justify',

    // Width
    'elementor-widget__width-initial': 'kc-width-initial',
    'elementor-widget__width-auto': 'kc-width-auto',
    'elementor-widget__width-inherit': 'kc-width-inherit',
    'elementor-widget-mobile__width-inherit': 'kc-mobile-width-inherit',

    // Position
    'elementor-absolute': 'kc-absolute',
    'elementor-relative': 'kc-relative',
    'elementor-fixed': 'kc-fixed',

    // Sticky
    'elementor-sticky': 'kc-sticky',
    'elementor-sticky--active': 'kc-sticky-active',
    'elementor-sticky--effects': 'kc-sticky-effects',
    'elementor-sticky__spacer': 'kc-sticky-spacer',
    'elementor-section--handles-inside': 'kc-handles-inside',

    // Animations/Effects
    'e--pointer-underline': 'kc-pointer-underline',
    'e--animation-slide': 'kc-anim-slide',
    'e--animation-fade': 'kc-anim-fade',
    'e--animation-grow': 'kc-anim-grow',

    // Browser detection (can be removed or kept)
    'e--ua-blink': 'kc-ua-blink',
    'e--ua-chrome': 'kc-ua-chrome',
    'e--ua-webkit': 'kc-ua-webkit',
    'e--ua-firefox': 'kc-ua-firefox',
    'e--ua-safari': 'kc-ua-safari',

    // Lazy loading
    'e-lazyloaded': 'kc-loaded',
    'lazyloaded': 'kc-loaded',
    'ls-is-cached': 'kc-cached',

    // WordPress specific
    'wp-image': 'kc-wp-image',
    'wp-embed-responsive': 'kc-embed-responsive',
    'wp-singular': 'kc-singular',
    'wp-theme-hello-elementor': 'kc-theme',

    // Font icon classes
    'e-font-icon-svg': 'kc-svg-icon',
    'e-fas-chevron-down': 'kc-icon-chevron-down',
    'e-fas-chevron-up': 'kc-icon-chevron-up',
    'e-fas-chevron-right': 'kc-icon-chevron-right',
    'e-fas-chevron-left': 'kc-icon-chevron-left',
    'e-fas-angle-right': 'kc-icon-angle-right',
    'e-fas-angle-left': 'kc-icon-angle-left',
    'e-fas-angle-down': 'kc-icon-angle-down',
    'e-fas-angle-up': 'kc-icon-angle-up',
    'e-eicon-star': 'kc-icon-star',
    'e-eicon-menu-bar': 'kc-icon-menu',
    'e-eicon-close': 'kc-icon-close',
    'fa-svg-chevron-down': 'kc-svg-chevron-down',

    // Page content
    'page-content': 'kc-page-content',
    'site-main': 'kc-main',
    'post-29': 'kc-post',

    // Misc Elementor
    'elementor-default': 'kc-default',
    'elementor-kit-394': 'kc-kit',
    'elementor-page': 'kc-page',
    'elementor-page-29': 'kc-page-home',
    'elementor-shortcode': 'kc-shortcode',

    // Hello Elementor theme
    'hello-elementor-default': 'kc-theme-default',

    // Cookie related
    'cookies-not-set': 'kc-cookies-pending',

    // Sub menu classes
    'sub-menu': 'kc-submenu',
    'sub-arrow': 'kc-submenu-arrow',
    'has-submenu': 'kc-has-submenu',

    // Menu item classes
    'menu-item': 'kc-menu-item',
    'menu-item-has-children': 'kc-menu-has-children',
    'menu-item-type-post_type': 'kc-menu-post',
    'menu-item-type-taxonomy': 'kc-menu-taxonomy',
    'menu-item-object-page': 'kc-menu-page',
    'menu-item-object-category': 'kc-menu-category',

    // Screen reader
    'screen-reader-text': 'kc-sr-only',
    'skip-link': 'kc-skip-link',
};

// Patterns to match dynamic element IDs (elementor-element-abc123)
const DYNAMIC_PATTERNS = [
    { pattern: /elementor-element-[a-f0-9]+/g, prefix: 'kc-el-' },
    { pattern: /elementor-tab-title-\d+/g, prefix: 'kc-tab-' },
    { pattern: /elementor-tab-content-\d+/g, prefix: 'kc-tab-content-' },
    { pattern: /menu-\d+-[a-f0-9]+/g, prefix: 'kc-menu-' },
    { pattern: /sm-\d+-\d+/g, prefix: 'kc-sm-' },
    { pattern: /elementor-\d+/g, prefix: 'kc-builder-' },
];

// Body classes to clean up
const BODY_CLASSES_TO_REMOVE = [
    'home',
    'wp-singular',
    'page-template-default',
    'page',
    'page-id-29',
    'wp-embed-responsive',
    'wp-theme-hello-elementor',
    'cookies-not-set',
    'hello-elementor-default',
    'elementor-default',
    'elementor-kit-394',
    'elementor-page',
    'elementor-page-29',
    'e--ua-blink',
    'e--ua-chrome',
    'e--ua-webkit',
    'type-page',
    'status-publish',
    'hentry',
];

function replaceClasses(content) {
    let result = content;

    // Replace static class mappings (sort by length descending to avoid partial replacements)
    const sortedMappings = Object.entries(CLASS_MAPPINGS)
        .sort((a, b) => b[0].length - a[0].length);

    for (const [oldClass, newClass] of sortedMappings) {
        // Match class in class attribute or as standalone in CSS
        const patterns = [
            // In HTML class attributes: class="oldClass" or class="foo oldClass bar"
            new RegExp(`(class=["'][^"']*)(\\b${escapeRegex(oldClass)}\\b)([^"']*["'])`, 'g'),
            // In CSS selectors
            new RegExp(`(\\.)(${escapeRegex(oldClass)})(\\b)`, 'g'),
        ];

        for (const pattern of patterns) {
            result = result.replace(pattern, `$1${newClass}$3`);
        }
    }

    // Handle dynamic element IDs
    for (const { pattern, prefix } of DYNAMIC_PATTERNS) {
        result = result.replace(pattern, (match) => {
            const id = match.split('-').pop();
            return prefix + id;
        });
    }

    return result;
}

function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function processFile(filePath, type) {
    const relativePath = path.relative(__dirname, filePath);
    console.log(`Processing ${type}: ${path.basename(filePath)}`);

    try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalLength = content.length;

        const processed = replaceClasses(content);

        if (processed !== content) {
            fs.writeFileSync(filePath, processed, 'utf8');
            const diff = originalLength - processed.length;
            console.log(`  ✓ Updated (${diff > 0 ? '-' : '+'}${Math.abs(diff)} bytes)`);
            return true;
        } else {
            console.log(`  ○ No changes`);
            return false;
        }
    } catch (error) {
        console.error(`  ✗ Error: ${error.message}`);
        return false;
    }
}

function getAllFiles(dir, extensions) {
    let results = [];

    if (!fs.existsSync(dir)) {
        console.log(`Directory not found: ${dir}`);
        return results;
    }

    const items = fs.readdirSync(dir);

    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.lstatSync(fullPath);

        if (stat.isDirectory()) {
            results = results.concat(getAllFiles(fullPath, extensions));
        } else if (extensions.some(ext => item.endsWith(ext))) {
            results.push(fullPath);
        }
    }

    return results;
}

function main() {
    console.log('='.repeat(70));
    console.log('Renaming Elementor/WordPress classes to semantic class names');
    console.log('='.repeat(70));
    console.log('');

    let totalModified = 0;
    let totalFiles = 0;

    // Process JavaScript component files
    console.log('\n📁 Processing JavaScript Components...\n');
    const jsFiles = [
        ...getAllFiles(IMPORTED_DIR, ['.js']),
        ...getAllFiles(COMPONENTS_DIR, ['.js']).filter(f => !f.includes('imported'))
    ];

    for (const file of jsFiles) {
        totalFiles++;
        if (processFile(file, 'JS')) {
            totalModified++;
        }
    }

    // Process ONLY our custom override CSS file (not the imported Elementor CSS)
    console.log('\n📁 Processing Custom CSS Override...\n');
    const overrideCssPath = path.join(IMPORTED_DIR, 'ImportedStylesOverride.css');
    if (fs.existsSync(overrideCssPath)) {
        totalFiles++;
        if (processFile(overrideCssPath, 'CSS')) {
            totalModified++;
        }
    }

    console.log('\n' + '='.repeat(70));
    console.log(`✅ Completed: ${totalModified}/${totalFiles} files modified`);
    console.log('='.repeat(70));
    console.log('\nClass mappings applied:');
    console.log(`  - ${Object.keys(CLASS_MAPPINGS).length} static class mappings`);
    console.log(`  - ${DYNAMIC_PATTERNS.length} dynamic ID patterns`);
}

main();
