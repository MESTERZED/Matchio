import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Divider } from '@/components/ui/Divider';

export default function NotFound() {
 return (
 <section className="min-h-screen bg-matcha-deep text-cream flex items-center pt-32 pb-24">
 <div className="container-narrow text-center">
 <Eyebrow className="text-clay">Erreur 404</Eyebrow>
 <h1 className="mt-6 font-display italic text-[clamp(3rem,8vw,7rem)] leading-[0.95] text-cream">
 Page introuvable.
 </h1>
 <Divider variant="gold" className="mt-10 mx-auto" />
 <p className="mt-8 max-w-md mx-auto text-cream/80 leading-relaxed">
 Cette page n&apos;existe pas, ou plus. Le rituel continue ailleurs.
 </p>
 <div className="mt-12 flex flex-wrap gap-4 justify-center">
 <Button href="/" variant="primary" size="lg">
 Retour à l&apos;accueil
 </Button>
 <Button href="/boutique" variant="ghost" size="lg">
 Voir la boutique
 </Button>
 </div>
 </div>
 </section>
 );
}
