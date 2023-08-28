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
    brand: 'Lenova',
    name: 'Q24 10i 24` Monitor',
    score: 3,
    imgSrc: '/lenova-q24i-.png',
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
    brand: 'Ikea',
    name: 'LAGKAPTEN/ADILS 120x60 Beyaz',
    score: 3,
    imgSrc: '/LAGKAPTEN_ADIL.png',
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
  }
]