'use client';

import { MessageCircle } from 'lucide-react';
import { brand } from '@/data/brand';

export default function WhatsAppButton() {
  const url = `https://wa.me/${brand.whatsapp.replace('+', '')}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
    >
      <MessageCircle size={24} className="text-white" fill="white" />
    </a>
  );
}
