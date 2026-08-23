// Ceny i opisy pakietów. Kwoty bazowe pakietów i portretów nadpisują
// wartości z globals.settings (Payload) - opisy/zakresy są tutaj.
// Model usługi: seria 20 - 40 akwarelowych ilustracji gości (A5) malowanych
// na żywo podczas wesela lub eventu; ponad pakiet +100 zł za ilustrację;
// czego nie zdążymy namalować na żywo, dokańczamy w pracowni i dosyłamy.

// Cena każdej ilustracji ponad limit pakietu (docelowo do przeniesienia do settings)
export const EXTRA_ILLUSTRATION_PLN = 100; // klienci indywidualni (wesela)
export const EXTRA_ILLUSTRATION_B2B_PLN = 150; // firmy (eventy)

export const WEDDING_PACKAGES = [
  {
    key: "kameralny",
    name: "Kameralny",
    forWho: "przyjęcia do 60 gości",
    price: 4000,
    scope: "do 60 gości · 6 h malowania · 20 ilustracji na żywo",
    features: [
      "**6 godzin** malowania na żywo",
      "**20 ilustracji** gości malowanych na żywo - akwarela A5, papier 300 g",
      "portret Pary Młodej w cenie - **A4, papier 300 g**",
      "kącik live art - stolik artystki i ekspozycja prac",
      "prace podpisane i zabezpieczone, do odbioru z kącika",
      "konsultacja online przed weselem - motyw i plan wieczoru",
    ],
    featured: false,
  },
  {
    key: "klasyczny",
    name: "Klasyczny",
    forWho: "przyjęcia do 100 gości",
    price: 6000,
    scope: "do 100 gości · 8 h malowania · do 30 ilustracji na żywo + do 10 z pracowni",
    features: [
      "**8 godzin** malowania na żywo",
      "**do 30 ilustracji** gości malowanych na żywo - akwarela A5, papier 300 g",
      "+ **do 10 ilustracji** malowanych w pracowni, wysyłanych po weselu",
      "portret Pary Młodej w cenie - **A4, papier 300 g**",
      "kącik live art - stolik artystki i ekspozycja prac",
      "prace podpisane i zabezpieczone, do odbioru z kącika",
      "konsultacja online przed weselem - motyw i plan wieczoru",
      "+ papier przygotowany indywidualnie pod motyw wesela",
    ],
    featured: true,
  },
  {
    key: "prestizowy",
    name: "Premium",
    forWho: "duże wesela i przyjęcia",
    price: 9000,
    scope: "duże wesela · 8 h malowania · do 30 ilustracji na żywo + do 30 z pracowni",
    features: [
      "**8 godzin** malowania na żywo",
      "**do 30 ilustracji** gości malowanych na żywo - akwarela A5, papier 300 g",
      "+ **do 30 ilustracji** malowanych w pracowni, wysyłanych po weselu",
      "portret Pary Młodej w cenie - **A4, papier 300 g**",
      "kącik live art - stolik artystki i ekspozycja prac",
      "prace podpisane i zabezpieczone, do odbioru z kącika",
      "konsultacja online przed weselem - motyw i plan wieczoru",
      "+ papier przygotowany indywidualnie pod motyw wesela",
    ],
    featured: false,
  },
];

// Pakiety eventowe B2B - wycena z premią 25-35% nad cennikiem indywidualnym
export const EVENT_PACKAGES = [
  {
    key: "networking",
    name: "Akcent",
    forWho: "wydarzenia do 60 gości",
    price: 4500,
    scope: "do 60 gości · 3 h malowania · do 15 ilustracji na żywo",
    features: [
      "**3 godziny** malowania na żywo",
      "**do 15 ilustracji** gości malowanych na żywo - akwarela A5, papier 300 g",
      "kącik live art - stolik artystki i ekspozycja prac",
      "prace podpisane i zabezpieczone, do odbioru z kącika",
      "konsultacja online przed eventem",
      "faktura VAT i umowa",
    ],
    featured: false,
  },
  {
    key: "gala",
    name: "Atelier",
    forWho: "wydarzenia do 120 gości",
    price: 7000,
    scope: "do 120 gości · 5 h malowania · do 25 na żywo + do 10 z pracowni",
    features: [
      "**5 godzin** malowania na żywo",
      "**do 25 ilustracji** gości malowanych na żywo - akwarela A5, papier 300 g",
      "+ **do 10 ilustracji** malowanych w pracowni, wysyłanych po evencie",
      "kącik live art - stolik artystki i ekspozycja prac",
      "prace podpisane i zabezpieczone, do odbioru z kącika",
      "konsultacja online przed eventem",
      "faktura VAT i umowa",
      "+ papier przygotowany pod branding wydarzenia",
    ],
    featured: true,
  },
  {
    key: "konferencja",
    name: "Galeria",
    forWho: "duże i całodniowe wydarzenia",
    price: 11500,
    scope: "całodniowe · do 8 h · do 30 na żywo + do 30 z pracowni",
    features: [
      "**do 8 godzin** malowania na żywo",
      "**do 30 ilustracji** gości malowanych na żywo - akwarela A5, papier 300 g",
      "+ **do 30 ilustracji** malowanych w pracowni, wysyłanych po evencie",
      "kącik live art - stolik artystki i ekspozycja prac",
      "prace podpisane i zabezpieczone, do odbioru z kącika",
      "konsultacja online przed eventem",
      "faktura VAT i umowa",
      "+ papier przygotowany pod branding wydarzenia",
    ],
    featured: false,
  },
];

export const PORTRAIT_PRICING = {
  formats: {
    A4: { price: 490, label: "A4" },
    A3: { price: 690, label: "A3" },
    "50x70": { price: 990, label: "50 × 70 cm" },
  },
  perExtraPerson: 160,
  dedication: 90,
};

// Ręczne grupowanie tysięcy - identyczny wynik na serwerze i kliencie (bez ICU).
export function formatZl(n: number): string {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " zł";
}

// ===== Minimalistyczne ilustracje ze zdjęcia =====
// Pierwsza i druga postać mają własne stawki, każda kolejna - osoba albo
// zwierzę - to dopłata liczona tak samo. Wysyłka doliczana zawsze.
export const ILLUSTRATION_PRICES = {
  A5: { label: "A5", dims: "14,8 × 21 cm", one: 139, two: 189, extra: 50 },
  A4: { label: "A4", dims: "21 × 29,7 cm", one: 199, two: 259, extra: 75 },
} as const;

export type IllustrationFormat = keyof typeof ILLUSTRATION_PRICES;

export const ILLUSTRATION_SHIPPING_PLN = 18;

// Cena samej ilustracji (bez wysyłki) dla formatu i liczby postaci.
export function illustrationPrice(format: IllustrationFormat, subjects: number): number {
  const p = ILLUSTRATION_PRICES[format];
  if (subjects <= 1) return p.one;
  if (subjects === 2) return p.two;
  return p.two + (subjects - 2) * p.extra;
}
