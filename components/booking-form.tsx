'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send, CircleCheck as CheckCircle, MessageCircle, ShieldCheck } from 'lucide-react';
import { servicesFr } from '@/data/services.fr';
import { servicesEn } from '@/data/services.en';
import { brand } from '@/data/brand';

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
  const isFr = locale === 'fr';

  const packLabel =
    prefilledPack === 'essentielle' || prefilledPack === 'essential'
      ? isFr
        ? 'Collection Essentielle'
        : 'Essential Collection'
      : prefilledPack === 'signature'
      ? isFr
        ? 'Collection Signature'
        : 'Signature Collection'
      : prefilledPack === 'maison'
      ? isFr
        ? 'Collection Maison'
        : 'Maison Collection'
      : prefilledPack === 'ceremonie' || prefilledPack === 'ceremony'
      ? isFr
        ? 'Formule Cérémonie / Événement précis'
        : 'Ceremony / Key Moment Package'
      : prefilledPack;

  const normalizedPack =
    prefilledPack === 'essential' ? 'essentielle' : prefilledPack === 'ceremony' ? 'ceremonie' : prefilledPack;

  const priceByService: Record<string, Record<string, { fr: string; en: string }>> = {
    'photographe-mariage': {
      ceremonie: { fr: 'À partir de 490 €', en: 'From €490' },
      essentielle: { fr: 'À partir de 990 €', en: 'From €990' },
      signature: { fr: 'À partir de 1 490 €', en: 'From €1,490' },
      maison: { fr: 'À partir de 2 490 €', en: 'From €2,490' },
    },
    'videaste-mariage': {
      ceremonie: { fr: 'À partir de 490 €', en: 'From €490' },
      essentielle: { fr: 'À partir de 990 €', en: 'From €990' },
      signature: { fr: 'À partir de 1 490 €', en: 'From €1,490' },
      maison: { fr: 'À partir de 2 490 €', en: 'From €2,490' },
    },
    'photo-video-mariage': {
      ceremonie: { fr: 'À partir de 990 €', en: 'From €990' },
      essentielle: { fr: 'À partir de 1 990 €', en: 'From €1,990' },
      signature: { fr: 'À partir de 2 990 €', en: 'From €2,990' },
      maison: { fr: 'À partir de 4 990 €', en: 'From €4,990' },
    },
  };

  const selectedPrice =
    priceByService[prefilledService]?.[normalizedPack]?.[isFr ? 'fr' : 'en'] || '';

  const selectedHelpText =
    normalizedPack === 'ceremonie'
      ? isFr
        ? 'Idéal pour couvrir une mairie, une église, une cérémonie civile, religieuse ou un moment précis.'
        : 'Ideal for covering a town hall, church, civil ceremony, religious ceremony or one precise key moment.'
      : normalizedPack === 'essentielle'
      ? isFr
        ? 'Une couverture claire et efficace pour les temps forts essentiels.'
        : 'A clear and efficient coverage for the essential key moments.'
      : normalizedPack === 'signature'
      ? isFr
        ? 'La formule la plus équilibrée pour une couverture plus complète et confortable.'
        : 'The most balanced package for more complete and comfortable coverage.'
      : normalizedPack === 'maison'
      ? isFr
        ? 'Une couverture premium pensée pour les mariages complets et les projets les plus exigeants.'
        : 'A premium coverage designed for complete weddings and the most demanding projects.'
      : isFr
      ? 'Nous vous orienterons vers la formule la plus adaptée à votre projet.'
      : 'We will guide you toward the most suitable package for your project.';

  const whatsappText = isFr
    ? 'Bonjour, je souhaite vérifier une disponibilité pour une prestation photo/vidéo.'
    : 'Hello, I would like to check availability for a photo/video service.';
  const whatsappUrl = `https://wa.me/${brand.whatsapp.replace('+', '')}?text=${encodeURIComponent(
    whatsappText
  )}`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      service: formData.get('service'),
      eventDate: formData.get('eventDate'),
      city: formData.get('city'),
      mediaType: formData.get('mediaType'),
      eventType: formData.get('eventType'),
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
          isFr
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
        isFr
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
      <div className="bg-sorel-black text-sorel-cream border border-sorel-champagne/25 p-6 md:p-7">
        <p className="sorel-label text-sorel-champagne mb-4">
          {isFr ? 'Demande rapide' : 'Quick request'}
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-light leading-tight mb-4">
          {isFr ? 'Vérifiez votre date en 1 minute' : 'Check your date in 1 minute'}
        </h2>
        <p className="text-sm text-sorel-cream/75 font-light leading-[1.8] mb-5">
          {isFr
            ? 'Indiquez simplement la date, le lieu et la prestation souhaitée. Nous vous confirmons rapidement si une équipe SOREL est disponible.'
            : 'Simply share the date, venue and service you need. We will quickly confirm whether a SOREL team is available.'}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {(isFr
            ? ['Réponse rapide', 'Sans engagement', 'Photo / Vidéo / Les deux']
            : ['Fast reply', 'No commitment', 'Photo / Video / Both']
          ).map((item) => (
            <div key={item} className="flex items-center gap-2 text-xs text-sorel-cream/80 font-light">
              <ShieldCheck size={14} className="text-sorel-champagne flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {packLabel && (
        <div className="bg-sorel-white/70 border border-sorel-champagne/30 p-5 md:p-6">
          <p className="sorel-label text-sorel-champagne mb-3">
            {isFr ? 'Formule sélectionnée' : 'Selected package'}
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-3">
            <p className="font-display text-2xl md:text-3xl font-light text-sorel-black leading-tight">
              {packLabel}
            </p>
            {selectedPrice && (
              <p className="font-display text-3xl md:text-4xl font-light text-sorel-champagne leading-none">
                {selectedPrice}
              </p>
            )}
          </div>
          <p className="text-xs text-sorel-graphite font-light leading-[1.8]">
            {selectedHelpText}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div>
          <label className={labelClass}>{isFr ? "Date de l'événement" : 'Event date'}</label>
          <input
            name="eventDate"
            type="text"
            className={inputClass}
            placeholder={isFr ? 'Ex : samedi 12 juillet 2026' : 'E.g. Saturday, July 12, 2026'}
            required
          />
        </div>

        <div>
          <label className={labelClass}>{isFr ? 'Ville ou lieu' : 'City or venue'}</label>
          <input
            name="city"
            type="text"
            className={inputClass}
            placeholder={isFr ? 'Paris, Versailles, Rouen...' : 'Paris, Versailles, Rouen...'}
            required
          />
        </div>
      </div>

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
      </div>

      <div>
        <label className={labelClass}>{isFr ? "Type d'événement" : 'Event type'}</label>
        <select name="eventType" className={inputClass} required defaultValue="">
          <option value="">&mdash;</option>
          <option value="wedding">{isFr ? 'Mariage' : 'Wedding'}</option>
          <option value="civil-ceremony">{isFr ? 'Mairie / cérémonie civile' : 'Town hall / civil ceremony'}</option>
          <option value="religious-ceremony">{isFr ? 'Église / cérémonie religieuse' : 'Church / religious ceremony'}</option>
          <option value="proposal">{isFr ? 'Demande en mariage' : 'Proposal'}</option>
          <option value="private-event">{isFr ? 'Événement privé' : 'Private event'}</option>
          <option value="corporate-event">{isFr ? 'Événement entreprise' : 'Corporate event'}</option>
          <option value="other">{isFr ? 'Autre' : 'Other'}</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div>
          <label className={labelClass}>{isFr ? 'Votre prénom' : 'Your first name'}</label>
          <input name="name" type="text" className={inputClass} required />
        </div>
        <div>
          <label className={labelClass}>{t.phone}</label>
          <input name="phone" type="tel" className={inputClass} required />
        </div>
      </div>

      <div>
        <label className={labelClass}>{t.email}</label>
        <input name="email" type="email" className={inputClass} required />
      </div>

      <div>
        <label className={labelClass}>{isFr ? 'Message optionnel' : 'Optional message'}</label>
        <textarea
          name="message"
          className={`${inputClass} resize-none`}
          rows={4}
          placeholder={
            isFr
              ? "Horaire prévu, nombre d'invités, lieu exact, ambiance recherchée..."
              : 'Schedule, number of guests, exact venue, desired atmosphere...'
          }
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="sorel-btn-primary w-full justify-center disabled:opacity-60"
      >
        {loading
          ? isFr
            ? 'Vérification...'
            : 'Checking...'
          : isFr
          ? 'Vérifier ma date'
          : 'Check my date'}
        <Send size={14} />
      </button>

      <p className="text-center text-xs text-sorel-silver font-light">
        {isFr ? 'Réponse rapide — aucun engagement' : 'Fast reply — no commitment'}
      </p>

      <div className="border border-sorel-black/8 bg-sorel-white/60 p-5 text-center">
        <p className="text-sm text-sorel-graphite font-light mb-4">
          {isFr ? 'Vous préférez aller plus vite ?' : 'Prefer to move faster?'}
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 border border-sorel-black/15 text-sorel-black text-[11px] font-medium tracking-[0.15em] uppercase px-6 py-4 transition-all duration-500 hover:bg-sorel-black hover:text-sorel-cream"
        >
          <MessageCircle size={15} />
          {isFr ? 'Écrire sur WhatsApp' : 'Message on WhatsApp'}
        </a>
      </div>
    </form>
  );
}
