import Link from 'next/link';
import { LeafLogo } from '@/components/ui/LeafLogo';
import { CountUp } from '@/components/animations/CountUp';
import { ecoStats } from '@/lib/data/eco-stats';

const columns = [
 {
 title: 'Boutique',
 links: [
 { label: 'Capsules', href: '/boutique?cat=capsules' },
 { label: 'Refill', href: '/refill' },
 { label: 'Accessoires', href: '/boutique?cat=accessoires' },
 { label: 'Garden', href: '/produit/matchio-garden' },
 { label: 'Tout voir', href: '/boutique' },
 ],
 },
 {
 title: 'Marque',
 links: [
 { label: 'Notre histoire', href: '/histoire' },
 { label: 'Engagement', href: '/engagement' },
 { label: 'Bienfaits', href: '/bienfaits' },
 { label: 'Rituel', href: '/rituel' },
 { label: 'Journal', href: '/journal' },
 ],
 },
 {
 title: 'Aide',
 links: [
 { label: 'FAQ', href: '/contact#faq' },
 { label: 'Livraison', href: '/contact#livraison' },
 { label: 'Retours', href: '/contact#retours' },
 { label: 'Programme consigne', href: '/refill#consigne' },
 { label: 'Contact', href: '/contact' },
 ],
 },
];

export function Footer() {
 return (
 <footer className="bg-matcha-deep text-cream">
 <div className="container-wide py-20 md:py-24">
 <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
 <div className="lg:col-span-5">
 <LeafLogo color="cream" variant="horizontal" />
 <p className="mt-6 max-w-sm text-cream/80 text-[0.95rem] leading-relaxed">
 L&apos;excellence du matcha japonais, repensée pour les esprits qui veulent penser
 mieux, sans coûter à la planète.
 </p>
 </div>

 {columns.map((col) => (
 <div key={col.title} className="lg:col-span-2">
 <h4 className="font-sans text-eyebrow font-semibold uppercase tracking-[0.2em] text-clay not-italic">
 {col.title}
 </h4>
 <ul className="mt-5 space-y-3">
 {col.links.map((link) => (
 <li key={link.href}>
 <Link
 href={link.href}
 className="text-sm text-cream/85 hover:text-cream transition-colors"
 >
 {link.label}
 </Link>
 </li>
 ))}
 </ul>
 </div>
 ))}

 <div className="lg:col-span-3">
 <h4 className="font-sans text-eyebrow font-semibold uppercase tracking-[0.2em] text-clay not-italic">
 Newsletter
 </h4>
 <p className="mt-5 text-sm text-cream/80 leading-relaxed">
 Recevez le rituel : nos articles, nouveautés et offres mensuelles.
 </p>
 <form className="mt-5 flex border border-cream/30">
 <input
 type="email"
 required
 placeholder="votre email"
 aria-label="Email pour la newsletter"
 className="flex-1 bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream/50 focus:outline-none"
 />
 <button
 type="submit"
 className="px-5 bg-clay text-ink text-sm font-medium hover:bg-cream transition-colors"
 >
 S&apos;inscrire
 </button>
 </form>
 </div>
 </div>

 <div className="mt-16 pt-10 border-t border-cream/15 grid md:grid-cols-3 gap-6 text-center md:text-left">
 <div>
 <p className="font-mono text-3xl text-clay">
 <CountUp end={ecoStats.treesPlantedToDate} />
 </p>
 <p className="mt-1 text-xs uppercase tracking-[0.18em] text-cream/65">
 arbres plantés
 </p>
 </div>
 <div>
 <p className="font-mono text-3xl text-clay">
 <CountUp end={ecoStats.heritageBoxesInCirculation} />
 </p>
 <p className="mt-1 text-xs uppercase tracking-[0.18em] text-cream/65">
 boîtes Heritage en consigne
 </p>
 </div>
 <div>
 <p className="font-mono text-3xl text-clay">
 <CountUp end={ecoStats.plasticAvoidedKg} suffix=" kg" />
 </p>
 <p className="mt-1 text-xs uppercase tracking-[0.18em] text-cream/65">
 plastique évité
 </p>
 </div>
 </div>

 <div className="mt-16 pt-8 border-t border-cream/15 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center text-xs text-cream/55">
 <p>© 2026 Matchio · Paris</p>
 <div className="flex gap-5">
 <Link href="/mentions-legales" className="hover:text-cream/80 transition-colors">
 Mentions légales
 </Link>
 <Link href="/cgv" className="hover:text-cream/80 transition-colors">
 CGV
 </Link>
 <Link href="/confidentialite" className="hover:text-cream/80 transition-colors">
 Confidentialité
 </Link>
 </div>
 <div className="flex gap-4">
 <a href="#" aria-label="Instagram" className="hover:text-cream/80 transition-colors">IG</a>
 <a href="#" aria-label="TikTok" className="hover:text-cream/80 transition-colors">TT</a>
 <a href="#" aria-label="LinkedIn" className="hover:text-cream/80 transition-colors">LI</a>
 </div>
 </div>
 </div>
 </footer>
 );
}
