import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import CtaSection from '@/components/cta-section';
import { getMessages, createTranslator } from '@/lib/i18n';

type Locale = 'fr' | 'en';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale as Locale;
  return buildMetadata({
    title: locale === 'fr' ? 'R\u00E9alisations \u2014 Portfolio SOREL' : 'Work \u2014 SOREL Portfolio',
    description: locale === 'fr'
      ? 'D\u00E9couvrez les r\u00E9alisations SOREL : mariages, portraits, \u00E9v\u00E9nements. Une s\u00E9lection de nos projets les plus marquants.'
      : 'Discover SOREL\'s work: weddings, portraits, events. A selection of our most memorable projects.',
    locale,
    path: `/${locale}/${locale === 'fr' ? 'realisations' : 'work'}`,
  });
}

const categories = {
  fr: ['Tous', 'Mariage', 'Portrait', 'Couple', '\u00C9v\u00E9nement', 'Corporate', 'Famille'],
  en: ['All', 'Wedding', 'Portrait', 'Couple', 'Event', 'Corporate', 'Family'],
};

const portfolioImages = [
  { src: 'https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=900', category: 'Mariage', span: 'col-span-2 row-span-2' },
  { src: 'https://images.pexels.com/photos/3916019/pexels-photo-3916019.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Portrait', span: '' },
  { src: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Couple', span: '' },
  { src: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Corporate', span: '' },
  { src: 'https://images.pexels.com/photos/1128783/pexels-photo-1128783.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Famille', span: '' },
  { src: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Mariage', span: '' },
  { src: 'https://images.pexels.com/photos/3171815/pexels-photo-3171815.jpeg?auto=compress&cs=tinysrgb&w=800', category: '\u00C9v\u00E9nement', span: 'col-span-2' },
  { src: 'https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Couple', span: '' },
  { src: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Couple', span: '' },
  { src: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Corporate', span: '' },
  { src: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Mariage', span: '' },
  { src: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Portrait', span: '' },
  { src: 'https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Mariage', span: 'col-span-2' },
  { src: 'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=600', category: '\u00C9v\u00E9nement', span: '' },
  { src: 'https://images.pexels.com/photos/1878685/pexels-photo-1878685.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Famille', span: '' },
  { src: 'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Portrait', span: '' },
  { src: 'https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Mariage', span: '' },
  { src: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Corporate', span: '' },
];

export default function RealisationsPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const t = createTranslator(getMessages(locale));
  const cats = categories[locale];

  return (
    <>
      <section className="pt-40 pb-16 sorel-section bg-sorel-cream">
        <div className="sorel-container">
          <div className="flex items-center gap-4 mb-8">
            <div className="sorel-divider" />
            <p className="sorel-label">Portfolio</p>
          </div>
          <h1 className="sorel-heading text-5xl md:text-7xl mb-4" style={{ letterSpacing: '-0.02em' }}>{t('work.title')}</h1>
          <p className="text-sm text-sorel-silver font-light max-w-md">{t('work.subtitle')}</p>
        </div>
      </section>

      <section className="sorel-section bg-sorel-cream pt-0">
        <div className="sorel-container">
          <div className="flex items-center gap-6 mb-14 overflow-x-auto pb-2 scrollbar-hide">
            {cats.map((cat) => (
              <button
                key={cat}
                className={`sorel-label whitespace-nowrap pb-2 border-b-2 transition-all duration-300 ${
                  cat === cats[0] ? 'border-sorel-black text-sorel-black' : 'border-transparent text-sorel-silver hover:text-sorel-black hover:border-sorel-silver/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {portfolioImages.map((img, i) => (
              <div key={i} className={`${img.span} aspect-[4/5] overflow-hidden group relative`}>
                <img
                  src={img.src}
                  alt={`SOREL \u2014 ${img.category}`}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-sorel-black/0 group-hover:bg-sorel-black/30 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 p-4 md:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="sorel-label text-sorel-cream">{img.category}</p>
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
