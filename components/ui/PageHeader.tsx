import Image from 'next/image';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Divider } from '@/components/ui/Divider';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  variant?: 'cream' | 'matcha';
  className?: string;
  children?: React.ReactNode;
  backgroundImage?: string;
  backgroundAlt?: string;
}

export function PageHeader({
  eyebrow,
  title,
  lead,
  variant = 'cream',
  className,
  children,
  backgroundImage,
  backgroundAlt,
}: PageHeaderProps) {
  const isDark = variant === 'matcha' || Boolean(backgroundImage);
  return (
    <section
      className={cn(
        'relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden',
        isDark ? 'bg-matcha-deep text-cream' : 'bg-cream text-ink',
        backgroundImage && 'min-h-[80vh] flex items-end',
        className,
      )}
    >
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt={backgroundAlt ?? ''}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-matcha-deep via-matcha-deep/70 to-matcha-deep/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-matcha-deep/60 via-transparent to-transparent" />
        </div>
      )}
      <div className="container-narrow relative z-10">
        {eyebrow && (
          <Eyebrow as="p" className={isDark ? 'text-clay' : ''}>
            {eyebrow}
          </Eyebrow>
        )}
        <h1
          className={cn(
            'mt-6 font-display italic text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.05] tracking-tight text-balance',
            isDark ? 'text-cream' : 'text-matcha-deep',
          )}
        >
          {title}
        </h1>
        {lead && (
          <>
            <Divider className="mt-10" variant="gold" />
            <p
              className={cn(
                'mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-pretty',
                isDark ? 'text-cream/85' : 'text-ink-soft',
              )}
            >
              {lead}
            </p>
          </>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
