/**
 * Stock & Company Beneficiary Mapping Engine
 * Correlates Polymarket event topics with corporate equities, financial fundamentals, macro impacts,
 * AND Market Priced-In Gauge (Indice de Pricage par le Marché).
 * Supports dual language (EN / FR).
 */

const BENEFICIARY_DATABASE = {
  // 1. Fed Interest Rate Cut (50bps)
  'poly-101': {
    yes: [
      {
        ticker: 'DHI',
        company: 'D.R. Horton Inc.',
        sector: {
          en: 'Real Estate & Homebuilding',
          fr: 'Immobilier & Construction de Logements'
        },
        marketCap: '$48.5B',
        impactType: 'gainer',
        impactScore: 94,
        sensitivityVal: 4.2,
        sensitivity: {
          en: '+4.2% per -25bps cut',
          fr: '+4,2% par baisse de 25 pb'
        },
        pricedIn: {
          pct: 42,
          status: {
            en: 'Partially Priced-In (42%)',
            fr: 'Partiellement Intégré (42%)'
          },
          level: 'moderate',
          recentMove: {
            en: 'Stock rose +4.1% over 30 days while Polymarket YES odds surged from 35% to 64%. Equity market lagging prediction odds.',
            fr: 'L\'action a gagné +4,1% sur 30 jours pendant que les chances OUI Polymarket ont bondi de 35% à 64%. Les actions accusent un retard.'
          },
          asymmetry: {
            en: 'High remaining upside (+7% to +10%) if 50bps cut resolves YES.',
            fr: 'Potentiel de hausse résiduel important (+7% à +10%) si la baisse de 50 pb est confirmée.'
          }
        },
        rationale: {
          en: 'Lower Federal Reserve benchmark rates directly drive down 30-year mortgage rates. D.R. Horton gains immediate home order volume, margin expansion from reduced buyer rate buy-downs, and inventory turnover velocity.',
          fr: 'La baisse des taux directeurs de la Réserve Fédérale réduit directement les taux hypothécaires à 30 ans. D.R. Horton bénéficie d\'un volume de commandes immédiat, d\'une expansion des marges et d\'une rotation accélérée des stocks.'
        },
        catalyst: {
          en: 'Mortgage affordability index bounce + surge in new home construction permits.',
          fr: 'Rebond de l\'indice d\'accessibilité hypothécaire + hausse des permis de construire.'
        },
        keyMetrics: {
          revenueExposure: { en: '92% US Residential Mortgages', fr: '92% Hypothèques Résidentielles US' },
          debtRatio: '0.28 D/E'
        },
        risks: {
          en: 'Inflation re-acceleration triggering sudden Fed pause.',
          fr: 'Réaccélération de l\'inflation provoquant une pause inattendue de la Fed.'
        }
      },
      {
        ticker: 'KRE',
        company: 'SPDR S&P Regional Banking ETF',
        sector: {
          en: 'Regional Banking & Financials',
          fr: 'Banques Régionales & Services Financiers'
        },
        marketCap: '$4.2B ETF',
        impactType: 'gainer',
        impactScore: 88,
        sensitivityVal: 3.5,
        sensitivity: {
          en: '+3.5% per -25bps cut',
          fr: '+3,5% par baisse de 25 pb'
        },
        pricedIn: {
          pct: 28,
          status: {
            en: 'Low Priced-In / High Asymmetry (28%)',
            fr: 'Faiblement Intégré / Forte Asymétrie (28%)'
          },
          level: 'low',
          recentMove: {
            en: 'Regional bank ETF flat (+0.8% 30d) due to CRE fear overhang, despite Polymarket odds rising. Significant gap vs prediction probability.',
            fr: 'L\'ETF des banques régionales reste quasi stable (+0,8% sur 30j) par crainte sur l\'immobilier. Écart important avec la probabilité Polymarket.'
          },
          asymmetry: {
            en: 'Strong rally potential (+12%+) on actual rate cuts relieving CRE deposit stress.',
            fr: 'Fort potentiel de rebond (+12%+) lors des baisses réelles réduisant la pression sur les dépôts.'
          }
        },
        rationale: {
          en: 'Substantial rate cuts relieve unrealized losses on commercial real estate (CRE) balance sheets and lower deposit funding costs. Regional banks see deposit flight stabilize and net interest margin (NIM) pressure ease.',
          fr: 'Des baisses de taux substantielles soulagent les pertes non réalisées sur l\'immobilier commercial et réduisent le coût des dépôts. La fuite des dépôts se stabilise et la pression sur la marge nette d\'intérêt s\'allège.'
        },
        catalyst: {
          en: 'Lower cost of funds for regional bank deposits + reduced commercial loan default rates.',
          fr: 'Réduction du coût des ressources sur les dépôts bancaires + baisse des taux de défaut sur les prêts commerciaux.'
        },
        keyMetrics: {
          revenueExposure: { en: '100% US Banking Sector', fr: '100% Secteur Bancaire Américain' },
          debtRatio: 'N/A (ETF)'
        },
        risks: {
          en: 'Credit defaults in legacy office CRE debt prior to rate transmission.',
          fr: 'Défauts de crédit dans la dette d\'immobilier de bureau avant la transmission des taux.'
        }
      },
      {
        ticker: 'PLTR',
        company: 'Palantir Technologies Inc.',
        sector: {
          en: 'High-Growth Tech & Software',
          fr: 'Technologies & Logiciels à Forte Croissance'
        },
        marketCap: '$92.0B',
        impactType: 'gainer',
        impactScore: 82,
        sensitivityVal: 3.8,
        sensitivity: {
          en: '+3.8% discount rate expansion',
          fr: '+3,8% d\'expansion par baisse du taux d\'actualisation'
        },
        pricedIn: {
          pct: 78,
          status: {
            en: 'Largely Priced-In (78%)',
            fr: 'Largement Intégré (78%)'
          },
          level: 'high',
          recentMove: {
            en: 'Stock rallied +18.5% over the past month. Growth multiple expansion has already discounted lower risk-free rate environments.',
            fr: 'L\'action a grimpé de +18,5% le mois dernier. L\'expansion des multiples intègre déjà un environnement de taux bas.'
          },
          asymmetry: {
            en: 'Limited incremental upside from rate news; sell-the-news risk present.',
            fr: 'Potentiel de hausse supplémentaire limité ; risque de vente sur nouvelle.'
          }
        },
        rationale: {
          en: 'High multiple growth software stocks experience strong valuation expansion as lower interest rates decrease the risk-free rate used in Discounted Cash Flow (DCF) valuation models.',
          fr: 'Les actions technologiques à fort multiple connaissent une hausse de valorisation à mesure que la baisse des taux diminue le taux sans risque utilisé dans les modèles d\'actualisation des flux de trésorerie (DCF).'
        },
        catalyst: {
          en: 'Multiple expansion from lower cost of capital + corporate AI software budget acceleration.',
          fr: 'Expansion des multiples via le coût du capital + accélération des budgets logiciels d\'IA entreprise.'
        },
        keyMetrics: {
          revenueExposure: { en: '54% Enterprise / 46% Gov', fr: '54% Entreprises / 46% Gouvernement' },
          debtRatio: '0.00 Debt'
        },
        risks: {
          en: 'Broader enterprise IT budget tightening if economic slowdown worsens.',
          fr: 'Resserrement généralisé des budgets IT en cas de ralentissement économique accru.'
        }
      }
    ],
    no: [
      {
        ticker: 'JPM',
        company: 'JPMorgan Chase & Co.',
        sector: {
          en: 'Money Center Banking',
          fr: 'Grande Banque d\'Affaires & Commerciale'
        },
        marketCap: '$590B',
        impactType: 'gainer',
        impactScore: 85,
        sensitivityVal: 2.1,
        sensitivity: {
          en: '+2.1% net interest income boost',
          fr: '+2,1% de hausse du revenu net d\'intérêts'
        },
        pricedIn: {
          pct: 65,
          status: {
            en: 'Moderately Priced-In (65%)',
            fr: 'Modérément Intégré (65%)'
          },
          level: 'moderate',
          recentMove: {
            en: 'JPM shares held firm (+2.4% 30d) as consensus expects rates to stay higher for longer. NIM yields already reflected in guidance.',
            fr: 'JPM est resté solide (+2,4% sur 30j) car le marché anticipe des taux élevés durables. Les marges de NIM sont déjà guidées.'
          },
          asymmetry: {
            en: 'Modest upside (+3%) if Fed skips rate cuts; downside if surprise cuts occur.',
            fr: 'Hausse modérée (+3%) si la Fed ne baisse pas ses taux ; baisse en cas de coupe surprise.'
          }
        },
        rationale: {
          en: 'Higher-for-longer interest rates allow mega banks with massive sticky deposit bases to maintain elevated Net Interest Margin (NIM) yields on floating rate loans.',
          fr: 'Des taux maintenus élevés plus longtemps permettent aux mégabanques disposant de dépôts stables de préserver des marges nettes d\'intérêts élevées sur les prêts à taux variable.'
        },
        catalyst: {
          en: 'Continued elevated interest income on institutional loans and cash deposits.',
          fr: 'Maintien de revenus d\'intérêts élevés sur les prêts institutionnels et les dépôts.'
        },
        keyMetrics: {
          revenueExposure: { en: 'Global Diversified Financials', fr: 'Services Financiers Diversifiés Mondiaux' },
          debtRatio: 'Tier 1 Capitalized'
        },
        risks: {
          en: 'Higher corporate debt refinancing defaults.',
          fr: 'Augmentation des défauts de refinancement de la dette des entreprises.'
        }
      },
      {
        ticker: 'DHI',
        company: 'D.R. Horton Inc.',
        sector: {
          en: 'Real Estate & Homebuilding',
          fr: 'Immobilier & Construction'
        },
        marketCap: '$48.5B',
        impactType: 'risk',
        impactScore: 89,
        sensitivityVal: 4.8,
        sensitivity: {
          en: '-4.8% on persistent high mortgage rates',
          fr: '-4,8% sous l\'effet de taux hypothécaires élevés'
        },
        pricedIn: {
          pct: 35,
          status: {
            en: 'Under-Priced Risk (35%)',
            fr: 'Risque Sous-Évalué (35%)'
          },
          level: 'low',
          recentMove: {
            en: 'Homebuilders have not yet discounted the NO scenario (no rate cuts). A NO resolution would shock mortgage-sensitive stocks.',
            fr: 'Les constructeurs n\'ont pas encore intégré le scénario NON (pas de baisse). Une résolution NON choquerait le secteur.'
          },
          asymmetry: {
            en: 'High downside risk (-8% to -12%) if rate cuts fail to materialize.',
            fr: 'Risque de baisse élevé (-8% à -12%) si les baisses de taux ne se concrétisent pas.'
          }
        },
        rationale: {
          en: 'Higher-for-longer Fed policy locks mortgage rates above 6.8%, dampening buyer demand, increasing cancellation rates, and forcing homebuilders to spend heavily on rate buydown incentives.',
          fr: 'La politique prolongée de la Fed maintient les taux hypothécaires au-dessus de 6,8%, freinant la demande d\'acheteurs et forçant les constructeurs à financer des incitations aux rabais de taux.'
        },
        catalyst: {
          en: 'Buyer affordability freeze and delayed housing inventory turnover.',
          fr: 'Gel de l\'accessibilité à la propriété et ralentissement de la rotation des stocks de logements.'
        },
        keyMetrics: {
          revenueExposure: { en: '92% US Residential Mortgages', fr: '92% Hypothèques Résidentielles US' },
          debtRatio: '0.28 D/E'
        },
        risks: {
          en: 'Subsidized builder financing erosion.',
          fr: 'Érosion des incitations financières des constructeurs.'
        }
      }
    ]
  },

  // 2. US 25% AI Hardware Tariff
  'poly-102': {
    yes: [
      {
        ticker: 'INTC',
        company: 'Intel Corporation',
        sector: {
          en: 'Domestic Semiconductor Manufacturing',
          fr: 'Fabrication Domestique de Semiconducteurs'
        },
        marketCap: '$105B',
        impactType: 'gainer',
        impactScore: 91,
        sensitivityVal: 5.5,
        sensitivity: {
          en: '+5.5% domestic fab incentive preference',
          fr: '+5,5% de préférence pour les fonderies locales'
        },
        pricedIn: {
          pct: 22,
          status: {
            en: 'Unpriced Opportunity (22%)',
            fr: 'Opportunité Non Intégrée (22%)'
          },
          level: 'low',
          recentMove: {
            en: 'Intel stock down -3.2% recently due to node transition concerns. Tariff protection benefits completely unpriced by equity markets.',
            fr: 'L\'action Intel a baissé de -3,2% récemment. Les bénéfices de la protection douanière ne sont pas du tout intégrés.'
          },
          asymmetry: {
            en: 'Massive asymmetric upside potential (+15%+) upon tariff enactment.',
            fr: 'Potentiel de hausse asymétrique massif (+15%+) lors de la promulgation des tarifs.'
          }
        },
        rationale: {
          en: 'Tariffs on imported foreign AI chips drastically boost demand for US domestic silicon manufacturing (CHIPS Act foundries). Intel Foundry Services (IFS) becomes the prime domestic alternative.',
          fr: 'Les droits de douane sur les puces d\'IA importées stimulent fortement la demande pour les fonderies américaines (loi CHIPS Act). Intel Foundry Services devient l\'alternative domestique clé.'
        },
        catalyst: {
          en: 'Onshoring of GPU packaging contracts by US hyperscalers.',
          fr: 'Rapatriement des contrats de packaging de GPU par les géants de la Tech US.'
        },
        keyMetrics: {
          revenueExposure: { en: 'US Domestic Fab Capacity', fr: 'Capacité de Fonderie US' },
          debtRatio: '0.35 D/E'
        },
        risks: {
          en: 'Yield ramp delays in advanced node production.',
          fr: 'Retards dans le rendement de production des gravures avancées.'
        }
      },
      {
        ticker: 'NVDA',
        company: 'NVIDIA Corporation',
        sector: {
          en: 'AI GPUs & Accelerators',
          fr: 'Processeurs GPU & Accélérateurs d\'IA'
        },
        marketCap: '$3.10T',
        impactType: 'risk',
        impactScore: 90,
        sensitivityVal: 6.2,
        sensitivity: {
          en: '-6.2% margin compression on foreign packaging',
          fr: '-6,2% de compression des marges sur l\'assemblage étranger'
        },
        pricedIn: {
          pct: 31,
          status: {
            en: 'Low Priced-In Tariff Risk (31%)',
            fr: 'Risque Douanier Faiblement Intégré (31%)'
          },
          level: 'low',
          recentMove: {
            en: 'NVIDIA trades near ATHs (+12% 30d). Traders ignoring 42% Polymarket tariff odds.',
            fr: 'NVIDIA cote proche des sommets (+12% sur 30j). Les traders ignorent la probabilité de 42% sur Polymarket.'
          },
          asymmetry: {
            en: 'Significant surprise margin downside (-7% to -10%) if tariffs pass.',
            fr: 'Baisse de marge surprise importante (-7% à -10%) si les tarifs sont votés.'
          }
        },
        rationale: {
          en: 'Export tariffs and supply chain duty surcharges increase bill of materials for international GPU assemblies, squeezing gross margins and triggering customer inventory pushbacks.',
          fr: 'Les taxes d\'exportation et surcharges douanières augmentent les coûts d\'assemblage des GPU internationaux, réduisant les marges brutes et freinant les commandes.'
        },
        catalyst: {
          en: 'Retaliatory trade restrictions in Asian enterprise hardware markets.',
          fr: 'Restrictions commerciales de rétorsion sur les marchés d\'équipement asiatiques.'
        },
        keyMetrics: {
          revenueExposure: { en: '86% Data Center AI', fr: '86% Data Centers & IA' },
          debtRatio: '0.12 D/E'
        },
        risks: {
          en: 'Slower deployment pace by hyperscalers bearing higher hardware unit costs.',
          fr: 'Ralentissement du déploiement chez les hyperscalers subissant des coûts matériels plus élevés.'
        }
      }
    ],
    no: [
      {
        ticker: 'NVDA',
        company: 'NVIDIA Corporation',
        sector: {
          en: 'AI GPUs & Accelerators',
          fr: 'Processeurs GPU & Accélérateurs d\'IA'
        },
        marketCap: '$3.10T',
        impactType: 'gainer',
        impactScore: 95,
        sensitivityVal: 5.8,
        sensitivity: {
          en: '+5.8% on frictionless global AI cluster demand',
          fr: '+5,8% sur la demande mondiale fluide de clusters d\'IA'
        },
        pricedIn: {
          pct: 82,
          status: {
            en: 'Fully Priced-In NO Scenario (82%)',
            fr: 'Scénario NON Pleinement Intégré (82%)'
          },
          level: 'high',
          recentMove: {
            en: 'Stock already prices in zero tariff disruptions. High current valuation reflects frictionless global AI hardware demand.',
            fr: 'L\'action intègre déjà l\'absence de perturbation douanière. La valorisation reflète une demande fluide.'
          },
          asymmetry: {
            en: 'Modest upside continuation (+3-5%) as status quo is confirmed.',
            fr: 'Poursuite de hausse modérée (+3-5%) si le statu quo est confirmé.'
          }
        },
        rationale: {
          en: 'Absence of export tariffs maintains unhindered global shipments of Blackwell GPU architecture, preserving 75%+ gross margins and enabling accelerated hyperscaler AI data center builds worldwide.',
          fr: 'L\'absence de taxes d\'exportation préserve les livraisons mondiales fluides de l\'architecture GPU Blackwell, maintenant des marges brutes supérieures à 75%.'
        },
        catalyst: {
          en: 'Unobstructed global AI infrastructure expansion across North America, Europe, and Asia.',
          fr: 'Expansion sans obstacle des infrastructures d\'IA en Amérique, Europe et Asie.'
        },
        keyMetrics: {
          revenueExposure: { en: '86% Data Center AI', fr: '86% Data Centers & IA' },
          debtRatio: '0.12 D/E'
        },
        risks: {
          en: 'Supply constraint ceiling at TSMC advanced packaging.',
          fr: 'Plafond de contrainte d\'approvisionnement chez TSMC.'
        }
      }
    ]
  },

  // 3. Defense Budget > $950B
  'poly-103': {
    yes: [
      {
        ticker: 'LMT',
        company: 'Lockheed Martin Corporation',
        sector: {
          en: 'Aerospace & Defense Contracting',
          fr: 'Aérospatiale & Contrats de Défense'
        },
        marketCap: '$118B',
        impactType: 'gainer',
        impactScore: 96,
        sensitivityVal: 4.8,
        sensitivity: {
          en: '+4.8% order backlog expansion',
          fr: '+4,8% d\'expansion du carnet de commandes'
        },
        pricedIn: {
          pct: 71,
          status: {
            en: 'Substantially Priced-In (71%)',
            fr: 'Substantiellement Intégré (71%)'
          },
          level: 'high',
          recentMove: {
            en: 'Lockheed Martin shares up +8.4% over 60 days following preliminary budget drafts. Market expects defense expansion.',
            fr: 'Lockheed Martin a gagné +8,4% sur 60j suite aux ébauches budgétaires. Le marché s\'attend à l\'extension de la défense.'
          },
          asymmetry: {
            en: 'Moderate upside (+4%) on official signature; severe drop if budget gets cut.',
            fr: 'Hausse modérée (+4%) à la signature officielle ; nette baisse si le budget est réduit.'
          }
        },
        rationale: {
          en: 'A record $950B defense spending bill directly expands procurement funds for missile defense (PAC-3, THAAD), tactical fighters (F-35), and hypersonics, locking in multi-year defense backlogs.',
          fr: 'Un budget record de 950 Mds$ de défense augmente directement les fonds d\'approvisionnement pour les systèmes de missiles (PAC-3), les chasseurs F-35 et l\'hypersonique.'
        },
        catalyst: {
          en: 'Congressional authorization of landmark multi-year procurement contracts.',
          fr: 'Autorisation par le Congrès de contrats d\'approvisionnement pluriannuels majeurs.'
        },
        keyMetrics: {
          revenueExposure: { en: '73% US Dept of Defense Procurement', fr: '73% Commandes du Département de la Défense US' },
          debtRatio: '0.62 D/E'
        },
        risks: {
          en: 'Supply chain bottlenecks on raw titanium and solid rocket motors.',
          fr: 'Goulots d\'étranglement sur le titane et les moteurs-fusées solides.'
        }
      },
      {
        ticker: 'RTX',
        company: 'RTX Corporation (Raytheon)',
        sector: {
          en: 'Missile Systems & Avionics',
          fr: 'Systèmes de Missiles & Avionique'
        },
        marketCap: '$152B',
        impactType: 'gainer',
        impactScore: 92,
        sensitivityVal: 4.1,
        sensitivity: {
          en: '+4.1% defense systems revenue',
          fr: '+4,1% de revenus sur les systèmes de défense'
        },
        pricedIn: {
          pct: 54,
          status: {
            en: 'Moderately Priced-In (54%)',
            fr: 'Modérément Intégré (54%)'
          },
          level: 'moderate',
          recentMove: {
            en: 'RTX stock has underperformed Lockheed (+3.2% 30d) due to engine recall noise, creating lag behind Polymarket 78% YES odds.',
            fr: 'RTX a sous-performé Lockheed (+3,2% 30j) en raison des rappels de moteurs, créant un retard sur la probabilité de 78% de Polymarket.'
          },
          asymmetry: {
            en: 'Attractive risk/reward for missile replenishment contract expansion.',
            fr: 'Ratio risque/récompense attrayant sur les nouveaux contrats de missiles.'
          }
        },
        rationale: {
          en: 'Raytheon receives primary appropriations for air defense replenishments, radar modernization, and precision munitions. Fixed-price contract margins expand under steady budget flows.',
          fr: 'Raytheon reçoit des crédits prioritaires pour le réapprovisionnement de la défense aérienne, la modernisation des radars et les munitions de précision.'
        },
        catalyst: {
          en: 'Replenishment contracts for Patriot and AMRAAM missile systems.',
          fr: 'Contrats de réapprovisionnement pour les missiles Patriot et AMRAAM.'
        },
        keyMetrics: {
          revenueExposure: { en: '61% Defense Contracting', fr: '61% Contrats Militaire & Défense' },
          debtRatio: '0.45 D/E'
        },
        risks: {
          en: 'Pratt & Whitney commercial engine inspection costs.',
          fr: 'Coûts d\'inspection des moteurs commerciaux Pratt & Whitney.'
        }
      }
    ],
    no: [
      {
        ticker: 'LMT',
        company: 'Lockheed Martin Corporation',
        sector: {
          en: 'Aerospace & Defense Contracting',
          fr: 'Aérospatiale & Contrats de Défense'
        },
        marketCap: '$118B',
        impactType: 'risk',
        impactScore: 82,
        sensitivityVal: 3.7,
        sensitivity: {
          en: '-3.7% procurement deferrals',
          fr: '-3,7% de report d\'approvisionnements'
        },
        pricedIn: {
          pct: 18,
          status: {
            en: 'Unpriced Deficit Shock Risk (18%)',
            fr: 'Risque de Choc Non Intégré (18%)'
          },
          level: 'low',
          recentMove: {
            en: 'Defense contractors have built zero pricing buffer for a budget rejection. Market pricing reflects total confidence in spending growth.',
            fr: 'Les contracteurs de défense n\'ont intégré aucun coussin en cas de rejet. Les cours reflètent une confiance totale.'
          },
          asymmetry: {
            en: 'Severe sell-off potential (-9% to -14%) if budget expansion fails.',
            fr: 'Potentiel de baisse sévère (-9% à -14%) si l\'extension budgétaire échoue.'
          }
        },
        rationale: {
          en: 'A failed defense budget expansion forces congressional compromise resolutions, delaying contract awards and capping F-35 fighter production build rates.',
          fr: 'L\'échec de l\'extension du budget de défense force des compromis au Congrès, retardant les attributions de contrats et plaffonnant la production de F-35.'
        },
        catalyst: {
          en: 'Continuing resolution budget caps on defense spending growth.',
          fr: 'Plafonds budgétaires de résolution permanente freinant la hausse des dépenses.'
        },
        keyMetrics: {
          revenueExposure: { en: '73% US Dept of Defense Procurement', fr: '73% Commandes Défense US' },
          debtRatio: '0.62 D/E'
        },
        risks: {
          en: 'Export market offset sales.',
          fr: 'Ventes de compensation sur les marchés d\'exportation.'
        }
      }
    ]
  },

  // 4. OPEC+ 1M BPD Oil Cut
  'poly-104': {
    yes: [
      {
        ticker: 'XOM',
        company: 'Exxon Mobil Corporation',
        sector: {
          en: 'Integrated Oil & Gas Supermajor',
          fr: 'Géant Pétrolier & Gazier Intégré'
        },
        marketCap: '$460B',
        impactType: 'gainer',
        impactScore: 93,
        sensitivityVal: 6.1,
        sensitivity: {
          en: '+6.1% upstream free cash flow expansion',
          fr: '+6,1% de cash-flow libre en amont'
        },
        pricedIn: {
          pct: 30,
          status: {
            en: 'Low Priced-In / High Upside (30%)',
            fr: 'Faiblement Intégré / Fort Potentiel (30%)'
          },
          level: 'low',
          recentMove: {
            en: 'Exxon stock consolidates (-1.5% 30d) as current crude trades around $74/bbl. Market is discounting OPEC cuts.',
            fr: 'Exxon consolide (-1,5% sur 30j) avec un pétrole vers 74$/bbl. Le marché sous-estime les coupes de l\'OPEP.'
          },
          asymmetry: {
            en: 'Strong rally catalyst (+8% to +12%) if OPEC cut manifests.',
            fr: 'Fort catalyseur de rallye (+8% à +12%) si les coupes de l\'OPEP se concrétisent.'
          }
        },
        rationale: {
          en: 'A 1 million barrel per day OPEC+ supply deficit elevates Brent crude benchmarks above $85/bbl. Exxon Mobil\'s high-margin Permian Basin and Guyana deepwater assets yield extraordinary free cash flow.',
          fr: 'Un déficit de production de 1 million de barils/jour par l\'OPEP+ fait grimper le Brent au-dessus de 85$/baril. Les gisements d\'Exxon au Permien et au Guyana génèrent des flux de trésorerie exceptionnels.'
        },
        catalyst: {
          en: 'Brent crude rally towards $88-$92/bbl + expanded share buybacks.',
          fr: 'Rallye du pétrole Brent vers 88$-92$/bbl + rachats d\'actions accrus.'
        },
        keyMetrics: {
          revenueExposure: { en: '48% Upstream Oil Exploration', fr: '48% Exploration & Production Amont' },
          debtRatio: '0.14 D/E'
        },
        risks: {
          en: 'Global economic slowdown lowering refined fuel demand.',
          fr: 'Ralentissement économique mondial réduisant la demande de carburant.'
        }
      },
      {
        ticker: 'UAL',
        company: 'United Airlines Holdings Inc.',
        sector: {
          en: 'Airlines & Commercial Transport',
          fr: 'Compagnies Aériennes & Transport Commercial'
        },
        marketCap: '$18.5B',
        impactType: 'risk',
        impactScore: 87,
        sensitivityVal: 5.9,
        sensitivity: {
          en: '-5.9% jet fuel expense increase',
          fr: '-5,9% de surcoût sur le kérosène'
        },
        pricedIn: {
          pct: 25,
          status: {
            en: 'Low Priced-In Fuel Shock (25%)',
            fr: 'Choc Kérosène Faiblement Intégré (25%)'
          },
          level: 'low',
          recentMove: {
            en: 'Airlines are trading near 52-week highs (+14% 30d). Equity traders assume low fuel prices indefinitely.',
            fr: 'Les compagnies aériennes s\'changent proches des sommets. Les traders supposent des prix du kérosène bas.'
          },
          asymmetry: {
            en: 'High downside vulnerability (-10%+) if OPEC triggers crude spike.',
            fr: 'Vulnérabilité de baisse élevée (-10%+) si l\'OPEP provoque un choc pétrolier.'
          }
        },
        rationale: {
          en: 'Jet fuel accounts for ~30% of airline operating expenses. Spike in crude oil prices instantly increases crack spreads, eroding quarterly operating margins.',
          fr: 'Le kérosène représente environ 30% des charges d\'exploitation des compagnies aériennes. La hausse du pétrole érode instantanément les marges opérationnelles.'
        },
        catalyst: {
          en: 'Spike in Gulf Coast jet fuel spot pricing + ticket price resistance.',
          fr: 'Flambée des prix du kérosène + résistance des prix des billets.'
        },
        keyMetrics: {
          revenueExposure: { en: '100% Commercial Aviation', fr: '100% Aviation Commerciale' },
          debtRatio: '1.85 D/E'
        },
        risks: {
          en: 'Hedging program protection caps.',
          fr: 'Plafonds de couverture de change et de carburant.'
        }
      }
    ],
    no: [
      {
        ticker: 'UAL',
        company: 'United Airlines Holdings Inc.',
        sector: {
          en: 'Airlines & Commercial Transport',
          fr: 'Compagnies Aériennes & Transport Commercial'
        },
        marketCap: '$18.5B',
        impactType: 'gainer',
        impactScore: 86,
        sensitivityVal: 4.8,
        sensitivity: {
          en: '+4.8% jet fuel cost relief',
          fr: '+4,8% d\'économie sur le kérosène'
        },
        pricedIn: {
          pct: 75,
          status: {
            en: 'Mostly Priced-In NO Cut (75%)',
            fr: 'Scénario Sans Coupe Intégré à 75%'
          },
          level: 'high',
          recentMove: {
            en: 'Current airline valuations already reflect soft crude oil prices ($70/bbl).',
            fr: 'Les valorisations actuelles des compagnies intègrent déjà un pétrole modéré (70$/bbl).'
          },
          asymmetry: {
            en: 'Moderate continuation upside (+3-4%).',
            fr: 'Hausse de poursuite modérée (+3-4%).'
          }
        },
        rationale: {
          en: 'Absence of OPEC cuts keeps crude prices soft ($70/bbl), lowering jet fuel costs and expanding passenger seat yields.',
          fr: 'L\'absence de coupes de l\'OPEP maintient les prix du pétrole modérés (70$/bbl), réduisant les coûts de kérosène et élargissant les marges des compagnies.'
        },
        catalyst: {
          en: 'Plunging jet fuel spot prices boosting Q3 margin guidance.',
          fr: 'Chute des prix du kérosène améliorant les prévisions de marge au T3.'
        },
        keyMetrics: {
          revenueExposure: { en: '100% Commercial Aviation', fr: '100% Aviation Commerciale' },
          debtRatio: '1.85 D/E'
        },
        risks: {
          en: 'Macro consumer travel spending cooling.',
          fr: 'Ralentissement des dépenses de voyage des consommateurs.'
        }
      }
    ]
  },

  // 5. Corporate Tax Reduced to 18%
  'poly-105': {
    yes: [
      {
        ticker: 'SPY',
        company: 'SPDR S&P 500 ETF Trust',
        sector: {
          en: 'Broad US Equities',
          fr: 'Actions Américaines Diversifiées (S&P 500)'
        },
        marketCap: '$520B ETF',
        impactType: 'gainer',
        impactScore: 95,
        sensitivityVal: 4.0,
        sensitivity: {
          en: '+4.0% aggregate S&P 500 EPS lift',
          fr: '+4,0% de hausse du bénéfice par action (BPA)'
        },
        pricedIn: {
          pct: 48,
          status: {
            en: 'Partially Priced-In (48%)',
            fr: 'Partiellement Intégré (48%)'
          },
          level: 'moderate',
          recentMove: {
            en: 'S&P 500 trades at 21.5x forward P/E. Equity analysts have built partial tax cut expectations into 2027 earnings models.',
            fr: 'Le S&P 500 se négocie à 21,5x les bénéfices futurs. Les analystes ont intégré une baisse partielle d\'impôt.'
          },
          asymmetry: {
            en: 'Additional +4% EPS boost upon formal legislative enactment.',
            fr: 'Boost supplémentaire de +4% du BPA dès la promulgation législative.'
          }
        },
        rationale: {
          en: 'Reducing corporate tax rates from 21% to 18% instantly increases net bottom-line earnings per share (EPS) across domestic S&P 500 companies by an estimated 3.8% to 4.2% automatically.',
          fr: 'Réduire le taux d\'imposition des sociétés de 21% à 18% augmente automatiquement le bénéfice net par action (BPA) des entreprises du S&P 500 d\'environ 4%.'
        },
        catalyst: {
          en: 'Immediate upward revision of consensus 2027 S&P 500 EPS target multiples.',
          fr: 'Révision à la hausse immédiate des multiples de bénéfices du S&P 500.'
        },
        keyMetrics: {
          revenueExposure: { en: 'Broad US Corporate Tax Paying Equities', fr: 'Entreprises US Soumises à l\'Impôt' },
          debtRatio: 'N/A'
        },
        risks: {
          en: 'Surging federal deficit expanding long-term Treasury yields.',
          fr: 'Envolée du déficit fédéral faisant grimper les taux obligataires à long terme.'
        }
      }
    ],
    no: [
      {
        ticker: 'HD',
        company: 'The Home Depot Inc.',
        sector: {
          en: 'Domestic US Consumer Retail',
          fr: 'Commerce de Détail Américain'
        },
        marketCap: '$365B',
        impactType: 'risk',
        impactScore: 72,
        sensitivityVal: 1.8,
        sensitivity: {
          en: '-1.8% tax reduction disappointment',
          fr: '-1,8% sur l\'absence d\'allègement fiscal'
        },
        pricedIn: {
          pct: 60,
          status: {
            en: 'Moderately Priced-In NO Tax Cut (60%)',
            fr: 'Modérément Intégré Sans Baisse (60%)'
          },
          level: 'moderate',
          recentMove: {
            en: 'Home Depot trades at baseline statutory 21% tax estimates.',
            fr: 'Home Depot est valorisé sur l\'hypothèse de base de 21% d\'impôt.'
          },
          asymmetry: {
            en: 'Limited downside (-2%) if tax cut fails.',
            fr: 'Baisse limitée (-2%) en cas d\'échec de la baisse d\'impôt.'
          }
        },
        rationale: {
          en: 'Maintenance of 21% corporate tax rate leaves corporate profit estimates unchanged, removing tax expansion upside for purely domestic brick-and-mortar operators.',
          fr: 'Le maintien du taux à 21% laisse les prévisions de bénéfices inchangées, éliminant le potentiel de hausse liée à la baisse d\'impôt.'
        },
        catalyst: {
          en: 'Unchanged corporate tax liabilities.',
          fr: 'Charges fiscales des entreprises inchangées.'
        },
        keyMetrics: {
          revenueExposure: { en: '94% Domestic US Retail Operations', fr: '94% Opérations Commerciales Domestiques US' },
          debtRatio: '1.12 D/E'
        },
        risks: {
          en: 'Housing market DIY spending slowdown.',
          fr: 'Ralentissement des dépenses de rénovation du logement.'
        }
      }
    ]
  },

  // 6. FDA Approves CRISPR Solid Tumor Therapy
  'poly-106': {
    yes: [
      {
        ticker: 'CRSP',
        company: 'CRISPR Therapeutics AG',
        sector: {
          en: 'Gene Editing & Biotechnology',
          fr: 'Édition Génétique & Biotechnologie'
        },
        marketCap: '$4.9B',
        impactType: 'gainer',
        impactScore: 98,
        sensitivityVal: 18.5,
        sensitivity: {
          en: '+18.5% solid tumor market re-rating',
          fr: '+18,5% de revalorisation sur le marché des tumeurs'
        },
        pricedIn: {
          pct: 35,
          status: {
            en: 'Low Priced-In / High Asymmetry (35%)',
            fr: 'Faiblement Intégré / Forte Asymétrie (35%)'
          },
          level: 'low',
          recentMove: {
            en: 'CRSP trades flat (+1.1% 30d) due to biotech sector caution. Polymarket 71% YES approval odds are largely ignored by equity markets.',
            fr: 'CRSP stagne (+1,1% sur 30j) par prudence sur les biotechs. La probabilité de 71% sur Polymarket est largement ignorée.'
          },
          asymmetry: {
            en: 'Massive explosive surge potential (+25%+) on actual FDA approval.',
            fr: 'Potentiel de hausse massif (+25%+) en cas d\'approbation effective de la FDA.'
          }
        },
        rationale: {
          en: 'First-in-class FDA approval for solid tumors validates the commercial viability of gene editing beyond rare blood disorders, opening a $40B+ oncology addressable market.',
          fr: 'La première approbation FDA pour les tumeurs solides valide la viabilité commerciale de l\'édition génétique en oncologie, ouvrant un marché de plus de 40 Mds$.'
        },
        catalyst: {
          en: 'Landmark FDA approval label + commercial reimbursement insurance coverage approval.',
          fr: 'Feu vert historique de la FDA + prise en charge par les assurances santé.'
        },
        keyMetrics: {
          revenueExposure: { en: '100% Gene Editing IP Platform', fr: '100% Plateforme de Brevets Génétiques' },
          debtRatio: '0.00 Debt'
        },
        risks: {
          en: 'Manufacturing scalability for custom allogeneic cell batches.',
          fr: 'Passage à l\'échelle de la fabrication de lots cellulaires.'
        }
      }
    ],
    no: [
      {
        ticker: 'CRSP',
        company: 'CRISPR Therapeutics AG',
        sector: {
          en: 'Gene Editing Biotechnology',
          fr: 'Édition Génétique & Biotechnologie'
        },
        marketCap: '$4.9B',
        impactType: 'risk',
        impactScore: 91,
        sensitivityVal: 15.4,
        sensitivity: {
          en: '-15.4% FDA Complete Response Letter (CRL) drop',
          fr: '-15,4% sur refus de la FDA (Lettre CRL)'
        },
        pricedIn: {
          pct: 20,
          status: {
            en: 'Unpriced Rejection Risk (20%)',
            fr: 'Risque de Rejet Non Intégré (20%)'
          },
          level: 'low',
          recentMove: {
            en: 'Stock holds baseline valuation without reflecting CRL risk.',
            fr: 'L\'action maintient sa valorisation sans refléter le risque de lettre CRL.'
          },
          asymmetry: {
            en: 'Severe drawdown risk (-18% to -25%) if rejected.',
            fr: 'Risque de baisse sévère (-18% à -25%) en cas de rejet.'
          }
        },
        rationale: {
          en: 'FDA rejection or request for additional clinical trials delays solid tumor commercialization by 2-3 years, increasing burn rate concerns.',
          fr: 'Le rejet de la FDA ou la demande d\'essais cliniques supplémentaires retarde la commercialisation de 2 à 3 ans, augmentant la consommation de trésorerie.'
        },
        catalyst: {
          en: 'FDA rejection or extended review delay.',
          fr: 'Refus de la FDA ou report d\'examen de la décision.'
        },
        keyMetrics: {
          revenueExposure: { en: '100% Gene Editing IP Platform', fr: '100% Plateforme de Brevets Génétiques' },
          debtRatio: '0.00 Debt'
        },
        risks: {
          en: 'CASGEVY blood disorder sales offset.',
          fr: 'Compensation limitée par les ventes CASGEVY.'
        }
      }
    ]
  },

  // 7. US Treasury Strategic Bitcoin Reserve
  'poly-107': {
    yes: [
      {
        ticker: 'COIN',
        company: 'Coinbase Global Inc.',
        sector: {
          en: 'Crypto Financial Infrastructure',
          fr: 'Infrastructure Financière Crypto'
        },
        marketCap: '$58.0B',
        impactType: 'gainer',
        impactScore: 97,
        sensitivityVal: 15.2,
        sensitivity: {
          en: '+15.2% institutional custody volume surge',
          fr: '+15,2% de hausse des volumes de conservation'
        },
        pricedIn: {
          pct: 22,
          status: {
            en: 'Unpriced Sovereign Option (22%)',
            fr: 'Option Souveraine Non Intégrée (22%)'
          },
          level: 'low',
          recentMove: {
            en: 'Coinbase shares trade on standard retail volume. Sovereign Treasury buying is completely unpriced in equity valuations.',
            fr: 'Coinbase s\'échange sur les volumes retail habituels. L\'achat par le Trésor souverain n\'est pas du tout intégré.'
          },
          asymmetry: {
            en: 'Massive re-rating (+20% to +30%) if Treasury reserve passes.',
            fr: 'Revalorisation massive (+20% à +30%) si la réserve du Trésor est votée.'
          }
        },
        rationale: {
          en: 'US Strategic Bitcoin Reserve authorization elevates digital assets into sovereign reserve class. Coinbase custody services (Coinbase Prime) becomes institutional custodian for Treasury assets.',
          fr: 'La création d\'une réserve stratégique américaine élève le Bitcoin au rang d\'actif de réserve souverain. Coinbase Prime devient le dépositaire institutionnel clé.'
        },
        catalyst: {
          en: 'US Treasury custodian contract win + surge in institutional crypto trading volumes.',
          fr: 'Signature du contrat de conservation du Trésor US + envolée des volumes institutionnels.'
        },
        keyMetrics: {
          revenueExposure: { en: '82% Crypto Exchange & Custody Fees', fr: '82% Frais de Courtage & Conservation Crypto' },
          debtRatio: '0.41 D/E'
        },
        risks: {
          en: 'Regulatory scrutiny on secondary altcoin trading pairs.',
          fr: 'Surveillance réglementaire sur les paires de trading d\'altcoins.'
        }
      },
      {
        ticker: 'MSTR',
        company: 'MicroStrategy Incorporated',
        sector: {
          en: 'Corporate Bitcoin Treasury Holdings',
          fr: 'Réserves de Trésorerie en Bitcoin'
        },
        marketCap: '$36.5B',
        impactType: 'gainer',
        impactScore: 99,
        sensitivityVal: 22.0,
        sensitivity: {
          en: '+22.0% mNAV multiple expansion',
          fr: '+22,0% d\'expansion du multiple de l\'actif net'
        },
        pricedIn: {
          pct: 25,
          status: {
            en: 'Low Priced-In / Massive Asymmetry (25%)',
            fr: 'Faiblement Intégré / Asymétrie Massive (25%)'
          },
          level: 'low',
          recentMove: {
            en: 'MSTR moves primarily with current BTC spot price. Sovereign Treasury game theory not yet priced into mNAV premium.',
            fr: 'MSTR varie surtout avec le BTC au comptant. La théorie des jeux des banques centrales n\'est pas intégrée à la prime mNAV.'
          },
          asymmetry: {
            en: 'Parabolic potential (+35%+) on sovereign reserve adoption.',
            fr: 'Potentiel parabolique (+35%+) sur l\'adoption par une réserve souveraine.'
          }
        },
        rationale: {
          en: 'Sovereign Treasury buying triggers global central bank game theory, sparking rapid Bitcoin price appreciation directly inflating MicroStrategy\'s 200,000+ BTC balance sheet valuation.',
          fr: 'Les achats du Trésor déclenchent une compétition entre banques centrales, propulsant le prix du Bitcoin et revalorisant la réserve de 200 000+ BTC de MicroStrategy.'
        },
        catalyst: {
          en: 'Parabolic BTC price appreciation elevating Net Asset Value (mNAV).',
          fr: 'Envolée parabolique du BTC augmentant la Valeur Net d\'Actif (mNAV).'
        },
        keyMetrics: {
          revenueExposure: { en: '95% Bitcoin Treasury Value', fr: '95% Valeur des Réserves Bitcoin' },
          debtRatio: '0.38 Convertible Debt'
        },
        risks: {
          en: 'Convertible bond refinancing requirements if BTC volatility spikes.',
          fr: 'Refinancement des obligations convertibles en cas de forte volatilité du BTC.'
        }
      }
    ],
    no: [
      {
        ticker: 'COIN',
        company: 'Coinbase Global Inc.',
        sector: {
          en: 'Crypto Financial Infrastructure',
          fr: 'Infrastructure Financière Crypto'
        },
        marketCap: '$58.0B',
        impactType: 'risk',
        impactScore: 78,
        sensitivityVal: 6.4,
        sensitivity: {
          en: '-6.4% institutional sentiment cooling',
          fr: '-6,4% sur refroidissement du sentiment institutionnel'
        },
        pricedIn: {
          pct: 85,
          status: {
            en: 'Fully Priced-In NO Reserve (85%)',
            fr: 'Absence de Réserve Intégrée à 85%'
          },
          level: 'high',
          recentMove: {
            en: 'Current stock price assumes no government crypto purchases.',
            fr: 'Le cours actuel n\'intègre aucun achat de crypto par le gouvernement.'
          },
          asymmetry: {
            en: 'Minimal downside impact (-3%) as NO is the consensus expectation.',
            fr: 'Impact baissier minimal (-3%) car le NON est l\'attente consensuelle.'
          }
        },
        rationale: {
          en: 'Lack of US Treasury backing keeps Bitcoin restricted to private institutional adoption, moderating trading fee volume growth.',
          fr: 'L\'absence de soutien du Trésor limite le Bitcoin à l\'adoption privée, modérant la croissance des frais de transaction.'
        },
        catalyst: {
          en: 'Sovereign crypto adoption delay.',
          fr: 'Retard dans l\'adoption de la crypto par les États.'
        },
        keyMetrics: {
          revenueExposure: { en: '82% Crypto Exchange Fees', fr: '82% Frais d\'Échange Crypto' },
          debtRatio: '0.41 D/E'
        },
        risks: {
          en: 'Layer-2 Base network transaction growth.',
          fr: 'Développement des réseaux de seconde couche (Layer-2).'
        }
      }
    ]
  },
  // 8. Stablecoin Regulatory Framework
  'poly-108': {
    yes: [
      {
        ticker: 'COIN',
        company: 'Coinbase Global Inc.',
        sector: {
          en: 'Crypto Payments & Custody',
          fr: 'Paiements Crypto & Custodie'
        },
        marketCap: '$58.0B',
        impactType: 'gainer',
        impactScore: 92,
        sensitivityVal: 5.4,
        sensitivity: {
          en: '+5.4% per $10B USDC market cap expansion',
          fr: '+5,4% par hausse de 10 Mds$ de cap USDC'
        },
        pricedIn: {
          pct: 38,
          status: {
            en: 'Partially Priced-In (38%)',
            fr: 'Partiellement Intégré (38%)'
          },
          level: 'moderate',
          recentMove: {
            en: 'USDC interest sharing income accounts for over 20% of net revenue. Federal regulation unlocks massive bank partnership potential.',
            fr: 'Les revenus partagés USDC représentent plus de 20% des revenus nets. La régulation débloque des partenariats bancaires majeurs.'
          },
          asymmetry: {
            en: 'Strong institutional upside (+12% to +18%) upon formal legislative enactment.',
            fr: 'Fort potentiel institutionnel (+12% à +18%) lors de l\'adoption formelle.'
          }
        },
        rationale: {
          en: 'Legislation provides bank-grade clarity for USD-backed stablecoins, driving institutional settlement adoption and expanding Coinbase\'s USDC interest revenue stream.',
          fr: 'La législation offre une clarté bancaire pour les stablecoins adossés au dollar, stimulant l\'adoption institutionnelle et les revenus d\'intérêt USDC de Coinbase.'
        },
        catalyst: {
          en: 'Federal Reserve stablecoin issuer licensing + commercial bank integration.',
          fr: 'Licences d\'émission du Trésor + intégration par les banques commerciales.'
        },
        keyMetrics: {
          revenueExposure: { en: '50% Interest & Payment Services', fr: '50% Intérêts & Services de Paiement' },
          debtRatio: '0.41 D/E'
        },
        risks: {
          en: 'Stringent reserve capital requirements lowering yield share margins.',
          fr: 'Exigences de réserve strictes réduisant les marges de rendement.'
        }
      },
      {
        ticker: 'V',
        company: 'Visa Inc.',
        sector: {
          en: 'Global Payments Network',
          fr: 'Réseau de Paiement Mondial'
        },
        marketCap: '$560.0B',
        impactType: 'gainer',
        impactScore: 84,
        sensitivityVal: 2.8,
        sensitivity: {
          en: '+2.8% cross-border settlement velocity',
          fr: '+2,8% de vélocité des paiements transfrontaliers'
        },
        pricedIn: {
          pct: 25,
          status: {
            en: 'Low Priced-In (25%)',
            fr: 'Faiblement Intégré (25%)'
          },
          level: 'low',
          recentMove: {
            en: 'Visa stablecoin settlement volume expanded +40% YoY. Clear framework enables main-street merchant rollout.',
            fr: 'Le volume de règlement stablecoin de Visa a progressé de +40% YoY. Un cadre clair permet le déploiement marchand.'
          },
          asymmetry: {
            en: 'Unpriced long-term expansion (+6% to +9%) in B2B cross-border payments.',
            fr: 'Expansion à long terme non intégrée (+6% à +9%) sur les paiements B2B.'
          }
        },
        rationale: {
          en: 'Visa integrates regulated stablecoins into its global payout rail, lowering cross-border settlement costs and capturing new B2B transaction flows.',
          fr: 'Visa intègre les stablecoins réglementés dans ses réseaux mondiaux, réduisant les coûts de règlement et capturant de nouveaux flux B2B.'
        },
        catalyst: {
          en: 'Commercial merchant checkout integration of USDC/EURC stablecoins.',
          fr: 'Intégration marchande des stablecoins USDC/EURC en caisse.'
        },
        keyMetrics: {
          revenueExposure: { en: '38% Cross-Border Volume', fr: '38% Volume Transfrontalier' },
          debtRatio: '0.52 D/E'
        },
        risks: {
          en: 'Interchange fee compression from direct blockchain settlement.',
          fr: 'Compression des frais d\'interchange liés au règlement blockchain direct.'
        }
      }
    ],
    no: [
      {
        ticker: 'WFC',
        company: 'Wells Fargo & Co.',
        sector: {
          en: 'Traditional Consumer & Commercial Banking',
          fr: 'Banque Traditionnelle & Commerciale'
        },
        marketCap: '$195.0B',
        impactType: 'risk',
        impactScore: 72,
        sensitivityVal: 3.1,
        sensitivity: {
          en: '-3.1% deposit flight pressure',
          fr: '-3,1% de pression de fuite des dépôts'
        },
        pricedIn: {
          pct: 75,
          status: {
            en: 'Largely Priced-In NO (75%)',
            fr: 'Absence de Loi Intégrée (75%)'
          },
          level: 'high',
          recentMove: {
            en: 'Traditional banks benefit short-term from delayed stablecoin competition.',
            fr: 'Les banques traditionnelles profitent à court terme d\'une concurrence retardée.'
          },
          asymmetry: {
            en: 'Minimal stock impact (-2%) if regulation fails to pass.',
            fr: 'Impact boursier faible (-2%) si la loi échoue.'
          }
        },
        rationale: {
          en: 'Failure of stablecoin regulation maintains high friction in international wire transfers, protecting legacy bank fee income.',
          fr: 'L\'échec de la régulation maintient des frictions élevées sur les virements, protégeant les frais bancaires traditionnels.'
        },
        catalyst: {
          en: 'Status quo protection for commercial wire transfer fees.',
          fr: 'Maintien des frais sur les virements commerciaux.'
        },
        keyMetrics: {
          revenueExposure: { en: '65% US Deposit & Consumer Banking', fr: '65% Dépôts & Banque de Détail US' },
          debtRatio: '1.15 D/E'
        },
        risks: {
          en: 'Unregulated offshore stablecoin expansion.',
          fr: 'Expansion non réglementée des stablecoins offshore.'
        }
      }
    ]
  },
  // 9. EU AI Act Exemption
  'poly-109': {
    yes: [
      {
        ticker: 'META',
        company: 'Meta Platforms Inc.',
        sector: {
          en: 'Hyperscale Open Source AI & Digital Media',
          fr: 'IA Open Source & Médias Numériques'
        },
        marketCap: '$1.25T',
        impactType: 'gainer',
        impactScore: 89,
        sensitivityVal: 4.1,
        sensitivity: {
          en: '+4.1% Llama commercial adoption surge',
          fr: '+4,1% d\'adoption commerciale de Llama'
        },
        pricedIn: {
          pct: 32,
          status: {
            en: 'Low Priced-In (32%)',
            fr: 'Faiblement Intégré (32%)'
          },
          level: 'low',
          recentMove: {
            en: 'European enterprises hesitant to deploy Llama models due to AI Act compliance risk. Exemption unlocks EU enterprise market.',
            fr: 'Les entreprises européennes hésitent à déployer Llama en raison des risques de conformité. L\'exemption débloque le marché UE.'
          },
          asymmetry: {
            en: 'Significant upside (+8% to +14%) as Llama becomes standard EU corporate AI foundation.',
            fr: 'Hausse significative (+8% à +14%) alors que Llama devient la norme IA en UE.'
          }
        },
        rationale: {
          en: 'EU liability exemption allows European startups and corporations to freely build commercial applications on Meta\'s Llama architecture without prohibitive legal risk.',
          fr: 'L\'exemption de responsabilité permet aux startups et entreprises européennes de développer des applications commerciales sur Llama sans risque juridique.'
        },
        catalyst: {
          en: 'European corporate developer onboarding + Llama enterprise ecosystem dominance.',
          fr: 'Adhésion des développeurs européens + domination de l\'écosystème Llama.'
        },
        keyMetrics: {
          revenueExposure: { en: '24% European Revenue Share', fr: '24% Part des Revenus en Europe' },
          debtRatio: '0.12 D/E'
        },
        risks: {
          en: 'Individual member state national privacy enforcement.',
          fr: 'Application nationale de la confidentialité par les États membres.'
        }
      },
      {
        ticker: 'SAP',
        company: 'SAP SE',
        sector: {
          en: 'European Enterprise Software & Cloud',
          fr: 'Logiciels d\'Entreprise & Cloud Européen'
        },
        marketCap: '$240.0B',
        impactType: 'gainer',
        impactScore: 81,
        sensitivityVal: 3.2,
        sensitivity: {
          en: '+3.2% cloud ARR acceleration',
          fr: '+3,2% d\'accélération des revenus récurrents cloud'
        },
        pricedIn: {
          pct: 45,
          status: {
            en: 'Partially Priced-In (45%)',
            fr: 'Partiellement Intégré (45%)'
          },
          level: 'moderate',
          recentMove: {
            en: 'SAP embedding open-weight AI models into S/4HANA ERP suite. Legal exemption removes deployment bottlenecks for European clients.',
            fr: 'SAP intègre des modèles d\'IA open-weight dans ERP. L\'exemption lève les goulots d\'étranglement pour les clients européens.'
          },
          asymmetry: {
            en: 'Sustained margin expansion (+7% upside) from embedded AI upsells.',
            fr: 'Expansion durable des marges (+7% de potentiel) via les ventes d\'IA.'
          }
        },
        rationale: {
          en: 'SAP can rapidly embed open-source AI models into its enterprise software suite without acquiring massive proprietary LLM licenses.',
          fr: 'SAP peut intégrer rapidement des modèles d\'IA open-source dans ses logiciels d\'entreprise sans acquérir de coûteuses licences propriétaires.'
        },
        catalyst: {
          en: 'SAP Business AI cloud subscription revenue acceleration.',
          fr: 'Accélération des abonnements cloud SAP Business AI.'
        },
        keyMetrics: {
          revenueExposure: { en: '44% EMEA Cloud Software', fr: '44% Logiciels Cloud EMEA' },
          debtRatio: '0.22 D/E'
        },
        risks: {
          en: 'Slower corporate IT migration cycles in Germany and France.',
          fr: 'Cycles de migration informatique plus lents en Allemagne et en France.'
        }
      }
    ],
    no: [
      {
        ticker: 'MSFT',
        company: 'Microsoft Corporation',
        sector: {
          en: 'Proprietary AI Moats & Hyperscale Cloud',
          fr: 'IA Propriétaire & Cloud Hyperscale'
        },
        impactType: 'risk',
        impactScore: 75,
        sensitivityVal: 2.9,
        sensitivity: {
          en: '-2.9% enterprise Copilot pricing premium',
          fr: '-2,9% sur la prime de prix Copilot entreprise'
        },
        pricedIn: {
          pct: 70,
          status: {
            en: 'Moderately Priced-In (70%)',
            fr: 'Modérément Intégré (70%)'
          },
          level: 'moderate',
          recentMove: {
            en: 'Rejection of open-source exemption protects Microsoft\'s proprietary Azure OpenAI ecosystem in Europe.',
            fr: 'Le rejet de l\'exemption protège l\'écosystème propriétaire Azure OpenAI de Microsoft en Europe.'
          },
          asymmetry: {
            en: 'Slight positive protection (+3%) for Azure LLM subscription moat.',
            fr: 'Protection positive modérée (+3%) pour les abonnements Azure.'
          }
        },
        rationale: {
          en: 'Rejection of exemptions forces European companies onto compliance-backed proprietary APIs like Azure OpenAI, insulating Microsoft\'s monetization.',
          fr: 'Le rejet des exemptions oblige les entreprises européennes à utiliser des API propriétaires conformes comme Azure OpenAI.'
        },
        catalyst: {
          en: 'Proprietary enterprise AI compliance lock-in in Europe.',
          fr: 'Verrouillage de la conformité IA d\'entreprise en Europe.'
        },
        keyMetrics: {
          revenueExposure: { en: '32% Azure Enterprise Infrastructure', fr: '32% Infrastructure Azure Entreprise' },
          debtRatio: '0.25 D/E'
        },
        risks: {
          en: 'EU antitrust scrutiny on bundled AI software.',
          fr: 'Contrôle antivrai de l\'UE sur les offres groupées d\'IA.'
        }
      }
    ]
  },
  // 10. 2nm Semiconductor Standardization
  'poly-110': {
    yes: [
      {
        ticker: 'ASML',
        company: 'ASML Holding N.V.',
        sector: {
          en: 'EUV Lithography Equipment',
          fr: 'Équipements de Lithographie EUV'
        },
        marketCap: '$380.0B',
        impactType: 'gainer',
        impactScore: 95,
        sensitivityVal: 6.2,
        sensitivity: {
          en: '+6.2% High-NA EUV backlog expansion',
          fr: '+6,2% d\'expansion des commandes High-NA EUV'
        },
        pricedIn: {
          pct: 30,
          status: {
            en: 'Low Priced-In (30%)',
            fr: 'Faiblement Intégré (30%)'
          },
          level: 'low',
          recentMove: {
            en: 'Standardizing 2nm GAAFET manufacturing triggers synchronized High-NA EUV tool orders across TSMC, Samsung, and Intel.',
            fr: 'La standardisation de la fabrication 2nm déclenche des commandes d\'outils High-NA EUV synchronisées.'
          },
          asymmetry: {
            en: 'High upside (+15% to +22%) as 2nm tool delivery backlog hits record highs.',
            fr: 'Potentiel élevé (+15% à +22%) avec des carnets de commandes High-NA record.'
          }
        },
        rationale: {
          en: 'Unified 2nm GAAFET manufacturing standards require foundries to accelerate purchase orders for ASML\'s $350M+ High-NA EUV lithography systems to achieve commercial volume yields.',
          fr: 'Les normes 2nm GAAFET obligent les fondeurs à accélérer les commandes de systèmes de lithographie High-NA EUV d\'ASML de 350M$+.'
        },
        catalyst: {
          en: 'High-NA EUV tool delivery booking acceleration across leading foundries.',
          fr: 'Accélération des réservations de livraison d\'outils High-NA EUV.'
        },
        keyMetrics: {
          revenueExposure: { en: '100% Semiconductor Lithography Systems', fr: '100% Systèmes de Lithographie Semi-conducteurs' },
          debtRatio: '0.35 D/E'
        },
        risks: {
          en: 'US export restrictions on deep ultraviolet (DUV) tools to China.',
          fr: 'Restrictions d\'exportation américaines sur les outils DUV vers la Chine.'
        }
      },
      {
        ticker: 'TSM',
        company: 'Taiwan Semiconductor Mfg Co.',
        sector: {
          en: 'Leading-Edge Pure-Play Foundry',
          fr: 'Fonderie de Semi-conducteurs de Pointe'
        },
        marketCap: '$920.0B',
        impactType: 'gainer',
        impactScore: 91,
        sensitivityVal: 4.8,
        sensitivity: {
          en: '+4.8% 2nm wafer ASP & yield margin',
          fr: '+4,8% sur le prix moyen et marge du 2nm'
        },
        pricedIn: {
          pct: 40,
          status: {
            en: 'Partially Priced-In (40%)',
            fr: 'Partiellement Intégré (40%)'
          },
          level: 'moderate',
          recentMove: {
            en: 'TSMC leads 2nm N2 process node readiness. Standardized architecture cement TSMC\'s 90%+ market share in AI chip foundry manufacturing.',
            fr: 'TSMC mène la préparation du nœud 2nm N2. La norme cimente la part de marché de 90%+ de TSMC dans les puces IA.'
          },
          asymmetry: {
            en: 'Solid upside (+10% to +16%) from premium 2nm pricing power.',
            fr: 'Solide potentiel (+10% à +16%) grâce au pouvoir de fixation des prix du 2nm.'
          }
        },
        rationale: {
          en: 'Global GAAFET standardization accelerates customer migration (Apple, Nvidia, AMD) to TSMC\'s N2 2nm node, locking in premium wafer pricing ($30,000+ per wafer).',
          fr: 'La standardisation GAAFET accélère la migration des clients (Apple, Nvidia, AMD) vers le 2nm de TSMC à des prix de 30 000$+ par wafer.'
        },
        catalyst: {
          en: 'Apple and Nvidia 2nm tape-out confirmation for next-gen AI processors.',
          fr: 'Confirmation des tape-out 2nm pour Apple et Nvidia sur processeurs IA.'
        },
        keyMetrics: {
          revenueExposure: { en: '68% Advanced Nodes (<=5nm)', fr: '68% Nœuds Avancés (<=5nm)' },
          debtRatio: '0.20 D/E'
        },
        risks: {
          en: 'Geopolitical supply chain disruption in Taiwan Strait.',
          fr: 'Perturbations géopolitiques de la chaîne d\'approvisionnement.'
        }
      }
    ],
    no: [
      {
        ticker: 'INTC',
        company: 'Intel Corporation',
        sector: {
          en: 'IDM Foundry & Microprocessors',
          fr: 'Fonderie IDM & Microprocesseurs'
        },
        impactType: 'risk',
        impactScore: 79,
        sensitivityVal: 4.2,
        sensitivity: {
          en: '-4.2% 18A process node differentiation loss',
          fr: '-4,2% de perte de différenciation du procédé 18A'
        },
        pricedIn: {
          pct: 65,
          status: {
            en: 'Moderately Priced-In NO (65%)',
            fr: 'Modérément Intégré (65%)'
          },
          level: 'moderate',
          recentMove: {
            en: 'Lack of GAAFET standardization benefits Intel\'s proprietary RibbonFET 18A architecture differentiation.',
            fr: 'L\'absence de norme bénéficie à la différenciation de l\'architecture 18A d\'Intel.'
          },
          asymmetry: {
            en: 'Slight negative impact (-4%) if standards favor TSMC ecosystem.',
            fr: 'Impact négatif modéré (-4%) si les normes favorisent TSMC.'
          }
        },
        rationale: {
          en: 'Standards aligned with TSMC/Samsung GAAFET architecture erode Intel\'s custom RibbonFET design advantage, threatening external foundry client acquisition.',
          fr: 'Des normes alignées sur TSMC érodent l\'avantage RibbonFET d\'Intel, menaçant l\'acquisition de clients fonderie externes.'
        },
        catalyst: {
          en: 'Loss of external foundry client tape-out momentum.',
          fr: 'Perte de dynamique sur les tape-outs de clients fonderie.'
        },
        keyMetrics: {
          revenueExposure: { en: '52% PC & Data Center Chips', fr: '52% Puces PC & Datacenter' },
          debtRatio: '0.68 D/E'
        },
        risks: {
          en: 'CHIPS Act subsidy payout timeline delays.',
          fr: 'Retards dans le versement des subventions du CHIPS Act.'
        }
      }
    ]
  }
};

