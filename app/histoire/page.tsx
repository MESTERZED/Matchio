import { PageHeader } from '@/components/ui/PageHeader';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/animations/Reveal';
import { Divider } from '@/components/ui/Divider';
import { Button } from '@/components/ui/Button';

export const metadata = {
 title: 'Notre histoire, De Kyoto à Paris',
 description: 'Trois ans de gestation, un voyage à Uji, une rencontre avec Hiroshi Sato, une encapsuleuse à Brest. Le récit fondateur de Matchio.',
};

const timeline = [
 {
 year: '2023',
 title: 'L\'idée',
 text: 'Émilie travaille douze heures par jour en cabinet de stratégie. Le café la maintient debout, mais l\'épuise plus qu\'il ne la nourrit. Premier voyage au Japon, révélation à Uji.',
 },
 {
 year: '2024',
 title: 'Le prototype',
 text: 'Léo rejoint le projet. Six mois à formuler avec un nutritionniste, à chercher la bonne forme de capsule, à rejeter trois fournisseurs trop opaques. Premier prototype en bambou rejeté pour bilan carbone décevant.',
 },
 {
 year: '2025',
 title: 'Le seed',
 text: 'Levée de 480 K€ auprès de business angels exigeant la transparence radicale. Signature avec la plantation Mizuba. Premier conteneur. Encapsulation à Brest, en France, certifiée bio.',
 },
 {
 year: '2026',
 title: 'Le lancement',
 text: 'Mise en ligne en mars. Système Refill lancé en avril. Programme consigne en mai. Première commande Heritage Box reçue : un développeur de Lyon, il l\'a depuis renvoyée pour rotation.',
 },
];

const promises = [
 {
 title: 'Transparence radicale',
 text: 'Tous nos chiffres publiés. Bilan carbone certifié à partir de Q4 2026. Méthodologie sur GitHub.',
 },
 {
 title: 'Producteur payé 28 % au-dessus du marché',
 text: 'Hiroshi Sato gagne plus à fournir Matchio qu\'à fournir ses meilleurs clients japonais.',
 },
 {
 title: 'Programme consigne véritable',
 text: 'Pas un récyclage, une consigne, la boîte revient, est nettoyée, repart. 10 € de crédit garantis.',
 },
 {
 title: 'Pas de claim non documenté',
 text: 'Chaque promesse renvoie à une étude. Aucun mot vague comme "boost" ou "wellness".',
 },
];

