/**
 * Polymarket API Service
 * Fetches live prediction market data from Polymarket Gamma API with automatic offline / fallback protection.
 * Supports dual language (EN / FR) for events.
 */

const POLYMARKET_GAMMA_URL = 'https://gamma-api.polymarket.com/events';

// Curated realistic Polymarket fallback data with high liquid volume & market events
const FALLBACK_POLYMARKET_EVENTS = [
  {
    id: 'poly-101',
    title: {
      en: 'Federal Reserve Cuts Interest Rates by 50bps in Q3 2026',
      fr: 'La Réserve Fédérale baisse ses taux d\'intérêt de 50 points de base au T3 2026'
    },
    description: {
      en: 'Will the US Federal Reserve cut the federal funds target rate by at least 50 basis points before September 30, 2026?',
      fr: 'La Réserve Fédérale américaine réduira-t-elle son taux directeur d\'au moins 50 points de base avant le 30 septembre 2026 ?'
    },
    category: 'Macro & Fed',
    volume: 18450000,
    endDate: '2026-09-30',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80',
    icon: '🏛️',
    outcomes: ['Yes', 'No'],
    yesProbability: 0.64,
    noProbability: 0.36,
    tags: ['fed', 'interest rates', 'macro', 'banking', 'real estate']
  },
  {
    id: 'poly-102',
    title: {
      en: 'US Enacts 25% Tariff on Advanced AI Hardware Exports',
      fr: 'Les É.U. promulguent un tarif douanier de 25% sur les exportations de matériel d\'IA avancé'
    },
    description: {
      en: 'Will the United States pass federal legislation or executive order establishing new 25%+ export tariffs on high-performance GPU chips and AI accelerators in 2026?',
      fr: 'Les États-Unis adopteront-ils une loi fédérale ou un décret établissant de nouveaux tarifs d\'exportation de 25%+ sur les puces GPU à haute performance et les accélérateurs d\'IA en 2026 ?'
    },
    category: 'Tech & AI Policy',
    volume: 9820000,
    endDate: '2026-12-31',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    icon: '⚡',
    outcomes: ['Yes', 'No'],
    yesProbability: 0.42,
    noProbability: 0.58,
    tags: ['ai', 'semiconductors', 'tariffs', 'tech', 'hardware']
  },
  {
    id: 'poly-103',
    title: {
      en: 'US National Defense Budget Passes $950B for Fiscal Year 2027',
      fr: 'Le budget de la défense nationale US dépasse 950 Mds$ pour l\'exercice 2027'
    },
    description: {
      en: 'Will the US Congress approve a defense budget exceeding $950 Billion for fiscal year 2027?',
      fr: 'Le Congrès américain approuvera-t-il un budget de la défense dépassant 950 milliards de dollars pour l\'exercice 2027 ?'
    },
    category: 'Defense & Geopolitics',
    volume: 14200000,
    endDate: '2026-11-15',
    image: 'https://images.unsplash.com/photo-1579912437766-7892db673752?auto=format&fit=crop&w=600&q=80',
    icon: '🛡️',
    outcomes: ['Yes', 'No'],
    yesProbability: 0.78,
    noProbability: 0.22,
    tags: ['defense', 'military', 'aerospace', 'spending']
  },
  {
    id: 'poly-104',
    title: {
      en: 'OPEC+ Announces Additional 1M BPD Crude Oil Production Cut',
      fr: 'L\'OPEP+ annonce une baisse supplémentaire de production de 1M de barils/jour'
    },
    description: {
      en: 'Will OPEC+ alliance officially announce a formal production cut of 1,000,000 barrels per day or more at their upcoming summit?',
      fr: 'L\'alliance OPEP+ annoncera-t-elle officiellement une réduction formelle de production de 1 000 000 de barils par jour ou plus lors de son prochain sommet ?'
    },
    category: 'Energy & Climate',
    volume: 8730000,
    endDate: '2026-08-31',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
    icon: '🛢️',
    outcomes: ['Yes', 'No'],
    yesProbability: 0.35,
    noProbability: 0.65,
    tags: ['energy', 'oil', 'opec', 'petroleum']
  },
  {
    id: 'poly-105',
    title: {
      en: 'US Corporate Tax Rate Reduced to 18%',
      fr: 'Le taux de l\'impôt américain sur les sociétés réduit à 18%'
    },
    description: {
      en: 'Will US federal tax reform lower the statutory federal corporate income tax rate from 21% to 18% or lower before end of 2026?',
      fr: 'La réforme fiscale fédérale américaine abaissera-t-elle le taux de l\'impôt sur les sociétés de 21% à 18% ou moins avant la fin de 2026 ?'
    },
    category: 'Politics & Taxes',
    volume: 21500000,
    endDate: '2026-12-31',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80',
    icon: '📈',
    outcomes: ['Yes', 'No'],
    yesProbability: 0.53,
    noProbability: 0.47,
    tags: ['taxes', 'corporate', 'politics', 'equities']
  },
  {
    id: 'poly-106',
    title: {
      en: 'FDA Approves First CRISPR Multi-Gene Therapy for Solid Tumors',
      fr: 'La FDA approuve la première thérapie génique CRISPR pour tumeurs solides'
    },
    description: {
      en: 'Will the US Food & Drug Administration grant full approval for an allogeneic CRISPR solid tumor cell therapy by Q4 2026?',
      fr: 'La US Food & Drug Administration accordera-t-elle l\'approbation complète pour une thérapie cellulaire CRISPR allogénique contre les tumeurs solides d\'ici le T4 2026 ?'
    },
    category: 'Biotech & Healthcare',
    volume: 6400000,
    endDate: '2026-10-30',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80',
    icon: '🧬',
    outcomes: ['Yes', 'No'],
    yesProbability: 0.71,
    noProbability: 0.29,
    tags: ['biotech', 'fda', 'crispr', 'cancer', 'healthcare']
  },
  {
    id: 'poly-107',
    title: {
      en: 'US Treasury Establishes Strategic Bitcoin Reserve Fund',
      fr: 'Le Trésor américain crée un fonds de réserve stratégique en Bitcoin'
    },
    description: {
      en: 'Will the US Department of the Treasury officially authorize acquiring Bitcoin as a national strategic reserve asset in 2026?',
      fr: 'Le département du Trésor des États-Unis autorisera-t-il officiellement l\'acquisition de Bitcoin comme actif de réserve stratégique national en 2026 ?'
    },
    category: 'Crypto & Finance',
    volume: 34100000,
    endDate: '2026-12-31',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
    icon: '🪙',
    outcomes: ['Yes', 'No'],
    yesProbability: 0.29,
    noProbability: 0.71,
    tags: ['bitcoin', 'crypto', 'treasury', 'reserve', 'finance']
  },
  {
    id: 'poly-108',
    title: {
      en: 'US Congress Passes Comprehensive Stablecoin Regulatory Framework',
      fr: 'Le Congrès américain adopte un cadre réglementaire complet pour les stablecoins'
    },
    description: {
      en: 'Will federal US legislation formally establishing regulatory oversight and reserve requirements for dollar-backed stablecoins pass into law in 2026?',
      fr: 'Une loi fédérale américaine établissant officiellement la surveillance et les exigences de réserve pour les stablecoins sera-t-elle votée en 2026 ?'
    },
    category: 'Crypto & Finance',
    volume: 28900000,
    endDate: '2026-11-30',
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=600&q=80',
    icon: '🪙',
    outcomes: ['Yes', 'No'],
    yesProbability: 0.68,
    noProbability: 0.32,
    tags: ['stablecoin', 'crypto', 'sec', 'congress', 'coinbase', 'visa']
  },
  {
    id: 'poly-109',
    title: {
      en: 'EU Approves AI Act Exemption for Commercial Open Source Models',
      fr: 'L\'UE approuve une exemption de l\'AI Act pour les modèles Open Source commerciaux'
    },
    description: {
      en: 'Will the European Union regulatory authority grant official liability exemptions for open-weight artificial intelligence foundation models developed in Europe?',
      fr: 'L\'autorité de régulation de l\'Union Européenne accordera-t-elle des exemptions de responsabilité pour les modèles d\'IA open-source développés en Europe ?'
    },
    category: 'Tech & AI Policy',
    volume: 11300000,
    endDate: '2026-12-15',
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80',
    icon: '💻',
    outcomes: ['Yes', 'No'],
    yesProbability: 0.58,
    noProbability: 0.42,
    tags: ['ai', 'eu', 'open source', 'meta', 'sap', 'software']
  },
  {
    id: 'poly-110',
    title: {
      en: 'Global Semiconductor Alliance Standardizes 2nm GAAFET Architecture',
      fr: 'L\'Alliance mondiale des semi-conducteurs standardise l\'architecture 2nm GAAFET'
    },
    description: {
      en: 'Will leading semiconductor foundries TSMC, Samsung, and Intel reach a binding global manufacturing standard for 2nm Gate-All-Around (GAA) nodes in 2026?',
      fr: 'Les principaux fondeurs TSMC, Samsung et Intel établiront-ils une norme de fabrication mondiale pour les puces 2nm GAAFET en 2026 ?'
    },
    category: 'Tech & AI Policy',
    volume: 16800000,
    endDate: '2026-10-15',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
    icon: '💻',
    outcomes: ['Yes', 'No'],
    yesProbability: 0.62,
    noProbability: 0.38,
    tags: ['semiconductors', 'tsmc', 'asml', '2nm', 'hardware', 'chips']
  }
];

