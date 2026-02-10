import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setActiveDropdown(null);
    };

    const toggleDropdown = (index) => {
        if (activeDropdown === index) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(index);
        }
    };

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
        setActiveDropdown(null);
    }, [location]);

    return (
        <header className="kc-react-header">
            <div className="kc-react-header-container">
                <div className="kc-react-logo">
                    <Link to="/">
                        <img src="/imported/images/logogrm-1.png" alt="KryptoCasinos Logo" className="kc-react-logo-img" />
                    </Link>
                </div>

                <button className={`kc-react-menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation">
                    <span className="kc-react-bar"></span>
                    <span className="kc-react-bar"></span>
                    <span className="kc-react-bar"></span>
                </button>

                <nav className={`kc-react-nav ${isMenuOpen ? 'open' : ''}`}>
                    <ul className="kc-react-menu">
                        <li className={`kc-react-menu-item ${activeDropdown === 1 ? 'active' : ''}`}>
                            <div className="kc-react-menu-link-wrapper">
                                <Link to="/krypto-casino-boni" className="kc-react-menu-link" onClick={() => toggleDropdown(1)}>
                                    Casino Boni <span className="kc-react-arrow">▼</span>
                                </Link>
                            </div>
                            <ul className={`kc-react-submenu ${activeDropdown === 1 ? 'open' : ''}`}>
                                <li className="kc-react-submenu-item">
                                    <Link to="/krypto-casino-boni-ohne-einzahlung">Boni ohne Einzahlung</Link>
                                </li>
                                <li className="kc-react-submenu-item">
                                    <Link to="/freispiele-ohne-einzahlung">Freispiele</Link>
                                </li>
                                <li className="kc-react-submenu-item">
                                    <Link to="/bonus-ohne-umsatzbedingungen">Bonus ohne Umsatzbedingungen</Link>
                                </li>
                            </ul>
                        </li>

                        <li className="kc-react-menu-item">
                            <Link to="/bitcoin-casinos" className="kc-react-menu-link">Bitcoin Casinos</Link>
                        </li>

                        <li className={`kc-react-menu-item ${activeDropdown === 2 ? 'active' : ''}`}>
                            <div className="kc-react-menu-link-wrapper">
                                <Link to="/krypto-casino-spiele" className="kc-react-menu-link" onClick={() => toggleDropdown(2)}>
                                    Casino-Spiele <span className="kc-react-arrow">▼</span>
                                </Link>
                            </div>
                            <ul className={`kc-react-submenu ${activeDropdown === 2 ? 'open' : ''}`}>
                                <li className="kc-react-submenu-item"><Link to="/krypto-slots">Krypto-Slots</Link></li>
                                <li className="kc-react-submenu-item"><Link to="/plinko">Plinko</Link></li>
                                <li className="kc-react-submenu-item"><Link to="/crash-spiele">Crash-Spiele</Link></li>
                                <li className="kc-react-submenu-item"><Link to="/krypto-poker">Krypto Poker</Link></li>
                                <li className="kc-react-submenu-item"><Link to="/krypto-sportwetten">Krypto Sportwetten</Link></li>
                            </ul>
                        </li>

                        <li className={`kc-react-menu-item ${activeDropdown === 3 ? 'active' : ''}`}>
                            <div className="kc-react-menu-link-wrapper">
                                <Link to="/tests" className="kc-react-menu-link" onClick={() => toggleDropdown(3)}>
                                    Casino Tests <span className="kc-react-arrow">▼</span>
                                </Link>
                            </div>
                            <ul className={`kc-react-submenu ${activeDropdown === 3 ? 'open' : ''}`}>
                                <li className="kc-react-submenu-item"><Link to="/tests/flush-casino">Flush Casino</Link></li>
                                <li className="kc-react-submenu-item"><Link to="/tests/cryptoleo-casino">CryptoLeo</Link></li>
                                <li className="kc-react-submenu-item"><Link to="/tests/bc-game">BC.Game</Link></li>
                                <li className="kc-react-submenu-item"><Link to="/tests/cloudbet">Cloudbet</Link></li>
                            </ul>
                        </li>

                        <li className={`kc-react-menu-item ${activeDropdown === 4 ? 'active' : ''}`}>
                            <div className="kc-react-menu-link-wrapper">
                                <Link to="/krypto-wallets" className="kc-react-menu-link" onClick={() => toggleDropdown(4)}>
                                    Krypto-Wallets <span className="kc-react-arrow">▼</span>
                                </Link>
                            </div>
                            <ul className={`kc-react-submenu ${activeDropdown === 4 ? 'open' : ''}`}>
                                <li className="kc-react-submenu-item"><Link to="/krypto-wallets/metamask">MetaMask</Link></li>
                                <li className="kc-react-submenu-item"><Link to="/krypto-wallets/trust-wallet">Trust Wallet</Link></li>
                            </ul>
                        </li>

                        <li className="kc-react-menu-item">
                            <Link to="/kryptowissen" className="kc-react-menu-link">Kryptowissen</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
