import type { MetadataRoute } from 'next'
import { cities } from '@/data/cities'
import { servicesFr } from '@/data/services.fr'
import { servicesEn } from '@/data/services.en'

const BASE_URL = 'https://sorelstudio.fr'

const staticPages = [
  { fr: '', en: '' },
  { fr: 'contact', en: 'contact' },
  { fr: 'faq', en: 'faq' },
  { fr: 'films', en: 'films' },
  { fr: 'mentions-legales', en: 'mentions-legales' },
  { fr: 'cgu', en: 'cgu' },
  { fr: 'cgv', en: 'cgv' },
  { fr: 'reserver', en: 'book' },
  { fr: 'realisations', en: 'work' },
  { fr: 'signature-sorel', en: 'sorel-signature' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = []

  for (const page of staticPages) {
    const frUrl = `${BASE_URL}/fr${page.fr ? `/${page.fr}` : ''}`
    const enUrl = `${BASE_URL}/en${page.en ? `/${page.en}` : ''}`

    urls.push(
      {
        url: frUrl,
        lastModified: new Date(),
        alternates: {
          languages: {
            fr: frUrl,
            en: enUrl,
          },
        },
      },
      {
        url: enUrl,
        lastModified: new Date(),
        alternates: {
          languages: {
            fr: frUrl,
            en: enUrl,
          },
        },
      }
    )
  }

  servicesFr.forEach((serviceFr, index) => {
    const serviceEn = servicesEn[index]
    if (!serviceEn) return

    const frServiceUrl = `${BASE_URL}/fr/${serviceFr.slug}`
    const enServiceUrl = `${BASE_URL}/en/${serviceEn.slug}`

    urls.push(
      {
        url: frServiceUrl,
        lastModified: new Date(),
        alternates: {
          languages: {
            fr: frServiceUrl,
            en: enServiceUrl,
          },
        },
      },
      {
        url: enServiceUrl,
        lastModified: new Date(),
        alternates: {
          languages: {
            fr: frServiceUrl,
            en: enServiceUrl,
          },
        },
      }
    )

    cities.forEach((city) => {
      const frCityUrl = `${BASE_URL}/fr/${serviceFr.slug}-${city.slug}`
      const enCityUrl = `${BASE_URL}/en/${serviceEn.slug}-${city.slug}`

      urls.push(
        {
          url: frCityUrl,
          lastModified: new Date(),
          alternates: {
            languages: {
              fr: frCityUrl,
              en: enCityUrl,
            },
          },
        },
        {
          url: enCityUrl,
          lastModified: new Date(),
          alternates: {
            languages: {
              fr: frCityUrl,
              en: enCityUrl,
            },
          },
        }
      )
    })
  })

  return urls
}
