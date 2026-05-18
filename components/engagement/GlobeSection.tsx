'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { plantingRegions } from '@/lib/data/eco-stats';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/animations/Reveal';
import { formatNumber } from '@/lib/utils';

const EarthGlobe = dynamic(
  () => import('@/components/engagement/EarthGlobe').then((m) => m.EarthGlobe),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-xs uppercase tracking-[0.2em] text-cream/40 animate-pulse">
          Chargement du globe
        </div>
      </div>
    ),
  },
);

export function GlobeSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return (
    <section className="bg-matcha-deep text-cream py-24 md:py-32 overflow-hidden">
      <div className="container-wide">
        <Reveal>
          <div className="max-w-narrow">
            <Eyebrow className="text-clay">Là où nous plantons</Eyebrow>
            <h2 className="mt-4 font-display italic text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.1] text-cream max-w-3xl">
              Six régions.<br />Une seule promesse.
            </h2>
            <p className="mt-8 max-w-xl text-cream/80 leading-relaxed">
              Notre matcha pousse à Uji. Pour chaque kilo récolté, nous finançons une
              action de reforestation sur quatre continents. Voici où.
            </p>
          </div>
        </Reveal>

        {/* Globe 3D ou fallback liste */}
        {!isMobile ? (
          <div className="mt-12 relative w-full h-[600px] md:h-[680px]">
            <EarthGlobe />
          </div>
        ) : (
          <Reveal stagger className="mt-12 space-y-4">
            {plantingRegions.map((region) => (
              <article
                key={region.id}
                className="border border-cream/20 p-5 hover:border-clay/50 transition-colors"
              >
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-clay">
                  {region.country}
                </p>
                <h3 className="mt-1 font-display italic text-2xl text-cream">
                  {region.name}
                </h3>
                <p className="mt-3 font-mono text-lg text-cream">
                  {formatNumber(region.count)}{' '}
                  <span className="text-xs text-cream/65 font-sans normal-case">
                    {region.unit}
                  </span>
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.15em] text-clay/90">
                  {region.partner}
                </p>
                <p className="mt-3 text-sm text-cream/75 leading-relaxed">{region.action}</p>
              </article>
            ))}
          </Reveal>
        )}

        {/* Liste légende sous le globe (desktop) */}
        {!isMobile && (
          <Reveal stagger className="mt-16 grid md:grid-cols-3 gap-6">
            {plantingRegions.map((region) => (
              <div
                key={region.id}
                className="flex items-start gap-4 pb-5 border-b border-cream/15"
              >
                <div className="w-2 h-2 rounded-full bg-clay mt-2 flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-display italic text-xl text-cream leading-tight">
                    {region.name}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-clay mt-1">
                    {region.country}
                  </p>
                  <p className="mt-2 font-mono text-sm text-cream/85">
                    {formatNumber(region.count)}{' '}
                    <span className="text-xs text-cream/60 font-sans normal-case">
                      {region.unit}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        )}
      </div>
    </section>
  );
}
