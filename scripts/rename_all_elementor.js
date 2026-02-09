const fs = require('fs');
const path = require('path');

// Directories
const COMPONENTS_DIR = path.join(__dirname, '..', 'client', 'src', 'components');
const IMPORTED_CSS_DIR = path.join(__dirname, '..', 'client', 'src', 'components', 'imported');
const PUBLIC_CSS_DIR = path.join(__dirname, '..', 'client', 'public', 'imported', 'css');

// Comprehensive class name mappings (Elementor/WordPress → kc- prefixed)
const CLASS_MAPPINGS = {
    // Main Elementor containers
    'elementor-element': 'kc-element',
    'elementor-widget-wrap': 'kc-widget-wrap',
    'elementor-widget': 'kc-widget',
    'elementor-column': 'kc-column',
    'elementor-row': 'kc-row',
    'elementor-section': 'kc-section',
    'elementor-container': 'kc-container',
    'elementor-top-section': 'kc-top-section',
    'elementor-inner-section': 'kc-inner-section',

    // E-con (Flexbox containers)
    'e-con-inner': 'kc-flex-inner',
    'e-con-full': 'kc-flex-full',
    'e-con': 'kc-flex-container',
    'e-flex': 'kc-flex',

    // Widget types
    'elementor-widget-heading': 'kc-widget-heading',
    'elementor-widget-text-editor': 'kc-widget-text',
    'elementor-widget-image': 'kc-widget-image',
    'elementor-widget-button': 'kc-widget-button',
    'elementor-widget-divider': 'kc-widget-divider',
    'elementor-widget-spacer': 'kc-widget-spacer',
    'elementor-widget-html': 'kc-widget-html',
    'elementor-widget-shortcode': 'kc-widget-shortcode',
    'elementor-widget-toggle': 'kc-widget-toggle',
    'elementor-widget-icon-list': 'kc-widget-icon-list',
    'elementor-widget-rating': 'kc-widget-rating',
    'elementor-widget-image-box': 'kc-widget-image-box',
    'elementor-widget-nav-menu': 'kc-widget-nav-menu',
    'elementor-widget-breadcrumbs': 'kc-widget-breadcrumbs',

    // Heading elements
    'elementor-heading-title': 'kc-heading-title',
    'elementor-size-default': 'kc-size-default',
    'elementor-size-small': 'kc-size-small',
    'elementor-size-medium': 'kc-size-medium',
    'elementor-size-large': 'kc-size-large',
    'elementor-size-xl': 'kc-size-xl',
    'elementor-size-xxl': 'kc-size-xxl',

    // Text editor
    'elementor-text-editor': 'kc-text-editor',

    // Image elements
    'elementor-image': 'kc-image',
    'elementor-image-box-img': 'kc-image-box-img',
    'elementor-image-box-wrapper': 'kc-image-box-wrapper',
    'elementor-image-box-content': 'kc-image-box-content',
    'elementor-image-box-title': 'kc-image-box-title',
    'elementor-image-box-description': 'kc-image-box-description',

    // Button elements
    'elementor-button-wrapper': 'kc-button-wrapper',
    'elementor-button': 'kc-button',
    'elementor-button-link': 'kc-button-link',
    'elementor-button-text': 'kc-button-text',
    'elementor-button-icon': 'kc-button-icon',
    'elementor-button-content-wrapper': 'kc-button-content-wrapper',
    'elementor-align-center': 'kc-align-center',
    'elementor-align-left': 'kc-align-left',
    'elementor-align-right': 'kc-align-right',
    'elementor-align-justify': 'kc-align-justify',

    // Divider
    'elementor-divider': 'kc-divider',
    'elementor-divider-separator': 'kc-divider-separator',

    // Spacer
    'elementor-spacer-inner': 'kc-spacer-inner',

    // Toggle/Accordion
    'elementor-toggle': 'kc-toggle',
    'elementor-toggle-item': 'kc-toggle-item',
    'elementor-toggle-title': 'kc-toggle-title',
    'elementor-toggle-icon': 'kc-toggle-icon',
    'elementor-toggle-content': 'kc-toggle-content',
    'elementor-active': 'kc-active',

    // Icon list
    'elementor-icon-list-items': 'kc-icon-list-items',
    'elementor-icon-list-item': 'kc-icon-list-item',
    'elementor-icon-list-icon': 'kc-icon-list-icon',
    'elementor-icon-list-text': 'kc-icon-list-text',

    // Rating
    'elementor-star-rating': 'kc-star-rating',
    'elementor-star-rating__wrapper': 'kc-star-rating-wrapper',
    'elementor-star-rating__title': 'kc-star-rating-title',
    'elementor-star-full': 'kc-star-full',
    'elementor-star-empty': 'kc-star-empty',

    // HTML widget
    'elementor-html-tag': 'kc-html-tag',

    // Navigation menu
    'elementor-nav-menu': 'kc-nav-menu',
    'elementor-nav-menu--main': 'kc-nav-menu-main',
    'elementor-nav-menu--layout-horizontal': 'kc-nav-menu-horizontal',
    'elementor-nav-menu--layout-vertical': 'kc-nav-menu-vertical',
    'elementor-nav-menu--dropdown': 'kc-nav-menu-dropdown',
    'elementor-nav-menu__container': 'kc-nav-menu-container',
    'elementor-nav-menu--toggle': 'kc-nav-menu-toggle',

    // Breadcrumbs
    'elementor-breadcrumbs': 'kc-breadcrumbs',

    // Layout properties
    'elementor-column-gap-default': 'kc-column-gap-default',
    'elementor-column-gap-narrow': 'kc-column-gap-narrow',
    'elementor-column-gap-extended': 'kc-column-gap-extended',
    'elementor-column-gap-wide': 'kc-column-gap-wide',
    'elementor-column-gap-wider': 'kc-column-gap-wider',

    // Positioning
    'elementor-absolute': 'kc-absolute',
    'elementor-fixed': 'kc-fixed',
    'elementor-relative': 'kc-relative',
    'elementor-sticky': 'kc-sticky',

    // Visibility
    'elementor-hidden-mobile': 'kc-hidden-mobile',
    'elementor-hidden-tablet': 'kc-hidden-tablet',
    'elementor-hidden-desktop': 'kc-hidden-desktop',
    'elementor-visible-mobile': 'kc-visible-mobile',
    'elementor-visible-tablet': 'kc-visible-tablet',
    'elementor-visible-desktop': 'kc-visible-desktop',

    // Reverse columns
    'elementor-reverse-mobile': 'kc-reverse-mobile',
    'elementor-reverse-tablet': 'kc-reverse-tablet',

    // Common utility classes
    'elementor-clearfix': 'kc-clearfix',
    'elementor-fit-aspect-ratio': 'kc-fit-aspect-ratio',
    'elementor-invisible': 'kc-invisible',
    'elementor-screen-only': 'kc-screen-only',

    // Animation classes
    'elementor-animation': 'kc-animation',
    'elementor-animation-grow': 'kc-animation-grow',
    'elementor-animation-shrink': 'kc-animation-shrink',
    'elementor-animation-pulse': 'kc-animation-pulse',
    'elementor-animation-pulse-grow': 'kc-animation-pulse-grow',
    'elementor-animation-pulse-shrink': 'kc-animation-pulse-shrink',

    // Inline editing
    'elementor-inline-editing': 'kc-inline-editing',
    'elementor-clickable': 'kc-clickable',

    // Shape dividers
    'elementor-shape': 'kc-shape',
    'elementor-shape-top': 'kc-shape-top',
    'elementor-shape-bottom': 'kc-shape-bottom',

    // Background video
    'elementor-background-video-container': 'kc-bg-video-container',
    'elementor-background-video-embed': 'kc-bg-video-embed',
    'elementor-background-video-hosted': 'kc-bg-video-hosted',

    // Background slideshow
    'elementor-background-slideshow': 'kc-bg-slideshow',
    'elementor-background-slideshow__slide': 'kc-bg-slideshow-slide',

    // Swiper (carousel/slider)
    'elementor-swiper': 'kc-swiper',
    'elementor-swiper-button': 'kc-swiper-button',
    'elementor-swiper-button-prev': 'kc-swiper-button-prev',
    'elementor-swiper-button-next': 'kc-swiper-button-next',

    // Lightbox
    'elementor-lightbox': 'kc-lightbox',

    // Repeater
    'elementor-repeater-item': 'kc-repeater-item',

    // Custom classes that appear in code
    'elementor-testimonial': 'kc-testimonial',
    'elementor-testimonial-wrapper': 'kc-testimonial-wrapper',
    'elementor-testimonial-content': 'kc-testimonial-content',
    'elementor-testimonial-name': 'kc-testimonial-name',
    'elementor-testimonial-job': 'kc-testimonial-job',
    'elementor-testimonial-image': 'kc-testimonial-image',

    // WordPress specific classes
    'wp-image': 'kc-wp-image',
    'wp-block': 'kc-wp-block',
    'wp-caption': 'kc-wp-caption',
    'wp-caption-text': 'kc-wp-caption-text',
    'alignnone': 'kc-align-none',
    'aligncenter': 'kc-align-center-wp',
    'alignleft': 'kc-align-left-wp',
    'alignright': 'kc-align-right-wp',
    'attachment': 'kc-attachment',

    // Additional widget classes
    'elementor-widget-container': 'kc-widget-container',
    'elementor-widget-wrap': 'kc-widget-wrap'
};

