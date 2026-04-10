import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import CtaSection from '@/components/cta-section';
import { getMessages, createTranslator } from '@/lib/i18n';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

type Locale = 'fr' | 'en';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale as Locale;
  return buildMetadata({
    title: locale === 'fr' ? 'La Signature SOREL' : 'The SOREL Signature',
    description: locale === 'fr'
      ? 'D\u00E9couvrez la signature SOREL : une maison photo & film haut de gamme, une direction artistique unique, une exigence constante.'
      : 'Discover the SOREL signature: a high-end photo & film house, a unique artistic direction, a constant standard of excellence.',
    locale,
    path: locale === 'fr' ? '/fr/signature-sorel' : '/en/sorel-signature',
  });
}

const pillars = {
  fr: [
    { label: '01', title: 'Une Maison', body: 'SOREL n\'est pas un individu. C\'est une maison structur\u00E9e avec des valeurs, une direction artistique et des standards qui s\'appliquent \u00E0 chaque prestation.' },
    { label: '02', title: 'Une Signature Visuelle', body: 'Notre esth\u00E9tique est reconnaissable : lumi\u00E8re naturelle ma\u00EEtris\u00E9e, sobri\u00E9t\u00E9 chromatique, composition \u00E9ditoriale. La m\u00EAme signature, quel que soit le talent mobilis\u00E9.' },
    { label: '03', title: 'La Restitution de l\'Instant', body: 'Nous ne reconstituons pas les moments. Nous les capturons tels qu\'ils ont \u00E9t\u00E9 v\u00E9cus. Chaque image est une m\u00E9moire vivante, fid\u00E8le \u00E0 la sensation originale.' },
    { label: '04', title: '\u00C9l\u00E9gance & Pr\u00E9cision', body: 'Chaque d\u00E9cision artistique est intentionnelle. Cadrage, lumi\u00E8re, timing, post-traitement \u2014 tout est pens\u00E9 pour atteindre l\'excellence.' },
  ],
  en: [
    { label: '01', title: 'A House', body: 'SOREL is not an individual. It is a structured house with values, an artistic direction, and standards that apply to every engagement.' },
    { label: '02', title: 'A Visual Signature', body: 'Our aesthetic is recognizable: mastered natural light, chromatic restraint, editorial composition. The same signature, regardless of which talent is assigned.' },
    { label: '03', title: 'Recreating the Lived Moment', body: 'We do not reconstruct moments. We capture them as they were truly lived. Every image is a living memory, faithful to the original sensation.' },
    { label: '04', title: 'Elegance & Precision', body: 'Every artistic decision is intentional. Framing, light, timing, post-processing \u2014 everything is designed to achieve excellence.' },
  ],
};

export default function SignatureSorelPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const t = createTranslator(getMessages(locale));
  const data = pillars[locale];

  return (
    <>
      <section className="pt-40 pb-24 sorel-section bg-sorel-cream">
        <div className="sorel-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="sorel-divider" />
                <p className="sorel-label">SOREL</p>
              </div>
              <h1 className="sorel-heading text-5xl md:text-7xl mb-8" style={{ letterSpacing: '-0.02em' }}>
                {t('signaturePage.title')}
              </h1>
              <p className="font-display text-xl md:text-2xl font-light text-sorel-silver italic">
                {t('signaturePage.subtitle')}
              </p>
            </div>
            <div>
              <p className="text-sm text-sorel-graphite font-light leading-[2]">
                {locale === 'fr'
                  ? 'Derri\u00E8re chaque image SOREL se trouve une architecture invisible : une direction artistique rigoureuse, des processus pr\u00E9cis, une culture de l\'exigence. Voil\u00E0 ce que vous r\u00E9servez.'
                  : 'Behind every SOREL image lies an invisible architecture: rigorous artistic direction, precise processes, a culture of excellence. This is what you are booking.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sorel-section bg-sorel-white">
        <div className="sorel-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.map((pillar) => (
              <div key={pillar.label} className="group border border-sorel-black/5 p-10 md:p-12 hover:border-sorel-champagne/30 transition-all duration-500">
                <p className="sorel-label text-sorel-champagne mb-6">{pillar.label}</p>
                <h2 className="font-display text-3xl font-light text-sorel-black mb-6">{pillar.title}</h2>
                <p className="text-sm text-sorel-graphite font-light leading-[1.9]">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sorel-section bg-sorel-cream">
        <div className="sorel-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="SOREL signature"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="sorel-divider" />
                <p className="sorel-label">{locale === 'fr' ? 'Notre difference' : 'Our difference'}</p>
              </div>
              <h2 className="sorel-heading text-4xl md:text-5xl mb-10">
                {locale === 'fr' ? 'Pourquoi SOREL ?' : 'Why SOREL?'}
              </h2>
              <div className="space-y-5">
                {[
                  locale === 'fr' ? 'Coh\u00E9rence visuelle garantie' : 'Guaranteed visual consistency',
                  locale === 'fr' ? 'Direction artistique unique' : 'Unique artistic direction',
                  locale === 'fr' ? 'Standards de livraison pr\u00E9cis' : 'Precise delivery standards',
                  locale === 'fr' ? 'Options premium exclusives' : 'Exclusive premium options',
                  locale === 'fr' ? 'Disponible partout en France et \u00E0 l\'international' : 'Available across France and internationally',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <Check size={16} className="text-sorel-champagne flex-shrink-0" />
                    <p className="text-sm text-sorel-graphite font-light">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <Link
                  href={`/${locale}/${locale === 'fr' ? 'reserver' : 'book'}`}
                  className="sorel-btn-primary"
                >
                  {locale === 'fr' ? 'Reserver' : 'Book'}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        locale={locale}
        title={t('cta.title')}
        subtitle={t('cta.subtitle')}
        button={t('cta.button')}
        contact={t('cta.contact')}
      />
    </>
  );
}
