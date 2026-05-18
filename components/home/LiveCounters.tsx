import { CountUp } from '@/components/animations/CountUp';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/animations/Reveal';
import { ecoStats } from '@/lib/data/eco-stats';

export function LiveCounters() {
 return (
 <section className="bg-clay py-20 md:py-28 text-ink">
 <div className="container-wide">
 <Reveal>
 <div className="text-center max-w-2xl mx-auto">
 <Eyebrow as="p" className="text-center text-matcha-deep">Ensemble, depuis 2026</Eyebrow>
 <h2 className="mt-6 font-display italic text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-matcha-deep">
 Trois chiffres qui bougent chaque heure.
 </h2>
 </div>
 </Reveal>

 <Reveal stagger className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
 <div className="text-center">
 <p className="font-display italic text-[clamp(3.5rem,7vw,6rem)] leading-none text-matcha-deep">
 <CountUp end={ecoStats.treesPlantedToDate} />
 </p>
 <p className="mt-4 text-sm uppercase tracking-[0.18em] text-ink/70">
 arbres plantés en France
 </p>
 <p className="mt-1 text-xs text-ink/55 max-w-xs mx-auto">
 via Reforest&apos;Action, 1 arbre par kit Matchio Garden vendu
 </p>
 </div>
 <div className="text-center">
 <p className="font-display italic text-[clamp(3.5rem,7vw,6rem)] leading-none text-matcha-deep">
 <CountUp end={ecoStats.heritageBoxesInCirculation} />
 </p>
 <p className="mt-4 text-sm uppercase tracking-[0.18em] text-ink/70">
 boîtes Heritage en consigne
 </p>
 <p className="mt-1 text-xs text-ink/55 max-w-xs mx-auto">
 en circulation, lavées et réutilisées dans nos ateliers
 </p>
 </div>
 <div className="text-center">
 <p className="font-display italic text-[clamp(3.5rem,7vw,6rem)] leading-none text-matcha-deep">
 <CountUp end={ecoStats.plasticAvoidedKg} suffix=" kg" />
 </p>
 <p className="mt-4 text-sm uppercase tracking-[0.18em] text-ink/70">
 de plastique évité
 </p>
 <p className="mt-1 text-xs text-ink/55 max-w-xs mx-auto">
 vs un consommateur moyen Nespresso sur 12 mois
 </p>
 </div>
 </Reveal>
 </div>
 </section>
 );
}
