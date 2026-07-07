// Strony lokalne SEO (/malowanie-na-zywo-{miasto}). Każde miasto = w pełni
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
    slug: "malowanie-na-zywo-warszawa",
    name: "Warszawa",
    inCity: "w Warszawie i okolicach",
    title: "Malowanie na żywo Warszawa - live painting | alesierysuje",
    description:
      "Malowanie na żywo w Warszawie: akwarelowe portrety gości na weselach i eventach (live painting). Pracownia na miejscu, dojazd w cenie. Pakiety od 4 000 zł.",
    h1: "Malowanie na żywo Warszawa - live painting na weselu i evencie",
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
    slug: "malowanie-na-zywo-trojmiasto",
    name: "Trójmiasto",
    inCity: "w Trójmieście - Gdańsku, Gdyni i Sopocie",
    title: "Malowanie na żywo Trójmiasto - Gdańsk, Gdynia, Sopot | alesierysuje",
    description:
      "Malowanie na żywo w Trójmieście: akwarelowe portrety gości na weselach i eventach w Gdańsku, Gdyni i Sopocie (live painting). Pakiety od 4 000 zł.",
    h1: "Malowanie na żywo Trójmiasto - live painting w Gdańsku, Gdyni i Sopocie",
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
  {
    slug: "malowanie-na-zywo-poznan",
    name: "Poznań",
    inCity: "w Poznaniu i Wielkopolsce",
    title: "Malowanie na żywo Poznań - live painting | alesierysuje",
    description:
      "Malowanie na żywo w Poznaniu: akwarelowe portrety gości na weselach i eventach w Wielkopolsce (live painting). Pakiety od 4 000 zł, wolne terminy online.",
    h1: "Malowanie na żywo Poznań - live painting na weselu i evencie",
    lead:
      "Akwarelowe portrety gości malowane w trakcie przyjęcia - od 20 do 60 ilustracji z jednego wieczoru. Do Poznania i Wielkopolski przyjeżdżam z całym kącikiem live art: sztalugą, farbami i papierem 300 g.",
    intro: [
      "Wielkopolskie wesela mają dwa żywioły: eleganckie sale w samym Poznaniu i folwarki, dworki oraz stodoły rozsiane wokół miasta - od Kórnika po Puszczykowo. Akwarela odnajduje się w obu. W miejskich wnętrzach portrety gości dołączają do dopracowanej oprawy wieczoru, a w plenerowych przyjęciach pod miastem kącik live art staje się tym miejscem, wokół którego kręcą się goście między ogniskiem a parkietem.",
      "Poznań to też miasto targów i biznesu - maluję na galach, konferencjach i wieczorach towarzyszących wydarzeniom targowym, z papierem przygotowanym pod branding i rozliczeniem na fakturę VAT. A mechanika jest wszędzie ta sama: goście podchodzą tylko na szybkie zdjęcie, wracają do rozmów, a podpisane ilustracje odbierają z ekspozycji przed końcem wieczoru. Koszt dojazdu do Wielkopolski podaję z góry przy potwierdzaniu terminu.",
    ],
    areas:
      "Poznań i Wielkopolska: Kórnik · Puszczykowo · Śrem · Gniezno · Leszno - dojazd wyceniany z góry przy potwierdzeniu terminu",
    reviewPattern: "pozna|wielkopol|kórnik|kornik|gniezn|puszczyk",
    faq: [
      {
        q: "Ile kosztuje dojazd do Poznania?",
        a: "Dojazd do Poznania i Wielkopolski wyceniam indywidualnie i podaję z góry przy potwierdzaniu terminu - kwotę znacie przed podpisaniem umowy. Ceny pakietów są takie same jak wszędzie.",
      },
      {
        q: "Wesele mamy w stodole pod Poznaniem - da się tam malować?",
        a: "Tak, folwarki i stodoły to wdzięczne miejsca na live painting. Potrzebuję tylko około 2 × 2 metrów na kącik, zadaszenia i dobrego światła - przy przyjęciach do późnej nocy wystarczy zwykła lampa przy stoliku.",
      },
      {
        q: "Czy maluje Pani na eventach przy targach w Poznaniu?",
        a: "Tak - gale, konferencje i wieczory towarzyszące wydarzeniom targowym, także kilkudniowe. Papier przygotowuję pod branding wydarzenia, a rozliczenie jest na fakturę VAT. Pakiety eventowe znajdziecie na osobnej stronie.",
      },
      {
        q: "Ile portretów powstanie na weselu w Poznaniu?",
        a: "Na żywo do 30 ilustracji A5 - jedna praca to 10 - 15 minut. W pakietach Klasycznym i Premium kolejne dokańczam w warszawskiej pracowni i wysyłam po weselu, łącznie nawet 60 prac.",
      },
      {
        q: "Kiedy rezerwować termin na wesele w Wielkopolsce?",
        a: "Najlepiej od razu po rezerwacji sali - sobotnie terminy w sezonie znikają pierwsze. Kalendarz online pokazuje dostępność w czasie rzeczywistym, a zapytanie jest bezpłatne i do niczego nie zobowiązuje.",
      },
    ],
    ogImage: "/og/poznan.png",
    areaServed: ["Poznań", "Wielkopolska"],
  },
  {
    slug: "malowanie-na-zywo-krakow",
    name: "Kraków",
    inCity: "w Krakowie i Małopolsce",
    title: "Malowanie na żywo Kraków - live painting | alesierysuje",
    description:
      "Malowanie na żywo w Krakowie: akwarelowe portrety gości na weselach i eventach w Małopolsce (live painting). Pakiety od 4 000 zł, wolne terminy online.",
    h1: "Malowanie na żywo Kraków - live painting na weselu i evencie",
    lead:
      "Akwarelowe portrety gości malowane w trakcie przyjęcia - od 20 do 60 ilustracji z jednego wieczoru. Kraków ma wnętrza, które same proszą się o akwarelę - od kamienic przy Rynku po dworki Małopolski.",
    intro: [
      "Zabytkowa kamienica na Kazimierzu, klimatyczna piwnica ze sklepieniami, dworek pod Krakowem albo sala z widokiem na góry - małopolskie wesela wybierają miejsca z charakterem, a taki charakter świetnie wchodzi na papier. Kącik live art ustawiam nawet w kameralnych, zabytkowych wnętrzach: stolik i sztaluga zajmują około 2 × 2 metrów, więc mieszczą się tam, gdzie fotobudka nie ma szans.",
      "Coraz częściej pary ciągną też z Krakowa wyżej - na wesela w Beskidach i na Podhalu, gdzie w tle ilustracji zamiast sali pojawia się panorama gór. Sam wieczór wygląda wszędzie tak samo: żadnego pozowania, tylko szybkie zdjęcie w kąciku i powrót do zabawy, a gotowe, podpisane portrety goście zabierają ze sobą. Maluję też na krakowskich eventach firmowych - od gal po konferencje, na fakturę VAT. Dojazd do Małopolski wyceniam z góry przy potwierdzeniu terminu.",
    ],
    areas:
      "Kraków i Małopolska: Wieliczka · Niepołomice · Beskidy · Podhale i Zakopane - dojazd wyceniany z góry przy potwierdzeniu terminu",
    reviewPattern: "krak|małopol|malopol|wielicz|podhal|zakopan|beskid",
    faq: [
      {
        q: "Ile kosztuje dojazd do Krakowa?",
        a: "Dojazd do Krakowa i Małopolski wyceniam indywidualnie i podaję z góry przy potwierdzaniu terminu - bez niespodzianek w umowie. Same pakiety kosztują tyle samo co w całej Polsce.",
      },
      {
        q: "Nasza sala to zabytkowa kamienica - zmieści się tam kącik live art?",
        a: "Prawie na pewno tak. Potrzebuję około 2 × 2 metrów na stolik i sztalugę - to mniej niż zajmuje stół dla czterech gości. W ciasnych, klimatycznych wnętrzach proszę tylko o jedno: punkt dobrego światła przy kąciku.",
      },
      {
        q: "Wesele mamy w górach, na Podhalu - dojedzie Pani?",
        a: "Tak, góry to żaden problem - dojazd wyceniam tak samo jak do Krakowa, z góry przy potwierdzeniu terminu. Przy weselach dwudniowych drugi dzień wyceniam z rabatem, bo koszt dojazdu dzielicie tylko raz.",
      },
      {
        q: "Czy goście muszą przerywać zabawę, żeby dostać portret?",
        a: "Nie - podchodzą do kącika na szybkie zdjęcie i wracają na parkiet, a ja maluję z fotografii. Jedna praca to 10 - 15 minut, gotowe ilustracje czekają podpisane w ekspozycji do końca wieczoru.",
      },
      {
        q: "A eventy firmowe w Krakowie?",
        a: "Jak najbardziej - gale, konferencje i imprezy firmowe w krakowskich hotelach i postindustrialnych przestrzeniach. Papier przygotowuję pod branding wydarzenia, rozliczenie na fakturę VAT.",
      },
    ],
    ogImage: "/og/krakow.png",
    areaServed: ["Kraków", "Małopolska"],
  },
  {
    slug: "malowanie-na-zywo-lodz",
    name: "Łódź",
    inCity: "w Łodzi i województwie łódzkim",
    title: "Malowanie na żywo Łódź - live painting | alesierysuje",
    description:
      "Malowanie na żywo w Łodzi: akwarelowe portrety gości na weselach i eventach (live painting). Blisko z Warszawy - niski koszt dojazdu. Pakiety od 4 000 zł.",
    h1: "Malowanie na żywo Łódź - live painting na weselu i evencie",
    lead:
      "Akwarelowe portrety gości malowane w trakcie przyjęcia - od 20 do 60 ilustracji z jednego wieczoru. Z mojej warszawskiej pracowni do Łodzi jest niecałe półtorej godziny, więc dojazd kosztuje niewiele.",
    intro: [
      "Łódzkie wesela i eventy mają scenografię, o jakiej inne miasta mogą pomarzyć: surową cegłę dawnych fabryk, lofty z wysokimi oknami, podwórka przy Piotrkowskiej. Miękka akwarela na tym tle robi podwójne wrażenie - portrety gości powstają w kąciku live art, który w industrialnym wnętrzu wygląda jak mała pracownia artystki przeniesiona wprost na przyjęcie.",
      "Jest też argument praktyczny: Łódź to najbliższy mojej pracowni duży ośrodek poza Mazowszem, więc koszt dojazdu jest symboliczny, a logistyka - najprostsza z możliwych. Łatwiej tu też o termin z krótszym wyprzedzeniem, bo dojazd nie wymaga noclegu. Sam wieczór działa jak wszędzie: szybkie zdjęcie zamiast pozowania, 10 - 15 minut na portret i podpisane ilustracje do odebrania z ekspozycji. Firmy zapraszają mnie też na łódzkie gale i imprezy integracyjne - z papierem pod branding i fakturą VAT.",
    ],
    areas:
      "Łódź i województwo łódzkie: Pabianice · Zgierz · Uniejów · Spała - najniższy koszt dojazdu poza Mazowszem",
    reviewPattern: "łódz|łodz|lodz|pabianic|zgierz|uniejów|uniejow|spał|spal",
    faq: [
      {
        q: "Ile kosztuje dojazd do Łodzi?",
        a: "Najmniej ze wszystkich miast poza Mazowszem - z Warszawy do Łodzi jest niecałe półtorej godziny. Dokładną kwotę podaję z góry przy potwierdzaniu terminu, a ceny pakietów są takie same jak wszędzie.",
      },
      {
        q: "Nasza sala to dawna fabryka - czy cegła i przyciemnione światło to problem?",
        a: "Industrialne wnętrza są wdzięczne malarsko, proszę tylko o punkt dobrego światła przy kąciku live art - wystarczy lampa przy stoliku. Około 2 × 2 metrów miejsca znajdzie się w każdym lofcie.",
      },
      {
        q: "Zostały nam trzy miesiące do wesela - to jeszcze realny termin?",
        a: "Sprawdźcie kalendarz online - przy Łodzi krótkie wyprzedzenie jest najmniej problematyczne, bo prosta logistyka pozwala mi domykać bliższe daty. Zapytanie jest bezpłatne, odpowiedź wraca w 24 - 48 godzin.",
      },
      {
        q: "Ile ilustracji powstanie podczas łódzkiego wesela?",
        a: "Na żywo do 30 prac A5, a w pakietach Klasycznym i Premium kolejne dokańczam w pracowni i wysyłam po weselu - łącznie nawet 60 ilustracji. Portret Pary Młodej w formacie A4 jest w cenie każdego pakietu.",
      },
      {
        q: "Czy robi Pani też eventy firmowe w Łodzi?",
        a: "Tak - gale, integracje i konferencje, także w postindustrialnych przestrzeniach, z których Łódź słynie. Papier przygotowuję pod branding wydarzenia, rozliczenie na fakturę VAT.",
      },
    ],
    ogImage: "/og/lodz.png",
    areaServed: ["Łódź", "województwo łódzkie"],
  },
];

export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}
