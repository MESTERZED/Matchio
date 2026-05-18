import { CountUp } from '@/components/animations/CountUp';
import { Reveal } from '@/components/animations/Reveal';

const stats = [
  { value: 137, suffix: '×', label: 'Antioxydants vs thé vert' },
  { value: 12, suffix: ' g', label: 'CO₂ par tasse · vs 87 g pour un café' },
  { value: 0, suffix: '', label: 'Aluminium · zéro plastique jetable' },
  { value: 100, suffix: ' %', label: 'Compostable · capsules + sachets kraft' },
];

export function StatsSection() {
  return (
    <section className="bg-cream border-y border-cream-dark py-20 md:py-24">
      <div className="container-wide">
        <Reveal stagger className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-x-12">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-start text-left lg:px-2">
              <p className="font-display italic text-[clamp(3rem,6vw,5rem)] leading-none text-matcha-deep">
                <CountUp end={stat.value} duration={1800} />
                {stat.suffix && <span className="text-clay">{stat.suffix}</span>}
              </p>
              <div className="mt-4 h-px w-10 bg-clay" />
              <p className="mt-4 text-sm text-ink-soft leading-relaxed max-w-[16rem]">
                {stat.label}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
