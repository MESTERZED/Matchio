interface CircularLoopVisualProps {
  className?: string;
}

export function CircularLoopVisual({ className }: CircularLoopVisualProps) {
  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className ?? ''}`}>
      <svg viewBox="0 0 500 500" className="w-full h-full max-w-[560px] max-h-[560px]">
        <defs>
          <linearGradient id="circle-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3A6B4F" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0E3B2E" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient id="center-glow" cx="0.5" cy="0.5">
            <stop offset="0%" stopColor="#5B8C42" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#5B8C42" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ring */}
        <circle
          cx="250"
          cy="250"
          r="170"
          fill="none"
          stroke="url(#circle-bg)"
          strokeWidth="40"
          opacity="0.6"
        />
        <circle
          cx="250"
          cy="250"
          r="170"
          fill="none"
          stroke="#C9A27E"
          strokeWidth="1.5"
          strokeDasharray="8 12"
          opacity="0.6"
          className="animate-[spin_60s_linear_infinite] origin-center"
        />

        {/* Center matcha disc */}
        <circle cx="250" cy="250" r="60" fill="url(#center-glow)" />
        <circle cx="250" cy="250" r="38" fill="#3A6B4F" />
        <circle cx="250" cy="250" r="36" fill="#5B8C42" opacity="0.85" />

        {/* Heritage Box at 12 o'clock */}
        <g
          transform="translate(250 80)"
          style={{ filter: 'drop-shadow(0 12px 18px rgba(14,59,46,0.35))' }}
        >
          <rect x="-44" y="-30" width="88" height="60" rx="3" fill="#FAF6ED" />
          <rect x="-44" y="-30" width="88" height="14" rx="3" fill="#EFE7D2" />
          <text
            x="0"
            y="6"
            textAnchor="middle"
            fontFamily="Playfair Display, serif"
            fontStyle="italic"
            fontSize="14"
            fill="#D4B57E"
          >
            matchio
          </text>
          <text
            x="0"
            y="22"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="6"
            letterSpacing="2"
            fill="#0E3B2E"
            opacity="0.55"
          >
            HERITAGE
          </text>
        </g>

        {/* Refill Pack at 4 o'clock */}
        <g
          transform="translate(390 320)"
          style={{ filter: 'drop-shadow(0 12px 18px rgba(14,59,46,0.35))' }}
        >
          <rect x="-30" y="-50" width="60" height="100" rx="2" fill="#C2A47C" />
          <rect x="-30" y="20" width="60" height="30" fill="#0E3B2E" />
          <text
            x="0"
            y="-5"
            textAnchor="middle"
            fontFamily="Playfair Display, serif"
            fontStyle="italic"
            fontSize="14"
            fill="#0E3B2E"
          >
            matchio
          </text>
          <text
            x="0"
            y="40"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="5"
            letterSpacing="2"
            fill="#C9A27E"
          >
            REFILL
          </text>
        </g>

        {/* Single dose at 8 o'clock */}
        <g
          transform="translate(110 320)"
          style={{ filter: 'drop-shadow(0 12px 18px rgba(14,59,46,0.3))' }}
        >
          <rect x="-22" y="-28" width="44" height="56" rx="2" fill="#C2A47C" />
          <text
            x="0"
            y="-2"
            textAnchor="middle"
            fontFamily="Playfair Display, serif"
            fontStyle="italic"
            fontSize="9"
            fill="#0E3B2E"
          >
            matchio
          </text>
          <text
            x="0"
            y="14"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="4"
            letterSpacing="1.5"
            fill="#0E3B2E"
            opacity="0.55"
          >
            DOSE
          </text>
        </g>

        {/* Arrow indicators on the ring */}
        <g fill="#C9A27E" opacity="0.85">
          <path
            d="M 420 235 L 414 230 L 414 240 Z"
            transform="rotate(120 250 250)"
          />
          <path
            d="M 420 235 L 414 230 L 414 240 Z"
            transform="rotate(240 250 250)"
          />
          <path
            d="M 420 235 L 414 230 L 414 240 Z"
            transform="rotate(0 250 250)"
          />
        </g>

        {/* Step labels */}
        <g
          fontFamily="Inter, sans-serif"
          fontSize="9"
          letterSpacing="2"
          fill="#A8C6A1"
        >
          <text x="250" y="160" textAnchor="middle">01 · ACHAT</text>
          <text x="320" y="270" textAnchor="middle">02 · REFILL</text>
          <text x="180" y="270" textAnchor="middle">03 · CONSIGNE</text>
        </g>
      </svg>

      {/* Soft animated rotation indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.2em] text-cream/35 pointer-events-none">
        ✦ boucle continue
      </div>
    </div>
  );
}
