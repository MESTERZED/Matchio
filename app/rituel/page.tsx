import { PageHeader } from '@/components/ui/PageHeader';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/animations/Reveal';
import { Button } from '@/components/ui/Button';
import { Divider } from '@/components/ui/Divider';

export const metadata = {
 title: 'Le Rituel, Trois minutes d\'intention',
 description: 'Six gestes du rituel matchio, inspirés du chanoyu japonais.',
};

const steps = [
 {
 num: '01',
 kanji: '和',
 romaji: 'WA',
 title: 'Préparer l\'eau',
 text: 'Filtrer, chauffer à 70 °C précisément. Pas plus, pas moins. L\'eau bouillante détruit l\'umami et révèle l\'amertume.',
 },
 {
 num: '02',
 kanji: '敬',
 romaji: 'KEI',
 title: 'Ouvrir le sachet',
 text: 'Déchirer délicatement le sachet papier kraft. Verser les 5 g dans le mug-bol tiède. Tamiser avec le chashaku si vous aimez la précision.',
 },
 {
 num: '03',
 kanji: '清',
 romaji: 'SEI',
 title: 'Verser et fouetter',
 text: '60 ml d\'eau. Fouet en M, jamais en cercle. Pendant vingt secondes, vous ne pensez à rien d\'autre. C\'est le geste qui pense pour vous.',
 },
 {
 num: '04',
 kanji: '寂',
 romaji: 'JAKU',
 title: 'Observer la mousse',
 text: 'Une mousse fine, dense, claire. Si elle ne tient pas, l\'eau était trop chaude ou le geste trop lent. C\'est un retour, pas un échec.',
 },
 {
 num: '05',
 kanji: '間',
 romaji: 'MA',
 title: 'Le premier sip',
 text: 'Debout devant la fenêtre. Pas de téléphone. Pas de notification. Trois minutes pour entrer dans la matinée, pas pour la fuir.',
 },
 {
 num: '06',
 kanji: '茶',
 romaji: 'CHA',
 title: 'Recommencer demain',
 text: 'Ce qui se répète bien finit par se faire tout seul. Le rituel pense pour vous au bout de trois semaines. C\'est le but.',
 },
];

const quotes = [
 { text: '一期一会', romaji: 'Ichigo ichie', meaning: 'Une rencontre, une seule fois.' },
 { text: '侘寂', romaji: 'Wabi-sabi', meaning: 'La beauté de l\'imparfait, du transitoire.' },
 { text: '茶禅一味', romaji: 'Cha-zen ichi-mi', meaning: 'Thé et zen, une même saveur.' },
];

export default function RituelPage() {
 return (
 <>
 <PageHeader
 eyebrow="Le rituel"
 title="Le geste du chasen ne se délègue pas à une machine."
 lead="Pas de capsule, pas de bouton. Vous chauffez l'eau, vous ouvrez le sachet, vous fouettez. Trois minutes pendant lesquelles vous ne pensez à rien d'autre. C'est ce qui en fait un rituel."
 backgroundImage="/images/products/06-heritage-box-unboxing.png"
 backgroundAlt="Heritage Box ouverte en flat lay avec bol matcha, ritual card et accessoires"
 />

 <section className="bg-cream pb-12">
 <div className="container-wide">
 <Reveal stagger className="grid gap-12 md:gap-16">
 {steps.map((step, i) => (
 <article
 key={step.num}
 className={`grid md:grid-cols-12 gap-8 md:gap-12 items-start ${
 i % 2 === 1 ? 'md:flex-row-reverse' : ''
 }`}
 >
 <div className="md:col-span-3 flex md:flex-col md:items-end gap-6 md:gap-3">
 <span className="font-mono text-xs text-clay tracking-[0.2em]">{step.num}</span>
 <div className="text-right">
 <p className="font-display italic text-7xl md:text-8xl text-matcha-deep leading-none">
 {step.kanji}
 </p>
 <p className="mt-2 text-xs uppercase tracking-[0.25em] text-clay">
 {step.romaji}
 </p>
 </div>
 </div>
 <div className="md:col-span-9 md:pt-4">
 <h2 className="font-display italic text-3xl md:text-4xl text-matcha-deep leading-tight">
 {step.title}
 </h2>
 <Divider variant="gold" className="mt-6" />
 <p className="mt-6 text-lg text-ink-soft leading-relaxed max-w-2xl">
 {step.text}
 </p>
 </div>
 </article>
 ))}
 </Reveal>
 </div>
 </section>

 <section className="bg-matcha-deep text-cream py-24 md:py-32">
 <div className="container-wide">
 <Reveal>
 <Eyebrow className="text-clay">Inspirations</Eyebrow>
 <h2 className="mt-4 font-display italic text-[clamp(2rem,4vw,3.75rem)] leading-[1.1] text-cream max-w-3xl">
 Les concepts japonais qui ont façonné notre rituel.
 </h2>
 </Reveal>

 <Reveal stagger className="mt-16 grid md:grid-cols-3 gap-8 md:gap-12">
 {quotes.map((q) => (
 <div key={q.romaji} className="text-center">
 <p className="font-display italic text-7xl text-clay leading-none">{q.text}</p>
 <p className="mt-4 text-xs uppercase tracking-[0.25em] text-cream/65">
 {q.romaji}
 </p>
 <p className="mt-3 text-cream/80 italic">« {q.meaning} »</p>
 </div>
 ))}
 </Reveal>
 </div>
 </section>

 <section className="bg-cream py-24 md:py-32">
 <Reveal className="container-narrow">
 <Eyebrow>Le rituel en 90 secondes</Eyebrow>
 <h2 className="mt-4 font-display italic text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-matcha-deep">
 Une vidéo. Aucun commentaire.
 </h2>
 <div className="mt-10 aspect-video bg-cream-dark/60 flex items-center justify-center border border-cream-dark">
 <div className="text-center">
 <div className="w-16 h-16 mx-auto rounded-full bg-matcha-deep flex items-center justify-center">
 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5F1E8" strokeWidth="2">
 <polygon points="6 4 20 12 6 20" />
 </svg>
 </div>
 <p className="mt-4 text-xs uppercase tracking-[0.18em] text-ink-muted">
 Vidéo · 90 secondes
 </p>
 </div>
 </div>
 </Reveal>
 </section>

 <section className="bg-clay py-24 md:py-32">
 <Reveal className="container-narrow text-center">
 <h2 className="font-display italic text-[clamp(2.25rem,5vw,4rem)] leading-[1.1] text-matcha-deep">
 Le rituel commence par<br />une boîte qui dure.
 </h2>
 <Button href="/produit/heritage-box" variant="secondary" size="lg" className="mt-10">
 Découvrir Heritage Box
 </Button>
 </Reveal>
 </section>
 </>
 );
}
