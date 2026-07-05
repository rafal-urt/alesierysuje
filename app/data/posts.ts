// Wpisy bloga - na razie hardkodowane; przy rozbudowie (Faza 3) przejdą do Payload.
export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  dateLabel: string;
  excerpt: string;
  image?: string;
  imageAlt?: string;
  body: string[];
};

export const POSTS: Post[] = [
  {
    slug: "zapisy-live-painting-2027",
    title: "Zapisy na 2027 ruszyły - kalendarz i cennik już dostępne",
    description:
      "Zapisy oraz cennik na malowanie gości na żywo na 2027 właśnie ruszyły. Sprawdź wolne terminy w kalendarzu online i zarezerwuj swój dzień bezpłatnym zapytaniem.",
    date: "2026-07-04",
    dateLabel: "4 lipca 2026",
    excerpt:
      "Zapisy oraz cennik na malowanie gości na żywo na 2027 właśnie ruszyły - wszystkie wolne terminy znajdziecie w moim kalendarzu online.",
    image: "/gfx/prace/wesele-sciana-ilustracji-gosci.webp",
    imageAlt: "Kilkadziesiąt akwarelowych ilustracji gości z jednego wesela",
    body: [
      "Zapisy oraz cennik na malowanie gości na żywo na 2027 właśnie ruszyły. Wszystkie wolne terminy - od dziś aż do końca 2027 roku - znajdziecie w moim kalendarzu online. To, co widzicie w kalendarzu, jest dostępne naprawdę: zajęte daty oznaczam na bieżąco.",
      "Rezerwacja działa tak jak lubicie: wybieracie dzień, wysyłacie bezpłatne zapytanie i w ciągu 24 - 48 godzin wracam do Was z potwierdzeniem dostępności. Zapytanie do niczego nie zobowiązuje - to po prostu początek rozmowy o Waszym weselu albo evencie.",
      "Ceny są jawne i też już czekają w cenniku: trzy pakiety weselne (Kameralny, Klasyczny i Premium), stawki eventowe i portrety na zamówienie. Bez pisania po wycenę, bez \"cena zależy\".",
      "Terminy weekendowe w sezonie znikają pierwsze - jeśli macie już datę, warto sprawdzić ją wcześniej niż później. Do zobaczenia przy sztaludze!",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
