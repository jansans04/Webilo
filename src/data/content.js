import { ca } from './locales/ca';
import { es } from './locales/es';
import { en } from './locales/en';

export const locales = {
  ca,
  es,
  en,
};

export const defaultLocale = 'ca';

export const activeContent = locales[defaultLocale];

export const availableLocales = Object.keys(locales);