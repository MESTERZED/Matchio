# Matchio, Site e-commerce premium

Site multi-pages pour Matchio, marque française de matcha cérémonial en capsules compostables, avec système circulaire Heritage Box + Refill Pack.

## Stack technique

- **Framework** : Next.js 15 (App Router) + TypeScript strict
- **Styling** : Tailwind CSS 3.4 + design tokens custom
- **3D** : React Three Fiber + Drei + Three.js
- **Animations** : Framer Motion + GSAP + Lenis (smooth scroll)
- **State** : Zustand (panier persistant)
- **Forms** : React Hook Form + Zod validation
- **Charts** : SVG sur-mesure (CaffeineChart, PriceBreakdown)

## Démarrage

```bash
npm install
npm run dev
```

Le site est servi sur `http://localhost:3000`.

```bash
npm run build # build de production
npm run start # serve la build
npm run lint # eslint
```

## Architecture

```
matchio/
├── app/ # App Router Next.js 15
│ ├── layout.tsx # Layout root (fonts, header, footer, cart)
│ ├── page.tsx # Home
│ ├── globals.css # Tokens & utilités custom
│ ├── boutique/page.tsx
│ ├── produit/[slug]/page.tsx # Fiche produit dynamique
│ ├── refill/page.tsx # Page clé éco
│ ├── engagement/page.tsx # Transparence radicale
│ ├── bienfaits/page.tsx # Science
│ ├── rituel/page.tsx # Storytelling chanoyu
│ ├── histoire/page.tsx # Récit fondateur
│ ├── journal/ # Blog éditorial
│ │ ├── page.tsx
│ │ └── [slug]/page.tsx
│ ├── panier/page.tsx
│ ├── checkout/page.tsx # Tunnel 3 étapes
│ ├── contact/page.tsx
│ ├── not-found.tsx
│ └── loading.tsx
│
├── components/
│ ├── 3d/ # Modèles Three.js programmatiques
│ │ ├── Scene.tsx
│ │ ├── ProductBox.tsx # Boîtes capsules (Focus, Deep-Work, Calm)
│ │ ├── HeritageBox.tsx # Mug + chasen + accessoires
│ │ ├── RefillPack.tsx # Sachet kraft refill
│ │ ├── CircularLoop.tsx # Boucle circulaire éco
│ │ └── FallingLeaves.tsx # Particles instanced
│ ├── animations/ # Reveal, CountUp
│ ├── home/ # Sections Home
│ ├── shop/ # Galerie 3D, AddToCart, Accordion, Charts
│ ├── refill/ # RefillCalculator
│ ├── engagement/ # PriceBreakdown
│ ├── bienfaits/ # CaffeineChart
│ ├── contact/ # ContactForm
│ ├── layout/ # Header, Footer, CartDrawer
│ ├── ui/ # Button, Eyebrow, Divider, EcoBadge, ProductCard, LeafLogo, PageHeader
│ └── providers/ # LenisProvider
│
├── lib/
│ ├── data/ # Données mockées (produits, articles, eco-stats)
│ ├── store/cart.ts # Zustand persist
│ └── utils.ts # cn, formatPrice, formatNumber
│
├── tailwind.config.ts # Palette + typo + animations custom
├── tsconfig.json
└── next.config.mjs
```

## Direction artistique

Système strict, palette, typographie et tons figés.

### Palette

```
--matcha-deep: #0E3B2E /* fond principal sombre, titres */
--cream: #F5F1E8 /* fond principal clair */
--clay: #C9A27E /* accent doré, CTA secondaires */
--ink: #1A1A1A /* texte principal */

/* Secondaires */
--matcha-mid: #3A6B4F
--matcha-soft: #A8C6A1
--matcha-mist: #DCE8DA
--cream-dark: #E8E2D0
--clay-dark: #A88561
--ink-soft: #4A4A4A
--ink-muted: #8C8C8C
```

### Typographie

- **Display** : Playfair Display Italic (400), TOUS les titres en italique, jamais bold
- **Body** : Inter (400/500/600)
- **Mono** : JetBrains Mono, prix, données chiffrées, eyebrows

### Easing

- `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out) pour 90 % des transitions
- 200 ms (micro), 400 ms (UI), 800 ms (entrées), 1200 ms (hero)

## Pages-clés

### Home `/`
Hero plein écran avec boîte 3D rotative, manifeste, stats animées count-up, grille produits avec tabs, section Refill avec animation 3D circulaire, bénéfices, compteurs vivants, témoignage, CTA final.

### Refill `/refill`
Hero immersif avec animation 3D plein écran (CircularLoop), 3 étapes du système, **calculateur d'impact interactif**, programme consigne en 4 étapes, compteurs vivants.

### Engagement `/engagement`
Hero avec particles 3D feuilles tombantes (FallingLeaves), ventilation prix en camembert SVG, cycle de vie carbone en 6 phases, partenaires éco, **section honnêteté radicale** (limites + calendrier), rapport téléchargeable.

### Bienfaits `/bienfaits`
Texte éditorial scientifique, 4 bénéfices documentés, **graphique caféine plasmatique 6h** (SVG sur-mesure), 3 actifs nootropiques, sources scientifiques.

## Système 3D

Tous les modèles sont **construits programmatiquement** avec géométries primitives (RoundedBox, Cylinder, plane), aucun GLB importé. Cela garantit :

- 0 dépendance asset
- Bundle léger
- Performance constante
- Customisation par couleur (ProductBox accepte `boxColor`, `sleeveColor`, `foilColor`)

Performance :
- `Suspense` autour de chaque scène
- `dynamic(() => …, { ssr: false })` sur tous les Canvas
- Animation `useFrame` paused naturellement quand off-screen
- DPR clampé `[1, 2]` pour mobile

## Données

Toutes les données (7 produits, 6 articles, stats éco, partenaires, limites, engagements futurs) sont mockées en TypeScript dans `lib/data/`. Aucun lorem ipsum, tout reflète la voix de marque définie (sobre, pédagogue, sincère, élégant).

## Accessibilité

- WCAG 2.1 AA visé
- Contrastes ≥ 4.5:1 (matcha-deep sur cream, etc.)
- Skip-link "Aller au contenu principal"
- Focus visible (outline clay 2px)
- Navigation clavier complète (panier drawer Esc, focus trap)
- `prefers-reduced-motion` respecté (Lenis désactivé, reveals instantanées, count-up final)
- `<html lang="fr">`

## Performance & SEO

- `next/font` (Playfair, Inter, JetBrains Mono), pas de FOUT
- Métadonnées par page (title, description, OG)
- `generateStaticParams` pour produit et journal (SSG)
- Schema balisage prêt (JSON-LD à enrichir si besoin)
- Lenis désactivé si reduce-motion

## Limitations connues / à compléter

- Les modèles GLB haute qualité (Heritage Box, mug céramique) sont des
 approximations programmatiques, pour passage en production, prévoir des
 exports Blender → GLB.
- Le checkout est non-fonctionnel (UI seulement, pas d'intégration Stripe).
- Recherche fuzzy non implémentée (input présent dans le header).
- Newsletter non connectée à un service (Mailchimp/Brevo).
- Pas de CMS, articles en `lib/data/articles.ts` (migrable vers MDX/Sanity).

## Crédits

- Inspirations design : Aesop, Matchakari, Sundays Forever, Oatly, Forest Bathing
- Inspirations 3D : Igloo Inc, Bruno Simon, Lusion
- Feuille SVG : design original Matchio
- Sources scientifiques citées : voir page `/bienfaits`

 Construit avec rigueur, pour une marque qui mérite la sienne.