/**
 * Get all mapped beneficiary stocks across all events & outcomes for calculating global leaderboard
 */
function getAllBeneficiaries() {
  return BENEFICIARY_DATABASE;
}

/**
 * Get stock beneficiary analysis for a given Polymarket event and selected outcome ('yes' or 'no')
 */
function getEventBeneficiaries(eventId, outcome = 'yes', lang = 'en') {
  const normOutcome = outcome.toLowerCase() === 'no' ? 'no' : 'yes';
  const eventMapping = BENEFICIARY_DATABASE[eventId];

  let rawList = [];
  if (eventMapping && eventMapping[normOutcome]) {
    rawList = eventMapping[normOutcome];
  } else {
    rawList = getGenericFallbackBeneficiaries(eventId, normOutcome);
  }

  // Format bilingual fields according to chosen language
  return rawList.map(stock => ({
    ...stock,
    sector: typeof stock.sector === 'object' ? (stock.sector[lang] || stock.sector.en) : stock.sector,
    sensitivity: typeof stock.sensitivity === 'object' ? (stock.sensitivity[lang] || stock.sensitivity.en) : stock.sensitivity,
    pricedIn: stock.pricedIn ? {
      ...stock.pricedIn,
      status: typeof stock.pricedIn.status === 'object' ? (stock.pricedIn.status[lang] || stock.pricedIn.status.en) : stock.pricedIn.status,
      recentMove: typeof stock.pricedIn.recentMove === 'object' ? (stock.pricedIn.recentMove[lang] || stock.pricedIn.recentMove.en) : stock.pricedIn.recentMove,
      asymmetry: typeof stock.pricedIn.asymmetry === 'object' ? (stock.pricedIn.asymmetry[lang] || stock.pricedIn.asymmetry.en) : stock.pricedIn.asymmetry
    } : null,
    rationale: typeof stock.rationale === 'object' ? (stock.rationale[lang] || stock.rationale.en) : stock.rationale,
    catalyst: typeof stock.catalyst === 'object' ? (stock.catalyst[lang] || stock.catalyst.en) : stock.catalyst,
    risks: typeof stock.risks === 'object' ? (stock.risks[lang] || stock.risks.en) : stock.risks,
    keyMetrics: stock.keyMetrics ? {
      ...stock.keyMetrics,
      revenueExposure: typeof stock.keyMetrics.revenueExposure === 'object' 
        ? (stock.keyMetrics.revenueExposure[lang] || stock.keyMetrics.revenueExposure.en) 
        : stock.keyMetrics.revenueExposure
    } : null
  }));
}

