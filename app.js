// Application State
const state = {
  events: [],
  filteredEvents: [],
  selectedEventId: null,
  selectedCategory: 'all',
  selectedOutcome: 'yes',
  leaderboardMode: 'highestBoost', // 'highestBoost' or 'endingSoon'
  activeView: 'dashboard', // 'dashboard' or 'methodology'
  currentTheme: localStorage.getItem('theme') || 'dark',
  searchTerm: '',
  currentLang: 'en'
};

let timerInterval = null;

// Translations Dictionary
const I18N = {
  en: {
    apiLive: 'Connected to Polymarket API',
    apiFallback: 'Polymarket Data Safe Mode',
    eventsAnalyzed: 'Events analyzed:',
    searchPlaceholder: 'Search event or stock ticker (NVDA, Fed, COIN...)...',
    brandSubtext: 'Powered by Gemini 3.1 Pro',
    navDashboard: 'Dashboard',
    navMethodology: 'Methodology & Model',
    catAll: 'All',
    catMacro: 'Macro & Fed',
    catTech: 'Tech & AI',
    catDefense: 'Defense',
    catEnergy: 'Energy',
    catPolitics: 'Politics & Taxes',
    catBiotech: 'Biotech',
    catCrypto: 'Crypto',
    sidebarTitle: 'Polymarket Markets',
    sidebarSubtitle: 'Select a market',
    eventsCount: 'events',
    noEventsFound: 'No Polymarket markets match your search.',
    polyVolume: 'Polymarket Volume',
    resolutionScenario: 'Resolution Scenario',
    btnYes: 'YES (If occurs)',
    btnNo: 'NO (If rejected)',
    fixedProbTitle: 'Polymarket Market Odds',
    topBannerTitle: 'VELTRION PARTNERS LEADERBOARD',
    topBannerSubtitleBoost: 'Top 3 stock opportunities ranked by highest quantitative value alpha',
    topBannerSubtitleEnding: 'Top 3 stock opportunities for Polymarket events resolving soonest',
    tabHighestBoost: 'Top Alpha Leads',
    tabEndingSoon: 'Ending Soon',
    impactedTitle: 'Impacted Companies & Implied Alpha Odds',
    rankedBySensitivity: '(Ranked by Implied Alpha Odds)',
    scenarioSubtitleYes: 'YES Scenario at {prob}% market odds',
    scenarioSubtitleNo: 'NO Scenario at {prob}% market odds',
    noBeneficiaries: 'No companies listed for this specific scenario.',
    badgeBeneficiary: 'BENEFICIARY',
    badgeRisk: 'VULNERABLE / RISK',
    metricSensitivity: 'Estimated Sensitivity',
    metricSignal: 'Signal Strength',
    pricedInLabel: 'Market Priced-In',
    signalLabel: 'Signal Strength',
    signalStrong: 'High Conviction Signal',
    signalModerate: 'Moderate Signal',
    signalWeak: 'Low Signal',
    btnDeepAnalysis: 'Deep Financial Analysis →',
    modalOddsBannerTitle: 'QUANTITATIVE BENEFICIARY ODDS & IMPLIED ALPHA',
    modalPricedInTitle: 'MARKET PRICED-IN & SIGNAL ANALYSIS',
    pricedInLevel: 'Priced-In Level:',
    modalFinancialLogic: 'FINANCIAL LOGIC & MECHANISM',
    modalPrimaryCatalyst: 'PRIMARY CATALYST',
    modalCorporateMetrics: 'CORPORATE METRICS',
    modalMarketCap: 'Market Cap',
    modalExposure: 'Sector Exposure',
    modalSensitivity: 'Stock Sensitivity',
    modalDebt: 'Debt / Equity',
    modalRisks: 'RISK FACTORS & UNCERTAINTIES',
    methodologyTitle: 'Quantitative Implied Alpha & Pricing Lag Methodology',
    methodologySubtitle: 'Institutional model framework developed by Veltrion Partners & powered by Gemini 3.1 Pro engine.',
    methFormulaTitle: '1. Mathematical Implied Base Odds & Alpha Model',
    methFormulaDesc: 'The Implied Value Alpha model quantifies the temporal lag between rapid prediction market re-pricing and trailing stock equity valuations. When prediction odds shift before stock prices adjust, the model projects asymmetric value alpha.',
    methPillarsTitle: '2. Dual Core Pillars & Correlation Signals',
    methPillar1Title: 'Polymarket Live Order Book:',
    methPillar2Title: 'Market Priced-In Level (%):',
    methPillar3Title: 'Signal Strength Conviction (%):',
    methGaugesTitle: '3. Institutional Dual Gauges Interpretation',
    methPricedInLow: 'Low Priced-In (0–35%):',
    methPricedInLowDesc: 'High unpriced opportunity. Equity market has not yet discounted the event outcome, creating high risk/reward asymmetry.',
    methSignalHigh: 'High Signal Strength (80–100%):',
    methSignalHighDesc: 'High conviction correlation. Corporate revenues and EPS have direct material exposure to the event outcome.',
    methSourcesTitle: '4. Institutional Data Pipeline & Gemini AI Engine',
    methSourcesDesc: 'Engineered by Veltrion Partners and powered by Gemini 3.1 Pro reasoning, data is synthesized continuously from live prediction orderbooks, SEC EDGAR regulatory disclosures, interest rate futures curves, and historical stock betas.',
    footerText: 'Veltrion Partners © 2026 — Quantitative Market Intelligence'
  },
  fr: {
    apiLive: 'Connecté à Polymarket API (Direct)',
    apiFallback: 'Mode Données Sécurisé Polymarket',
    eventsAnalyzed: 'Événements analysés :',
    searchPlaceholder: 'Rechercher un événement ou entreprise (NVDA, Fed, COIN...)...',
    brandSubtext: 'Alimenté par Gemini 3.1 Pro',
    navDashboard: 'Dashboard',
    navMethodology: 'Méthodologie & Modèle',
    catAll: 'Tous',
    catMacro: 'Macro & Fed',
    catTech: 'Tech & IA',
    catDefense: 'Défense',
    catEnergy: 'Énergie',
    catPolitics: 'Politique & Taxes',
    catBiotech: 'Biotech',
    catCrypto: 'Crypto',
    sidebarTitle: 'Marchés Polymarket',
    sidebarSubtitle: 'Sélectionnez un marché',
    eventsCount: 'événements',
    noEventsFound: 'Aucun marché ni entreprise ne correspond à votre recherche.',
    polyVolume: 'Volume Polymarket',
    resolutionScenario: 'Scénario de Résolution',
    btnYes: 'OUI (Si réalisé)',
    btnNo: 'NON (Si rejeté)',
    fixedProbTitle: 'Probabilités du Marché Polymarket',
    topBannerTitle: 'LEADERBOARD DES COTES ALPHA',
    topBannerSubtitleBoost: 'Top 3 des opportunités classées par le plus fort alpha de valeur',
    topBannerSubtitleEnding: 'Top 3 des opportunités pour les événements se terminant très prochainement',
    tabHighestBoost: 'Plus Fort Alpha',
    tabEndingSoon: 'Clôture Prochaine',
    impactedTitle: 'Entreprises Impactées & Cotes Alpha Implicites',
    rankedBySensitivity: '(Classement par Cotes Alpha Implicites)',
    scenarioSubtitleYes: 'Scénario OUI à {prob}% de probabilité du marché',
    scenarioSubtitleNo: 'Scénario NON à {prob}% de probabilité du marché',
    noBeneficiaries: 'Aucune entreprise répertoriée pour ce scénario spécifique.',
    badgeBeneficiary: 'BÉNÉFICIAIRE',
    badgeRisk: 'PERDANT / RISQUE',
    metricSensitivity: 'Sensibilité Estimée',
    metricSignal: 'Force du Signal',
    pricedInLabel: 'Pricage du Marché',
    signalLabel: 'Force du Signal',
    signalStrong: 'Forte Conviction',
    signalModerate: 'Signal Modéré',
    signalWeak: 'Signal Faible',
    btnDeepAnalysis: 'Analyse Financière Détaillée →',
    modalOddsBannerTitle: 'QUANTITATIVE BENEFICIARY ODDS & VALUE BOOST',
    modalPricedInTitle: 'MARKET PRICED-IN & SIGNAL ANALYSIS',
    pricedInLevel: 'Priced-In Level:',
    modalFinancialLogic: 'FINANCIAL LOGIC & MECHANISM',
    modalPrimaryCatalyst: 'PRIMARY CATALYST',
    modalCorporateMetrics: 'CORPORATE METRICS',
    modalMarketCap: 'Market Cap',
    modalExposure: 'Sector Exposure',
    modalSensitivity: 'Stock Sensitivity',
    modalDebt: 'Debt / Equity',
    modalRisks: 'RISK FACTORS & UNCERTAINTIES',
    methodologyTitle: 'Quantitative Implied Alpha & Pricing Lag Methodology',
    methodologySubtitle: 'How Polymarket Adviser calculates sports betting style implied base odds vs equity value boosts.',
    methFormulaTitle: '1. Mathematical Boost Formula',
    methFormulaDesc: 'The Boosted Value Odds model quantifies unpriced equity lag by scaling baseline odds upward when prediction markets surge before stock prices react.',
    methPillarsTitle: '2. Key Data Pillars & Signals',
    methPillar1Title: 'Polymarket Live Order Book:',
    methPillar2Title: 'Market Priced-In Level (%):',
    methPillar3Title: 'Signal Strength (%):',
    methGaugesTitle: '3. Dual Gauges Interpretation',
    methPricedInLow: 'Low Priced-In (0–35%):',
    methPricedInLowDesc: 'High unpriced opportunity. Equity market has not yet discounted the event outcome, creating high risk/reward asymmetry.',
    methSignalHigh: 'High Signal Strength (80–100%):',
    methSignalHighDesc: 'High conviction correlation. Corporate revenues and EPS have direct material exposure to the event outcome.',
    methSourcesTitle: '4. Data Sources & Execution',
    methSourcesDesc: 'Data is continuously updated from Polymarket order books, SEC financial EDGAR disclosures, macroeconomic interest rate futures, and 30-day historical stock betas.',
    footerText: 'Polymarket Stock Beneficiary Adviser © 2026 — Quantitative Market Intelligence'
  },
  fr: {
    apiLive: 'Connecté à Polymarket API (Direct)',
    apiFallback: 'Mode Données Sécurisé Polymarket',
    eventsAnalyzed: 'Événements analysés :',
    searchPlaceholder: 'Rechercher un événement ou entreprise (NVDA, Fed, COIN...)...',
    navDashboard: 'Tableau de Bord',
    navMethodology: 'Méthodologie & Modèle',
    catAll: 'Tous',
    catMacro: 'Macro & Fed',
    catTech: 'Tech & IA',
    catDefense: 'Défense',
    catEnergy: 'Énergie',
    catPolitics: 'Politique & Taxes',
    catBiotech: 'Biotech',
    catCrypto: 'Crypto',
    sidebarTitle: 'Marchés Polymarket',
    sidebarSubtitle: 'Sélectionnez un marché',
    eventsCount: 'événements',
    noEventsFound: 'Aucun marché ni entreprise ne correspond à votre recherche.',
    polyVolume: 'Volume Polymarket',
    resolutionScenario: 'Scénario de Résolution',
    btnYes: 'OUI (Si réalisé)',
    btnNo: 'NON (Si rejeté)',
    fixedProbTitle: 'Probabilités du Marché Polymarket',
    topBannerTitle: 'LEADERBOARD DES COTES BOOSTÉES',
    topBannerSubtitleUnder2: 'Top 3 des opportunités avec Cote de base < 2,00 (Favoris) classées par plus haut boost',
    topBannerSubtitleOver2: 'Top 3 des opportunités avec Cote de base ≥ 2,00 (Fort Rendement) classées par plus haut boost',
    tabUnder2: 'Cote de base < 2.00',
    tabOver2: 'Cote de base ≥ 2.00',
    impactedTitle: 'Entreprises Impactées & Cotes Boostées',
    rankedBySensitivity: '(Classement par Cotes Boostées)',
    scenarioSubtitleYes: 'Scénario OUI à {prob}% de probabilité du marché',
    scenarioSubtitleNo: 'Scénario NON à {prob}% de probabilité du marché',
    noBeneficiaries: 'Aucune entreprise répertoriée pour ce scénario spécifique.',
    badgeBeneficiary: 'BÉNÉFICIAIRE',
    badgeRisk: 'PERDANT / RISQUE',
    metricSensitivity: 'Sensibilité Estimée',
    metricSignal: 'Force du Signal',
    pricedInLabel: 'Pricage du Marché',
    signalLabel: 'Force du Signal',
    signalStrong: 'Forte Conviction',
    signalModerate: 'Signal Modéré',
    signalWeak: 'Signal Faible',
    btnDeepAnalysis: 'Analyse Financière Détaillée →',
    modalOddsBannerTitle: 'ANALYSE QUANTITATIVE DES COTES & BOOST',
    modalPricedInTitle: 'ANALYSE DU PRICAGE & DU SIGNAL',
    pricedInLevel: 'Niveau de Pricage :',
    modalFinancialLogic: 'LOGIQUE & MÉCANISME FINANCIER',
    modalPrimaryCatalyst: 'CATALYSEUR PRINCIPAL',
    modalCorporateMetrics: 'MÉTRIQUES DE L\'ENTREPRISE',
    modalMarketCap: 'Capitalisation Boursière',
    modalExposure: 'Exposition au Secteur',
    modalSensitivity: 'Sensibilité Action',
    modalDebt: 'Endettement / Fonds Propres',
    modalRisks: 'FACTEURS DE RISQUE & INCERTITUDE',
    methodologyTitle: 'Méthodologie du Calcul des Cotes Implicites & Alpha',
    methodologySubtitle: 'Comment Polymarket Adviser calcule les cotes de base implicites et le boost de valeur boursière.',
    methFormulaTitle: '1. Formule Mathématique de Boost',
    methFormulaDesc: 'Le modèle de Cote Boostée quantifie le retard de pricage des actions en augmentant la cote de base lorsque les marchés de prédiction réagissent avant les actions.',
    methPillarsTitle: '2. Piliers de Données & Signaux Clefs',
    methPillar1Title: 'Carnet d\'Ordres Polymarket :',
    methPillar2Title: 'Niveau de Pricage du Marché (%) :',
    methPillar3Title: 'Force du Signal (%) :',
    methGaugesTitle: '3. Interprétation des Deux Jauges',
    methPricedInLow: 'Faiblement Intégré (0–35%) :',
    methPricedInLowDesc: 'Opportunité importante non pricée. Les actions n\'ont pas encore intégré le résultat de l\'événement, créant une forte asymétrie risque/rendement.',
    methSignalHigh: 'Forte Conviction (80–100%) :',
    methSignalHighDesc: 'Corrélation élevée. Le chiffre d\'affaires et les bénéfices de l\'entreprise sont directement exposés au résultat de l\'événement.',
    methSourcesTitle: '4. Sources de Données & Fiabilité',
    methSourcesDesc: 'Données mises à jour en continu via le carnet d\'ordres Polymarket, les déclarations réglementaires SEC (10-K), les contrats à terme sur taux et le bêta sur 30 jours.',
    footerText: 'Polymarket Stock Beneficiary Adviser © 2026 — Intelligence Quantitative de Marché'
  }
};

