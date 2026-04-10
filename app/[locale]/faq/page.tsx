import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import FaqSection from '@/components/faq-section';
import CtaSection from '@/components/cta-section';
import { faqsFr } from '@/data/faqs.fr';
import { faqsEn } from '@/data/faqs.en';
import { getMessages, createTranslator } from '@/lib/i18n';

type Locale = 'fr' | 'en';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale as Locale;
  return buildMetadata({
    title: locale === 'fr' ? 'FAQ \u2014 Questions Fr\u00E9quentes SOREL' : 'FAQ \u2014 SOREL Frequently Asked Questions',
    description: locale === 'fr'
      ? 'Toutes les r\u00E9ponses \u00E0 vos questions sur SOREL : r\u00E9servation, d\u00E9lais de livraison, signature, options premium.'
      : 'All answers to your questions about SOREL: booking, delivery times, signature, premium options.',
    locale,
    path: `/${locale}/faq`,
  });
}

export default function FaqPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const t = createTranslator(getMessages(locale));
  const faqs = locale === 'fr' ? faqsFr : faqsEn;

  return (
    <>
      <section className="pt-40 pb-4 bg-sorel-cream px-6 md:px-12 lg:px-20">
        <div className="sorel-container">
          <div className="flex items-center gap-4 mb-8">
            <div className="sorel-divider" />
            <p className="sorel-label">FAQ</p>
          </div>
          <h1 className="sorel-heading text-5xl md:text-7xl mb-4" style={{ letterSpacing: '-0.02em' }}>{t('faq.title')}</h1>
          <p className="text-sm text-sorel-silver font-light max-w-md">{t('faq.subtitle')}</p>
        </div>
      </section>

      <FaqSection
        title=""
        subtitle=""
        faqs={faqs}
      />

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
