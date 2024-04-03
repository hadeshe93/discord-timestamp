'use client';
import { ChangeEventHandler, useState, useEffect, useMemo } from 'react';
import flatpickr from 'flatpickr';
import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import RelativeTime from 'dayjs/plugin/relativeTime';
import { insertScript } from '@/utils/script';
import Loading from '@/components/Loading';
import IconCopy from '@/components/IconCopy';
import { getSupportedLangsMap, getSupportedLocales, DEFAULT_LOCALE, FORMAT_RENDERER_LIST } from './configs';

import 'dayjs/locale/en';
import 'flatpickr/dist/themes/light.css';

// 全局唯一
const supportedLangsMap = getSupportedLangsMap();
export default function TimestampInteractor() {
  // 变量
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [locale, setLocale] = useState(DEFAULT_LOCALE);
  const [loading, setLoading] = useState(false);
  const timestamp = date ? Number(`${date.getTime()}`.substring(0, 10)) : 0;
  const dayjsObj = useMemo(() => dayjs(date), [date]);
  const supportedLocales = getSupportedLocales(supportedLangsMap);
  // 事件回调
  const onCopy = (id: string) => {
    const target = document.querySelector(`#${id}`) as HTMLInputElement;
    target.select();
    document.execCommand('copy');
  };
  const onLocaleChanged: ChangeEventHandler = (evt) => {
    const theValue = (evt.target as HTMLSelectElement).value;
    // @ts-ignore
    const supportLangLocale = supportedLangsMap[theValue];
    if (!supportLangLocale) return;
    const callback = () => {
      supportedLangsMap[theValue].loaded = true;
      dayjs.locale(theValue);
      setLocale(theValue);
      setLoading(false);
    };
    if (!supportLangLocale.loaded) {
      setLoading(true);
      insertScript(supportLangLocale.localeUrl).then(() => {
        callback();
      });
    } else {
      callback();
    }
  };
  // 生命周期
  useEffect(() => {
    const dayjsLang = DEFAULT_LOCALE;
    if (!window.dayjs) {
      window.dayjs = dayjs;
    }
    dayjs.extend(LocalizedFormat);
    dayjs.extend(RelativeTime);
    dayjs.locale(dayjsLang);
    const defaultDate = new Date();
    setDate(defaultDate);
    const targetDom = document.querySelector('#discord-timestamp-inputer');
    flatpickr(targetDom as Node, {
      defaultDate,
      enableTime: true,
      disableMobile: true,
      minuteIncrement: 1,
      onChange(value) {
        setDate(value ? new Date((value as unknown as Date).toString()) : undefined);
      },
    });
  }, []);
  // 渲染
  return (
    <Loading loading={loading}>
      <div className='pt-5 pb-5'>
        <input id="discord-timestamp-inputer" type="text" readOnly className="inputer" placeholder="Please" />
        <select
          className="inputer ml-2 w-24"
          name="locale"
          id="locale-selector"
          onChange={onLocaleChanged}
          value={locale}
        >
          {supportedLocales.map((item, idx) => (
            <option key={idx} value={item.locale}>
              {item.label}
            </option>
          ))}
        </select>
        {!date && locale ? null : (
          <div className="text-left w-auto sm:w-2/3 m-auto mt-3">
            {FORMAT_RENDERER_LIST.map((item, idx) => {
              const markdownText = `<t:${timestamp}:${item.format}>`;
              // const markdownText = `&lt;t:${timestamp}:${item.format}&gt;`;
              const codeId = `code-${item.format}`;
              return (
                <div key={idx} className="flex items-center justify-between mb-2">
                  <p>
                    {/* <code className='code'>{markdownText}</code> */}
                    <input
                      className="code block sm:inline"
                      id={`code-${item.format}`}
                      type="text"
                      value={markdownText}
                      readOnly
                    />
                    <span className="ml-2 block sm:inline font-semibold">{item.render(dayjsObj, locale)}</span>
                  </p>
                  <IconCopy className="manual-link" onClick={() => onCopy(codeId)} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Loading>
  );
}
