import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const ImportedHomePage = () => {
    const [bodyContent, setBodyContent] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.body.classList.add('imported-page-home');

        fetch('/imported/homepage_body_clean.html')
            .then(res => res.text())
            .then(html => {
                setBodyContent(html);
                setIsLoading(false);
            })
            .catch(err => {
                console.error('Error loading homepage body:', err);
                setIsLoading(false);
            });

        return () => {
            document.body.classList.remove('imported-page-home');
        };
    }, []);

    return (
        <div className="imported-page-wrapper">
            <Helmet>
                <title>Deutsche Krypto Casinos 2026 – Sicher und zuverlässig</title>
                <meta name="description" content="Die besten Krypto Casinos für 2026 im Vergleich. Sicher, anonym und mit schnellen Auszahlungen." />

                {/* Core CSS files with hash suffixes */}
                <link rel="stylesheet" href="/imported/css/autoptimize_single_33a41294cf578c7c4892c2f12b857865_b1dd81d2.css" />
                <link rel="stylesheet" href="/imported/css/autoptimize_single_383b597180e82cc742bebe0a4712428e_683638d3.css" />
                <link rel="stylesheet" href="/imported/css/autoptimize_single_af4b9638d69957103dc5ea259563873e_a68805c0.css" />
                <link rel="stylesheet" href="/imported/css/autoptimize_single_a480d2bf8c523da1c15b272e519f33f2_a6f39af0.css" />
                <link rel="stylesheet" href="/imported/css/autoptimize_single_86dbb47955bb9db9c74abc72efb0c6f6_16f48f36.css" />
                <link rel="stylesheet" href="/imported/css/frontend_min_fb10fa3b.css" />
                <link rel="stylesheet" href="/imported/css/autoptimize_single_8b43412bbc0fe4684ca74c9c53bc67ab_d1319528.css" />

                {/* Widget CSS files */}
                <link rel="stylesheet" href="/imported/css/widget-image_min_5d6b94ce.css" />
                <link rel="stylesheet" href="/imported/css/widget-nav-menu_min_69902e7e.css" />
                <link rel="stylesheet" href="/imported/css/sticky_min_c30de0b6.css" />
                <link rel="stylesheet" href="/imported/css/widget-breadcrumbs_min_21e5056a.css" />
                <link rel="stylesheet" href="/imported/css/widget-heading_min_d8691c77.css" />
                <link rel="stylesheet" href="/imported/css/widget-icon-list_min_37a0ed71.css" />
                <link rel="stylesheet" href="/imported/css/widget-toggle_min_25f55cfe.css" />
                <link rel="stylesheet" href="/imported/css/widget-divider_min_2daf90a6.css" />
                <link rel="stylesheet" href="/imported/css/widget-icon-box_min_76958a70.css" />

                {/* Additional autoptimize CSS */}
                <link rel="stylesheet" href="/imported/css/autoptimize_single_0fd38649782f765213e05ce1c73d3aef_67c168a6.css" />
                <link rel="stylesheet" href="/imported/css/autoptimize_single_05d77324edb5968a39651bf9fec66cc1_5a346277.css" />
                <link rel="stylesheet" href="/imported/css/autoptimize_single_d074c6a0a002668ee0c3a2efb70e06bf_043fb65f.css" />
                <link rel="stylesheet" href="/imported/css/autoptimize_single_adc13de7efb4c90a73470ae6f31fad14_e2d59a1b.css" />
                <link rel="stylesheet" href="/imported/css/autoptimize_single_2f5380ad95c961a237f478731b09f4a0_a736003b.css" />
                <link rel="stylesheet" href="/imported/css/autoptimize_single_811a009a19c611358f1029e993ddafd5_9d80e4d0.css" />
                <link rel="stylesheet" href="/imported/css/autoptimize_single_23fc55cbca2cd1d519215c2c22e6b3c0_7d00268a.css" />
                <link rel="stylesheet" href="/imported/css/autoptimize_single_6d9a7fdfe61802abb180ebff86c7291d_a62e460f.css" />
                <link rel="stylesheet" href="/imported/css/autoptimize_single_a0d6208f6c2156810313390f4297c78c_01a441cd.css" />
                <link rel="stylesheet" href="/imported/css/autoptimize_single_6bfd687bf90363458b1b0a89a4420b35_f9bb4267.css" />
                <link rel="stylesheet" href="/imported/css/autoptimize_single_8ed62d8798e17f63ee43620650f5d739_084a6d58.css" />
                <link rel="stylesheet" href="/imported/css/autoptimize_single_d54f310d5e6f9c74bebe17e85db93009_11f904e4.css" />
                <link rel="stylesheet" href="/imported/css/autoptimize_single_cba59da45e1cc7b581ab7dfb4c7814c3_c0c196f7.css" />
                <link rel="stylesheet" href="/imported/css/autoptimize_single_2f11c02dba0742b954ac4bf3d44ed4ab_6a8bd12d.css" />
                <link rel="stylesheet" href="/imported/css/autoptimize_single_a9ada15fd8bb46d1edd11affe4488468_2129cc2e.css" />
                <link rel="stylesheet" href="/imported/css/autoptimize_single_20e043c13abee5f33b1fc651645fec34_c7aec867.css" />
                <link rel="stylesheet" href="/imported/css/autoptimize_single_d2c33ff8bee8399b5171288867173a35_d79f20e2.css" />
                <link rel="stylesheet" href="/imported/css/autoptimize_single_3fbd30f1d2939b3d3374a426a31a71b0_8dd65f2f.css" />
                <link rel="stylesheet" href="/imported/css/autoptimize_single_cbfd28748fe28384c2c562576760e742_fb8e006c.css" />
                <link rel="stylesheet" href="/imported/css/autoptimize_single_8a2b3c676318fd8e1869ff921c862b36_57ae205a.css" />
                <link rel="stylesheet" href="/imported/css/autoptimize_single_88fea441c256accff3d6c79b00508319_73c305e2.css" />
                <link rel="stylesheet" href="/imported/css/autoptimize_single_22bbece8b3f29146de3cd73af8137cab_596a0074.css" />
                <link rel="stylesheet" href="/imported/css/autoptimize_single_b15dd8a7427524216cfc9aed1a265da6_9b10a041.css" />
                <link rel="stylesheet" href="/imported/css/autoptimize_single_13839d0e39f29967429b75aed73a5e68_de1eb7d0.css" />
                <link rel="stylesheet" href="/imported/css/autoptimize_single_648e6448a36700dcce89daf3c96b470b.css" />
            </Helmet>

            <style>{`
                /* Fix sticky header */
                .elementor-sticky {
                    position: relative !important;
                    width: 100% !important;
                }

                /* Fix fixed position elements */
                [style*="position: fixed"] {
                    position: relative !important;
                    width: 100% !important;
                }

                /* Fix container widths */
                .e-con-inner {
                    max-width: 1200px !important;
                    margin: 0 auto !important;
                    width: 100% !important;
                }

                /* Ensure content is visible */
                .imported-page-wrapper {
                    overflow-x: hidden;
                    width: 100%;
                    min-height: 100vh;
                }

                /* Fix lazyload images */
                img.lazyload, img.lazyloading {
                    opacity: 1 !important;
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .elementor-nav-menu--main {
                        display: none !important;
                    }
                    .e-con.e-flex {
                        flex-direction: column !important;
                    }
                    .elementor-heading-title {
                        font-size: 1.5rem !important;
                    }
                }
            `}</style>

            {isLoading ? (
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    background: '#0f172a',
                    color: 'white'
                }}>
                    Loading...
                </div>
            ) : (
                <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
            )}
        </div>
    );
};

export default ImportedHomePage;
