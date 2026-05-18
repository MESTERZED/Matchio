'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className={cn('divide-y divide-cream-dark border-y border-cream-dark', className)}>
      {items.map((item, i) => {
        const open = openIdx === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpenIdx(open ? null : i)}
              className="w-full flex items-center justify-between py-5 text-left hover:opacity-80 transition-opacity"
              aria-expanded={open}
            >
              <span className="font-sans text-sm uppercase tracking-[0.15em] text-ink font-medium">
                {item.title}
              </span>
              {open ? <Minus size={16} className="text-matcha-deep" /> : <Plus size={16} className="text-matcha-deep" />}
            </button>
            <div
              className={cn(
                'grid transition-all duration-500 ease-expo-out',
                open ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]',
              )}
            >
              <div className="overflow-hidden">
                <div className="text-sm text-ink-soft leading-relaxed">{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
