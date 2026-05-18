export const ecoStats = {
  carbonPerCup: 12,
  carbonPerCoffee: 87,
  wastePerYearWithRefill: 0.3,
  wastePerYearWithCompetitorCapsules: 4.2,
  averageSupplierDistanceKm: 1040,
  compostableRate: 100,
  packagingCompostableRate: 92,
  treesPlantedToDate: 4218,
  heritageBoxesInCirculation: 1872,
  plasticAvoidedKg: 2456,
};

export const carbonBreakdown = [
  { phase: 'Culture & récolte (Uji)', value: 2.1, color: '#3A6B4F' },
  { phase: 'Broyage à la pierre', value: 0.8, color: '#A8C6A1' },
  { phase: 'Transport maritime Japon-France', value: 4.6, color: '#C9A27E' },
  { phase: 'Encapsulation Bretagne', value: 1.2, color: '#0E3B2E' },
  { phase: 'Logistique dernière étape', value: 2.4, color: '#A88561' },
  { phase: 'Compostage', value: 0.9, color: '#DCE8DA' },
];

export interface PlantingRegion {
  id: string;
  name: string;
  country: string;
  lat: number;
  lng: number;
  partner: string;
  action: string;
  count: number;
  unit: string;
}

export const plantingRegions: PlantingRegion[] = [
  {
    id: 'uji',
    name: 'Uji',
    country: 'Japon',
    lat: 34.88,
    lng: 135.80,
    partner: 'Plantation Mizuba',
    action: 'Théiers Tencha en culture umbré JAS',
    count: 4,
    unit: 'hectares en agroforesterie',
  },
  {
    id: 'brest',
    name: 'Brest',
    country: 'France',
    lat: 48.39,
    lng: -4.49,
    partner: 'Reforest\'Action · ONF Bretagne',
    action: 'Reforestation de chênes et charmes en Bretagne',
    count: 4218,
    unit: 'arbres plantés',
  },
  {
    id: 'sologne',
    name: 'Sologne',
    country: 'France',
    lat: 47.65,
    lng: 2.20,
    partner: 'Pépinière Naudet',
    action: 'Semences Camellia sinensis (kits Garden)',
    count: 612,
    unit: 'kits Garden distribués',
  },
  {
    id: 'atlas',
    name: 'Haut Atlas',
    country: 'Maroc',
    lat: 31.06,
    lng: -7.86,
    partner: 'High Atlas Foundation',
    action: 'Cèdres et caroubiers en lutte anti-désertification',
    count: 1200,
    unit: 'cèdres plantés',
  },
  {
    id: 'kericho',
    name: 'Kericho',
    country: 'Kenya',
    lat: -0.37,
    lng: 35.28,
    partner: 'Coopératives thé bio fairtrade',
    action: 'Soutien filière éthique et formation paysanne',
    count: 38,
    unit: 'producteurs accompagnés',
  },
  {
    id: 'mata-atlantica',
    name: 'Mata Atlântica',
    country: 'Brésil',
    lat: -22.97,
    lng: -43.18,
    partner: 'SOS Mata Atlântica',
    action: 'Restauration de la forêt atlantique côtière',
    count: 800,
    unit: 'arbres natifs replantés',
  },
];

export const environmentalKpis = [
  {
    value: '12 g',
    label: 'CO₂eq par tasse',
    detail: 'contre 87 g pour un café filtre',
  },
  {
    value: '0,3 kg',
    label: 'déchets par client / an',
    detail: 'avec le système Refill (4,2 kg en moyenne avec capsules)',
  },
  {
    value: '1 040 km',
    label: 'distance moyenne fournisseur',
    detail: 'Uji · Paris · client, transport maritime majoritaire',
  },
  {
    value: '100 %',
    label: 'papier compostable à domicile',
    detail: 'OK Compost HOME, retour à la terre en 8 semaines',
  },
];

export const ecoPartners = [
  {
    name: 'Reforest\'Action',
    role: 'Reforestation France',
    description:
      'Pour chaque kit Matchio Garden, un arbre planté dans une forêt française en partenariat avec l\'ONF.',
    url: 'https://www.reforestaction.com',
  },
  {
    name: 'Pulpatronic',
    role: 'Insert pulpe moulée',
    description:
      'Le calage intérieur de la Heritage Box est en pulpe de carton moulée, recyclée et compostable, fabriquée en région parisienne.',
    url: 'https://pulpatronic.com',
  },
  {
    name: 'NatureWorks Ingeo',
    role: 'PLA capsules',
    description:
      'Notre PLA est issu d\'amidon de maïs non-OGM cultivé aux États-Unis, avec une certification compostage industriel TUV OK Compost.',
    url: 'https://www.natureworksllc.com',
  },
];

export const honestLimits = [
  {
    title: 'Le matcha vient du Japon',
    description:
      'Nous l\'assumons : il n\'existe pas de matcha cérémonial cultivé en France de qualité équivalente. Le transport maritime représente 30 % de notre bilan carbone. Nous travaillons à un mix maritime + train pour 2027.',
  },
  {
    title: 'Les bundles cadeau ont un sur-emballage',
    description:
      'Pour Noël 2025, nos bundles cadeau ont 18 % d\'emballage en plus que les produits seuls. Nous testons en 2026 un emballage cadeau réutilisable en tissu Furoshiki.',
  },
  {
    title: 'Le PLA n\'est compostable qu\'en industriel',
    description:
      'Nos capsules nécessitent un compostage industriel (60°C+). 38 % des Français y ont accès via leur collecte. Le geste reste imparfait sans infrastructure adéquate.',
  },
  {
    title: 'Le programme consigne reste limité',
    description:
      'Aujourd\'hui, seules 14 % des Heritage Box reviennent en consigne. Nous étudions un système de retour automatique avec La Poste pour faciliter le geste.',
  },
];

export const futureCommitments = [
  { date: 'Q3 2026', commitment: 'Lancement du retour consigne pré-affranchi La Poste' },
  { date: 'Q4 2026', commitment: 'Bilan carbone certifié Bilan Carbone® ADEME' },
  { date: 'Q1 2027', commitment: 'Mix transport matcha 60% maritime + 40% rail Trans-Sibérien' },
  { date: 'Q2 2027', commitment: 'Bundle cadeau en Furoshiki réutilisable' },
  { date: '2028', commitment: 'Plantation pilote Camellia sinensis Pays Basque (R&D)' },
];
