import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { servicesFr } from '@/data/services.fr';
import { servicesEn } from '@/data/services.en';
import { cities } from '@/data/cities';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ParsedSlug =
  | { type: 'service'; serviceSlug: string }
  | { type: 'service-city'; serviceSlug: string; citySlug: string }
  | { type: 'unknown' };

export function parseSlug(slug: string, locale: 'fr' | 'en'): ParsedSlug {
  const services = locale === 'fr' ? servicesFr : servicesEn;

  const directService = services.find((s) => s.slug === slug);
  if (directService) {
    return { type: 'service', serviceSlug: slug };
  }

  for (const service of services) {
    if (slug.startsWith(`${service.slug}-`)) {
      const citySlug = slug.slice(service.slug.length + 1);
      const city = cities.find((c) => c.slug === citySlug);
      if (city) {
        return { type: 'service-city', serviceSlug: service.slug, citySlug };
      }
    }
  }

  return { type: 'unknown' };
}
