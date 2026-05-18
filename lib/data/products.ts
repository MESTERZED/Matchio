export type ProductCategory = 'capsules' | 'refill' | 'accessoires' | 'garden';
export type ProductEffect = 'focus' | 'deep-work' | 'calm' | 'none';

export interface Product {
 id: string;
 slug: string;
 name: string;
 category: ProductCategory;
 effect: ProductEffect;
 tagline: string;
 shortDescription: string;
 longDescription: string;
 price: number;
 unitLabel: string;
 badges: Array<'compostable' | 'consigne' | 'zero-plastic' | 'reforestation' | 'refill'>;
 colors: {
 box: string;
 sleeve: string;
 foil: string;
 };
 composition: string[];
 preparation: string[];
 carbonImpact: {
 perCup: number;
 vsCoffee: number;
 };
 origin: string;
 variants?: Array<{ id: string; label: string }>;
 featuredOnHome?: boolean;
}

export const products: Product[] = [
 {
 id: 'focus',
 slug: 'focus',
 name: 'FOCUS',
 category: 'capsules',
 effect: 'focus',
 tagline: 'Le geste quotidien',
 shortDescription:
 'Trois heures d\'attention claire, sans tremblement. 30 sachets dose de matcha cérémonial Uji et L-Théanine, à préparer au chasen.',
 longDescription:
 'FOCUS est notre formule socle : 5 g de matcha cérémonial premier choix d\'Uji par sachet, enrichi de 100 mg de L-Théanine pour prolonger l\'attention sans pic ni descente. Pas de capsule, pas de machine. Vous ouvrez le sachet, vous fouettez au chasen, le geste devient le rituel.',
 price: 14.9,
 unitLabel: '30 sachets · 5g',
 badges: ['compostable', 'zero-plastic'],
 colors: {
 box: '#0E3B2E',
 sleeve: '#C9A27E',
 foil: '#D4B57E',
 },
 composition: [
 '30 sachets dose en papier kraft compostable',
 '5 g de matcha cérémonial Uji (Kyoto, Japon) par sachet',
 '100 mg L-Théanine pure par dose',
 'Sans plastique, sans aluminium, sans machine',
 ],
 preparation: [
 'Chauffer 70 ml d\'eau filtrée à 75-80°C (jamais bouillante)',
 'Ouvrir un sachet et verser les 5 g dans un bol matcha (chawan) tiède',
 'Ajouter 2 cuillères d\'eau, former une pâte, puis verser le reste',
 'Fouetter au chasen en W rapide pendant 20 secondes',
 'Composter le sachet : 8 semaines pour retourner à la terre',
 ],
 carbonImpact: {
 perCup: 8,
 vsCoffee: 87,
 },
 origin: 'Plantation Mizuba, Uji, préfecture de Kyoto, Japon',
 featuredOnHome: true,
 },
 {
 id: 'deep-work',
 slug: 'deep-work',
 name: 'DEEP-WORK',
 category: 'capsules',
 effect: 'deep-work',
 tagline: 'Pour les sessions longues',
 shortDescription:
 'Quatre à cinq heures de focus profond. 30 sachets de matcha Uji, L-Théanine et Lion\'s Mane 500 mg, à préparer au chasen.',
 longDescription:
 'DEEP-WORK est conçu pour les sessions de code, d\'écriture longue, de recherche dense. Le Lion\'s Mane (Hericium erinaceus) en extrait dual concentré apporte un soutien cognitif documenté sur la mémoire de travail et la production de NGF. 30 sachets dose, compostage domestique.',
 price: 22.9,
 unitLabel: '30 sachets · 5g',
 badges: ['compostable', 'zero-plastic'],
 colors: {
 box: '#1A1A1A',
 sleeve: '#3A6B4F',
 foil: '#D4B57E',
 },
 composition: [
 '30 sachets dose en papier kraft compostable',
 '5 g de matcha cérémonial Uji par sachet',
 '100 mg L-Théanine pure par dose',
 '500 mg Lion\'s Mane (extrait 30:1) par dose',
 'Sans plastique, sans aluminium, sans machine',
 ],
 preparation: [
 'Chauffer 70 ml d\'eau filtrée à 75-80°C (jamais bouillante)',
 'Ouvrir un sachet et verser les 5 g dans un bol matcha tiède',
 'Ajouter 2 cuillères d\'eau, former une pâte, puis verser le reste',
 'Fouetter au chasen en W rapide pendant 25 secondes',
 'Composter le sachet : 8 semaines pour retourner à la terre',
 ],
 carbonImpact: {
 perCup: 9,
 vsCoffee: 87,
 },
 origin: 'Plantation Mizuba, Uji, Kyoto · Lion\'s Mane cultivé en Bretagne',
 featuredOnHome: true,
 },
 {
 id: 'calm-focus',
 slug: 'calm-focus',
 name: 'CALM-FOCUS',
 category: 'capsules',
 effect: 'calm',
 tagline: 'Clarté sans agitation',
 shortDescription:
 'Trois à quatre heures de concentration sereine. 30 sachets de matcha Uji, L-Théanine et Ashwagandha KSM-66, à préparer au chasen.',
 longDescription:
 'CALM-FOCUS combine la clarté du matcha à l\'effet adaptogène de l\'Ashwagandha KSM-66, l\'extrait racinaire le plus étudié, validé sur la régulation du cortisol. Pour les périodes intenses, les présentations, les semaines exigeantes. 30 sachets dose, compostage domestique.',
 price: 22.9,
 unitLabel: '30 sachets · 5g',
 badges: ['compostable', 'zero-plastic'],
 colors: {
 box: '#C9A27E',
 sleeve: '#0E3B2E',
 foil: '#0E3B2E',
 },
 composition: [
 '30 sachets dose en papier kraft compostable',
 '5 g de matcha cérémonial Uji par sachet',
 '100 mg L-Théanine pure par dose',
 '300 mg Ashwagandha KSM-66® par dose',
 'Sans plastique, sans aluminium, sans machine',
 ],
 preparation: [
 'Chauffer 70 ml d\'eau filtrée à 75-80°C (jamais bouillante)',
 'Ouvrir un sachet et verser les 5 g dans un bol matcha tiède',
 'Ajouter 2 cuillères d\'eau, former une pâte, puis verser le reste',
 'Fouetter au chasen en W rapide, le geste calme et régulier',
 'Composter le sachet : 8 semaines pour retourner à la terre',
 ],
 carbonImpact: {
 perCup: 9,
 vsCoffee: 87,
 },
 origin: 'Plantation Mizuba, Uji · Ashwagandha cultivé en Inde (KSM-66)',
 featuredOnHome: true,
 },
 {
 id: 'heritage-box',
 slug: 'heritage-box',
 name: 'HERITAGE BOX',
 category: 'refill',
 effect: 'none',
 tagline: 'Le rituel pour toujours',
 shortDescription:
 'Mug-bol en grès de Limoges, fouet bambou Takayama, doseur. Le set fondateur du rituel, à garder à vie.',
 longDescription:
 'La Heritage Box est l\'objet permanent, un mug-bol fait main par un atelier de Limoges, un chasen traditionnel de Takayama, un chashaku, et 30 doses pré-mesurées en sachet kraft compostable. À l\'usure, renvoyez-la : nous la nettoyons, la remettons en circulation, et vous gagnez 10 € de crédit.',
 price: 90,
 unitLabel: '30 doses + accessoires permanents',
 badges: ['consigne', 'zero-plastic', 'compostable'],
 colors: {
 box: '#F5F1E8',
 sleeve: '#3A6B4F',
 foil: '#D4B57E',
 },
 composition: [
 'Mug-bol en grès cérémique fait main (Atelier Limoges)',
 'Chasen bambou Takayama, 80 brins',
 'Chashaku (doseur bambou)',
 '30 doses pré-mesurées en sachet kraft',
 'Carte-rituel imprimée (papier Crush Mais)',
 ],
 preparation: [
 'Versez 1 dose dans le mug-bol',
 'Ajoutez 60 ml d\'eau à 70°C',
 'Fouettez en M avec le chasen, 20 secondes',
 'Goûtez. Recommencez le rituel demain.',
 ],
 carbonImpact: {
 perCup: 8,
 vsCoffee: 87,
 },
 origin: 'Atelier de Limoges (FR) · Bambou Takayama (JP) · Matcha Uji (JP)',
 variants: [
 { id: 'focus', label: 'FOCUS, quotidien' },
 { id: 'deep-work', label: 'DEEP-WORK, sessions longues' },
 { id: 'calm-focus', label: 'CALM-FOCUS, sereine' },
 ],
 featuredOnHome: true,
 },
 {
 id: 'refill-pack',
 slug: 'refill-pack',
 name: 'REFILL PACK',
 category: 'refill',
 effect: 'none',
 tagline: 'Zéro déchet, même rituel',
 shortDescription:
 'La recharge mensuelle. 30 doses individuelles en sachet kraft compostable, sans aucune capsule.',
 longDescription:
 'Le Refill Pack est l\'aboutissement du système : pour chaque Heritage Box ou Ritual Set en circulation, une recharge mensuelle de 30 doses en sachet kraft compostable. Moins cher que les capsules, sans plastique, sans capsule. Le geste qui ferme la boucle.',
 price: 12,
 unitLabel: '30 doses',
 badges: ['compostable', 'zero-plastic', 'refill'],
 colors: {
 box: '#C9A27E',
 sleeve: '#0E3B2E',
 foil: '#0E3B2E',
 },
 composition: [
 '30 doses pré-mesurées de matcha (1,8 g chacune)',
 'Sachet kraft compostable non blanchi',
 'Sleeve en carton recyclé',
 'Encre végétale Pantone',
 ],
 preparation: [
 'Ouvrez un sachet kraft',
 'Versez la dose dans votre mug-bol',
 'Préparez selon le rituel matchio',
 'Compostez le sachet vide',
 ],
 carbonImpact: {
 perCup: 6,
 vsCoffee: 87,
 },
 origin: 'Plantation Mizuba, Uji · Kraft Antalis (FR)',
 variants: [
 { id: 'focus', label: 'FOCUS' },
 { id: 'deep-work', label: 'DEEP-WORK' },
 { id: 'calm-focus', label: 'CALM-FOCUS' },
 ],
 featuredOnHome: true,
 },
 {
 id: 'ritual-set',
 slug: 'ritual-set',
 name: 'RITUAL SET',
 category: 'accessoires',
 effect: 'none',
 tagline: 'Pour celles et ceux qui ont déjà leur tasse',
 shortDescription:
 'Chasen, chashaku, support à fouet et 30 doses kraft d\'essai. Idéal en cadeau ou pour démarrer.',
 longDescription:
 'Le Ritual Set est l\'option d\'entrée, vous avez déjà un bol, ce qu\'il vous manque pour entrer dans le rituel : un chasen Takayama, un chashaku, un support à fouet en céramique sage, et 30 doses pour commencer.',
 price: 45,
 unitLabel: 'Set complet + 30 doses',
 badges: ['zero-plastic', 'compostable'],
 colors: {
 box: '#F5F1E8',
 sleeve: '#A8C6A1',
 foil: '#3A6B4F',
 },
 composition: [
 'Chasen bambou Takayama, 80 brins',
 'Chashaku (doseur bambou)',
 'Support à fouet en céramique Matcha Sage',
 '30 doses en sachet kraft',
 ],
 preparation: [
 'Posez le chasen sur son support après chaque usage',
 'Rincez délicatement à l\'eau tiède',
 'Séchez à l\'air libre',
 'Le bambou se patine : c\'est normal',
 ],
 carbonImpact: {
 perCup: 8,
 vsCoffee: 87,
 },
 origin: 'Bambou Takayama (JP) · Céramique Limoges (FR)',
 },
 {
 id: 'matchio-garden',
 slug: 'matchio-garden',
 name: 'MATCHIO GARDEN',
 category: 'garden',
 effect: 'none',
 tagline: 'Faire pousser son rituel',
 shortDescription:
 'Kit de plantation Camellia sinensis. Pot biodégradable, graines, guide illustré. 5 € reversés à Reforest\'Action.',
 longDescription:
 'Matchio Garden est un objet symbolique autant qu\'utilitaire. Il faut 3 à 5 ans pour récolter ses propres feuilles. Ce kit est notre manière de fermer la boucle : un théier à faire grandir, un arbre planté en France pour chaque kit. Patience et nature.',
 price: 15,
 unitLabel: 'Kit complet',
 badges: ['compostable', 'reforestation', 'zero-plastic'],
 colors: {
 box: '#A8C6A1',
 sleeve: '#3A6B4F',
 foil: '#0E3B2E',
 },
 composition: [
 'Pot biodégradable en fibre de coco, Ø 100 mm',
 'Substrat enrichi (terreau bio)',
 'Graines de Camellia sinensis',
 'Guide illustré 12 pages "Faire pousser son théier"',
 'Étiquette en bois pour suivre la croissance',
 ],
 preparation: [
 'Installez le pot dans une pièce lumineuse',
 'Semez 3 graines, recouvrez de 1 cm de terre',
 'Maintenez le substrat humide, sans excès',
 'Première feuille : 4 à 8 semaines',
 ],
 carbonImpact: {
 perCup: 0,
 vsCoffee: 87,
 },
 origin: 'Graines de pépinière Naudet (Sologne, FR) · Pot fibre de coco',
 },
];

export const bundles = [
 {
 id: 'discovery',
 name: 'Bundle Découverte',
 slug: 'bundle-decouverte',
 description: 'Les trois formules réunies pour trouver la vôtre.',
 items: ['focus', 'deep-work', 'calm-focus'],
 price: 49,
 originalPrice: 60.7,
 },
 {
 id: 'refill-starter',
 name: 'Bundle Refill Starter',
 slug: 'bundle-refill-starter',
 description: 'Heritage Box + 3 Refill Packs au choix.',
 items: ['heritage-box', 'refill-pack', 'refill-pack', 'refill-pack'],
 price: 110,
 originalPrice: 126,
 },
 {
 id: 'gift',
 name: 'Bundle Cadeau',
 slug: 'bundle-cadeau',
 description: 'Ritual Set + Matchio Garden, emballage cadeau inclus.',
 items: ['ritual-set', 'matchio-garden'],
 price: 55,
 originalPrice: 60,
 },
];

export function getProductBySlug(slug: string): Product | undefined {
 return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(currentId: string, limit = 3): Product[] {
 return products.filter((p) => p.id !== currentId).slice(0, limit);
}
