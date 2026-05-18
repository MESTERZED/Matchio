export type ArticleCategory = 'science' | 'rituel' | 'engagement' | 'producteurs';

export interface Article {
 slug: string;
 title: string;
 excerpt: string;
 category: ArticleCategory;
 author: string;
 publishedAt: string;
 readingTime: number;
 hero: { color: string; eyebrow: string };
 body: string;
}

export const articles: Article[] = [
 {
 slug: 'pla-vs-pha',
 title: 'Pourquoi nous avons choisi le PLA Ingeo plutôt que le PHA',
 excerpt:
 'Le débat des bioplastiques agite l\'industrie. Voici la réflexion technique et environnementale qui a guidé notre choix de matière.',
 category: 'engagement',
 author: 'Émilie Garnier',
 publishedAt: '2026-04-22',
 readingTime: 8,
 hero: { color: '#3A6B4F', eyebrow: 'Engagement · Matière' },
 body: `Le PLA et le PHA sont les deux bioplastiques compostables les plus discutés. Sur le papier, le PHA semble préférable, il est compostable en environnement marin, alors que le PLA exige du compostage industriel à plus de 60°C.

Mais la réalité est plus nuancée. Le PHA est encore produit à très faible échelle, à un coût qui doublerait le prix de chaque capsule. Surtout, l\'analyse de cycle de vie révèle que sa fabrication consomme aujourd\'hui plus d\'eau et d\'énergie par kilo que le PLA Ingeo.

Notre choix : le PLA Ingeo (NatureWorks), certifié TUV OK Compost INDUSTRIAL, fabriqué à partir d\'amidon de maïs non-OGM. Nous regarderons à nouveau le PHA en 2027, quand l\'industrialisation devrait avoir progressé.

Nous l\'écrivons noir sur blanc dans notre rapport annuel : 38 % seulement des Français ont accès au compostage industriel via leur collecte. Le geste compostable reste imparfait sans infrastructure. Nous travaillons avec Lemon Tri pour proposer dès Q1 2027 un retour des capsules par enveloppe pré-affranchie.`,
 },
 {
 slug: 'visite-uji',
 title: 'Visite à Uji : portrait de notre producteur',
 excerpt:
 'Trois jours à Uji avec Hiroshi Sato, troisième génération à la tête d\'une plantation familiale de 4 hectares en culture umbré.',
 category: 'producteurs',
 author: 'Léo Bénichou',
 publishedAt: '2026-03-15',
 readingTime: 12,
 hero: { color: '#0E3B2E', eyebrow: 'Producteurs · Reportage' },
 body: `Uji, banlieue sud de Kyoto. Le brouillard matinal s\'accroche aux collines. Hiroshi Sato remonte les rangées de Camellia sinensis voilées par les bâches noires, la culture umbré, technique séculaire qui prive les plants de lumière trois semaines avant la récolte. C\'est ce qui donne au matcha son umami profond et sa chlorophylle dense.

La plantation Mizuba travaille selon les principes de l\'agriculture biologique japonaise (JAS) depuis 1998, transmise de père en fils sur trois générations. Pas de pesticides, pas d\'engrais de synthèse, seulement du compost de feuilles et un travail manuel obstiné.

Le Tencha, feuilles destinées au matcha, est récolté en avril. Hiroshi nous montre le séchoir hayashi, puis le moulin à pierre artisanal qui broie les feuilles en poudre fine à raison de 40 grammes par heure. C\'est cette lenteur qui préserve les arômes.

Notre matcha cérémonial est issu de cette plantation depuis 2025. Trois containers maritimes par an, 1 040 km de Uji à Paris, puis encapsulation à Brest dans une usine certifiée bio.`,
 },
 {
 slug: 'l-theanine-vingt-etudes',
 title: 'L-théanine : ce que vingt études disent vraiment',
 excerpt:
 'Une revue critique de la littérature scientifique sur la L-théanine et son interaction avec la caféine. Sans hype.',
 category: 'science',
 author: 'Dr. Anaïs Vidal',
 publishedAt: '2026-03-02',
 readingTime: 10,
 hero: { color: '#A8C6A1', eyebrow: 'Science · Revue' },
 body: `La L-théanine est l\'un des actifs les plus étudiés du monde du nootropique. Vingt études cliniques randomisées contrôlées publiées entre 2008 et 2024 nous donnent un cadre relativement clair.

À 100 mg en synergie avec 75 à 100 mg de caféine, la L-théanine module l\'effet stimulant : pic de cortisol atténué, montée d\'attention plus douce, plateau de concentration prolongé. L\'EEG montre une augmentation des ondes alpha, état d\'éveil détendu.

Limites : la majorité des études portent sur des sujets jeunes en bonne santé. L\'effet à long terme (>6 mois) n\'est pas documenté. Nous n\'avons pas trouvé d\'études concluantes sur les femmes enceintes.

Nous citons les références complètes en fin de rapport. Notre choix de 100 mg de L-théanine pure dans chaque capsule FOCUS correspond à la dose médiane efficace dans 18 des 20 études.`,
 },
 {
 slug: 'cout-reel-capsule-nespresso',
 title: 'Le coût réel d\'une capsule Nespresso (avec calculs)',
 excerpt:
 'Nous avons fait le calcul ligne par ligne : extraction d\'aluminium, transport, recyclage. Verdict en grammes de CO₂.',
 category: 'engagement',
 author: 'Émilie Garnier',
 publishedAt: '2026-02-19',
 readingTime: 6,
 hero: { color: '#C9A27E', eyebrow: 'Engagement · Comptabilité' },
 body: `Nespresso communique sur le recyclage. Nous avons voulu refaire les calculs en partant des données publiques de l\'ADEME et de l\'analyse de cycle de vie de Quantis (2018).

Une capsule en aluminium pèse 1,2 g d\'aluminium. La production primaire d\'aluminium émet 17 kg de CO₂ par kilo, soit 20 g de CO₂ par capsule, avant même qu\'on l\'ait utilisée.

Recyclage : Nespresso revendique 30 % de capsules collectées en France (2023). Sur ces 30 %, 80 % sont effectivement recyclées. Soit 24 % de taux de recyclage net. Les 76 % restants finissent en incinération.

Verdict : une tasse de café Nespresso, en intégrant l\'extraction d\'aluminium, le café, le transport et le recyclage partiel, émet en moyenne 87 g de CO₂eq. Une tasse Matchio capsule : 12 g. Une tasse Matchio Refill : 6 g.

Nous publions notre méthodologie complète sur GitHub.`,
 },
 {
 slug: 'recycler-sachets-refill',
 title: 'Comment composter nos sachets Refill (et le carton autour)',
 excerpt:
 'Le sachet kraft du Refill Pack est compostable domestique. Voici comment, et ce que nous suggérons si vous n\'avez pas de compost.',
 category: 'engagement',
 author: 'Léo Bénichou',
 publishedAt: '2026-02-04',
 readingTime: 4,
 hero: { color: '#DCE8DA', eyebrow: 'Engagement · Geste' },
 body: `Le sachet kraft du Refill Pack est en papier non blanchi, sans plastification, certifié OK Compost HOME. Vous pouvez le mettre directement dans votre composteur de jardin ou de balcon.

S\'il vous reste des résidus de matcha à l\'intérieur, c\'est un excellent activateur, riche en azote.

Vous n\'avez pas de compost ? Trois options :
 Le mettre dans le bac à déchets organiques de votre commune (38 % des Français y ont accès en 2026).
 Le glisser dans le compost de votre lombricomposteur d\'appartement.
 Le déposer dans une compostière collective de quartier (Compostri, Les Alchimistes…).

Le sleeve carton du Refill Pack est en carton recyclé et recyclable dans le bac jaune. Encre végétale, pas de pelliculage plastique.`,
 },
 {
 slug: 'rituel-matinal-lea',
 title: 'Le rituel matinal de Léa, 28 ans',
 excerpt:
 'Trois consultantes, trois éditrices, un développeur. Nous avons documenté leurs matins. Voici celui de Léa.',
 category: 'rituel',
 author: 'Léo Bénichou',
 publishedAt: '2026-01-22',
 readingTime: 5,
 hero: { color: '#F5F1E8', eyebrow: 'Rituel · Documentaire' },
 body: `Léa Marin se lève à 6h45, six jours par semaine. Consultante stratégie chez Roland Berger, elle a longtemps carburé à trois cafés filtre avant 10h. Elle a remplacé son rituel café par le matcha Matchio en juin 2025.

"Le premier mois j\'ai eu un peu de mal, la montée est plus douce, j\'avais l\'impression que ça ne marchait pas. Et puis j\'ai compris que c\'était l\'absence de pic et de descente que je cherchais."

Son rituel précis :
6h45, Lever, rideaux ouverts.
6h50, Eau filtrée chauffée à 70°C.
6h55, Une dose Refill FOCUS dans son mug-bol Heritage. Vingt secondes de fouet en M.
7h00, Premier sip, debout devant la fenêtre. Pas de téléphone.
7h05, Lecture, dix pages d\'un livre, jamais d\'écrans.
7h25, Douche, départ.

"Ça paraît contraignant raconté comme ça. C\'est en fait l\'exact contraire, je ne réfléchis plus à mes matins. Le rituel pense pour moi."`,
 },
];

export function getArticleBySlug(slug: string): Article | undefined {
 return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: ArticleCategory): Article[] {
 return articles.filter((a) => a.category === category);
}
