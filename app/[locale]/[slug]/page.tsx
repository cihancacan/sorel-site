import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { parseSlug } from '@/lib/utils';
import { buildMetadata, buildServiceCityMetadata } from '@/lib/seo';
import { servicesFr, getServiceBySlug as getFrService } from '@/data/services.fr';
import { servicesEn, getServiceBySlug as getEnService } from '@/data/services.en';
import { cities, getCityBySlug } from '@/data/cities';
import { faqsFr, faqsServiceFr } from '@/data/faqs.fr';
import { faqsEn, faqsServiceEn } from '@/data/faqs.en';
import { generateServiceSeoFr, generateServiceSeoEn, generateCitySeoFr, generateCitySeoEn } from '@/data/seo-content';
import CityServiceHero from '@/components/city-service-hero';
import ServiceCard from '@/components/service-card';
import FaqSection from '@/components/faq-section';
import CtaSection from '@/components/cta-section';
import PremiumOptions from '@/components/premium-options';
import { getMessages, createTranslator } from '@/lib/i18n';

type Locale = 'fr' | 'en';

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];

  for (const service of servicesFr) {
    params.push({ locale: 'fr', slug: service.slug });
    for (const city of cities) {
      params.push({ locale: 'fr', slug: `${service.slug}-${city.slug}` });
    }
  }
  for (const service of servicesEn) {
    params.push({ locale: 'en', slug: service.slug });
    for (const city of cities) {
      params.push({ locale: 'en', slug: `${service.slug}-${city.slug}` });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const locale = params.locale as Locale;
  const parsed = parseSlug(params.slug, locale);

  if (parsed.type === 'service') {
    const service = locale === 'fr' ? getFrService(parsed.serviceSlug) : getEnService(parsed.serviceSlug);
    if (!service) return {};
    return buildMetadata({
      title: service.title,
      description: service.description,
      locale,
      path: `/${locale}/${params.slug}`,
    });
  }

  if (parsed.type === 'service-city') {
    const service = locale === 'fr' ? getFrService(parsed.serviceSlug) : getEnService(parsed.serviceSlug);
    const city = getCityBySlug(parsed.citySlug);
    if (!service || !city) return {};
    return buildServiceCityMetadata(service.title, city.name, locale, parsed.serviceSlug, parsed.citySlug);
  }

  return {};
}

export default function SlugPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const locale = params.locale as Locale;
  const parsed = parseSlug(params.slug, locale);
  const t = createTranslator(getMessages(locale));

  if (parsed.type === 'unknown') {
    notFound();
  }

  if (parsed.type === 'service') {
    const service = locale === 'fr' ? getFrService(parsed.serviceSlug) : getEnService(parsed.serviceSlug);
    if (!service) notFound();

    const seo = locale === 'fr' ? generateServiceSeoFr(service!) : generateServiceSeoEn(service!);
    const relatedServices = (locale === 'fr' ? servicesFr : servicesEn)
      .filter((s) => s.slug !== service!.slug && s.category === service!.category)
      .slice(0, 3);
    const baseFaqs = locale === 'fr' ? faqsServiceFr : faqsServiceEn;
    const faqs = [
      ...seo.faq.map((f) => ({ question: f.q, answer: f.a })),
      ...baseFaqs,
      ...(locale === 'fr' ? faqsFr : faqsEn).slice(0, 2),
    ];
    const allCities = cities.slice(0, 20);

    return (
      <>
        <section className="relative pt-40 pb-20 bg-sorel-black overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=1600)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sorel-black/30 to-sorel-black" />
          <div className="sorel-container px-6 md:px-12 lg:px-20 relative z-10">
            <p className="sorel-label text-sorel-champagne mb-6">{locale === 'fr' ? 'Prestation' : 'Service'}</p>
            <h1 className="font-display text-5xl md:text-7xl font-light text-sorel-cream leading-tight mb-6 max-w-3xl">
              {service!.title}
            </h1>
            <p className="font-display text-xl italic text-sorel-cream/70 font-light max-w-lg">
              {service!.heroLine}
            </p>
          </div>
        </section>

        <section className="sorel-section bg-sorel-cream">
          <div className="sorel-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <p className="sorel-label mb-6">{locale === 'fr' ? 'La Prestation' : 'The Service'}</p>
                <div className="sorel-divider mb-8" />
                <h2 className="sorel-heading text-4xl mb-6">{locale === 'fr' ? 'Ce que nous proposons' : 'What we offer'}</h2>
                <p className="text-sm text-sorel-graphite font-light leading-[2] mb-6">{service!.description}</p>
                <p className="text-sm text-sorel-graphite font-light leading-[2]">{seo.intro}</p>
              </div>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt={service!.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="sorel-section bg-sorel-white">
          <div className="sorel-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <p className="sorel-label mb-6">{locale === 'fr' ? 'Notre processus' : 'Our process'}</p>
                <div className="sorel-divider mb-8" />
                <h2 className="sorel-heading text-4xl mb-6">{locale === 'fr' ? 'Comment ca fonctionne' : 'How it works'}</h2>
                <p className="text-sm text-sorel-graphite font-light leading-[2]">{seo.process}</p>
              </div>
              <div>
                <p className="sorel-label mb-6">{locale === 'fr' ? 'Notre diff\u00E9rence' : 'Our difference'}</p>
                <div className="sorel-divider mb-8" />
                <h2 className="sorel-heading text-4xl mb-6">{locale === 'fr' ? 'Pourquoi SOREL ?' : 'Why SOREL?'}</h2>
                <p className="text-sm text-sorel-graphite font-light leading-[2]">{seo.whyUs}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="sorel-section bg-sorel-cream">
          <div className="sorel-container">
            <p className="sorel-label mb-6">{locale === 'fr' ? 'Les 3 piliers' : 'The 3 pillars'}</p>
            <div className="sorel-divider mb-8" />
            <h2 className="sorel-heading text-4xl mb-12">{locale === 'fr' ? 'La signature SOREL' : 'The SOREL signature'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { titleFr: 'Signature visuelle', titleEn: 'Visual signature', bodyFr: 'La m\u00EAme esth\u00E9tique, le m\u00EAme niveau d\'exigence, quel que soit le talent mobilis\u00E9. Chaque image porte l\'ADN visuel SOREL.', bodyEn: 'The same aesthetic, the same level of excellence, regardless of which talent is assigned. Every image carries the SOREL visual DNA.' },
                { titleFr: 'Restitution fid\u00E8le', titleEn: 'Faithful rendering', bodyFr: 'Nous capturons l\'instant comme vous l\'avez v\u00E9cu, pas comme nous voulons qu\'il soit. L\'\u00E9motion authentique, sans artifice.', bodyEn: 'We capture the moment as you truly lived it, not as we want it to be. Authentic emotion, without artifice.' },
                { titleFr: 'Options premium', titleEn: 'Premium options', bodyFr: 'Livraison express, teaser vid\u00E9o, impressions sur place, albums artisanaux, portraits premium. Un service complet et haut de gamme.', bodyEn: 'Express delivery, video teaser, on-site printing, artisan albums, premium portraits. A complete, high-end service.' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="sorel-divider mb-6" />
                  <h3 className="font-display text-xl font-light text-sorel-black mb-4">{locale === 'fr' ? item.titleFr : item.titleEn}</h3>
                  <p className="text-sm text-sorel-graphite font-light leading-relaxed">{locale === 'fr' ? item.bodyFr : item.bodyEn}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PremiumOptions
          locale={locale}
          title={t('options.title')}
          subtitle={t('options.subtitle')}
          items={{
            express: { title: t('options.items.express.title'), desc: t('options.items.express.desc') },
            teaser: { title: t('options.items.teaser.title'), desc: t('options.items.teaser.desc') },
            print: { title: t('options.items.print.title'), desc: t('options.items.print.desc') },
            frames: { title: t('options.items.frames.title'), desc: t('options.items.frames.desc') },
            guests: { title: t('options.items.guests.title'), desc: t('options.items.guests.desc') },
            album: { title: t('options.items.album.title'), desc: t('options.items.album.desc') },
          }}
        />

        <section className="sorel-section bg-sorel-white">
          <div className="sorel-container">
            <p className="sorel-label mb-6">{locale === 'fr' ? 'Nos villes' : 'Our cities'}</p>
            <div className="sorel-divider mb-8" />
            <h2 className="sorel-heading text-3xl mb-10">
              {locale === 'fr' ? `${service!.title} dans votre ville` : `${service!.title} in your city`}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {allCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${locale}/${service!.slug}-${city.slug}`}
                  className="text-sm text-sorel-graphite font-light py-3 px-4 border border-sorel-black/5 hover:border-sorel-champagne/30 hover:bg-sorel-cream transition-all duration-300 text-center"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {relatedServices.length > 0 && (
          <section className="sorel-section bg-sorel-cream">
            <div className="sorel-container">
              <p className="sorel-label mb-6">{locale === 'fr' ? 'Voir aussi' : 'See also'}</p>
              <div className="sorel-divider mb-8" />
              <h2 className="sorel-heading text-3xl mb-10">{locale === 'fr' ? 'Prestations associ\u00E9es' : 'Related services'}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedServices.map((s) => (
                  <ServiceCard
                    key={s.slug}
                    slug={s.slug}
                    title={s.title}
                    description={s.description}
                    heroLine={s.heroLine}
                    type={s.type}
                    locale={locale}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        <FaqSection
          title={t('faq.title')}
          subtitle={t('faq.subtitle')}
          faqs={faqs}
        />

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

  if (parsed.type === 'service-city') {
    const service = locale === 'fr' ? getFrService(parsed.serviceSlug) : getEnService(parsed.serviceSlug);
    const city = getCityBySlug(parsed.citySlug);
    if (!service || !city) notFound();

    const citySeo = locale === 'fr' ? generateCitySeoFr(service!, city!) : generateCitySeoEn(service!, city!);
    const serviceSeo = locale === 'fr' ? generateServiceSeoFr(service!) : generateServiceSeoEn(service!);
    const baseFaqs = locale === 'fr' ? faqsFr.slice(0, 3) : faqsEn.slice(0, 3);
    const faqs = [
      ...serviceSeo.faq.map((f) => ({ question: f.q, answer: f.a })),
      ...baseFaqs,
    ];
    const relatedServices = (locale === 'fr' ? servicesFr : servicesEn)
      .filter((s) => s.category === service!.category && s.slug !== service!.slug)
      .slice(0, 3);
    const nearbyCities = cities.filter((c) => c.region === city!.region && c.slug !== city!.slug).slice(0, 12);

    return (
      <>
        <CityServiceHero
          locale={locale}
          serviceTitle={service!.title}
          serviceHeroLine={service!.heroLine}
          city={city!}
        />

        <section className="sorel-section bg-sorel-cream">
          <div className="sorel-container">
            <div className="max-w-3xl">
              <p className="sorel-label mb-6">{city!.name}</p>
              <div className="sorel-divider mb-8" />
              <h2 className="sorel-heading text-4xl mb-6">
                {locale === 'fr'
                  ? `${service!.title} \u00E0 ${city!.name}`
                  : `${service!.title} in ${city!.name}`}
              </h2>
              <p className="text-sm text-sorel-graphite font-light leading-[2] mb-8">{citySeo.intro}</p>
              <h3 className="font-display text-2xl font-light mb-4">
                {locale === 'fr' ? `Expertise locale \u00E0 ${city!.name}` : `Local expertise in ${city!.name}`}
              </h3>
              <p className="text-sm text-sorel-graphite font-light leading-[2]">{citySeo.local}</p>
            </div>
          </div>
        </section>

        <section className="sorel-section bg-sorel-white">
          <div className="sorel-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <p className="sorel-label mb-6">{locale === 'fr' ? 'Pourquoi SOREL' : 'Why SOREL'}</p>
                <div className="sorel-divider mb-8" />
                <h2 className="sorel-heading text-4xl mb-6">
                  {locale === 'fr' ? `SOREL \u00E0 ${city!.name}` : `SOREL in ${city!.name}`}
                </h2>
                <p className="text-sm text-sorel-graphite font-light leading-[2] mb-8">{citySeo.advantages}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { labelFr: 'Pr\u00E9sence locale', labelEn: 'Local presence', bodyFr: `Nous op\u00E9rons \u00E0 ${city!.name} et connaissons les meilleurs lieux, lumi\u00E8res et contextes pour sublimer votre \u00E9v\u00E9nement.`, bodyEn: `We operate in ${city!.name} and know the best venues, lighting conditions, and contexts to elevate your event.` },
                    { labelFr: 'Signature coh\u00E9rente', labelEn: 'Consistent signature', bodyFr: 'La signature SOREL ne change pas selon la ville. Vous avez la certitude d\'un rendu homog\u00E8ne et premium.', bodyEn: 'The SOREL signature does not change by city. You have the assurance of consistent, premium output.' },
                    { labelFr: 'Disponibilit\u00E9', labelEn: 'Availability', bodyFr: 'V\u00E9rifiez les disponibilit\u00E9s aupr\u00E8s de notre \u00E9quipe pour garantir votre acc\u00E8s \u00E0 la signature SOREL.', bodyEn: 'Check availability with our team to secure access to the SOREL signature.' },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="sorel-divider mb-6" />
                      <h3 className="font-display text-xl font-light text-sorel-black mb-4">{locale === 'fr' ? item.labelFr : item.labelEn}</h3>
                      <p className="text-sm text-sorel-graphite font-light leading-relaxed">{locale === 'fr' ? item.bodyFr : item.bodyEn}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="sorel-label mb-6">{locale === 'fr' ? 'Zone d\'intervention' : 'Coverage area'}</p>
                <div className="sorel-divider mb-8" />
                <h2 className="sorel-heading text-4xl mb-6">
                  {locale === 'fr' ? `Villes proches de ${city!.name}` : `Cities near ${city!.name}`}
                </h2>
                <p className="text-sm text-sorel-graphite font-light leading-[2] mb-8">{citySeo.nearby}</p>
                {nearbyCities.length > 0 && (
                  <div className="grid grid-cols-2 gap-2">
                    {nearbyCities.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/${locale}/${service!.slug}-${c.slug}`}
                        className="text-sm text-sorel-graphite font-light py-3 px-4 border border-sorel-black/5 hover:border-sorel-champagne/30 hover:bg-sorel-cream transition-all duration-300 inline-flex items-center justify-between"
                      >
                        {c.name}
                        <ArrowRight size={12} className="text-sorel-silver/30" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <PremiumOptions
          locale={locale}
          title={t('options.title')}
          subtitle={t('options.subtitle')}
          items={{
            express: { title: t('options.items.express.title'), desc: t('options.items.express.desc') },
            teaser: { title: t('options.items.teaser.title'), desc: t('options.items.teaser.desc') },
            print: { title: t('options.items.print.title'), desc: t('options.items.print.desc') },
            frames: { title: t('options.items.frames.title'), desc: t('options.items.frames.desc') },
            guests: { title: t('options.items.guests.title'), desc: t('options.items.guests.desc') },
            album: { title: t('options.items.album.title'), desc: t('options.items.album.desc') },
          }}
        />

        {relatedServices.length > 0 && (
          <section className="sorel-section bg-sorel-cream">
            <div className="sorel-container">
              <p className="sorel-label mb-6">{locale === 'fr' ? 'Voir aussi' : 'See also'}</p>
              <div className="sorel-divider mb-8" />
              <h2 className="sorel-heading text-3xl mb-10">
                {locale === 'fr' ? `Autres prestations \u00E0 ${city!.name}` : `Other services in ${city!.name}`}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedServices.map((s) => (
                  <ServiceCard
                    key={s.slug}
                    slug={`${s.slug}-${city!.slug}`}
                    title={locale === 'fr' ? `${s.title} ${city!.name}` : `${s.title} ${city!.name}`}
                    description={s.description}
                    heroLine={s.heroLine}
                    type={s.type}
                    locale={locale}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        <FaqSection
          title={t('faq.title')}
          subtitle={t('faq.subtitle')}
          faqs={faqs}
        />

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

  notFound();
}
