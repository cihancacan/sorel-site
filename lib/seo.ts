import { Metadata } from 'next';
import { brand } from '@/data/brand';

interface SeoParams {
  title: string;
  description: string;
  locale: string;
  path?: string;
  noIndex?: boolean;
}

export function buildMetadata({ title, description, locale, path = '', noIndex }: SeoParams): Metadata {
  const url = `${brand.url}${path}`;
  const fullTitle = `${title} | ${brand.name}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(brand.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: brand.name,
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}

export function buildServiceCityMetadata(
  serviceName: string,
  cityName: string,
  locale: 'fr' | 'en',
  serviceSlug: string,
  citySlug: string
): Metadata {
  if (locale === 'fr') {
    return buildMetadata({
      title: `${serviceName} ${cityName}`,
      description: `SOREL, ${serviceName.toLowerCase()} à ${cityName}. Photo & film haut de gamme. Réservez la signature SOREL pour votre événement à ${cityName}.`,
      locale,
      path: `/fr/${serviceSlug}-${citySlug}`,
    });
  }
  return buildMetadata({
    title: `${serviceName} ${cityName}`,
    description: `SOREL, ${serviceName.toLowerCase()} in ${cityName}. High-end photo & film. Book the SOREL signature for your event in ${cityName}.`,
    locale,
    path: `/en/${serviceSlug}-${citySlug}`,
  });
}
