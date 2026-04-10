import Link from 'next/link';
import { brand } from '@/data/brand';
import { servicesFr } from '@/data/services.fr';
import { servicesEn } from '@/data/services.en';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

interface FooterProps {
  locale: 'fr' | 'en';
}

export default function Footer({ locale }: FooterProps) {
  const services = locale === 'fr' ? servicesFr.slice(0, 6) : servicesEn.slice(0, 6);
  const year = new Date().getFullYear();

  const socials = [
    { label: 'Instagram', href: brand.instagram },
    { label: 'TikTok', href: brand.tiktok },
    { label: 'Facebook', href: brand.facebook },
    { label: 'Pinterest', href: brand.pinterest },
    { label: 'LinkedIn', href: brand.linkedin },
  ];

  return (
    <footer className="bg-sorel-black text-sorel-cream">
      <div className="sorel-container px-6 md:px-12 lg:px-20 pt-24 md:pt-32 pb-12">
        <div className="mb-20">
          <p className="font-display text-5xl md:text-7xl font-light tracking-tight leading-none mb-6">
            {brand.name}
          </p>
          <p className="text-sm text-sorel-cream/70 font-light max-w-sm leading-relaxed">
            {locale === 'fr' ? brand.baselineFr : brand.baselineEn}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20 border-t border-sorel-white/10 pt-16">
          <div>
            <p className="sorel-label text-sorel-cream/60 mb-8">Services</p>
            <div className="flex flex-col gap-4">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${locale}/${s.slug}`}
                  className="text-sm text-sorel-cream/70 hover:text-sorel-white transition-colors font-light"
                >
                  {s.shortTitle}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="sorel-label text-sorel-cream/60 mb-8">Navigation</p>
            <div className="flex flex-col gap-4">
              <Link href={`/${locale}/${locale === 'fr' ? 'signature-sorel' : 'sorel-signature'}`} className="text-sm text-sorel-cream/70 hover:text-sorel-white transition-colors font-light">
                {locale === 'fr' ? 'Signature SOREL' : 'SOREL Signature'}
              </Link>
              <Link href={`/${locale}/${locale === 'fr' ? 'realisations' : 'work'}`} className="text-sm text-sorel-cream/70 hover:text-sorel-white transition-colors font-light">
                {locale === 'fr' ? 'Realisations' : 'Work'}
              </Link>
              <Link href={`/${locale}/films`} className="text-sm text-sorel-cream/70 hover:text-sorel-white transition-colors font-light">
                Films
              </Link>
              <Link href={`/${locale}/faq`} className="text-sm text-sorel-cream/70 hover:text-sorel-white transition-colors font-light">
                FAQ
              </Link>
              <Link href={`/${locale}/contact`} className="text-sm text-sorel-cream/70 hover:text-sorel-white transition-colors font-light">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <p className="sorel-label text-sorel-cream/60 mb-8">Contact</p>
            <div className="flex flex-col gap-4">
              <a href={`mailto:${brand.email}`} className="text-sm text-sorel-cream/70 hover:text-sorel-white transition-colors font-light">
                {brand.email}
              </a>
              <a href={`tel:${brand.phoneRaw}`} className="text-sm text-sorel-cream/70 hover:text-sorel-white transition-colors font-light">
                {brand.phone}
              </a>
              <a
                href={`https://wa.me/${brand.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-sorel-cream/70 hover:text-sorel-white transition-colors font-light inline-flex items-center gap-2"
              >
                <MessageCircle size={12} />
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <p className="sorel-label text-sorel-cream/60 mb-8">{locale === 'fr' ? 'Suivez-nous' : 'Follow us'}</p>
            <div className="flex flex-col gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-sorel-cream/70 hover:text-sorel-white transition-colors font-light inline-flex items-center gap-2"
                >
                  {s.label}
                  <ArrowUpRight size={12} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="sorel-label text-sorel-cream/60 mb-8">{locale === 'fr' ? 'Legal' : 'Legal'}</p>
            <div className="flex flex-col gap-4">
              <Link href={`/${locale}/mentions-legales`} className="text-sm text-sorel-cream/70 hover:text-sorel-white transition-colors font-light">
                {locale === 'fr' ? 'Mentions legales' : 'Legal Notice'}
              </Link>
              <Link href={`/${locale}/cgu`} className="text-sm text-sorel-cream/70 hover:text-sorel-white transition-colors font-light">
                {locale === 'fr' ? 'CGU' : 'Terms of Use'}
              </Link>
              <Link href={`/${locale}/cgv`} className="text-sm text-sorel-cream/70 hover:text-sorel-white transition-colors font-light">
                {locale === 'fr' ? 'CGV' : 'Terms of Sale'}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-sorel-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-sorel-cream/50 tracking-widest uppercase">
            &copy; {year} {brand.name}. {locale === 'fr' ? 'Tous droits reserves.' : 'All rights reserved.'}
          </p>
          <p className="text-[10px] text-sorel-cream/40 tracking-widest uppercase">
            Panorama Grup
          </p>
        </div>
      </div>
    </footer>
  );
}
