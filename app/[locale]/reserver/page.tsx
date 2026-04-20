import type { Metadata } from 'next';
import { Phone, Clock3, CheckCircle2, Gem } from 'lucide-react';
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
          text: 'Nous affinons le besoin et la formule la plus adaptée.',
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
          text: 'We refine the need and the most suitable collection.',
        },
        {
          n: '04',
          title: 'Your date is secured',
          text: 'Once validated, we move forward with a clear and structured proposal.',
        },
      ];

  return (
    <section className="sorel-section bg-sorel-cream pt-32 md:pt-36">
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

              <a
                href={`tel:${brand.phoneRaw}`}
                className="inline-flex items-center gap-2 text-sorel-black hover:text-sorel-champagne transition-colors"
              >
                <Phone size={14} />
                <span className="text-sm font-light">{brand.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
