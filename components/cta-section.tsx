import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { brand } from '@/data/brand';

interface CtaSectionProps {
  locale: 'fr' | 'en';
  title: string;
  subtitle: string;
  button: string;
  contact: string;
}

export default function CtaSection({ locale, title, subtitle, button, contact }: CtaSectionProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-sorel-black/80" />
      </div>
      <div className="sorel-container sorel-section relative z-10 text-center">
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="w-10 h-px bg-sorel-champagne/50" />
          <p className="sorel-label text-sorel-champagne">SOREL</p>
          <div className="w-10 h-px bg-sorel-champagne/50" />
        </div>
        <h2 className="font-display text-4xl md:text-6xl font-light text-sorel-cream leading-tight mb-6 max-w-2xl mx-auto" style={{ letterSpacing: '-0.02em' }}>
          {title}
        </h2>
        <p className="text-sm text-sorel-cream/70 font-light mb-10 max-w-sm mx-auto leading-relaxed">
          {subtitle}
        </p>
        <div className="flex items-center justify-center gap-4 mb-14">
          <a href={`tel:${brand.phoneRaw}`} className="inline-flex items-center gap-2 text-sorel-champagne hover:text-sorel-cream transition-colors">
            <Phone size={14} />
            <span className="text-sm font-light">{brand.phone}</span>
          </a>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href={`/${locale}/${locale === 'fr' ? 'reserver' : 'book'}`}
            className="bg-sorel-cream text-sorel-black text-[11px] font-medium tracking-[0.15em] uppercase px-10 py-4 inline-flex items-center gap-3 transition-all duration-500 hover:bg-sorel-champagne"
          >
            {button}
            <ArrowRight size={14} />
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="text-[11px] font-medium tracking-[0.15em] uppercase text-sorel-cream/70 hover:text-sorel-white transition-colors inline-flex items-center gap-2"
          >
            {contact}
            <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
}
