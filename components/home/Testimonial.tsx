import { Reveal } from '@/components/animations/Reveal';
import { Divider } from '@/components/ui/Divider';

export function Testimonial() {
 return (
 <section className="bg-cream py-24 md:py-32">
 <Reveal className="container-narrow text-center">
 <Divider variant="gold" width="md" className="mx-auto" />
 <blockquote className="mt-10">
 <p className="font-display italic text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.2] text-matcha-deep text-balance">
 « Je n&apos;avais pas réalisé à quel point le café perturbait ma matinée. Avec
 Matchio, je rentre dans le travail directement, sans cette anxiété de fond. »
 </p>
 <footer className="mt-10 flex flex-col items-center gap-1">
 <cite className="not-italic text-sm font-medium text-ink"> Léa M.</cite>
 <span className="text-xs uppercase tracking-[0.18em] text-ink-muted">
 Consultante stratégie · Paris
 </span>
 </footer>
 </blockquote>
 </Reveal>
 </section>
 );
}
