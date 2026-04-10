import Link from 'next/link';
import { ArrowRight, Camera, Film, Layers } from 'lucide-react';

interface ServiceCardProps {
  slug: string;
  title: string;
  description: string;
  heroLine: string;
  type: 'photo' | 'video' | 'photo-video';
  locale: 'fr' | 'en';
}

const typeIcons = {
  photo: Camera,
  video: Film,
  'photo-video': Layers,
};

const typeLabels = {
  fr: { photo: 'Photo', video: 'Film', 'photo-video': 'Photo & Film' },
  en: { photo: 'Photo', video: 'Film', 'photo-video': 'Photo & Film' },
};

export default function ServiceCard({ slug, title, description, heroLine, type, locale }: ServiceCardProps) {
  const Icon = typeIcons[type];
  const label = typeLabels[locale][type];

  return (
    <Link href={`/${locale}/${slug}`} className="group block">
      <div className="relative bg-sorel-white border border-sorel-black/6 p-8 md:p-10 transition-all duration-500 hover:border-sorel-champagne/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
        <div className="flex items-center gap-3 mb-8">
          <Icon size={15} className="text-sorel-champagne" />
          <span className="sorel-label text-sorel-silver/50">{label}</span>
        </div>

        <h3 className="font-display text-2xl font-light text-sorel-black mb-3 group-hover:text-sorel-anthracite transition-colors">
          {title}
        </h3>
        <p className="font-display text-sm text-sorel-silver italic leading-relaxed mb-4">
          {heroLine}
        </p>
        <p className="text-xs text-sorel-graphite/60 font-light leading-[1.8] mb-8 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center gap-2 text-[10px] font-medium tracking-[0.15em] uppercase text-sorel-black">
          <span>{locale === 'fr' ? 'Decouvrir' : 'Discover'}</span>
          <ArrowRight size={12} className="group-hover:translate-x-1.5 transition-transform duration-300" />
        </div>

        <div className="absolute top-0 right-0 w-0 h-px bg-sorel-champagne group-hover:w-full transition-all duration-700" />
      </div>
    </Link>
  );
}
