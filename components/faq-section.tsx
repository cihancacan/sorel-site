'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQ } from '@/data/faqs.fr';

interface FaqSectionProps {
  title: string;
  subtitle: string;
  faqs: FAQ[];
}

export default function FaqSection({ title, subtitle, faqs }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="sorel-section bg-sorel-cream">
      <div className="sorel-container">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="sorel-divider" />
              <p className="sorel-label">FAQ</p>
              <div className="sorel-divider" />
            </div>
            <h2 className="sorel-heading text-4xl md:text-5xl mb-4">{title}</h2>
            {subtitle && <p className="text-sm text-sorel-silver font-light max-w-md mx-auto">{subtitle}</p>}
          </div>
        )}

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-sorel-black/6"
            >
              <button
                className="w-full flex items-center justify-between py-7 text-left group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="flex items-center gap-5 pr-8">
                  <span className="sorel-label text-sorel-champagne/60 flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-lg font-light text-sorel-black group-hover:text-sorel-anthracite transition-colors">
                    {faq.question}
                  </span>
                </span>
                <ChevronDown
                  size={16}
                  className={`flex-shrink-0 text-sorel-silver transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === i ? 'max-h-96 pb-7' : 'max-h-0'
                }`}
              >
                <p className="text-sm text-sorel-graphite font-light leading-[1.9] pl-[52px]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