async function fetchPolymarketEvents() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1000); // 1s fast network timeout for instant load

    const response = await fetch(`${POLYMARKET_GAMMA_URL}?limit=25&active=true&closed=false&archived=false`, {
      headers: { 'Accept': 'application/json' },
      signal: controller.signal
    }).catch(() => null);

    clearTimeout(timeoutId);

    if (!response || !response.ok) {
      return { events: FALLBACK_POLYMARKET_EVENTS, isLive: false };
    }

    const rawData = await response.json();
    if (!Array.isArray(rawData) || rawData.length === 0) {
      return { events: FALLBACK_POLYMARKET_EVENTS, isLive: false };
    }

    const processedEvents = rawData
      .filter(ev => ev.title && (ev.markets && ev.markets.length > 0))
      .map((ev, index) => {
        const primaryMarket = ev.markets[0] || {};
        let yesProb = 0.5;
        let noProb = 0.5;

        try {
          let outcomePrices = primaryMarket.outcomePrices;
          if (typeof outcomePrices === 'string') {
            outcomePrices = JSON.parse(outcomePrices);
          }
          if (Array.isArray(outcomePrices) && outcomePrices.length >= 2) {
            yesProb = parseFloat(outcomePrices[0]) || 0.5;
            noProb = parseFloat(outcomePrices[1]) || (1 - yesProb);
          }
        } catch (e) {
          yesProb = 0.5;
          noProb = 0.5;
        }

        const category = mapCategory(ev.category || ev.title);

        return {
          id: ev.id || `live-${index}`,
          title: {
            en: ev.title,
            fr: ev.title // Fallback title
          },
          description: {
            en: ev.description || primaryMarket.question || 'Polymarket prediction market event.',
            fr: ev.description || primaryMarket.question || 'Événement de marché de prédiction Polymarket.'
          },
          category: category,
          volume: parseFloat(ev.volume || primaryMarket.volume || 1000000),
          endDate: ev.endDate ? ev.endDate.split('T')[0] : '2026-12-31',
          image: ev.image || ev.icon || getCategoryImage(category),
          icon: getCategoryIcon(category),
          outcomes: ['Yes', 'No'],
          yesProbability: Math.round(yesProb * 100) / 100,
          noProbability: Math.round(noProb * 100) / 100,
          tags: extractTags(ev.title, category)
        };
      });

    if (processedEvents.length === 0) {
      return { events: FALLBACK_POLYMARKET_EVENTS, isLive: false };
    }

    return { events: processedEvents, isLive: true };

  } catch (error) {
    console.warn('Polymarket Live API fallback mode active.', error);
    return { events: FALLBACK_POLYMARKET_EVENTS, isLive: false };
  }
}

