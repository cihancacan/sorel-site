import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  Phone,
  Sparkles,
  Film,
  HeartHandshake,
  PlayCircle,
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
      title: 'Vidéaste Mariage en France | SOREL Studio',
      description:
        'Vidéaste mariage premium en France. Films élégants, teaser, collections claires, livraison HD et réponse sous 24h.',
      locale,
      path: '/fr/videaste-mariage',
    });
  }

  return buildMetadata({
    title: 'Wedding Videographer in France | SOREL Studio',
    description:
      'Premium wedding videographer in France. Elegant films, teaser, clear collections, HD delivery and reply within 24h.',
    locale,
    path: '/en/videaste-mariage',
  });
}

export default function VideasteMariagePage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale as Locale;
  const isFr = locale === 'fr';

  const page = {
    heroLabel: isFr ? 'Mariage · Vidéo' : 'Wedding · Video',
    heroTitle: isFr
      ? 'Vidéaste Mariage Premium'
      : 'Premium Wedding Videographer',
    heroText: isFr
      ? 'Un film de mariage élégant, vivant et haut de gamme pour revivre l’intensité de votre journée avec émotion, rythme et cohérence. Basé à Paris, SOREL Studio intervient dans toute la France.'
      : 'An elegant, vivid and high-end wedding film crafted to let you relive your day with emotion, rhythm and coherence. Based in Paris, SOREL Studio works throughout France.',
    ctaPrimary: isFr ? 'Vérifier la disponibilité' : 'Check availability',
    ctaSecondary: isFr ? 'Voir les collections' : 'View collections',

    introTitle: isFr
      ? 'Une vidéo de mariage pensée pour faire revivre la journée'
      : 'Wedding films designed to make the day live again',
    introText1: isFr
      ? 'Filmer un mariage ne consiste pas seulement à enregistrer ce qui se passe. Il s’agit de construire un récit, de restituer une ambiance, de préserver les regards, les gestes, les voix, les mouvements et l’énergie réelle de la journée dans un film fluide, élégant et fort.'
      : 'Filming a wedding is not just recording what happens. It means building a story, preserving an atmosphere, capturing looks, gestures, voices, movement and the real energy of the day in a fluid, elegant and powerful film.',
    introText2: isFr
      ? 'Chez SOREL Studio, chaque film de mariage est pensé avec une approche premium, sensible et cinématographique. L’objectif est de livrer un film sincère, rythmé et intemporel, capable de vous replonger dans votre journée avec émotion.'
      : 'At SOREL Studio, each wedding film is designed with a premium, sensitive and cinematic approach. The goal is to deliver a sincere, rhythmic and timeless film able to take you back into your day with emotion.',

    introItems: isFr
      ? [
          'Un film élégant et vivant',
          'Une présence discrète le jour J',
          'Un montage fluide et émotionnel',
          'Une expérience simple et premium',
        ]
      : [
          'An elegant and vivid film',
          'A discreet presence on the day',
          'Fluid and emotional editing',
          'A simple and premium experience',
        ],

    collectionsTitle: isFr
      ? 'Nos collections vidéo mariage'
      : 'Our wedding video collections',
    collectionsText: isFr
      ? 'Des collections pensées pour s’adapter au niveau de couverture souhaité, avec des repères clairs, des films premium et une vraie lisibilité commerciale.'
      : 'Collections designed to match the level of coverage you need, with clear markers, premium films and strong commercial clarity.',

    whyTitle: isFr
      ? 'Pourquoi les couples choisissent SOREL'
      : 'Why couples choose SOREL',
    whyItems: isFr
      ? [
          {
            title: 'Une vraie émotion',
            text: 'Le film restitue l’intensité de la journée avec mouvement, rythme, voix et atmosphère.',
          },
          {
            title: 'Une captation discrète',
            text: 'La vidéo s’intègre naturellement à votre mariage pour ne jamais casser le moment.',
          },
          {
            title: 'Un rendu haut de gamme',
            text: 'Un montage élégant, fluide et moderne, pensé pour durer dans le temps.',
          },
          {
            title: 'Une réponse rapide',
            text: 'Disponibilités vérifiées rapidement et accompagnement clair dès le premier échange.',
          },
        ]
      : [
          {
            title: 'Real emotion',
            text: 'The film brings back the intensity of the day through movement, rhythm, voices and atmosphere.',
          },
          {
            title: 'Discreet capture',
            text: 'Video blends naturally into your wedding so the moment is never interrupted.',
          },
          {
            title: 'A high-end result',
            text: 'Elegant, fluid and modern editing designed to last over time.',
          },
          {
            title: 'Fast reply',
            text: 'Availability checked quickly and a clear process from the first exchange.',
          },
        ],

    includedTitle: isFr
      ? 'Ce qui est toujours inclus'
      : 'What is always included',
    includedItems: isFr
      ? [
          'Accompagnement avant le mariage',
          'Direction visuelle soignée',
          'Captation professionnelle le jour J',
          'Montage premium',
          'Livraison numérique HD',
          'Film pensé pour revivre la journée',
        ]
      : [
          'Guidance before the wedding',
          'Strong visual direction',
          'Professional capture on the day',
          'Premium editing',
          'HD digital delivery',
          'A film designed to relive the day',
        ],

    processTitle: isFr ? 'Comment réserver votre date' : 'How to book your date',
    processSteps: isFr
      ? [
          'Envoyez votre demande',
          'Nous vérifions les disponibilités',
          'Nous échangeons sur votre mariage',
          'Nous vous adressons une proposition claire',
          'Votre date est sécurisée',
        ]
      : [
          'Send your request',
          'We check availability',
          'We discuss your wedding',
          'We send you a clear proposal',
          'Your date is secured',
        ],

    seoTitle1: isFr
      ? 'Prix vidéaste mariage : comment choisir ?'
      : 'Wedding videographer pricing: how to choose?',
    seoText1: isFr
      ? 'Le prix d’un vidéaste mariage dépend principalement de la durée de présence, du niveau de couverture souhaité, du type de film recherché et du niveau de montage attendu. Certaines formules privilégient une couverture plus concise avec un film plus court, tandis que d’autres permettent de documenter la journée plus largement avec un teaser et un film plus complet.'
      : 'The price of a wedding videographer mainly depends on hours of coverage, desired depth of coverage, the type of film you want and the editing level expected. Some collections focus on a more concise coverage with a shorter film, while others document the day more fully with a teaser and a more complete film.',
    seoText2: isFr
      ? 'Chez SOREL Studio, les collections vidéo mariage sont pensées pour offrir une lecture claire de l’offre, avec une approche premium, un rendu cinématographique et un accompagnement fluide. L’objectif n’est pas seulement de livrer une vidéo, mais de créer un film vivant, sincère et intemporel.'
      : 'At SOREL Studio, wedding video collections are built to offer clarity, premium positioning, cinematic rendering and a fluid experience. The goal is not only to deliver a video, but to create a vivid, sincere and timeless film.',

    seoTitle2: isFr
      ? 'Vidéaste mariage en France'
      : 'Wedding videographer in France',
    seoText3: isFr
      ? 'SOREL Studio accompagne les couples dans toute la France pour la vidéo de mariage. Chaque prestation est pensée pour s’adapter au rythme de la journée, au lieu, à la cérémonie et au style recherché, avec une signature visuelle élégante, moderne et haut de gamme.'
      : 'SOREL Studio works with couples throughout France for wedding filmmaking. Each service adapts to the rhythm of the day, the venue, the ceremony and the desired style, with an elegant, modern and high-end visual signature.',

    faqTitle: isFr
      ? 'Questions fréquentes sur la vidéo de mariage'
      : 'Frequently asked questions about wedding video',

    finalTitle: isFr
      ? 'Parlez-nous de votre mariage'
      : 'Tell us about your wedding',
    finalText: isFr
      ? 'Indiquez-nous votre date, votre lieu et le type de film souhaité. Nous vous répondons sous 24h pour confirmer les disponibilités et vous orienter vers la collection la plus adaptée, partout en France.'
      : 'Tell us your date, venue and the type of film you want. We reply within 24h to confirm availability and guide you toward the right collection anywhere in France.',
    finalButton: isFr ? 'Vérifier la disponibilité de notre date' : 'Check our date',
    finalContact: isFr ? 'Nous appeler' : 'Call us',
  };

  const collections = isFr
    ? [
        {
          name: 'Collection Essentielle',
          price: 'À partir de 1 690 €',
          desc: 'Pour les couples qui souhaitent conserver les temps forts avec un film élégant, clair et efficace.',
          items: [
            '1 vidéaste',
            '6 heures de présence',
            'Film de mariage de 3 à 5 min',
            'Montage soigné',
            'Livraison HD',
            'Accompagnement en amont',
          ],
          featured: false,
        },
        {
          name: 'Collection Signature',
          price: 'À partir de 2 490 €',
          desc: 'La formule idéale pour une couverture plus complète, plus confortable et plus riche en émotions.',
          items: [
            '1 vidéaste',
            '10 heures de présence',
            'Film de mariage de 5 à 8 min',
            'Teaser court',
            'Montage premium',
            'Livraison HD',
            'Accompagnement en amont',
          ],
          featured: true,
        },
        {
          name: 'Collection Maison',
          price: 'À partir de 3 490 €',
          desc: 'Pour une couverture haut de gamme pensée pour les mariages les plus complets et les projets les plus exigeants.',
          items: [
            'Couverture vidéo premium',
            'Jusqu’à 12 heures de présence',
            'Film de mariage de 8 à 12 min',
            'Teaser',
            'Montage premium avancé',
            'Livraison HD',
            'Option contenu vertical possible',
          ],
          featured: false,
        },
      ]
    : [
        {
          name: 'Essential Collection',
          price: 'From €1,690',
          desc: 'For couples who want to preserve key moments with an elegant, clear and efficient film.',
          items: [
            '1 videographer',
            '6 hours coverage',
            '3 to 5 min wedding film',
            'Careful editing',
            'HD delivery',
            'Guidance beforehand',
          ],
          featured: false,
        },
        {
          name: 'Signature Collection',
          price: 'From €2,490',
          desc: 'The ideal collection for more complete coverage, more comfort and a richer emotional memory.',
          items: [
            '1 videographer',
            '10 hours coverage',
            '5 to 8 min wedding film',
            'Short teaser',
            'Premium editing',
            'HD delivery',
            'Guidance beforehand',
          ],
          featured: true,
        },
        {
          name: 'Maison Collection',
          price: 'From €3,490',
          desc: 'For high-end coverage designed for the most complete weddings and the most demanding projects.',
          items: [
            'Premium video coverage',
            'Up to 12 hours coverage',
            '8 to 12 min wedding film',
            'Teaser',
            'Advanced premium editing',
            'HD delivery',
            'Vertical content option available',
          ],
          featured: false,
        },
      ];

  const faqItems = isFr
    ? [
        {
          q: 'Quel est le prix d’un vidéaste mariage ?',
          a: 'Le prix dépend du temps de présence, du niveau de couverture et du type de film souhaité. Une collection vidéo mariage peut commencer à partir de 1 690 €.',
        },
        {
          q: 'Quelle est la durée du film de mariage ?',
          a: 'Selon la collection choisie, un film de mariage peut durer environ 3 à 12 minutes, avec parfois un teaser complémentaire.',
        },
        {
          q: 'Intervenez-vous uniquement à Paris ?',
          a: 'Non. SOREL Studio est basé à Paris mais intervient dans toute la France selon les projets.',
        },
        {
          q: 'Combien de temps à l’avance faut-il vous contacter ?',
          a: 'Le plus tôt possible. Certaines dates partent rapidement, surtout sur les périodes les plus demandées.',
        },
        {
          q: 'Comment savoir si votre date est disponible ?',
          a: 'Il suffit d’envoyer une demande avec votre date et votre lieu. L’équipe revient rapidement avec une première confirmation.',
        },
      ]
    : [
        {
          q: 'How much does a wedding videographer cost?',
          a: 'The price depends on hours of coverage, the desired level of service and the type of film you want. A wedding video collection can start from €1,690.',
        },
        {
          q: 'How long is the wedding film?',
          a: 'Depending on the collection, a wedding film can run from around 3 to 12 minutes, sometimes with an additional teaser.',
        },
        {
          q: 'Do you only work in Paris?',
          a: 'No. SOREL Studio is based in Paris and works throughout France depending on the project.',
        },
        {
          q: 'How far in advance should we contact you?',
          a: 'As early as possible. Some dates go quickly, especially during the most requested periods.',
        },
        {
          q: 'How can we know if our date is available?',
          a: 'Simply send your date and venue. The team replies quickly with a first confirmation.',
        },
      ];

  return (
    <>
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-sorel-black">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/33964853/pexels-photo-33964853.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt=""
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sorel-black/95 via-sorel-black/80 to-sorel-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-sorel-black via-sorel-black/25 to-sorel-black/30" />
        </div>

        <div className="relative z-10 sorel-container px-6 md:px-12 lg:px-20 pt-32 pb-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-sorel-champagne/50" />
              <p className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-sorel-champagne">
                {page.heroLabel}
              </p>
            </div>

            <h1
              className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-sorel-cream leading-[1.02] mb-8"
              style={{ letterSpacing: '-0.03em' }}
            >
              {page.heroTitle}
            </h1>

            <p className="text-sm md:text-base text-sorel-cream/80 font-light leading-[1.9] max-w-2xl mb-8">
              {page.heroText}
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href={`/${locale}/${isFr ? 'reserver' : 'book'}`}
                className="inline-flex items-center gap-3 bg-sorel-cream text-sorel-black text-[11px] font-medium tracking-[0.15em] uppercase px-8 py-4 transition-all duration-500 hover:bg-sorel-champagne"
              >
                {page.ctaPrimary}
                <ArrowRight size={14} />
              </Link>
              <a
                href="#collections"
                className="inline-flex items-center gap-3 border border-sorel-cream/40 text-sorel-cream text-[11px] font-medium tracking-[0.15em] uppercase px-8 py-4 transition-all duration-500 hover:bg-sorel-cream hover:text-sorel-black"
              >
                {page.ctaSecondary}
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-sorel-cream to-transparent" />
      </section>

      <section className="sorel-section bg-sorel-cream">
        <div className="sorel-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="sorel-divider" />
                <p className="sorel-label">{isFr ? 'L’expérience' : 'The experience'}</p>
              </div>
              <h2 className="sorel-heading text-4xl md:text-5xl mb-6">{page.introTitle}</h2>
              <p className="text-sm text-sorel-graphite font-light leading-[2] mb-6">
                {page.introText1}
              </p>
              <p className="text-sm text-sorel-graphite font-light leading-[2]">
                {page.introText2}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {page.introItems.map((item, index) => (
                <div
                  key={item}
                  className={`border border-sorel-black/6 bg-sorel-white p-6 ${
                    index === 0 ? 'sm:translate-y-3' : ''
                  }`}
                >
                  <div className="w-10 h-10 rounded-full border border-sorel-champagne/25 flex items-center justify-center mb-5">
                    {index === 0 && <Sparkles size={16} className="text-sorel-champagne" />}
                    {index === 1 && <HeartHandshake size={16} className="text-sorel-champagne" />}
                    {index === 2 && <Film size={16} className="text-sorel-champagne" />}
                    {index === 3 && <PlayCircle size={16} className="text-sorel-champagne" />}
                  </div>
                  <p className="font-display text-xl font-light text-sorel-black leading-snug">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="collections" className="sorel-section bg-sorel-white">
        <div className="sorel-container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="sorel-divider" />
              <p className="sorel-label">{isFr ? 'Collections' : 'Collections'}</p>
              <div className="sorel-divider" />
            </div>
            <h2 className="sorel-heading text-4xl md:text-5xl mb-5">{page.collectionsTitle}</h2>
            <p className="text-sm text-sorel-silver font-light leading-[1.9]">
              {page.collectionsText}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {collections.map((collection) => (
              <div
                key={collection.name}
                className={`relative border ${
                  collection.featured
                    ? 'border-sorel-champagne bg-sorel-black text-sorel-cream shadow-[0_20px_80px_rgba(0,0,0,0.12)] lg:-translate-y-3'
                    : 'border-sorel-black/6 bg-sorel-cream text-sorel-black'
                } p-8 md:p-10`}
              >
                {collection.featured && (
                  <div className="absolute -top-3 left-8 bg-sorel-champagne text-sorel-black text-[10px] font-medium tracking-[0.2em] uppercase px-4 py-2">
                    {isFr ? 'La plus populaire' : 'Most popular'}
                  </div>
                )}

                <p
                  className={`sorel-label mb-5 ${
                    collection.featured ? 'text-sorel-champagne' : 'text-sorel-silver'
                  }`}
                >
                  {collection.name}
                </p>

                <h3 className="font-display text-4xl font-light mb-5">{collection.price}</h3>

                <p
                  className={`text-sm font-light leading-[1.9] mb-8 ${
                    collection.featured ? 'text-sorel-cream/75' : 'text-sorel-graphite'
                  }`}
                >
                  {collection.desc}
                </p>

                <div className="space-y-4 mb-10">
                  {collection.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check size={16} className="text-sorel-champagne mt-0.5" />
                      <p
                        className={`text-sm font-light leading-relaxed ${
                          collection.featured ? 'text-sorel-cream/85' : 'text-sorel-graphite'
                        }`}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/${locale}/${isFr ? 'reserver' : 'book'}`}
                  className={`inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.15em] uppercase px-8 py-4 transition-all duration-500 ${
                    collection.featured
                      ? 'bg-sorel-cream text-sorel-black hover:bg-sorel-champagne'
                      : 'bg-sorel-black text-sorel-cream hover:bg-sorel-black/90'
                  }`}
                >
                  {isFr ? 'Intéressé par cette collection' : 'Interested in this collection'}
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sorel-section bg-sorel-cream">
        <div className="sorel-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="sorel-divider" />
                <p className="sorel-label">{isFr ? 'Toujours inclus' : 'Always included'}</p>
              </div>
              <h2 className="sorel-heading text-4xl md:text-5xl mb-6">{page.includedTitle}</h2>
              <div className="space-y-4">
                {page.includedItems.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check size={16} className="text-sorel-champagne mt-0.5" />
                    <p className="text-sm text-sorel-graphite font-light leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="sorel-divider" />
                <p className="sorel-label">{isFr ? 'Pourquoi SOREL' : 'Why SOREL'}</p>
              </div>
              <h2 className="sorel-heading text-4xl md:text-5xl mb-6">{page.whyTitle}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {page.whyItems.map((item) => (
                  <div key={item.title} className="border border-sorel-black/6 p-6 bg-sorel-white">
                    <h3 className="font-display text-2xl font-light mb-3">{item.title}</h3>
                    <p className="text-sm text-sorel-graphite font-light leading-[1.9]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sorel-section bg-sorel-white">
        <div className="sorel-container">
          <div className="flex items-center gap-4 mb-8">
            <div className="sorel-divider" />
            <p className="sorel-label">{isFr ? 'Films de mariage' : 'Wedding films'}</p>
          </div>
          <h2 className="sorel-heading text-4xl md:text-5xl mb-10">
            {isFr ? 'Quelques films racontés par SOREL' : 'A few films told by SOREL'}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[260px] gap-3">
            {[
              'https://images.pexels.com/photos/33964853/pexels-photo-33964853.jpeg?auto=compress&cs=tinysrgb&w=900',
              'https://images.pexels.com/photos/33964851/pexels-photo-33964851.jpeg?auto=compress&cs=tinysrgb&w=900',
              'https://images.pexels.com/photos/31953122/pexels-photo-31953122.jpeg?auto=compress&cs=tinysrgb&w=900',
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
        </div>
      </section>

      <section className="sorel-section bg-sorel-cream">
        <div className="sorel-container">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="sorel-divider" />
                <p className="sorel-label">{isFr ? 'Réservation' : 'Booking'}</p>
              </div>
              <h2 className="sorel-heading text-4xl md:text-5xl mb-6">{page.processTitle}</h2>
              <p className="text-sm text-sorel-graphite font-light leading-[2]">
                {isFr
                  ? 'Nous avons conçu un processus simple, réactif et premium pour vous permettre de vérifier rapidement les disponibilités et d’avancer sereinement.'
                  : 'We have designed a simple, reactive and premium process so you can check availability quickly and move forward with confidence.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {page.processSteps.map((step, i) => (
                <div key={step} className="border border-sorel-black/6 p-6 md:p-5 bg-sorel-white">
                  <p className="font-display text-3xl font-light text-sorel-champagne/50 mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <p className="text-sm text-sorel-graphite font-light leading-relaxed">
                    {step}
                  </p>
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

          <h2 className="sorel-heading text-4xl md:text-5xl mb-6">{page.seoTitle1}</h2>
          <p className="text-sm text-sorel-graphite font-light leading-[2] mb-6">
            {page.seoText1}
          </p>
          <p className="text-sm text-sorel-graphite font-light leading-[2] mb-12">
            {page.seoText2}
          </p>

          <h2 className="sorel-heading text-4xl md:text-5xl mb-6">{page.seoTitle2}</h2>
          <p className="text-sm text-sorel-graphite font-light leading-[2]">
            {page.seoText3}
          </p>
        </div>
      </section>

      <section className="sorel-section bg-sorel-cream">
        <div className="sorel-container max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="sorel-divider" />
            <p className="sorel-label">FAQ</p>
          </div>
          <h2 className="sorel-heading text-4xl md:text-5xl mb-10">{page.faqTitle}</h2>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <details key={item.q} className="group border border-sorel-black/6 bg-sorel-white p-6">
                <summary className="list-none cursor-pointer flex items-center justify-between gap-6">
                  <span className="font-display text-2xl font-light text-sorel-black">
                    {item.q}
                  </span>
                  <span className="text-sorel-champagne transition-transform duration-300 group-open:rotate-45 text-2xl leading-none">
                    +
                  </span>
                </summary>
                <p className="text-sm text-sorel-graphite font-light leading-[1.9] mt-5 pr-10">
                  {item.a}
                </p>
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
            {page.finalTitle}
          </h2>

          <p className="text-sm text-sorel-cream/90 font-light mb-10 max-w-2xl mx-auto leading-[1.9]">
            {page.finalText}
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
              {page.finalButton}
              <ArrowRight size={14} />
            </Link>
            <a
              href={`tel:${brand.phoneRaw}`}
              className="text-[11px] font-medium tracking-[0.15em] uppercase text-sorel-cream/85 hover:text-sorel-white transition-colors inline-flex items-center gap-2"
            >
              {page.finalContact}
              <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