// DOM Elements
const elements = {
  apiStatusText: document.getElementById('api-status-text'),
  eventsCountBadge: document.getElementById('events-count-badge'),
  searchInput: document.getElementById('search-input'),
  categoryPills: document.getElementById('category-pills'),
  eventsListContainer: document.getElementById('events-list-container'),
  marketListSubtitle: document.getElementById('market-list-subtitle'),
  
  // Navigation & Theme Elements
  navBtnDashboard: document.getElementById('nav-btn-dashboard'),
  navBtnMethodology: document.getElementById('nav-btn-methodology'),
  mainDashboardView: document.getElementById('main-dashboard-view'),
  mainMethodologyView: document.getElementById('main-methodology-view'),
  themeDarkBtn: document.getElementById('theme-dark-btn'),
  themeLightBtn: document.getElementById('theme-light-btn'),

  // Language switcher
  langEnBtn: document.getElementById('lang-en-btn'),
  langFrBtn: document.getElementById('lang-fr-btn'),

  // Top Opportunities Leaderboard
  topBannerSubtitle: document.getElementById('banner-subtitle'),
  btnTopBoost: document.getElementById('btn-top-boost'),
  btnTopEnding: document.getElementById('btn-top-ending'),
  topCardsGrid: document.getElementById('top-cards-grid'),

  // Hero Elements
  heroCategory: document.getElementById('hero-category'),
  heroTimerChip: document.getElementById('hero-timer-chip'),
  heroCountdownText: document.getElementById('hero-countdown-text'),
  heroTitle: document.getElementById('hero-title'),
  heroDescription: document.getElementById('hero-description'),
  heroVolume: document.getElementById('hero-volume'),
  btnScenarioYes: document.getElementById('btn-scenario-yes'),
  btnScenarioNo: document.getElementById('btn-scenario-no'),
  heroLiveProb: document.getElementById('hero-live-prob'),
  heroLiveProbBar: document.getElementById('hero-live-prob-bar'),
  
  // Grid & Modal
  beneficiariesGrid: document.getElementById('beneficiaries-grid'),
  beneficiariesSubtitle: document.getElementById('beneficiaries-subtitle'),
  companyModal: document.getElementById('company-modal'),
  modalCloseBtn: document.getElementById('modal-close-btn'),
  
  // Modal Fields
  modalTicker: document.getElementById('modal-ticker'),
  modalCompanyName: document.getElementById('modal-company-name'),
  modalSector: document.getElementById('modal-sector'),
  modalOddsSubDetail: document.getElementById('modal-odds-sub-detail'),
  modalBaseOdds: document.getElementById('modal-base-odds'),
  modalBoostedOdds: document.getElementById('modal-boosted-odds'),
  modalBoostPill: document.getElementById('modal-boost-pill'),
  modalPricedInStatus: document.getElementById('modal-priced-in-status'),
  modalPricedInBar: document.getElementById('modal-priced-in-bar'),
  modalPricedInStatusText: document.getElementById('modal-priced-in-status-text'),
  modalSignalScore: document.getElementById('modal-signal-score'),
  modalSignalBar: document.getElementById('modal-signal-bar'),
  modalSignalStatusText: document.getElementById('modal-signal-status-text'),
  modalPricedInMove: document.getElementById('modal-priced-in-move'),
  modalPricedInAsymmetry: document.getElementById('modal-priced-in-asymmetry'),
  modalRationale: document.getElementById('modal-rationale'),
  modalCatalyst: document.getElementById('modal-catalyst'),
  modalMcap: document.getElementById('modal-mcap'),
  modalExposure: document.getElementById('modal-exposure'),
  modalSensitivity: document.getElementById('modal-sensitivity'),
  modalDebt: document.getElementById('modal-debt'),
  modalRisks: document.getElementById('modal-risks')
};

