import type { Service } from './services.fr';
import type { City } from './cities';

export function generateServiceSeoFr(service: Service): { intro: string; process: string; whyUs: string; faq: { q: string; a: string }[] } {
  if (service.category === 'studio-production') {
  return {
    intro: `SOREL accompagne les marques, créateurs, médias et productions dans la création de formats audiovisuels premium : studio podcast, émissions, interviews, captations, courts-métrages et tournages de film. Chaque projet bénéficie d'une direction visuelle exigeante, d'une préparation précise et d'une exécution fluide, pensée pour diffuser une image forte, cohérente et haut de gamme.`,
    process: `Notre processus commence par le cadrage du format, des objectifs, du rythme éditorial et des contraintes techniques. Nous préparons ensuite la mise en scène, la lumière, le son, les axes caméra et le déroulé de tournage. Le jour J, notre équipe coordonne la captation avec rigueur pour sécuriser le rendu. En post-production, nous assurons sélection, montage, étalonnage et déclinaisons adaptées à vos canaux de diffusion.`,
    whyUs: `SOREL aborde chaque production comme une maison visuelle, pas comme une simple prestation technique. Cela signifie une signature cohérente, un haut niveau d'exigence sur le cadre, la lumière et le rythme, et la capacité à produire aussi bien des formats éditoriaux réguliers que des projets narratifs plus ambitieux. Studio podcast, émission, interview, court-métrage ou film : nous construisons une image premium, claire et durable.`,
    faq: [
      { q: 'Combien coûte une production audiovisuelle SOREL ?', a: 'Nos tarifs dépendent du format, du nombre de caméras, du lieu, de la durée de tournage et du niveau de post-production attendu. Nous établissons un devis précis selon votre projet.' },
      { q: 'Comment préparer un tournage ?', a: 'Nous cadrons avec vous le format, les objectifs, le planning, les besoins techniques et le rendu attendu afin de préparer une production fluide et cohérente.' },
      { q: 'Quels sont les délais de livraison ?', a: 'Les délais varient selon la complexité du projet, le volume de rushes et les livrables attendus. Un planning clair est défini en amont avec votre équipe.' },
    ],
  };
}
  if (service.category === 'studio-production') {
  return {
    intro: `Vous recherchez une équipe de production audiovisuelle premium à ${city.name} ? SOREL accompagne studios podcast, émissions, interviews, courts-métrages et tournages de film à ${city.name} et dans toute la région ${city.region}. Nous intervenons avec une direction visuelle exigeante, une organisation fluide et une exécution pensée pour les marques, médias, talents et productions.`,
    local: `À ${city.name}, nous adaptons chaque tournage au lieu, au format et aux contraintes de diffusion : studio, bureaux, plateau, hôtel, lieu événementiel ou décor extérieur. Cette souplesse nous permet de produire des contenus premium tout en gardant la cohérence de la signature SOREL.`,
    advantages: `Choisir SOREL à ${city.name}, c'est bénéficier d'un partenaire capable de structurer un projet audiovisuel de bout en bout : préparation, tournage, direction visuelle, captation multi-caméras et post-production. Nous couvrons aussi bien les formats récurrents que les productions plus ambitieuses, avec un rendu élégant et immédiatement exploitable.`,
    nearby: `Nous intervenons à ${city.name} mais aussi dans les villes proches et plus largement dans toute la France. Contactez-nous pour étudier votre format, vérifier les disponibilités et organiser un tournage adapté à votre calendrier.`,
  };
}
  const isPhoto = service.type === 'photo';
  const isVideo = service.type === 'video';
  const media = isPhoto ? 'photographe' : isVideo ? 'vid\u00E9aste' : 'photographe et vid\u00E9aste';
  const mediaPlural = isPhoto ? 'photographies' : isVideo ? 'films' : 'photos et films';

  return {
    intro: `Faire appel \u00E0 un ${media} professionnel pour votre projet, c'est investir dans des souvenirs qui traverseront le temps. Chez SOREL, chaque prestation est guid\u00E9e par une direction artistique unique, une rigueur constante et un regard d'exception. Nous ne nous contentons pas de capturer des images : nous restituons l'\u00E9motion, l'atmosph\u00E8re et l'\u00E9nergie de chaque instant tel que vous l'avez v\u00E9cu. Notre \u00E9quipe de ${media}s exp\u00E9riment\u00E9s travaille avec du mat\u00E9riel haut de gamme et ma\u00EEtrise les techniques les plus avanc\u00E9es de ${isPhoto ? 'prise de vue et de retouche' : isVideo ? 'captation et de montage cin\u00E9matographique' : 'photographie et de vid\u00E9ographie'} pour offrir un r\u00E9sultat d'une qualit\u00E9 exceptionnelle. Que ce soit pour un \u00E9v\u00E9nement intime ou une grande c\u00E9l\u00E9bration, la signature SOREL garantit une coh\u00E9rence visuelle totale et un rendu premium.`,
    process: `Notre processus commence par un \u00E9change approfondi pour comprendre vos attentes, votre univers et l'atmosph\u00E8re que vous souhaitez. Nous \u00E9tablissons ensuite un devis personnalis\u00E9 adapt\u00E9 \u00E0 vos besoins sp\u00E9cifiques. Le jour de la prestation, notre \u00E9quipe arrive en avance pour rep\u00E9rer les lieux, \u00E9tudier la lumi\u00E8re et anticiper les moments cl\u00E9s. Apr\u00E8s la prestation, nos ${mediaPlural} passent par un processus de s\u00E9lection et de post-production minutieux pour garantir que chaque livrable refl\u00E8te la signature SOREL. Les d\u00E9lais de livraison sont pr\u00E9cis\u00E9s dans votre devis, avec des options express disponibles pour les besoins urgents.`,
    whyUs: `Ce qui distingue SOREL des autres prestataires, c'est notre approche de maison. Contrairement \u00E0 un freelance individuel, vous r\u00E9servez une maison avec sa propre direction artistique. Quel que soit le talent assign\u00E9 \u00E0 votre projet, la signature SOREL est pr\u00E9sente : m\u00EAme esth\u00E9tique, m\u00EAme pr\u00E9cision, m\u00EAme qualit\u00E9 de rendu. Nous proposons \u00E9galement des options premium exclusives : livraison express r\u00E9seaux sociaux sous 48h, teaser vertical 24h, impression photo sur place, albums artisanaux et portraits premium de vos invit\u00E9s. Chaque d\u00E9tail est pens\u00E9 pour une exp\u00E9rience compl\u00E8te et haut de gamme.`,
    faq: [
      { q: `Combien co\u00FBte un ${media} SOREL ?`, a: `Nos tarifs varient selon la dur\u00E9e, le type de prestation et les options choisies. Nous \u00E9tablissons un devis personnalis\u00E9 pour chaque projet. Contactez-nous pour recevoir une estimation adapt\u00E9e \u00E0 vos besoins.` },
      { q: 'Comment r\u00E9server une date ?', a: 'Remplissez notre formulaire de r\u00E9servation en ligne avec les d\u00E9tails de votre projet. Notre \u00E9quipe vous recontactera sous 24 heures pour confirmer les disponibilit\u00E9s et \u00E9tablir un devis.' },
      { q: 'Quels sont les d\u00E9lais de livraison ?', a: `Les ${mediaPlural} sont livr\u00E9es ${isPhoto ? 'sous 3 \u00E0 6 semaines' : isVideo ? 'sous 8 \u00E0 12 semaines' : '(photos sous 3-6 semaines, films sous 8-12 semaines)'} apr\u00E8s la prestation. Des options de livraison express sont disponibles.` },
    ],
  };
}

