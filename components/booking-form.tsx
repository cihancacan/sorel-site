'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send, CircleCheck as CheckCircle } from 'lucide-react';
import { servicesFr } from '@/data/services.fr';
import { servicesEn } from '@/data/services.en';

interface BookingFormProps {
  locale: 'fr' | 'en';
  t: {
    service: string;
    city: string;
    mediaType: string;
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
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();

  const prefilledService = searchParams.get('service') || '';
  const prefilledMediaType = searchParams.get('mediaType') || 'photo';
  const prefilledPack = searchParams.get('pack') || '';

  const services = locale === 'fr' ? servicesFr : servicesEn;

  const packLabel =
    prefilledPack === 'essentielle' || prefilledPack === 'essential'
      ? locale === 'fr'
        ? 'Collection Essentielle'
        : 'Essential Collection'
      : prefilledPack === 'signature'
      ? locale === 'fr'
        ? 'Collection Signature'
        : 'Signature Collection'
      : prefilledPack === 'maison'
      ? locale === 'fr'
        ? 'Collection Maison'
        : 'Maison Collection'
      : prefilledPack;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      service: formData.get('service'),
      city: formData.get('city'),
      mediaType: formData.get('mediaType'),
      pack: prefilledPack || '',
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      setLoading(true);

      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        alert(
          locale === 'fr'
            ? "Une erreur s'est produite. Merci de réessayer."
            : 'An error occurred. Please try again.'
        );
        return;
      }

      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', 'conversion', {
          send_to: 'AW-18089402701/sHd_CNe45pscEM3C2bFD',
          value: 1.0,
          currency: 'EUR',
        });
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error(error);
      alert(
        locale === 'fr'
          ? "Une erreur s'est produite. Merci de réessayer."
          : 'An error occurred. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-20">
        <CheckCircle
          size={40}
          className="text-sorel-champagne mx-auto mb-8"
          strokeWidth={1}
        />
        <p className="font-display text-2xl font-light text-sorel-black mb-3">
          {t.success}
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full bg-transparent border border-sorel-black/8 px-4 py-4 text-sm text-sorel-black font-light placeholder:text-sorel-silver/40 focus:outline-none focus:border-sorel-black/30 transition-colors';
  const labelClass = 'sorel-label mb-3 block';

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div className="bg-sorel-white/60 border border-sorel-champagne/20 p-5">
        <p className="text-xs text-sorel-graphite font-light leading-[1.8]">
          {locale === 'fr'
            ? 'Les disponibilités sont à vérifier auprès de notre équipe. Soumettez votre demande et nous vous confirmerons les créneaux disponibles sous 24h.'
            : 'Availability must be confirmed with our team. Submit your request and we will confirm available slots within 24 hours.'}
        </p>
      </div>

      {packLabel && (
        <div className="bg-sorel-white/60 border border-sorel-champagne/20 p-5">
          <p className="text-xs text-sorel-graphite font-light leading-[1.8]">
            {locale === 'fr'
              ? `Vous avez sélectionné ${packLabel}.`
              : `You selected ${packLabel}.`}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div>
          <label className={labelClass}>{t.service}</label>
          <select
            name="service"
            className={inputClass}
            required
            defaultValue={prefilledService}
          >
            <option value="">&mdash;</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass}>{t.city}</label>
          <input
            name="city"
            type="text"
            className={inputClass}
            placeholder="Paris"
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>{t.mediaType}</label>
        <select
          name="mediaType"
          className={inputClass}
          defaultValue={prefilledMediaType}
        >
          <option value="photo">{t.photo}</option>
          <option value="video">{t.video}</option>
          <option value="both">{t.both}</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div>
          <label className={labelClass}>{t.name}</label>
          <input name="name" type="text" className={inputClass} required />
        </div>
        <div>
          <label className={labelClass}>{t.email}</label>
          <input name="email" type="email" className={inputClass} required />
        </div>
      </div>

      <div>
        <label className={labelClass}>{t.phone}</label>
        <input name="phone" type="tel" className={inputClass} required />
      </div>

      <div>
        <label className={labelClass}>{t.message}</label>
        <textarea
          name="message"
          className={`${inputClass} resize-none`}
          rows={4}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="sorel-btn-primary w-full justify-center disabled:opacity-60"
      >
        {loading ? (locale === 'fr' ? 'Envoi...' : 'Sending...') : t.submit}
        <Send size={14} />
      </button>
    </form>
  );
}
