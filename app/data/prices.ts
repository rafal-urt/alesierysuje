// Ceny - zahardkodowane do czasu podpięcia globals.settings z Payload (Etap 3).
// Jedno źródło prawdy dla pakietów, cennika i konfiguratora.

export const WEDDING_PACKAGES = [
  {
    key: "kameralny",
    name: "Kameralny",
    forWho: "przyjęcia do 60 gości",
    price: 3900,
    scope: "do 60 gości · obraz 40 × 60 cm · 3 h malowania",
    features: [
      "obraz 40 × 60 cm, akwarela na papierze 300 g",
      "3 godziny malowania na żywo",
      "konsultacja sceny przed weselem",
      "praca gotowa do zabrania tego wieczoru",
    ],
    featured: false,
  },
  {
    key: "klasyczny",
    name: "Klasyczny",
    forWho: "wesela do 120 gości",
    price: 5900,
    scope: "do 120 gości · obraz 60 × 90 cm · 5 h · timelapse",
    features: [
      "obraz 60 × 90 cm, akwarela na papierze 300 g",
      "5 godzin malowania na żywo",
      "konsultacja + wizyta techniczna online",
      "timelapse powstawania obrazu",
      "oprawa i zabezpieczenie pracy",
    ],
    featured: true,
  },
  {
    key: "prestizowy",
    name: "Prestiżowy",
    forWho: "duże wesela i wieczory premium",
    price: 8900,
    scope: "duże wesela · 80 × 120 cm lub 2 sceny · portrety gości",
    features: [
      "obraz 80 × 120 cm lub dwie sceny",
      "całe przyjęcie przy sztaludze",
      "godzina szybkich portretów gości",
      "timelapse + reportaż z procesu",
      "dostawa oprawionej pracy po weselu",
    ],
    featured: false,
  },
];

export const EVENT_PRICING = [
  {
    name: "Szybkie portrety gości",
    scope: "do 4 h · ok. 30 - 45 portretów · papier pod branding",
    price: "od 3 500 zł",
  },
  {
    name: "Obraz sceny wydarzenia",
    scope: "gala, premiera, jubileusz · format i czas pod event",
    price: "od 4 500 zł",
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
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00a0") + " zł";
}
