import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/animations/Reveal';
import Link from 'next/link';

const benefits = [
 {
 icon: (
 <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
 <path d="M32 8c8 0 14 6 14 14s-6 14-14 14-14-6-14-14 6-14 14-14Z" />
 <path d="M32 36v12" />
 <path d="M22 56h20" />
 </svg>
 ),
 title: 'Caféine + L-théanine',
 text: 'La caféine du matcha est libérée lentement par les catéchines. Couplée à la L-théanine, elle produit un état d\'éveil détendu, sans pic, sans tremblement, sans crash.',
 },
 {
 icon: (
 <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
 <circle cx="32" cy="32" r="20" />
 <path d="M22 32c4-6 16-6 20 0" />
 <path d="M28 26v12M36 26v12" />
 </svg>
 ),
 title: 'Antioxydants EGCG',
 text: '137 fois plus d\'antioxydants que le thé vert classique. L\'EGCG (épigallocatéchine gallate) est la molécule la plus étudiée du monde végétal, neuroprotection, longévité.',
 },
 {
 icon: (
 <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
 <path d="M12 50c8-2 12-12 20-12s12 10 20 12" />
 <path d="M32 38c-4-8-2-18 0-26 2 8 4 18 0 26Z" />
 <path d="M32 12v26" />
 </svg>
 ),
 title: 'Bilan carbone × 7 plus faible',
 text: '12 g CO₂eq par tasse contre 87 g pour un café filtre. Sans aluminium, sans transport aérien, encapsulation française et compostage des contenants.',
 },
];

export function BenefitsSection() {
 return (
 <section className="bg-cream py-24 md:py-32">
 <div className="container-wide">
 <Reveal>
 <div className="text-center max-w-2xl mx-auto">
 <Eyebrow as="p" className="text-center">La science derrière le rituel</Eyebrow>
 <h2 className="mt-6 font-display italic text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-matcha-deep">
 Trois preuves documentées.<br />
 Aucune promesse vague.
 </h2>
 </div>
 </Reveal>

 <Reveal stagger className="mt-20 grid md:grid-cols-3 gap-8 md:gap-10">
 {benefits.map((benefit, i) => (
 <article
 key={i}
 className="bg-cream-dark/40 p-8 md:p-10 border border-cream-dark/60 hover:border-matcha-deep/30 transition-colors duration-500"
 >
 <div className="w-12 h-12 text-matcha-deep">{benefit.icon}</div>
 <h3 className="mt-8 font-display italic text-2xl text-matcha-deep">
 {benefit.title}
 </h3>
 <p className="mt-4 text-sm text-ink-soft leading-relaxed">{benefit.text}</p>
 </article>
 ))}
 </Reveal>

 <Reveal className="mt-12 flex justify-center">
 <Link
 href="/bienfaits"
 className="link-underline text-sm uppercase tracking-[0.18em] text-matcha-deep font-medium"
 >
 Lire la science complète →
 </Link>
 </Reveal>
 </div>
 </section>
 );
}
