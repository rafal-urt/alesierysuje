// Strony lokalne SEO (/live-painting-{miasto}). Każde miasto = w pełni
// unikalna treść: hero, intro, FAQ, obszar działania. Dodanie miasta =
// nowy wpis tutaj + thin route + obraz OG (scripts/generate-og.ts).

export type City = {
  slug: string;
  /** "Warszawa" */
  name: string;
  /** "w Warszawie i okolicach" - do zdań */
  inCity: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  /** unikalne akapity intro (sekcja manifesto) */
  intro: string[];
  /** etykieta obszaru działania pod intro */
  areas: string;
  /** filtr opinii z Payload po polu location */
  reviewPattern: string;
  faq: { q: string; a: string }[];
  ogImage: string;
  /** JSON-LD areaServed */
  areaServed: string[];
};

export const CITIES: City[] = [
  {
    slug: "live-painting-warszawa",
    name: "Warszawa",
    inCity: "w Warszawie i okolicach",
    title: "Live painting Warszawa - malowanie na żywo | alesierysuje",
    description:
      "Live painting w Warszawie: akwarelowe portrety gości malowane na żywo na weselach i eventach. Pracownia na miejscu, dojazd w cenie. Pakiety od 4 000 zł.",
    h1: "Live painting Warszawa - malowanie na żywo na weselu i evencie",
    lead:
      "Akwarelowe portrety gości malowane w trakcie przyjęcia - od 20 do 60 ilustracji z jednego wieczoru. Pracownię mam w Warszawie, więc dojazd na sale w mieście i okolicach jest w cenie każdego pakietu.",
    intro: [
      "Warszawa to moja baza - stąd wyjeżdżam na wesela i eventy, tu wracam dokańczać ilustracje, których nie zdążyłam namalować na żywo. Dla par i firm z miasta oznacza to jedno: zero kosztów dojazdu i pełną elastyczność, gdy sala zmienia się w ostatniej chwili. Maluję na przyjęciach od Starego Miasta i Powiśla po Wilanów, a równie często tuż za miastem - w Konstancinie, Serocku, Otwocku czy nad Zegrzem, gdzie warszawskie wesela uciekają nad wodę.",
      "Jak to wygląda na sali? W rogu staje kącik live art: stolik artystki, farby i rosnąca z każdą godziną ekspozycja portretów. Goście podchodzą na szybkie zdjęcie i wracają do zabawy - żadnego pozowania ani kolejki, które przy warszawskim tempie imprez nikogo by nie bawiły. Szukacie atrakcji na wesele w Warszawie, która zostaje z gośćmi na lata zamiast rozejść się w szatni? To jest dokładnie to.",
    ],
    areas:
      "Warszawa i okolice: Wilanów · Konstancin-Jeziorna · Serock i Zegrze · Otwock · Piaseczno · cała aglomeracja - dojazd w cenie",
    reviewPattern: "warszaw|serock|mazow",
    faq: [
      {
        q: "Czy dojazd w Warszawie i okolicach jest płatny?",
        a: "Nie - pracownię mam w Warszawie, więc dojazd na sale w mieście i całej aglomeracji (a szerzej: na terenie Mazowsza) jest wliczony w cenę pakietu.",
      },
      {
        q: "Jak szybko trzeba rezerwować termin w Warszawie?",
        a: "Warszawskie soboty w sezonie schodzą pierwsze - najbezpieczniej sprawdzić datę w kalendarzu online od razu po rezerwacji sali. Zapytanie jest bezpłatne i do niczego nie zobowiązuje.",
      },
      {
        q: "Maluje Pani też na eventach firmowych w Warszawie?",
        a: "Tak - gale, premiery, imprezy integracyjne i konferencje. Papier przygotowuję pod branding wydarzenia, a rozliczenie jest na fakturę VAT. Szczegóły i pakiety eventowe znajdziecie na stronie eventów.",
      },
      {
        q: "Ile ilustracji powstanie podczas warszawskiego wesela?",
        a: "Na żywo do 30 ilustracji A5 (portret to 10 - 15 minut), a w pakietach Klasycznym i Premium kolejne dokańczam w pracowni i wysyłam po weselu - łącznie nawet 60 prac.",
      },
      {
        q: "Czy goście muszą pozować albo czekać w kolejce?",
        a: "Nie - goście podchodzą do kącika live art tylko na szybkie zdjęcie i wracają do zabawy. Maluję z fotografii, a gotowe, podpisane ilustracje odbiera się z kącika w dogodnym momencie.",
      },
    ],
    ogImage: "/og/warszawa.png",
    areaServed: ["Warszawa", "Mazowsze"],
  },
  {
    slug: "live-painting-trojmiasto",
    name: "Trójmiasto",
    inCity: "w Trójmieście - Gdańsku, Gdyni i Sopocie",
    title: "Live painting Trójmiasto - Gdańsk, Gdynia, Sopot | alesierysuje",
    description:
      "Live painting w Trójmieście: akwarelowe portrety gości na weselach i eventach w Gdańsku, Gdyni i Sopocie. Malowanie na żywo, pakiety od 4 000 zł.",
    h1: "Live painting Trójmiasto - malowanie na żywo w Gdańsku, Gdyni i Sopocie",
    lead:
      "Akwarelowe portrety gości malowane w trakcie przyjęcia - od 20 do 60 ilustracji z jednego wieczoru. Regularnie maluję na Pomorzu: wesela nad morzem, w trójmiejskich hotelach i na Kaszubach.",
    intro: [
      "Wesela nad morzem mają własne światło i własny rytm - i chyba dlatego tak dobrze wychodzą w akwareli. Do Trójmiasta przyjeżdżam regularnie: na przyjęcia w Gdańsku i Gdyni, do sopockich hoteli z widokiem na zatokę i na kaszubskie wesela pod lasem, godzinę od plaży. Jedna z moich par złapała termin półtora miesiąca przed ślubem właśnie na Kaszubach - dojazd z Warszawy nie był żadnym problemem.",
      "Na miejscu wszystko działa tak samo jak wszędzie, gdzie maluję: kącik live art ze stolikiem artystki, szybkie zdjęcie zamiast pozowania i ekspozycja portretów, po które goście podchodzą między tańcami. Jeśli szukacie atrakcji weselnej w Trójmieście, która nie jest kolejną fotobudką - malowanie na żywo zostawia każdemu gościowi pamiątkę, jakiej nie da się wydrukować. Koszt dojazdu na Pomorze wyceniam z góry przy potwierdzeniu terminu - bez niespodzianek w umowie.",
    ],
    areas:
      "Gdańsk · Gdynia · Sopot · Kaszuby · całe Pomorze - dojazd wyceniany z góry przy potwierdzeniu terminu",
    reviewPattern: "kaszub|gdańsk|gdansk|gdyni|sopot|trójmi|trojmi|pomor",
    faq: [
      {
        q: "Ile kosztuje dojazd do Trójmiasta?",
        a: "Dojazd na Pomorze wyceniam indywidualnie i podaję z góry przy potwierdzaniu terminu - kwota jest znana przed podpisaniem umowy, bez niespodzianek. Sam pakiet kosztuje tyle samo co wszędzie.",
      },
      {
        q: "Czy malowała Pani już wesela na Pomorzu?",
        a: "Tak - m.in. na Kaszubach, gdzie dojechałam na półtora miesiąca przed ślubem po tym, jak parze wypadła inna artystka. Opinię tej pary znajdziecie niżej i na portalu Wesele z klasą.",
      },
      {
        q: "Gdańsk, Gdynia czy Sopot - czy lokalizacja sali ma znaczenie?",
        a: "Nie - w całym Trójmieście i okolicach warunki są te same. Liczy się tylko miejsce na kącik live art: około 2 × 2 metry z dobrym światłem, najlepiej z widokiem na parkiet.",
      },
      {
        q: "Wesele mamy w sezonie letnim nad morzem - kiedy rezerwować?",
        a: "Jak najwcześniej - nadmorskie terminy od czerwca do września znikają szybciej niż gdziekolwiek indziej. Kalendarz online pokazuje dostępność w czasie rzeczywistym, a zapytanie jest bezpłatne.",
      },
      {
        q: "A eventy firmowe w Trójmieście?",
        a: "Jak najbardziej - konferencje, gale i imprezy firmowe, także wielodniowe. Papier przygotowuję pod branding wydarzenia, rozliczenie na fakturę VAT. Pakiety eventowe są na osobnej stronie.",
      },
    ],
    ogImage: "/og/trojmiasto.png",
    areaServed: ["Gdańsk", "Gdynia", "Sopot", "Pomorze"],
  },
];

export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}
