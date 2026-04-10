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
    urls.push(
      {
        url: `${BASE_URL}/fr${page.fr ? `/${page.fr}` : ''}`,
        lastModified: new Date(),
      },
      {
        url: `${BASE_URL}/en${page.en ? `/${page.en}` : ''}`,
        lastModified: new Date(),
      }
    )
  }

  servicesFr.forEach((serviceFr, index) => {
    const serviceEn = servicesEn[index]
    if (!serviceEn) return

    urls.push(
      {
        url: `${BASE_URL}/fr/${serviceFr.slug}`,
        lastModified: new Date(),
      },
      {
        url: `${BASE_URL}/en/${serviceEn.slug}`,
        lastModified: new Date(),
      }
    )

    cities.forEach((city) => {
      urls.push(
        {
          url: `${BASE_URL}/fr/${serviceFr.slug}-${city.slug}`,
          lastModified: new Date(),
        },
        {
          url: `${BASE_URL}/en/${serviceEn.slug}-${city.slug}`,
          lastModified: new Date(),
        }
      )
    })
  })

  return urls
}
