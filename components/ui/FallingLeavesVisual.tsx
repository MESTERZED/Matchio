interface FallingLeavesVisualProps {
  className?: string;
}

const leafCount = 28;

export function FallingLeavesVisual({ className }: FallingLeavesVisualProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className ?? ''}`}>
      <style>{`
        @keyframes leaf-fall {
          0%   { transform: translate3d(0, -10vh, 0) rotate(0deg); opacity: 0; }
          8%   { opacity: 0.7; }
          50%  { opacity: 0.85; }
          100% { transform: translate3d(40px, 110vh, 0) rotate(540deg); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .leaf-anim { animation: none !important; opacity: 0.5 !important; }
        }
      `}</style>
      {Array.from({ length: leafCount }).map((_, i) => {
        const left = (i * 7.3 + Math.sin(i) * 12) % 100;
        const duration = 12 + (i * 1.7) % 10;
        const delay = -((i * 2.3) % 14);
        const size = 18 + ((i * 5) % 14);
        const variant = i % 3;
        const drift = (i % 2 === 0 ? -1 : 1) * (15 + (i % 5) * 5);
        return (
          <div
            key={i}
            className="leaf-anim absolute"
            style={{
              left: `${left}%`,
              top: 0,
              width: size,
              height: size * 1.4,
              animation: `leaf-fall ${duration}s linear ${delay}s infinite`,
              transform: 'translateY(-10vh)',
              opacity: 0,
              ['--drift' as string]: `${drift}px`,
            }}
          >
            <svg viewBox="0 0 24 36" width="100%" height="100%">
              <g transform="rotate(-18 12 18)">
                <path
                  d="M 12 4 C 18 8, 22 14, 22 22 C 22 28, 18 32, 12 34 C 6 32, 2 28, 2 22 C 2 14, 6 8, 12 4 Z"
                  fill={
                    variant === 0
                      ? '#A8C6A1'
                      : variant === 1
                        ? '#3A6B4F'
                        : '#5B8C42'
                  }
                  opacity={0.65 + (i % 3) * 0.1}
                />
                <path d="M 12 8 L 12 32" stroke="rgba(14,59,46,0.4)" strokeWidth="0.5" />
              </g>
            </svg>
          </div>
        );
      })}
    </div>
  );
}
