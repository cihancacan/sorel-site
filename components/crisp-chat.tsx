'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

export default function CrispChat() {
  useEffect(() => {
    Crisp.configure('dbf0d82c-f94b-4715-ab9c-c9dd5d7c27f9');
  }, []);

  return null;
}
