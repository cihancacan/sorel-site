import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Phone,
  Camera,
  Film,
  Gem,
  HeartHandshake,
  Clock3,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { brand } from '@/data/brand';

type Locale = 'fr' | 'en';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale as Locale;

  if (locale === 'fr') {
    return buildMetadata({
      title: 'Photographe & Vidéaste Premium en France | SOREL Studio',
      description:
        'Photographe et vidéaste premium pour mariage, événements privés et corporate en France. Basé à Paris, SOREL Studio propose photo, vidéo et duo avec réponse sous 24h.',
      locale,
      path: '/fr',
    });
  }

  return buildMetadata({
    title: 'Premium Photographer & Videographer in France | SOREL Studio',
    description:
      'Premium photographer and videographer for weddings, private events and corporate projects in France. Based in Paris, SOREL Studio offers photo, video and duo coverage with reply within 24h.',
    locale,
    path: '/en',
  });
}

export default function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale as Locale;
  const isFr = locale === 'fr';

  const t = {
    heroLabel: isFr ? 'Photo & Film Premium' : 'Premium Photo & Film',
    heroTitle: isFr
      ? 'Photographe & Vidéaste Premium en France'
      : 'Premium Photographer & Videographer in France',
    heroText: isFr
      ? 'Mariage, événements privés, entreprise, contenus haut de gamme : SOREL Studio crée des images élégantes, fortes et intemporelles. Basé à Paris, disponible dans toute la France.'
      : 'Wedding, private events, corporate coverage and premium visual content: SOREL Studio creates elegant, powerful and timeless imagery. Based in Paris, available throughout France.',
    heroPrimary: isFr ? 'Vérifier la disponibilité' : 'Check availability',
    heroSecondary: isFr ? 'Voir les réalisations' : 'View portfolio',

    introTitle: isFr
      ? 'Une maison d’image pensée pour vendre, marquer et durer'
      : 'An image house built to sell, impress and last',
    introText1: isFr
      ? 'SOREL Studio accompagne les couples, les particuliers, les marques et les entreprises qui recherchent plus qu’une simple prestation photo ou vidéo. Chaque projet est pensé avec une direction visuelle cohérente, une exécution fluide et un rendu premium.'
      : 'SOREL Studio works with couples, individuals, brands and companies looking for more than a simple photo or video service. Each project is crafted with coherent visual direction, fluid execution and a premium result.',
    introText2: isFr
      ? 'L’objectif n’est pas seulement de produire de belles images, mais de créer un souvenir fort, une présence visuelle juste et une expérience haut de gamme du premier échange à la livraison.'
      : 'The goal is not only to create beautiful imagery, but to deliver a strong memory, a precise visual presence and a high-end experience from the first exchange to the final delivery.',

    offerTitle: isFr ? 'Choisissez votre univers' : 'Choose your world',
    offerText: isFr
      ? 'Trois entrées principales pour répondre vite à l’intention du visiteur et orienter vers la bonne page de vente.'
      : 'Three main entry points to quickly answer user intent and direct them to the right sales page.',

    weddingTitle: isFr ? 'Mariage' : 'Wedding',
    weddingText: isFr
      ? 'Photo, vidéo ou formule complète pour raconter votre mariage avec élégance, émotion et cohérence.'
      : 'Photo, video or full coverage to tell your wedding story with elegance, emotion and coherence.',
    weddingCta: isFr
      ? 'Découvrir les offres mariage'
      : 'Discover wedding collections',

    photoTitle: isFr ? 'Photographe Mariage' : 'Wedding Photography',
    photoText: isFr
      ? 'Un reportage photo haut de gamme, naturel et intemporel pour préserver les moments les plus forts.'
      : 'A high-end, natural and timeless wedding photo report to preserve the strongest moments.',
    photoCta: isFr ? 'Voir la page photographe' : 'See photographer page',

    videoTitle: isFr ? 'Vidéaste Mariage' : 'Wedding Videography',
    videoText: isFr
      ? 'Un film vivant, fluide et émotionnel pour revivre l’ambiance réelle de votre journée.'
      : 'A vivid, fluid and emotional film to relive the real atmosphere of your day.',
    videoCta: isFr ? 'Voir la page vidéaste' : 'See videographer page',

    servicesTitle: isFr
      ? 'Ce que SOREL Studio couvre'
      : 'What SOREL Studio covers',
    servicesText: isFr
      ? 'Une approche premium pour les mariages, les événements privés, les projets corporate et les productions visuelles exigeantes.'
      : 'A premium approach for weddings, private events, corporate projects and demanding visual productions.',

    pricingTitle: isFr ? 'Repères de collections' : 'Collection markers',
    pricingText: isFr
      ? 'Des prix de départ clairs pour rassurer, qualifier et aider à la prise de décision.'
      : 'Clear starting prices to reassure, qualify and help decision-making.',

    whyTitle: isFr
      ? 'Pourquoi les clients choisissent SOREL'
      : 'Why clients choose SOREL',
    whyText: isFr
      ? 'Au-delà de l’image premium, ce qui fait la différence est la fluidité, la cohérence et la capacité à répondre vite.'
      : 'Beyond premium imagery, what makes the difference is fluidity, consistency and the ability to reply fast.',

    portfolioTitle: isFr
      ? 'Un aperçu du niveau SOREL'
      : 'A glimpse of the SOREL level',
    portfolioText: isFr
      ? 'Des images pensées pour donner envie, rassurer et faire comprendre immédiatement le niveau de rendu.'
      : 'Imagery designed to create desire, reassure and instantly show the level of finish.',

    processTitle: isFr ? 'Comment ça fonctionne' : 'How it works',
    processText: isFr
      ? 'Un parcours simple, rapide et premium pour transformer une visite en vrai échange.'
      : 'A simple, fast and premium process turning a visit into a real conversation.',

    seoTitle1: isFr
      ? 'Photographe et vidéaste premium en France'
      : 'Premium photographer and videographer in France',
    seoText1: isFr
      ? 'SOREL Studio accompagne les couples, les particuliers, les entreprises et les marques en France pour des prestations photo et vidéo haut de gamme. Basé à Paris, le studio intervient dans toute la France selon la nature du projet, avec une approche élégante, fluide et cohérente.'
      : 'SOREL Studio works with couples, individuals, companies and brands in France for high-end photo and video services. Based in Paris, the studio operates throughout France depending on the nature of the project, with an elegant, fluid and coherent approach.',
    seoTitle2: isFr
      ? 'Prix photographe et vidéaste : comment choisir ?'
      : 'Photographer and videographer pricing: how to choose?',
    seoText2: isFr
      ? 'Le prix d’un photographe ou d’un vidéaste dépend du type de projet, du temps de présence, du niveau de couverture, du nombre de livrables et du rendu attendu. SOREL Studio propose des repères de collections clairs pour aider à mieux comprendre les niveaux de prestation et orienter rapidement vers la bonne formule.'
      : 'The price of a photographer or videographer depends on the type of project, hours of presence, level of coverage, number of deliverables and expected finish. SOREL Studio offers clear collection markers to help understand service levels and quickly orient users toward the right package.',

    faqTitle: isFr ? 'Questions fréquentes' : 'Frequently asked questions',

    finalTitle: isFr ? 'Parlez-nous de votre projet' : 'Tell us about your project',
    finalText: isFr
      ? 'Mariage, shooting personnel, événement privé, entreprise ou production visuelle : indiquez-nous votre date, votre lieu et votre besoin. Nous vous répondons sous 24h.'
      : 'Wedding, personal shooting, private event, corporate or visual production: tell us your date, your location and your need. We reply within 24h.',
    finalPrimary: isFr ? 'Vérifier la disponibilité' : 'Check availability',
    finalSecondary: isFr ? 'Nous appeler' : 'Call us',
  };

  const services = isFr
    ? [
        {
          title: 'Photo & Vidéo Mariage',
          desc: 'La formule complète et la plus rassurante pour les couples qui veulent une mémoire totale du jour J.',
          href: `/${locale}/photo-video-mariage`,
          icon: Gem,
        },
        {
          title: 'Photographe Mariage',
          desc: 'Un reportage photo élégant, naturel et intemporel avec une vraie direction visuelle.',
          href: `/${locale}/photographe-mariage`,
          icon: Camera,
        },
        {
          title: 'Vidéaste Mariage',
          desc: 'Un film vivant, fluide et émotionnel pour revivre les mouvements, les regards et l’ambiance.',
          href: `/${locale}/videaste-mariage`,
          icon: Film,
        },
        {
          title: 'Événement Privé',
          desc: 'Anniversaire, réception, soirée ou moment important : des images premium pour préserver l’énergie réelle.',
          href: `/${locale}/photo-video-evenement-prive`,
          icon: Sparkles,
        },
        {
          title: 'Entreprise & Corporate',
          desc: 'Conférences, événements, portraits, contenus de marque et communication visuelle haut de gamme.',
          href: `/${locale}/photo-video-evenement-entreprise`,
          icon: HeartHandshake,
        },
        {
          title: 'Studio & Production',
          desc: 'Podcast, émission, interview, captation et production visuelle premium pour les formats exigeants.',
          href: `/${locale}/studio-production`,
          icon: Film,
        },
      ]
    : [
        {
          title: 'Wedding Photo & Video',
          desc: 'The most complete and reassuring collection for couples wanting a full memory of the day.',
          href: `/${locale}/photo-video-mariage`,
          icon: Gem,
        },
        {
          title: 'Wedding Photographer',
          desc: 'An elegant, natural and timeless photo report with strong visual direction.',
          href: `/${locale}/photographe-mariage`,
          icon: Camera,
        },
        {
          title: 'Wedding Videographer',
          desc: 'A vivid, fluid and emotional film to relive movement, looks and atmosphere.',
          href: `/${locale}/videaste-mariage`,
          icon: Film,
        },
        {
          title: 'Private Event',
          desc: 'Birthday, reception, private party or meaningful moment with premium visual coverage.',
          href: `/${locale}/photo-video-evenement-prive`,
          icon: Sparkles,
        },
        {
          title: 'Corporate',
          desc: 'Conferences, events, portraits, brand content and premium business communication.',
          href: `/${locale}/photo-video-evenement-entreprise`,
          icon: HeartHandshake,
        },
        {
          title: 'Studio & Production',
          desc: 'Podcast, show, interview, capture and premium production for demanding formats.',
          href: `/${locale}/studio-production`,
          icon: Film,
        },
      ];

  const pricingCards = isFr
    ? [
        {
          title: 'Mariage Photo',
          price: 'À partir de 1 490 €',
          text: 'Collections claires avec présence, photos retouchées, galerie privée et livraison HD.',
        },
        {
          title: 'Mariage Vidéo',
          price: 'À partir de 1 690 €',
          text: 'Film de mariage premium, teaser selon formule, montage soigné et livraison HD.',
        },
        {
          title: 'Mariage Photo + Vidéo',
          price: 'À partir de 2 790 €',
          text: 'La formule la plus complète pour une couverture cohérente, fluide et haut de gamme.',
          featured: true,
        },
      ]
    : [
        {
          title: 'Wedding Photography',
          price: 'From €1,490',
          text: 'Clear collections with coverage time, edited photos, private gallery and HD delivery.',
        },
        {
          title: 'Wedding Video',
          price: 'From €1,690',
          text: 'Premium wedding film, teaser depending on collection, careful editing and HD delivery.',
        },
        {
          title: 'Wedding Photo + Video',
          price: 'From €2,790',
          text: 'The most complete package for coherent, fluid and high-end coverage.',
          featured: true,
        },
      ];

  const whyItems = isFr
    ? [
        {
          title: 'Une image haut de gamme',
          text: 'Des images élégantes, fortes et cohérentes qui renforcent immédiatement la perception de qualité.',
        },
        {
          title: 'Une réponse rapide',
          text: 'Disponibilités vérifiées rapidement et premier échange clair pour ne pas perdre l’élan du prospect.',
        },
        {
          title: 'Une structure lisible',
          text: 'Des pages dédiées, des collections claires et des CTA directs pour transformer plus facilement.',
        },
        {
          title: 'Une vraie cohérence de marque',
          text: 'Photo, vidéo, landing pages et discours commercial avancent ensemble dans une même direction.',
        },
      ]
    : [
        {
          title: 'High-end imagery',
          text: 'Elegant, strong and coherent visuals that instantly reinforce perceived quality.',
        },
        {
          title: 'Fast reply',
          text: 'Availability checked quickly and a clear first exchange so momentum is not lost.',
        },
        {
          title: 'Readable structure',
          text: 'Dedicated pages, clear collections and direct CTAs to convert more easily.',
        },
        {
          title: 'True brand consistency',
          text: 'Photo, video, landing pages and commercial messaging all move in the same direction.',
        },
      ];

  const processSteps = isFr
    ? [
        'Le visiteur identifie rapidement son besoin',
        'Il découvre une page dédiée claire et premium',
        'Il comprend le niveau d’offre et les prix de départ',
        'Il vérifie les disponibilités ou appelle directement',
        'Le lead arrive qualifié et plus prêt à convertir',
      ]
    : [
        'The visitor quickly identifies their need',
        'They discover a clear and premium dedicated page',
        'They understand offer level and starting prices',
        'They check availability or call directly',
        'The lead arrives more qualified and closer to conversion',
      ];

  const faqItems = isFr
    ? [
        {
          q: 'Intervenez-vous uniquement à Paris ?',
          a: 'Non. SOREL Studio est basé à Paris mais intervient dans toute la France selon les projets.',
        },
        {
          q: 'Proposez-vous photo seule, vidéo seule et duo ?',
          a: 'Oui. Il est possible de réserver un photographe, un vidéaste ou une formule complète photo + vidéo.',
        },
        {
          q: 'Combien de temps à l’avance faut-il vous contacter ?',
          a: 'Le plus tôt possible. Certaines dates partent rapidement, surtout en mariage et sur les périodes très demandées.',
        },
        {
          q: 'Comment demander un devis ?',
          a: 'Il suffit de cliquer sur le bouton de réservation et d’indiquer la date, le lieu et le type de prestation souhaité.',
        },
      ]
    : [
        {
          q: 'Do you only work in Paris?',
          a: 'No. SOREL Studio is based in Paris and works throughout France depending on the project.',
        },
        {
          q: 'Do you offer photo only, video only and duo coverage?',
          a: 'Yes. You can book a photographer, a videographer or a complete photo + video package.',
        },
        {
          q: 'How far in advance should we contact you?',
          a: 'As early as possible. Some dates go quickly, especially for weddings and peak periods.',
        },
        {
          q: 'How do we request a quote?',
          a: 'Simply click the booking button and tell us the date, venue and type of service you want.',
        },
      ];

  return (
    <>
      <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-sorel-black">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/33642048/pexels-photo-33642048.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt=""
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sorel-black/95 via-sorel-black/80 to-sorel-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-sorel-black via-sorel-black/25 to-sorel-black/35" />
        </div>

        <div className="relative z-10 sorel-container px-6 md:px-12 lg:px-20 pt-32 pb-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-sorel-champagne/50" />
              <p className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-sorel-champagne">
                {t.heroLabel}
              </p>
            </div>

            <h1
              className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-sorel-cream leading-[1.02] mb-8"
              style={{ letterSpacing: '-0.03em' }}
            >
              {t.heroTitle}
            </h1>

            <p className="text-sm md:text-base text-sorel-cream/80 font-light leading-[1.9] max-w-2xl mb-8">
              {t.heroText}
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href={`/${locale}/${isFr ? 'reserver' : 'book'}`}
                className="inline-flex items-center gap-3 bg-sorel-cream text-sorel-black text-[11px] font-medium tracking-[0.15em] uppercase px-8 py-4 transition-all duration-500 hover:bg-sorel-champagne"
              >
                {t.heroPrimary}
                <ArrowRight size={14} />
              </Link>
              <Link
                href={`/${locale}/${isFr ? 'realisations' : 'work'}`}
                className="inline-flex items-center gap-3 border border-sorel-cream/40 text-sorel-cream text-[11px] font-medium tracking-[0.15em] uppercase px-8 py-4 transition-all duration-500 hover:bg-sorel-cream hover:text-sorel-black"
              >
                {t.heroSecondary}
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-sorel-cream to-transparent" />
      </section>

      <section className="sorel-section bg-sorel-cream">
        <div className="sorel-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="sorel-divider" />
                <p className="sorel-label">{isFr ? 'Positionnement' : 'Positioning'}</p>
              </div>
              <h2 className="sorel-heading text-4xl md:text-5xl mb-6">{t.introTitle}</h2>
              <p className="text-sm text-sorel-graphite font-light leading-[2] mb-6">{t.introText1}</p>
              <p className="text-sm text-sorel-graphite font-light leading-[2]">{t.introText2}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Sparkles, text: isFr ? 'Signature premium' : 'Premium signature' },
                { icon: Clock3, text: isFr ? 'Réponse rapide' : 'Fast reply' },
                { icon: MapPin, text: isFr ? 'Disponible en France' : 'Available in France' },
                { icon: HeartHandshake, text: isFr ? 'Accompagnement fluide' : 'Fluid experience' },
              ].map((item, index) => (
                <div
                  key={item.text}
                  className={`border border-sorel-black/6 bg-sorel-white p-6 ${index === 0 ? 'sm:translate-y-3' : ''}`}
                >
                  <div className="w-10 h-10 rounded-full border border-sorel-champagne/25 flex items-center justify-center mb-5">
                    <item.icon size={16} className="text-sorel-champagne" />
                  </div>
                  <p className="font-display text-xl font-light text-sorel-black leading-snug">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sorel-section bg-sorel-white">
        <div className="sorel-container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="sorel-divider" />
              <p className="sorel-label">{isFr ? 'Entrées principales' : 'Main entries'}</p>
              <div className="sorel-divider" />
            </div>
            <h2 className="sorel-heading text-4xl md:text-5xl mb-5">{t.offerTitle}</h2>
            <p className="text-sm text-sorel-silver font-light leading-[1.9]">{t.offerText}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                title: t.weddingTitle,
                text: t.weddingText,
                href: `/${locale}/photo-video-mariage`,
                cta: t.weddingCta,
                image:
                  'https://images.pexels.com/photos/33642048/pexels-photo-33642048.jpeg?auto=compress&cs=tinysrgb&w=1200',
              },
              {
                title: t.photoTitle,
                text: t.photoText,
                href: `/${locale}/photographe-mariage`,
                cta: t.photoCta,
                image:
                  'https://images.pexels.com/photos/33066203/pexels-photo-33066203.jpeg?auto=compress&cs=tinysrgb&w=1200',
              },
              {
                title: t.videoTitle,
                text: t.videoText,
                href: `/${locale}/videaste-mariage`,
                cta: t.videoCta,
                image:
                  'https://images.pexels.com/photos/33964853/pexels-photo-33964853.jpeg?auto=compress&cs=tinysrgb&w=1200',
              },
            ].map((card, index) => (
              <div
                key={card.title}
                className={`group relative overflow-hidden border ${
                  index === 0 ? 'border-sorel-champagne bg-sorel-black' : 'border-sorel-black/6 bg-sorel-cream'
                }`}
              >
                <div className="aspect-[4/5] relative">
                  <img
                    src={card.image}
                    alt=""
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      index === 0 ? 'opacity-55' : 'opacity-75'
                    }`}
                  />
                  <div
                    className={`absolute inset-0 ${
                      index === 0
                        ? 'bg-gradient-to-t from-sorel-black via-sorel-black/60 to-sorel-black/15'
                        : 'bg-gradient-to-t from-sorel-black/75 via-sorel-black/35 to-transparent'
                    }`}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <p className={`sorel-label mb-4 ${index === 0 ? 'text-sorel-champagne' : 'text-sorel-cream/75'}`}>
                      {index === 0 ? '01' : index === 1 ? '02' : '03'}
                    </p>
                    <h3 className="font-display text-3xl font-light text-sorel-cream mb-4">
                      {card.title}
                    </h3>
                    <p className="text-sm text-sorel-cream/80 font-light leading-[1.8] mb-6">
                      {card.text}
                    </p>
                    <Link
                      href={card.href}
                      className={`inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.15em] uppercase px-6 py-4 transition-all duration-500 ${
                        index === 0
                          ? 'bg-sorel-cream text-sorel-black hover:bg-sorel-champagne'
                          : 'border border-sorel-cream/35 text-sorel-cream hover:bg-sorel-cream hover:text-sorel-black'
                      }`}
                    >
                      {card.cta}
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sorel-section bg-sorel-cream">
        <div className="sorel-container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="sorel-divider" />
              <p className="sorel-label">{isFr ? 'Prestations' : 'Services'}</p>
              <div className="sorel-divider" />
            </div>
            <h2 className="sorel-heading text-4xl md:text-5xl mb-5">{t.servicesTitle}</h2>
            <p className="text-sm text-sorel-silver font-light leading-[1.9]">{t.servicesText}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="border border-sorel-black/6 bg-sorel-white p-6 hover:border-sorel-champagne/35 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full border border-sorel-champagne/25 flex items-center justify-center mb-5">
                  <service.icon size={16} className="text-sorel-champagne" />
                </div>
                <h3 className="font-display text-2xl font-light text-sorel-black mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-sorel-graphite font-light leading-[1.9]">
                  {service.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sorel-section bg-sorel-white">
        <div className="sorel-container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="sorel-divider" />
              <p className="sorel-label">{isFr ? 'Repères prix' : 'Price markers'}</p>
              <div className="sorel-divider" />
            </div>
            <h2 className="sorel-heading text-4xl md:text-5xl mb-5">{t.pricingTitle}</h2>
            <p className="text-sm text-sorel-silver font-light leading-[1.9]">{t.pricingText}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {pricingCards.map((card) => (
              <div
                key={card.title}
                className={`relative border ${
                  card.featured
                    ? 'border-sorel-champagne bg-sorel-black text-sorel-cream lg:-translate-y-2'
                    : 'border-sorel-black/6 bg-sorel-cream text-sorel-black'
                } p-8`}
              >
                {card.featured && (
                  <div className="absolute -top-3 left-8 bg-sorel-champagne text-sorel-black text-[10px] font-medium tracking-[0.2em] uppercase px-4 py-2">
                    {isFr ? 'Le plus populaire' : 'Most popular'}
                  </div>
                )}
                <p className={`sorel-label mb-4 ${card.featured ? 'text-sorel-champagne' : 'text-sorel-silver'}`}>
                  {card.title}
                </p>
                <h3 className="font-display text-4xl font-light mb-5">{card.price}</h3>
                <p className={`text-sm font-light leading-[1.9] ${card.featured ? 'text-sorel-cream/80' : 'text-sorel-graphite'}`}>
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sorel-section bg-sorel-cream">
        <div className="sorel-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="sorel-divider" />
                <p className="sorel-label">{isFr ? 'Différence' : 'Difference'}</p>
              </div>
              <h2 className="sorel-heading text-4xl md:text-5xl mb-6">{t.whyTitle}</h2>
              <p className="text-sm text-sorel-graphite font-light leading-[2]">{t.whyText}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyItems.map((item) => (
                <div key={item.title} className="border border-sorel-black/6 bg-sorel-white p-6">
                  <h3 className="font-display text-2xl font-light mb-3">{item.title}</h3>
                  <p className="text-sm text-sorel-graphite font-light leading-[1.9]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sorel-section bg-sorel-white">
        <div className="sorel-container">
          <div className="flex items-center gap-4 mb-8">
            <div className="sorel-divider" />
            <p className="sorel-label">{isFr ? 'Réalisations' : 'Portfolio'}</p>
          </div>
          <h2 className="sorel-heading text-4xl md:text-5xl mb-5">{t.portfolioTitle}</h2>
          <p className="text-sm text-sorel-silver font-light leading-[1.9] max-w-2xl mb-10">{t.portfolioText}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[260px] gap-3 mb-10">
            {[
              'https://images.pexels.com/photos/33642048/pexels-photo-33642048.jpeg?auto=compress&cs=tinysrgb&w=900',
              'https://images.pexels.com/photos/33066203/pexels-photo-33066203.jpeg?auto=compress&cs=tinysrgb&w=900',
              'https://images.pexels.com/photos/33964853/pexels-photo-33964853.jpeg?auto=compress&cs=tinysrgb&w=900',
              'https://images.pexels.com/photos/30208853/pexels-photo-30208853.jpeg?auto=compress&cs=tinysrgb&w=900',
              'https://images.pexels.com/photos/17627736/pexels-photo-17627736.jpeg?auto=compress&cs=tinysrgb&w=900',
              'https://images.pexels.com/photos/19495662/pexels-photo-19495662.jpeg?auto=compress&cs=tinysrgb&w=900',
            ].map((src, index) => (
              <div
                key={src}
                className={`overflow-hidden ${index === 0 ? 'col-span-2 row-span-2' : ''}`}
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>

          <Link
            href={`/${locale}/${isFr ? 'realisations' : 'work'}`}
            className="inline-flex items-center gap-3 bg-sorel-black text-sorel-cream text-[11px] font-medium tracking-[0.15em] uppercase px-8 py-4 transition-all duration-500 hover:bg-sorel-black/90"
          >
            {isFr ? 'Voir les réalisations' : 'View portfolio'}
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <section className="sorel-section bg-sorel-cream">
        <div className="sorel-container">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="sorel-divider" />
                <p className="sorel-label">{isFr ? 'Parcours' : 'Journey'}</p>
              </div>
              <h2 className="sorel-heading text-4xl md:text-5xl mb-6">{t.processTitle}</h2>
              <p className="text-sm text-sorel-graphite font-light leading-[2]">{t.processText}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {processSteps.map((step, i) => (
                <div key={step} className="border border-sorel-black/6 bg-sorel-white p-6 md:p-5">
                  <p className="font-display text-3xl font-light text-sorel-champagne/50 mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <p className="text-sm text-sorel-graphite font-light leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sorel-section bg-sorel-white">
        <div className="sorel-container max-w-5xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="sorel-divider" />
            <p className="sorel-label">SEO</p>
          </div>

          <h2 className="sorel-heading text-4xl md:text-5xl mb-6">{t.seoTitle1}</h2>
          <p className="text-sm text-sorel-graphite font-light leading-[2] mb-12">{t.seoText1}</p>

          <h2 className="sorel-heading text-4xl md:text-5xl mb-6">{t.seoTitle2}</h2>
          <p className="text-sm text-sorel-graphite font-light leading-[2]">{t.seoText2}</p>
        </div>
      </section>

      <section className="sorel-section bg-sorel-cream">
        <div className="sorel-container max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="sorel-divider" />
            <p className="sorel-label">FAQ</p>
          </div>
          <h2 className="sorel-heading text-4xl md:text-5xl mb-10">{t.faqTitle}</h2>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <details key={item.q} className="group border border-sorel-black/6 bg-sorel-white p-6">
                <summary className="list-none cursor-pointer flex items-center justify-between gap-6">
                  <span className="font-display text-2xl font-light text-sorel-black">{item.q}</span>
                  <span className="text-sorel-champagne transition-transform duration-300 group-open:rotate-45 text-2xl leading-none">
                    +
                  </span>
                </summary>
                <p className="text-sm text-sorel-graphite font-light leading-[1.9] mt-5 pr-10">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/33964851/pexels-photo-33964851.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt=""
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-sorel-black/90" />
        </div>

        <div className="sorel-container sorel-section relative z-10 text-center">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-10 h-px bg-sorel-champagne/50" />
            <p className="sorel-label text-sorel-champagne">SOREL</p>
            <div className="w-10 h-px bg-sorel-champagne/50" />
          </div>

          <h2
            className="font-display text-4xl md:text-6xl font-light text-sorel-cream leading-tight mb-6 max-w-3xl mx-auto"
            style={{ letterSpacing: '-0.02em' }}
          >
            {t.finalTitle}
          </h2>

          <p className="text-sm text-sorel-cream/90 font-light mb-10 max-w-2xl mx-auto leading-[1.9]">
            {t.finalText}
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <a
              href={`tel:${brand.phoneRaw}`}
              className="inline-flex items-center gap-2 text-sorel-champagne hover:text-sorel-cream transition-colors"
            >
              <Phone size={14} />
              <span className="text-sm font-light">{brand.phone}</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href={`/${locale}/${isFr ? 'reserver' : 'book'}`}
              className="bg-sorel-cream text-sorel-black text-[11px] font-medium tracking-[0.15em] uppercase px-10 py-4 inline-flex items-center gap-3 transition-all duration-500 hover:bg-sorel-champagne"
            >
              {t.finalPrimary}
              <ArrowRight size={14} />
            </Link>
            <a
              href={`tel:${brand.phoneRaw}`}
              className="text-[11px] font-medium tracking-[0.15em] uppercase text-sorel-cream/85 hover:text-sorel-white transition-colors inline-flex items-center gap-2"
            >
              {t.finalSecondary}
              <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
