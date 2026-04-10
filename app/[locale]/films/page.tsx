import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import CtaSection from '@/components/cta-section';
import { Play } from 'lucide-react';
import { getMessages, createTranslator } from '@/lib/i18n';

type Locale = 'fr' | 'en';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale as Locale;
  return buildMetadata({
    title: locale === 'fr' ? 'Films \u2014 SOREL Photo & Film' : 'Films \u2014 SOREL Photo & Film',
    description: locale === 'fr'
      ? 'D\u00E9couvrez les films SOREL : aftermovies de mariage, films d\'\u00E9v\u00E9nements, contenus corporate. Cin\u00E9matographie haut de gamme.'
      : 'Discover SOREL films: wedding aftermovies, event films, corporate content. High-end cinematography.',
    locale,
    path: `/${locale}/films`,
  });
}

const films = [
  {
    thumbnail: 'https://images.pexels.com/photos/3171815/pexels-photo-3171815.jpeg?auto=compress&cs=tinysrgb&w=900',
    titleFr: 'Mariage au Ch\u00E2teau de Vaux-le-Vicomte',
    titleEn: 'Wedding at Ch\u00E2teau de Vaux-le-Vicomte',
    catFr: 'Mariage',
    catEn: 'Wedding',
    duration: '4:32',
  },
  {
    thumbnail: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=900',
    titleFr: 'Gala Annuel \u2014 Maison de Couture',
    titleEn: 'Annual Gala \u2014 Couture House',
    catFr: 'Corporate',
    catEn: 'Corporate',
    duration: '3:15',
  },
  {
    thumbnail: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=900',
    titleFr: 'Demande en Mariage \u2014 Paris',
    titleEn: 'Proposal \u2014 Paris',
    catFr: 'Demande en Mariage',
    catEn: 'Proposal',
    duration: '2:48',
  },
  {
    thumbnail: 'https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=900',
    titleFr: 'Aftermovie \u2014 Villa C\u00F4te d\'Azur',
    titleEn: 'Aftermovie \u2014 C\u00F4te d\'Azur Villa',
    catFr: '\u00C9v\u00E9nement Priv\u00E9',
    catEn: 'Private Event',
    duration: '5:20',
  },
];

export default function FilmsPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const t = createTranslator(getMessages(locale));

  return (
    <>
      <section className="pt-40 pb-16 sorel-section bg-sorel-cream">
        <div className="sorel-container">
          <div className="flex items-center gap-4 mb-8">
            <div className="sorel-divider" />
            <p className="sorel-label">{locale === 'fr' ? 'Cin\u00E9matographie' : 'Cinematography'}</p>
          </div>
          <h1 className="sorel-heading text-5xl md:text-7xl mb-4" style={{ letterSpacing: '-0.02em' }}>{t('films.title')}</h1>
          <p className="text-sm text-sorel-silver font-light max-w-md">{t('films.subtitle')}</p>
        </div>
      </section>

      <section className="sorel-section bg-sorel-cream pt-0">
        <div className="sorel-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {films.map((film, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={film.thumbnail}
                    alt={locale === 'fr' ? film.titleFr : film.titleEn}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-sorel-black/30 group-hover:bg-sorel-black/50 transition-all duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 border-2 border-sorel-cream/50 rounded-full flex items-center justify-center group-hover:bg-sorel-cream/10 group-hover:border-sorel-cream/80 transition-all duration-500 group-hover:scale-110">
                      <Play size={20} className="text-sorel-cream ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="sorel-label text-sorel-cream/60">{film.duration}</span>
                  </div>
                </div>
                <div className="pt-6">
                  <p className="sorel-label text-sorel-silver/50 mb-2">{locale === 'fr' ? film.catFr : film.catEn}</p>
                  <h3 className="font-display text-xl font-light text-sorel-black group-hover:text-sorel-anthracite transition-colors">
                    {locale === 'fr' ? film.titleFr : film.titleEn}
                  </h3>
                </div>
              </div>
            ))}
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