/**
 * Compute Quantitative Implied Base Odds vs Boosted Value Odds
 * Base Odds = 1 / Probability
 * Boosted Odds = Base Odds * (1 + UnpricedGap% * ImpactScore * Multiplier)
 */
function computeSportsBettingOdds(stock, eventProbPct = 50) {
  const probFrac = Math.max(0.05, Math.min(0.95, eventProbPct / 100));
  const baseOddsVal = (1 / probFrac).toFixed(2);
  
  const unpricedGap = stock.pricedIn ? (100 - stock.pricedIn.pct) : 50;
  const sensVal = stock.sensitivityVal || 3.0;
  const impactScore = stock.impactScore || 50;

  // Boost multiplier calculation
  const boostMultiplier = 1 + ((unpricedGap / 100) * (impactScore / 100) * 0.42) + ((sensVal / 20) * 0.22);
  const rawBoostedOdds = parseFloat(baseOddsVal) * boostMultiplier;
  const boostedOddsVal = rawBoostedOdds.toFixed(2);
  const boostPct = Math.round((boostMultiplier - 1) * 100);

  return {
    baseOdds: parseFloat(baseOddsVal),
    boostedOdds: parseFloat(boostedOddsVal),
    boostPct
  };
}

/**
 * Start Ticking Countdown Timer to resolution date
 */
