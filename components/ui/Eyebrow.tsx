import { cn } from '@/lib/utils';

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  as?: 'span' | 'div' | 'p';
}

export function Eyebrow({ children, className, as: Tag = 'span' }: EyebrowProps) {
  return (
    <Tag
      className={cn(
        'block font-sans text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-clay',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
