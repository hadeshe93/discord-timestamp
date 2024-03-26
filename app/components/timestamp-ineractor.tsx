"use client";
import { ChangeEventHandler, useState, useEffect } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import RelativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/da'; // 丹麦语
import 'dayjs/locale/de'; // 德语
import 'dayjs/locale/en-gb'; // 英国英语
import 'dayjs/locale/en'; // 美国英语
import 'dayjs/locale/es'; // 西班牙语
import 'dayjs/locale/zh-cn'; // 中文
import Copy from '../../components/Copy';

const SUPPORTED_LANGS = [
  'zh-cn',
  'en',
  'de',
  'da',
  'es',
];

const FORMAT_RENDERER_LIST = [
  {
    format: 'F',
    render: (date: Dayjs) => date.format('LLLL'),
    description: 'Long Date/Time',
  },
  {
    format: 'f',
    render: (date: Dayjs) => date.format('LLL'),
    description: 'Short Date/Time',
  },
  {
    format: 'D',
    render: (date: Dayjs) => date.format('LL'),
    description: 'Long Date',
  },
  {
    format: 'd',
    render: (date: Dayjs) => date.format('L'),
    description: 'Short Date',
  },
  {
    format: 'T',
    render: (date: Dayjs) => date.format('LTS'),
    description: 'Long Time',
  },
  {
    format: 't',
    render: (date: Dayjs) => date.format('LT'),
    description: 'Long Time',
  },
  {
    format: 'R',
    render: (date: Dayjs) => date.fromNow(),
    description: 'Relative Time',
  },
];

export default function TimestampInteractor() {
  // 变量
  const [date, setDate] = useState<Date | undefined>(undefined);
  const inputValue = date ? dayjs(date).format('YYYY-MM-DDTHH:mm') : '';
  const timestamp = date ? Number(`${date.getTime()}`.substring(0, 10)) : 0;
  const dayjsObj = dayjs(date);
  // 事件回调
  const onTimestampChanged: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setDate(new Date(evt.target.value));
  };
  const onCopy = (id: string) => {
    const target = document.querySelector(`#${id}`) as HTMLInputElement;
    target.select();
    document.execCommand('copy');
  };
  // 生命周期
  useEffect(() => {
    const currentLang = navigator.language.toLocaleLowerCase();
    // 先强制使用 en
    const dayjsLang = SUPPORTED_LANGS.includes(currentLang) ? 'en' : 'en';
    dayjs.extend(LocalizedFormat);
    dayjs.extend(RelativeTime);
    dayjs.locale(dayjsLang);
    setDate(new Date());
  }, []);
  // 渲染
  return (
    <div>
      <input
        value={inputValue}
        type="datetime-local"
        className="inputer mt-5"
        placeholder="Please"
        onChange={onTimestampChanged}
      />
      {
        !date
          ? null
          : (
            <div className='text-left w-2/3 m-auto mt-3'>
            {
              FORMAT_RENDERER_LIST.map((item, idx) => {
                const markdownText = `<t:${timestamp}:${item.format}>`;
                // const markdownText = `&lt;t:${timestamp}:${item.format}&gt;`;
                const codeId = `code-${item.format}`;
                return (
                  <div key={idx} className='flex items-center justify-between mb-2'>
                    <p>
                      {/* <code className='code'>{markdownText}</code> */}
                      <input className='code' id={`code-${item.format}`} type="text" value={markdownText} readOnly />
                      <span className='ml-2'>{item.render(dayjsObj)}</span>
                    </p>
                    <Copy className='manual-link' onClick={() => onCopy(codeId)} />
                  </div>
                );
              })
            }
          </div>
          )
      }
    </div>
  );
}
