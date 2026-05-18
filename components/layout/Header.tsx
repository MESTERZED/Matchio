'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { LeafLogo } from '@/components/ui/LeafLogo';
import { useCart } from '@/lib/store/cart';
import { cn } from '@/lib/utils';

const navLinks = [
 { href: '/boutique', label: 'Boutique' },
 { href: '/refill', label: 'Refill' },
 { href: '/bienfaits', label: 'Bienfaits' },
 { href: '/rituel', label: 'Rituel' },
 { href: '/engagement', label: 'Engagement' },
 { href: '/journal', label: 'Journal' },
 { href: '/histoire', label: 'Histoire' },
];

export function Header() {
 const pathname = usePathname();
 const [scrolled, setScrolled] = useState(false);
 const [mobileOpen, setMobileOpen] = useState(false);
 const cartCount = useCart((s) => s.count());
 const openCart = useCart((s) => s.open);

 useEffect(() => {
 const onScroll = () => setScrolled(window.scrollY > 24);
 onScroll();
 window.addEventListener('scroll', onScroll, { passive: true });
 return () => window.removeEventListener('scroll', onScroll);
 }, []);

 useEffect(() => {
 setMobileOpen(false);
 }, [pathname]);

 useEffect(() => {
 document.body.style.overflow = mobileOpen ? 'hidden' : '';
 }, [mobileOpen]);

 const onDarkPage = pathname === '/' || pathname === '/refill' || pathname === '/engagement';
 const baseColor = onDarkPage && !scrolled ? 'cream' : 'matcha';

 return (
 <>
 <a
 href="#main"
 className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-matcha-deep focus:text-cream focus:px-4 focus:py-2"
 >
 Aller au contenu principal
 </a>

 <header
 className={cn(
 'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-expo-out',
 scrolled
 ? 'bg-cream/90 backdrop-blur-md border-b border-cream-dark/60'
 : 'bg-transparent',
 )}
 >
 <div className="container-wide flex items-center justify-between h-18 md:h-20">
 <Link href="/" aria-label="Matchio, accueil" className="flex items-center">
 <LeafLogo color={baseColor as 'cream' | 'matcha'} variant="horizontal" />
 </Link>

 <nav className="hidden lg:flex items-center gap-7">
 {navLinks.map((link) => {
 const active = pathname.startsWith(link.href);
 return (
 <Link
 key={link.href}
 href={link.href}
 className={cn(
 'relative text-sm font-medium tracking-wide transition-colors duration-300',
 onDarkPage && !scrolled ? 'text-cream/85 hover:text-cream' : 'text-ink hover:text-matcha-deep',
 active && (onDarkPage && !scrolled ? 'text-cream' : 'text-matcha-deep'),
 )}
 >
 {link.label}
 {active && (
 <span
 className={cn(
 'absolute -bottom-1.5 left-0 right-0 h-px',
 onDarkPage && !scrolled ? 'bg-clay' : 'bg-matcha-deep',
 )}
 />
 )}
 </Link>
 );
 })}
 </nav>

 <div className="flex items-center gap-3 md:gap-5">
 <button
 aria-label="Rechercher"
 className={cn(
 'hidden md:inline-flex p-2 transition-colors',
 onDarkPage && !scrolled ? 'text-cream/85 hover:text-cream' : 'text-ink hover:text-matcha-deep',
 )}
 >
 <Search size={18} />
 </button>

 <button
 onClick={openCart}
 aria-label={`Ouvrir le panier (${cartCount} articles)`}
 className={cn(
 'relative p-2 transition-colors',
 onDarkPage && !scrolled ? 'text-cream/85 hover:text-cream' : 'text-ink hover:text-matcha-deep',
 )}
 >
 <ShoppingBag size={18} />
 {cartCount > 0 && (
 <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center w-4 h-4 text-[10px] font-mono font-semibold bg-clay text-ink rounded-full">
 {cartCount}
 </span>
 )}
 </button>

 <button
 onClick={() => setMobileOpen((s) => !s)}
 aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
 className={cn(
 'lg:hidden p-2 transition-colors',
 onDarkPage && !scrolled ? 'text-cream/85 hover:text-cream' : 'text-ink hover:text-matcha-deep',
 )}
 >
 {mobileOpen ? <X size={20} /> : <Menu size={20} />}
 </button>
 </div>
 </div>

 {mobileOpen && (
 <div className="lg:hidden fixed inset-0 top-20 bg-cream z-40 overflow-y-auto">
 <div className="container-wide py-10">
 <nav className="flex flex-col gap-1">
 {navLinks.map((link) => (
 <Link
 key={link.href}
 href={link.href}
 className="font-display italic text-3xl text-matcha-deep py-4 border-b border-cream-dark"
 >
 {link.label}
 </Link>
 ))}
 </nav>
 <div className="mt-10 flex flex-col gap-4 text-sm text-ink-soft">
 <Link href="/contact" className="link-underline w-fit">Contact</Link>
 <Link href="/journal" className="link-underline w-fit">Journal</Link>
 </div>
 </div>
 </div>
 )}
 </header>
 </>
 );
}