export function generateServiceSeoEn(service: Service): { intro: string; process: string; whyUs: string; faq: { q: string; a: string }[] } {
  if (service.category === 'studio-production') {
  return {
    intro: `SOREL supports brands, creators, media teams and productions with premium audiovisual formats: podcast studios, shows, interviews, coverage, short films and film productions. Each project is built on demanding visual direction, precise preparation and smooth execution designed to deliver a strong, coherent and high-end image.`,
    process: `Our process begins by defining the format, objectives, editorial rhythm and technical constraints. We then prepare staging, lighting, sound, camera angles and the production flow. On shoot day, our team handles the capture with precision to secure the result. In post-production, we manage selection, editing, grading and the final adaptations required for your distribution channels.`,
    whyUs: `SOREL approaches every production as a visual house, not as a purely technical provider. That means a coherent signature, a high level of discipline in framing, lighting and rhythm, and the ability to produce both recurring editorial formats and more ambitious narrative projects. Podcast studio, show, interview, short film or film production: we build premium images with clarity and consistency.`,
    faq: [
      { q: 'How much does a SOREL audiovisual production cost?', a: 'Our rates depend on the format, number of cameras, location, shooting duration and post-production level required. We prepare a precise quote based on your project.' },
      { q: 'How do we prepare a shoot?', a: 'We define the format, objectives, planning, technical needs and final render with you in order to build a smooth and coherent production.' },
      { q: 'What are the delivery timelines?', a: 'Timelines depend on project complexity, rush volume and required deliverables. A clear schedule is established upfront with your team.' },
    ],
  };
}
  if (service.category === 'studio-production') {
  return {
    intro: `Looking for a premium audiovisual production team in ${city.name}? SOREL supports podcast studios, shows, interviews, short films and film productions in ${city.name} and across the ${city.region} region. We operate with demanding visual direction, smooth organization and execution designed for brands, media teams, talents and productions.`,
    local: `In ${city.name}, we adapt each shoot to the venue, format and distribution needs: studio, office, set, hotel, event space or exterior location. This flexibility allows us to produce premium content while preserving the consistency of the SOREL signature.`,
    advantages: `Choosing SOREL in ${city.name} means working with a partner able to structure an audiovisual project end to end: preparation, production, visual direction, multi-camera capture and post-production. We cover both recurring formats and more ambitious productions with an elegant, immediately usable output.`,
    nearby: `We operate in ${city.name}, nearby cities and more broadly throughout France. Contact us to define your format, confirm availability and organize a production aligned with your schedule.`,
  };
}
  const isPhoto = service.type === 'photo';
  const isVideo = service.type === 'video';
  const media = isPhoto ? 'photographer' : isVideo ? 'videographer' : 'photographer and videographer';
  const mediaPlural = isPhoto ? 'photographs' : isVideo ? 'films' : 'photos and films';

  return {
    intro: `Hiring a professional ${media} for your project is an investment in memories that will last a lifetime. At SOREL, every engagement is guided by a unique artistic direction, constant rigor, and an exceptional perspective. We don't just capture images: we recreate the emotion, atmosphere, and energy of every moment exactly as you lived it. Our team of experienced ${media}s works with high-end equipment and masters the most advanced ${isPhoto ? 'shooting and retouching' : isVideo ? 'filming and cinematic editing' : 'photography and videography'} techniques to deliver exceptional quality. Whether for an intimate event or a grand celebration, the SOREL signature guarantees total visual consistency and premium output.`,
    process: `Our process begins with an in-depth discussion to understand your expectations, your world, and the atmosphere you desire. We then create a personalized quote tailored to your specific needs. On the day of the service, our team arrives early to scout the venue, study the light, and anticipate key moments. After the service, our ${mediaPlural} go through a meticulous selection and post-production process to ensure every deliverable reflects the SOREL signature. Delivery timelines are specified in your quote, with express options available for urgent needs.`,
    whyUs: `What sets SOREL apart from other providers is our house approach. Unlike an individual freelancer, you are booking a house with its own artistic direction. Regardless of which talent is assigned to your project, the SOREL signature is present: same aesthetic, same precision, same quality. We also offer exclusive premium options: 48-hour express social media delivery, 24-hour vertical teaser, on-site photo printing, artisan albums, and premium guest portraits. Every detail is designed for a complete, high-end experience.`,
    faq: [
      { q: `How much does a SOREL ${media} cost?`, a: 'Our rates vary depending on duration, service type, and chosen options. We create a personalized quote for each project. Contact us to receive an estimate tailored to your needs.' },
      { q: 'How do I book a date?', a: 'Fill out our online booking form with your project details. Our team will get back to you within 24 hours to confirm availability and prepare a quote.' },
      { q: 'What are the delivery timelines?', a: `${mediaPlural.charAt(0).toUpperCase() + mediaPlural.slice(1)} are delivered ${isPhoto ? 'within 3 to 6 weeks' : isVideo ? 'within 8 to 12 weeks' : '(photos within 3-6 weeks, films within 8-12 weeks)'} after the service. Express delivery options are available.` },
    ],
  };
}

