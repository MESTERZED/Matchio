'use client';

import { Reveal } from '@/components/animations/Reveal';
import { CountUp } from '@/components/animations/CountUp';

interface EcoImpactChartProps {
  perCup: number;
  vsCoffee: number;
}

const baselines = [
  { label: 'Café filtre', value: 87, color: '#A88561' },
  { label: 'Café Nespresso', value: 95, color: '#1A1A1A' },
  { label: 'Thé en sachet', value: 22, color: '#C9A27E' },
];

export function EcoImpactChart({ perCup, vsCoffee }: EcoImpactChartProps) {
  const max = Math.max(perCup, ...baselines.map((b) => b.value));
  const items = [{ label: 'Matchio', value: perCup, color: '#0E3B2E', highlight: true }, ...baselines];

  return (
    <div className="bg-cream-dark/40 p-8 md:p-10 border border-cream-dark/60">
      <p className="eyebrow">Bilan carbone par tasse · grammes CO₂eq</p>
      <h3 className="mt-3 font-display italic text-3xl text-matcha-deep">
        {Math.round(((vsCoffee - perCup) / vsCoffee) * 100)} % de moins qu&apos;un café.
      </h3>

      <Reveal stagger className="mt-10 space-y-4">
        {items.map((it) => (
          <div key={it.label}>
            <div className="flex justify-between text-sm mb-2">
              <span className={it.highlight ? 'text-matcha-deep font-medium' : 'text-ink-soft'}>
                {it.label}
              </span>
              <span className="font-mono">
                <CountUp end={it.value} duration={1600} suffix=" g" />
              </span>
            </div>
            <div className="h-3 bg-cream-dark rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-[1600ms] ease-expo-out"
                style={{
                  width: `${(it.value / max) * 100}%`,
                  background: it.color,
                }}
              />
            </div>
          </div>
        ))}
      </Reveal>

      <p className="mt-8 text-xs text-ink-muted leading-relaxed">
        Source : ADEME 2023 · Quantis Cycle de Vie 2018 · Nos données ouvertes sur GitHub.
      </p>
    </div>
  );
}
