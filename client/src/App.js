import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './components/imported/ImportedStylesOverride.css';
import NewHomePage from './components/NewHomePage';
import NewPrivacyPolicyPage from './components/NewPrivacyPolicyPage';
import ResponsibleGamingPage from './components/ResponsibleGamingPage';
import EthereumCasinosPage from './components/EthereumCasinosPage';
import RippleCasinosPage from './components/RippleCasinosPage';
import CasinoTokensPage from './components/CasinoTokensPage';
import KryptoPokerPage from './components/KryptoPokerPage';
import NeueKryptoCasinosPage from './components/NeueKryptoCasinosPage';
import FreispieleOhneEinzahlungPage from './components/FreispieleOhneEinzahlungPage';
import BonusOhneUmsatzbedingungenPage from './components/BonusOhneUmsatzbedingungenPage';
import KryptowaehrungenKaufenPage from './components/KryptowaehrungenKaufenPage';
import VerantwortungsbewusstesSpielenPage from './components/VerantwortungsbewusstesSpielenPage';
import SofortauszahlungPage from './components/SofortauszahlungPage';
import OhneVerifizierungPage from './components/OhneVerifizierungPage';
import BlockchainCasinosPage from './components/BlockchainCasinosPage';
import UeberUnsPage from './components/UeberUnsPage';
import ImpressumPage from './components/ImpressumPage';
import KontaktPage from './components/KontaktPage';