export function generateCitySeoFr(service: Service, city: City): { intro: string; local: string; advantages: string; nearby: string } {
  const isPhoto = service.type === 'photo';
  const isVideo = service.type === 'video';
  const media = isPhoto ? 'photographe' : isVideo ? 'vid\u00E9aste' : 'photographe et vid\u00E9aste';

  return {
    intro: `Vous recherchez un ${media} professionnel \u00E0 ${city.name} ? SOREL est la maison de photo et film haut de gamme qui intervient \u00E0 ${city.name} et dans toute la r\u00E9gion ${city.region}. Notre \u00E9quipe de ${media}s exp\u00E9riment\u00E9s conna\u00EEt parfaitement ${city.name}, ses lieux embl\u00E9matiques, ses espaces de r\u00E9ception et ses conditions de lumi\u00E8re. Que vous organisiez votre \u00E9v\u00E9nement dans un ch\u00E2teau, un h\u00F4tel de luxe, un jardin priv\u00E9 ou tout autre lieu \u00E0 ${city.name}, nous adaptons notre approche pour sublimer chaque instant avec la signature visuelle SOREL. ${service.description}`,
    local: `\u00C0 ${city.name}, en ${city.region}, SOREL b\u00E9n\u00E9ficie d'une connaissance approfondie du terrain. Nous connaissons les meilleurs lieux pour vos s\u00E9ances photo, les heures de lumi\u00E8re id\u00E9ales et les espaces les plus photog\u00E9niques de la ville et de ses environs. Cette expertise locale, combin\u00E9e \u00E0 notre direction artistique nationale, nous permet d'offrir un service sur-mesure qui tire le meilleur parti de chaque lieu. Nos ${media}s \u00E0 ${city.name} sont form\u00E9s \u00E0 la signature SOREL et garantissent un r\u00E9sultat coh\u00E9rent avec notre standard d'excellence.`,
    advantages: `Choisir SOREL \u00E0 ${city.name}, c'est opter pour une qualit\u00E9 premium sans compromis. Nous proposons une gamme compl\u00E8te de prestations adapt\u00E9es \u00E0 tous types d'\u00E9v\u00E9nements : mariages, fian\u00E7ailles, \u00E9v\u00E9nements priv\u00E9s, \u00E9v\u00E9nements d'entreprise, shootings portrait, couple et famille, demandes en mariage et contenu pour r\u00E9seaux sociaux. Chaque prestation inclut un \u00E9change pr\u00E9alable, un devis personnalis\u00E9, une couverture professionnelle le jour J et une post-production soign\u00E9e. Des options premium sont disponibles : livraison express, teaser vid\u00E9o, impressions sur place, albums artisanaux.`,
    nearby: `Bas\u00E9s en r\u00E9gion ${city.region}, nous intervenons \u00E9galement dans les villes et communes voisines de ${city.name}. Notre \u00E9quipe se d\u00E9place dans toute la France pour couvrir vos \u00E9v\u00E9nements, o\u00F9 qu'ils se tiennent. La signature SOREL vous suit partout, avec le m\u00EAme niveau d'exigence et la m\u00EAme qualit\u00E9 premium. R\u00E9servez d\u00E8s maintenant pour garantir la disponibilit\u00E9 de notre \u00E9quipe \u00E0 ${city.name}.`,
  };
}

