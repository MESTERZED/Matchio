import { cn } from '@/lib/utils';

interface DividerProps {
  className?: string;
  variant?: 'gold' | 'matcha' | 'soft';
  width?: 'sm' | 'md' | 'lg';
}

export function Divider({ className, variant = 'gold', width = 'sm' }: DividerProps) {
  return (
    <div
      className={cn(
        'h-px',
        {
          'bg-clay': variant === 'gold',
          'bg-matcha-deep': variant === 'matcha',
          'bg-cream-dark': variant === 'soft',
        },
        {
          'w-10': width === 'sm',
          'w-20': width === 'md',
          'w-32': width === 'lg',
        },
        className,
      )}
    />
  );
}
