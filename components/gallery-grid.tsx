import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface GalleryGridProps {
  locale: 'fr' | 'en';
  title: string;
  subtitle: string;
  viewAll: string;
}

const images = [
  {
    src: 'https://pexels.com/fr-fr/photo/celebration-de-mariage-joyeuse-avec-un-couple-heureux-30817297.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'SOREL \u2014 Mariage',
    label: 'Mariage',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/3916019/pexels-photo-3916019.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'SOREL \u2014 Portrait',
    label: 'Portrait',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'SOREL \u2014 Couple',
    label: 'Couple',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'SOREL \u2014 Corporate',
    label: 'Corporate',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.pexels.com/photos/1128783/pexels-photo-1128783.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'SOREL \u2014 Famille',
    label: 'Famille',
    span: 'col-span-1 row-span-1',
  },
];

export default function GalleryGrid({ locale, title, subtitle, viewAll }: GalleryGridProps) {
  return (
    <section className="sorel-section bg-sorel-cream">
      <div className="sorel-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="sorel-divider" />
              <p className="sorel-label">Portfolio</p>
            </div>
            <h2 className="sorel-heading text-4xl md:text-5xl">{title}</h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            <p className="text-sm text-sorel-silver font-light max-w-xs text-right hidden md:block">{subtitle}</p>
            <Link
              href={`/${locale}/${locale === 'fr' ? 'realisations' : 'work'}`}
              className="sorel-btn-outline"
            >
              {viewAll}
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-2 md:gap-3 h-[500px] md:h-[700px]">
          {images.map((img, i) => (
            <div key={i} className={`${img.span} overflow-hidden group relative`}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-sorel-black/0 group-hover:bg-sorel-black/30 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 p-4 md:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="sorel-label text-sorel-cream">{img.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
