'use client';

import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { ArrowRight, Camera, Check, Film, Gem } from 'lucide-react';
import { usePathname } from 'next/navigation';

type Offer = {
  label: string;
  title: string;
  price: string;
  text: string;
  items: string[];
  href: string;
  cta: string;
  icon: 'photo' | 'video' | 'both';
};

const offers: Record<string, Offer> = {
  '/fr/photographe-mariage': {
    label: 'Couverture ciblée',
    title: 'Cérémonie / Événement précis',
    price: '490 €',
    text: 'Une formule pensée pour immortaliser uniquement un moment essentiel : mairie, église, cérémonie civile, cérémonie religieuse ou temps fort précis.',
    items: ['1 photographe', 'Présence courte sur un moment clé', 'Photos retouchées livrées en HD'],
    href: '/fr/reserver?service=photographe-mariage&mediaType=photo&pack=ceremonie',
    cta: 'Réserver ce créneau',
    icon: 'photo',
  },
  '/fr/videaste-mariage': {
    label: 'Couverture ciblée',
    title: 'Cérémonie / Événement précis',
    price: '490 €',
    text: 'Une formule pensée pour filmer uniquement un moment essentiel : mairie, église, cérémonie civile, cérémonie religieuse, discours ou temps fort précis.',
    items: ['1 vidéaste', 'Présence courte sur un moment clé', 'Captation vidéo avec rendu soigné'],
    href: '/fr/reserver?service=videaste-mariage&mediaType=video&pack=ceremonie',
    cta: 'Réserver ce créneau',
    icon: 'video',
  },
  '/fr/photo-video-mariage': {
    label: 'Couverture ciblée',
    title: 'Cérémonie / Événement précis',
    price: '990 €',
    text: 'Photographe + vidéaste pour couvrir un moment essentiel avec une image cohérente, élégante et coordonnée.',
    items: ['1 photographe + 1 vidéaste', 'Présence courte sur un moment clé', 'Photo + vidéo avec direction visuelle commune'],
    href: '/fr/reserver?service=photo-video-mariage&mediaType=both&pack=ceremonie',
    cta: 'Réserver ce créneau',
    icon: 'both',
  },
  '/en/photographe-mariage': {
    label: 'Focused coverage',
    title: 'Ceremony / Key Moment',
    price: '€490',
    text: 'A package designed to preserve one essential moment only: town hall, church, civil ceremony, religious ceremony or a precise highlight.',
    items: ['1 photographer', 'Short coverage of one key moment', 'Edited photos delivered in HD'],
    href: '/en/book?service=photographe-mariage&mediaType=photo&pack=ceremony',
    cta: 'Book this slot',
    icon: 'photo',
  },
  '/en/videaste-mariage': {
    label: 'Focused coverage',
    title: 'Ceremony / Key Moment',
    price: '€490',
    text: 'A package designed to film one essential moment only: town hall, church, civil ceremony, religious ceremony, speech or a precise highlight.',
    items: ['1 videographer', 'Short coverage of one key moment', 'Video capture with a polished result'],
    href: '/en/book?service=videaste-mariage&mediaType=video&pack=ceremony',
    cta: 'Book this slot',
    icon: 'video',
  },
  '/en/photo-video-mariage': {
    label: 'Focused coverage',
    title: 'Ceremony / Key Moment',
    price: '€990',
    text: 'Photographer + videographer to cover one essential moment with coherent, elegant and coordinated imagery.',
    items: ['1 photographer + 1 videographer', 'Short coverage of one key moment', 'Photo + video with one visual direction'],
    href: '/en/book?service=photo-video-mariage&mediaType=both&pack=ceremony',
    cta: 'Book this slot',
    icon: 'both',
  },
};

function OfferIcon({ type }: { type: Offer['icon'] }) {
  if (type === 'photo') return <Camera size={18} className="text-sorel-champagne" />;
  if (type === 'video') return <Film size={18} className="text-sorel-champagne" />;
  return <Gem size={18} className="text-sorel-champagne" />;
}

function CeremonyOfferCard({ offer }: { offer: Offer }) {
  return (
    <div className="relative overflow-hidden border border-sorel-champagne/40 bg-sorel-black text-sorel-cream p-6 md:p-8 lg:p-10 shadow-[0_24px_90px_rgba(0,0,0,0.12)]">
      <div className="absolute inset-0 bg-gradient-to-r from-sorel-champagne/10 via-transparent to-transparent pointer-events-none" />
      <div className="relative grid grid-cols-1 lg:grid-cols-[0.95fr_1.35fr_0.7fr] gap-8 lg:gap-10 items-center">
        <div>
          <div className="w-11 h-11 rounded-full border border-sorel-champagne/30 flex items-center justify-center mb-6">
            <OfferIcon type={offer.icon} />
          </div>
          <p className="sorel-label text-sorel-champagne mb-4">{offer.label}</p>
          <h3 className="font-display text-3xl md:text-4xl font-light leading-tight">
            {offer.title}
          </h3>
        </div>

        <div>
          <p className="text-sm text-sorel-cream/78 font-light leading-[1.9] mb-6">
            {offer.text}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {offer.items.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Check size={15} className="text-sorel-champagne mt-0.5 flex-shrink-0" />
                <p className="text-xs text-sorel-cream/82 font-light leading-[1.7]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:text-right">
          <p className="font-display text-5xl md:text-6xl font-light text-sorel-champagne mb-6">
            {offer.price}
          </p>
          <Link
            href={offer.href}
            className="inline-flex items-center gap-3 bg-sorel-cream text-sorel-black text-[11px] font-medium tracking-[0.15em] uppercase px-7 py-4 transition-all duration-500 hover:bg-sorel-champagne"
          >
            {offer.cta}
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function CeremonyOfferInjector() {
  const pathname = usePathname();
  const normalizedPath = useMemo(() => pathname?.replace(/\/$/, '') || '', [pathname]);
  const offer = offers[normalizedPath];
  const [portalHost, setPortalHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!offer) {
      setPortalHost(null);
      return;
    }

    const target = document.querySelector('#collections .sorel-container');
    if (!(target instanceof HTMLElement)) return;

    document.getElementById('sorel-ceremony-offer')?.remove();

    const host = document.createElement('div');
    host.id = 'sorel-ceremony-offer';
    host.className = 'mb-12';

    const collectionGrid = Array.from(target.children).find(
      (child) => child instanceof HTMLElement && child.classList.contains('grid')
    );

    if (collectionGrid) {
      target.insertBefore(host, collectionGrid);
    } else {
      target.appendChild(host);
    }

    setPortalHost(host);

    return () => {
      host.remove();
      setPortalHost(null);
    };
  }, [offer, normalizedPath]);

  if (!offer || !portalHost) return null;

  return createPortal(<CeremonyOfferCard offer={offer} />, portalHost);
}