function startCountdownTimer(endDateStr) {
  if (timerInterval) clearInterval(timerInterval);

  function update() {
    const targetDate = new Date(endDateStr ? `${endDateStr}T23:59:59Z` : '2026-12-31T23:59:59Z').getTime();
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      elements.heroCountdownText.textContent = state.currentLang === 'fr' ? 'Événement Échu' : 'Event Expired';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const dayChar = state.currentLang === 'fr' ? 'j' : 'd';
    elements.heroCountdownText.textContent = `${days}${dayChar} ${hours}h ${minutes}m ${seconds}s`;
  }

  update();
  timerInterval = setInterval(update, 1000);
}

// Initialize Application
async function initApp() {
  applyTheme(state.currentTheme);
  setupEventListeners();
  updateStaticTexts();

  // 1. Instant 0ms synchronous UI render with curated event database
  state.events = FALLBACK_POLYMARKET_EVENTS;
  elements.eventsCountBadge.textContent = state.events.length;
  const dict = I18N[state.currentLang];
  elements.apiStatusText.textContent = dict.apiFallback;

  if (state.events.length > 0) {
    state.selectedEventId = state.events[0].id;
  }

  applyFilters();

  // 2. Background async API update (non-blocking)
  fetchPolymarketEvents().then(({ events, isLive }) => {
    if (isLive && events.length > 0) {
      state.events = events;
      elements.apiStatusText.textContent = state.currentLang === 'fr' ? 'Connecté à Polymarket API (Direct)' : 'Connected to Polymarket API';
      elements.eventsCountBadge.textContent = events.length;
      applyFilters();
    }
  }).catch(() => {
    // Retain instant fallback
  });
}