export function generateCitySeoEn(service: Service, city: City): { intro: string; local: string; advantages: string; nearby: string } {
  const isPhoto = service.type === 'photo';
  const isVideo = service.type === 'video';
  const media = isPhoto ? 'photographer' : isVideo ? 'videographer' : 'photographer and videographer';

  return {
    intro: `Looking for a professional ${media} in ${city.name}? SOREL is the high-end photo and film house that operates in ${city.name} and throughout the ${city.region} region. Our team of experienced ${media}s knows ${city.name} perfectly: its iconic venues, reception spaces, and lighting conditions. Whether you're organizing your event in a castle, luxury hotel, private garden, or any other venue in ${city.name}, we adapt our approach to elevate every moment with the SOREL visual signature. ${service.description}`,
    local: `In ${city.name}, ${city.region}, SOREL benefits from deep local knowledge. We know the best locations for your photo sessions, the ideal lighting hours, and the most photogenic spaces in the city and its surroundings. This local expertise, combined with our national artistic direction, allows us to offer a bespoke service that makes the most of every location. Our ${media}s in ${city.name} are trained in the SOREL signature and guarantee results consistent with our standard of excellence.`,
    advantages: `Choosing SOREL in ${city.name} means opting for premium quality without compromise. We offer a complete range of services for all types of events: weddings, engagements, private events, corporate events, portrait, couple and family shoots, proposals, and social media content. Each service includes a preliminary discussion, personalized quote, professional coverage on the day, and careful post-production. Premium options are available: express delivery, video teaser, on-site printing, artisan albums.`,
    nearby: `Based in the ${city.region} region, we also operate in neighboring cities and towns near ${city.name}. Our team travels throughout France to cover your events, wherever they may be. The SOREL signature follows you everywhere, with the same level of excellence and the same premium quality. Book now to guarantee the availability of our team in ${city.name}.`,
  };
}
