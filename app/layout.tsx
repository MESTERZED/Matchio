import type { Metadata } from 'next';
import { Playfair_Display, Inter, JetBrains_Mono } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/layout/CartDrawer';
import { LenisProvider } from '@/components/providers/LenisProvider';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  style: ['italic', 'normal'],
  weight: ['400', '500'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://matchio.fr'),
  title: {
    default: 'Matchio · Le matcha qui pense avec vous',
    template: '%s · Matchio',
  },
  description:
    'Capsules de matcha cérémonial Uji + nootropiques. Trois heures de clarté, zéro déchet, un rituel. Système Heritage Box + Refill, fabriqué en France.',
  keywords: [
    'matcha',
    'capsules matcha',
    'nootropique',
    'L-théanine',
    'matcha bio',
    'matcha cérémonial',
    'éco-responsable',
  ],
  authors: [{ name: 'Matchio' }],
  openGraph: {
    title: 'Matchio · Le matcha qui pense avec vous',
    description: 'Trois heures de clarté. Zéro déchet. Un rituel.',
    url: 'https://matchio.fr',
    siteName: 'Matchio',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matchio',
    description: 'Trois heures de clarté. Zéro déchet. Un rituel.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${inter.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased bg-cream text-ink">
        <LenisProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <CartDrawer />
        </LenisProvider>
      </body>
    </html>
  );
}
