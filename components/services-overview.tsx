import Link from 'next/link';
import { ArrowRight, Camera, Film, Layers } from 'lucide-react';
import type { Service } from '@/data/services.fr';

interface ServicesOverviewProps {
  locale: 'fr' | 'en';
  title: string;
  subtitle: string;
  services: Service[];
}

const categoryConfig = {
  fr: {
    mariage: { label: 'Mariage', image: 'https://images.pexels.com/photos/30817297/pexels-photo-30817297.jpeg?auto=compress&cs=tinysrgb&w=600' },
    fiancailles: { label: 'Fian\u00E7ailles', image: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=600' },
    'evenement-prive': { label: '\u00C9v\u00E9nement Priv\u00E9', image: 'https://images.pexels.com/photos/3171815/pexels-photo-3171815.jpeg?auto=compress&cs=tinysrgb&w=600' },
    'evenement-entreprise': { label: 'Corporate', image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600' },
    'studio-production': { label: 'Studio & Production', image: 'https://b560725.smushcdn.com/560725/wp-content/uploads/2024/12/2021-11TellwellStudioStockPhotos-086.jpg?lossy=2&strip=1&webp=1'},
    shooting: { label: 'Shootings', image: 'https://images.pexels.com/photos/3916019/pexels-photo-3916019.jpeg?auto=compress&cs=tinysrgb&w=600' },
    special: { label: 'Sur Mesure', image: 'https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=600' },
    digital: { label: 'Digital', image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600' },
  },
  en: {
    wedding: { label: 'Wedding', image: 'https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=600' },
    engagement: { label: 'Engagement', image: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=600' },
    'private-event': { label: 'Private Event', image: 'https://images.pexels.com/photos/3171815/pexels-photo-3171815.jpeg?auto=compress&cs=tinysrgb&w=600' },
    corporate: { label: 'Corporate', image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600' },
    'studio-production': { label: 'Studio & Production', image: 'https://b560725.smushcdn.com/560725/wp-content/uploads/2024/12/2021-11TellwellStudioStockPhotos-086.jpg?lossy=2&strip=1&webp=1'},
    photoshoot: { label: 'Photoshoots', image: 'https://images.pexels.com/photos/3916019/pexels-photo-3916019.jpeg?auto=compress&cs=tinysrgb&w=600' },
    special: { label: 'Bespoke', image: 'https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=600' },
    digital: { label: 'Digital', image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600' },
  },
} as const;

const typeIcons = {
  photo: Camera,
  video: Film,
  'photo-video': Layers,
};

export default function ServicesOverview({ locale, title, subtitle, services }: ServicesOverviewProps) {
  const config = categoryConfig[locale];
  const categories = Object.keys(config) as (keyof typeof config)[];

  const grouped = categories
    .map((cat) => ({
      key: cat,
      label: config[cat].label,
      image: config[cat].image,
      items: services.filter((s) => s.category === cat),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <section className="sorel-section bg-sorel-white">
      <div className="sorel-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="sorel-divider" />
              <p className="sorel-label">Services</p>
            </div>
            <h2 className="sorel-heading text-4xl md:text-5xl">{title}</h2>
          </div>
          <p className="text-sm text-sorel-silver font-light max-w-sm">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {grouped.map((group) => (
            <div key={group.key} className="group relative overflow-hidden bg-sorel-cream border border-sorel-black/5 hover:border-sorel-champagne/30 transition-all duration-500">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={group.image}
                  alt={group.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sorel-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="font-display text-2xl font-light text-sorel-cream">{group.label}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {group.items.map((s) => {
                    const Icon = typeIcons[s.type];
                    return (
                      <Link
                        key={s.slug}
                        href={`/${locale}/${s.slug}`}
                        className="flex items-center justify-between py-2.5 border-b border-sorel-black/5 last:border-0 group/link hover:pl-1 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3">
                          <Icon size={13} className="text-sorel-champagne flex-shrink-0" />
                          <span className="text-sm text-sorel-graphite font-light group-hover/link:text-sorel-black transition-colors">
                            {s.shortTitle}
                          </span>
                        </div>
                        <ArrowRight size={12} className="text-sorel-silver/30 group-hover/link:text-sorel-black group-hover/link:translate-x-0.5 transition-all" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
