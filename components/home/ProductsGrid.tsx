'use client';

import { useState } from 'react';
import { ProductCard } from '@/components/ui/ProductCard';
import { products } from '@/lib/data/products';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/animations/Reveal';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const tabs = [
  { id: 'capsules', label: 'Capsules' },
  { id: 'refill', label: 'Refill' },
  { id: 'all', label: 'Tout voir' },
];

export function ProductsGrid() {
  const [active, setActive] = useState<'capsules' | 'refill' | 'all'>('capsules');

  const filtered = products.filter((p) => {
    if (active === 'all') return p.featuredOnHome;
    if (active === 'capsules') return p.category === 'capsules';
    if (active === 'refill') return p.category === 'refill';
    return true;
  });

  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="container-wide">
        <Reveal>
          <Eyebrow>La gamme</Eyebrow>
          <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display italic text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-matcha-deep max-w-3xl">
              Sept produits, deux logiques.<br />
              Une seule promesse.
            </h2>
            <div className="flex gap-1 border border-cream-dark p-1 self-start">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id as 'capsules' | 'refill' | 'all')}
                  className={cn(
                    'px-4 md:px-6 py-2.5 text-xs uppercase tracking-[0.18em] transition-colors',
                    active === tab.id
                      ? 'bg-matcha-deep text-cream'
                      : 'text-ink-soft hover:text-ink',
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal stagger className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </Reveal>

        <Reveal className="mt-12 flex justify-center">
          <Button href="/boutique" variant="ghostDark" size="lg">
            Voir toute la boutique →
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
