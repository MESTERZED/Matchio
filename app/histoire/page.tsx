'use client';
import Image from 'next/image';
import { basePath } from '@/lib/utils';
import { Reveal } from '@/components/animations/Reveal';

export default function HistoirePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center bg-matcha-deep">
        <Image
          src={`${basePath}/images/products/01-garden-kit-hero.png`}
          alt="Notre histoire"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        
        <div className="container-wide relative z-10 text-center text-cream">
          <h1 className="font-display italic text-6xl md:text-7xl">Notre histoire</h1>
          <p className="mt-4 text-xl max-w-xl mx-auto">
            Comment Matchio est né d’une envie simple : mieux consommer son rituel quotidien.
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-24 bg-cream">
        <div className="container-wide max-w-3xl">
          <Reveal>
            <h2 className="font-display italic text-5xl leading-tight text-matcha-deep">
              Une rencontre entre tradition japonaise et exigence française.
            </h2>
          </Reveal>

          {/* Tu peux ajouter le reste de ton texte ici plus tard */}
          <div className="mt-12 prose prose-lg text-ink-soft">
            {/* Ton contenu existant va ici */}
          </div>
        </div>
      </section>
    </div>
  );
}