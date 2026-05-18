const items = [
  '12 g CO₂eq par tasse · vs 87 g pour un café',
  '100 % compostable · sans aluminium',
  'Programme consigne Heritage · 10 € de crédit',
  'Matcha cérémonial Uji · 137× les antioxydants du thé vert',
  'Recharge mensuelle Refill Pack · −19 % vs capsule',
];

export function EcoBanner() {
  return (
    <section
      aria-label="Preuves éco-responsabilité"
      className="bg-cream-dark py-3 overflow-hidden border-y border-cream-dark/60"
    >
      <div className="ticker">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-sans text-xs uppercase tracking-[0.2em] text-ink/55 px-8 whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
