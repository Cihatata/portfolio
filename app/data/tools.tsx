import { ToolItem } from "@/app/types";
import { v4 as uuid } from "uuid";

export const TOOLS: Array<ToolItem> = [
  {
    id: uuid(),
    brand: 'Apple',
    name: 'Macbook Air M1 13`3',
    imgSrc: '/mackbook-air-m1.png',
    score: 5,
  },
  {
    id: uuid(),
    brand: 'Apple',
    name: 'Magic Keyboard',
    imgSrc: '/magic-keyboard-.png',
    score: 4,
  },
  {
    id: uuid(),
    brand: 'Apple',
    name: 'Magic Trackpad',
    imgSrc: '/magic-trackpad-.png',
    score: 5,
  },
  {
    id: uuid(),
    brand: 'Apple',
    name: 'AirPods 3. Nesil',
    imgSrc: '/airpods-3-.png',
    score: 5,
  },
  {
    id: uuid(),
    name: '32UN88AP-W UltraFine Ergo 32',
    brand: 'LG',
    score: 0,
    imgSrc: '/ultrafine-monitor-.png',
  },
  {
    id: uuid(),
    name: 'Pomodoro Saati',
    brand: 'TFA Dostmann',
    score: 0,
    imgSrc: '/pomodoro-.png',
  },
  {
    id: uuid(),
    name: 'MX Vertical Mouse',
    brand: 'Logitech',
    score: 0,
    imgSrc: '/mx-vertical-.webp',
  },
  {
    id: uuid(),
    brand: 'Faguswood',
    name: 'Ekran yükseltici, Kayın',
    score: 5,
    imgSrc: '/ekran-yukseltici-.png',
  },
  {
    id: uuid(),
    brand: 'Tischkoenig',
    name: '140x60 Kayın Yükseklik ayarlı masa',
    score: 5,
    imgSrc: '/masa.jpg',
  },
  {
    id: uuid(),
    brand: 'Ikea',
    name: 'Markus',
    score: 4,
    imgSrc: '/markus-.png',
  },
  {
    id: uuid(),
    name: 'Xbox Series X',
    score: 5,
    brand: 'Microsoft',
    imgSrc: '/xbox-series-x.png',
  },
  {
    id: uuid(),
    name: 'Hue Play & Ampul',
    brand: 'Philips',
    score: 5,
    imgSrc: '/hue-play-.png',
  },
  {
    id: uuid(),
    name: 'Şeffaf Tahta Kağıt',
    brand: 'Cengo',
    score: 5,
    imgSrc: '',
  },
  {
    id: uuid(),
    name: 'Xbox Kol Standı',
    brand: 'Spotcha',
    score: 0,
    imgSrc: '',
  }, 
]

export const NEXT_TOOL: Array<ToolItem> = [
  {
    id: uuid(),
    name: 'Pomodoro Saati',
    brand: 'TFA Dostmann',
    score: 0,
    imgSrc: '/pomodoro-.png',
  },
    {
    id: uuid(),
    name: 'Ipad Pro 13 M4',
    brand: 'Apple',
    score: 0,
    imgSrc: '/pomodoro-.png',
  }
]
