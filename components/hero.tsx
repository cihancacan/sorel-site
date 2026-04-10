import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  locale: 'fr' | 'en';
  baseline: string;
  sub: string;
  ctaWork: string;
  ctaBook: string;
}

export default function Hero({ locale, baseline, sub, ctaWork, ctaBook }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-sorel-black">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sorel-black/95 via-sorel-black/70 to-sorel-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-sorel-black/90 via-sorel-black/20 to-sorel-black/30" />
      </div>

      <div className="relative z-10 sorel-container px-6 md:px-12 lg:px-20 pt-32 pb-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-sorel-champagne/50" />
            <p className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-sorel-champagne">Photo & Film</p>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-sorel-cream leading-[1.02] mb-8" style={{ letterSpacing: '-0.03em' }}>
            {baseline}
          </h1>

          <p className="text-sm md:text-base text-sorel-cream/80 font-light leading-[1.8] max-w-lg mb-14">
            {sub}
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href={`/${locale}/${locale === 'fr' ? 'realisations' : 'work'}`}
              className="inline-flex items-center gap-3 border border-sorel-cream/40 text-sorel-cream text-[11px] font-medium tracking-[0.15em] uppercase px-8 py-4 transition-all duration-500 hover:bg-sorel-cream hover:text-sorel-black"
            >
              {ctaWork}
              <ArrowRight size={14} />
            </Link>
            <Link
              href={`/${locale}/${locale === 'fr' ? 'reserver' : 'book'}`}
              className="inline-flex items-center gap-3 bg-sorel-cream text-sorel-black text-[11px] font-medium tracking-[0.15em] uppercase px-8 py-4 transition-all duration-500 hover:bg-sorel-champagne"
            >
              {ctaBook}
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sorel-cream to-transparent" />
    </section>
  );
}
