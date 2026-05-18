import { Eyebrow } from '@/components/ui/Eyebrow';
import { Divider } from '@/components/ui/Divider';
import { Reveal } from '@/components/animations/Reveal';
import Link from 'next/link';

export function Manifesto() {
 return (
 <section className="bg-cream py-24 md:py-32">
 <div className="container-editorial text-center">
 <Reveal>
 <Eyebrow as="p" className="text-center">Notre manifeste</Eyebrow>
 </Reveal>

 <Reveal delay={120}>
 <h2 className="mt-6 font-display italic text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.15] text-matcha-deep text-balance">
 L&apos;excellence du matcha japonais, repensée pour les esprits qui veulent penser
 mieux, sans coûter à la planète.
 </h2>
 </Reveal>

 <Reveal delay={220} className="mt-10">
 <Divider />
 </Reveal>

 <Reveal delay={250}>
 <p className="mt-10 font-display italic text-2xl md:text-3xl text-matcha-deep leading-snug text-balance">
 Pas de capsule. Pas de machine. Juste de l&apos;eau chaude et un fouet.
 </p>
 </Reveal>

 <Reveal delay={350}>
 <div className="mt-10 space-y-6 text-ink-soft body-text text-pretty">
 <p>
 Trois piliers tiennent notre marque, sans hiérarchie. La performance cognitive,
 parce qu&apos;une matinée nette compte plus qu&apos;une matinée stimulée. La
 circularité, parce qu&apos;un rituel quotidien ne peut pas se nourrir de plastique
 jetable. Le rituel lui-même, parce que ce qui se répète bien finit par se faire
 tout seul.
 </p>
 <p>
 Nous avons commencé en 2024 avec des capsules PLA. Nous les avons abandonnées en
 2025, parce qu&apos;aucun compostage industriel n&apos;est universellement
 disponible. Le sachet papier kraft, lui, retourne à la terre dans n&apos;importe
 quel jardin. Nous payons notre producteur d&apos;Uji 28 % au-dessus du marché. Nos
 boîtes Heritage sont consignées.
 </p>
 </div>
 </Reveal>

 <Reveal delay={400}>
 <Link
 href="/histoire"
 className="link-underline inline-block mt-10 text-sm font-medium uppercase tracking-[0.18em] text-matcha-deep"
 >
 Découvrir notre histoire →
 </Link>
 </Reveal>
 </div>
 </section>
 );
}
