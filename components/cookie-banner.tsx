'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('sorel-cookies');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('sorel-cookies', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('sorel-cookies', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-sorel-black/95 backdrop-blur-md border-t border-sorel-white/5 px-6 py-5">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs text-sorel-silver/70 font-light leading-relaxed max-w-2xl">
          Ce site utilise des cookies pour ameliorer votre experience de navigation.
          En continuant, vous acceptez notre utilisation des cookies.
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="text-[10px] font-medium tracking-[0.15em] uppercase text-sorel-silver/50 hover:text-sorel-cream transition-colors px-4 py-2"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="text-[10px] font-medium tracking-[0.15em] uppercase bg-sorel-cream text-sorel-black px-6 py-2.5 hover:bg-sorel-champagne transition-colors"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
