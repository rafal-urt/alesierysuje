// Wpisy bloga - na razie hardkodowane; przy rozbudowie (Faza 3) przejdą do Payload.
// Treść bloków: "**tekst**" -> pogrubienie, "[tekst](/sciezka)" -> link wewnętrzny.
export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  dateLabel: string;
  excerpt: string;
  image?: string;
  imageAlt?: string;
  /** wymiary pliku z image - do width/height (CLS) */
  imageSize?: [number, number];
  /** odręczny podpis pod okładką wpisu */
  imageCap?: string;
  body: PostBlock[];
};

export const POSTS: Post[] = [
  {
    slug: "malowanie-gosci-na-urodzinach-na-zywo",
    title: "Malowanie gości na urodzinach na żywo - jak wygląda i ile kosztuje?",
    description:
      "Malowanie gości na urodzinach na żywo: akwarelowe portrety gości jako atrakcja premium na okrągłe urodziny i jubileusze. Jak to wygląda, ceny i rezerwacja terminu.",
    date: "2026-07-19",
    dateLabel: "19 lipca 2026",
    excerpt:
      "Akwarelowe portrety gości malowane w trakcie przyjęcia urodzinowego - atrakcja, po której każdy gość wychodzi z ręcznie malowaną pamiątką. Opowiadam, jak to wygląda i ile kosztuje.",
    image: "/gfx/prace/event-40-lecie-ilustracje-gosci.webp",
    imageAlt: "Akwarelowe ilustracje gości z przyjęcia jubileuszowego rozłożone obok siebie",
    imageSize: [675, 1200],
    imageCap: "ilustracje gości z jednego jubileuszu",
    body: [
      {
        type: "p",
        text: "Szukacie atrakcji na urodziny, po której zostaje coś więcej niż pasek zdjęć z fotobudki? **Malowanie gości na urodzinach na żywo** działa dokładnie tak jak na weselu: podczas przyjęcia maluję akwarelowe portrety gości, a każdy zabiera swój do domu jeszcze tego samego wieczoru. To atrakcja z kategorii premium - przez cały wieczór na sali pracuje artystka, a po przyjęciu każdy gość ma na ścianie ręcznie malowaną pamiątkę. Sprawdza się na okrągłych urodzinach, eleganckich przyjęciach w gronie najbliższych i na firmowych jubileuszach.",
      },
      { type: "h2", text: "Jak wygląda malowanie na żywo na urodzinach" },
      {
        type: "p",
        text: "Na sali rozstawiam **kącik live art** - stolik ze sztalugą i ekspozycją prac, potrzebuję na to około 2 × 2 metrów. Goście nie pozują: podchodzą tylko na **szybkie zdjęcie** i wracają do zabawy, a ja maluję z fotografii. Jedna akwarela A5 na papierze 300 g to **10-15 minut** pracy. Gotowe, podpisane i zabezpieczone ilustracje czekają na ekspozycji, więc każdy odbiera swoją, kiedy chce. Kącik szybko staje się miejscem, wokół którego kręci się całe przyjęcie - goście wracają sprawdzać, kto już wisi w galerii.",
      },
      { type: "h2", text: "Na jakie urodziny to się sprawdza" },
      {
        type: "ul",
        items: [
          "**Okrągłe urodziny: 40, 50, 60** - eleganckie przyjęcia w gronie rodziny i przyjaciół, gdzie na ścianie jubilata zostaje potem seria portretów najbliższych",
          "**Kameralne przyjęcia w restauracji** - uroczysta kolacja na kilkanaście-kilkadziesiąt osób, na której kącik live art gra rolę głównej atrakcji wieczoru",
          "**Jubileusze firmowe** - malowałam m.in. na 40-leciu firmy; dla wydarzeń biznesowych mam osobne [pakiety eventowe](/malowanie-na-zywo-eventy) z fakturą VAT",
        ],
      },
      { type: "h2", text: "Portret jubilata" },
      {
        type: "p",
        text: "Na urodzinach miejsce weselnego portretu Pary Młodej zajmuje **portret jubilata w formacie A4** - większy niż ilustracje gości i zwykle najbardziej wyczekiwana praca wieczoru. To jedyna ilustracja, której nie oddaję z kącika, tylko wręczam osobiście - dobry moment na toast.",
      },
      { type: "h2", text: "Ile kosztuje malowanie gości na urodzinach" },
      {
        type: "ul",
        items: [
          "**Przyjęcia prywatne** (okrągłe urodziny, rocznice) rozliczam jak wesela: pakiety **od 4 000 zł** - Kameralny to 6 godzin malowania i 20 ilustracji na żywo dla przyjęć do 60 gości",
          "**Jubileusze firmowe** to pakiety eventowe **od 4 500 zł** - z umową i fakturą VAT",
          "**Każda ilustracja ponad pakiet - 100 zł**; czego nie zdążę namalować na żywo, dokańczam w pracowni i dosyłam po przyjęciu",
        ],
      },
      {
        type: "p",
        text: "Wszystkie kwoty trzymam jawne - pełne porównanie pakietów znajdziecie w [cenniku](/cennik), bez pisania po wycenę.",
      },
      { type: "h2", text: "Niespodzianka dla jubilata? Da się zrobić" },
      {
        type: "p",
        text: "Malowanie na żywo często zamawiają nie sami jubilaci, tylko ich bliscy - jako **niespodziankę urodzinową**. Wszystko dogadujemy wtedy w tajemnicy: na konsultacji online przed przyjęciem ustalamy motyw, kolory i plan wieczoru, a szczegóły techniczne kącika omawiam bezpośrednio z salą. Jubilat dowiaduje się o wszystkim dopiero, gdy przy sztaludze powstaje jego portret.",
      },
      { type: "h2", text: "Jak zarezerwować termin" },
      {
        type: "p",
        text: "Wolne daty do końca 2027 roku widać w [kalendarzu terminów](/terminy) - w formularzu wybierzcie rodzaj wydarzenia „Urodziny / jubileusz”. Wysyłacie bezpłatne zapytanie i w ciągu 24-48 godzin wracam do Was z potwierdzeniem. Zapytanie do niczego nie zobowiązuje - to po prostu początek rozmowy o Waszym przyjęciu.",
      },
    ],
  },
  {
    slug: "ile-kosztuje-malowanie-na-zywo-na-weselu",
    title: "Ile kosztuje malowanie na żywo na weselu? Realne ceny 2026/2027",
    description:
      "Malowanie na żywo na weselu kosztuje od 4 000 do 9 000 zł. Sprawdź, co dokładnie jest w cenie pakietów, od czego zależy stawka i ile wychodzi jedna pamiątka.",
    date: "2026-07-07",
    dateLabel: "7 lipca 2026",
    excerpt:
      "Od 4 000 do 9 000 zł - tyle kosztuje malowanie gości na żywo na weselu. Rozkładam cenę na czynniki: co jest w pakietach, za co się dopłaca i ile wychodzi jedna ręcznie malowana pamiątka.",
    image: "/gfx/prace/wesele-ilustracje-goscie-roz.webp",
    imageAlt: "Akwarelowe ilustracje gości weselnych rozłożone obok siebie",
    imageSize: [900, 1200],
    imageCap: "ilustracje gości z jednego wesela",
    body: [
      {
        type: "p",
        text: "Odpowiedź wprost: u mnie malowanie na żywo na weselu kosztuje **od 4 000 do 9 000 zł**, zależnie od liczby gości i liczby ilustracji. Ceny trzymam jawne - wszystkie znajdziecie w [cenniku](/cennik) - a w tym wpisie rozkładam je na czynniki, żebyście wiedzieli, za co dokładnie płacicie.",
      },
      { type: "h2", text: "Co właściwie kupujecie" },
      {
        type: "p",
        text: "Live painting w moim wydaniu to nie jeden wielki obraz sali, tylko **seria kilkudziesięciu małych akwarel**: portrety Waszych gości w formacie A5 na papierze 300 g, malowane na bieżąco podczas przyjęcia. Goście nie pozują - wpadają do kącika live art na szybkie zdjęcie i wracają do zabawy, a gotowe, podpisane prace odbierają z ekspozycji jeszcze tego samego wieczoru. W każdym pakiecie jest też **portret Pary Młodej w formacie A4**.",
      },
      { type: "h2", text: "Pakiety i ceny" },
      {
        type: "ul",
        items: [
          "**Kameralny - 4 000 zł**: przyjęcia do 60 gości, 6 godzin malowania, 20 ilustracji na żywo",
          "**Klasyczny - 6 000 zł**: przyjęcia do 100 gości, 8 godzin malowania, do 30 ilustracji na żywo + do 10 domalowanych w pracowni i wysłanych po weselu",
          "**Premium - 9 000 zł**: duże wesela, 8 godzin malowania, do 30 ilustracji na żywo + do 30 z pracowni",
        ],
      },
      {
        type: "p",
        text: "Każdy pakiet zawiera portret Pary Młodej A4, kącik live art ze sztalugą i ekspozycją prac oraz konsultację online przed weselem, na której ustalamy motyw i plan wieczoru. Szczegółowe porównanie pakietów znajdziecie na stronie o [malowaniu na żywo na weselu](/malowanie-na-zywo-wesele).",
      },
      { type: "h2", text: "Od czego zależy cena i możliwe dopłaty" },
      {
        type: "ul",
        items: [
          "**Liczba ilustracji ponad pakiet**: każda kolejna to 100 zł - a jeśli nie zdążę namalować wszystkich na żywo, dokańczam je w pracowni na podstawie zdjęć i dosyłam po weselu",
          "**Dwa dni z rzędu**: przy rezerwacji dwóch dni drugi wyceniam z rabatem, bo koszt dojazdu dzielicie tylko raz",
          "**Termin**: cena jest taka sama przez cały rok, ale weekendy w sezonie znikają z kalendarza pierwsze - im wcześniej sprawdzicie datę, tym większy wybór",
        ],
      },
      { type: "h2", text: "Ile wychodzi jedna pamiątka" },
      {
        type: "p",
        text: "Najprostszy rachunek: pakiet Klasyczny to 6 000 zł i do 40 ilustracji łącznie, czyli **około 150 zł za jedną ręcznie malowaną akwarelę**, którą gość zabiera do domu i wiesza na ścianie. Fotobudkowe paski lądują w szufladzie - obraz z wesela zostaje na lata i przypomina o Was za każdym razem, gdy ktoś na niego spojrzy.",
      },
      { type: "h2", text: "Jak zarezerwować termin" },
      {
        type: "p",
        text: "Wszystkie wolne daty do końca 2027 roku widać w [kalendarzu terminów](/terminy). Wybieracie dzień, wysyłacie bezpłatne zapytanie i w ciągu 24-48 godzin wracam do Was z potwierdzeniem. Zapytanie do niczego nie zobowiązuje - to po prostu początek rozmowy.",
      },
    ],
  },
  {
    slug: "live-painting-na-weselu-jak-to-wyglada",
    title: "Live painting na weselu - jak to wygląda krok po kroku?",
    description:
      "Czy goście muszą pozować? Ile trwa jeden portret? Co z pracami, których nie zdążę namalować na żywo? Cały wieczór live paintingu na weselu od kuchni.",
    date: "2026-07-07",
    dateLabel: "7 lipca 2026",
    excerpt:
      "Czy goście muszą pozować, ile trwa jeden portret i co się dzieje, kiedy chętnych jest więcej niż czasu - opowiadam, jak naprawdę wygląda wieczór z malowaniem na żywo.",
    image: "/gfx/prace/event-portret-goscia-na-clipboardzie.webp",
    imageAlt: "Akwarelowy portret gościa w trakcie malowania, przypięty do deski",
    imageSize: [900, 1200],
    imageCap: "10-15 minut i portret gotowy",
    body: [
      {
        type: "p",
        text: "„Ale jak to właściwie wygląda?” - to pytanie słyszę od par najczęściej, zaraz po pytaniu o cenę. Uzasadnione: malowanie na żywo to wciąż dość świeża atrakcja na polskich weselach. Opowiadam więc krok po kroku, co się dzieje od momentu, gdy wnoszę sztalugę na salę.",
      },
      { type: "h2", text: "Kącik live art, czyli moja sztaluga na Waszej sali" },
      {
        type: "p",
        text: "Potrzebuję około **2 × 2 metrów** na stolik i sztalugę z ekspozycją prac - najlepiej z widokiem na parkiet i dobrym światłem. Szczegóły dogaduję bezpośrednio z salą, więc Wy nie musicie niczego organizować. Kącik szybko zaczyna żyć własnym życiem: najpierw przyciąga ciekawskich, a po godzinie ustawia się przy nim mała galeria.",
      },
      { type: "h2", text: "Czy goście muszą pozować? Nie - i to jest najlepsze" },
      {
        type: "p",
        text: "To największa różnica względem klasycznych karykatur. Goście podchodzą do kącika tylko na **szybkie zdjęcie** i wracają do zabawy, a ja maluję z fotografii. Nikt nie siedzi sztywno przez kwadrans, nikt nie blokuje kolejki. Gotowe ilustracje - **podpisane i zabezpieczone** - czekają w kąciku, więc każdy odbiera swoją, kiedy chce.",
      },
      { type: "h2", text: "Ile trwa jeden portret i ile prac powstaje" },
      {
        type: "p",
        text: "Jedna akwarela A5 to **10-15 minut** malowania. W ciągu wieczoru powstaje na żywo do 30 ilustracji - a w pakietach Klasycznym i Premium kolejne maluję już po weselu w pracowni, na podstawie zdjęć z kącika, i wysyłam do Was pocztą. Jeśli chętnych jest więcej niż przewiduje pakiet, każda dodatkowa ilustracja kosztuje 100 zł - nikt nie odchodzi z niczym.",
      },
      { type: "h2", text: "Portret Pary Młodej" },
      {
        type: "p",
        text: "W cenie każdego pakietu jest portret Was dwojga - **format A4, papier 300 g**, czyli większy niż ilustracje gości. To zwykle najbardziej wyczekiwana praca wieczoru i jedyna, której nie oddaję od razu z kącika, tylko wręczam osobiście.",
      },
      { type: "h2", text: "Co ustalamy przed weselem" },
      {
        type: "ul",
        items: [
          "**Konsultacja online** - omawiamy motyw przewodni, kolory i plan wieczoru, żebym malowała wtedy, gdy dzieje się najwięcej",
          "**Miejsce na kącik** - 2 × 2 metry z dobrym światłem; techniczne szczegóły dogaduję z salą",
          "**Papier pod motyw** - w pakietach Klasycznym i Premium przygotowuję papier indywidualnie pod stylistykę Waszego wesela",
        ],
      },
      {
        type: "p",
        text: "Chcecie sprawdzić, czy Wasza data jest jeszcze wolna? Kalendarz z terminami do końca 2027 jest [tutaj](/terminy), a pełne pakiety i ceny w [cenniku](/cennik).",
      },
    ],
  },
  {
    slug: "atrakcje-weselne-zamiast-fotobudki",
    title: "Atrakcje weselne 2027 - 7 pomysłów zamiast fotobudki",
    description:
      "Szukacie atrakcji weselnej, która nie jest kolejną fotobudką? 7 sprawdzonych pomysłów - od malowania na żywo po audio-księgę gości - i jak wybrać mądrze.",
    date: "2026-07-07",
    dateLabel: "7 lipca 2026",
    excerpt:
      "Fotobudka była już na każdym weselu. Zebrałam 7 atrakcji, które goście naprawdę zapamiętują - w tym kilka, po których zostaje coś więcej niż pasek zdjęć.",
    image: "/gfx/prace/karta-wesele-grupa.webp",
    imageAlt: "Akwarelowa ilustracja roześmianej grupy gości weselnych",
    imageSize: [560, 790],
    imageCap: "pamiątka, która zostaje po weselu",
    body: [
      {
        type: "p",
        text: "Fotobudka zrobiła ogromną karierę, ale właśnie dlatego przestała robić wrażenie - goście widzieli ją na dziesięciu weselach z rzędu. Z mojej perspektywy, zza sztalugi, najlepiej działają atrakcje, które są **osobiste** i **zostawiają po sobie pamiątkę**. Oto 7 pomysłów, które widuję (i robię) na weselach - z krótkim komentarzem, dla kogo się sprawdzą.",
      },
      { type: "h2", text: "1. Malowanie na żywo (live painting)" },
      {
        type: "p",
        text: "Zacznę od siebie, bo to moja działka: artystka maluje podczas przyjęcia **akwarelowe portrety gości**, które zabierają oni do domu jeszcze tego wieczoru. Goście nie pozują - wystarczy szybkie zdjęcie w kąciku. Po weselu każdy ma na ścianie ręcznie malowaną pamiątkę z Waszego dnia. Pakiety zaczynają się od 4 000 zł - więcej na stronie o [malowaniu na żywo na weselu](/malowanie-na-zywo-wesele).",
      },
      { type: "h2", text: "2. Audio-księga gości" },
      {
        type: "p",
        text: "Stary telefon z centralką nagrywa życzenia gości zamiast klasycznej księgi wpisów. Działa świetnie, bo po kilku toastach goście mówią rzeczy, których nigdy by nie napisali. Efekt: ścieżka dźwiękowa Waszego wesela do odsłuchania na rocznicę.",
      },
      { type: "h2", text: "3. Barman show albo autorskie koktajle" },
      {
        type: "p",
        text: "Pokaz flair albo po prostu dobrze pomyślane menu koktajlowe z drinkiem nazwanym Waszymi imionami. Atrakcja, która obsługuje się sama przez cały wieczór - i rozładowuje kolejkę do baru w kluczowych momentach.",
      },
      { type: "h2", text: "4. Zimne ognie i ciężki dym do pierwszego tańca" },
      {
        type: "p",
        text: "Klasyka efektownych zdjęć. Jedna uwaga praktyczna: koniecznie potwierdźcie z salą, czy dopuszcza takie efekty - część obiektów wymaga zgód albo współpracuje tylko z konkretnymi firmami.",
      },
      { type: "h2", text: "5. Animator dla dzieci" },
      {
        type: "p",
        text: "Niepozorna pozycja, która ratuje wesele rodzicom małych gości. Dwie godziny animacji w porze obiadu i najmłodsi mają swoje święto, a dorośli - spokojną zabawę. Z perspektywy kącika live art widzę to co wesele: zajęte dzieci = zrelaksowani rodzice na parkiecie.",
      },
      { type: "h2", text: "6. Wspólne płótno zamiast księgi gości" },
      {
        type: "p",
        text: "Goście odciskają palce, dorysowują listki, podpisują się na wspólnym obrazie. Prosta rzecz, a angażuje wszystkich - i zostaje po niej fizyczna pamiątka do powieszenia w domu.",
      },
      { type: "h2", text: "7. Live cooking albo degustacja" },
      {
        type: "p",
        text: "Stacja z serami i winem, deska regionalna, pokaz kulinarny o północy zamiast kolejnego gorącego posiłku na siedząco. Goście uwielbiają rzeczy, przy których można stanąć, pogadać i wrócić po dokładkę.",
      },
      { type: "h2", text: "Jak wybrać, żeby nie przesadzić" },
      {
        type: "p",
        text: "Moja rada zza sztalugi: **jedna mocna atrakcja zamiast trzech przeciętnych**. Goście i tak najbardziej zapamiętują to, co osobiste - rzeczy zrobione dla nich, nie obok nich. Jeśli macie wybierać, wybierzcie coś, po czym zostaje pamiątka: wspomnienia z wesela mają wtedy fizyczny kształt. A jeśli tym czymś ma być malowanie na żywo - [sprawdźcie swój termin](/terminy), sezonowe weekendy znikają pierwsze.",
      },
    ],
  },
  {
    slug: "portret-ze-zdjecia-na-prezent",
    title: "Portret ze zdjęcia na prezent - jak zamówić, żeby zachwycił?",
    description:
      "Portret akwarelowy ze zdjęcia od 490 zł: jak wybrać dobre zdjęcie, jaki format na jaką okazję, ile trwa realizacja i jak działa konfigurator online.",
    date: "2026-07-07",
    dateLabel: "7 lipca 2026",
    excerpt:
      "Ręcznie malowany portret ze zdjęcia to prezent, którego się nie odkłada do szuflady. Podpowiadam, jak wybrać zdjęcie i format, żeby trafił idealnie.",
    image: "/gfx/prace/a5-portret-duet.webp",
    imageAlt: "Akwarelowy portret pary namalowany na podstawie zdjęcia",
    imageSize: [600, 840],
    imageCap: "portret duetu prosto z pracowni",
    body: [
      {
        type: "p",
        text: "Portret ze zdjęcia zamawiacie u mnie najczęściej na cztery okazje: **ślub** (od świadków albo rodziców), **rocznicę**, **urodziny** i - coraz częściej - jako pamiątkę po zwierzaku. To prezent z kategorii tych, przy których ktoś naprawdę przełyka łzy. Żeby tak zadziałał, warto zadbać o dwie rzeczy: dobre zdjęcie i odpowiedni format.",
      },
      { type: "h2", text: "Jakie zdjęcie wybrać" },
      {
        type: "ul",
        items: [
          "**Ostre i dobrze doświetlone** - najlepiej w świetle dziennym; maluję to, co widzę, więc im więcej widać, tym lepszy portret",
          "**Naturalne** - kadry „z życia” wychodzą cieplejsze niż sztywne pozowanie; uśmiech, który znacie, zadziała lepiej niż idealna fotografia studyjna",
          "**Z dobrze widoczną twarzą** - bez okularów przeciwsłonecznych i mocnych cieni na twarzy",
        ],
      },
      {
        type: "p",
        text: "Macie wątpliwości, czy zdjęcie się nadaje? Wyślijcie je po prostu w zapytaniu - powiem szczerze, czy da się z niego zrobić dobry portret, albo poproszę o drugie do wyboru.",
      },
      { type: "h2", text: "Formaty i ceny" },
      {
        type: "ul",
        items: [
          "**A4 - 490 zł**: klasyka na biurko albo półkę; najczęściej wybierany na urodziny",
          "**A3 - 690 zł**: dobrze wygląda oprawiony na ścianie; bezpieczny wybór na ślub i rocznicę",
          "**50 × 70 cm - 990 zł**: format „efekt wow” - portret, który staje się głównym punktem pokoju",
        ],
      },
      {
        type: "p",
        text: "Każda kolejna osoba na portrecie to +160 zł, a ręcznie napisana dedykacja - +90 zł. Cenę swojej konfiguracji zobaczycie na żywo w [konfiguratorze portretów](/portrety-na-zamowienie), bez pisania po wycenę.",
      },
      { type: "h2", text: "Ile trwa realizacja" },
      {
        type: "p",
        text: "**10-14 dni od zamówienia**, wysyłka w cenie. Jeśli prezent jest na konkretną datę, doliczcie kilka dni zapasu na dostawę - a gdy termin goni, napiszcie przed zamówieniem: czasem da się przyspieszyć, ale wolę to obiecać, niż zawieść.",
      },
      { type: "h2", text: "Jak zamówić" },
      {
        type: "p",
        text: "Całość działa online: w [konfiguratorze](/portrety-na-zamowienie) wybieracie format, liczbę osób i ewentualną dedykację, widzicie cenę od razu i wysyłacie zamówienie ze zdjęciem. Resztą zajmuję się ja - a Wy za dwa tygodnie odbieracie z paczki gotowy, oprawialny portret.",
      },
    ],
  },
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
    imageSize: [675, 1200],
    imageCap: "ściana ilustracji z jednego wesela",
    body: [
      {
        type: "p",
        text: "Zapisy oraz cennik na malowanie gości na żywo na 2027 właśnie ruszyły. Wszystkie wolne terminy - od dziś aż do końca 2027 roku - znajdziecie w moim kalendarzu online. To, co widzicie w kalendarzu, jest dostępne naprawdę: zajęte daty oznaczam na bieżąco.",
      },
      {
        type: "p",
        text: "Rezerwacja działa tak jak lubicie: wybieracie dzień, wysyłacie bezpłatne zapytanie i w ciągu 24 - 48 godzin wracam do Was z potwierdzeniem dostępności. Zapytanie do niczego nie zobowiązuje - to po prostu początek rozmowy o Waszym weselu albo evencie.",
      },
      {
        type: "p",
        text: "Ceny są jawne i też już czekają w cenniku: trzy pakiety weselne (Kameralny, Klasyczny i Premium), stawki eventowe i portrety na zamówienie. Bez pisania po wycenę, bez „cena zależy”.",
      },
      {
        type: "p",
        text: "Terminy weekendowe w sezonie znikają pierwsze - jeśli macie już datę, warto sprawdzić ją wcześniej niż później. Do zobaczenia przy sztaludze!",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

/** szacowany czas czytania w minutach (ok. 200 słów/min) */
export function readingMinutes(post: Post): number {
  const words = post.body
    .map((b) => (b.type === "ul" ? b.items.join(" ") : b.text))
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
