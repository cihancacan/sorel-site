import { Clock, Smartphone, Printer, Frame, Users, BookOpen } from 'lucide-react';

interface PremiumOptionsProps {
  locale: 'fr' | 'en';
  title: string;
  subtitle: string;
  items: {
    express: { title: string; desc: string };
    teaser: { title: string; desc: string };
    print: { title: string; desc: string };
    frames: { title: string; desc: string };
    guests: { title: string; desc: string };
    album: { title: string; desc: string };
  };
}

const icons = [Clock, Smartphone, Printer, Frame, Users, BookOpen];

export default function PremiumOptions({ title, subtitle, items }: PremiumOptionsProps) {
  const options = [
    items.express,
    items.teaser,
    items.print,
    items.frames,
    items.guests,
    items.album,
  ];

  return (
    <section className="sorel-section bg-sorel-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="sorel-container relative">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-10 h-px bg-sorel-champagne/50" />
            <p className="sorel-label text-sorel-champagne">Premium</p>
            <div className="w-10 h-px bg-sorel-champagne/50" />
          </div>
          <h2 className="sorel-heading text-4xl md:text-5xl text-sorel-cream mb-5">{title}</h2>
          <p className="text-sm text-sorel-cream/70 font-light max-w-md mx-auto leading-relaxed">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {options.map((option, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="group border border-sorel-white/10 p-8 md:p-10 hover:border-sorel-champagne/30 transition-all duration-500 hover:bg-sorel-white/[0.03]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full border border-sorel-champagne/25 flex items-center justify-center group-hover:border-sorel-champagne/50 transition-colors duration-500">
                    <Icon size={16} className="text-sorel-champagne/70 group-hover:text-sorel-champagne transition-colors duration-500" />
                  </div>
                  <h3 className="font-display text-lg font-light text-sorel-cream">{option.title}</h3>
                </div>
                <p className="text-xs text-sorel-cream/60 font-light leading-[1.8] pl-14">{option.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
