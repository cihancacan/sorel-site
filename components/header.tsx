'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { brand } from '@/data/brand';

interface HeaderProps {
  locale: 'fr' | 'en';
  t: {
    home: string;
    signature: string;
    realisations: string;
    films: string;
    faq: string;
    contact: string;
    reserver: string;
  };
}

const navLinks = {
  fr: [
    { href: '/fr/signature-sorel', label: 'Signature' },
    { href: '/fr/realisations', label: 'Realisations' },
    { href: '/fr/films', label: 'Films' },
    { href: '/fr/studio-production', label: 'Studio & Production' },
    { href: '/fr/faq', label: 'FAQ' },
    { href: '/fr/contact', label: 'Contact' },
  ],
  en: [
    { href: '/en/sorel-signature', label: 'Signature' },
    { href: '/en/work', label: 'Work' },
    { href: '/en/films', label: 'Films' },
    { href: '/en/studio-production', label: 'Studio & Production' },
    { href: '/en/faq', label: 'FAQ' },
    { href: '/en/contact', label: 'Contact' },
  ],
};

export default function Header({ locale }: HeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const links = navLinks[locale];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const otherLocale = locale === 'fr' ? 'en' : 'fr';
  const switchPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-sorel-cream/95 backdrop-blur-md ${
          scrolled ? 'shadow-[0_1px_0_rgba(0,0,0,0.04)]' : ''
        }`}
      >
        <div className="sorel-container px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-20">
            <Link href={`/${locale}`} className="group flex items-center gap-3">
              <span className="font-display text-xl font-light tracking-[0.2em] text-sorel-black uppercase">
                {brand.name}
              </span>
              <span className="hidden sm:inline-block w-px h-4 bg-sorel-black/15" />
              <span className="hidden sm:inline-block sorel-label text-sorel-silver/50">
                Photo & Film
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-10">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[10px] font-medium tracking-[0.2em] uppercase transition-all duration-300 relative ${
                    pathname === link.href
                      ? 'text-sorel-black'
                      : 'text-sorel-silver hover:text-sorel-black'
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-sorel-champagne" />
                  )}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-5">
              <Link
                href={switchPath}
                className="text-[10px] font-medium tracking-[0.2em] uppercase text-sorel-silver hover:text-sorel-black transition-colors w-6 text-center"
              >
                {otherLocale.toUpperCase()}
              </Link>
              <Link
                href={locale === 'fr' ? '/fr/reserver' : '/en/book'}
                className="sorel-btn-primary text-[10px] py-3 px-6"
              >
                {locale === 'fr' ? 'Reserver' : 'Book'}
              </Link>
            </div>

            <button
              className="lg:hidden p-2 -mr-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X size={22} className="text-sorel-black" />
              ) : (
                <Menu size={22} className="text-sorel-black" />
              )}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-sorel-cream flex flex-col">
          <div className="h-20" />
          <div className="flex-1 flex flex-col justify-center px-8 pb-20">
            <nav className="space-y-1">
              {links.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center justify-between py-4 border-b border-sorel-black/5"
                >
                  <div className="flex items-center gap-6">
                    <span className="sorel-label text-sorel-champagne">0{i + 1}</span>
                    <span className="font-display text-3xl font-light text-sorel-black">
                      {link.label}
                    </span>
                  </div>
                  <ArrowRight size={18} className="text-sorel-silver/30 group-hover:text-sorel-black group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </nav>
            <div className="mt-12 flex items-center gap-6">
              <Link
                href={locale === 'fr' ? '/fr/reserver' : '/en/book'}
                onClick={() => setMenuOpen(false)}
                className="sorel-btn-primary"
              >
                {locale === 'fr' ? 'Reserver' : 'Book'}
                <ArrowRight size={14} />
              </Link>
              <Link
                href={switchPath}
                onClick={() => setMenuOpen(false)}
                className="sorel-label text-sorel-silver hover:text-sorel-black transition-colors"
              >
                {otherLocale.toUpperCase()}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
