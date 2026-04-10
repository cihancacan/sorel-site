import frMessages from '@/messages/fr.json';
import enMessages from '@/messages/en.json';

type Messages = typeof frMessages;

export function getMessages(locale: string): Messages {
  return locale === 'en' ? enMessages : frMessages;
}

function getNestedValue(obj: Record<string, any>, path: string): string {
  const keys = path.split('.');
  let current: any = obj;
  for (const key of keys) {
    if (current == null || typeof current !== 'object') return path;
    current = current[key];
  }
  return typeof current === 'string' ? current : path;
}

export function createTranslator(messages: Messages) {
  return (key: string): string => getNestedValue(messages as Record<string, any>, key);
}
