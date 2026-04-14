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
  { src: 'https://images.pexels.com/photos/5194964/pexels-photo-5194964.jpeg?auto=compress&cs=tinysrgb&w=900', category: 'Mariage', span: 'col-span-2 row-span-2' },
  { src: 'https://images.pexels.com/photos/5652352/pexels-photo-5652352.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Portrait', span: '' },
  { src: 'https://images.pexels.com/photos/3754270/pexels-photo-3754270.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Couple', span: '' },
  { src: 'https://images.pexels.com/photos/3321796/pexels-photo-3321796.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Corporate', span: '' },
  { src: 'https://images.pexels.com/photos/33769499/pexels-photo-33769499.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Famille', span: '' },
  { src: 'https://images.pexels.com/photos/10256496/pexels-photo-10256496.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Mariage', span: '' },
  { src: 'https://images.pexels.com/photos/35344829/pexels-photo-35344829.jpeg?auto=compress&cs=tinysrgb&w=800', category: '\u00C9v\u00E9nement', span: 'col-span-2' },
  { src: 'https://images.pexels.com/photos/30373875/pexels-photo-30373875.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Couple', span: '' },
  { src: 'https://images.pexels.com/photos/2698419/pexels-photo-2698419.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Couple', span: '' },
  { src: 'https://images.pexels.com/photos/34774355/pexels-photo-34774355.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Corporate', span: '' },
  { src: 'https://images.pexels.com/photos/11409545/pexels-photo-11409545.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Mariage', span: '' },
  { src: 'https://images.pexels.com/photos/11734518/pexels-photo-11734518.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Portrait', span: '' },
  { src: 'https://images.pexels.com/photos/20642358/pexels-photo-20642358.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Mariage', span: 'col-span-2' },
  { src: 'https://images.pexels.com/photos/1400261/pexels-photo-1400261.jpeg?auto=compress&cs=tinysrgb&w=600', category: '\u00C9v\u00E9nement', span: '' },
  { src: 'https://images.pexels.com/photos/5371945/pexels-photo-5371945.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Famille', span: '' },
  { src: 'https://images.pexels.com/photos/37025346/pexels-photo-37025346.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Portrait', span: '' },
  { src: 'https://images.pexels.com/photos/26664924/pexels-photo-26664924.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Mariage', span: '' },
  { src: 'https://images.pexels.com/photos/8349232/pexels-photo-8349232.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Corporate', span: '' },
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