function getGenericFallbackBeneficiaries(eventId, outcome) {
  const isGainer = outcome === 'yes';
  return [
    {
      ticker: isGainer ? 'QQQ' : 'SH',
      company: isGainer ? 'Invesco QQQ Trust (Nasdaq-100)' : 'ProShares Short S&P 500',
      sector: {
        en: 'Macro Index Equities',
        fr: 'Actions d\'Indices Macro'
      },
      marketCap: '$260B ETF',
      impactType: isGainer ? 'gainer' : 'risk',
      impactScore: 78,
      sensitivityVal: 2.5,
      sensitivity: {
        en: '±2.5% market index beta',
        fr: '±2,5% bêta d\'indice de marché'
      },
      pricedIn: {
        pct: 50,
        status: {
          en: 'Partially Priced-In (50%)',
          fr: 'Partiellement Intégré (50%)'
        },
        level: 'moderate',
        recentMove: {
          en: 'Broad index pricing reflects neutral macro probability baseline.',
          fr: 'La valorisation de l\'indice reflète une hypothèse macro neutre.'
        },
        asymmetry: {
          en: 'Balanced risk/reward distribution.',
          fr: 'Distribution équilibrée du risque et rendement.'
        }
      },
      rationale: {
        en: `Resolution of this Polymarket event to '${outcome.toUpperCase()}' reduces macro uncertainty and reshapes sector risk premiums across tech and growth equities.`,
        fr: `La résolution de cet événement Polymarket en '${outcome.toUpperCase()}' réduit l'incertitude macroéconomique et ajuste les primes de risque sectorielles.`
      },
      catalyst: {
        en: 'Market sentiment stabilization post-resolution.',
        fr: 'Stabilisation du sentiment de marché post-résolution.'
      },
      keyMetrics: {
        revenueExposure: { en: 'Diversified Broad Market', fr: 'Marché Diversifié Global' },
        debtRatio: 'N/A'
      },
      risks: {
        en: 'Unrelated macroeconomic volatility.',
        fr: 'Volatilité macroéconomique exogène.'
      }
    }
  ];
}

if (typeof window !== 'undefined') {
  window.getAllBeneficiaries = getAllBeneficiaries;
  window.getEventBeneficiaries = getEventBeneficiaries;
}
