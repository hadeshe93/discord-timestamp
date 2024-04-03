import { type dayjs } from 'dayjs';

declare global {
  interface Window {
    dayjs?: dayjs;
  }
}