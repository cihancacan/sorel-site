import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import BookingForm from '@/components/booking-form';
import { getMessages, createTranslator } from '@/lib/i18n';

type Locale = 'fr' | 'en';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale as Locale;
  return buildMetadata({
    title: locale === 'fr' ? 'R\u00E9server \u2014 SOREL Photo & Film' : 'Book \u2014 SOREL Photo & Film',
    description: locale === 'fr'
      ? 'R\u00E9servez votre date avec SOREL. Photographes et vid\u00E9astes haut de gamme pour mariage, \u00E9v\u00E9nements, portraits. R\u00E9ponse sous 24h.'
      : 'Book your date with SOREL. High-end photographers and videographers for weddings, events, portraits. Response within 24h.',
    locale,
    path: `/${locale}/${locale === 'fr' ? 'reserver' : 'book'}`,
  });
}

export default function ReserverPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const t = createTranslator(getMessages(locale));

  const formT = {
    service: t('booking.form.service'),
    city: t('booking.form.city'),
    mediaType: t('booking.form.mediaType'),
    budget: t('booking.form.budget'),
    name: t('booking.form.name'),
    email: t('booking.form.email'),
    phone: t('booking.form.phone'),
    message: t('booking.form.message'),
    submit: t('booking.form.submit'),
    success: t('booking.form.success'),
    photo: t('booking.form.photo'),
    video: t('booking.form.video'),
    both: t('booking.form.both'),
  };

  return (
    <>
      <section className="pt-40 pb-0 bg-sorel-cream px-6 md:px-12 lg:px-20">
        <div className="sorel-container">
          <div className="flex items-center gap-4 mb-8">
            <div className="sorel-divider" />
            <p className="sorel-label">{locale === 'fr' ? 'Reservation' : 'Booking'}</p>
          </div>
          <h1 className="sorel-heading text-5xl md:text-7xl mb-4" style={{ letterSpacing: '-0.02em' }}>{t('booking.title')}</h1>
          <p className="text-sm text-sorel-silver font-light max-w-md">{t('booking.subtitle')}</p>
        </div>
      </section>

      <section className="sorel-section bg-sorel-cream">
        <div className="sorel-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div className="lg:col-span-2">
              <BookingForm locale={locale} t={formT} />
            </div>
            <div>
              <div className="bg-sorel-white border border-sorel-black/5 p-8 md:p-10">
                <p className="sorel-label text-sorel-champagne mb-8">{locale === 'fr' ? 'Notre processus' : 'Our process'}</p>
                {[
                  { n: '01', fr: 'Envoyez votre demande', en: 'Send your request' },
                  { n: '02', fr: 'Entretien de d\u00E9couverte', en: 'Discovery call' },
                  { n: '03', fr: 'Devis personnalis\u00E9', en: 'Personalized quote' },
                  { n: '04', fr: 'Signature & acompte', en: 'Contract & deposit' },
                ].map((step) => (
                  <div key={step.n} className="flex items-start gap-5 mb-7 last:mb-0">
                    <span className="font-display text-2xl font-light text-sorel-champagne/40 leading-none">{step.n}</span>
                    <div>
                      <p className="text-sm text-sorel-black font-light">{locale === 'fr' ? step.fr : step.en}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-sorel-black/5 mt-8 pt-8">
                <p className="text-sm text-sorel-graphite font-light leading-relaxed">
                  {locale === 'fr'
                    ? 'Nous r\u00E9pondons \u00E0 toutes les demandes dans les 24 heures.'
                    : 'We respond to all requests within 24 hours.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