function applyTheme(theme) {
  state.currentTheme = theme;
  localStorage.setItem('theme', theme);
  document.documentElement.setAttribute('data-theme', theme);

  if (elements.themeDarkBtn && elements.themeLightBtn) {
    if (theme === 'light') {
      elements.themeLightBtn.classList.add('active');
      elements.themeDarkBtn.classList.remove('active');
    } else {
      elements.themeDarkBtn.classList.add('active');
      elements.themeLightBtn.classList.remove('active');
    }
  }
}

function setupEventListeners() {
  if (elements.themeDarkBtn && elements.themeLightBtn) {
    elements.themeDarkBtn.addEventListener('click', () => applyTheme('dark'));
    elements.themeLightBtn.addEventListener('click', () => applyTheme('light'));
  }

  // Main View Navigation (Dashboard vs Methodology)
  elements.navBtnDashboard.addEventListener('click', () => {
    state.activeView = 'dashboard';
    elements.navBtnDashboard.classList.add('active');
    elements.navBtnMethodology.classList.remove('active');
    elements.mainDashboardView.style.display = 'grid';
    elements.mainMethodologyView.style.display = 'none';
  });

  elements.navBtnMethodology.addEventListener('click', () => {
    state.activeView = 'methodology';
    elements.navBtnMethodology.classList.add('active');
    elements.navBtnDashboard.classList.remove('active');
    elements.mainDashboardView.style.display = 'none';
    elements.mainMethodologyView.style.display = 'block';
  });

  elements.langEnBtn.addEventListener('click', () => switchLanguage('en'));
  elements.langFrBtn.addEventListener('click', () => switchLanguage('fr'));

  // Dual Leaderboard Tabs (Highest Boosts vs Ending Soon)
  elements.btnTopBoost.addEventListener('click', () => {
    state.leaderboardMode = 'highestBoost';
    elements.btnTopBoost.className = 'banner-tab-btn active';
    elements.btnTopEnding.className = 'banner-tab-btn';
    updateStaticTexts();
    renderTopLeaderboard();
  });

  elements.btnTopEnding.addEventListener('click', () => {
    state.leaderboardMode = 'endingSoon';
    elements.btnTopEnding.className = 'banner-tab-btn active';
    elements.btnTopBoost.className = 'banner-tab-btn';
    updateStaticTexts();
    renderTopLeaderboard();
  });

  elements.categoryPills.addEventListener('click', (e) => {
    const btn = e.target.closest('.pill-btn');
    if (!btn) return;
    
    document.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    state.selectedCategory = btn.dataset.category;
    applyFilters();
  });

  elements.searchInput.addEventListener('input', (e) => {
    state.searchTerm = e.target.value.toLowerCase().trim();
    applyFilters();
  });

  elements.btnScenarioYes.addEventListener('click', () => {
    state.selectedOutcome = 'yes';
    elements.btnScenarioYes.className = 'toggle-btn active-yes';
    elements.btnScenarioNo.className = 'toggle-btn';
    renderDashboard();
  });

  elements.btnScenarioNo.addEventListener('click', () => {
    state.selectedOutcome = 'no';
    elements.btnScenarioNo.className = 'toggle-btn active-no';
    elements.btnScenarioYes.className = 'toggle-btn';
    renderDashboard();
  });

  elements.modalCloseBtn.addEventListener('click', closeModal);
  elements.companyModal.addEventListener('click', (e) => {
    if (e.target === elements.companyModal) closeModal();
  });
}

function switchLanguage(lang) {
  if (state.currentLang === lang) return;
  state.currentLang = lang;

  if (lang === 'en') {
    elements.langEnBtn.classList.add('active');
    elements.langFrBtn.classList.remove('active');
    document.documentElement.lang = 'en';
  } else {
    elements.langFrBtn.classList.add('active');
    elements.langEnBtn.classList.remove('active');
    document.documentElement.lang = 'fr';
  }

  applyTheme(state.currentTheme);
  updateStaticTexts();
  renderEventsSidebar();
  renderTopLeaderboard();
  renderDashboard();
}

