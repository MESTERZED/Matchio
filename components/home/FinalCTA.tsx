import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/animations/Reveal';

export function FinalCTA() {
  return (
    <section className="bg-clay py-24 md:py-32">
      <Reveal className="container-narrow text-center">
        <h2 className="font-display italic text-[clamp(2.25rem,5vw,4rem)] leading-[1.1] text-matcha-deep">
          Une tasse.<br />
          Trois heures claires.<br />
          Zéro déchet.
        </h2>
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <Button href="/boutique" variant="secondary" size="lg">
            Commencer mon rituel
          </Button>
          <Button href="/refill" variant="ghostDark" size="lg">
            Découvrir Refill
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