// --- MIGRATED IMPORTS ---
import ImportedHome from './components/imported/ImportedHome';
import ImportedDatenschutzPage from './components/imported/ImportedDatenschutzPage';
import ImportedTestsMbitPage from './components/imported/ImportedTestsMbitPage';
import ImportedTestsArcanebetPage from './components/imported/ImportedTestsArcanebetPage';
import ImportedTestsJooPage from './components/imported/ImportedTestsJooPage';
import ImportedTests1xbitPage from './components/imported/ImportedTests1xbitPage';
import ImportedVerantwortungsbewusstesSpielenPage from './components/imported/ImportedVerantwortungsbewusstesSpielenPage';
import ImportedUeberUnsPage from './components/imported/ImportedUeberUnsPage';
import ImportedKaufenPage from './components/imported/ImportedKaufenPage';
import ImportedFreispieleOhneEinzahlungPage from './components/imported/ImportedFreispieleOhneEinzahlungPage';
import ImportedKryptoCasinoBoniKryptoCasinosBonusOhneUmsatzbedingungenPage from './components/imported/ImportedKryptoCasinoBoniKryptoCasinosBonusOhneUmsatzbedingungenPage';
import ImportedRippleCasinosPage from './components/imported/ImportedRippleCasinosPage';
import ImportedCasinoTokensPage from './components/imported/ImportedCasinoTokensPage';
import ImportedEthereumCasinosPage from './components/imported/ImportedEthereumCasinosPage';
import ImportedKryptoPokerPage from './components/imported/ImportedKryptoPokerPage';
import ImportedNeueKryptoCasinosPage from './components/imported/ImportedNeueKryptoCasinosPage';
import ImportedKryptoSlotsPage from './components/imported/ImportedKryptoSlotsPage';
import ImportedCrashSpielePage from './components/imported/ImportedCrashSpielePage';
import ImportedVergleichPage from './components/imported/ImportedVergleichPage';
import ImportedTestsJackbitCasinoPage from './components/imported/ImportedTestsJackbitCasinoPage';
import ImportedTestsCryptoleoCasinoPage from './components/imported/ImportedTestsCryptoleoCasinoPage';
import ImportedTests7bitPage from './components/imported/ImportedTests7bitPage';
import ImportedTestsTrueflipPage from './components/imported/ImportedTestsTrueflipPage';
import ImportedTestsKriptyCasinoPage from './components/imported/ImportedTestsKriptyCasinoPage';
import ImportedTestsLuckyBlockCasinoPage from './components/imported/ImportedTestsLuckyBlockCasinoPage';
import ImportedTestsMetawinCasinoPage from './components/imported/ImportedTestsMetawinCasinoPage';
import ImportedTestsMegaDiceCasinoPage from './components/imported/ImportedTestsMegaDiceCasinoPage';
import ImportedTestsWsmCasinoPage from './components/imported/ImportedTestsWsmCasinoPage';
import ImportedTestsFlushCasinoPage from './components/imported/ImportedTestsFlushCasinoPage';
import ImportedTestsBcGamePage from './components/imported/ImportedTestsBcGamePage';
import ImportedTestsBitkingzCasinoPage from './components/imported/ImportedTestsBitkingzCasinoPage';
import ImportedTestsCloudbetPage from './components/imported/ImportedTestsCloudbetPage';
import ImportedTestsTgCasinoPage from './components/imported/ImportedTestsTgCasinoPage';
import ImportedTestsBetplayPage from './components/imported/ImportedTestsBetplayPage';
import ImportedTestsVipCasinoPage from './components/imported/ImportedTestsVipCasinoPage';
import ImportedTestsBillionairespinPage from './components/imported/ImportedTestsBillionairespinPage';
import ImportedKryptoCasinoSofortauszahlungPage from './components/imported/ImportedKryptoCasinoSofortauszahlungPage';
import Imported7bitBonusOhneEinzahlungPage from './components/imported/Imported7bitBonusOhneEinzahlungPage';
import ImportedBitkingzBonusOhneEinzahlungPage from './components/imported/ImportedBitkingzBonusOhneEinzahlungPage';
import ImportedCryptoleoBonusOhneEinzahlungPage from './components/imported/ImportedCryptoleoBonusOhneEinzahlungPage';
import ImportedKryptoWalletsPage from './components/imported/ImportedKryptoWalletsPage';
import ImportedBlockchainCasinosPage from './components/imported/ImportedBlockchainCasinosPage';
import ImportedBitcoinCasinosPage from './components/imported/ImportedBitcoinCasinosPage';
import ImportedImpressumPage from './components/imported/ImportedImpressumPage';
import ImportedKontaktPage from './components/imported/ImportedKontaktPage';
import ImportedKryptoCasinosOhneVerifizierungPage from './components/imported/ImportedKryptoCasinosOhneVerifizierungPage';
import ImportedKryptoCasinoBoniOhneEinzahlungPage from './components/imported/ImportedKryptoCasinoBoniOhneEinzahlungPage';
import ImportedKryptoCasinoBoniPage from './components/imported/ImportedKryptoCasinoBoniPage';
import ImportedKryptoCasinoSpielePage from './components/imported/ImportedKryptoCasinoSpielePage';
import ImportedPlinkoPage from './components/imported/ImportedPlinkoPage';
import ImportedKryptoSportwettenPage from './components/imported/ImportedKryptoSportwettenPage';
import ImportedTestsPage from './components/imported/ImportedTestsPage';
import ImportedKryptoWalletsMetamaskPage from './components/imported/ImportedKryptoWalletsMetamaskPage';
import ImportedKryptoWalletsTrustWalletPage from './components/imported/ImportedKryptoWalletsTrustWalletPage';
import ImportedKryptowissenPage from './components/imported/ImportedKryptowissenPage';
import ImportedKryptowissenTop5WarnsignaleAufDieSieBeiDerAuswahlEinesKryptoCasinosAchtenSolltenPage from './components/imported/ImportedKryptowissenTop5WarnsignaleAufDieSieBeiDerAuswahlEinesKryptoCasinosAchtenSolltenPage';
import ImportedKryptowissenExotischeKryptoSlotsMitFaszinierendenThemenGrafikenPage from './components/imported/ImportedKryptowissenExotischeKryptoSlotsMitFaszinierendenThemenGrafikenPage';
import ImportedKryptowissenDie5BestenOnlineKryptoCrashKurse2024Page from './components/imported/ImportedKryptowissenDie5BestenOnlineKryptoCrashKurse2024Page';
import ImportedKryptowissenWasIstProvablyFairEinLeitfadenZurFairnessInKryptoCasinosPage from './components/imported/ImportedKryptowissenWasIstProvablyFairEinLeitfadenZurFairnessInKryptoCasinosPage';
import ImportedKryptowissenDerKampfZwischenKryptoCasinosUndFiatCasinosWerWirdDieBrancheErobernPage from './components/imported/ImportedKryptowissenDerKampfZwischenKryptoCasinosUndFiatCasinosWerWirdDieBrancheErobernPage';
import ImportedKryptowissenSoBewaeltigenSieDieVolatilitaetVonKryptowaehrungenInKryptoCasinosPage from './components/imported/ImportedKryptowissenSoBewaeltigenSieDieVolatilitaetVonKryptowaehrungenInKryptoCasinosPage';
import ImportedKryptowissenKryptoWalletGebuehrenErklaertWasSieUeberCasinoTransaktionenWissenMuessenPage from './components/imported/ImportedKryptowissenKryptoWalletGebuehrenErklaertWasSieUeberCasinoTransaktionenWissenMuessenPage';
import ImportedKryptowissen2025JahrDerKiWieKuenstlicheIntelligenzKryptoCasinosVeraendernWirdPage from './components/imported/ImportedKryptowissen2025JahrDerKiWieKuenstlicheIntelligenzKryptoCasinosVeraendernWirdPage';
import ImportedKryptowissenEvolutionVonKryptoCasinos20242025Page from './components/imported/ImportedKryptowissenEvolutionVonKryptoCasinos20242025Page';
import ImportedKryptowissenWieVerbessernSmartContractsDieTransparenzUndFairnessMitKryptowaehrungenPage from './components/imported/ImportedKryptowissenWieVerbessernSmartContractsDieTransparenzUndFairnessMitKryptowaehrungenPage';
import ImportedKryptowissenMussKycInKryptoCasinosSeinWarumEsNichtSoSchlimmIstPage from './components/imported/ImportedKryptowissenMussKycInKryptoCasinosSeinWarumEsNichtSoSchlimmIstPage';
import ImportedKryptowissenHabenSieDenZugangZuIhrerKryptoWalletVerlorenHierSindUnsereTippsPage from './components/imported/ImportedKryptowissenHabenSieDenZugangZuIhrerKryptoWalletVerlorenHierSindUnsereTippsPage';
import ImportedKryptowissenWieManUnfaireBonusbedingungenOhneEinzahlungInKryptoCasinosErkenntPage from './components/imported/ImportedKryptowissenWieManUnfaireBonusbedingungenOhneEinzahlungInKryptoCasinosErkenntPage';
import ImportedKryptowissenDieBeliebtestenCoinsFuerKryptoCasinosPage from './components/imported/ImportedKryptowissenDieBeliebtestenCoinsFuerKryptoCasinosPage';
import ImportedKryptowissenSaisonaleFeiertagsboniWannUndWoSieSieFindenPage from './components/imported/ImportedKryptowissenSaisonaleFeiertagsboniWannUndWoSieSieFindenPage';
import ImportedKryptowissenNeueKryptoCasinosVersprechenDirDasBlaueVomHimmelHierIstWoraufDuAchtenMusstPage from './components/imported/ImportedKryptowissenNeueKryptoCasinosVersprechenDirDasBlaueVomHimmelHierIstWoraufDuAchtenMusstPage';
import ImportedKryptowissenSoBleibstDu2025SicherInKryptoCasinosPage from './components/imported/ImportedKryptowissenSoBleibstDu2025SicherInKryptoCasinosPage';
import ImportedKryptowissenMobileKryptoCasinos2025Page from './components/imported/ImportedKryptowissenMobileKryptoCasinos2025Page';
import ImportedKryptowissenLayer2LoesungenInKryptocasinosSchnellerUndEinfacherSpielenPage from './components/imported/ImportedKryptowissenLayer2LoesungenInKryptocasinosSchnellerUndEinfacherSpielenPage';
import ImportedKryptowissenDerKostenloseTestWarumDeutscheSpielerNieEinzahlenBevorSieTestenPage from './components/imported/ImportedKryptowissenDerKostenloseTestWarumDeutscheSpielerNieEinzahlenBevorSieTestenPage';
import ImportedKryptowissenKryptoCasinoBoni2026TrendsPage from './components/imported/ImportedKryptowissenKryptoCasinoBoni2026TrendsPage';
// ------------------------


