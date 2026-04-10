import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { City } from '@/data/cities';

interface CityServiceHeroProps {
  locale: 'fr' | 'en';
  serviceTitle: string;
  serviceHeroLine: string;
  city: City;
}

export default function CityServiceHero({ locale, serviceTitle, serviceHeroLine, city }: CityServiceHeroProps) {
  return (
    <section className="relative min-h-[75vh] flex items-end pb-20 overflow-hidden bg-sorel-black">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sorel-black via-sorel-black/50 to-transparent" />
      </div>

      <div className="relative z-10 sorel-container px-6 md:px-12 lg:px-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-px bg-sorel-champagne/60" />
          <p className="sorel-label text-sorel-champagne">{city.name} &middot; {locale === 'fr' ? 'France' : city.country}</p>
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-light text-sorel-cream leading-tight mb-6 max-w-3xl" style={{ letterSpacing: '-0.02em' }}>
          {serviceTitle}<br />
          <span className="text-sorel-champagne">{city.name}</span>
        </h1>
        <p className="font-display text-lg text-sorel-cream/70 italic max-w-lg mb-12">
          {serviceHeroLine}
        </p>
        <Link
          href={`/${locale}/${locale === 'fr' ? 'reserver' : 'book'}`}
          className="bg-sorel-cream text-sorel-black text-[11px] font-medium tracking-[0.15em] uppercase px-8 py-4 inline-flex items-center gap-3 transition-all duration-500 hover:bg-sorel-champagne"
        >
          {locale === 'fr' ? 'Reserver votre date' : 'Book your date'}
          <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
