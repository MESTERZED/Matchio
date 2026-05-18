import { forwardRef } from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-sans text-sm font-medium tracking-wide transition-all duration-300 ease-expo-out disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap',
  {
    variants: {
      variant: {
        primary:
          'bg-clay text-ink hover:bg-clay-dark hover:text-cream',
        secondary:
          'bg-matcha-deep text-cream hover:bg-matcha-mid',
        ghost:
          'bg-transparent text-cream border border-cream/40 hover:border-cream hover:bg-cream/5',
        ghostDark:
          'bg-transparent text-ink border border-ink/30 hover:border-ink hover:bg-ink/5',
        link: 'text-clay underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-10 px-5 text-xs',
        md: 'h-12 px-7 text-sm',
        lg: 'h-14 px-9 text-base',
        xl: 'h-16 px-10 text-base',
      },
      shape: {
        square: 'rounded-none',
        rounded: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      shape: 'rounded',
    },
  },
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, shape, href, external, children, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size, shape }), className);

    if (href) {
      if (external) {
        return (
          <a href={href} className={classes} target="_blank" rel="noreferrer">
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  },
);
Button.displayName = 'Button';