export default function HistoirePage() {
 return (
 <>
 <PageHeader
 eyebrow="Notre histoire"
 title="De Kyoto à Paris, en trois ans."
 lead="Pas de récit héroïque. Une marque commence par un problème personnel et un voyage qui change la perspective. Voici le nôtre."
 backgroundImage="/images/products/01-garden-kit-hero.png"
 backgroundAlt="Boîte FOCUS Matchio avec bol matcha, chasen et capsules, mise en scène éditoriale"
 />

 <section className="bg-cream pb-24">
 <div className="container-narrow space-y-8 body-text text-pretty">
 <Reveal>
 <p>
 Émilie Garnier, 31 ans, ancienne consultante senior chez Bain &amp; Company à
 Paris. Trois cafés filtre par matinée. Anxiété de fin de matinée, fatigue
 persistante. En janvier 2023, elle prend un mois sabbatique au Japon.
 </p>
 </Reveal>
 <Reveal delay={100}>
 <p>
 À Uji, elle visite la plantation Mizuba. Hiroshi Sato, troisième génération,
 lui montre comment le matcha se cultive sous bâche, se broie à la pierre, se
 boit en silence. Elle comprend que le rituel est aussi important que le produit.
 Que la lenteur du geste est précisément ce qui permet l&apos;accélération
 mentale qui suit.
 </p>
 </Reveal>
 <Reveal delay={200}>
 <p>
 De retour à Paris, elle cherche un matcha cérémonial pré-dosé et compostable,
 il n&apos;existe pas. Elle commence par le formuler elle-même, dans sa cuisine.
 Elle convainc Léo Bénichou, ingénieur packaging, de la rejoindre. Ils
 s&apos;associent en septembre 2024.
 </p>
 </Reveal>
 <Reveal delay={300}>
 <p>
 Très vite, deux principes émergent : pas de packaging plastique, et
 transparence sur tout ce qui peut l&apos;être. Le projet s&apos;appelle
 Matchio, la contraction d&apos;un mot japonais (matcha) et d&apos;un suffixe
 latin (-io) qui désigne l&apos;action en cours. Le matcha en train de se faire.
 </p>
 </Reveal>
 </div>
 </section>

 <section className="bg-cream-dark/30 py-24 md:py-32">
 <div className="container-wide">
 <Reveal>
 <Eyebrow>La timeline</Eyebrow>
 <h2 className="mt-4 font-display italic text-[clamp(2rem,4vw,3.75rem)] leading-[1.1] text-matcha-deep max-w-3xl">
 Quatre ans, quatre étapes.
 </h2>
 </Reveal>

 <div className="mt-20 relative">
 <div className="absolute left-[5px] md:left-1/2 top-0 bottom-0 w-px bg-clay/40 -translate-x-1/2 md:translate-x-[-1px]" />
 <Reveal stagger className="space-y-16 md:space-y-24">
 {timeline.map((t, i) => (
 <article
 key={t.year}
 className={`relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-12 ${
 i % 2 === 0 ? '' : 'md:[&>*:first-child]:order-2'
 }`}
 >
 <div className="absolute left-0 md:left-1/2 top-2 w-2.5 h-2.5 bg-clay rounded-full -translate-x-[3px] md:-translate-x-1/2" />
 <div className={`md:text-right md:pr-12 ${i % 2 === 1 ? 'md:text-left md:pr-0 md:pl-12' : ''}`}>
 <span className="font-mono text-clay text-xs tracking-[0.2em]">
 ANNÉE
 </span>
 <p className="font-display italic text-6xl md:text-7xl text-matcha-deep leading-none mt-2">
 {t.year}
 </p>
 </div>
 <div className={`mt-4 md:mt-0 md:pl-12 ${i % 2 === 1 ? 'md:pl-0 md:pr-12 md:text-right' : ''}`}>
 <h3 className="font-display italic text-3xl text-matcha-deep">
 {t.title}
 </h3>
 <Divider variant="gold" className={`mt-4 ${i % 2 === 1 ? 'md:ml-auto' : ''}`} />
 <p className="mt-5 text-ink-soft leading-relaxed max-w-md">{t.text}</p>
 </div>
 </article>
 ))}
 </Reveal>
 </div>
 </div>
 </section>

 <section className="bg-cream py-24 md:py-32">
 <div className="container-wide">
 <Reveal>
 <Eyebrow>Nos quatre promesses concrètes</Eyebrow>
 <h2 className="mt-4 font-display italic text-[clamp(2rem,4vw,3.75rem)] leading-[1.1] text-matcha-deep max-w-3xl">
 Nous n&apos;avons pas inventé l&apos;éthique.<br />Nous l&apos;avons rendue lisible.
 </h2>
 </Reveal>

 <Reveal stagger className="mt-16 grid md:grid-cols-2 gap-6">
 {promises.map((p, i) => (
 <article
 key={i}
 className="p-8 md:p-10 bg-cream-dark/40 border border-cream-dark/60"
 >
 <p className="font-mono text-xs text-clay tracking-[0.2em]">
 PROMESSE {String(i + 1).padStart(2, '0')}
 </p>
 <h3 className="mt-3 font-display italic text-2xl md:text-3xl text-matcha-deep">
 {p.title}
 </h3>
 <p className="mt-5 text-ink-soft leading-relaxed">{p.text}</p>
 </article>
 ))}
 </Reveal>
 </div>
 </section>

 <section className="bg-matcha-deep text-cream py-24 md:py-32">
 <Reveal className="container-narrow text-center">
 <Eyebrow className="text-clay">L&apos;équipe</Eyebrow>
 <h2 className="mt-6 font-display italic text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-cream">
 Sept personnes,<br />deux ateliers, une plantation.
 </h2>
 <p className="mt-8 text-cream/80 max-w-xl mx-auto leading-relaxed">
 Émilie, Léo, et cinq personnes en formulation, packaging, opérations et
 relation client. Notre encapsuleuse est à Brest. Notre atelier de consigne à
 Aubervilliers. Notre matcha à Uji.
 </p>
 <div className="mt-12 flex flex-wrap gap-4 justify-center">
 <Button href="/engagement" variant="primary" size="lg">
 Voir notre engagement →
 </Button>
 <Button href="/contact" variant="ghost" size="lg">
 Nous contacter
 </Button>
 </div>
 </Reveal>
 </section>
 </>
 );
}
