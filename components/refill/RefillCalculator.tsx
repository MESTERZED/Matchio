'use client';

import { useState, useMemo } from 'react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/animations/Reveal';
import { formatNumber } from '@/lib/utils';

const alternatives = {
  'cafe-filtre': { label: 'Café filtre', co2: 87, waste: 0 },
  'cafe-capsule': { label: 'Capsule café (Nespresso)', co2: 95, waste: 1.2 },
  'the-sachet': { label: 'Thé en sachet', co2: 22, waste: 0.5 },
};

type AltKey = keyof typeof alternatives;

export function RefillCalculator() {
  const [cups, setCups] = useState(2);
  const [alt, setAlt] = useState<AltKey>('cafe-capsule');

  const result = useMemo(() => {
    const matchioCO2 = 6;
    const altData = alternatives[alt];
    const days = 365;
    const co2Saved = (altData.co2 - matchioCO2) * cups * days;
    const wasteAvoided = altData.waste * cups * days;
    return {
      co2KgSaved: Math.round(co2Saved / 1000),
      wasteAvoidedG: Math.round(wasteAvoided),
      capsulesAvoided: cups * days,
    };
  }, [cups, alt]);

  return (
    <section className="bg-matcha-deep text-cream py-24 md:py-32">
      <div className="container-wide">
        <Reveal>
          <Eyebrow className="text-clay">Calculateur d&apos;impact</Eyebrow>
          <h2 className="mt-6 font-display italic text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] max-w-3xl">
            Combien votre matin coûte-t-il à la planète ?
          </h2>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-20">
          <Reveal>
            <div className="space-y-10 p-8 md:p-10 bg-cream/5 border border-cream/15">
              <div>
                <label className="eyebrow text-cream/65">Combien de tasses par jour ?</label>
                <div className="mt-4 flex items-baseline gap-4">
                  <span className="font-display italic text-6xl text-cream">{cups}</span>
                  <span className="text-cream/60 text-sm">tasse{cups > 1 ? 's' : ''}</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={5}
                  value={cups}
                  onChange={(e) => setCups(parseInt(e.target.value))}
                  className="w-full mt-6 accent-clay"
                  aria-label="Nombre de tasses par jour"
                />
                <div className="flex justify-between mt-1 text-xs text-cream/50 font-mono">
                  <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
                </div>
              </div>

              <div>
                <label className="eyebrow text-cream/65">Que remplacez-vous ?</label>
                <div className="mt-4 grid grid-cols-1 gap-2">
                  {(Object.keys(alternatives) as AltKey[]).map((k) => (
                    <button
                      key={k}
                      onClick={() => setAlt(k)}
                      className={`px-5 py-3 text-left text-sm transition-colors border ${
                        alt === k
                          ? 'bg-clay text-ink border-clay'
                          : 'border-cream/20 text-cream/85 hover:border-cream/40'
                      }`}
                    >
                      {alternatives[k].label}
                      <span className="ml-3 font-mono text-xs opacity-70">
                        {alternatives[k].co2} g CO₂/tasse
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-clay text-ink p-8 md:p-12 h-full flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.2em] text-matcha-deep">
                Sur un an, avec Matchio Refill
              </p>
              <div className="mt-8 space-y-10">
                <div>
                  <p className="font-display italic text-[clamp(3rem,6vw,5rem)] leading-none text-matcha-deep">
                    {formatNumber(result.co2KgSaved)} kg
                  </p>
                  <p className="mt-3 text-sm text-ink-soft">de CO₂ évités</p>
                </div>
                <div className="h-px w-16 bg-matcha-deep/30" />
                <div>
                  <p className="font-display italic text-[clamp(3rem,6vw,5rem)] leading-none text-matcha-deep">
                    {formatNumber(result.capsulesAvoided)}
                  </p>
                  <p className="mt-3 text-sm text-ink-soft">capsules ou contenants évités</p>
                </div>
              </div>
              <p className="mt-12 text-xs text-ink/60 leading-relaxed">
                Calcul basé sur {cups} {cups > 1 ? 'tasses' : 'tasse'} par jour, 365 jours
                par an, en remplacement complet de votre alternative actuelle. Sources :
                ADEME 2023, Quantis ACV 2018.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
