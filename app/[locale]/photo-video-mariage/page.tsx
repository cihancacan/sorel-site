import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  Phone,
  Sparkles,
  Camera,
  Film,
  HeartHandshake,
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
      title: 'Photo & Vidéo Mariage en France | SOREL Studio',
      description:
        'Photographe et vidéaste mariage premium en France. Formules photo + vidéo, collections claires, galerie privée, film de mariage et réponse sous 24h.',
      locale,
      path: '/fr/photo-video-mariage',
    });
  }

  return buildMetadata({
    title: 'Wedding Photo & Video in France | SOREL Studio',
    description:
      'Premium wedding photographer and videographer in France. Clear photo + video collections, private gallery, wedding film and reply within 24h.',
    locale,
    path: '/en/photo-video-mariage',
  });
}

export default function PhotoVideoMariagePage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale as Locale;
  const isFr = locale === 'fr';

  const page = {
    heroLabel: isFr ? 'Mariage · Photo & Vidéo' : 'Wedding · Photo & Video',
    heroTitle: isFr
      ? 'Photographe & Vidéaste Mariage Premium'
      : 'Premium Wedding Photographer & Videographer',
    heroText: isFr
      ? 'Une couverture photo + vidéo élégante, fluide et haut de gamme pour raconter votre mariage avec émotion, cohérence et intensité. Basé à Paris, SOREL Studio intervient dans toute la France.'
      : 'An elegant, fluid and high-end photo + video coverage crafted to tell your wedding story with emotion, consistency and intensity. Based in Paris, SOREL Studio works throughout France.',
    heroBadges: isFr
      ? [
          'Photo seule, vidéo seule ou duo',
          'Réponse sous 24h',
          'Basé à Paris · Toute la France',
        ]
      : [
          'Photo only, video only or duo',
          'Reply within 24h',
          'Based in Paris · All France',
        ],
    ctaPrimary: isFr ? 'Vérifier la disponibilité' : 'Check availability',
    ctaSecondary: isFr ? 'Voir les collections' : 'View collections',

    introTitle: isFr
      ? 'Une couverture mariage pensée pour tout raconter'
      : 'Wedding coverage designed to tell the whole story',
    introText1: isFr
      ? 'Choisir une formule photo + vidéo mariage, ce n’est pas seulement réserver deux prestataires. C’est choisir une vision cohérente, une direction visuelle commune et une équipe capable de raconter votre journée avec élégance, précision et fluidité.'
      : 'Choosing a wedding photo + video package is not just booking two vendors. It means choosing a coherent vision, a shared visual direction and a team able to tell your day with elegance, precision and fluidity.',
    introText2: isFr
      ? 'Chez SOREL Studio, la photo et la vidéo sont pensées ensemble pour offrir un rendu harmonieux, émotionnel et haut de gamme, du premier échange jusqu’à la livraison finale.'
      : 'At SOREL Studio, photography and filmmaking are designed together to deliver a harmonious, emotional and high-end result, from the first exchange to the final delivery.',

    introItems: isFr
      ? [
          'Une seule direction visuelle',
          'Photo et vidéo parfaitement coordonnées',
          'Des images fortes, naturelles et intemporelles',
          'Un accompagnement simple et fluide',
        ]
      : [
          'One visual direction',
          'Perfectly coordinated photo and video',
          'Strong, natural and timeless imagery',
          'A simple and fluid experience',
        ],

    collectionsTitle: isFr
      ? 'Nos collections photo & vidéo mariage'
      : 'Our wedding photo & video collections',
    collectionsText: isFr
      ? 'Des collections conçues pour s’adapter au niveau de couverture souhaité, avec des livrables clairs, une approche premium et une vraie lecture commerciale de votre projet.'
      : 'Collections designed to match the level of coverage you need, with clear deliverables, a premium approach and a truly readable structure.',

    compareTitle: isFr
      ? 'Photo seule, vidéo seule ou formule complète ?'
      : 'Photo only, video only or complete coverage?',
    compareText: isFr
      ? 'La formule photo + vidéo est souvent la plus rassurante pour les couples qui veulent une couverture complète, cohérente et haut de gamme. Elle permet de conserver à la fois la force des images fixes, la dynamique des mouvements et l’énergie réelle de la journée.'
      : 'The photo + video package is often the most reassuring option for couples who want complete, consistent and high-end coverage. It preserves both the strength of still images, the dynamics of movement and the real energy of the day.',

    includedTitle: isFr
      ? 'Ce qui est toujours inclus'
      : 'What is always included',
    includedItems: isFr
      ? [
          'Accompagnement avant le mariage',
          'Direction visuelle soignée',
          'Présence professionnelle le jour J',
          'Tri et post-production premium',
          'Galerie privée en ligne',
          'Livraison numérique HD',
        ]
      : [
          'Guidance before the wedding',
          'Strong visual direction',
          'Professional coverage on the day',
          'Premium curation and post-production',
          'Private online gallery',
          'HD digital delivery',
        ],

    whyTitle: isFr
      ? 'Pourquoi les couples choisissent SOREL'
      : 'Why couples choose SOREL',
    whyItems: isFr
      ? [
          {
            title: 'Une signature élégante',
            text: 'Des images fortes, naturelles et premium, sans effet artificiel ni surcharge visuelle.',
          },
          {
            title: 'Une vraie fluidité le jour J',
            text: 'Photo et vidéo avancent ensemble, sans friction, sans surcharge, sans vous faire poser inutilement.',
          },
          {
            title: 'Un rendu cohérent',
            text: 'Une même lecture visuelle, une même exigence, une même qualité sur l’ensemble du reportage.',
          },
          {
            title: 'Une réponse rapide',
            text: 'Disponibilités vérifiées rapidement et accompagnement clair dès le premier échange.',
          },
        ]
      : [
          {
            title: 'An elegant signature',
            text: 'Strong, natural and premium imagery without artificial effects or visual overload.',
          },
          {
            title: 'Real fluidity on the day',
            text: 'Photo and video move together smoothly, without friction or unnecessary staging.',
          },
          {
            title: 'A consistent result',
            text: 'One visual reading, one level of excellence, one quality standard across the whole report.',
          },
          {
            title: 'Fast reply',
            text: 'Availability checked quickly and a clear process from the first exchange.',
          },
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
      ? 'Prix photographe et vidéaste mariage : comment choisir ?'
      : 'Wedding photographer and videographer pricing: how to choose?',
    seoText1: isFr
      ? 'Le prix d’un photographe et vidéaste mariage dépend principalement de la durée de présence, du niveau de couverture souhaité, du type de livrables attendus et du niveau de finition recherché. Certaines collections privilégient une couverture concise des temps forts, tandis que d’autres offrent une présence plus longue, un plus grand volume de photos retouchées et un film plus complet.'
      : 'The price of a wedding photographer and videographer mainly depends on hours of coverage, desired depth of coverage, expected deliverables and finishing level. Some collections focus on key moments, while others include longer presence, a larger volume of edited photos and a more complete film.',
    seoText2: isFr
      ? 'Chez SOREL Studio, les collections photo + vidéo mariage sont pensées pour offrir une lecture claire de l’offre, avec une approche premium, des livrables précis et une expérience fluide. L’objectif n’est pas seulement de produire de belles images, mais de créer un souvenir fort, vivant et intemporel.'
      : 'At SOREL Studio, wedding photo + video collections are built to offer clarity, premium positioning, precise deliverables and a fluid experience. The goal is not only to create beautiful imagery, but to build a powerful, vivid and timeless memory.',

    seoTitle2: isFr
      ? 'Photographe et vidéaste mariage en France'
      : 'Wedding photographer and videographer in France',
    seoText3: isFr
      ? 'SOREL Studio accompagne les couples dans toute la France pour la photo et la vidéo de mariage. Chaque prestation est pensée pour s’adapter au rythme de la journée, au lieu, à la cérémonie et au style recherché, avec une signature visuelle élégante et une exécution haut de gamme.'
      : 'SOREL Studio works with couples throughout France for wedding photography and filmmaking. Each service adapts to the rhythm of the day, the venue, the ceremony and the desired style, with an elegant visual signature and premium execution.',

    faqTitle: isFr
      ? 'Questions fréquentes sur la photo & vidéo mariage'
      : 'Frequently asked questions about wedding photo & video',

    finalTitle: isFr ? 'Parlez-nous de votre mariage' : 'Tell us about your wedding',
    finalText: isFr
      ? 'Indiquez-nous votre date, votre lieu et le type de couverture souhaité. Nous vous répondons sous 24h pour confirmer les disponibilités et vous orienter vers la collection la plus adaptée, partout en France.'
      : 'Tell us your date, venue and desired coverage. We reply within 24h to confirm availability and guide you toward the right collection anywhere in France.',
    finalButton: isFr ? 'Vérifier la disponibilité de notre date' : 'Check our date',
    finalContact: isFr ? 'Nous appeler' : 'Call us',
  };

  const collections = isFr
    ? [
        {
          name: 'Collection Essentielle',
          price: 'À partir de 2 790 €',
          desc: 'Pour les couples qui souhaitent couvrir les temps forts avec une formule claire, élégante et complète.',
          items: [
            '1 photographe + 1 vidéaste',
            '6 heures de présence',
            '200 à 300 photos retouchées',
            'Film de mariage de 3 à 5 min',
            'Galerie privée en ligne',
            'Livraison HD',
          ],
          featured: false,
        },
        {
          name: 'Collection Signature',
          price: 'À partir de 4 190 €',
          desc: 'La formule idéale pour une couverture plus complète, plus confortable et plus riche en souvenirs.',
          items: [
            '1 photographe + 1 vidéaste',
            '10 heures de présence',
            '400 à 600 photos retouchées',
            'Film de mariage de 5 à 8 min',
            'Teaser court',
            'Galerie privée',
            'Livraison HD',
            'Aperçu rapide',
          ],
          featured: true,
        },
        {
          name: 'Collection Maison',
          price: 'À partir de 5 790 €',
          desc: 'Pour une couverture haut de gamme pensée pour les mariages les plus complets et les projets les plus exigeants.',
          items: [
            'Couverture photo + vidéo premium',
            'Jusqu’à 12 heures de présence',
            '600 à 800 photos retouchées',
            'Film de mariage de 8 à 12 min',
            'Teaser',
            'Galerie privée premium',
            'Livraison HD',
            'Options premium possibles',
          ],
          featured: false,
        },
      ]
    : [
        {
          name: 'Essential Collection',
          price: 'From €2,790',
          desc: 'For couples who want the key moments covered with a clear, elegant and complete package.',
          items: [
            '1 photographer + 1 videographer',
            '6 hours coverage',
            '200 to 300 edited photos',
            '3 to 5 min wedding film',
            'Private online gallery',
            'HD delivery',
          ],
          featured: false,
        },
        {
          name: 'Signature Collection',
          price: 'From €4,190',
          desc: 'The ideal collection for more complete coverage, more comfort and a richer memory of the day.',
          items: [
            '1 photographer + 1 videographer',
            '10 hours coverage',
            '400 to 600 edited photos',
            '5 to 8 min wedding film',
            'Short teaser',
            'Private gallery',
            'HD delivery',
            'Quick preview',
          ],
          featured: true,
        },
        {
          name: 'Maison Collection',
          price: 'From €5,790',
          desc: 'For high-end coverage designed for the most complete weddings and the most demanding projects.',
          items: [
            'Premium photo + video coverage',
            'Up to 12 hours coverage',
            '600 to 800 edited photos',
            '8 to 12 min wedding film',
            'Teaser',
            'Premium private gallery',
            'HD delivery',
            'Premium options available',
          ],
          featured: false,
        },
      ];

  const faqItems = isFr
    ? [
        {
          q: 'Quel est le prix d’un photographe et vidéaste mariage ?',
          a: 'Le prix dépend du temps de présence, du niveau de couverture et des livrables choisis. Une formule photo + vidéo mariage peut commencer à partir de 2 790 €.',
        },
        {
          q: 'Combien de photos sont livrées pour un mariage ?',
          a: 'Selon la collection choisie et le rythme de la journée, la livraison peut représenter environ 200 à 800 photos retouchées.',
        },
        {
          q: 'Quelle est la durée du film de mariage ?',
          a: 'Selon la formule retenue, un film de mariage peut durer environ 3 à 12 minutes, avec parfois un teaser complémentaire.',
        },
        {
          q: 'Intervenez-vous uniquement à Paris ?',
          a: 'Non. SOREL Studio est basé à Paris mais intervient dans toute la France selon les projets.',
        },
        {
          q: 'Comment savoir si votre date est disponible ?',
          a: 'Il suffit d’envoyer une demande avec votre date et votre lieu. L’équipe revient rapidement avec une première confirmation.',
        },
      ]
    : [
        {
          q: 'How much does a wedding photographer and videographer cost?',
          a: 'The price depends on hours of coverage, the desired level of service and the deliverables. A wedding photo + video package can start from €2,790.',
        },
        {
          q: 'How many photos are delivered for a wedding?',
          a: 'Depending on the collection and the rhythm of the day, delivery can range from around 200 to 800 edited photos.',
        },
        {
          q: 'How long is the wedding film?',
          a: 'Depending on the chosen collection, a wedding film can run from around 3 to 12 minutes, sometimes with an additional teaser.',
        },
        {
          q: 'Do you only work in Paris?',
          a: 'No. SOREL Studio is based in Paris and works throughout France depending on the project.',
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
            src="https://images.pexels.com/photos/33642048/pexels-photo-33642048.jpeg?auto=compress&cs=tinysrgb&w=1800"
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

            <p className="text-sm md:text-base text-sorel-cream/80 font-light leading-[1.9] max-w-2xl mb-10">
              {page.heroText}
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              {page.heroBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center rounded-full border border-sorel-cream/15 bg-sorel-cream/5 px-4 py-2 text-[11px] tracking-[0.12em] uppercase text-sorel-cream/85"
                >
                  {badge}
                </span>
              ))}
            </div>

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
                    {index === 2 && <Camera size={16} className="text-sorel-champagne" />}
                    {index === 3 && <Film size={16} className="text-sorel-champagne" />}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="sorel-divider" />
                <p className="sorel-label">
                  {isFr ? 'Choisir la bonne formule' : 'Choosing the right setup'}
                </p>
              </div>
              <h2 className="sorel-heading text-4xl md:text-5xl mb-6">{page.compareTitle}</h2>
              <p className="text-sm text-sorel-graphite font-light leading-[2]">
                {page.compareText}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  title: isFr ? 'Photo seule' : 'Photo only',
                  text: isFr
                    ? 'Idéale si vous privilégiez l’image fixe, les portraits, les émotions et un reportage intemporel.'
                    : 'Ideal if you prioritise still imagery, portraits, emotion and a timeless report.',
                },
                {
                  title: isFr ? 'Vidéo seule' : 'Video only',
                  text: isFr
                    ? 'Parfaite pour revivre les mouvements, l’énergie, les voix et l’ambiance réelle de votre journée.'
                    : 'Perfect for reliving movement, energy, voices and the real atmosphere of your day.',
                },
                {
                  title: isFr ? 'Photo + vidéo' : 'Photo + video',
                  text: isFr
                    ? 'La formule la plus complète, la plus populaire et la plus rassurante pour une mémoire totale du mariage.'
                    : 'The most complete, most popular and most reassuring option for a full memory of the wedding.',
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className={`border border-sorel-black/6 p-6 ${
                    i === 2 ? 'bg-sorel-white' : 'bg-transparent'
                  }`}
                >
                  <h3 className="font-display text-2xl font-light mb-3">{item.title}</h3>
                  <p className="text-sm text-sorel-graphite font-light leading-[1.9]">
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
                  <div key={item.title} className="border border-sorel-black/6 p-6">
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

      <section className="sorel-section bg-sorel-cream">
        <div className="sorel-container">
          <div className="flex items-center gap-4 mb-8">
            <div className="sorel-divider" />
            <p className="sorel-label">{isFr ? 'Portfolio mariage' : 'Wedding portfolio'}</p>
          </div>
          <h2 className="sorel-heading text-4xl md:text-5xl mb-10">
            {isFr ? 'Quelques mariages racontés par SOREL' : 'A few weddings told by SOREL'}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[260px] gap-3">
            {[
              'https://images.pexels.com/photos/33642048/pexels-photo-33642048.jpeg?auto=compress&cs=tinysrgb&w=900',
              'https://images.pexels.com/photos/33066203/pexels-photo-33066203.jpeg?auto=compress&cs=tinysrgb&w=900',
              'https://images.pexels.com/photos/30208853/pexels-photo-30208853.jpeg?auto=compress&cs=tinysrgb&w=900',
              'https://images.pexels.com/photos/33964851/pexels-photo-33964851.jpeg?auto=compress&cs=tinysrgb&w=900',
              'https://images.pexels.com/photos/33964853/pexels-photo-33964853.jpeg?auto=compress&cs=tinysrgb&w=900',
              'https://images.pexels.com/photos/31953122/pexels-photo-31953122.jpeg?auto=compress&cs=tinysrgb&w=900',
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

      <section className="sorel-section bg-sorel-white">
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
                <div key={step} className="border border-sorel-black/6 p-6 md:p-5">
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

      <section className="sorel-section bg-sorel-cream">
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

      <section className="sorel-section bg-sorel-white">
        <div className="sorel-container max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="sorel-divider" />
            <p className="sorel-label">FAQ</p>
          </div>
          <h2 className="sorel-heading text-4xl md:text-5xl mb-10">{page.faqTitle}</h2>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <details key={item.q} className="group border border-sorel-black/6 bg-sorel-cream p-6">
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
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-sorel-black/82" />
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

          <p className="text-sm text-sorel-cream/75 font-light mb-10 max-w-2xl mx-auto leading-[1.9]">
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
              className="text-[11px] font-medium tracking-[0.15em] uppercase text-sorel-cream/75 hover:text-sorel-white transition-colors inline-flex items-center gap-2"
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
