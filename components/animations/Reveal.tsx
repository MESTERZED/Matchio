'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  threshold?: number;
  delay?: number;
  once?: boolean;
  as?: keyof React.JSX.IntrinsicElements;
}

export function Reveal({
  children,
  className,
  stagger = false,
  threshold = 0.15,
  delay = 0,
  once = true,
  as,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin: '0px 0px -10% 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, delay, once]);

  const Component = (as ?? 'div') as 'div';

  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(stagger ? 'reveal-stagger' : 'reveal', visible && 'is-visible', className)}
    >
      {children}
    </Component>
  );
}
