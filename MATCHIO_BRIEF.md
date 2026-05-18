# MATCHIO, BRIEF TECHNIQUE COMPLET POUR CLAUDE CODE

> Document de cadrage exhaustif destiné à guider la création d'un site web e-commerce premium pour la marque Matchio. Lisez l'intégralité avant de commencer. Aucune décision technique ne doit être prise sans avoir consulté la section concernée.

---

## TABLE DES MATIÈRES

1. [Contexte & vision](#1-contexte--vision)
2. [Positionnement et stratégie marketing éco-responsable](#2-positionnement--stratégie-marketing)
3. [La gamme de produits (refondue)](#3-la-gamme-de-produits)
4. [Identité de marque](#4-identité-de-marque)
5. [Architecture du site](#5-architecture-du-site)
6. [Spécifications page par page](#6-spécifications-page-par-page)
7. [Stack technique recommandé](#7-stack-technique-recommandé)
8. [Direction artistique & animations](#8-direction-artistique--animations)
9. [Mockups 3D et visuels produits](#9-mockups-3d--visuels-produits)
10. [Fonctionnalités e-commerce](#10-fonctionnalités-e-commerce)
11. [Performance & SEO](#11-performance--seo)
12. [Accessibilité](#12-accessibilité)
13. [Instructions d'exécution pour Claude Code](#13-instructions-dexécution)
14. [Critères d'acceptation finaux](#14-critères-dacceptation)

---

## 1. CONTEXTE & VISION

### 1.1 La marque
**Matchio** est une marque française de capsules de matcha cérémonial enrichies de nootropiques, conçue pour les esprits qui veulent penser mieux, étudiants, jeunes professionnels créatifs, télétravailleurs exigeants. La marque fait le pont entre la rigueur scientifique des nootropiques modernes et le rituel séculaire du thé japonais.

### 1.2 Mission
Offrir une alternative au café qui ne sacrifie ni la performance cognitive, ni la planète, ni l'esthétique du quotidien.

### 1.3 Promesse client
**"Trois heures de clarté, zéro impact, un rituel."**

### 1.4 Public cible
- **Persona principal** : Léa, 28 ans, consultante stratégie à Paris. Boit 3 cafés par matinée, anxiété en milieu de journée, sensible à l'éco-responsabilité, achète chez Aesop, lit Kinfolk, suit @leobrasi sur Instagram.
- **Persona secondaire** : Hugo, 32 ans, développeur senior en télétravail. Cherche du focus pour ses sessions de deep work, refuse le plastique jetable, valorise la transparence des marques.

### 1.5 Concurrents et inspirations
- **Concurrents directs** : Encha, Matchaful, Pique, Jade Leaf
- **Inspirations design web** :
 - [aesop.com](https://www.aesop.com), référence absolue minimalisme premium
 - [matchakari.com](https://matchakari.com), codes japonais dans e-commerce
 - [sundaysforever.com](https://sundaysforever.com), typographie éditoriale, scroll narratif
 - [oatly.com](https://www.oatly.com), éco-responsabilité avec personnalité
 - [forestbathing.co](https://forestbathing.co), scroll storytelling 3D nature
- **Inspirations 3D** :
 - [igloo.inc](https://igloo.inc), produits 3D rotatifs au scroll
 - [bruno-simon.com](https://bruno-simon.com), Three.js maîtrisé
 - [lusion.co](https://lusion.co), transitions fluides

---

## 2. POSITIONNEMENT & STRATÉGIE MARKETING ÉCO-RESPONSABLE

### 2.1 Le pivot stratégique : éco-responsabilité au cœur

L'éco-responsabilité n'est PAS une feature secondaire dans une page "engagements". Elle est **le second pilier du positionnement, à parité avec la performance cognitive**. Toute la stratégie produit, marketing et web doit le refléter.

### 2.2 Les trois piliers de la marque

| Pilier | Promesse | Manifestation |
|---|---|---|
| **Performance cognitive** | Trois heures de clarté | Formules nootropiques scientifiquement dosées |
| **Zéro impact** | Bilan carbone et déchet quasi-nul | Capsules compostables, recharge, consigne, traçabilité |
| **Rituel quotidien** | Trois minutes d'intention | Storytelling, packaging cérémonial, geste éducatif |

### 2.3 Refonte de la gamme avec angle éco

La gamme s'élargit pour intégrer pleinement la dimension circulaire :

#### Gamme actuelle (capsules), adaptée
Les trois SKUs existants restent mais leur communication change : la capsule **n'est plus juste compostable**, elle est désormais positionnée comme étape de transition vers le **système de recharge sans déchet**.

#### NOUVEAU : gamme « Refill Ritual »
Un système innovant et différenciant :
- **Boîte fondatrice "Heritage Box"** (90 €) : un set céramique permanent comprenant un mug-bol en grès artisanal français + un fouet bambou + un doseur + 30 doses de matcha en sachet kraft compostable
- **Recharges mensuelles "Refill Pack"** (12 € au lieu de 14,90 € en capsule) : sachet kraft de 30 doses pré-mesurées, à composter, sans aucune capsule
- **Programme consigne "Return & Renew"** : vous renvoyez les boîtes vides Heritage par retour gratuit, on les nettoie et les remet en circulation, vous gagnez 10 € de crédit

#### NOUVEAU : « Matchio Garden »
Pour fermer la boucle : kit de plantation de Camellia sinensis (théier) à faire pousser chez soi, livré en pot biodégradable, accompagné d'un guide. **15 €**, dont 5 € reversés à un programme de reforestation en France via Reforest'Action.

### 2.4 Stratégie de communication

#### Ton de marque
- **Sobre**, pas de superlatifs marketing
- **Pédagogue**, chaque promesse est documentée scientifiquement
- **Sincère**, on publie nos limites et nos calculs (transparence radicale)
- **Élégant**, l'éco-responsabilité ne doit JAMAIS sembler austère ou militante

#### Vocabulaire à utiliser
- "circulaire" plutôt que "écologique"
- "consigne" plutôt que "recyclable"
- "matière" plutôt que "matériau"
- "rituel" plutôt que "habitude"
- "gestes" plutôt que "actions"
- "transparence" plutôt que "honnêteté"

#### Vocabulaire à éviter ABSOLUMENT
- "vert", "green", "naturel", "biologique" (générique, sans force)
- "boost", "energy", "wellness" (langage de marque commerciale)
- "révolutionnaire", "innovant", "unique" (mots vides)
- Émojis dans le contenu rédactionnel

### 2.5 Preuves d'éco-responsabilité à mettre en avant

Ces éléments doivent apparaître à plusieurs endroits du site, **chiffrés et documentés** :

| Preuve | Chiffre | Où l'afficher |
|---|---|---|
| Bilan carbone par tasse | 12 g CO₂eq (vs 87 g pour un café filtre) | Home, page Bienfaits, page Engagement |
| Déchets par client/an | 0,3 kg avec Refill (vs 4,2 kg avec capsules café concurrent) | Page Engagement, footer |
| Distance moyenne fournisseur | 1 040 km (Uji-Paris-client) | Page Notre histoire |
| % matières compostables | 100 % capsules + 92 % packaging | Page produit |
| Reforestation cumulée | X arbres plantés (compteur dynamique) | Header, page Engagement |
| Boîtes Heritage en circulation | X boîtes en consigne (compteur dynamique) | Page Refill |

---

## 3. LA GAMME DE PRODUITS

### 3.1 Vue d'ensemble (7 SKUs)

```
GAMME CAPSULES (transition) GAMME REFILL (cœur de marque) EXTENSION
──────────────────────────── ──────────────────────────── ─────────
01. FOCUS 14,90 € 04. HERITAGE BOX 90,00 € 07. MATCHIO GARDEN 15,00 €
02. DEEP-WORK 22,90 € 05. REFILL PACK 12,00 € (kit théier maison)
03. CALM-FOCUS 22,90 € 06. RITUAL SET 45,00 €
 (mug + chasen + doseur)
```

### 3.2 Description détaillée de chaque produit

#### 01. FOCUS, 14,90 € · 30 capsules
- **Tagline** : "Le geste quotidien"
- **Actifs** : Matcha cérémonial Uji + L-Théanine 100 mg
- **Effet** : 3 h d'attention claire
- **Usage** : Quotidien studieux, réunions, lectures
- **Couleur boîte** : Matcha Deep #0E3B2E + sleeve Clay Sand #C9A27E

#### 02. DEEP-WORK, 22,90 € · 30 capsules
- **Tagline** : "Pour les sessions longues"
- **Actifs** : Matcha cérémonial Uji + L-Théanine + Lion's Mane 500 mg
- **Effet** : 4-5 h de focus profond
- **Usage** : Code, écriture longue, recherche
- **Couleur boîte** : Ink #1A1A1A + sleeve Matcha Sage #3A6B4F

#### 03. CALM-FOCUS, 22,90 € · 30 capsules
- **Tagline** : "Clarté sans agitation"
- **Actifs** : Matcha cérémonial Uji + L-Théanine + Ashwagandha KSM-66 300 mg
- **Effet** : 3-4 h de concentration sereine
- **Usage** : Périodes stressantes, présentations
- **Couleur boîte** : Clay Sand #C9A27E + sleeve Matcha Deep #0E3B2E

#### 04. HERITAGE BOX, 90,00 € · 30 doses + accessoires permanents
- **Tagline** : "Le rituel pour toujours"
- **Contenu** :
 - Mug-bol en grès cérémique fait main par un atelier de Limoges (couleur Matcha Sage)
 - Chasen (fouet bambou) traditionnel de Takayama
 - Chashaku (doseur bambou)
 - 30 doses pré-mesurées en sachet kraft compostable (formule au choix)
 - Carte-rituel imprimée sur papier Crush Mais
- **Programme consigne** : Possibilité de renvoyer la boîte vide et recevoir un crédit de 10 €
- **Couleur** : Cream #F5F1E8 avec dorure or pâle

#### 05. REFILL PACK, 12,00 € · 30 doses
- **Tagline** : "Zéro déchet, même rituel"
- **Contenu** : 30 doses individuelles en sachet kraft compostable, dans un sleeve en carton recyclé
- **Disponible en 3 formules** : FOCUS / DEEP-WORK / CALM-FOCUS
- **Économie vs capsules** : -19% du prix + zéro déchet plastique
- **Pré-requis** : Avoir une Heritage Box ou un Ritual Set

#### 06. RITUAL SET, 45,00 € · accessoires seuls
- **Tagline** : "Pour celles et ceux qui ont déjà leur tasse"
- **Contenu** : Chasen, chashaku, support à fouet, 30 doses kraft d'essai
- **Idéal pour** : Cadeau, démarrage du rituel sans engagement Heritage

#### 07. MATCHIO GARDEN, 15,00 € · kit plantation
- **Tagline** : "Faire pousser son rituel"
- **Contenu** :
 - Pot biodégradable en fibre de coco
 - Substrat enrichi
 - Graines de Camellia sinensis (théier vert)
 - Guide illustré 12 pages "Comment faire pousser son théier"
 - Étiquette en bois pour suivre la croissance
- **Engagement** : 5 € reversés à Reforest'Action pour chaque kit vendu (1 arbre planté en forêt française)
- **Limitation honnête** : Il faut 3-5 ans pour récolter ses propres feuilles. C'est un objet symbolique autant qu'utilitaire, l'assumer dans le copywriting.

### 3.3 Bundles à créer
- **Bundle "Découverte"** : 3 capsules différentes (FOCUS + DEEP-WORK + CALM-FOCUS) à 49 € (vs 60 € séparé)
- **Bundle "Refill Starter"** : Heritage Box + 3 Refill Packs à 110 € (vs 126 € séparé)
- **Bundle "Cadeau"** : Ritual Set + Garden Kit à 55 € (vs 60 € séparé) avec emballage cadeau

---

## 4. IDENTITÉ DE MARQUE

### 4.1 Palette de couleurs (système strict, ne JAMAIS dévier)

```css
/* PRIMAIRES, utiliser pour 90% du site */
--matcha-deep: #0E3B2E; /* fond principal sombre, titres */
--cream: #F5F1E8; /* fond principal clair */
--clay-sand: #C9A27E; /* accent doré, CTA secondaires */
--ink: #1A1A1A; /* texte principal */

/* SECONDAIRES, accents et nuances */
--matcha-mid: #3A6B4F; /* hover, secondary */
--matcha-soft: #A8C6A1; /* texte sur fond sombre */
--matcha-mist: #DCE8DA; /* fond hover, dividers */
--cream-dark: #E8E2D0; /* fond cards */
--clay-dark: #A88561; /* clay au hover */
--ink-soft: #4A4A4A; /* texte secondaire */
--muted: #8C8C8C; /* texte tertiaire */

/* RATIO D'USAGE OBLIGATOIRE */
/* 60% Matcha Deep ou Cream (fond) */
/* 25% Cream ou Matcha Deep (alterné) */
/* 10% Clay Sand (accents) */
/* 5% autres couleurs (texte, dividers) */
```

### 4.2 Typographie

```css
/* HEADINGS, Playfair Display (Google Fonts) */
font-family: 'Playfair Display', Georgia, serif;
font-style: italic; /* TOUJOURS italique pour les titres */
font-weight: 400; /* jamais 700+ */
letter-spacing: -0.01em;

/* BODY, Inter (Google Fonts) */
font-family: 'Inter', system-ui, sans-serif;
font-weight: 400;
line-height: 1.6;

/* DATA / PRIX, JetBrains Mono (Google Fonts) */
font-family: 'JetBrains Mono', monospace;

/* EYEBROWS / LABELS */
font-family: 'Inter';
font-size: 0.75rem;
font-weight: 600;
letter-spacing: 0.2em;
text-transform: uppercase;
color: var(--clay-sand);
```

### 4.3 Logo
- **Symbole** : feuille de matcha lancéolée stylisée, avec nervure centrale courbe, inclinée à -18°. Pas de cercle autour. Couleur unique (matcha ou cream selon fond).
- **Wordmark** : `matchio` en minuscules, Playfair Display Italic, espacement légèrement large
- **Usage** : symbole + wordmark côte à côte (horizontal) OU symbole au-dessus du wordmark (vertical pour favicon, packaging)

### 4.4 Voix de marque
- **Phrases courtes**. Pas de subordonnées emboîtées.
- **Ponctuation typographique** : utiliser, (em-dash), ' (guillemet français), · (point milieu) pour les listes inline.
- **Pas de "Nous"** dans les premiers paragraphes, commencer par le fait, pas par soi.
- **Métaphores rares mais précises**. Pas de poésie gratuite.

---

## 5. ARCHITECTURE DU SITE

### 5.1 Sitemap (10 pages)

```
matchio.fr/
│
├── / → Home
├── /boutique → Catalogue complet
├── /produit/:slug → Fiche produit dynamique
│ ├── /produit/focus
│ ├── /produit/deep-work
│ ├── /produit/calm-focus
│ ├── /produit/heritage-box
│ ├── /produit/refill-pack
│ ├── /produit/ritual-set
│ └── /produit/matchio-garden
│
├── /refill → Page dédiée au système Refill (cœur éco)
├── /bienfaits → Science du matcha
├── /rituel → Le rituel matchio
├── /engagement → Notre engagement éco (NOUVELLE PAGE CLÉ)
├── /journal → Articles éditoriaux (blog)
│ └── /journal/:slug → Article individuel
├── /histoire → Notre histoire
├── /panier → Panier
├── /checkout → Tunnel de commande (3 étapes)
└── /contact → Contact + FAQ
```

### 5.2 Pages prioritaires (par ordre d'importance)
1. **Home**, première impression, doit faire entrer dans l'univers
2. **Engagement**, différenciateur principal, pilier éco
3. **Refill**, système innovant, à mettre en valeur
4. **Boutique + fiche produit**, conversion
5. **Bienfaits**, preuve scientifique
6. **Rituel**, émotionnel
7. **Histoire**, confiance
8. **Journal**, SEO + autorité
9. **Contact**, service
10. **Panier/Checkout**, conversion finale

---

## 6. SPÉCIFICATIONS PAGE PAR PAGE

### 6.1 HOME (`/`)

#### Sections (ordre vertical)

**1. Hero (100vh)**
- Fond : Matcha Deep
- Composition : split 60/40, texte gauche, mockup 3D droite
- Titre : `Le matcha qui pense\navec vous.` (Playfair italic, 6vw)
- Sous-titre : "Trois heures de clarté. Zéro déchet. Un rituel."
- 2 CTAs : "Découvrir la gamme" (clay) + "Pourquoi le matcha →" (ghost cream)
- **3D : modèle de la boîte FOCUS qui rotate lentement sur l'axe Y**, avec léger float Y. Cliquable pour aller à la fiche produit.

**2. Bandeau de preuves éco-responsables (sticky annonce)**
- Fond : Cream
- Hauteur : 60 px
- Contenu : 3 éléments en ligne défilante très lente (12 s par boucle)
 - "12 g CO₂eq par tasse · vs 87 g pour un café"
 - "100% compostable · sans aluminium"
 - "Consigne Heritage Box · 10 € de crédit retourné"
- Animation : ticker très subtil, à droite vers gauche, 30 % d'opacité au repos

**3. Manifeste (section narrative)**
- Fond : Cream
- Texte au centre, max 720 px
- Eyebrow : "Notre manifeste"
- H2 : "L'excellence du matcha japonais, repensée pour les esprits qui veulent penser mieux, sans coûter à la planète."
- Divider doré (40 px)
- Lead 2 paragraphes : explication du positionnement triple (cognitif, éco, rituel)
- CTA discret : "Découvrir notre histoire →"

**4. Stats (4 colonnes)**
- Fond : Cream
- 4 stats avec animation **count-up au scroll** :
 - 137×, Antioxydants vs thé vert
 - 12g, CO₂ par tasse
 - 0, Aluminium
 - 100%, Compostable

**5. Section "La gamme" (cœur commerce)**
- Fond : White
- Tabs horizontaux : "Capsules" | "Refill" | "Tout voir"
- Grille 3 colonnes
- Chaque carte : mockup 3D au hover (rotation Y au survol), nom, sub, prix, badge éco si applicable
- CTA "Voir toute la boutique →"

**6. Section "Refill, le geste qui change tout"**
- Fond : Matcha Deep
- Layout split 50/50
- Gauche : titre "Un rituel. Aucune trace." + 3 puces (Heritage Box → Refill Pack → Consigne)
- Droite : **animation 3D** montrant la boucle circulaire (Heritage → Refill → Consigne → Heritage) en infinie boucle douce
- CTA : "Découvrir le système Refill →"

**7. Section bienfaits (3 cartes)**
- Fond : Cream
- 3 cartes avec icône SVG animée + titre + description
 - Caféine + L-théanine
 - Antioxydants EGCG
 - Bilan carbone × 7 plus faible
- CTA : "Lire la science complète →"

**8. Section "Compteurs vivants"**
- Fond : Clay Sand
- Texte : "Ensemble, depuis 2026 :"
- 3 compteurs animés :
 - X arbres plantés (counter dynamique, simule un live counter)
 - Y boîtes Heritage en circulation
 - Z kg de plastique évités
- Effet : count-up + tick sonore optionnel

**9. Témoignage (centré)**
- Fond : Cream
- Citation Playfair italic 2.75rem max
- "Je n'avais pas réalisé à quel point le café perturbait ma matinée. Avec Matchio, je rentre dans le travail directement, sans cette anxiété de fond."
-, Léa M., consultante stratégie · Paris

**10. CTA final**
- Fond : Clay Sand
- "Une tasse. Trois heures claires. Zéro déchet."
- CTA "Commencer mon rituel"

**11. Footer riche** (voir section 6.10)

---

### 6.2 BOUTIQUE (`/boutique`)

- Header de page : titre "La gamme" + lead
- **Filtres latéraux gauche (sticky)** :
 - Type : Capsules / Refill / Accessoires / Garden
 - Effet souhaité : Focus / Deep work / Calm / 
 - Prix : range slider
 - Éco-impact : Compostable / Refill / Consigne
- **Tri** : Pertinence / Prix ↑ / Prix ↓ / Nouveautés
- **Grille produits** : 3 colonnes desktop, 2 tablet, 1 mobile
- Chaque carte : image 3D (rotation Y au hover), nom, sub, badge éco, prix, "Ajouter au panier" en quick-add (sans aller sur fiche)
- **Bandeau abonnement** entre les rangées 1 et 2 : "Recevez votre Refill Pack chaque mois, −15 %"
- **Comparateur** : section comparative table 7 lignes × 7 colonnes (un produit par colonne)
- Footer

---

### 6.3 FICHE PRODUIT (`/produit/:slug`)

- Breadcrumb
- **Layout split 50/50** :
 - **Gauche (sticky)** : galerie 3D
 - **Vue 3D rotative interactive** (drag pour tourner, scroll pour zoomer)
 - Boutons en dessous : "Vue boîte fermée" / "Vue intérieur" / "Vue déballage" / "Vue à plat (dieline)"
 - Indicateur "✋ Faites tourner" qui disparaît après 3s
 - **Droite** : 
 - Eyebrow "Capsules de matcha · 30 unités"
 - Titre énorme (7rem)
 - Sub italic
 - **Badges éco** : 🟢 Compostable · ♻️ Consigne · 🌱 0 plastique (avec icônes SVG custom, pas emojis)
 - Prix
 - Description courte
 - Variantes (selector)
 - Quantité picker
 - "Ajouter au panier" (XL primary)
 - "Acheter en abonnement -15%" (secondary)
 - Accordéon : Composition / Préparation / Bilan carbone / Origine
- **Section "Comment l'utiliser"** : 4 étapes avec animation au scroll
- **Section "L'impact en chiffres"** : graphique comparatif CO₂ matcha vs café vs thé sachet (Recharts ou D3)
- **Section "Vous aimerez aussi"** : 3 produits liés
- **Section "Les questions fréquentes"** sur ce produit
- Footer

---

### 6.4 REFILL (`/refill`), PAGE CLÉ ÉCO

Cette page est le différenciateur majeur. Doit être la plus impressionnante visuellement.

**1. Hero immersif**
- Fond : Matcha Deep
- **Animation 3D plein écran** : Heritage Box qui s'ouvre lentement, révèle un Refill Pack en sortie, puis le pack se déverse en doses individuelles, puis la boîte revient se refermer en boucle douce. **Three.js avec GLTFLoader**.
- Titre overlay : "Un rituel. Aucune trace."

**2. Section "Comment ça marche" (timeline horizontale animée)**
- 3 étapes en horizontal, scroll-pinned (GSAP ScrollTrigger)
- Étape 1 : "Vous achetez la Heritage Box", visuel 3D box
- Étape 2 : "Chaque mois, recevez un Refill Pack", visuel 3D pack
- Étape 3 : "Renvoyez la box quand elle est usée", visuel boucle de retour

**3. Section "Calculez votre impact"**
- Calculateur interactif :
 - Slider "Combien de tasses par jour ?" (1-5)
 - Selector "Quelle alternative remplacez-vous ?" (Café filtre / Capsule café / Thé sachet)
 - Affichage en temps réel : "Avec Refill, vous économisez **X kg de CO₂** et **Y** capsules par an."
- Visualisation animée : graphique en barres qui se remplit au calcul

**4. Section "La consigne en pratique"**
- Étapes du programme Return & Renew avec illustrations SVG animées au scroll

**5. Section "Compteurs vivants"** (boucles éco déjà partagées)

**6. CTA double**
- "Acheter Heritage Box" (primaire) | "Démarrer un abonnement Refill" (secondaire)

---

### 6.5 BIENFAITS (`/bienfaits`)

Page éditoriale avec storytelling scientifique :

**1. Header de page**
**2. Section "La base scientifique"**, prose éditoriale, max 720 px de large
**3. Section "4 bénéfices clés"**, cartes
**4. Section "Comparatif énergétique"**, graphique animé (D3 ou Recharts) :
- Caféine plasmatique sur 6h pour Café vs Matcha
- Courbe café : pic à 30 min, crash à 90 min
- Courbe matcha : montée douce, plateau 3h
**5. Section "Les actifs nootropiques additionnels"** : 3 cards (L-Théanine, Lion's Mane, Ashwagandha) avec illustration SVG botanique animée
**6. Section "Sources scientifiques"** : liste des 4 études référencées

---

### 6.6 ENGAGEMENT (`/engagement`), NOUVELLE PAGE CLÉ

**1. Hero**
- Fond : matcha avec **animation Three.js de feuilles tombantes** en arrière-plan (très subtil, particles)
- Titre : "Notre engagement n'est pas un argument. C'est une comptabilité."

**2. Section "Le bilan complet"**
- **Tableau de transparence radicale** : pour chaque boîte vendue, ventilation détaillée
 - 4,23 € packaging
 - 5,80 € matcha + actifs
 - 2,50 € transport-marketing
 - 2,37 € marge nette
- **Graphique camembert animé** au scroll

**3. Section "Le cycle de vie d'une capsule"**
- **Animation interactive Three.js** : capsule traversant les phases (production → emballage → transport → consommation → compostage)
- Chiffres CO₂ à chaque étape

**4. Section "Nos partenaires éco"**
- Reforest'Action (reforestation France)
- Pulpatronic (insert pulpe moulée)
- NatureWorks Ingeo (PLA capsules)
- 3 cartes avec logos et lien vers leur site

**5. Section "Compteurs en temps réel"**

**6. Section "Nos limites"** (HONNÊTETÉ RADICALE, différenciateur fort)
- "Ce qu'on ne sait PAS encore faire"
- Liste honnête des points d'amélioration : transport maritime du matcha, suremballage des bundles cadeau, etc.
- Un calendrier des engagements futurs avec dates

**7. Section "Rapport annuel téléchargeable"**, PDF du rapport d'impact

---

### 6.7 RITUEL (`/rituel`)

Page éditoriale émotionnelle (la plus storytellée) :
- 6 étapes du rituel matchio avec illustrations SVG animées
- Quotes japonaises en exergue (chanoyu, wa, kei, sei, jaku)
- Vidéo embed (placeholder) "Le rituel en 90 secondes"
- CTA final pour Heritage Box

---

### 6.8 JOURNAL (`/journal`), Blog

- Header de page
- Filtre par catégorie : Science / Rituel / Engagement / Producteurs
- Grille articles 3 colonnes (image hero + titre + extrait + date + reading time)
- Au moins 6 articles fictifs préchargés à imaginer :
 1. "Pourquoi nous avons choisi le PLA Ingeo plutôt que le PHA"
 2. "Visite à Uji : portrait de notre producteur"
 3. "L-théanine : ce que vingt études disent vraiment"
 4. "Le coût réel d'une capsule Nespresso (avec calculs)"
 5. "Comment recycler nos sachets Refill"
 6. "Le rituel matinal de Léa, 28 ans"
- Pagination
- Article individuel : layout éditorial classique (max 720 px), table des matières sticky à droite

---

### 6.9 HISTOIRE (`/histoire`)

- Récit fondateur (déjà rédigé partiellement dans la version précédente)
- **Timeline verticale animée au scroll** : 2023 idée → 2024 prototype → 2025 lancement seed → 2026 lancement public
- Section "Nos 4 promesses concrètes"
- Photos d'équipe (placeholders)

---

### 6.10 FOOTER (présent sur toutes les pages)

```
[LOGO matchio] [BOUTIQUE] [MARQUE] [AIDE]
 - Capsules - Notre histoire - FAQ
L'excellence du matcha japonais, - Refill - Engagement - Livraison
repensée pour les esprits qui - Accessoires - Bienfaits - Retours
veulent penser mieux, - Garden - Rituel - Programme consigne
sans coûter à la planète. - Tout voir - Journal - Contact

────────────────────────────────────────────────────────────────────────

[NEWSLETTER] Recevez le rituel : nos articles, nouveautés et offres mensuelles.
[email input] [S'inscrire]

────────────────────────────────────────────────────────────────────────

[3 COMPTEURS LIVE] X arbres plantés · Y boîtes en consigne · Z kg plastique évités

────────────────────────────────────────────────────────────────────────

© 2026 Matchio · Paris · Mentions légales · CGV · Confidentialité [IG] [TT] [LI]
 [Certif éco]
```

---

## 7. STACK TECHNIQUE RECOMMANDÉ

### 7.1 Framework principal : **Next.js 15 (App Router)**

**Pourquoi** :
- Multi-pages avec routing automatique
- SSG par défaut → SEO excellent
- Image Optimization native
- Compatible Three.js (avec react-three-fiber)
- TypeScript de série

### 7.2 Dépendances

```json
{
 "dependencies": {
 "next": "^15.0.0",
 "react": "^19.0.0",
 "react-dom": "^19.0.0",
 "typescript": "^5.6.0",

 "@react-three/fiber": "^8.17.0",
 "@react-three/drei": "^9.114.0",
 "three": "^0.169.0",

 "framer-motion": "^11.11.0",
 "gsap": "^3.12.5",
 "@studio-freight/lenis": "^1.0.42",

 "tailwindcss": "^3.4.0",
 "@tailwindcss/typography": "^0.5.15",
 "class-variance-authority": "^0.7.0",
 "clsx": "^2.1.1",

 "zustand": "^5.0.0",
 "react-hook-form": "^7.53.0",
 "zod": "^3.23.8",

 "recharts": "^2.13.0",
 "lucide-react": "^0.453.0",

 "next-mdx-remote": "^5.0.0",
 "gray-matter": "^4.0.3"
 }
}
```

### 7.3 Architecture des dossiers

```
matchio/
├── app/
│ ├── layout.tsx # Layout root avec Header + Footer
│ ├── page.tsx # Home
│ ├── globals.css
│ │
│ ├── boutique/
│ │ └── page.tsx
│ │
│ ├── produit/
│ │ └── [slug]/
│ │ └── page.tsx
│ │
│ ├── refill/page.tsx
│ ├── bienfaits/page.tsx
│ ├── engagement/page.tsx
│ ├── rituel/page.tsx
│ ├── histoire/page.tsx
│ ├── journal/
│ │ ├── page.tsx
│ │ └── [slug]/page.tsx
│ ├── panier/page.tsx
│ ├── checkout/page.tsx
│ └── contact/page.tsx
│
├── components/
│ ├── layout/
│ │ ├── Header.tsx
│ │ ├── Footer.tsx
│ │ └── CartDrawer.tsx
│ │
│ ├── ui/
│ │ ├── Button.tsx
│ │ ├── Eyebrow.tsx
│ │ ├── Divider.tsx
│ │ ├── EcoBadge.tsx
│ │ └── ProductCard.tsx
│ │
│ ├── 3d/
│ │ ├── ProductBox.tsx # Boîte 3D générique
│ │ ├── ProductBoxFocus.tsx
│ │ ├── ProductBoxDeepWork.tsx
│ │ ├── ProductBoxCalmFocus.tsx
│ │ ├── HeritageBox.tsx
│ │ ├── RefillPack.tsx
│ │ ├── CircularLoop.tsx # Boucle Refill animation
│ │ ├── FallingLeaves.tsx # Particles feuilles
│ │ └── Scene.tsx # Setup Three.js
│ │
│ ├── animations/
│ │ ├── ScrollReveal.tsx
│ │ ├── CountUp.tsx
│ │ ├── ParallaxText.tsx
│ │ └── PageTransition.tsx
│ │
│ ├── home/
│ │ ├── Hero.tsx
│ │ ├── Manifesto.tsx
│ │ ├── EcoBanner.tsx
│ │ ├── ProductsGrid.tsx
│ │ ├── RefillSection.tsx
│ │ └── LiveCounters.tsx
│ │
│ └── shop/
│ ├── ProductGallery3D.tsx
│ ├── VariantPicker.tsx
│ ├── QuantityPicker.tsx
│ └── EcoImpactChart.tsx
│
├── lib/
│ ├── data/
│ │ ├── products.ts # Catalog
│ │ ├── articles.ts # Blog content
│ │ └── eco-stats.ts # Stats engagement
│ ├── store/
│ │ └── cart.ts # Zustand cart store
│ ├── animations/
│ │ └── easings.ts
│ └── utils.ts
│
├── public/
│ ├── models/ # Modèles 3D GLB
│ │ ├── focus-box.glb
│ │ ├── deepwork-box.glb
│ │ ├── calmfocus-box.glb
│ │ ├── heritage-box.glb
│ │ ├── refill-pack.glb
│ │ └── chasen-whisk.glb
│ │
│ ├── textures/
│ │ ├── matte-paper.jpg # Texture carton mat
│ │ ├── kraft-paper.jpg # Texture sleeve
│ │ ├── gold-foil.jpg # Dorure
│ │ └── ceramic.jpg # Mug
│ │
│ ├── images/
│ │ ├── og/ # OpenGraph
│ │ ├── articles/ # Photos blog
│ │ └── team/ # Équipe
│ │
│ └── fonts/ # Optionnel si self-hosted
│
└── content/
 └── articles/ # MDX
 ├── pla-vs-pha.mdx
 ├── visite-uji.mdx
 └── ...
```

### 7.4 Configuration Tailwind

```js
// tailwind.config.ts
export default {
 content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
 theme: {
 extend: {
 colors: {
 matcha: { deep: '#0E3B2E', mid: '#3A6B4F', soft: '#A8C6A1', mist: '#DCE8DA' },
 cream: { DEFAULT: '#F5F1E8', dark: '#E8E2D0' },
 clay: { DEFAULT: '#C9A27E', dark: '#A88561' },
 ink: { DEFAULT: '#1A1A1A', soft: '#4A4A4A', muted: '#8C8C8C' },
 },
 fontFamily: {
 display: ['var(--font-playfair)', 'Georgia', 'serif'],
 sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
 mono: ['var(--font-jetbrains-mono)', 'monospace'],
 },
 animation: {
 'float': 'float 6s ease-in-out infinite',
 'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
 'shimmer': 'shimmer 2s linear infinite',
 },
 },
 },
};
```

---

## 8. DIRECTION ARTISTIQUE & ANIMATIONS

### 8.1 Principes fondamentaux

1. **Calme avant impact**, l'animation doit servir la lecture, pas la dominer
2. **Easing naturel**, `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out) pour 90% des transitions
3. **Durations honnêtes**, 200ms (micro), 400ms (UI), 800ms (entrées), 1200ms (hero)
4. **Pas d'effets gratuits**, chaque animation a une raison fonctionnelle
5. **Respecter `prefers-reduced-motion`** systématiquement

### 8.2 Animations spécifiques à implémenter

#### Smooth scroll global
```ts
// avec Lenis
import Lenis from '@studio-freight/lenis';
const lenis = new Lenis({
 duration: 1.2,
 easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});
```

#### Page transitions
- Fade + scale subtle 1.02 → 1 entre pages
- Durée 600 ms

#### Hero entrance (au load)
- Stagger sur eyebrow → titre → sous-titre → CTAs (delay 100ms entre chaque)
- Translate Y de 30 px → 0 + opacity 0 → 1
- Mockup 3D fade-in avec scale 0.9 → 1, durée 1200 ms

#### Scroll reveal
- IntersectionObserver, threshold 0.1
- Translate Y 40 px → 0 + opacity 0 → 1
- Stagger sur les enfants `.reveal-stagger > *`

#### Scroll-driven animations (GSAP ScrollTrigger)
- **Section Refill** : timeline horizontale pinned sur 3x viewport height
- **Section Bilan carbone** : graphique qui se construit barre par barre
- **Section Cycle de vie** : modèle 3D qui tourne au scroll

#### Hover micro-interactions
- Cards produit : translate Y -8 px + soft shadow + slow image scale 1.05 (durée 400 ms)
- Boutons : background transition 200 ms
- Liens : underline qui grandit gauche → droite (200 ms)

#### Count-up animation
- Trigger : IntersectionObserver
- Durée : 2 s
- Easing : easeOutExpo
- Format : Intl.NumberFormat français (espaces tous les 3 chiffres)

#### Floating elements
- Hero box : translate Y oscillation 15 px sur 6 s, ease-in-out

### 8.3 Bibliothèques à utiliser

| Animation | Outil |
|---|---|
| Smooth scroll | Lenis |
| Scroll reveal simple | Framer Motion `whileInView` |
| Scroll-driven complexe | GSAP + ScrollTrigger |
| 3D | React Three Fiber + Drei |
| Particles 3D | Drei `<Points>` ou tsParticles |
| Page transitions | Framer Motion `<AnimatePresence>` |
| Counts | react-countup OU custom hook |
| SVG morphing | Framer Motion `<motion.path>` |

---

## 9. MOCKUPS 3D & VISUELS PRODUITS

### 9.1 Stratégie 3D : 3 niveaux de qualité

**Niveau 1 (obligatoire), Modèles 3D programmatiques en Three.js**

Pour les boîtes de capsules et le Refill Pack, créer les modèles **directement en code** avec géométries primitives :

```tsx
// Exemple structure ProductBoxFocus.tsx
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, RoundedBox, useTexture } from '@react-three/drei';

export function ProductBoxFocus({ rotationSpeed = 0.5 }) {
 const groupRef = useRef();
 const matteTexture = useTexture('/textures/matte-paper.jpg');
 const kraftTexture = useTexture('/textures/kraft-paper.jpg');
 const goldTexture = useTexture('/textures/gold-foil.jpg');

 useFrame((state, delta) => {
 if (groupRef.current) {
 groupRef.current.rotation.y += delta * rotationSpeed;
 }
 });

 return (
 <group ref={groupRef}>
 {/* Boîte principale - 110×85×70mm = 1.1 × 0.85 × 0.7 unités */}
 <RoundedBox args={[1.1, 0.85, 0.7]} radius={0.02}>
 <meshStandardMaterial
 map={matteTexture}
 color="#0E3B2E"
 roughness={0.85}
 metalness={0}
 />
 </RoundedBox>

 {/* Sleeve clay autour (33% hauteur, en bas) */}
 <Box args={[1.12, 0.28, 0.72]} position={[0, -0.225, 0]}>
 <meshStandardMaterial
 map={kraftTexture}
 color="#C9A27E"
 roughness={0.9}
 />
 </Box>

 {/* Dorure wordmark sur la face avant */}
 <mesh position={[0, 0.05, 0.351]}>
 <planeGeometry args={[0.5, 0.1]} />
 <meshStandardMaterial
 map={goldTexture}
 color="#D4B57E"
 roughness={0.3}
 metalness={0.7}
 emissive="#B8945F"
 emissiveIntensity={0.1}
 />
 </mesh>

 {/* Logo feuille embossé (subtle bump) */}
 <mesh position={[0, 0.25, 0.351]}>
 <planeGeometry args={[0.15, 0.15]} />
 <meshStandardMaterial
 color="#0E3B2E"
 roughness={0.8}
 // bump map for emboss effect
 />
 </mesh>
 </group>
 );
}
```

**Niveau 2 (recommandé), Modèles GLB importés**

Pour Heritage Box, Mug céramique, Chasen, créer des modèles GLB simples dans Blender (ou utiliser des assets gratuits adaptés). Importer avec `useGLTF()` de Drei.

**Niveau 3 (premium), Renders haute qualité en images**

Pour les sections statiques (cartes produit en grille), générer des renders Three.js statiques côté serveur (avec puppeteer + react-three-fiber dans un script) et utiliser ces images optimisées WebP.

### 9.2 Setup Three.js commun

Tous les composants 3D doivent utiliser ce setup standard :

```tsx
// components/3d/Scene.tsx
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, OrbitControls } from '@react-three/drei';

export function Scene({ children, autoRotate = true, interactive = false }) {
 return (
 <Canvas
 shadows
 camera={{ position: [0, 0.5, 2.5], fov: 35 }}
 dpr={[1, 2]}
 gl={{ antialias: true, alpha: true }}
 >
 {/* Lumière douce style photographie japandi */}
 <ambientLight intensity={0.4} />
 <directionalLight
 position={[3, 4, 2]}
 intensity={0.8}
 castShadow
 shadow-mapSize={[2048, 2048]}
 />
 <directionalLight position={[-2, 1, -2]} intensity={0.3} />

 {/* Environment map subtle */}
 <Environment preset="studio" background={false} />

 {children}

 {/* Ombre douce au sol */}
 <ContactShadows
 position={[0, -0.5, 0]}
 opacity={0.4}
 scale={5}
 blur={2}
 far={1.5}
 />

 {/* Controls : OrbitControls si interactif, sinon rien */}
 {interactive && (
 <OrbitControls
 enableZoom={true}
 enablePan={false}
 minDistance={1.5}
 maxDistance={4}
 autoRotate={autoRotate}
 autoRotateSpeed={0.5}
 />
 )}
 </Canvas>
 );
}
```

### 9.3 Spécifications des modèles produit

#### Boîte Capsules (FOCUS, DEEP-WORK, CALM-FOCUS)

**Dimensions réelles → unités 3D** (1 mm = 0.01 unité)
- Boîte : 110 × 85 × 70 mm → 1.1 × 0.85 × 0.7
- Sleeve : recouvre 30% bas, déborde 1 mm de chaque côté → 1.12 × 0.28 × 0.72
- Position sleeve : `y = -0.225` (centré dans tiers bas)

**Couleurs par SKU** :

| SKU | Boîte | Sleeve | Dorure |
|---|---|---|---|
| FOCUS | #0E3B2E (Matcha Deep) | #C9A27E (Clay) | #D4B57E (Gold) |
| DEEP-WORK | #1A1A1A (Ink) | #3A6B4F (Matcha Sage) | #D4B57E (Gold) |
| CALM-FOCUS | #C9A27E (Clay Sand) | #0E3B2E (Matcha Deep) | #0E3B2E (Matcha) |

**Détails à modéliser** :
- Wordmark "matchio" en italique sur face avant (texture decal ou geometry)
- Logo feuille embossé sur le dessus (subtle normal map)
- Sub-line "FOCUS" / "DEEP-WORK" / "CALM-FOCUS" sur sleeve (decal)
- Léger arrondi sur les arêtes (`RoundedBox` radius 0.02)
- Texture matte papier sur tout (roughness 0.85)
- Dorure : metalness 0.7, roughness 0.3 (effet satiné, PAS brillant)

#### Heritage Box (mug céramique + accessoires)

- Mug grès Ø 11 × H 8 cm → cylindre tronqué
- Couleur : #3A6B4F (Matcha Sage)
- Texture : céramique mate avec micro-irrégularités
- Wordmark "matchio" gravé subtle sur le côté
- Dans une boîte plus grande (cardboard cream) avec compartiments
- Chasen bambou : 50+ tines fines (utiliser instancing)

#### Refill Pack (sachet kraft)

- Sachet plat rectangulaire 15 × 20 × 2 cm
- Texture kraft brun avec impression Pantone matcha
- Fermeture supérieure pliée (geometry détaillée)
- Wordmark + nom formule visibles

### 9.4 Animations 3D spécifiques

#### Hero box (Home)
- Float Y (oscillation 0.15 unité sur 6 s)
- Rotation Y lente continue (`delta * 0.3`)
- Au hover de la zone : ralentit à 0 et zoom +0.1 sur Z

#### Boucle Refill (section éco)
- 3 modèles : Heritage Box, Refill Pack, Heritage Box ouverte
- Animation timeline GSAP de 8 s en boucle :
 - 0-2 s : Heritage Box visible centrée
 - 2-4 s : Refill Pack apparaît à droite, Heritage glisse à gauche
 - 4-6 s : Refill Pack se "verse" dans Heritage Box
 - 6-8 s : Retour position initiale avec léger flash lumineux

#### Cycle de vie capsule (page Engagement)
- Timeline ScrollTrigger pinned 4 viewports
- 5 phases : récolte feuille → broyage → encapsulation → consommation → compostage
- Modèle qui se transforme à chaque phase (morph targets ou substitution)

#### Particles feuilles (page Engagement Hero)
- 50 feuilles 3D avec instanceMesh
- Chute aléatoire ralentie (Y -2 à -5 unités sur 12 s)
- Rotation aléatoire X + Z
- Respawn en haut quand arrivent en bas
- Performance : maintenir 60 fps même sur mobile

### 9.5 Performance 3D

- **LOD** (Level of Detail) : modèles haute déf à proximité, basse déf au loin
- **Lazy load** : `<Suspense>` autour de chaque scène avec fallback
- **Geometry instancing** pour répétitions (capsules dans boîte ouverte, feuilles)
- **Texture compression** : `.ktx2` pour modèles GLB
- **Frustum culling** activé
- **Pause animation** quand off-screen (IntersectionObserver)
- **Mobile fallback** : sur mobile, remplacer 3D par image statique haute qualité

---

## 10. FONCTIONNALITÉS E-COMMERCE

### 10.1 Panier (Zustand store)

```ts
// lib/store/cart.ts
interface CartItem {
 productId: string;
 variantId?: string;
 quantity: number;
 isSubscription?: boolean;
}

interface CartStore {
 items: CartItem[];
 isOpen: boolean;
 add: (item: CartItem) => void;
 remove: (productId: string) => void;
 updateQty: (productId: string, qty: number) => void;
 clear: () => void;
 toggle: () => void;
 total: () => number;
 ecoImpact: () => { co2Saved: number; capsulesAvoided: number };
}
```

Persistance : `zustand/middleware/persist` avec `localStorage`

### 10.2 Checkout simulé (3 étapes)

1. **Étape 1, Récap commande** : items, sous-total, livraison, total, code promo, **récap impact éco** ("Avec cette commande, vous économiserez X g CO₂")
2. **Étape 2, Livraison** : nom, email, téléphone, adresse (form react-hook-form + zod)
3. **Étape 3, Paiement** : carte (UI seulement, pas de vraie intégration), checkbox "Je veux planter un arbre supplémentaire (+1€)" (geste éco optionnel), CGV
4. **Confirmation** : page de remerciement avec numéro de commande, récap, CTA pour rejoindre la newsletter, partager sur réseaux

### 10.3 Programme abonnement

- Toggle sur fiche produit : "Abonnement mensuel −15%"
- Calcul prix recalculé en temps réel
- Badge dans le panier "Abonnement actif"

### 10.4 Recherche

- Input dans le header
- Modal full-screen au clic
- Recherche fuzzy (Fuse.js) sur produits + articles
- Suggestions produits populaires si recherche vide

### 10.5 Compte utilisateur (UI seulement)

Pages stub :
- `/compte/connexion`
- `/compte/inscription`
- `/compte/commandes`
- `/compte/abonnements`
- `/compte/consigne` (statut Heritage Box en consigne)

---

## 11. PERFORMANCE & SEO

### 11.1 Cibles Lighthouse
- Performance : > 90
- Accessibilité : > 95
- SEO : 100
- Best Practices : > 95

### 11.2 Optimisations obligatoires

- `next/image` partout avec `sizes` et `priority` sur LCP
- `next/font` pour Playfair, Inter, JetBrains Mono (sans flash, optimisés)
- Lazy load des Canvas Three.js avec `dynamic(() => import('...'), { ssr: false })`
- Préchargement des modèles GLB critiques avec `useGLTF.preload()`
- `Suspense` boundaries autour des sections lourdes
- ISR sur pages produit et articles
- Sitemap.xml généré
- Robots.txt
- Schema.org Product + Organization + Article (JSON-LD)
- OpenGraph + Twitter Cards complètes par page
- Canonical URLs

### 11.3 Métadonnées par page (exemples)

```tsx
// app/produit/focus/page.tsx
export const metadata = {
 title: 'FOCUS, Capsules de matcha cérémonial · Matchio',
 description: 'Trois heures d\'attention claire, sans tremblement. 30 capsules compostables de matcha Uji + L-Théanine. 14,90 €. Livraison neutre en carbone.',
 openGraph: {
 title: 'FOCUS, Le matcha qui pense avec vous',
 images: ['/og/focus.jpg'],
 },
};
```

---

## 12. ACCESSIBILITÉ

### 12.1 Standard cible : WCAG 2.1 AA

### 12.2 Checklist obligatoire
- Contraste texte/fond ≥ 4.5:1 (vérifier avec WebAIM)
- Tous les boutons ont un `aria-label` si icône seule
- Focus visible sur tous éléments interactifs (outline 2 px clay)
- Navigation au clavier complète (Tab, Shift+Tab, Enter, Esc)
- Skip link "Aller au contenu principal" en haut
- Hiérarchie des titres respectée (un seul `h1` par page)
- Tous les `img` ont un `alt` (ou `alt=""` si décoratif)
- Formulaires : labels associés, messages d'erreur ARIA-described
- `prefers-reduced-motion` respecté pour TOUTES les animations
- Modal/Drawer : focus trap + Esc pour fermer
- Couleur jamais seul vecteur d'info (toujours combiner avec texte/icône)
- Lang="fr" sur html

---

## 13. INSTRUCTIONS D'EXÉCUTION POUR CLAUDE CODE

### 13.1 Ordre de travail recommandé

**Phase 1 : Fondations (jour 1)**
1. Initialiser projet Next.js 15 + TS + Tailwind
2. Configurer fonts, palette, tokens
3. Créer `Layout.tsx` avec Header + Footer
4. Implémenter le store panier Zustand
5. Implémenter Lenis smooth scroll global

**Phase 2 : Composants UI de base (jour 1-2)**
1. Button, Eyebrow, Divider, EcoBadge
2. ProductCard (avec image statique d'abord, 3D ensuite)
3. Forms (Input, Select, Textarea avec react-hook-form)
4. CartDrawer
5. PageHeader (réutilisable)

**Phase 3 : 3D minimal (jour 2-3)**
1. Setup Scene.tsx générique
2. Modèle Three.js de la boîte capsule (1 SKU d'abord)
3. Tests performance, optimisation
4. Décliner pour les 2 autres SKU
5. Modèle Heritage Box et Refill Pack
6. Animation hero (rotation + float)

**Phase 4 : Pages priorité 1 (jour 3-4)**
1. Home avec toutes ses sections
2. Boutique
3. Fiche produit (template dynamique)

**Phase 5 : Pages priorité 2 (jour 4-5)**
1. Refill (avec animations 3D complexes)
2. Engagement (avec calculateur, particles)
3. Bienfaits (avec graphiques Recharts)

**Phase 6 : Pages priorité 3 (jour 5-6)**
1. Rituel
2. Histoire
3. Journal (liste + article)
4. Contact

**Phase 7 : E-commerce flow (jour 6-7)**
1. Panier
2. Checkout 3 étapes
3. Confirmation

**Phase 8 : Polish (jour 7-8)**
1. Page 404
2. Loading states
3. Error boundaries
4. Animations ScrollTrigger sur tout
5. Tests Lighthouse
6. Tests responsive
7. Tests a11y
8. Optimisation finale

### 13.2 Conventions de code

**TypeScript strict** :
```json
// tsconfig.json
{
 "compilerOptions": {
 "strict": true,
 "noUncheckedIndexedAccess": true,
 "noImplicitOverride": true
 }
}
```

**Nommage** :
- Composants : PascalCase (`ProductCard.tsx`)
- Hooks : `use` prefix (`useCart.ts`)
- Utils : camelCase (`formatPrice.ts`)
- Constants : UPPER_SNAKE (`MAX_CART_ITEMS`)
- Variables CSS : kebab-case (`--matcha-deep`)

**Commentaires** :
- JSDoc sur exports publics
- Commentaires `// SECTION:` pour grandes parties
- Pas de commentaires triviaux

**Git commits** (si Claude Code crée un repo) :
- Convention : `type(scope): message` (feat, fix, refactor, style, docs)
- Exemple : `feat(home): add hero with 3D box`

### 13.3 Données mockées (tout doit être fonctionnel)

Tous les produits, articles, témoignages, FAQ, etc. doivent avoir des données réelles dans `/lib/data/`. Pas de placeholders "Lorem ipsum". Le rédactionnel doit refléter la voix de marque définie en section 4.

### 13.4 Ce qui est OBLIGATOIRE

- ✅ Site multi-pages (pas SPA monolithique)
- ✅ Au moins 3 modèles 3D programmatiques fonctionnels
- ✅ Au moins 5 animations scroll-driven distinctes
- ✅ Smooth scroll global
- ✅ Page transitions
- ✅ Panier persistant
- ✅ Mobile responsive parfait (375px à 1920px)
- ✅ Page Refill avec animation 3D centrale
- ✅ Page Engagement avec compteurs et graphiques
- ✅ Calculateur d'impact interactif
- ✅ Toutes les preuves chiffrées éco-responsabilité
- ✅ Système Heritage Box / Refill Pack présent partout (pas un détail)
- ✅ Au moins 6 articles MDX dans Journal
- ✅ Lighthouse > 90 sur toutes les pages

### 13.5 Ce qui est INTERDIT

- ❌ Utiliser des templates Tailwind UI / shadcn génériques sans customiser au design system
- ❌ Animations bouncy ou cartoonesques (pas de spring exagéré, pas de wobble)
- ❌ Plus de 4 niveaux de profondeur d'imbrication composant
- ❌ Pas de `any` en TypeScript
- ❌ Couleurs hors palette (même pour tests)
- ❌ Polices autres que les 3 définies
- ❌ Émojis dans le contenu rédactionnel (sauf icônes UI custom)
- ❌ Dark mode (la marque a UNE direction esthétique, pas deux)
- ❌ Carrousels (préférer grilles + scroll)
- ❌ Popups intrusifs

---

## 14. CRITÈRES D'ACCEPTATION FINAUX

### 14.1 Test visuel
- [ ] Le hero de la home a un mockup 3D rotatif fluide
- [ ] La page Refill a une animation 3D plein écran impressionnante
- [ ] Les compteurs éco s'animent au scroll
- [ ] Toutes les pages respectent la palette à 100%
- [ ] Aucune typographie n'est en non-italique pour les titres
- [ ] Les boîtes 3D ont leurs textures matte (pas brillantes)

### 14.2 Test fonctionnel
- [ ] Ajouter au panier fonctionne depuis 4+ endroits différents
- [ ] Le panier persiste après reload
- [ ] Le calculateur d'impact recalcule en temps réel
- [ ] Le formulaire contact valide et affiche les erreurs
- [ ] Le menu mobile s'ouvre/ferme proprement
- [ ] Les routes dynamiques `/produit/:slug` fonctionnent pour les 7 SKUs

### 14.3 Test technique
- [ ] Lighthouse Performance > 90 (home + fiche produit)
- [ ] Aucune erreur console
- [ ] Aucun warning React (clés, etc.)
- [ ] TypeScript compile sans erreur
- [ ] Pas de FOUT (Flash Of Unstyled Text)
- [ ] Pas de CLS (Cumulative Layout Shift) sur images

### 14.4 Test accessibilité
- [ ] Navigation 100% au clavier
- [ ] Focus visible partout
- [ ] Lecture par lecteur d'écran cohérente
- [ ] Contrastes validés
- [ ] `prefers-reduced-motion` désactive les animations

### 14.5 Livrable attendu
- Repo Git avec README complet
- Instructions de démarrage : `npm install && npm run dev`
- Build de production fonctionnel : `npm run build`
- Documentation des composants 3D dans `components/3d/README.md`
- Liste des sources d'inspiration et crédits dans `CREDITS.md`

---

## ANNEXE A, PROMPT INITIAL POUR CLAUDE CODE

Voici le prompt exact à coller au début d'une session Claude Code :

```
Je veux que tu construises un site e-commerce premium multi-pages
pour la marque Matchio, une marque française de matcha cérémonial
en capsules compostables avec un système innovant de Heritage Box +
Refill Pack zéro déchet.

Tu disposes du brief technique complet dans le fichier MATCHIO_BRIEF.md
(je vais te le fournir). Lis-le INTÉGRALEMENT avant toute action.

Stack imposé : Next.js 15 (App Router) + TypeScript + Tailwind +
React Three Fiber + Framer Motion + GSAP + Zustand.

Le site doit obligatoirement contenir :
- 10+ pages distinctes (pas une landing page)
- Modèles 3D Three.js programmatiques pour les boîtes produit
- Animations scroll-driven impressionnantes (GSAP ScrollTrigger)
- Smooth scroll global (Lenis)
- Système de panier complet et persistant
- Page Refill et page Engagement avec animations 3D centrales
- Direction artistique japandi minimaliste premium (cf brief section 8)
- Éco-responsabilité au cœur du positionnement (pas une feature secondaire)

Procède par phases comme indiqué section 13.1 du brief.
Après chaque phase, montre-moi le résultat avant de continuer.

Commence par Phase 1 : Fondations.
```

---

## ANNEXE B, PROMPTS DE GÉNÉRATION D'IMAGES PRODUIT (HAUTE QUALITÉ)

Si Claude Code souhaite générer des **images photoréalistes des produits** pour fallback mobile ou OG images, voici les prompts précis à utiliser avec Midjourney v7 / DALL-E 3 / Flux 1.1 Pro :

### Prompt 1, Boîte FOCUS hero (use case : OG image, fallback mobile)

```
Photorealistic product photography of a premium Japanese matcha capsule
gift box, three-quarter angle on cream linen surface. Deep forest green
matte cardboard box (Pantone-style #0E3B2E), 110×85×70 mm dimensions,
with sand-clay kraft paper sleeve (#C9A27E) wrapping the lower third.
Italic serif "matchio" wordmark hot-stamped in pale matte gold foil
(NOT shiny - satin Kurz Alufin) on upper face. Small embossed lanceolate
matcha leaf symbol (blind emboss, no ink) on top lid. Sub-line "FOCUS
· Matcha + L-Théanine" centered on sleeve in white spaced capitals.

Composition: box positioned slightly left of center, soft shadow falling
to right. Next to it: minimalist hand-thrown ceramic matcha bowl in
Matcha Sage color with vivid green whisked matcha visible inside,
bamboo chasen (whisk) leaning. Three loose sage-green PLA capsules
(#A8C6A1) scattered casually in foreground.

Background: warm cream paper (#F5F1E8) with subtle natural shadow
gradient lower right. 70% negative space.

Lighting: soft diffused natural northern window light from upper left,
gentle falloff. No harsh highlights, no studio rim flashes.

Style: Japandi minimalism, Aesop product photography, Kinfolk magazine
editorial, Cereal magazine mood, wabi-sabi imperfection.

Technical: 8K, magazine-grade commercial photography, f/4.0 shallow
depth-of-field, 5200K warm white balance, minimal film grain, no AI
artifacts.

Avoid: cartoon, 3D render look, plastic shine, oversaturated colors,
stock photography feel, watermarks, multiple boxes, dark moody background,
text on background, logos other than matchio.

--ar 16:9 --style raw --stylize 200 --v 7
```

### Prompt 2, Heritage Box ouverte (use case : page Refill hero, page Heritage Box)

```
Photorealistic product photography of an opened premium gift box
revealing a ceramic matcha bowl ritual set. The opened cardboard outer
box (cream color, dimensions 240×180×100 mm) sits at three-quarter
angle on a textured cream linen surface. The lid is partially lifted,
revealing inside: a hand-thrown stoneware matcha bowl (chawan) in
Matcha Sage green color #3A6B4F, hand-finished with subtle imperfections.
Next to the bowl, neatly arranged: a traditional bamboo whisk (chasen)
with 80 fine tines, a bamboo measuring scoop (chashaku), and a small
kraft paper sachet of matcha powder.

Hot-stamped italic "matchio" wordmark in pale gold foil on the front
of the box. Embossed leaf symbol on lid interior.

Lighting: soft natural window light from upper left, creating gentle
shadows inside the box. Cream linen surface with subtle weave texture.

Style: Aesop boutique aesthetic, Toogood London showroom, Snowpeak
Japan, restraint and tactility. Editorial product photography for
premium brand launch.

Technical: 8K, sharp focus on bowl, soft DOF on background props,
warm 5000K white balance, magazine quality.

--ar 4:3 --style raw --stylize 250 --v 7
```

### Prompt 3, Capsule individuelle macro

```
Extreme macro photography of a single biodegradable PLA matcha capsule,
isolated, photographed from 30-degree angle slightly above. The capsule
is conical-truncated shape (37mm diameter top, narrowing to base, 29mm
tall), made of translucent matte sage-green PLA bioplastic (#A8C6A1).
The top is sealed with a pale matte cellulose foil (no aluminum) showing
"matchio" italic wordmark debossed in the center. Visible texture: tiny
matte grain on the body, smooth foil top.

Background: Soft gradient from cream to clay sand, completely seamless,
no horizon line. Soft contact shadow under the capsule.

Lighting: Single large diffused softbox from upper left (45°), creating
gentle gradation across the capsule body. Subtle rim light on right edge
to define silhouette.

Style: clean minimalist product macro, Apple product launch aesthetic
adapted to organic material, scientific precision meets craft.

Technical: 8K, hyperfocal sharpness from top to bottom, focus stacked
look, color-accurate, NO depth of field blur, even illumination.

Avoid: shiny plastic look, harsh highlights, color casts, dust particles.

--ar 1:1 --style raw --stylize 100 --v 7
```

### Prompt 4, Vue de déballage Heritage Box (overhead flat lay)

```
Overhead flat lay product photography (90° top-down) of an unboxing
ritual moment. On a cream linen tablecloth: opened Heritage Box
(cream cardboard, 240×180mm) at top-left of frame, lid removed and
placed beside revealing pale gold embossed matcha leaf interior. Inside
the box: a hand-thrown sage-green ceramic bowl (chawan) centered, with
freshly whisked vivid green matcha foam visible. Around the box,
arranged with intentional asymmetry: a bamboo chasen whisk lying at
2 o'clock, a chashaku scoop at 5 o'clock, three loose kraft paper
sachets of matcha powder at 7 o'clock, a single sprig of fresh tea
leaf at 10 o'clock. A printed cream "ritual card" with serif typography
peeking from the lid.

Negative space at center-right (40% of frame) for typography overlay.

Lighting: soft directional natural window light from upper-right,
casting subtle 30°-angle shadows that give dimensionality to flat
objects. NO harsh shadows.

Style: Kinfolk Japan, Toast, Bonjour Madame French éditorial, ritual
documentation. Subdued saturation, warm 5200K, slight matte film grain.

Technical: 8K, sharp throughout (small aperture flat lay), color-accurate
sage and cream tones, no fisheye distortion.

--ar 4:5 --style raw --stylize 250 --v 7
```

### Prompt 5, Refill Pack hero

```
Photorealistic product photography of a premium kraft paper refill
pouch standing upright on a cream linen surface. The pouch is
rectangular (150×200mm), made of unbleached natural kraft paper
with subtle texture, with a clean fold at the bottom and a flat
pressed top. Centered on the pouch: italic "matchio" wordmark
printed in single-pass deep matcha green ink (#0E3B2E) without gold
foil, economy version. Below: "REFILL PACK · 30 doses · FOCUS"
in clean spaced capitals. Small leaf symbol on top-right corner.

Subtle texture irregularity on the kraft paper. The pouch is slightly
puffed (filled with matcha powder inside), looking soft and substantial.

Composition: pouch positioned center-right, with negative space left
for hero typography overlay. Soft contact shadow at base.

Background: cream paper (#F5F1E8) gradient. Single sage-green ceramic
small dish in lower-left foreground, slightly out of focus, with a
small mound of vivid green matcha powder on it (sample portion).

Lighting: soft window light upper-left, warm 5200K, gentle highlights
on kraft texture.

Style: Direct Trade coffee brand aesthetic meets Japanese minimalism.
Pulp Branding x Aesop reference. Tactile, honest, non-shiny.

--ar 3:4 --style raw --stylize 200 --v 7
```

### Prompt 6, Matchio Garden kit

```
Photorealistic product photography of an eco-friendly seed planting
kit, three-quarter angle. The kit consists of: a small biodegradable
coir-fiber pot (~100mm diameter, brown coconut fiber visible texture)
filled with rich dark soil substrate, sitting on a cream linen surface.
Tiny green seedling sprout (2 leaves) just emerging from soil, symbolic
"future tea plant". Next to the pot: a folded kraft paper sachet labeled
"Camellia sinensis · graines" in italic serif, a small wooden plant
marker stick with hand-drawn matcha leaf, and a beautifully designed
cream A5 illustrated guide booklet (12 pages thick) titled in italic
"Faire pousser son théier".

The "matchio" italic wordmark in deep matcha green appears on the pot
side and the booklet cover.

Background: cream wall with soft natural shadow, hint of greenery
(blurred plant) on the right edge to suggest indoor garden context.

Lighting: bright soft natural light from upper-right window, warm
hour quality, dappled subtle texture from leaves above.

Style: Slow Living, Ferm Living catalogue, Burgon & Ball, Nordic
Hygge meets Japanese restraint. Botanical product editorial.

Technical: 8K, sharp focus on pot and seedling, soft DOF on
background, warm 5000K, gentle film grain.

--ar 3:2 --style raw --stylize 250 --v 7
```

---

## ANNEXE C, RESSOURCES & RÉFÉRENCES

### Modèles 3D gratuits utilisables (CC0)
- [Poly Haven](https://polyhaven.com), textures matte paper, kraft, ceramic
- [Sketchfab](https://sketchfab.com), chercher "ceramic mug", "bamboo whisk" en CC0
- [Three.js Journey](https://threejs-journey.com), exemples et patterns

### Bibliothèques visuelles inspirations
- [Cosmos](https://cosmos.so), pinboards d'inspiration
- [Awwwards](https://awwwards.com/sites_of_the_day), meilleurs sites
- [Curated.design](https://curated.design), references typographie

### Outils utiles pour Claude Code
- [Tailwind UI](https://tailwindui.com), patterns à adapter (jamais utiliser tel quel)
- [Vercel templates](https://vercel.com/templates), bases de structure
- [Three.js Editor](https://threejs.org/editor), tester rapidement la 3D

### Documentation à consulter
- [React Three Fiber docs](https://docs.pmnd.rs/react-three-fiber/)
- [Drei helpers](https://github.com/pmndrs/drei)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- [Lenis](https://github.com/studio-freight/lenis)

---

## NOTES FINALES POUR L'AGENT

Tu es en train de construire le site web d'une marque qui aspire à être référencée
par Awwwards et présente dans Kinfolk. Le niveau d'exigence est celui d'une agence
de design parisienne (Akin, Pentagram, COLLINS).

Si à un moment du développement tu hésites entre :
- "ajouter quelque chose pour faire bien" vs "enlever pour rester épuré"
 → enlève toujours.

- "animation impressionnante mais distrayante" vs "animation discrète qui sert"
 → discrète qui sert.

- "fonctionnalité gadget" vs "honnêteté de la promesse"
 → honnêteté toujours.

- "deadline serré, faire vite" vs "qualité du détail"
 → qualité, quitte à demander plus de temps.

L'éco-responsabilité n'est pas un département. C'est l'épine dorsale.
Le luxe n'est pas une décoration. C'est une retenue.
Le rituel n'est pas un thème. C'est une promesse.

Bonne construction.

 Fin du brief 
