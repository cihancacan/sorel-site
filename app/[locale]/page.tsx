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
      title: 'SOREL — Photo & Film Haut de Gamme',
      description: 'Photographe et vidéaste premium dans votre ville pour mariage et événement d’exception. SOREL Studio allie élégance, émotion et disponibilité rapide à votre date.',
      locale,
      path: '/fr',
    });
  }

  return buildMetadata({
    title: 'SOREL — High-End Photo & Film',
    description: 'Premium photographers and videographers in your city for weddings and exceptional events. SOREL Studio combines elegance, emotion and fast availability for your date.',
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
