import { cn } from '@/lib/utils';

interface LeafLogoProps {
  className?: string;
  variant?: 'mark' | 'wordmark' | 'horizontal';
  color?: 'matcha' | 'cream' | 'clay' | 'ink';
}

const colorMap = {
  matcha: '#0E3B2E',
  cream: '#F5F1E8',
  clay: '#C9A27E',
  ink: '#1A1A1A',
};

export function LeafLogo({ className, variant = 'horizontal', color = 'matcha' }: LeafLogoProps) {
  const fill = colorMap[color];

  if (variant === 'mark') {
    return (
      <svg
        className={cn('inline-block', className)}
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        aria-hidden="true"
      >
        <g transform="rotate(-18 18 18)">
          <path
            d="M18 4c4 4 7 8 7 14 0 6-3 10-7 12-4-2-7-6-7-12 0-6 3-10 7-14Z"
            fill={fill}
          />
          <path
            d="M18 8c0 8 0 16 0 22"
            stroke={color === 'cream' ? '#0E3B2E' : '#F5F1E8'}
            strokeWidth="0.8"
            opacity="0.45"
          />
        </g>
      </svg>
    );
  }

  if (variant === 'wordmark') {
    return (
      <span
        className={cn('font-display italic tracking-wide', className)}
        style={{ color: fill, fontWeight: 400 }}
      >
        matchio
      </span>
    );
  }

  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <svg width="28" height="28" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <g transform="rotate(-18 18 18)">
          <path
            d="M18 4c4 4 7 8 7 14 0 6-3 10-7 12-4-2-7-6-7-12 0-6 3-10 7-14Z"
            fill={fill}
          />
          <path
            d="M18 8c0 8 0 16 0 22"
            stroke={color === 'cream' ? '#0E3B2E' : '#F5F1E8'}
            strokeWidth="0.8"
            opacity="0.45"
          />
        </g>
      </svg>
      <span
        className="font-display italic tracking-wide text-2xl leading-none"
        style={{ color: fill, fontWeight: 400 }}
      >
        matchio
      </span>
    </span>
  );
}
