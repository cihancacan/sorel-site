import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

type Locale = 'fr' | 'en';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale as Locale;
  return buildMetadata({
    title: locale === 'fr' ? 'CGV \u2014 SOREL' : 'Terms of Sale \u2014 SOREL',
    description: locale === 'fr' ? 'Conditions g\u00E9n\u00E9rales de vente de SOREL Photo & Film.' : 'Terms of sale for SOREL Photo & Film.',
    locale,
    path: `/${locale}/cgv`,
  });
}

export default function CGVPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const isFr = locale === 'fr';

  const sections = isFr ? [
    {
      title: 'Article 1 \u2013 Objet',
      content: 'Les pr\u00E9sentes Conditions G\u00E9n\u00E9rales de Vente (CGV) d\u00E9finissent les droits et obligations de Panorama Grup, exploitant la marque Sorel, et de ses clients dans le cadre de la vente de prestations de photographie et de vid\u00E9ographie.',
    },
    {
      title: 'Article 2 \u2013 Prestations',
      content: 'SOREL propose des prestations de photographie et de vid\u00E9ographie haut de gamme, incluant mais ne se limitant pas \u00E0 : couverture de mariages, \u00E9v\u00E9nements priv\u00E9s, \u00E9v\u00E9nements d\'entreprise, s\u00E9ances photo (couple, portrait, famille, touristique), demandes en mariage et contenu pour r\u00E9seaux sociaux. Les d\u00E9tails de chaque prestation sont d\u00E9finis dans le devis personnalis\u00E9.',
    },
    {
      title: 'Article 3 \u2013 Devis et commande',
      content: 'Toute prestation fait l\'objet d\'un devis pr\u00E9alable personnalis\u00E9. Le devis est valable 30 jours \u00E0 compter de sa date d\'\u00E9mission. La commande est consid\u00E9r\u00E9e comme d\u00E9finitive apr\u00E8s acceptation du devis par le client et r\u00E9ception de l\'acompte.',
    },
    {
      title: 'Article 4 \u2013 Tarifs et paiement',
      content: 'Les tarifs sont indiqu\u00E9s en euros TTC dans le devis. Un acompte de 30% du montant total est demand\u00E9 \u00E0 la signature du contrat pour confirmer la r\u00E9servation. Le solde est exigible au plus tard 7 jours avant la date de la prestation. Les paiements peuvent \u00EAtre effectu\u00E9s par virement bancaire ou tout autre moyen convenu entre les parties.',
    },
    {
      title: 'Article 5 \u2013 Annulation et report',
      content: 'En cas d\'annulation par le client plus de 30 jours avant la date de prestation, l\'acompte est rembours\u00E9 \u00E0 hauteur de 50%. En cas d\'annulation moins de 30 jours avant, l\'acompte est int\u00E9gralement retenu. En cas de report, la demande doit \u00EAtre formul\u00E9e au minimum 15 jours avant la date pr\u00E9vue, sous r\u00E9serve de disponibilit\u00E9. Un seul report est autoris\u00E9 par prestation.',
    },
    {
      title: 'Article 6 \u2013 Livraison',
      content: 'Les d\u00E9lais de livraison des fichiers finaux sont pr\u00E9cis\u00E9s dans le devis. \u00C0 titre indicatif : les photographies sont livr\u00E9es sous 3 \u00E0 6 semaines et les films sous 8 \u00E0 12 semaines apr\u00E8s la prestation. Les options express font l\'objet de d\u00E9lais sp\u00E9cifiques mentionn\u00E9s dans le devis.',
    },
    {
      title: 'Article 7 \u2013 Droit \u00E0 l\'image et propri\u00E9t\u00E9 intellectuelle',
      content: 'Les images et vid\u00E9os produites restent la propri\u00E9t\u00E9 intellectuelle de Panorama Grup / Sorel. Le client obtient un droit d\'utilisation personnel et non commercial des fichiers livr\u00E9s. Toute utilisation commerciale n\u00E9cessite un accord \u00E9crit pr\u00E9alable. SOREL se r\u00E9serve le droit d\'utiliser les images \u00E0 des fins de portfolio et de promotion, sauf opposition expresse du client.',
    },
    {
      title: 'Article 8 \u2013 Responsabilit\u00E9',
      content: 'Panorama Grup s\'engage \u00E0 r\u00E9aliser les prestations avec professionnalisme et diligence. En cas de force majeure (conditions m\u00E9t\u00E9orologiques extr\u00EAmes, maladie, \u00E9v\u00E9nement impr\u00E9visible), Panorama Grup proposera un report ou un remplacement par un professionnel de niveau \u00E9quivalent.',
    },
    {
      title: 'Article 9 \u2013 R\u00E9clamation',
      content: 'Toute r\u00E9clamation doit \u00EAtre adress\u00E9e par \u00E9crit \u00E0 contact@sorel.studio dans un d\u00E9lai de 14 jours suivant la livraison des fichiers.',
    },
    {
      title: 'Article 10 \u2013 Droit applicable',
      content: 'Les pr\u00E9sentes CGV sont soumises au droit fran\u00E7ais. Tout litige sera soumis aux tribunaux comp\u00E9tents de Paris, France.',
    },
  ] : [
    {
      title: 'Article 1 \u2013 Purpose',
      content: 'These Terms of Sale define the rights and obligations of Panorama Grup, operating under the Sorel brand, and its clients in the context of selling photography and videography services.',
    },
    {
      title: 'Article 2 \u2013 Services',
      content: 'SOREL offers high-end photography and videography services, including but not limited to: wedding coverage, private events, corporate events, photo sessions (couple, portrait, family, tourist), proposals, and social media content. The details of each service are defined in the personalized quote.',
    },
    {
      title: 'Article 3 \u2013 Quotes and Orders',
      content: 'All services are subject to a prior personalized quote. The quote is valid for 30 days from its date of issue. The order is considered final after the client accepts the quote and the deposit is received.',
    },
    {
      title: 'Article 4 \u2013 Pricing and Payment',
      content: 'Prices are indicated in euros including all taxes in the quote. A deposit of 30% of the total amount is required upon signing the contract to confirm the booking. The balance is due no later than 7 days before the service date. Payments can be made by bank transfer or any other means agreed between the parties.',
    },
    {
      title: 'Article 5 \u2013 Cancellation and Rescheduling',
      content: 'In case of cancellation by the client more than 30 days before the service date, the deposit is refunded at 50%. In case of cancellation less than 30 days before, the deposit is fully retained. In case of rescheduling, the request must be made at least 15 days before the scheduled date, subject to availability. Only one reschedule per service is permitted.',
    },
    {
      title: 'Article 6 \u2013 Delivery',
      content: 'Delivery timelines for final files are specified in the quote. As a guideline: photographs are delivered within 3 to 6 weeks and films within 8 to 12 weeks after the service. Express options have specific timelines mentioned in the quote.',
    },
    {
      title: 'Article 7 \u2013 Image Rights and Intellectual Property',
      content: 'Images and videos produced remain the intellectual property of Panorama Grup / Sorel. The client obtains a personal, non-commercial right of use for delivered files. Any commercial use requires prior written agreement. SOREL reserves the right to use images for portfolio and promotional purposes, unless expressly opposed by the client.',
    },
    {
      title: 'Article 8 \u2013 Liability',
      content: 'Panorama Grup commits to performing services with professionalism and diligence. In case of force majeure (extreme weather conditions, illness, unforeseeable event), Panorama Grup will propose a reschedule or replacement by a professional of equivalent level.',
    },
    {
      title: 'Article 9 \u2013 Claims',
      content: 'Any claim must be sent in writing to contact@sorel.studio within 14 days following delivery of the files.',
    },
    {
      title: 'Article 10 \u2013 Applicable Law',
      content: 'These Terms of Sale are subject to French law. Any dispute shall be submitted to the competent courts of Paris, France.',
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
            {isFr ? 'Conditions G\u00E9n\u00E9rales de Vente' : 'Terms of Sale'}
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
