import { getRequestConfig } from 'next-intl/server';
import frMessages from '@/messages/fr.json';

export default getRequestConfig(async () => {
  return {
    locale: 'fr',
    messages: frMessages,
  };
});