function App() {
  return (
    <div className="App">
      <Routes>
        {/* --- MIGRATED ROUTES --- */}
        <Route path="/" element={<ImportedHome />} />
        <Route path="/datenschutz/" element={<ImportedDatenschutzPage />} />
        <Route path="/tests/mbit/" element={<ImportedTestsMbitPage />} />
        <Route path="/tests/arcanebet/" element={<ImportedTestsArcanebetPage />} />
        <Route path="/tests/joo/" element={<ImportedTestsJooPage />} />
        <Route path="/tests/1xbit/" element={<ImportedTests1xbitPage />} />
        <Route path="/verantwortungsbewusstes-spielen/" element={<ImportedVerantwortungsbewusstesSpielenPage />} />
        <Route path="/ueber-uns/" element={<ImportedUeberUnsPage />} />
        <Route path="/kaufen/" element={<ImportedKaufenPage />} />
        <Route path="/freispiele-ohne-einzahlung/" element={<ImportedFreispieleOhneEinzahlungPage />} />
        <Route path="/krypto-casino-boni/krypto-casinos-bonus-ohne-umsatzbedingungen/" element={<ImportedKryptoCasinoBoniKryptoCasinosBonusOhneUmsatzbedingungenPage />} />
        <Route path="/ripple-casinos/" element={<ImportedRippleCasinosPage />} />
        <Route path="/casino-tokens/" element={<ImportedCasinoTokensPage />} />
        <Route path="/ethereum-casinos/" element={<ImportedEthereumCasinosPage />} />
        <Route path="/krypto-poker/" element={<ImportedKryptoPokerPage />} />
        <Route path="/neue-krypto-casinos/" element={<ImportedNeueKryptoCasinosPage />} />
        <Route path="/krypto-slots/" element={<ImportedKryptoSlotsPage />} />
        <Route path="/crash-spiele/" element={<ImportedCrashSpielePage />} />
        <Route path="/vergleich/" element={<ImportedVergleichPage />} />
        <Route path="/tests/jackbit-casino/" element={<ImportedTestsJackbitCasinoPage />} />
        <Route path="/tests/cryptoleo-casino/" element={<ImportedTestsCryptoleoCasinoPage />} />
        <Route path="/tests/7bit/" element={<ImportedTests7bitPage />} />
        <Route path="/tests/trueflip/" element={<ImportedTestsTrueflipPage />} />
        <Route path="/tests/kripty-casino/" element={<ImportedTestsKriptyCasinoPage />} />
        <Route path="/tests/lucky-block-casino/" element={<ImportedTestsLuckyBlockCasinoPage />} />
        <Route path="/tests/metawin-casino/" element={<ImportedTestsMetawinCasinoPage />} />
        <Route path="/tests/mega-dice-casino/" element={<ImportedTestsMegaDiceCasinoPage />} />
        <Route path="/tests/wsm-casino/" element={<ImportedTestsWsmCasinoPage />} />
        <Route path="/tests/flush-casino/" element={<ImportedTestsFlushCasinoPage />} />
        <Route path="/tests/bc-game/" element={<ImportedTestsBcGamePage />} />
        <Route path="/tests/bitkingz-casino/" element={<ImportedTestsBitkingzCasinoPage />} />
        <Route path="/tests/cloudbet/" element={<ImportedTestsCloudbetPage />} />
        <Route path="/tests/tg-casino/" element={<ImportedTestsTgCasinoPage />} />
        <Route path="/tests/betplay/" element={<ImportedTestsBetplayPage />} />
        <Route path="/tests/vip-casino/" element={<ImportedTestsVipCasinoPage />} />
        <Route path="/tests/billionairespin/" element={<ImportedTestsBillionairespinPage />} />
        <Route path="/krypto-casino-sofortauszahlung/" element={<ImportedKryptoCasinoSofortauszahlungPage />} />
        <Route path="/7bit-bonus-ohne-einzahlung/" element={<Imported7bitBonusOhneEinzahlungPage />} />
        <Route path="/bitkingz-bonus-ohne-einzahlung/" element={<ImportedBitkingzBonusOhneEinzahlungPage />} />
        <Route path="/cryptoleo-bonus-ohne-einzahlung/" element={<ImportedCryptoleoBonusOhneEinzahlungPage />} />
        <Route path="/krypto-wallets/" element={<ImportedKryptoWalletsPage />} />
        <Route path="/blockchain-casinos/" element={<ImportedBlockchainCasinosPage />} />
        <Route path="/bitcoin-casinos/" element={<ImportedBitcoinCasinosPage />} />
        <Route path="/impressum/" element={<ImportedImpressumPage />} />
        <Route path="/kontakt/" element={<ImportedKontaktPage />} />
        <Route path="/krypto-casinos-ohne-verifizierung/" element={<ImportedKryptoCasinosOhneVerifizierungPage />} />
        <Route path="/krypto-casino-boni-ohne-einzahlung/" element={<ImportedKryptoCasinoBoniOhneEinzahlungPage />} />
        <Route path="/krypto-casino-boni/" element={<ImportedKryptoCasinoBoniPage />} />
        <Route path="/krypto-casino-spiele/" element={<ImportedKryptoCasinoSpielePage />} />
        <Route path="/plinko/" element={<ImportedPlinkoPage />} />
        <Route path="/krypto-sportwetten/" element={<ImportedKryptoSportwettenPage />} />
        <Route path="/tests/" element={<ImportedTestsPage />} />
        <Route path="/krypto-wallets/metamask/" element={<ImportedKryptoWalletsMetamaskPage />} />
        <Route path="/krypto-wallets/trust-wallet/" element={<ImportedKryptoWalletsTrustWalletPage />} />
        <Route path="/kryptowissen/" element={<ImportedKryptowissenPage />} />
        <Route path="/kryptowissen/top-5-warnsignale-auf-die-sie-bei-der-auswahl-eines-krypto-casinos-achten-sollten/" element={<ImportedKryptowissenTop5WarnsignaleAufDieSieBeiDerAuswahlEinesKryptoCasinosAchtenSolltenPage />} />
        <Route path="/kryptowissen/exotische-krypto-slots-mit-faszinierenden-themen-grafiken/" element={<ImportedKryptowissenExotischeKryptoSlotsMitFaszinierendenThemenGrafikenPage />} />
        <Route path="/kryptowissen/die-5-besten-online-krypto-crash-kurse-2024/" element={<ImportedKryptowissenDie5BestenOnlineKryptoCrashKurse2024Page />} />
        <Route path="/kryptowissen/was-ist-provably-fair-ein-leitfaden-zur-fairness-in-krypto-casinos/" element={<ImportedKryptowissenWasIstProvablyFairEinLeitfadenZurFairnessInKryptoCasinosPage />} />
        <Route path="/kryptowissen/der-kampf-zwischen-krypto-casinos-und-fiat-casinos-wer-wird-die-branche-erobern/" element={<ImportedKryptowissenDerKampfZwischenKryptoCasinosUndFiatCasinosWerWirdDieBrancheErobernPage />} />
        <Route path="/kryptowissen/so-bewaeltigen-sie-die-volatilitaet-von-kryptowaehrungen-in-krypto-casinos/" element={<ImportedKryptowissenSoBewaeltigenSieDieVolatilitaetVonKryptowaehrungenInKryptoCasinosPage />} />
        <Route path="/kryptowissen/krypto-wallet-gebuehren-erklaert-was-sie-ueber-casino-transaktionen-wissen-muessen/" element={<ImportedKryptowissenKryptoWalletGebuehrenErklaertWasSieUeberCasinoTransaktionenWissenMuessenPage />} />
        <Route path="/kryptowissen/2025-jahr-der-ki-wie-kuenstliche-intelligenz-krypto-casinos-veraendern-wird/" element={<ImportedKryptowissen2025JahrDerKiWieKuenstlicheIntelligenzKryptoCasinosVeraendernWirdPage />} />
        <Route path="/kryptowissen/evolution-von-krypto-casinos-2024-2025/" element={<ImportedKryptowissenEvolutionVonKryptoCasinos20242025Page />} />
        <Route path="/kryptowissen/wie-verbessern-smart-contracts-die-transparenz-und-fairness-mit-kryptowaehrungen/" element={<ImportedKryptowissenWieVerbessernSmartContractsDieTransparenzUndFairnessMitKryptowaehrungenPage />} />
        <Route path="/kryptowissen/muss-kyc-in-krypto-casinos-sein-warum-es-nicht-so-schlimm-ist/" element={<ImportedKryptowissenMussKycInKryptoCasinosSeinWarumEsNichtSoSchlimmIstPage />} />
        <Route path="/kryptowissen/haben-sie-den-zugang-zu-ihrer-krypto-wallet-verloren-hier-sind-unsere-tipps/" element={<ImportedKryptowissenHabenSieDenZugangZuIhrerKryptoWalletVerlorenHierSindUnsereTippsPage />} />
        <Route path="/kryptowissen/wie-man-unfaire-bonusbedingungen-ohne-einzahlung-in-krypto-casinos-erkennt/" element={<ImportedKryptowissenWieManUnfaireBonusbedingungenOhneEinzahlungInKryptoCasinosErkenntPage />} />
        <Route path="/kryptowissen/die-beliebtesten-coins-fuer-krypto-casinos/" element={<ImportedKryptowissenDieBeliebtestenCoinsFuerKryptoCasinosPage />} />
        <Route path="/kryptowissen/saisonale-feiertagsboni-wann-und-wo-sie-sie-finden/" element={<ImportedKryptowissenSaisonaleFeiertagsboniWannUndWoSieSieFindenPage />} />
        <Route path="/kryptowissen/neue-krypto-casinos-versprechen-dir-das-blaue-vom-himmel-hier-ist-worauf-du-achten-musst/" element={<ImportedKryptowissenNeueKryptoCasinosVersprechenDirDasBlaueVomHimmelHierIstWoraufDuAchtenMusstPage />} />
        <Route path="/kryptowissen/so-bleibst-du-2025-sicher-in-krypto-casinos/" element={<ImportedKryptowissenSoBleibstDu2025SicherInKryptoCasinosPage />} />
        <Route path="/kryptowissen/mobile-krypto-casinos-2025/" element={<ImportedKryptowissenMobileKryptoCasinos2025Page />} />
        <Route path="/kryptowissen/layer-2-loesungen-in-kryptocasinos-schneller-und-einfacher-spielen/" element={<ImportedKryptowissenLayer2LoesungenInKryptocasinosSchnellerUndEinfacherSpielenPage />} />
        <Route path="/kryptowissen/der-kostenlose-test-warum-deutsche-spieler-nie-einzahlen-bevor-sie-testen/" element={<ImportedKryptowissenDerKostenloseTestWarumDeutscheSpielerNieEinzahlenBevorSieTestenPage />} />
        <Route path="/kryptowissen/krypto-casino-boni-2026-trends/" element={<ImportedKryptowissenKryptoCasinoBoni2026TrendsPage />} />
        {/* ----------------------- */}


        {/* Main Pages */}
        {/* <Route path="/" element={<NewHomePage />} /> */}

        {/* Casino Guide Pages */}
        <Route path="/ethereum-casinos" element={<EthereumCasinosPage />} />
        <Route path="/ripple-casinos" element={<RippleCasinosPage />} />
        <Route path="/casino-tokens" element={<CasinoTokensPage />} />
        <Route path="/krypto-poker" element={<KryptoPokerPage />} />
        <Route path="/neue-krypto-casinos" element={<NeueKryptoCasinosPage />} />
        <Route path="/blockchain-casinos" element={<BlockchainCasinosPage />} />
        <Route path="/sofortauszahlung" element={<SofortauszahlungPage />} />
        <Route path="/ohne-verifizierung" element={<OhneVerifizierungPage />} />

        {/* Bonus & Promotions */}
        <Route path="/freispiele-ohne-einzahlung" element={<FreispieleOhneEinzahlungPage />} />
        <Route path="/bonus-ohne-umsatzbedingungen" element={<BonusOhneUmsatzbedingungenPage />} />

        {/* Crypto Guides */}
        <Route path="/kryptowaehrungen-kaufen" element={<KryptowaehrungenKaufenPage />} />

        {/* Legal & Info Pages */}
        <Route path="/datenschutz" element={<NewPrivacyPolicyPage />} />
        <Route path="/verantwortungsbewusstes-spielen" element={<ResponsibleGamingPage />} />
        <Route path="/verantwortungsbewusstes-spielen-neu" element={<VerantwortungsbewusstesSpielenPage />} />
        <Route path="/ueber-uns" element={<UeberUnsPage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/kontakt" element={<KontaktPage />} />
      </Routes>
    </div>
  );
}

export default App;
