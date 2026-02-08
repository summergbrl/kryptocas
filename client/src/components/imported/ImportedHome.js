import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import '../ContentPages.css'; // Ensure we use the premium card styles

const ImportedHome = () => {
    useEffect(() => {
        document.body.classList.add('imported-page-home');
        return () => {
            document.body.classList.remove('imported-page-home');
        };
    }, []);

    const [expandedIds, setExpandedIds] = useState([]);

    const toggleExpand = (id) => {
        setExpandedIds(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

    const casinos = [
        {
            id: 1,
            name: "BC.Game",
            logo: "/imported/images/bc-game-logo_a9ad7ef9.webp",
            rating: "98/100",
            stars: 5,
            payout: "Flexibel",
            bonus: "Bis zu 100% Bonus + 400 Freispiele",
            link: "/go/bc-game",
            reviewLink: "/tests/bc-game/",
            description: "BC.Game Casino ist eine führende Plattform im Krypto Casino Bereich und bietet eine große Sammlung von Spielen und ein spannendes Spielerlebnis. Neue Spieler können einen großzügigen Einzahlungsbonus von bis zu 2.000 €/USDT sowie verschiedene andere Aktionen genießen.",
            crypto: "Bitcoin (BTC), Ethereum (ETH), XRP und mehr. Spieler können problemlos Wallets wie MetaMask und Trust Wallet für sichere Transaktionen verwenden.",
            license: "BC.Game ist vom Gaming Control Board (GCB) lizenziert und reguliert."
        },
        {
            id: 2,
            name: "BJ Casino",
            logo: "/imported/images/logo_48355015.png",
            rating: "92/100",
            stars: 5,
            payout: "Keine Limits",
            bonus: "$3 Free Play – Bonuscode: KCFREE3",
            link: "/go/bc-game", // Preserving original link despite potential copy-paste error in source
            reviewLink: "/tests/bc-game/",
            description: "BJ Casino bietet ein unkompliziertes und benutzerfreundliches Krypto-Spielerlebnis mit einer breiten Auswahl an Slots, Tischspielen, Live Casino und Crash-Games. Neue Spieler profitieren von einem $3 Free Play ohne Einzahlung sowie einem 225% Bonus bis zu 3.000 USDT beim ersten Deposit.",
            crypto: "BTC, ETH, USDT, LTC, DOGE und über 130 weitere Kryptowährungen.",
            license: "BJcasino.com ist lizenziert und reguliert durch die Glücksspielbehörde in Curaçao."
        },
        {
            id: 3,
            name: "VIP Casino",
            logo: "/imported/images/vip-logo_112db085.webp",
            rating: "97/100",
            stars: 5,
            payout: "Flexibel",
            bonus: "Bis zu $3.477 Bonus + 77 Freispiele",
            link: "/go/vipcasino",
            reviewLink: "/tests/vip-casino/",
            description: "VIP Casino wurde 2025 als ein wahres Krypto Casino gegründet, wo es die beste iGaming Action gibt. Deswegen gibt es jetzt Tausende von Slots, 150+ Live Dealer Spiele und auch alle die besten Kryptowährungen.",
            crypto: "Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Dogecoin (DOGE), Bitcoin Cash (BCH), Tether (USDT), Solana (SOL), Binance Coin (BNB), Ripple (XLR), Shiba Inu (SHIB)",
            license: "VIP Casino besitzt eine Curacao Lizenz"
        },
        {
            id: 4,
            name: "Flush Casino",
            logo: "/imported/images/flush-casino-logo_7016a85a.webp",
            rating: "97/100",
            stars: 5,
            payout: "2.500 €/USDT",
            bonus: "150% Willkommensbonus bis zu 1.000 €/USDT",
            note: "Exklusives Angebot für kryptocasinos.net Nutzer!",
            link: "/go/flush",
            reviewLink: "/tests/flush-casino/",
            description: "Erleben Sie Flush Casino, ein führendes Krypto Casino mit über 3.500 Spielen, darunter Slots, Megaways und Live Dealer Spiele. Ein- und Auszahlungen sind schnell und gebührenfrei in neun Kryptowährungen möglich.",
            crypto: "BTC, ETH, LTC, USDT, DOGE, BNB, MATIC, USDC, DAI",
            license: "Flush Casino besitzt eine Lizenz Curaçao"
        },
        {
            id: 5,
            name: "WSM Casino",
            logo: "/imported/images/wsm-casino-logo_75bae48a.webp",
            rating: "97/100",
            stars: 5,
            payout: "9500 USDT pro Tag",
            bonus: "200 % bis zu 25.000 €/USDT + 10 Gratiswetten + 50 Gratisspins",
            link: "/go/wsm",
            reviewLink: "/tests/wsm-casino/",
            description: "WSM Casino bietet ein aufregendes Krypto Gaming Erlebnis mit über 5.000 Spielen, darunter Slots, Tischspiele, Live Dealer Optionen und hunderte von Crash Spielen.",
            crypto: "BTC, ETH, DOGE und mehr.",
            license: "WSM Casino ist unter Curaçao eGaming lizenziert."
        },
        {
            id: 6,
            name: "Jackbit Casino",
            logo: "/imported/images/290a4ce8e71fdd7a_c7c6eff5.svg",
            rating: "96/100",
            stars: 5,
            payout: "Keine Limits",
            bonus: "3+1 Freebet-Bonus oder 100% bis zu 100 €/USDT",
            link: "/go/jackbit",
            reviewLink: "/tests/jackbit-casino/",
            description: "Beginnen Sie Ihre Krypto-Casino-Reise mit Jackbit Casino. Eine Marke, die ihre Aufgabe bis zum Maximum erfüllt hat! Sie bietet ein reines Krypto-Casino-Umfeld für Spieler, die in der vielversprechendsten und starken Community spielen möchten.",
            crypto: "BTC, LTC, DOGE, XMR, USDT, ETH, USDC, BCH, BNB, TRX, SOL, BUSD, MATIC, SHIB, ADA, LINK",
            license: "Jackbit Casino hält eine Curacao-Lizenz"
        },
        {
            id: 7,
            name: "Mega Dice",
            logo: "/imported/images/mega-dice-logo_e66571ca.webp",
            rating: "94/100",
            stars: 5,
            payout: "Keine Limits",
            bonus: "200 % Bonus bis zu 1 BTC + 50 Freispiele + Sportwetten Gratiswette",
            link: "/go/megadice",
            reviewLink: "/tests/mega-dice-casino/",
            description: "Megadice Casino bietet ein außergewöhnliches Krypto Gaming Erlebnis mit exklusiven hausinternen Spielen wie Crash und Dice. Spieler können ein großzügiges Willkommenspaket von 225% bis zu 5.000€/USDT genießen.",
            crypto: "BTC, ETH, LTC, BCH, DOGE, USDT, BUSD, ADA, TRX",
            license: "Megadice Casino ist unter Curaçao eGaming lizenziert."
        },
        {
            id: 8,
            name: "MetaWin",
            logo: "/imported/images/metawin-logo-1_aad6e3cf.webp",
            rating: "94/100",
            stars: 5,
            payout: "9.500 USDT pro Tag",
            bonus: "Krypto | Casino web3 & gewinnspiel – gewinnen sie einen tesla cybertruck",
            link: "/go/metawin",
            reviewLink: "/tests/metawin-casino/",
            description: "MetaWin Casino bietet ein einzigartiges Krypto Gaming Erlebnis, das sich auf blockchain-basierte Wettbewerbe konzentriert. Spieler erhalten 1 kostenloses Wettbewerbsticket beim Verbinden ihres Krypto Wallets.",
            crypto: "ETH, BTC, SOL, USDT, USDC, DAI, MATIC und mehr.",
            license: "Metawin.com ist von der Regierung von Curaçao lizenziert und reguliert."
        },
        {
            id: 9,
            name: "Kripty Casino",
            logo: "/imported/images/krypty-logo-1_82368dbd.webp",
            rating: "94/100",
            stars: 5,
            payout: "Keine Limits",
            bonus: "Erhalten Sie bis zu 2.250 €/USDT Bonus mit den ersten 4 Einzahlungen",
            link: "/go/krypty",
            reviewLink: "/tests/kripty-casino/",
            description: "Kripty Casino bietet ein umfassendes Krypto Gaming Erlebnis mit hausinternen Spielen wie Crash und Dice sowie einer Vielzahl anderer Casinospiele und einem Sportwettenbereich.",
            crypto: "BTC, ETH, LTC, BCH, USDT",
            license: "Kripty Casino ist unter Curaçao eGaming lizenziert."
        },
        {
            id: 10,
            name: "Cloudbet",
            logo: "/imported/images/cloudbet-logo-1_b270562f.webp",
            rating: "93/100",
            stars: 5,
            payout: "Keine Limits",
            bonus: "100 % Einzahlungsbonus in 20+ Kryptowährungen",
            link: "/go/cloudbet",
            reviewLink: "/tests/cloudbet/",
            description: "Cloudbet Casino bietet ein erstklassiges Krypto Gaming Erlebnis mit einer großen Auswahl an Casinospielen, darunter Slots, Tischspiele und Live Dealer Optionen.",
            crypto: "BTC, ETH, BCH, LTC, USDT, PAXG, DAI, LINK",
            license: "Cloudbet Casino operiert unter einer Lizenz von Curaçao eGaming."
        },
        {
            id: 11,
            name: "7Bit Casino",
            logo: "/imported/images/7bit-logo_242f3b6f.webp",
            rating: "92/100",
            stars: 5,
            payout: "Keine Limits",
            bonus: "Willkommensbonus 5BTC + 100 FS ₿₿₿",
            link: "/go/7bit",
            reviewLink: "/tests/7bit/",
            description: "7Bit Casino überzeugt mit einer stilvollen Benutzeroberfläche und einer beeindruckenden Spielauswahl, die sich perfekt für Krypto-Spieler eignet.",
            crypto: "BTC, BCH, DOGE, LTC, ETH",
            license: "7Bit Casino besitzt eine Curaçao-Lizenz."
        },
        {
            id: 12,
            name: "Bitkingz",
            logo: "/imported/images/bitkingz-logo-2_83ad7496.webp",
            rating: "92/100",
            stars: 5,
            payout: "Keine Limits",
            bonus: "1.5 BTC Bonus + 150 FS (Code: BKBTC)",
            link: "/go/bitkingz",
            reviewLink: "/tests/bitkingz-casino/",
            description: "Erhalten Sie einen 1.5 BTC Bonus + 150 Freispiele mit dem Code BKBTC.",
            crypto: "BTC, ETH, LTC, DOGE, USDT",
            license: "Bitkingz ist lizenziert und reguliert."
        }
    ];

    return (
        <div className="imported-page-wrapper" style={{ background: '#0f1115', minHeight: '100vh', width: '100%' }}>
            <Helmet>
                <title>Deutsche Krypto Casinos 2026 – Sicher und zuverlässig</title>
                <meta name="description" content="Die besten Krypto Casinos für 2026 im Vergleich. Sichern Sie sich exklusive Boni, Freispiele und spielen Sie sicher mit Bitcoin & Co." />
            </Helmet>

            {/* Hero Section - Full Width Dark */}
            <div style={{
                background: 'linear-gradient(135deg, #0f1115 0%, #1a1d24 100%)',
                padding: '80px 20px 60px',
                position: 'relative',
                overflow: 'hidden',
                width: '100%'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '-50px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    opacity: 0.05,
                    zIndex: 0,
                    pointerEvents: 'none'
                }}>
                    <img src="/imported/images/flare1-1_fc4fb261.webp" alt="" width="800" height="800" />
                </div>

                <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <h1 style={{
                        fontSize: 'clamp(28px, 5vw, 48px)',
                        marginBottom: '20px',
                        color: '#ffffff',
                        fontWeight: '700',
                        lineHeight: '1.2'
                    }}>
                        Die besten Krypto Casinos 2026: Vergleich & Test
                    </h1>

                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p style={{
                            fontSize: 'clamp(14px, 2vw, 18px)',
                            lineHeight: '1.7',
                            color: '#a0aec0',
                            marginBottom: '0'
                        }}>
                            Die besten Krypto Casinos für 2026? Krypto Casinos ermöglichen es Ihnen, schnell, sicher und anonym einzuzahlen,
                            um Ihre Lieblingsspiele zu spielen. Wir haben diese Plattformen gründlich getestet – Einzahlungen, Auszahlungen,
                            Bonusbedingungen, den gesamten Prozess. Das ist keine recycelte Liste. Unser Team hat jedes Krypto Casino analysiert,
                            Bitcoin-Auszahlungsgeschwindigkeiten überprüft, damit wir es deutschen Spielern leichter machen, die besten Angebote zu finden.
                        </p>
                    </div>

                    <div style={{ marginTop: '30px' }}>
                        <a href="#casinos-list" className="elementor-button" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            background: 'linear-gradient(135deg, #f7931a 0%, #ff6b35 100%)',
                            color: '#fff',
                            padding: '12px 30px',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            fontWeight: '600',
                            transition: 'all 0.3s ease'
                        }}>
                            <span>Entdecken Sie Casinos</span>
                            <svg aria-hidden="true" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg" height="14" fill="currentColor">
                                <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Casinos List Section - Full Width */}
            <div id="casinos-list" style={{
                background: '#0f1115',
                padding: '60px 20px',
                width: '100%'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{
                        textAlign: 'center',
                        marginBottom: '40px',
                        fontSize: 'clamp(24px, 4vw, 36px)',
                        color: '#ffffff',
                        fontWeight: '700'
                    }}>
                        <b>Beste Deutsche Krypto Casinos</b> - Februar 2026
                    </h2>

                    <div className="casinos-list" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '25px'
                    }}>
                        {casinos.map((casino, index) => (
                            <div key={casino.id} style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease'
                            }}>
                                {/* Main Card Content */}
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    padding: '20px',
                                    gap: '20px',
                                    alignItems: 'center'
                                }}>

                                    {/* Logo & Rank */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flex: '1 1 200px' }}>
                                        <div style={{
                                            width: '50px',
                                            height: '50px',
                                            fontSize: '20px',
                                            background: '#f7931a',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontWeight: '700',
                                            color: '#fff',
                                            flexShrink: 0
                                        }}>
                                            {index + 1}
                                        </div>
                                        <div style={{ background: '#1a202c', padding: '10px', borderRadius: '8px', minWidth: '120px', textAlign: 'center' }}>
                                            <img src={casino.logo} alt={`${casino.name} Logo`} style={{ maxHeight: '50px', maxWidth: '100%', objectFit: 'contain' }} />
                                        </div>
                                    </div>

                                    {/* Stats: Payout & Rating */}
                                    <div style={{ flex: '1 1 150px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px' }}>
                                            <span style={{ color: '#a0aec0' }}>Max. Auszahlung</span>
                                            <span style={{ fontWeight: 'bold', color: '#fff' }}>{casino.payout}</span>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px' }}>
                                            <span style={{ color: '#a0aec0' }}>Bewertung</span>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                                <span style={{ fontWeight: 'bold', color: '#fff' }}>{casino.rating}</span>
                                                <span style={{ color: '#f7931a' }}>★★★★★</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bonus Info */}
                                    <div style={{ flex: '1 1 250px', textAlign: 'center', borderLeft: '1px solid rgba(255,255,255,0.1)', borderRight: '1px solid rgba(255,255,255,0.1)', padding: '0 20px' }}>
                                        <p style={{ color: '#f7931a', fontWeight: '800', textTransform: 'uppercase', marginBottom: '5px', fontSize: '16px' }}>
                                            {casino.bonus}
                                        </p>
                                        {casino.note && <p style={{ fontSize: '12px', color: '#a0aec0', marginBottom: '0' }}>{casino.note}</p>}
                                    </div>

                                    {/* Action Button */}
                                    <div style={{ flex: '0 0 auto', width: '100%', maxWidth: '200px', margin: '0 auto' }}>
                                        <a href={casino.link} target="_blank" rel="nofollow sponsored noreferrer" style={{
                                            display: 'block',
                                            width: '100%',
                                            textAlign: 'center',
                                            background: 'linear-gradient(135deg, #f7931a 0%, #ff6b35 100%)',
                                            color: '#fff',
                                            padding: '12px 24px',
                                            borderRadius: '8px',
                                            textDecoration: 'none',
                                            fontWeight: '600',
                                            transition: 'all 0.3s ease'
                                        }}>
                                            Spiel Jetzt
                                        </a>
                                    </div>
                                </div>

                                {/* Toggle Section */}
                                <div style={{ background: 'rgba(0,0,0,0.2)', padding: '10px 20px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                    <button
                                        onClick={() => toggleExpand(casino.id)}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            color: '#a0aec0',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '5px',
                                            fontSize: '14px',
                                            padding: '0',
                                            fontFamily: 'inherit'
                                        }}
                                    >
                                        {expandedIds.includes(casino.id) ? 'Weniger Info' : 'Mehr Info'}
                                        <svg
                                            viewBox="0 0 24 24"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            style={{ transform: expandedIds.includes(casino.id) ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
                                        >
                                            <path d="M7 10l5 5 5-5z" />
                                        </svg>
                                    </button>

                                    {expandedIds.includes(casino.id) && (
                                        <div style={{ marginTop: '15px', paddingBottom: '15px', color: '#a0aec0', fontSize: '14px', lineHeight: '1.6' }}>
                                            <p style={{ marginBottom: '15px' }}>{casino.description}</p>

                                            {casino.reviewLink && (
                                                <p style={{ marginBottom: '15px' }}>
                                                    <a href={casino.reviewLink} style={{ color: '#f7931a', textDecoration: 'none', fontWeight: 'bold' }}>
                                                        {casino.name} Erfahrungen & Test
                                                    </a>
                                                </p>
                                            )}

                                            <div style={{ marginBottom: '15px' }}>
                                                <strong style={{ color: '#fff' }}>Krypto Akzeptiert:</strong><br />
                                                {casino.crypto}
                                            </div>

                                            <div>
                                                <strong style={{ color: '#fff' }}>Lizenz:</strong><br />
                                                {casino.license}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImportedHome;
