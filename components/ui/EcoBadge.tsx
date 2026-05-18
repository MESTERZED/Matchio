import { cn } from '@/lib/utils';

type BadgeType = 'compostable' | 'consigne' | 'zero-plastic' | 'reforestation' | 'refill';

const labels: Record<BadgeType, string> = {
  compostable: 'Compostable',
  consigne: 'Consigne',
  'zero-plastic': '0 plastique',
  reforestation: 'Reforestation',
  refill: 'Refill',
};

function Icon({ type, className }: { type: BadgeType; className?: string }) {
  const common = {
    width: 14,
    height: 14,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
  };

  switch (type) {
    case 'compostable':
      return (
        <svg {...common}>
          <path d="M12 3c2.5 4 5 6 5 10a5 5 0 1 1-10 0c0-4 2.5-6 5-10Z" />
          <path d="M12 13v6" />
        </svg>
      );
    case 'consigne':
      return (
        <svg {...common}>
          <path d="M21 12a9 9 0 1 1-3-6.7" />
          <path d="M21 4v5h-5" />
        </svg>
      );
    case 'zero-plastic':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M5 5l14 14" />
        </svg>
      );
    case 'reforestation':
      return (
        <svg {...common}>
          <path d="M12 2v6l-3 3M12 8l3 3M6 14l3-3M18 14l-3-3" />
          <rect x="10" y="14" width="4" height="8" />
        </svg>
      );
    case 'refill':
      return (
        <svg {...common}>
          <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
          <path d="M21 4v5h-5" />
          <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
          <path d="M3 20v-5h5" />
        </svg>
      );
  }
}

interface EcoBadgeProps {
  type: BadgeType;
  size?: 'sm' | 'md';
  variant?: 'soft' | 'outline' | 'solid';
  className?: string;
}

export function EcoBadge({ type, size = 'sm', variant = 'soft', className }: EcoBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-sans font-medium uppercase tracking-[0.12em]',
        {
          'text-[0.625rem] px-2 py-1': size === 'sm',
          'text-xs px-3 py-1.5': size === 'md',
        },
        {
          'bg-matcha-mist text-matcha-deep': variant === 'soft',
          'border border-matcha-deep/30 text-matcha-deep': variant === 'outline',
          'bg-matcha-deep text-cream': variant === 'solid',
        },
        'rounded-full',
        className,
      )}
    >
      <Icon type={type} className="opacity-90" />
      {labels[type]}
    </span>
  );
}
