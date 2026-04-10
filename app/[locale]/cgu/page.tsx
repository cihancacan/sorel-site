import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

type Locale = 'fr' | 'en';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale as Locale;
  return buildMetadata({
    title: locale === 'fr' ? 'CGU \u2014 SOREL' : 'Terms of Use \u2014 SOREL',
    description: locale === 'fr' ? 'Conditions g\u00E9n\u00E9rales d\'utilisation du site SOREL.' : 'Terms of use for SOREL website.',
    locale,
    path: `/${locale}/cgu`,
  });
}

export default function CGUPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const isFr = locale === 'fr';

  const sections = isFr ? [
    {
      title: 'Article 1 \u2013 Objet',
      content: 'Les pr\u00E9sentes Conditions G\u00E9n\u00E9rales d\'Utilisation (CGU) ont pour objet de d\u00E9finir les modalit\u00E9s d\'acc\u00E8s et d\'utilisation du site internet sorel.studio, \u00E9dit\u00E9 par Panorama Grup, exploitant la marque Sorel. L\'acc\u00E8s au site implique l\'acceptation sans r\u00E9serve des pr\u00E9sentes CGU.',
    },
    {
      title: 'Article 2 \u2013 Acc\u00E8s au site',
      content: 'Le site est accessible gratuitement depuis tout appareil disposant d\'un acc\u00E8s \u00E0 Internet. Panorama Grup se r\u00E9serve le droit de suspendre, limiter ou interrompre l\'acc\u00E8s au site \u00E0 tout moment, notamment pour des raisons de maintenance, sans pr\u00E9avis ni indemnit\u00E9.',
    },
    {
      title: 'Article 3 \u2013 Propri\u00E9t\u00E9 intellectuelle',
      content: 'L\'ensemble des \u00E9l\u00E9ments du site (textes, photographies, vid\u00E9os, logos, graphismes, ic\u00F4nes) est prot\u00E9g\u00E9 par les lois fran\u00E7aises et internationales relatives \u00E0 la propri\u00E9t\u00E9 intellectuelle. Toute reproduction, repr\u00E9sentation, modification ou exploitation non autoris\u00E9e est strictement interdite et constitue une contrefa\u00E7on.',
    },
    {
      title: 'Article 4 \u2013 Donn\u00E9es personnelles',
      content: 'Panorama Grup collecte des donn\u00E9es personnelles uniquement dans le cadre de demandes de devis et de contact via les formulaires du site. Ces donn\u00E9es sont trait\u00E9es conform\u00E9ment au R\u00E8glement G\u00E9n\u00E9ral sur la Protection des Donn\u00E9es (RGPD). Aucune donn\u00E9e n\'est transmise \u00E0 des tiers sans consentement. Vous pouvez exercer vos droits d\'acc\u00E8s, de rectification et de suppression en contactant contact@sorel.studio.',
    },
    {
      title: 'Article 5 \u2013 Cookies',
      content: 'Le site utilise des cookies n\u00E9cessaires au bon fonctionnement du site et \u00E0 l\'am\u00E9lioration de l\'exp\u00E9rience utilisateur. Aucun cookie publicitaire ou de suivi \u00E0 des fins commerciales n\'est d\u00E9pos\u00E9. L\'utilisateur peut configurer son navigateur pour refuser les cookies.',
    },
    {
      title: 'Article 6 \u2013 Responsabilit\u00E9',
      content: 'Panorama Grup s\'efforce de fournir des informations exactes et \u00E0 jour sur le site. Toutefois, elle ne saurait \u00EAtre tenue responsable des erreurs, omissions ou r\u00E9sultats obtenus par un mauvais usage de ces informations. L\'utilisateur est seul responsable de l\'utilisation qu\'il fait du site.',
    },
    {
      title: 'Article 7 \u2013 Liens externes',
      content: 'Le site peut contenir des liens vers des sites tiers. Panorama Grup n\'exerce aucun contr\u00F4le sur le contenu de ces sites et d\u00E9cline toute responsabilit\u00E9 quant \u00E0 leur contenu ou \u00E0 leurs pratiques en mati\u00E8re de protection des donn\u00E9es.',
    },
    {
      title: 'Article 8 \u2013 Droit applicable',
      content: 'Les pr\u00E9sentes CGU sont soumises au droit fran\u00E7ais. Tout litige relatif \u00E0 leur interpr\u00E9tation ou \u00E0 leur ex\u00E9cution rel\u00E8ve de la comp\u00E9tence exclusive des tribunaux de Paris, France.',
    },
  ] : [
    {
      title: 'Article 1 \u2013 Purpose',
      content: 'These Terms of Use define the conditions of access and use of the website sorel.studio, published by Panorama Grup, operating under the Sorel brand. Accessing the site implies unreserved acceptance of these Terms.',
    },
    {
      title: 'Article 2 \u2013 Access',
      content: 'The site is freely accessible from any device with Internet access. Panorama Grup reserves the right to suspend, limit, or interrupt access to the site at any time, particularly for maintenance purposes, without notice or compensation.',
    },
    {
      title: 'Article 3 \u2013 Intellectual Property',
      content: 'All elements of the site (texts, photographs, videos, logos, graphics, icons) are protected by French and international intellectual property laws. Any unauthorized reproduction, representation, modification, or exploitation is strictly prohibited and constitutes infringement.',
    },
    {
      title: 'Article 4 \u2013 Personal Data',
      content: 'Panorama Grup collects personal data solely within the scope of quote requests and contact through the site forms. This data is processed in accordance with the General Data Protection Regulation (GDPR). No data is transmitted to third parties without consent. You can exercise your rights of access, rectification, and deletion by contacting contact@sorel.studio.',
    },
    {
      title: 'Article 5 \u2013 Cookies',
      content: 'The site uses cookies necessary for proper site operation and improving user experience. No advertising or commercial tracking cookies are deposited. Users can configure their browser to refuse cookies.',
    },
    {
      title: 'Article 6 \u2013 Liability',
      content: 'Panorama Grup endeavors to provide accurate and up-to-date information on the site. However, it cannot be held responsible for errors, omissions, or results obtained through misuse of this information. The user is solely responsible for the use they make of the site.',
    },
    {
      title: 'Article 7 \u2013 External Links',
      content: 'The site may contain links to third-party sites. Panorama Grup exercises no control over the content of these sites and declines all responsibility for their content or their data protection practices.',
    },
    {
      title: 'Article 8 \u2013 Applicable Law',
      content: 'These Terms of Use are subject to French law. Any dispute relating to their interpretation or execution falls under the exclusive jurisdiction of the courts of Paris, France.',
    },
  ];

  return (
    <>
      <section className="pt-40 pb-0 bg-sorel-cream px-6 md:px-12 lg:px-20">
        <div className="sorel-container">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-px bg-sorel-champagne" />
            <p className="sorel-label">{isFr ? 'Legal' : 'Legal'}</p>
          </div>
          <h1 className="sorel-heading text-5xl md:text-7xl mb-4" style={{ letterSpacing: '-0.02em' }}>
            {isFr ? 'Conditions G\u00E9n\u00E9rales d\'Utilisation' : 'Terms of Use'}
          </h1>
          <p className="text-sm text-sorel-silver font-light">
            {isFr ? 'Derni\u00E8re mise \u00E0 jour : Avril 2026' : 'Last updated: April 2026'}
          </p>
        </div>
      </section>

      <section className="sorel-section bg-sorel-cream">
        <div className="sorel-container max-w-3xl">
          <div className="space-y-10">
            {sections.map((section, i) => (
              <div key={i}>
                <h2 className="font-display text-xl font-light text-sorel-black mb-4">{section.title}</h2>
                <p className="text-sm text-sorel-graphite font-light leading-[1.9]">{section.content}</p>
                {i < sections.length - 1 && <div className="w-full h-px bg-sorel-black/5 mt-10" />}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
