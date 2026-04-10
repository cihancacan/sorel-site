export const routes = {
  fr: {
    home: '/fr',
    signature: '/fr/signature-sorel',
    realisations: '/fr/realisations',
    films: '/fr/films',
    faq: '/fr/faq',
    contact: '/fr/contact',
    reserver: '/fr/reserver',
    mentionsLegales: '/fr/mentions-legales',
    cgu: '/fr/cgu',
    cgv: '/fr/cgv',
    service: (slug: string) => `/fr/${slug}`,
    serviceCity: (service: string, city: string) => `/fr/${service}-${city}`,
  },
  en: {
    home: '/en',
    signature: '/en/sorel-signature',
    realisations: '/en/work',
    films: '/en/films',
    faq: '/en/faq',
    contact: '/en/contact',
    reserver: '/en/book',
    mentionsLegales: '/en/mentions-legales',
    cgu: '/en/cgu',
    cgv: '/en/cgv',
    service: (slug: string) => `/en/${slug}`,
    serviceCity: (service: string, city: string) => `/en/${service}-${city}`,
  },
};

export function getLocalizedRoutes(locale: 'fr' | 'en') {
  return routes[locale];
}
