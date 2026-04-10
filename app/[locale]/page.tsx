import type { Metadata } from 'next';
import Hero from '@/components/hero';
import SignatureSection from '@/components/signature-section';
import ServicesOverview from '@/components/services-overview';
import PremiumOptions from '@/components/premium-options';
import GalleryGrid from '@/components/gallery-grid';
import CtaSection from '@/components/cta-section';
import FaqSection from '@/components/faq-section';
import { servicesFr } from '@/data/services.fr';
import { servicesEn } from '@/data/services.en';
import { faqsFr } from '@/data/faqs.fr';
import { faqsEn } from '@/data/faqs.en';
import { buildMetadata } from '@/lib/seo';
import { getMessages, createTranslator } from '@/lib/i18n';

type Locale = 'fr' | 'en';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale as Locale;
  if (locale === 'fr') {
    return buildMetadata({
      title: 'SOREL \u2014 Photo & Film Haut de Gamme',
      description: 'SOREL, maison photo & film haut de gamme. Photographes et vid\u00E9astes pour mariage, \u00E9v\u00E9nements, portraits. Revoyez l\'instant comme vous l\'avez v\u00E9cu.',
      locale,
      path: '/fr',
    });
  }
  return buildMetadata({
    title: 'SOREL \u2014 High-End Photo & Film',
    description: 'SOREL, high-end photo & film house. Photographers and videographers for weddings, events, portraits. Relive the moment as you truly lived it.',
    locale,
    path: '/en',
  });
}

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const t = createTranslator(getMessages(locale));
  const services = locale === 'fr' ? servicesFr : servicesEn;
  const faqs = locale === 'fr' ? faqsFr.slice(0, 5) : faqsEn.slice(0, 5);

  return (
    <>
      <Hero
        locale={locale}
        baseline={t('hero.baseline')}
        sub={t('hero.sub')}
        ctaWork={t('hero.ctaWork')}
        ctaBook={t('hero.ctaBook')}
      />

      <SignatureSection
        locale={locale}
        title={t('signature.title')}
        subtitle={t('signature.subtitle')}
        p1={t('signature.p1')}
        p2={t('signature.p2')}
        p3={t('signature.p3')}
        learnMore={t('signature.learnMore')}
      />

      <ServicesOverview
        locale={locale}
        title={t('services.title')}
        subtitle={t('services.subtitle')}
        services={services}
      />

      <PremiumOptions
        locale={locale}
        title={t('options.title')}
        subtitle={t('options.subtitle')}
        items={{
          express: { title: t('options.items.express.title'), desc: t('options.items.express.desc') },
          teaser: { title: t('options.items.teaser.title'), desc: t('options.items.teaser.desc') },
          print: { title: t('options.items.print.title'), desc: t('options.items.print.desc') },
          frames: { title: t('options.items.frames.title'), desc: t('options.items.frames.desc') },
          guests: { title: t('options.items.guests.title'), desc: t('options.items.guests.desc') },
          album: { title: t('options.items.album.title'), desc: t('options.items.album.desc') },
        }}
      />

      <GalleryGrid
        locale={locale}
        title={t('work.title')}
        subtitle={t('work.subtitle')}
        viewAll={t('work.viewAll')}
      />

      <FaqSection
        title={t('faq.title')}
        subtitle={t('faq.subtitle')}
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
