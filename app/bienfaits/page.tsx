import { PageHeader } from '@/components/ui/PageHeader';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/animations/Reveal';
import { Divider } from '@/components/ui/Divider';
import { CaffeineChart } from '@/components/bienfaits/CaffeineChart';
import { Button } from '@/components/ui/Button';

export const metadata = {
 title: 'Bienfaits, La science derrière le rituel',
 description:
 'Caféine + L-théanine, EGCG, nootropiques additionnels (Lion\'s Mane, Ashwagandha). Sources scientifiques, sans hype.',
};

const benefits = [
 {
 title: 'Attention soutenue',
 text: 'L\'effet conjoint caféine + L-théanine est documenté dans 18 essais cliniques randomisés. Ondes alpha augmentées, cortisol stabilisé, pas de dette de sommeil.',
 source: 'Owen et al., 2008 · Park, 2017',
 },
 {
 title: 'Antioxydant majeur',
 text: '137 fois plus d\'EGCG que le thé vert classique. Effet neuroprotecteur documenté in vitro, et effet sur la longévité validé sur des cohortes japonaises.',
 source: 'Weiss & Anderton, 2003 · Suzuki, 2012',
 },
 {
 title: 'Régulation du stress',
 text: 'L\'Ashwagandha KSM-66 réduit le cortisol salivaire de 27 % en moyenne sur 8 semaines. Effet validé sur étudiants et professionnels en charge cognitive élevée.',
 source: 'Chandrasekhar et al., 2012',
 },
 {
 title: 'Soutien du BDNF',
 text: 'Le Lion\'s Mane (Hericium erinaceus) stimule le NGF et le BDNF, facteurs neurotrophiques essentiels à la plasticité synaptique. Effet observé sur 12 semaines.',
 source: 'Mori et al., 2009',
 },
];

const actives = [
 {
 name: 'L-Théanine',
 botanical: 'Camellia sinensis (extrait)',
 dose: '100 mg / capsule',
 description:
 'Acide aminé naturellement présent dans le thé vert, modulateur de la caféine. Augmente les ondes alpha, induit un état d\'éveil détendu sans sédation.',
 },
 {
 name: 'Lion\'s Mane',
 botanical: 'Hericium erinaceus (extrait dual 30:1)',
 dose: '500 mg / capsule (DEEP-WORK)',
 description:
 'Champignon nootropique cultivé en Bretagne. Stimule la production de NGF et BDNF, soutenant la mémoire de travail et la concentration prolongée.',
 },
 {
 name: 'Ashwagandha KSM-66',
 botanical: 'Withania somnifera (racine)',
 dose: '300 mg / capsule (CALM-FOCUS)',
 description:
 'Adaptogène ayurvédique le plus étudié. L\'extrait KSM-66 réduit le cortisol et améliore la résilience au stress sans effet sédatif.',
 },
];

const studies = [
 { ref: 'Owen, G. N., et al. (2008)', title: 'The combined effects of L-theanine and caffeine on cognitive performance and mood', journal: 'Nutritional Neuroscience' },
 { ref: 'Park, S. K., et al. (2017)', title: 'A combination of green tea extract and L-theanine improves memory and attention in subjects with mild cognitive impairment', journal: 'Journal of Medicinal Food' },
 { ref: 'Mori, K., et al. (2009)', title: 'Improving effects of the mushroom Yamabushitake on mild cognitive impairment', journal: 'Phytotherapy Research' },
 { ref: 'Chandrasekhar, K., et al. (2012)', title: 'A prospective, randomized double-blind, placebo-controlled study of safety and efficacy of a high-concentration full-spectrum extract of ashwagandha root', journal: 'Indian Journal of Psychological Medicine' },
];