function updateStaticTexts() {
  const dict = I18N[state.currentLang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  if (state.leaderboardMode === 'highestBoost') {
    elements.topBannerSubtitle.textContent = dict.topBannerSubtitleBoost;
  } else {
    elements.topBannerSubtitle.textContent = dict.topBannerSubtitleEnding;
  }
}

function applyFilters() {
  state.filteredEvents = state.events.filter(ev => {
    const matchesCat = state.selectedCategory === 'all' || ev.category === state.selectedCategory;
    const titleText = typeof ev.title === 'object' ? (ev.title[state.currentLang] || ev.title.en) : ev.title;
    const descText = typeof ev.description === 'object' ? (ev.description[state.currentLang] || ev.description.en) : ev.description;
    
    // Enhanced search: match event title/description OR beneficiary stock tickers/companies
    const beneficiariesYes = getEventBeneficiaries(ev.id, 'yes', state.currentLang);
    const beneficiariesNo = getEventBeneficiaries(ev.id, 'no', state.currentLang);
    const stockSearchText = [...beneficiariesYes, ...beneficiariesNo]
      .map(s => `${s.ticker} ${s.company} ${s.sector}`)
      .join(' ')
      .toLowerCase();

    const matchesSearch = !state.searchTerm || 
      titleText.toLowerCase().includes(state.searchTerm) || 
      descText.toLowerCase().includes(state.searchTerm) ||
      stockSearchText.includes(state.searchTerm) ||
      (ev.tags && ev.tags.some(t => t.toLowerCase().includes(state.searchTerm)));
    
    return matchesCat && matchesSearch;
  });

  const dict = I18N[state.currentLang];
  elements.marketListSubtitle.textContent = `${state.filteredEvents.length} ${dict.eventsCount}`;

  if (state.filteredEvents.length > 0 && !state.filteredEvents.some(e => e.id === state.selectedEventId)) {
    state.selectedEventId = state.filteredEvents[0].id;
  }

  renderEventsSidebar();
  renderTopLeaderboard();
  renderDashboard();
}

function renderTopLeaderboard() {
  elements.topCardsGrid.innerHTML = '';
  const allDatabase = getAllBeneficiaries();

  let allStocksList = [];
  Object.keys(allDatabase).forEach(eventId => {
    const matchingEv = state.events.find(e => e.id === eventId);
    const endDate = matchingEv ? matchingEv.endDate : '2026-12-31';
    
    ['yes', 'no'].forEach(outcome => {
      const stocks = getEventBeneficiaries(eventId, outcome, state.currentLang);
      
      let eventProbPct = 50;
      if (matchingEv) {
        eventProbPct = Math.round((outcome === 'yes' ? matchingEv.yesProbability : matchingEv.noProbability) * 100);
      }

      stocks.forEach(stock => {
        const oddsObj = computeSportsBettingOdds(stock, eventProbPct);
        allStocksList.push({
          ...stock,
          eventId,
          outcome,
          eventProbPct,
          endDate,
          baseOdds: oddsObj.baseOdds,
          boostedOdds: oddsObj.boostedOdds,
          boostPct: oddsObj.boostPct
        });
      });
    });
  });

  // Sort based on selected leaderboard mode:
  if (state.leaderboardMode === 'highestBoost') {
    allStocksList.sort((a, b) => b.boostPct - a.boostPct);
  } else if (state.leaderboardMode === 'endingSoon') {
    allStocksList.sort((a, b) => new Date(a.endDate).getTime() - new Date(b.endDate).getTime());
  }

  const uniqueTop = [];
  const seenTickers = new Set();
  for (const s of allStocksList) {
    if (!seenTickers.has(s.ticker)) {
      seenTickers.add(s.ticker);
      uniqueTop.push(s);
    }
    if (uniqueTop.length >= 3) break;
  }

  uniqueTop.forEach((stock, idx) => {
    const chip = document.createElement('div');
    chip.className = 'top-stock-card';

    // Calculate resolution timer for Ending Soon tab
    const targetDate = new Date(stock.endDate ? `${stock.endDate}T23:59:59Z` : '2026-12-31T23:59:59Z').getTime();
    const now = new Date().getTime();
    const diff = Math.max(0, targetDate - now);
    const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const dayUnit = state.currentLang === 'fr' ? 'j' : 'd';
    const timerHtml = state.leaderboardMode === 'endingSoon' 
      ? `<span class="top-timer-pill">⏱ ${daysLeft}${dayUnit} ${hoursLeft}h</span>` 
      : '';

    chip.innerHTML = `
      <div>
        <div class="top-card-header">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span class="top-rank-badge">#0${idx + 1}</span>
            ${timerHtml}
          </div>
          <div class="odds-pill-mini">
            <span class="base-odds-mini">${stock.baseOdds.toFixed(2)}</span>
            <span class="boosted-odds-mini">${stock.boostedOdds.toFixed(2)}</span>
          </div>
        </div>
        <div class="top-stock-main">
          <span class="top-stock-ticker">${stock.ticker}</span>
          <span class="top-stock-name">${stock.company}</span>
        </div>
        <div class="top-stock-meta">
          <span>${stock.sector}</span>
          <span class="top-stock-prob">${stock.eventProbPct}% ${stock.outcome.toUpperCase()}</span>
        </div>
      </div>
      <div class="top-card-footer">
        <span class="top-priced-in-status">
          ${stock.pricedIn ? stock.pricedIn.status : 'Priced-In: 50%'}
        </span>
        <span class="boost-pill">+${stock.boostPct}% ALPHA</span>
      </div>
    `;

    chip.addEventListener('click', () => {
      state.selectedEventId = stock.eventId;
      state.selectedOutcome = stock.outcome;
      if (stock.outcome === 'yes') {
        elements.btnScenarioYes.className = 'toggle-btn active-yes';
        elements.btnScenarioNo.className = 'toggle-btn';
      } else {
        elements.btnScenarioNo.className = 'toggle-btn active-no';
        elements.btnScenarioYes.className = 'toggle-btn';
      }
      renderEventsSidebar();
      renderDashboard();
    });

    elements.topCardsGrid.appendChild(chip);
  });
}

function renderEventsSidebar() {
  elements.eventsListContainer.innerHTML = '';
  const dict = I18N[state.currentLang];

  if (state.filteredEvents.length === 0) {
    elements.eventsListContainer.innerHTML = `
      <div style="text-align:center; padding: 2rem; color: var(--text-muted); font-size: 0.9rem;">
        ${dict.noEventsFound}
      </div>
    `;
    return;
  }

  state.filteredEvents.forEach(ev => {
    const card = document.createElement('div');
    const isSelected = ev.id === state.selectedEventId;
    card.className = `glass-panel event-card ${isSelected ? 'selected' : ''}`;
    
    const yesProbPct = Math.round(ev.yesProbability * 100);
    const noProbPct = 100 - yesProbPct;
    const formattedVol = formatCurrency(ev.volume);
    const eventTitle = typeof ev.title === 'object' ? (ev.title[state.currentLang] || ev.title.en) : ev.title;

    const labelYes = state.currentLang === 'fr' ? 'OUI' : 'YES';
    const labelNo = state.currentLang === 'fr' ? 'NON' : 'NO';

    card.innerHTML = `
      <div class="event-card-header">
        <span class="event-category-badge">${ev.category}</span>
      </div>
      <div class="event-card-title">${eventTitle}</div>
      <div class="event-prob-bar-container">
        <div class="prob-labels">
          <span class="prob-yes">${labelYes} ${yesProbPct}%</span>
          <span class="prob-no">${labelNo} ${noProbPct}%</span>
        </div>
        <div class="prob-bar">
          <div class="prob-bar-fill" style="width: ${yesProbPct}%;"></div>
        </div>
      </div>
      <div class="event-meta">
        <span>Vol: ${formattedVol}</span>
        <span>End: ${ev.endDate}</span>
      </div>
    `;

    card.addEventListener('click', () => {
      state.selectedEventId = ev.id;
      renderEventsSidebar();
      renderDashboard();
    });

    elements.eventsListContainer.appendChild(card);
  });
}

function renderDashboard() {
  const currentEvent = state.events.find(ev => ev.id === state.selectedEventId);
  if (!currentEvent) return;

  const eventTitle = typeof currentEvent.title === 'object' ? (currentEvent.title[state.currentLang] || currentEvent.title.en) : currentEvent.title;
  const eventDesc = typeof currentEvent.description === 'object' ? (currentEvent.description[state.currentLang] || currentEvent.description.en) : currentEvent.description;

  elements.heroCategory.textContent = currentEvent.category;
  elements.heroTitle.textContent = eventTitle;
  elements.heroDescription.textContent = eventDesc;
  elements.heroVolume.textContent = formatCurrency(currentEvent.volume);

  const activeProb = Math.round((state.selectedOutcome === 'yes' ? currentEvent.yesProbability : currentEvent.noProbability) * 100);
  const outcomeLabel = state.selectedOutcome.toUpperCase();
  
  elements.heroLiveProb.textContent = `${activeProb}% ${outcomeLabel}`;
  elements.heroLiveProbBar.style.width = `${activeProb}%`;

  // Start Ticking Resolution Countdown Timer
  startCountdownTimer(currentEvent.endDate);

  renderBeneficiaries();
}

function renderBeneficiaries() {
  elements.beneficiariesGrid.innerHTML = '';
  const currentEvent = state.events.find(ev => ev.id === state.selectedEventId);
  if (!currentEvent) return;

  const dict = I18N[state.currentLang];
  const beneficiaries = getEventBeneficiaries(currentEvent.id, state.selectedOutcome, state.currentLang);

  const currentProbPct = Math.round((state.selectedOutcome === 'yes' ? currentEvent.yesProbability : currentEvent.noProbability) * 100);
  const subPattern = state.selectedOutcome === 'yes' ? dict.scenarioSubtitleYes : dict.scenarioSubtitleNo;
  elements.beneficiariesSubtitle.textContent = `(${subPattern.replace('{prob}', currentProbPct)})`;

  if (beneficiaries.length === 0) {
    elements.beneficiariesGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
        ${dict.noBeneficiaries}
      </div>
    `;
    return;
  }

  // Calculate Quantitative Odds and sort descending by Boosted Value Odds
  const scoredBeneficiaries = beneficiaries.map(stock => ({
    ...stock,
    oddsObj: computeSportsBettingOdds(stock, currentProbPct)
  }));

  scoredBeneficiaries.sort((a, b) => b.oddsObj.boostedOdds - a.oddsObj.boostedOdds);

  scoredBeneficiaries.forEach(stock => {
    const isGainer = stock.impactType === 'gainer';
    const card = document.createElement('div');
    card.className = `glass-panel stock-card ${isGainer ? 'gainer' : 'risk'}`;

    const badgeLabel = isGainer ? dict.badgeBeneficiary : dict.badgeRisk;
    const pricedInLevel = stock.pricedIn ? stock.pricedIn.level : 'moderate';
    const pricedInPct = stock.pricedIn ? stock.pricedIn.pct : 50;
    const pricedInStatus = stock.pricedIn ? stock.pricedIn.status : '50%';

    const signalScore = stock.impactScore || 50;
    const signalConviction = signalScore >= 85 ? dict.signalStrong : signalScore >= 70 ? dict.signalModerate : dict.signalWeak;

    const baseOddsVal = stock.oddsObj.baseOdds.toFixed(2);
    const boostedOddsVal = stock.oddsObj.boostedOdds.toFixed(2);

    card.innerHTML = `
      <div>
        <div class="stock-card-top">
          <div class="ticker-group">
            <span class="ticker-badge">${stock.ticker}</span>
            <span class="impact-badge ${isGainer ? 'gainer' : 'risk'}">${badgeLabel}</span>
          </div>
          <div class="odds-container">
            <span class="base-odds">${baseOddsVal}</span>
            <span class="boosted-odds">${boostedOddsVal}</span>
            <span class="boost-pill">+${stock.oddsObj.boostPct}% ALPHA</span>
          </div>
        </div>
        
        <div class="company-name-row">
          <div class="company-name">${stock.company}</div>
        </div>
        
        <div class="company-sector">${stock.sector} &bull; Cap: ${stock.marketCap}</div>

        <!-- DUAL GAUGES CONTAINER (Priced-In & Signal Strength) -->
        <div class="dual-gauges-grid">
          <!-- GAUGE 1: Market Priced-In -->
          <div class="gauge-card">
            <div class="gauge-top-row">
              <span class="gauge-title">${dict.pricedInLabel}</span>
              <span class="gauge-value-text ${pricedInLevel}">${pricedInPct}%</span>
            </div>
            <div class="gauge-track">
              <div class="gauge-fill fill-priced-in ${pricedInLevel}" style="width: ${pricedInPct}%;"></div>
            </div>
            <div class="gauge-subtitle-text">${pricedInStatus}</div>
          </div>

          <!-- GAUGE 2: Signal Strength -->
          <div class="gauge-card">
            <div class="gauge-top-row">
              <span class="gauge-title">${dict.signalLabel}</span>
              <span class="gauge-value-text signal-high">${signalScore}%</span>
            </div>
            <div class="gauge-track">
              <div class="gauge-fill fill-signal" style="width: ${signalScore}%;"></div>
            </div>
            <div class="gauge-subtitle-text">${signalConviction}</div>
          </div>
        </div>

        <div class="impact-metric-box">
          <div class="metric-row">
            <span class="metric-label">${dict.metricSensitivity}</span>
            <span class="metric-value ${isGainer ? 'text-green' : 'text-red'}">${stock.sensitivity}</span>
          </div>
        </div>

        <p class="rationale-preview">${stock.rationale}</p>
      </div>

      <button class="analyze-btn">${dict.btnDeepAnalysis}</button>
    `;

    card.querySelector('.analyze-btn').addEventListener('click', () => {
      openCompanyModal(stock, currentProbPct);
    });

    elements.beneficiariesGrid.appendChild(card);
  });
}

function openCompanyModal(stock, currentProbPct = 50) {
  const dict = I18N[state.currentLang];
  const oddsObj = stock.oddsObj || computeSportsBettingOdds(stock, currentProbPct);
  elements.modalTicker.textContent = stock.ticker;
  elements.modalCompanyName.textContent = stock.company;
  elements.modalSector.textContent = stock.sector;

  elements.modalBaseOdds.textContent = oddsObj.baseOdds.toFixed(2);
  elements.modalBoostedOdds.textContent = oddsObj.boostedOdds.toFixed(2);
  elements.modalBoostPill.textContent = `+${oddsObj.boostPct}% SURCOTE`;
  
  const gainPct = Math.round((oddsObj.boostedOdds - 1) * 100);
  elements.modalOddsSubDetail.textContent = state.currentLang === 'fr' 
    ? `Cote Base Polymarket ${oddsObj.baseOdds.toFixed(2)} ➔ Surcote +${oddsObj.boostPct}% ➔ Cote Action ${oddsObj.boostedOdds.toFixed(2)} | Gain Potentiel : x${oddsObj.boostedOdds.toFixed(2)} (+${gainPct}%)`
    : `Base Polymarket ${oddsObj.baseOdds.toFixed(2)} ➔ Surcote +${oddsObj.boostPct}% ➔ Equity Target ${oddsObj.boostedOdds.toFixed(2)} | Potential Payout: x${oddsObj.boostedOdds.toFixed(2)} (+${gainPct}%)`;

  const pricedInPct = stock.pricedIn ? stock.pricedIn.pct : 50;
  const pricedInStatus = stock.pricedIn ? stock.pricedIn.status : '50%';
  const signalScore = stock.impactScore || 50;
  const signalConviction = signalScore >= 85 ? dict.signalStrong : signalScore >= 70 ? dict.signalModerate : dict.signalWeak;

  elements.modalPricedInStatus.textContent = `${pricedInPct}%`;
  elements.modalPricedInBar.style.width = `${pricedInPct}%`;
  elements.modalPricedInStatusText.textContent = pricedInStatus;

  elements.modalSignalScore.textContent = `${signalScore}%`;
  elements.modalSignalBar.style.width = `${signalScore}%`;
  elements.modalSignalStatusText.textContent = signalConviction;

  if (stock.pricedIn) {
    elements.modalPricedInMove.textContent = stock.pricedIn.recentMove || '';
    elements.modalPricedInAsymmetry.textContent = stock.pricedIn.asymmetry || '';
  } else {
    elements.modalPricedInMove.textContent = 'Standard baseline correlation.';
    elements.modalPricedInAsymmetry.textContent = 'Balanced risk/reward.';
  }

  elements.modalRationale.textContent = stock.rationale;
  elements.modalCatalyst.textContent = stock.catalyst;
  elements.modalMcap.textContent = stock.marketCap;
  
  if (stock.keyMetrics) {
    elements.modalExposure.textContent = stock.keyMetrics.revenueExposure || (state.currentLang === 'fr' ? 'Non disponible' : 'N/A');
    elements.modalDebt.textContent = stock.keyMetrics.debtRatio || 'Standard';
  } else {
    elements.modalExposure.textContent = state.currentLang === 'fr' ? 'Macro Sectoriel' : 'Macro Sector';
    elements.modalDebt.textContent = 'Standard';
  }
  
  elements.modalSensitivity.textContent = stock.sensitivity;
  elements.modalRisks.textContent = stock.risks || (state.currentLang === 'fr' ? 'Volatilité générale du marché.' : 'General market volatility.');

  elements.companyModal.classList.add('active');
}

function closeModal() {
  elements.companyModal.classList.remove('active');
}

function formatCurrency(amount) {
  if (amount >= 1e9) return `$${(amount / 1e9).toFixed(1)}B`;
  if (amount >= 1e6) return `$${(amount / 1e6).toFixed(1)}M`;
  if (amount >= 1e3) return `$${(amount / 1e3).toFixed(0)}K`;
  return `$${amount}`;
}

// Launch application on DOMReady
document.addEventListener('DOMContentLoaded', initApp);
