'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Mail, Phone, Send, Instagram, MapPin, MessageCircle } from 'lucide-react';
import { brand } from '@/data/brand';

export default function ContactPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as 'fr' | 'en';
  const t = useTranslations();

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputClass =
    'w-full bg-transparent border border-sorel-black/8 px-4 py-4 text-sm text-sorel-black font-light placeholder:text-sorel-silver/40 focus:outline-none focus:border-sorel-black/30 transition-colors';

  const labelClass = 'sorel-label mb-3 block';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      setLoading(true);

      const res = await fetch('/api/contact', {
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

  return (
    <>
      <section className="pt-40 pb-0 bg-sorel-cream px-6 md:px-12 lg:px-20">
        <div className="sorel-container">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-px bg-sorel-champagne" />
            <p className="sorel-label">Contact</p>
          </div>

          <h1
            className="sorel-heading text-5xl md:text-7xl mb-4"
            style={{ letterSpacing: '-0.02em' }}
          >
            {t('contact.title')}
          </h1>

          <p className="text-sm text-sorel-silver font-light max-w-md">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      <section className="sorel-section bg-sorel-cream">
        <div className="sorel-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-20">
            <div className="lg:col-span-2">
              <div className="space-y-6 mb-16">
                {[
                  { icon: Mail, label: t('contact.email'), value: brand.email, href: `mailto:${brand.email}` },
                  { icon: Phone, label: t('contact.phone'), value: brand.phone, href: `tel:${brand.phoneRaw}` },
                  { icon: MessageCircle, label: 'WhatsApp', value: brand.whatsapp, href: `https://wa.me/${brand.whatsapp.replace('+', '')}` },
                  { icon: Instagram, label: 'Instagram', value: '@sorel.studio', href: brand.instagram },
                  { icon: MapPin, label: locale === 'fr' ? 'Adresse' : 'Address', value: '88 avenue des Ternes, 75017 Paris', href: '' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-5 py-4 border-b border-sorel-black/5 last:border-0">
                    <div className="w-10 h-10 rounded-full border border-sorel-black/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon size={15} className="text-sorel-champagne" />
                    </div>

                    <div>
                      <p className="sorel-label mb-1.5">{item.label}</p>

                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-sm text-sorel-graphite hover:text-sorel-black transition-colors font-light"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-sorel-graphite font-light">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-sorel-white border border-sorel-black/5 p-8">
                <p className="font-display text-lg font-light text-sorel-black mb-3">
                  {locale === 'fr' ? 'Disponibilites' : 'Availability'}
                </p>

                <p className="text-sm text-sorel-graphite font-light leading-[1.8]">
                  {locale === 'fr'
                    ? 'Nous répondons à toutes les demandes dans les 24 heures. Pour les mariages et événements, nous recommandons de nous contacter le plus tôt possible.'
                    : 'We respond to all inquiries within 24 hours. For weddings and events, we recommend contacting us as early as possible.'}
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              {submitted ? (
                <div className="py-20 text-center">
                  <div className="w-12 h-px bg-sorel-champagne mx-auto mb-8" />
                  <p className="font-display text-2xl font-light">
                    {t('contact.form.success')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    <div>
                      <label className={labelClass}>{t('contact.form.name')}</label>
                      <input name="name" type="text" className={inputClass} required />
                    </div>

                    <div>
                      <label className={labelClass}>{t('contact.form.email')}</label>
                      <input name="email" type="email" className={inputClass} required />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>{t('contact.form.phone')}</label>
                    <input name="phone" type="tel" className={inputClass} />
                  </div>

                  <div>
                    <label className={labelClass}>{t('contact.form.message')}</label>
                    <textarea
                      name="message"
                      className={`${inputClass} resize-none`}
                      rows={6}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="sorel-btn-primary w-full justify-center disabled:opacity-60"
                  >
                    {loading
                      ? locale === 'fr'
                        ? 'Envoi...'
                        : 'Sending...'
                      : t('contact.form.send')}
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