// Dynamic ID patterns to rename
const ID_PATTERNS = [
    { regex: /elementor-element-([a-zA-Z0-9]+)/g, replacement: 'kc-element-$1' },
    { regex: /elementor-tab-title-([a-zA-Z0-9]+)/g, replacement: 'kc-tab-title-$1' },
    { regex: /elementor-tab-content-([a-zA-Z0-9]+)/g, replacement: 'kc-tab-content-$1' },
    { regex: /elementor-heading-([a-zA-Z0-9]+)/g, replacement: 'kc-heading-$1' },
    { regex: /elementor-widget-([a-zA-Z0-9]+)/g, replacement: 'kc-widget-$1' },
    { regex: /e-con-([a-zA-Z0-9]+)/g, replacement: 'kc-flex-$1' }
];

let totalFiles = 0;
let totalModified = 0;
let totalReplacements = 0;

/**
 * Get all files in a directory recursively
 */
function getAllFiles(dir, extensions = []) {
    const files = [];

    function scan(currentPath) {
        const items = fs.readdirSync(currentPath);

        for (const item of items) {
            const fullPath = path.join(currentPath, item);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                scan(fullPath);
            } else if (extensions.length === 0 || extensions.some(ext => item.endsWith(ext))) {
                files.push(fullPath);
            }
        }
    }

    scan(dir);
    return files;
}

