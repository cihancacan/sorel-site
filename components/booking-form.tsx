'use client';

import { useState } from 'react';
import { Send, CircleCheck as CheckCircle } from 'lucide-react';
import { servicesFr } from '@/data/services.fr';
import { servicesEn } from '@/data/services.en';

interface BookingFormProps {
  locale: 'fr' | 'en';
  t: {
    service: string;
    city: string;
    mediaType: string;
    budget: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
    success: string;
    photo: string;
    video: string;
    both: string;
  };
}

export default function BookingForm({ locale, t }: BookingFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const services = locale === 'fr' ? servicesFr : servicesEn;

  const budgetOptions = locale === 'fr'
    ? ['Moins de 1 000 \u20AC', '1 000 \u2013 2 500 \u20AC', '2 500 \u2013 5 000 \u20AC', '5 000 \u2013 10 000 \u20AC', 'Plus de 10 000 \u20AC']
    : ['Less than \u20AC1,000', '\u20AC1,000 \u2013 \u20AC2,500', '\u20AC2,500 \u2013 \u20AC5,000', '\u20AC5,000 \u2013 \u20AC10,000', 'More than \u20AC10,000'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-20">
        <CheckCircle size={40} className="text-sorel-champagne mx-auto mb-8" strokeWidth={1} />
        <p className="font-display text-2xl font-light text-sorel-black mb-3">{t.success}</p>
      </div>
    );
  }

  const inputClass = "w-full bg-transparent border border-sorel-black/8 px-4 py-4 text-sm text-sorel-black font-light placeholder:text-sorel-silver/40 focus:outline-none focus:border-sorel-black/30 transition-colors";
  const labelClass = "sorel-label mb-3 block";

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div className="bg-sorel-white/60 border border-sorel-champagne/20 p-5">
        <p className="text-xs text-sorel-graphite font-light leading-[1.8]">
          {locale === 'fr'
            ? 'Les disponibilites sont a verifier aupres de notre equipe. Soumettez votre demande et nous vous confirmerons les creneaux disponibles sous 24h.'
            : 'Availability must be confirmed with our team. Submit your request and we will confirm available slots within 24 hours.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div>
          <label className={labelClass}>{t.service}</label>
          <select className={inputClass} required>
            <option value="">&mdash;</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>{s.title}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>{t.city}</label>
          <input type="text" className={inputClass} placeholder="Paris" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div>
          <label className={labelClass}>{t.mediaType}</label>
          <select className={inputClass}>
            <option value="photo">{t.photo}</option>
            <option value="video">{t.video}</option>
            <option value="both">{t.both}</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>{t.budget}</label>
          <select className={inputClass}>
            <option value="">&mdash;</option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div>
          <label className={labelClass}>{t.name}</label>
          <input type="text" className={inputClass} required />
        </div>
        <div>
          <label className={labelClass}>{t.email}</label>
          <input type="email" className={inputClass} required />
        </div>
      </div>

      <div>
        <label className={labelClass}>{t.phone}</label>
        <input type="tel" className={inputClass} />
      </div>

      <div>
        <label className={labelClass}>{t.message}</label>
        <textarea className={`${inputClass} resize-none`} rows={4} />
      </div>

      <button type="submit" className="sorel-btn-primary w-full justify-center">
        {t.submit}
        <Send size={14} />
      </button>
    </form>
  );
}