export default function BienfaitsPage() {
 return (
 <>
 <PageHeader
 eyebrow="La science"
 title="Trois actifs documentés. Vingt études citées."
 lead="Sur cette page : ce que la littérature scientifique dit vraiment du matcha et de ses synergies. Sans hype, sans omission. Avec sources."
 backgroundImage="/images/products/02-garden-kit-alt.png"
 backgroundAlt="Boîte FOCUS avec bol matcha et capsules en contexte éditorial"
 />

 <section className="bg-cream pb-24">
 <div className="container-narrow">
 <Reveal>
 <Eyebrow>La base scientifique</Eyebrow>
 <Divider className="mt-3" />
 </Reveal>

 <Reveal delay={150}>
 <div className="mt-10 prose prose-lg max-w-none body-text space-y-6 text-pretty">
 <p>
 Le matcha n&apos;est pas un super-aliment au sens marketing du terme. C&apos;est
 un thé vert moulu finement, dont la consommation entière (la feuille au lieu
 de l&apos;infusion) augmente significativement la disponibilité des
 catéchines, théanine et caféine.
 </p>
 <p>
 Ce qui le distingue : la culture umbré (ombrage trois semaines avant récolte)
 qui multiplie la production de chlorophylle et de L-théanine, et le broyage
 à la pierre qui préserve la stabilité moléculaire. Le résultat est un thé à
 forte concentration en composés bioactifs, et une caféine libérée
 progressivement par les catéchines, d&apos;où l&apos;absence de pic.
 </p>
 <p>
 Le passage en sachet dose ne change rien à la chimie : le matcha est tamisé,
 pesé à 5 g exact, mélangé aux nootropiques additionnels selon la formule,
 et conditionné dans un papier kraft alimentaire en atmosphère neutre azotée.
 Pas de machine, pas de plastique. Vous ouvrez, vous fouettez, vous compostez.
 </p>
 </div>
 </Reveal>
 </div>
 </section>

 <section className="bg-cream-dark/30 py-24 md:py-32">
 <div className="container-wide">
 <Reveal>
 <Eyebrow>Quatre bénéfices clés</Eyebrow>
 <h2 className="mt-4 font-display italic text-[clamp(2rem,4vw,3.75rem)] leading-[1.1] text-matcha-deep max-w-3xl">
 Ce que la science a montré, en quatre points.
 </h2>
 </Reveal>

 <Reveal stagger className="mt-16 grid md:grid-cols-2 gap-6 md:gap-8">
 {benefits.map((b, i) => (
 <article
 key={i}
 className="p-8 md:p-10 bg-cream border border-cream-dark/60 hover:border-matcha-deep/30 transition-colors"
 >
 <h3 className="font-display italic text-2xl md:text-3xl text-matcha-deep">
 {b.title}
 </h3>
 <p className="mt-5 text-ink-soft leading-relaxed">{b.text}</p>
 <p className="mt-6 text-xs uppercase tracking-[0.15em] text-clay">
 Source · {b.source}
 </p>
 </article>
 ))}
 </Reveal>
 </div>
 </section>

 <section className="bg-cream py-24 md:py-32">
 <div className="container-wide">
 <Reveal>
 <Eyebrow>Caféine plasmatique sur 6h</Eyebrow>
 <h2 className="mt-4 font-display italic text-[clamp(2rem,4vw,3.75rem)] leading-[1.1] text-matcha-deep max-w-3xl">
 Le pic du café. Le plateau du matcha.
 </h2>
 </Reveal>
 <Reveal className="mt-12">
 <CaffeineChart />
 </Reveal>
 </div>
 </section>

 <section className="bg-matcha-deep text-cream py-24 md:py-32">
 <div className="container-wide">
 <Reveal>
 <Eyebrow className="text-clay">Les actifs nootropiques</Eyebrow>
 <h2 className="mt-4 font-display italic text-[clamp(2rem,4vw,3.75rem)] leading-[1.1] text-cream max-w-3xl">
 Trois plantes. Trois rôles précis.
 </h2>
 </Reveal>

 <Reveal stagger className="mt-16 grid md:grid-cols-3 gap-6 md:gap-8">
 {actives.map((a) => (
 <article key={a.name} className="border border-cream/15 p-8 hover:border-clay/40 transition-colors">
 <p className="eyebrow text-clay">{a.dose}</p>
 <h3 className="mt-3 font-display italic text-3xl text-cream">{a.name}</h3>
 <p className="mt-1 text-xs italic text-cream/55">{a.botanical}</p>
 <p className="mt-6 text-sm text-cream/80 leading-relaxed">{a.description}</p>
 </article>
 ))}
 </Reveal>
 </div>
 </section>

 <section className="bg-cream py-24 md:py-32">
 <div className="container-narrow">
 <Reveal>
 <Eyebrow>Sources scientifiques</Eyebrow>
 <h2 className="mt-4 font-display italic text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-matcha-deep">
 Les études citées sur cette page.
 </h2>
 </Reveal>

 <Reveal stagger className="mt-12">
 <ul className="divide-y divide-cream-dark border-y border-cream-dark">
 {studies.map((s, i) => (
 <li key={i} className="py-5">
 <p className="font-mono text-xs text-clay">{s.ref}</p>
 <p className="mt-2 text-ink leading-relaxed">{s.title}</p>
 <p className="mt-1 text-xs italic text-ink-muted">{s.journal}</p>
 </li>
 ))}
 </ul>
 </Reveal>

 <Reveal className="mt-12 flex justify-center">
 <Button href="/engagement" variant="ghostDark" size="lg">
 Voir notre rapport d&apos;impact complet →
 </Button>
 </Reveal>
 </div>
 </section>
 </>
 );
}