function mapCategory(catString = '') {
  const s = catString.toLowerCase();
  if (s.includes('fed') || s.includes('interest') || s.includes('econ') || s.includes('cpi') || s.includes('rate')) return 'Macro & Fed';
  if (s.includes('tech') || s.includes('ai') || s.includes('gpu') || s.includes('semiconductor') || s.includes('tariff')) return 'Tech & AI Policy';
  if (s.includes('defense') || s.includes('military') || s.includes('war') || s.includes('geopolitics')) return 'Defense & Geopolitics';
  if (s.includes('oil') || s.includes('energy') || s.includes('gas') || s.includes('climate') || s.includes('opec')) return 'Energy & Climate';
  if (s.includes('tax') || s.includes('election') || s.includes('politics') || s.includes('congress') || s.includes('biden') || s.includes('trump')) return 'Politics & Taxes';
  if (s.includes('health') || s.includes('fda') || s.includes('drug') || s.includes('pharma') || s.includes('biotech')) return 'Biotech & Healthcare';
  if (s.includes('crypto') || s.includes('btc') || s.includes('bitcoin') || s.includes('eth') || s.includes('sol')) return 'Crypto & Finance';
  return 'Macro & Fed';
}

function getCategoryIcon(cat) {
  switch (cat) {
    case 'Macro & Fed': return '🏛️';
    case 'Tech & AI Policy': return '⚡';
    case 'Defense & Geopolitics': return '🛡️';
    case 'Energy & Climate': return '🛢️';
    case 'Politics & Taxes': return '📈';
    case 'Biotech & Healthcare': return '🧬';
    case 'Crypto & Finance': return '🪙';
    default: return '📊';
  }
}

function getCategoryImage(cat) {
  switch (cat) {
    case 'Macro & Fed': return 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80';
    case 'Tech & AI Policy': return 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80';
    case 'Defense & Geopolitics': return 'https://images.unsplash.com/photo-1579912437766-7892db673752?auto=format&fit=crop&w=600&q=80';
    case 'Energy & Climate': return 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80';
    case 'Politics & Taxes': return 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80';
    case 'Biotech & Healthcare': return 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80';
    case 'Crypto & Finance': return 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80';
    default: return 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=80';
  }
}

function extractTags(title = '', category = '') {
  const words = title.toLowerCase().split(/\s+/);
  const tags = [category.toLowerCase()];
  if (words.includes('fed') || words.includes('rates')) tags.push('rates');
  if (words.includes('tariff') || words.includes('trade')) tags.push('trade');
  if (words.includes('ai') || words.includes('gpu')) tags.push('ai');
  return tags;
}

if (typeof window !== 'undefined') {
  window.FALLBACK_POLYMARKET_EVENTS = FALLBACK_POLYMARKET_EVENTS;
  window.fetchPolymarketEvents = fetchPolymarketEvents;
}