/**
 * Process a single file and rename classes
 */
function processFile(filePath, fileType) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        let fileReplacements = 0;

        if (fileType === 'CSS') {
            // In CSS files: Aggressively rename ALL elementor/wordpress classes

            // Replace standalone .elementor with .kc (must come before .elementor-* to avoid conflicts)
            content = content.replace(/\.elementor(?![a-zA-Z0-9_-])/g, () => {
                fileReplacements++;
                return '.kc';
            });

            // Replace .elementor-* with .kc-*
            content = content.replace(/\.elementor-([a-zA-Z0-9_-]+)/g, (match, p1) => {
                fileReplacements++;
                return `.kc-${p1}`;
            });

            // Replace .e-con* with .kc-flex-*
            content = content.replace(/\.e-con-([a-zA-Z0-9_-]+)/g, (match, p1) => {
                fileReplacements++;
                return `.kc-flex-${p1}`;
            });
            content = content.replace(/\.e-con\b/g, () => {
                fileReplacements++;
                return '.kc-flex-container';
            });

            // Replace .e-flex with .kc-flex
            content = content.replace(/\.e-flex\b/g, () => {
                fileReplacements++;
                return '.kc-flex';
            });

            // Replace #elementor-* with #kc-*
            content = content.replace(/#elementor-([a-zA-Z0-9_-]+)/g, (match, p1) => {
                fileReplacements++;
                return `#kc-${p1}`;
            });

            // Replace #e-con-* with #kc-flex-*
            content = content.replace(/#e-con-([a-zA-Z0-9_-]+)/g, (match, p1) => {
                fileReplacements++;
                return `#kc-flex-${p1}`;
            });

            // Replace wp- classes
            content = content.replace(/\.wp-([a-zA-Z0-9_-]+)/g, (match, p1) => {
                fileReplacements++;
                return `.kc-wp-${p1}`;
            });

            // Replace attribute selectors [class*="elementor-"] and [class*=elementor-]
            content = content.replace(/\[class\*=["']?elementor-/g, () => {
                fileReplacements++;
                return '[class*="kc-';
            });

        } else {
            // In JS files: Aggressively rename ALL elementor/wordpress classes in HTML strings
            // Use a loop to ensure we catch ALL occurrences, even multiple in the same attribute

            let previousContent;
            let iterations = 0;
            do {
                previousContent = content;

                // Replace class="...elementor-*..." with class="...kc-*..."
                content = content.replace(/(class=["'][^"']*)elementor-([a-zA-Z0-9_-]+)/g, (match, prefix, suffix) => {
                    fileReplacements++;
                    return `${prefix}kc-${suffix}`;
                });

                // Replace class="...e-con-*..." with class="...kc-flex-*..."
                content = content.replace(/(class=["'][^"']*)e-con-([a-zA-Z0-9_-]+)/g, (match, prefix, suffix) => {
                    fileReplacements++;
                    return `${prefix}kc-flex-${suffix}`;
                });

                // Replace class="...e-con ..." with class="...kc-flex-container ..."
                content = content.replace(/(class=["'][^"']*)e-con(\s|["'])/g, (match, prefix, after) => {
                    fileReplacements++;
                    return `${prefix}kc-flex-container${after}`;
                });

                // Replace standalone "elementor " class
                content = content.replace(/(class=["'][^"']*)elementor(\s|["'])/g, (match, prefix, after) => {
                    fileReplacements++;
                    return `${prefix}kc${after}`;
                });

                // Replace class="...e-parent..." with class="...kc-parent..."
                content = content.replace(/(class=["'][^"']*)e-parent/g, (match, prefix) => {
                    fileReplacements++;
                    return `${prefix}kc-parent`;
                });

                // Replace class="...e-lazyloaded..." with class="...kc-lazyloaded..."
                content = content.replace(/(class=["'][^"']*)e-lazyloaded/g, (match, prefix) => {
                    fileReplacements++;
                    return `${prefix}kc-lazyloaded`;
                });

                // Replace class="...e--*..." (double dash patterns)
                content = content.replace(/(class=["'][^"']*)e--([a-zA-Z0-9_-]+)/g, (match, prefix, suffix) => {
                    fileReplacements++;
                    return `${prefix}kc--${suffix}`;
                });

                // Replace class="...e-flex..." with class="...kc-flex..."
                content = content.replace(/(class=["'][^"']*)e-flex(\s|["'])/g, (match, prefix, after) => {
                    fileReplacements++;
                    return `${prefix}kc-flex${after}`;
                });

                // Replace Font Awesome icon classes: e-font-icon-svg, e-fas-*, e-far-*, e-fab-*
                content = content.replace(/(class=["'][^"']*)e-font-icon-svg/g, (match, prefix) => {
                    fileReplacements++;
                    return `${prefix}kc-font-icon-svg`;
                });
                content = content.replace(/(class=["'][^"']*)e-fa([srbl])-([a-zA-Z0-9_-]+)/g, (match, prefix, type, icon) => {
                    fileReplacements++;
                    return `${prefix}kc-fa${type}-${icon}`;
                });

                // Replace className="...elementor-*..." (JSX)
                content = content.replace(/(className=["'][^"']*)elementor-([a-zA-Z0-9_-]+)/g, (match, prefix, suffix) => {
                    fileReplacements++;
                    return `${prefix}kc-${suffix}`;
                });

                // Replace className="...e-con*..." (JSX)
                content = content.replace(/(className=["'][^"']*)e-con-([a-zA-Z0-9_-]+)/g, (match, prefix, suffix) => {
                    fileReplacements++;
                    return `${prefix}kc-flex-${suffix}`;
                });
                content = content.replace(/(className=["'][^"']*)e-con(\s|["'])/g, (match, prefix, after) => {
                    fileReplacements++;
                    return `${prefix}kc-flex-container${after}`;
                });

                iterations++;
            } while (content !== previousContent && iterations < 50); // Safety limit

            // Replace id="elementor-*" and id="e-con-*"
            content = content.replace(/(id=["'])elementor-([a-zA-Z0-9_-]+)(["'])/g, (match, prefix, id, suffix) => {
                fileReplacements++;
                return `${prefix}kc-${id}${suffix}`;
            });
            content = content.replace(/(id=["'])e-con-([a-zA-Z0-9_-]+)(["'])/g, (match, prefix, id, suffix) => {
                fileReplacements++;
                return `${prefix}kc-flex-${id}${suffix}`;
            });

            // Replace aria-controls and aria-labelspelledby with elementor-*
            content = content.replace(/(aria-controls=["'])elementor-([a-zA-Z0-9_-]+)(["'])/g, (match, prefix, id, suffix) => {
                fileReplacements++;
                return `${prefix}kc-${id}${suffix}`;
            });
            content = content.replace(/(aria-labelledby=["'])elementor-([a-zA-Z0-9_-]+)(["'])/g, (match, prefix, id, suffix) => {
                fileReplacements++;
                return `${prefix}kc-${id}${suffix}`;
            });

            // Replace HTML-entity encoded classes in data-settings (e.g., \\&quot;e-font-icon-svg e-fas-...\\&quot;)
            content = content.replace(/(\\&quot;[^"]*?)e-font-icon-svg/g, (match, prefix) => {
                fileReplacements++;
                return `${prefix}kc-font-icon-svg`;
            });
            content = content.replace(/(\\&quot;[^"]*?)e-fa([srbl])-([a-zA-Z0-9_-]+)/g, (match, prefix, type, icon) => {
                fileReplacements++;
                return `${prefix}kc-fa${type}-${icon}`;
            });
            content = content.replace(/(\\&quot;[^"]*?)e-eicon-([a-zA-Z0-9_-]+)/g, (match, prefix, icon) => {
                fileReplacements++;
                return `${prefix}kc-eicon-${icon}`;
            });

            // Replace data-elementor-* attributes
            content = content.replace(/data-elementor-/g, () => {
                fileReplacements++;
                return 'data-kc-';
            });

            // Replace .wp- classes
            content = content.replace(/(class=["'][^"']*)wp-([a-zA-Z0-9_-]+)/g, (match, prefix, suffix) => {
                fileReplacements++;
                return `${prefix}kc-wp-${suffix}`;
            });

            // Replace hello-elementor theme classes
            content = content.replace(/(class=["'][^"']*)hello-elementor(-[a-z]+)?/g, (match, prefix, suffix) => {
                fileReplacements++;
                return `${prefix}kc-theme${suffix || ''}`;
            });

            // Replace elementor-default, elementor-kit-, elementor-page- classes
            content = content.replace(/(class=["'][^"']*)elementor-(default|kit|page)(-[0-9]+)?/g, (match, prefix, type, id) => {
                fileReplacements++;
                return `${prefix}kc-${type}${id || ''}`;
            });

            // Replace e-- UA classes (e--ua-blink, e--ua-chrome, e--ua-webkit)
            content = content.replace(/(class=["'][^"']*)e--ua-([a-z]+)/g, (match, prefix, browser) => {
                fileReplacements++;
                return `${prefix}kc--ua-${browser}`;
            });

            // Replace hello-elementor and elementor in JSON paths (e.g., /hello-elementor/*)
            content = content.replace(/hello-elementor/g, () => {
                fileReplacements++;
                return 'kc-theme';
            });
            content = content.replace(/([\/\\]themes[\/\\]|[\/\\])elementor([\/\\])/g, (match, prefix, suffix) => {
                fileReplacements++;
                return `${prefix}kc${suffix}`;
            });

            // Replace data attribute values: elementor_library → kc_library
            content = content.replace(/="elementor_library"/g, () => {
                fileReplacements++;
                return '="kc_library"';
            });
        }

        // Only write if content changed
        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            totalReplacements += fileReplacements;
            console.log(`✅ ${path.basename(filePath)} - ${fileReplacements} replacements`);
            return true;
        } else {
            console.log(`⏭️  ${path.basename(filePath)} - no changes needed`);
            return false;
        }
    } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
        return false;
    }
}

/**
 * Escape special regex characters
 */
function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Main execution
 */
console.log('\n======================================================================');
console.log('🔄 COMPLETE ELEMENTOR/WORDPRESS CLASS RENAME');
console.log('======================================================================\n');

// Process JS/JSX files
console.log('📁 Processing JavaScript Components...\n');
const jsFiles = getAllFiles(COMPONENTS_DIR, ['.js', '.jsx']);
jsFiles.forEach(file => {
    totalFiles++;
    if (processFile(file, 'JS')) {
        totalModified++;
    }
});

// Process CSS files in src/components/imported
console.log('\n📁 Processing CSS in src/components/imported...\n');
const importedCssFiles = getAllFiles(IMPORTED_CSS_DIR, ['.css']);
importedCssFiles.forEach(file => {
    totalFiles++;
    if (processFile(file, 'CSS')) {
        totalModified++;
    }
});

// Process CSS files in public/imported/css
console.log('\n📁 Processing CSS in public/imported/css...\n');
const publicCssFiles = getAllFiles(PUBLIC_CSS_DIR, ['.css']);
publicCssFiles.forEach(file => {
    totalFiles++;
    if (processFile(file, 'CSS')) {
        totalModified++;
    }
});

console.log('\n======================================================================');
console.log(`✅ Completed: ${totalModified}/${totalFiles} files modified`);
console.log(`📊 Total replacements: ${totalReplacements}`);
console.log('======================================================================\n');

console.log('Class mappings applied:');
console.log(`  - ${Object.keys(CLASS_MAPPINGS).length} static class mappings`);
console.log(`  - ${ID_PATTERNS.length} dynamic ID patterns\n`);
