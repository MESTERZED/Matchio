'use client';

import { useState, Suspense } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Box, ImageIcon } from 'lucide-react';
import type { Product } from '@/lib/data/products';
import { cn } from '@/lib/utils';

const Scene = dynamic(() => import('@/components/3d/Scene').then((m) => m.Scene), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center bg-cream-dark/30">
      <div className="text-xs uppercase tracking-[0.2em] text-ink-muted animate-pulse">
        Chargement 3D
      </div>
    </div>
  ),
});
const ProductBox = dynamic(() => import('@/components/3d/ProductBox').then((m) => m.ProductBox), {
  ssr: false,
});

// Mapping basé sur le contenu réel des photos.
// Capsules (sachets pivot) : 11 = DEEP-WORK noir, 12 = FOCUS vert, 13 = CALM-FOCUS clay
// Heritage : 03, 05, 06 · Refill : 07, 08 · Garden : 09, 10
const productPhotos: Record<string, string[]> = {
  focus: [
    '/images/products/12-focus-box-hero.png',
    '/images/products/02-garden-kit-alt.png',
  ],
  'deep-work': [
    '/images/products/11-deepwork-box-hero.png',
    '/images/products/02-garden-kit-alt.png',
  ],
  'calm-focus': [
    '/images/products/13-calmfocus-box-hero.png',
    '/images/products/02-garden-kit-alt.png',
  ],
  'heritage-box': [
    '/images/products/03-refill-pack-hero.png',
    '/images/products/06-heritage-box-unboxing.png',
    '/images/products/05-heritage-box-flatlay.png',
  ],
  'refill-pack': [
    '/images/products/07-capsule-isolated.png',
    '/images/products/08-heritage-box-3quarter.png',
  ],
  'ritual-set': [
    '/images/products/05-heritage-box-flatlay.png',
    '/images/products/06-heritage-box-unboxing.png',
  ],
  'matchio-garden': [
    '/images/products/09-focus-box-hero.png',
    '/images/products/10-focus-box-alt.png',
  ],
};

// Seules les capsules ont une vue 360°
const has3D = (slug: string) => ['focus', 'deep-work', 'calm-focus'].includes(slug);

interface ProductGallery3DProps {
  product: Product;
}

export function ProductGallery3D({ product }: ProductGallery3DProps) {
  const photos = productPhotos[product.id] ?? ['/images/products/12-focus-box-hero.png'];
  const [view, setView] = useState<'photos' | '3d'>('photos');
  const [activePhoto, setActivePhoto] = useState(0);
  const [showHint, setShowHint] = useState(true);

  return (
    <div className="lg:sticky lg:top-28">
      {/* Onglets Photos / Vue 360° (uniquement pour capsules) */}
      {has3D(product.slug) && (
        <div className="flex gap-6 mb-5 border-b border-cream-dark">
          <button
            onClick={() => setView('photos')}
            className={cn(
              'pb-3 text-xs uppercase tracking-[0.18em] transition-colors inline-flex items-center gap-2',
              view === 'photos'
                ? 'text-matcha-deep border-b-2 border-clay -mb-px'
                : 'text-ink-muted hover:text-matcha-deep',
            )}
            aria-pressed={view === 'photos'}
          >
            <ImageIcon size={13} />
            Photos
          </button>
          <button
            onClick={() => setView('3d')}
            className={cn(
              'pb-3 text-xs uppercase tracking-[0.18em] transition-colors inline-flex items-center gap-2',
              view === '3d'
                ? 'text-matcha-deep border-b-2 border-clay -mb-px'
                : 'text-ink-muted hover:text-matcha-deep',
            )}
            aria-pressed={view === '3d'}
          >
            <Box size={13} />
            Vue 360°
          </button>
        </div>
      )}

      {/* Vue principale */}
      <div
        className="relative aspect-square w-full overflow-hidden bg-cream-dark/20"
        onPointerDown={() => setShowHint(false)}
      >
        {view === '3d' && has3D(product.slug) ? (
          <Suspense
            fallback={
              <Image
                src={photos[0] ?? '/images/products/09-focus-box-hero.png'}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            }
          >
            <Scene cameraPosition={[0, 0.4, 2.6]} fov={32} interactive autoRotate>
              <ProductBox
                boxColor={product.colors.box}
                sleeveColor={product.colors.sleeve}
                foilColor={product.colors.foil}
                name={product.name}
                rotationSpeed={0}
                float={false}
              />
            </Scene>
            {showHint && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-cream/90 text-xs uppercase tracking-[0.18em] text-matcha-deep pointer-events-none animate-pulse">
                ✋ Faites tourner pour inspecter
              </div>
            )}
          </Suspense>
        ) : (
          <Image
            src={photos[activePhoto] ?? photos[0] ?? '/images/products/12-focus-box-hero.png'}
            alt={`${product.name} · ${product.tagline}`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-opacity duration-500"
          />
        )}
      </div>

      {/* Thumbnails (uniquement si photos multiples et vue photos active) */}
      {photos.length > 1 && view === 'photos' && (
        <div className="mt-4 flex gap-3">
          {photos.map((src, i) => (
            <button
              key={i}
              onClick={() => setActivePhoto(i)}
              aria-label={`Photo ${i + 1}`}
              className={cn(
                'relative w-20 h-20 overflow-hidden bg-cream-dark/20 transition-all',
                activePhoto === i
                  ? 'ring-2 ring-matcha-deep ring-offset-2 ring-offset-cream'
                  : 'opacity-60 hover:opacity-100',
              )}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
