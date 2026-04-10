import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import Link from 'next/link';

type Locale = 'fr' | 'en';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale as Locale;
  return buildMetadata({
    title: locale === 'fr' ? 'Mentions L\u00E9gales \u2014 SOREL' : 'Legal Notice \u2014 SOREL',
    description: locale === 'fr' ? 'Mentions l\u00E9gales du site SOREL Photo & Film.' : 'Legal notice for SOREL Photo & Film website.',
    locale,
    path: `/${locale}/mentions-legales`,
  });
}

export default function MentionsLegalesPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const isFr = locale === 'fr';

  return (
    <>
      <section className="pt-40 pb-0 bg-sorel-cream px-6 md:px-12 lg:px-20">
        <div className="sorel-container">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-px bg-sorel-champagne" />
            <p className="sorel-label">{isFr ? 'Legal' : 'Legal'}</p>
          </div>
          <h1 className="sorel-heading text-5xl md:text-7xl mb-4" style={{ letterSpacing: '-0.02em' }}>
            {isFr ? 'Mentions L\u00E9gales' : 'Legal Notice'}
          </h1>
        </div>
      </section>

      <section className="sorel-section bg-sorel-cream">
        <div className="sorel-container max-w-3xl">
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-2xl font-light text-sorel-black mb-4">
                {isFr ? '\u00C9diteur du site' : 'Website Publisher'}
              </h2>
              <div className="space-y-2 text-sm text-sorel-graphite font-light leading-[1.9]">
                <p><strong className="font-medium text-sorel-black">D\u00E9nomination sociale :</strong> Panorama Grup</p>
                <p><strong className="font-medium text-sorel-black">Marque exploit\u00E9e :</strong> Sorel</p>
                <p><strong className="font-medium text-sorel-black">Si\u00E8ge social :</strong> 88 avenue des Ternes, 75017 Paris, France</p>
                <p><strong className="font-medium text-sorel-black">SIRET :</strong> 80962988400036</p>
                <p><strong className="font-medium text-sorel-black">Num\u00E9ro de TVA intracommunautaire :</strong> FR61809629884</p>
                <p><strong className="font-medium text-sorel-black">Repr\u00E9sentant l\u00E9gal :</strong> Cihan Cacan, Pr\u00E9sident</p>
                <p><strong className="font-medium text-sorel-black">Email :</strong> contact@sorel.studio</p>
                <p><strong className="font-medium text-sorel-black">T\u00E9l\u00E9phone :</strong> 01 88 84 22 22</p>
              </div>
            </div>

            <div className="w-full h-px bg-sorel-black/5" />

            <div>
              <h2 className="font-display text-2xl font-light text-sorel-black mb-4">
                {isFr ? 'H\u00E9bergeur' : 'Hosting Provider'}
              </h2>
              <div className="space-y-2 text-sm text-sorel-graphite font-light leading-[1.9]">
                <p><strong className="font-medium text-sorel-black">Raison sociale :</strong> Vercel Inc.</p>
                <p><strong className="font-medium text-sorel-black">Si\u00E8ge social :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, \u00C9tats-Unis</p>
                <p><strong className="font-medium text-sorel-black">Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-sorel-black underline underline-offset-4 hover:text-sorel-champagne transition-colors">vercel.com</a></p>
              </div>
            </div>

            <div className="w-full h-px bg-sorel-black/5" />

            <div>
              <h2 className="font-display text-2xl font-light text-sorel-black mb-4">
                {isFr ? 'Propri\u00E9t\u00E9 intellectuelle' : 'Intellectual Property'}
              </h2>
              <p className="text-sm text-sorel-graphite font-light leading-[1.9]">
                {isFr
                  ? 'L\'ensemble du contenu de ce site (textes, images, vid\u00E9os, logos, ic\u00F4nes) est la propri\u00E9t\u00E9 exclusive de Panorama Grup exploitant la marque Sorel, sauf mention contraire. Toute reproduction, distribution, modification ou utilisation de ce contenu sans autorisation pr\u00E9alable est strictement interdite.'
                  : 'All content on this website (texts, images, videos, logos, icons) is the exclusive property of Panorama Grup operating under the Sorel brand, unless otherwise stated. Any reproduction, distribution, modification, or use of this content without prior authorization is strictly prohibited.'}
              </p>
            </div>

            <div className="w-full h-px bg-sorel-black/5" />

            <div>
              <h2 className="font-display text-2xl font-light text-sorel-black mb-4">
                {isFr ? 'Donn\u00E9es personnelles' : 'Personal Data'}
              </h2>
              <p className="text-sm text-sorel-graphite font-light leading-[1.9]">
                {isFr
                  ? 'Les informations collect\u00E9es via les formulaires de ce site sont destin\u00E9es exclusivement \u00E0 Panorama Grup pour le traitement de votre demande. Conform\u00E9ment au R\u00E8glement G\u00E9n\u00E9ral sur la Protection des Donn\u00E9es (RGPD), vous disposez d\'un droit d\'acc\u00E8s, de rectification et de suppression de vos donn\u00E9es personnelles. Pour exercer ces droits, contactez-nous \u00E0 contact@sorel.studio.'
                  : 'Information collected through forms on this website is intended exclusively for Panorama Grup for processing your request. In accordance with the General Data Protection Regulation (GDPR), you have the right to access, rectify, and delete your personal data. To exercise these rights, contact us at contact@sorel.studio.'}
              </p>
            </div>

            <div className="w-full h-px bg-sorel-black/5" />

            <div>
              <h2 className="font-display text-2xl font-light text-sorel-black mb-4">
                Cookies
              </h2>
              <p className="text-sm text-sorel-graphite font-light leading-[1.9]">
                {isFr
                  ? 'Ce site utilise des cookies pour am\u00E9liorer votre exp\u00E9rience de navigation. Vous pouvez configurer votre navigateur pour refuser les cookies. Aucun cookie de suivi publicitaire n\'est utilis\u00E9 sur ce site.'
                  : 'This website uses cookies to improve your browsing experience. You can configure your browser to refuse cookies. No advertising tracking cookies are used on this site.'}
              </p>
            </div>

            <div className="w-full h-px bg-sorel-black/5" />

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={`/${locale}/cgu`} className="sorel-btn-outline">
                {isFr ? 'Conditions G\u00E9n\u00E9rales d\'Utilisation' : 'Terms of Use'}
              </Link>
              <Link href={`/${locale}/cgv`} className="sorel-btn-outline">
                {isFr ? 'Conditions G\u00E9n\u00E9rales de Vente' : 'Terms of Sale'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
