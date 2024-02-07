import { v4 as uuid } from "uuid";
import { BlogItem, WorkItem } from "../types";

export const BLOGS: Array<BlogItem> = [
   {
    id: uuid(),
    title: "2023 Değerlendirmesi | Startup Serüveni",
    description: "Bu sene, geçen yılın aksine oldukça stabil bir hayat yaşadım. Bu yüzden yıllık yazımı yazmak için bilgisayarın başına oturduğumda ne yazacağım...",
    published: "12 Ocak, 2024",
    medium: "https://cihatata.medium.com/2022-de%C4%9Ferlendirmesi-tek-eksik-sayg%C4%B1nl%C4%B1k-2374489ac058",
  },
  {
    id: uuid(),
    title: "2022 Değerlendirmesi | Tek eksik saygınlık",
    description: "Bir sene daha bitiyor. Geçen seneler de olduğu gibi bu sene de yılın genel değerlendirmesini yapmak istedim. ",
    published: "31 Aralık, 2022",
    medium: "https://cihatata.medium.com/2022-de%C4%9Ferlendirmesi-tek-eksik-sayg%C4%B1nl%C4%B1k-2374489ac058",
  },
  {
    id: uuid(),
    title: "2021'de neler yaptım? Hardskills’den çok Softskills",
    description: "Konu konu bu seneki deneyimlerimi anlatmaya çalışacağım. İsterseniz direkt en aşağıdaki genel değerlendirme kısmını okuyabilirsiniz.",
    published: "19 Aralık, 2021",
    medium: "https://cihatata.medium.com/2021de-neler-yapt%C4%B1m-hardskillsden-%C3%A7ok-softskills-cee344152967",
  },
  {
    id: uuid(),
    title: "Frontend’e nereden başlamalıyım ?” dedikten sonra 1 yıl geçti",
    description: "Bu yazıda Frontend alanında ilerlerken 2020 yılında neler yaptığımı, nasıl bir yol izlediğimi anlattım.",
    published: "25 Aralık, 2020",
    medium: "https://cihatata.medium.com/frontende-nereden-ba%C5%9Flamal%C4%B1y%C4%B1m-dedikten-sonra-1-y%C4%B1l-ge%C3%A7ti-110c777b8367",
  },
  {
    id: uuid(),
    title: "CSS Specificity Nedir ?",
    description: "Bu yazıda HTML elementlerine stil özellikleri eklenirken uygulanan Cascade algoritması üzerinde duracağım.",
    published: "23 Ocak, 2020",
    medium: "https://cihatata.medium.com/css-cascade-nedir-5a1afeda4f7c",
  },
];
