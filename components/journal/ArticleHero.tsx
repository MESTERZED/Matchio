import { cn } from '@/lib/utils';

interface ArticleHeroProps {
  slug: string;
  eyebrow?: string;
  className?: string;
  variant?: 'card' | 'page';
}

/**
 * Illustration SVG inline par article. Style japandi minimaliste,
 * palette stricte Matchio, traits fins 1.5 px.
 */
export function ArticleHero({ slug, eyebrow, className, variant = 'card' }: ArticleHeroProps) {
  const Illustration = illustrations[slug] ?? FallbackIllustration;

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden',
        variant === 'card' ? 'aspect-[16/10] bg-cream-dark/40' : 'aspect-[16/9] bg-cream-dark/40',
        className,
      )}
    >
      <Illustration />
      {eyebrow && (
        <div className="absolute top-5 left-5 px-3 py-1 bg-cream/95 backdrop-blur-sm">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-clay">
            {eyebrow}
          </p>
        </div>
      )}
    </div>
  );
}

// ───── PLA vs PHA ─────────────────────────────────────────
function PlaPhaIllustration() {
  return (
    <svg viewBox="0 0 800 500" className="absolute inset-0 w-full h-full">
      <rect width="800" height="500" fill="#F5F1E8" />

      {/* Grille de fond très subtile */}
      <g opacity="0.04">
        {Array.from({ length: 18 }).map((_, i) => (
          <line key={i} x1={i * 50} y1="0" x2={i * 50} y2="500" stroke="#0E3B2E" strokeWidth="0.5" />
        ))}
      </g>

      {/* Trois granulés bioplastiques en chaîne */}
      <g transform="translate(120 250)">
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${i * 220} 0)`}>
            <circle cx="0" cy="0" r="60" fill="none" stroke="#0E3B2E" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="40" fill="#A8C6A1" opacity="0.4" />
            <circle cx="0" cy="0" r="6" fill="#0E3B2E" />
            {/* petits points satellites */}
            {[0, 1, 2, 3, 4].map((j) => {
              const a = (j / 5) * Math.PI * 2;
              return (
                <circle
                  key={j}
                  cx={Math.cos(a) * 28}
                  cy={Math.sin(a) * 28}
                  r="3"
                  fill="#3A6B4F"
                />
              );
            })}
          </g>
        ))}
        {/* Lignes connectives */}
        <line x1="60" y1="0" x2="160" y2="0" stroke="#C9A27E" strokeWidth="1.5" strokeDasharray="3 4" />
        <line x1="280" y1="0" x2="380" y2="0" stroke="#C9A27E" strokeWidth="1.5" strokeDasharray="3 4" />
      </g>

      {/* Labels */}
      <text x="120" y="370" fontFamily="JetBrains Mono, monospace" fontSize="14" fill="#0E3B2E" textAnchor="middle" letterSpacing="3">
        PLA
      </text>
      <text x="340" y="370" fontFamily="JetBrains Mono, monospace" fontSize="14" fill="#0E3B2E" textAnchor="middle" letterSpacing="3">
        PHA
      </text>
      <text x="560" y="370" fontFamily="JetBrains Mono, monospace" fontSize="14" fill="#0E3B2E" textAnchor="middle" letterSpacing="3">
        FOSSILE
      </text>

      {/* Petit picto feuille en signature */}
      <g transform="translate(720 440) rotate(-18)" opacity="0.45">
        <path d="M0 -20 C 6 -16 9 -8 9 0 C 9 8 6 16 0 20 C -6 16 -9 8 -9 0 C -9 -8 -6 -16 0 -20 Z" fill="#0E3B2E" />
      </g>

      {/* Mention discrète */}
      <text x="400" y="450" fontFamily="Inter, sans-serif" fontSize="11" fill="#8C8C8C" textAnchor="middle" letterSpacing="2">
        BIOPLASTIQUES · ANALYSE COMPARATIVE
      </text>
    </svg>
  );
}

// ───── Visite à Uji ──────────────────────────────────────
function UjiIllustration() {
  return (
    <svg viewBox="0 0 800 500" className="absolute inset-0 w-full h-full">
      <rect width="800" height="500" fill="#F5F1E8" />

      {/* Soleil pâle */}
      <circle cx="640" cy="120" r="55" fill="#DCE8DA" opacity="0.6" />
      <circle cx="640" cy="120" r="35" fill="#A8C6A1" opacity="0.4" />

      {/* Montagne arrière */}
      <path d="M 0 280 L 200 130 L 360 230 L 520 100 L 700 200 L 800 160 L 800 500 L 0 500 Z" fill="#0E3B2E" opacity="0.85" />
      {/* Montagne milieu */}
      <path d="M 0 320 L 120 240 L 280 300 L 440 230 L 600 290 L 800 250 L 800 500 L 0 500 Z" fill="#3A6B4F" />
      {/* Montagne avant */}
      <path d="M 0 360 L 100 320 L 280 360 L 480 320 L 640 360 L 800 340 L 800 500 L 0 500 Z" fill="#A8C6A1" />

      {/* Brouillard horizontal */}
      <g opacity="0.5">
        <line x1="0" y1="305" x2="800" y2="305" stroke="#F5F1E8" strokeWidth="3" />
        <line x1="0" y1="318" x2="800" y2="318" stroke="#F5F1E8" strokeWidth="2" opacity="0.6" />
      </g>

      {/* Rangées de théiers (courbes parallèles) */}
      <g opacity="0.85">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => {
          const baseY = 410 + i * 13;
          return (
            <path
              key={i}
              d={`M 0 ${baseY} Q 200 ${baseY - 6} 400 ${baseY} T 800 ${baseY}`}
              fill="none"
              stroke="#0E3B2E"
              strokeWidth={1 - i * 0.05}
              strokeLinecap="round"
            />
          );
        })}
      </g>

      {/* Signature feuille */}
      <g transform="translate(740 460) rotate(-18)" opacity="0.6">
        <path d="M0 -16 C 5 -13 7 -6 7 0 C 7 6 5 12 0 16 C -5 12 -7 6 -7 0 C -7 -6 -5 -13 0 -16 Z" fill="#0E3B2E" />
      </g>

      <text x="40" y="470" fontFamily="Inter, sans-serif" fontSize="11" fill="#F5F1E8" letterSpacing="2.5">
        UJI · KYOTO · JAPON
      </text>
    </svg>
  );
}

// ───── L-Théanine ────────────────────────────────────────
function LtheanineIllustration() {
  return (
    <svg viewBox="0 0 800 500" className="absolute inset-0 w-full h-full">
      <rect width="800" height="500" fill="#DCE8DA" />

      {/* Structure moléculaire stylisée (C7H14N2O3 simplifié) */}
      <g transform="translate(400 250)" stroke="#0E3B2E" strokeWidth="1.5" fill="none">
        {/* Nœuds */}
        {[
          { x: -160, y: -40, label: 'N' },
          { x: -80, y: 30, label: 'C' },
          { x: 0, y: -40, label: 'C' },
          { x: 80, y: 30, label: 'C' },
          { x: 160, y: -40, label: 'C' },
          { x: -80, y: 120, label: 'O' },
          { x: 80, y: 120, label: 'O' },
          { x: 0, y: -130, label: 'N' },
        ].map((node, i) => (
          <g key={i}>
            <circle cx={node.x} cy={node.y} r="22" fill="#F5F1E8" />
            <text
              x={node.x}
              y={node.y + 5}
              textAnchor="middle"
              fontFamily="JetBrains Mono, monospace"
              fontSize="14"
              fill="#0E3B2E"
              stroke="none"
              fontWeight="500"
            >
              {node.label}
            </text>
          </g>
        ))}
        {/* Liaisons */}
        <line x1="-160" y1="-40" x2="-80" y2="30" />
        <line x1="-80" y1="30" x2="0" y2="-40" />
        <line x1="0" y1="-40" x2="80" y2="30" />
        <line x1="80" y1="30" x2="160" y2="-40" />
        <line x1="-80" y1="30" x2="-80" y2="120" />
        <line x1="80" y1="30" x2="80" y2="120" strokeDasharray="4 4" />
        <line x1="0" y1="-40" x2="0" y2="-130" />
      </g>

      {/* Cercle "20" en clay accent */}
      <g transform="translate(680 100)">
        <circle cx="0" cy="0" r="48" fill="#C9A27E" />
        <text
          x="0"
          y="6"
          textAnchor="middle"
          fontFamily="Playfair Display, serif"
          fontStyle="italic"
          fontSize="34"
          fill="#0E3B2E"
        >
          20
        </text>
        <text
          x="0"
          y="28"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontSize="8"
          fill="#0E3B2E"
          letterSpacing="2"
        >
          ÉTUDES
        </text>
      </g>

      <text x="40" y="470" fontFamily="Inter, sans-serif" fontSize="11" fill="#0E3B2E" letterSpacing="2.5">
        L-THÉANINE · C₇H₁₄N₂O₃
      </text>
    </svg>
  );
}

// ───── Coût Nespresso ────────────────────────────────────
function NespressoCostIllustration() {
  return (
    <svg viewBox="0 0 800 500" className="absolute inset-0 w-full h-full">
      <rect width="800" height="500" fill="#C9A27E" />

      {/* Balance stylisée */}
      <g stroke="#0E3B2E" strokeWidth="2" fill="none">
        {/* Poteau central */}
        <line x1="400" y1="100" x2="400" y2="380" strokeLinecap="round" />
        {/* Barre horizontale */}
        <line x1="180" y1="180" x2="620" y2="180" strokeLinecap="round" />
        {/* Triangle base */}
        <path d="M 360 380 L 440 380 L 400 320 Z" fill="#0E3B2E" />
        {/* Chaînes */}
        <line x1="200" y1="180" x2="180" y2="260" strokeWidth="1" />
        <line x1="280" y1="180" x2="300" y2="260" strokeWidth="1" />
        <line x1="500" y1="180" x2="480" y2="260" strokeWidth="1" />
        <line x1="580" y1="180" x2="600" y2="260" strokeWidth="1" />
        {/* Plateaux */}
        <path d="M 160 260 Q 240 290 320 260 L 300 280 Q 240 305 180 280 Z" fill="#F5F1E8" />
        <path d="M 460 260 Q 540 290 620 260 L 600 280 Q 540 305 480 280 Z" fill="#0E3B2E" />
      </g>

      {/* Capsules empilées à gauche */}
      <g transform="translate(225 220)" opacity="0.95">
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x={-15 - i * 2}
            y={-i * 9}
            width="30"
            height="8"
            rx="2"
            fill="#A88561"
            stroke="#0E3B2E"
            strokeWidth="0.8"
          />
        ))}
      </g>

      {/* Sachet à droite */}
      <g transform="translate(540 215)">
        <rect x="-22" y="0" width="44" height="40" rx="2" fill="#A8C6A1" stroke="#0E3B2E" strokeWidth="0.8" />
        <text
          x="0"
          y="22"
          textAnchor="middle"
          fontFamily="Playfair Display, serif"
          fontStyle="italic"
          fontSize="10"
          fill="#0E3B2E"
        >
          matchio
        </text>
      </g>

      {/* Chiffres comparatifs */}
      <text x="225" y="120" textAnchor="middle" fontFamily="Playfair Display, serif" fontStyle="italic" fontSize="32" fill="#0E3B2E">
        87 g
      </text>
      <text x="225" y="142" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#0E3B2E" letterSpacing="2">
        CO₂ NESPRESSO
      </text>

      <text x="565" y="120" textAnchor="middle" fontFamily="Playfair Display, serif" fontStyle="italic" fontSize="32" fill="#0E3B2E">
        8 g
      </text>
      <text x="565" y="142" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#0E3B2E" letterSpacing="2">
        CO₂ MATCHIO
      </text>

      <text x="400" y="455" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#0E3B2E" letterSpacing="2" opacity="0.7">
        BILAN CARBONE · ADEME 2023
      </text>
    </svg>
  );
}

// ───── Composter les sachets ─────────────────────────────
function CompostIllustration() {
  return (
    <svg viewBox="0 0 800 500" className="absolute inset-0 w-full h-full">
      <rect width="800" height="500" fill="#DCE8DA" />

      {/* Cercle infini (boucle) */}
      <g transform="translate(400 250)" stroke="#0E3B2E" strokeWidth="2" fill="none">
        <circle cx="0" cy="0" r="170" strokeDasharray="6 8" opacity="0.4" />
        <circle cx="0" cy="0" r="170" strokeDasharray="60 290" strokeLinecap="round" />
      </g>

      {/* 4 stades aux quadrants */}
      <g fill="#0E3B2E">
        {/* Sachet, position 12h */}
        <g transform="translate(400 80)">
          <rect x="-22" y="-30" width="44" height="60" rx="3" fill="#C9A27E" stroke="#0E3B2E" strokeWidth="1.2" />
          <line x1="-22" y1="-15" x2="22" y2="-15" stroke="#0E3B2E" strokeWidth="0.8" />
          <text x="0" y="50" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2">
            01 · SACHET
          </text>
        </g>

        {/* Terre, position 3h */}
        <g transform="translate(570 250)">
          <path d="M -28 -8 Q -14 -18 0 -10 Q 14 -18 28 -8 Q 28 18 0 22 Q -28 18 -28 -8 Z" fill="#A88561" stroke="#0E3B2E" strokeWidth="1.2" />
          {/* Petits points pour la terre */}
          {[[-15, 0], [10, 5], [0, -2], [-5, 10]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="1.5" fill="#0E3B2E" />
          ))}
          <text x="0" y="42" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2">
            02 · TERRE
          </text>
        </g>

        {/* Pousse, position 6h */}
        <g transform="translate(400 420)">
          <line x1="0" y1="0" x2="0" y2="-30" stroke="#3A6B4F" strokeWidth="2" />
          <path d="M 0 -20 Q -10 -25 -14 -18 Q -8 -14 0 -18" fill="#5B8C42" />
          <path d="M 0 -28 Q 10 -32 14 -25 Q 8 -22 0 -26" fill="#5B8C42" />
          <text x="0" y="20" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2">
            03 · POUSSE
          </text>
        </g>

        {/* Feuille mature, position 9h */}
        <g transform="translate(230 250) rotate(-20)">
          <path d="M 0 -28 C 11 -22 16 -10 16 0 C 16 10 11 22 0 28 C -11 22 -16 10 -16 0 C -16 -10 -11 -22 0 -28 Z" fill="#3A6B4F" stroke="#0E3B2E" strokeWidth="1.2" />
          <path d="M 0 -22 L 0 22" stroke="#A8C6A1" strokeWidth="0.6" />
        </g>
        <text x="230" y="312" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2">
          04 · FEUILLE
        </text>
      </g>

      {/* Légende centrale */}
      <text x="400" y="245" textAnchor="middle" fontFamily="Playfair Display, serif" fontStyle="italic" fontSize="22" fill="#0E3B2E">
        8 semaines
      </text>
      <text x="400" y="270" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#0E3B2E" letterSpacing="3" opacity="0.7">
        RETOUR À LA TERRE
      </text>
    </svg>
  );
}

// ───── Rituel matinal de Léa ──────────────────────────────
function MorningRitualIllustration() {
  return (
    <svg viewBox="0 0 800 500" className="absolute inset-0 w-full h-full">
      <rect width="800" height="500" fill="#F5F1E8" />

      {/* Lignes horizontales évoquant le matin / lever soleil */}
      <g opacity="0.4">
        <line x1="0" y1="180" x2="800" y2="180" stroke="#C9A27E" strokeWidth="0.5" />
        <line x1="0" y1="220" x2="800" y2="220" stroke="#C9A27E" strokeWidth="0.5" />
        <line x1="0" y1="260" x2="800" y2="260" stroke="#C9A27E" strokeWidth="0.5" />
      </g>

      {/* Soleil pâle qui se lève */}
      <circle cx="650" cy="200" r="80" fill="#C9A27E" opacity="0.25" />
      <circle cx="650" cy="200" r="50" fill="#C9A27E" opacity="0.4" />

      {/* Silhouette de profil (buste) */}
      <g transform="translate(280 250)" fill="#0E3B2E">
        {/* Tête */}
        <ellipse cx="0" cy="-60" rx="40" ry="48" />
        {/* Cou */}
        <rect x="-14" y="-18" width="28" height="20" />
        {/* Buste */}
        <path d="M -75 0 Q -75 80 -50 130 L 50 130 Q 75 80 75 0 L 60 -8 L -60 -8 Z" />
        {/* Cheveux (chignon) */}
        <circle cx="-32" cy="-72" r="18" fill="#1A1A1A" />
      </g>

      {/* Tasse de matcha en main */}
      <g transform="translate(420 290)">
        {/* Bol */}
        <path d="M -45 -20 Q -50 25 0 30 Q 50 25 45 -20 Z" fill="#3A6B4F" stroke="#0E3B2E" strokeWidth="1.5" />
        {/* Mousse matcha */}
        <ellipse cx="0" cy="-19" rx="42" ry="6" fill="#5B8C42" />
        <ellipse cx="0" cy="-19" rx="38" ry="4" fill="#A8C6A1" opacity="0.7" />
      </g>

      {/* Vapeur stylisée */}
      <g stroke="#0E3B2E" strokeWidth="1.2" fill="none" opacity="0.55" strokeLinecap="round">
        <path d="M 405 250 Q 410 230 405 215 Q 400 200 405 185" />
        <path d="M 425 250 Q 430 230 425 215" />
        <path d="M 445 250 Q 450 230 445 215 Q 440 200 445 185" />
      </g>

      {/* Heure 6:55 en mono */}
      <text x="40" y="80" fontFamily="JetBrains Mono, monospace" fontSize="14" fill="#0E3B2E" letterSpacing="3">
        06:55
      </text>
      <text x="40" y="100" fontFamily="Inter, sans-serif" fontSize="10" fill="#0E3B2E" letterSpacing="2" opacity="0.65">
        PARIS · MATIN
      </text>

      {/* Signature feuille */}
      <g transform="translate(750 450) rotate(-18)" opacity="0.45">
        <path d="M0 -16 C 5 -13 7 -6 7 0 C 7 6 5 12 0 16 C -5 12 -7 6 -7 0 C -7 -6 -5 -13 0 -16 Z" fill="#0E3B2E" />
      </g>
    </svg>
  );
}

// ───── Fallback ──────────────────────────────────────────
function FallbackIllustration() {
  return (
    <svg viewBox="0 0 800 500" className="absolute inset-0 w-full h-full">
      <rect width="800" height="500" fill="#A8C6A1" />
      <g transform="translate(400 250) rotate(-18)" opacity="0.4">
        <path d="M0 -80 C 30 -64 45 -30 45 0 C 45 30 30 64 0 80 C -30 64 -45 30 -45 0 C -45 -30 -30 -64 0 -80 Z" fill="#0E3B2E" />
        <line x1="0" y1="-60" x2="0" y2="60" stroke="#F5F1E8" strokeWidth="1" />
      </g>
    </svg>
  );
}

// ───── Mapping slug → illustration ───────────────────────
const illustrations: Record<string, React.FC> = {
  'pla-vs-pha': PlaPhaIllustration,
  'visite-uji': UjiIllustration,
  'l-theanine-vingt-etudes': LtheanineIllustration,
  'cout-reel-capsule-nespresso': NespressoCostIllustration,
  'recycler-sachets-refill': CompostIllustration,
  'rituel-matinal-lea': MorningRitualIllustration,
};
