// Ceny i opisy pakietów. Kwoty bazowe pakietów i portretów nadpisują
// wartości z globals.settings (Payload) - opisy/zakresy są tutaj.
// Model usługi: seria 20 - 40 akwarelowych ilustracji gości (A5) malowanych
// na żywo podczas wesela lub eventu; ponad pakiet +100 zł za ilustrację;
// czego nie zdążymy namalować na żywo, dokańczamy w pracowni i dosyłamy.

// Cena każdej ilustracji ponad limit pakietu (docelowo do przeniesienia do settings)
export const EXTRA_ILLUSTRATION_PLN = 100;

export const WEDDING_PACKAGES = [
  {
    key: "kameralny",
    name: "Kameralny",
    forWho: "przyjęcia do 60 gości",
    price: 4000,
    scope: "do 60 gości · 20 ilustracji na żywo · 6 h malowania",
    features: [
      "20 ilustracji gości malowanych na żywo - akwarela A5 na papierze 300 g",
      "6 godzin malowania na żywo",
      "portret Pary Młodej w cenie",
      "zdjęcia gości robię sama - nikt nie pozuje, nikt nie czeka",
      "prace podpisane i zabezpieczone, do odbioru ze sztalugi",
    ],
    featured: false,
  },
  {
    key: "klasyczny",
    name: "Klasyczny",
    forWho: "przyjęcia do 100 gości",
    price: 6000,
    scope: "do 100 gości · do 30 ilustracji na żywo + do 10 z pracowni",
    features: [
      "do 30 ilustracji gości malowanych na żywo - akwarela A5 na papierze 300 g",
      "do 10 ilustracji malowanych w pracowni i wysyłanych po weselu",
      "portret Pary Młodej w cenie",
      "kącik live art - sztaluga z ekspozycją gotowych prac",
      "konsultacja przed weselem - motyw, kolorystyka, plan wieczoru",
    ],
    featured: true,
  },
  {
    key: "prestizowy",
    name: "Premium",
    forWho: "duże wesela i przyjęcia",
    price: 9000,
    scope: "duże wesela · do 30 ilustracji na żywo + do 30 z pracowni",
    features: [
      "do 30 ilustracji gości malowanych na żywo - akwarela A5 na papierze 300 g",
      "do 30 ilustracji malowanych w pracowni i wysyłanych po weselu",
      "portret Pary Młodej w większym formacie A4",
      "całe przyjęcie przy sztaludze",
      "papier przygotowany pod motyw przewodni wesela",
    ],
    featured: false,
  },
];

export const EVENT_PRICING = [
  {
    name: "Szybkie portrety gości",
    scope: "do 4 h · ok. 20 - 40 ilustracji A5 · papier pod branding",
    price: "od 3 500 zł",
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
