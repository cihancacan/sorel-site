import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Phone, Clock3, CheckCircle2, Gem } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import BookingForm from '@/components/booking-form';
import { getMessages, createTranslator } from '@/lib/i18n';
import { brand } from '@/data/brand';

type Locale = 'fr' | 'en';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale as Locale;

  return buildMetadata({
    title:
      locale === 'fr'
        ? 'Réserver votre date | SOREL Studio'
        : 'Book your date | SOREL Studio',
    description:
      locale === 'fr'
        ? 'Vérifiez la disponibilité de votre date avec SOREL Studio. Photographe et vidéaste premium pour mariage, événement privé, corporate et production visuelle en France.'
        : 'Check your date availability with SOREL Studio. Premium photographer and videographer for weddings, private events, corporate and visual production in France.',
    locale,
    path: `/${locale}/${locale === 'fr' ? 'reserver' : 'book'}`,
  });
}

export default function ReserverPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale as Locale;
  const t = createTranslator(getMessages(locale));
  const isFr = locale === 'fr';

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

  const steps = isFr
    ? [
        {
          n: '01',
          title: 'Envoyez votre demande',
          text: 'Indiquez-nous votre date, votre lieu et le type de prestation souhaité.',
        },
        {
          n: '02',
          title: 'Nous vérifions les disponibilités',
          text: 'Nous revenons rapidement vers vous avec une première réponse claire.',
        },
        {
          n: '03',
          title: 'Nous échangeons sur votre projet',
          text: 'Nous affinons le besoin, le niveau de couverture et la formule la plus adaptée.',
        },
        {
          n: '04',
          title: 'Votre date est sécurisée',
          text: 'Après validation, nous avançons avec une proposition claire et structurée.',
        },
      ]
    : [
        {
          n: '01',
          title: 'Send your request',
          text: 'Tell us your date, venue and the type of service you want.',
        },
        {
          n: '02',
          title: 'We check availability',
          text: 'We quickly come back to you with a clear first answer.',
        },
        {
          n: '03',
          title: 'We discuss your project',
          text: 'We refine the need, the level of coverage and the right collection.',
        },
        {
          n: '04',
          title: 'Your date is secured',
          text: 'Once validated, we move forward with a clear and structured proposal.',
        },
      ];

  const highlights = isFr
    ? [
        'Réponse sous 24h',
        'Basé à Paris · Toute la France',
        'Photo seule, vidéo seule ou duo',
      ]
    : ['Reply within 24h', 'Based in Paris · All France', 'Photo only, video only or duo'];

  return (
    <>
      <section className="relative overflow-hidden bg-sorel-black">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/33964851/pexels-photo-33964851.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt=""
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sorel-black/95 via-sorel-black/82 to-sorel-black/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-sorel-black via-sorel-black/30 to-sorel-black/20" />
        </div>

        <div className="relative z-10 pt-40 pb-20 px-6 md:px-12 lg:px-20">
          <div className="sorel-container">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-sorel-champagne/50" />
                <p className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-sorel-champagne">
                  {isFr ? 'Réservation' : 'Booking'}
                </p>
              </div>

              <h1
                className="font-display text-5xl md:text-7xl font-light text-sorel-cream leading-[1.02] mb-6"
                style={{ letterSpacing: '-0.03em' }}
              >
                {isFr ? 'Vérifiez la disponibilité de votre date' : 'Check the availability of your date'}
              </h1>

              <p className="text-sm md:text-base text-sorel-cream/80 font-light leading-[1.9] max-w-2xl mb-10">
                {isFr
                  ? 'Mariage, événement privé, entreprise, shooting ou production visuelle : envoyez-nous votre demande et nous vous répondons rapidement pour confirmer les disponibilités et vous orienter vers la formule la plus adaptée.'
                  : 'Wedding, private event, corporate, shooting or visual production: send us your request and we will quickly confirm availability and guide you toward the most suitable collection.'}
              </p>

              <div className="flex flex-wrap gap-3">
                {highlights.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-sorel-cream/15 bg-sorel-cream/5 px-4 py-2 text-[11px] tracking-[0.12em] uppercase text-sorel-cream/85"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sorel-section bg-sorel-cream">
        <div className="sorel-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16">
            <div>
              <div className="bg-sorel-white border border-sorel-black/6 p-6 md:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="sorel-divider" />
                  <p className="sorel-label">{isFr ? 'Votre demande' : 'Your request'}</p>
                </div>

                <BookingForm locale={locale} t={formT} />
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-sorel-white border border-sorel-black/6 p-8 md:p-10">
                <p className="sorel-label text-sorel-champagne mb-8">
                  {isFr ? 'Pourquoi réserver avec SOREL' : 'Why book with SOREL'}
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: Gem,
                      title: isFr ? 'Une approche premium' : 'A premium approach',
                      text: isFr
                        ? 'Une image élégante, une direction visuelle cohérente et une vraie exigence sur le rendu.'
                        : 'Elegant imagery, coherent visual direction and real attention to the final result.',
                    },
                    {
                      icon: Clock3,
                      title: isFr ? 'Une réponse rapide' : 'A fast reply',
                      text: isFr
                        ? 'Nous revenons rapidement vers vous pour confirmer les disponibilités et avancer sans perte de temps.'
                        : 'We reply quickly to confirm availability and move forward without losing momentum.',
                    },
                    {
                      icon: CheckCircle2,
                      title: isFr ? 'Un parcours clair' : 'A clear journey',
                      text: isFr
                        ? 'Une demande simple, un échange fluide et une proposition structurée selon votre besoin.'
                        : 'A simple request, a fluid exchange and a structured proposal according to your needs.',
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full border border-sorel-champagne/25 flex items-center justify-center flex-shrink-0">
                        <item.icon size={16} className="text-sorel-champagne" />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-light text-sorel-black mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-sorel-graphite font-light leading-[1.9]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-sorel-black text-sorel-cream p-8 md:p-10">
                <p className="sorel-label text-sorel-champagne mb-8">
                  {isFr ? 'Notre processus' : 'Our process'}
                </p>

                <div className="space-y-7">
                  {steps.map((step) => (
                    <div key={step.n} className="flex items-start gap-5">
                      <span className="font-display text-2xl font-light text-sorel-champagne/45 leading-none">
                        {step.n}
                      </span>
                      <div>
                        <p className="text-sm text-sorel-cream font-light mb-2">{step.title}</p>
                        <p className="text-sm text-sorel-cream/70 font-light leading-[1.8]">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-sorel-black/8 pt-8">
                <p className="text-sm text-sorel-graphite font-light leading-[1.9] mb-4">
                  {isFr
                    ? 'Une question avant d’envoyer votre demande ? Vous pouvez aussi nous appeler directement.'
                    : 'A question before sending your request? You can also call us directly.'}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <a
                    href={`tel:${brand.phoneRaw}`}
                    className="inline-flex items-center gap-2 text-sorel-black hover:text-sorel-champagne transition-colors"
                  >
                    <Phone size={14} />
                    <span className="text-sm font-light">{brand.phone}</span>
                  </a>

                  <Link
                    href={`/${locale}/${isFr ? 'photo-video-mariage' : 'photo-video-mariage'}`}
                    className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.15em] uppercase text-sorel-black hover:text-sorel-champagne transition-colors"
                  >
                    {isFr ? 'Voir les collections mariage' : 'View wedding collections'}
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
