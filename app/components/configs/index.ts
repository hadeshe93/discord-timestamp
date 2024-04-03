import { Dayjs } from 'dayjs';

export interface SupportedLang {
  localeUrl: string;
  loaded: boolean;
  label: string;
}
export type SupportedLangsMap = Record<string, SupportedLang>;

export interface SupportedLocaled extends SupportedLang {
  locale: string;
}

export function getSupportedLangsMap(): SupportedLangsMap {
  return {
    en: {
      localeUrl: '',
      loaded: true,
      label: 'English',
    },
    da: {
      localeUrl: 'https://cdn.jsdelivr.net/npm/dayjs@1/locale/da.js',
      loaded: false,
      label: 'Dansk',
    },
    de: {
      localeUrl: 'https://cdn.jsdelivr.net/npm/dayjs@1/locale/de.js',
      loaded: false,
      label: 'Deutsch',
    },
    es: {
      localeUrl: 'https://cdn.jsdelivr.net/npm/dayjs@1/locale/es.js',
      loaded: false,
      label: 'Español',
    },
    pt: {
      localeUrl: 'https://cdn.jsdelivr.net/npm/dayjs@1/locale/pt.js',
      loaded: false,
      label: 'Português',
    },
    'zh-cn': {
      localeUrl: 'https://cdn.jsdelivr.net/npm/dayjs@1/locale/zh-cn.js',
      loaded: false,
      label: '简体中文',
    },
  };
}

export function getSupportedLocales(supportedLangsMap: SupportedLangsMap): SupportedLocaled[] {
  return Object.entries(supportedLangsMap).map(([key, value]) => ({
    ...value,
    locale: key,
  }));
}

export const DEFAULT_LOCALE = 'en';

export const FORMAT_RENDERER_LIST = [
  {
    format: 'F',
    render: (date: Dayjs, locale: string = DEFAULT_LOCALE) => date.locale(locale).format('LLLL'),
    description: 'Long Date/Time',
  },
  {
    format: 'f',
    render: (date: Dayjs, locale: string = DEFAULT_LOCALE) => date.locale(locale).format('LLL'),
    description: 'Short Date/Time',
  },
  {
    format: 'D',
    render: (date: Dayjs, locale: string = DEFAULT_LOCALE) => date.locale(locale).format('LL'),
    description: 'Long Date',
  },
  {
    format: 'd',
    render: (date: Dayjs, locale: string = DEFAULT_LOCALE) => date.locale(locale).format('L'),
    description: 'Short Date',
  },
  {
    format: 'T',
    render: (date: Dayjs, locale: string = DEFAULT_LOCALE) => date.locale(locale).format('LTS'),
    description: 'Long Time',
  },
  {
    format: 't',
    render: (date: Dayjs, locale: string = DEFAULT_LOCALE) => date.locale(locale).format('LT'),
    description: 'Long Time',
  },
  {
    format: 'R',
    render: (date: Dayjs, locale: string = DEFAULT_LOCALE) => date.locale(locale).fromNow(),
    description: 'Relative Time',
  },
];