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
    // 丹麦语
    da: {
      localeUrl: 'https://cdn.jsdelivr.net/npm/dayjs@1/locale/da.js',
      loaded: false,
      label: 'Dansk',
    },
    // 德语
    de: {
      localeUrl: 'https://cdn.jsdelivr.net/npm/dayjs@1/locale/de.js',
      loaded: false,
      label: 'Deutsch',
    },
    // 西班牙语
    es: {
      localeUrl: 'https://cdn.jsdelivr.net/npm/dayjs@1/locale/es.js',
      loaded: false,
      label: 'Español',
    },
    // 法语
    fr: {
      localeUrl: 'https://cdn.jsdelivr.net/npm/dayjs@1/locale/fr.js',
      loaded: false,
      label: 'Français',
    },
    // 荷兰语
    nl: {
      localeUrl: 'https://cdn.jsdelivr.net/npm/dayjs@1/locale/nl.js',
      loaded: false,
      label: 'Nederlands',
    },
    // 葡萄牙语
    pt: {
      localeUrl: 'https://cdn.jsdelivr.net/npm/dayjs@1/locale/pt.js',
      loaded: false,
      label: 'Português',
    },
    ko: {
      localeUrl: 'https://cdn.jsdelivr.net/npm/dayjs@1/locale/ko.js',
      loaded: false,
      label: '한국어',
    },
    ja: {
      localeUrl: 'https://cdn.jsdelivr.net/npm/dayjs@1/locale/ja.js',
      loaded: false,
      label: '日本語',
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
