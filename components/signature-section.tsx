import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface SignatureSectionProps {
  locale: 'fr' | 'en';
  title: string;
  subtitle: string;
  p1: string;
  p2: string;
  p3: string;
  learnMore: string;
}

export default function SignatureSection({ locale, title, subtitle, p1, p2, p3, learnMore }: SignatureSectionProps) {
  return (
    <section className="sorel-section bg-sorel-cream overflow-hidden">
      <div className="sorel-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="SOREL signature"
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-[1.03]"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border border-sorel-champagne/20 hidden md:block" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="sorel-divider" />
              <p className="sorel-label">La Maison</p>
            </div>
            <h2 className="sorel-heading text-4xl md:text-5xl mb-5">{title}</h2>
            <p className="font-display text-lg text-sorel-silver italic mb-10">
              {subtitle}
            </p>
            <div className="space-y-5 mb-12">
              <p className="text-sm text-sorel-graphite font-light leading-[1.9]">{p1}</p>
              <p className="text-sm text-sorel-graphite font-light leading-[1.9]">{p2}</p>
              <p className="text-sm text-sorel-graphite font-light leading-[1.9]">{p3}</p>
            </div>
            <Link
              href={`/${locale}/${locale === 'fr' ? 'signature-sorel' : 'sorel-signature'}`}
              className="sorel-btn-outline"
            >
              {learnMore}
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
