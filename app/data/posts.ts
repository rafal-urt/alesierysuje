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
    slug: "karykaturzysta-czy-malowanie-akwarela-na-weselu",
    title: "Karykaturzysta czy malowanie akwarelą na weselu - co wybrać?",
    description:
      "Karykaturzysta na wesele czy malowanie gości akwarelą? Porównuję tempo pracy, charakter prac i ceny obu atrakcji - i podpowiadam, jak wybrać pod swoje wesele.",
    date: "2026-07-19",
    dateLabel: "19 lipca 2026",
    excerpt:
      "Obie atrakcje wyglądają podobnie: na sali pracuje artysta, goście dostają swoje podobizny. Różnice widać w tempie, charakterze prac i cenie - porównuję je uczciwie.",
    image: "/gfx/prace/karta-wesele-para.webp",
    imageAlt: "Akwarelowy portret pary gości weselnych",
    imageSize: [560, 790],
    imageCap: "akwarela zamiast przerysowanej kreski",
    body: [
      {
        type: "p",
        text: "W zapytaniach od par to pytanie wraca co tydzień: „zastanawiamy się jeszcze nad karykaturzystą - czym to się właściwie różni?”. Uczciwa odpowiedź: to **dwie różne usługi**, które z daleka wyglądają identycznie - na sali siedzi artysta, goście dostają swoje podobizny. Różnice zaczynają się w szczegółach i to one decydują, czy za pięć lat ta praca będzie wisieć na ścianie, czy leżeć w pudełku po butach. Rozkładam porównanie na pięć kryteriów - a na końcu piszę wprost, w jakiej sytuacji sama poleciłabym karykaturzystę.",
      },
      { type: "h2", text: "Kryterium 1: produkt. Żart kontra portret" },
      {
        type: "p",
        text: "Sednem karykatury jest **przerysowanie**: większy nos, charakterystyczny uśmiech, żartobliwa scenka z gościem w roli głównej. To rozrywka - i w tej roli działa świetnie, bo śmieje się i portretowany, i kolejka za nim. Akwarela idzie w drugą stronę: **portret bez karykaturalnej przesady**, w kolorze, z charakterem stylizacji i tego konkretnego wieczoru. Karykatura ma rozbawić, akwarela ma się podobać - także za dziesięć lat.",
      },
      { type: "h2", text: "Kryterium 2: tempo i liczba prac" },
      {
        type: "p",
        text: "Czarno-biała karykatura powstaje w **4-5 minut** - sprawny karykaturzysta robi 60 i więcej rysunków w wieczór. Moja akwarela A5 to **10-15 minut**, czyli do 30 prac na żywo, a kolejne dokańczam po weselu w pracowni na podstawie zdjęć i dosyłam pocztą. Żadna z tych liczb nie jest „lepsza” - karykaturzysta optymalizuje ilość, ja jakość pojedynczej pracy. Pytanie brzmi: wolicie, żeby rysunek dostał każdy gość, czy żeby każda praca była małym obrazem?",
      },
      { type: "h2", text: "Kryterium 3: materiały i trwałość" },
      {
        type: "p",
        text: "Tu różnica jest największa i najmniej widoczna na weselu. Karykatury powstają zwykle flamastrem albo ołówkiem na cienkim papierze - po kilku latach na słońcu tusz blaknie, a papier żółknie. Ja maluję na **papierze akwarelowym 300 g**, pigmentami odpornymi na światło - to papier, który bez problemu znosi oprawę w passe-partout i dekady na ścianie. Jeśli pamiątka ma przeżyć dłużej niż lodówkowy magnes, zapytajcie każdego artystę o gramaturę papieru: to jedno pytanie mówi o usłudze więcej niż całe portfolio.",
      },
      { type: "h2", text: "Kryterium 4: cena - i co naprawdę porównujecie" },
      {
        type: "p",
        text: "Karykaturzysta na wesele to na polskim rynku zwykle **1 600-2 500 zł** za kilka godzin rysowania. Malowanie akwarelą zaczyna się u mnie **od 4 000 zł**. Zanim uznacie, że różnica jest ogromna, przeliczcie na pojedynczą pracę: 2 000 zł za 60 karykatur to około **35 zł za rysunek**, 6 000 zł za 40 akwarel to około **150 zł za obraz**. Obie ceny są uczciwe - tylko za różne rzeczy: pierwsza za gadżet rozrywkowy, druga za ręcznie malowaną pracę, którą oprawia się w ramę. Pełne pakiety rozbieram na czynniki we wpisie o [cenach malowania na żywo](/blog/ile-kosztuje-malowanie-na-zywo-na-weselu).",
      },
      { type: "h2", text: "Kryterium 5: charakter atrakcji na sali" },
      {
        type: "p",
        text: "Karykaturzysta to często showman - komentuje, żartuje, zbiera publiczność; na weselach w luźnym klimacie robi z tego mały stand-up. Kącik live art działa ciszej: sztaluga, ekspozycja rosnąca przez wieczór, goście przystają, wracają, sprawdzają, kto już „wisi w galerii”. Jedna atrakcja gra głośno, druga elegancko - i to powinno współgrać z resztą Waszej oprawy, od muzyki po florystykę.",
      },
      { type: "h2", text: "Kiedy poleciłabym karykaturzystę" },
      {
        type: "p",
        text: "Piszę to bez ironii: jeśli budżet na atrakcję zamyka się w 2 500 zł, zależy Wam na tym, żeby rysunek dostał dosłownie każdy gość, a Wasze wesele ma być przede wszystkim zabawne - **karykaturzysta będzie lepszym wyborem**. Nie ma sensu dopłacać do akwareli, jeśli jej mocne strony (trwałość, elegancja, charakter obrazu) nie są tym, na czym Wam zależy.",
      },
      { type: "h2", text: "Kiedy akwarela" },
      {
        type: "p",
        text: "Jeśli planujecie elegancką oprawę, chcecie w każdym pakiecie **portret Pary Młodej A4** i zależy Wam, żeby goście wynieśli z wesela pracę, która trafi do ramki, a nie do szuflady - to jest moja działka. Zobaczcie [realizacje z wesel](/realizacje) i porównajcie z portfolio karykaturzystów: różnicę widać szybciej, niż da się ją opisać. Wolne daty do końca 2027 znajdziecie w [kalendarzu terminów](/terminy), a ceny w [cenniku](/cennik). A jeśli dopiero poznajecie temat - zacznijcie od wpisu [co to jest live art](/blog/co-to-jest-live-art-live-painting).",
      },
    ],
  },
  {
    slug: "co-to-jest-live-art-live-painting",
    title: "Live art, live painting, malowanie na żywo - co to właściwie jest?",
    description:
      "Live art (live painting, malowanie na żywo) to malowanie portretów gości podczas wesela lub eventu. Wyjaśniam odmiany, przebieg, ceny w Polsce i jak wybrać artystę.",
    date: "2026-07-19",
    dateLabel: "19 lipca 2026",
    excerpt:
      "Live art, live painting, malowanie na żywo - trzy nazwy tej samej atrakcji. Wyjaśniam, czym się różnią jej odmiany, jak przebiega taki wieczór i ile to kosztuje w Polsce.",
    image: "/gfx/prace/event-portret-goscia-w-rozu.webp",
    imageAlt: "Akwarelowy portret gościa w różowej tonacji malowany na żywo",
    imageSize: [900, 1200],
    imageCap: "portret gościa prosto ze sztalugi",
    body: [
      {
        type: "p",
        text: "**Live art**, **live painting**, po polsku **malowanie na żywo** - trzy nazwy tego samego zjawiska: artysta maluje podczas wesela lub eventu, na oczach gości, a sztuka powstaje w czasie rzeczywistym zamiast przyjechać gotowa. Trend przywędrował do Polski z amerykańskich wesel i tygodni mody, gdzie „live wedding painter” i „event sketch artist” to od lat osobne zawody - u nas wciąż jest na tyle świeży, że na większości przyjęć goście widzą go pierwszy raz. Ten wpis porządkuje temat od zera: odmiany, przebieg wieczoru, realne ceny i pytania, które warto zadać przed rezerwacją.",
      },
      { type: "h2", text: "Cztery odmiany live artu - i cztery różne pamiątki" },
      {
        type: "ul",
        items: [
          "**Portrety gości** - seria kilkudziesięciu małych akwarel malowanych w trakcie przyjęcia; pamiątkę dostaje **każdy sportretowany gość**. To odmiana, w której specjalizuję się ja: 20-40 prac A5 w wieczór",
          "**Jeden obraz sceny** (wedding painting) - artysta przez całe przyjęcie maluje jedno duże płótno, np. pierwszy taniec; praca trwa 6-8 godzin, a pamiątka zostaje **tylko u Pary Młodej**. W USA taka usługa zaczyna się od równowartości kilkunastu tysięcy złotych",
          "**Karykatury** - szybkie, żartobliwe rysunki z przerysowaniem, 4-5 minut na pracę; bliżej im do rozrywki niż do sztuki. Szczegółowe porównanie z akwarelą zrobiłam [w osobnym wpisie](/blog/karykaturzysta-czy-malowanie-akwarela-na-weselu)",
          "**Fashion sketching** - szybkie szkice sylwetek i stylizacji, często na iPadzie; standard na eventach modowych i premierach produktów, rzadkość na weselach",
        ],
      },
      { type: "h2", text: "Jak wygląda wieczór z malowaniem na żywo" },
      {
        type: "p",
        text: "Opiszę swój wariant, bo znam go od podszewki. Kącik live art rozstawiam, zanim goście wejdą na salę: stolik, sztaluga, ekspozycja - potrzebuję około **2 × 2 metrów** z dobrym światłem, najlepiej z widokiem na parkiet. Goście **nie pozują**: podchodzą na szybkie zdjęcie i wracają do zabawy, a ja maluję z fotografii - jedna akwarela A5 na papierze 300 g to 10-15 minut. Pierwsze prace wiszą na ekspozycji jeszcze przed obiadem i od tego momentu kącik żyje własnym życiem: goście wracają sprawdzać, kto doszedł do galerii, i odbierają swoje podpisane ilustracje, kiedy chcą. Finał należy do portretu Pary Młodej albo jubilata - większego, w formacie A4, wręczanego osobiście. Czego nie zdążę namalować na żywo, dokańczam po przyjęciu w pracowni i dosyłam pocztą.",
      },
      { type: "h2", text: "Czego live art nie jest" },
      {
        type: "p",
        text: "Dwa nieporozumienia, które warto rozbroić przed rezerwacją. Po pierwsze: to nie jest „analogowa fotobudka” - prace są ręczne i unikatowe, więc ich liczba jest fizycznie ograniczona tempem malowania; na dużym weselu nie każdy gość dostanie pracę **na żywo** i uczciwy artysta powie Wam to wprost (u mnie odpowiedzią jest system dokańczania prac w pracowni). Po drugie: to nie pokaz szybkiego rysowania dla publiki - artysta naprawdę pracuje przez cały wieczór, a show polega na tym, że galeria rośnie, nie na tym, że ktoś macha pędzlem do muzyki.",
      },
      { type: "h2", text: "Ile kosztuje live painting w Polsce" },
      {
        type: "p",
        text: "Rynkowe widełki dla malowania gości na żywo to obecnie mniej więcej **1 900-5 700 zł**, a decydują o nich cztery rzeczy: technika (ołówek jest tańszy od akwareli), liczba prac, doświadczenie artysty i dojazd. Usługi z jednym dużym obrazem sceny wyceniane są osobno i zwykle wyżej. U mnie pakiety weselne zaczynają się **od 4 000 zł**, eventowe dla firm **od 4 500 zł** (z umową i fakturą VAT) - wszystkie kwoty są jawne w [cenniku](/cennik), a na czynniki rozkładam je we wpisie [ile kosztuje malowanie na żywo na weselu](/blog/ile-kosztuje-malowanie-na-zywo-na-weselu).",
      },
      { type: "h2", text: "Na jakie okazje sprawdza się live art" },
      {
        type: "ul",
        items: [
          "**Wesela** - najpopularniejsza okazja: portrety gości jako podziękowania i portret Pary Młodej jako pamiątka; całość opisuję na stronie o [malowaniu na żywo na weselu](/malowanie-na-zywo-wesele)",
          "**Eventy firmowe** - gale, jubileusze, konferencje, premiery; papier przygotowuję pod branding wydarzenia, a kącik działa też jako materiał do relacji w social mediach - szczegóły na stronie [malowania na żywo na eventach](/malowanie-na-zywo-eventy)",
          "**Okrągłe urodziny i jubileusze prywatne** - kameralne przyjęcia premium, o których piszę we wpisie o [malowaniu gości na urodzinach](/blog/malowanie-gosci-na-urodzinach-na-zywo)",
        ],
      },
      { type: "h2", text: "Cztery pytania, które warto zadać przed rezerwacją" },
      {
        type: "ul",
        items: [
          "**„Ile prac powstanie i co z resztą chętnych?”** - konkretna liczba w umowie i jasna procedura dokańczania to znak profesjonalisty",
          "**„Na jakim papierze i jakimi farbami?”** - papier 300 g i pigmenty odporne na światło to różnica między pamiątką na dekady a rysunkiem, który wyblaknie w dwa lata",
          "**„Czy mogę zobaczyć prace z realnych wydarzeń, nie tylko z pracowni?”** - malowanie w biegu, przy słabym świetle, to inna dyscyplina niż praca w domu; moje [realizacje są tutaj](/realizacje)",
          "**„Co jest w cenie?”** - dojazd, ekspozycja, konsultacja przed wydarzeniem, portret główny; jawny cennik oszczędza niespodzianek",
        ],
      },
      {
        type: "p",
        text: "Jeśli po tej lekturze live art wydaje się Wam czymś dla Waszego przyjęcia - wolne daty do końca 2027 roku widać w [kalendarzu terminów](/terminy). Napiszcie - to po prostu początek rozmowy.",
      },
    ],
  },
  {
    slug: "podziekowania-dla-gosci-weselnych-pomysly",
    title: "Podziękowania dla gości weselnych - 8 pomysłów, które zostają na lata",
    description:
      "Szukacie pomysłu na podziękowania dla gości weselnych? 8 sprawdzonych propozycji - od portretów malowanych na żywo po świece i lawendę - z podziałem na te, które zostają na lata.",
    date: "2026-07-19",
    dateLabel: "19 lipca 2026",
    excerpt:
      "Krówki z datą ślubu znikają przed oczepinami. Zebrałam 8 pomysłów na podziękowania dla gości - z uczciwym podziałem na upominki, które znikają w wieczór, i te, które zostają na lata.",
    image: "/gfx/prace/wesele-ilustracje-przed-wreczeniem.webp",
    imageAlt: "Akwarelowe portrety gości weselnych przygotowane do wręczenia",
    imageSize: [900, 1200],
    imageCap: "portrety gości tuż przed wręczeniem",
    body: [
      {
        type: "p",
        text: "Zacznijmy od rachunku, który mało kto robi: 80 gości razy 15 zł za upominek to **1 200 zł** - kwota, która może zniknąć przed oczepinami albo zostać w domach gości na lata. Podziękowania dla gości weselnych to jedyny element budżetu, który fizycznie wychodzi z wesela razem z gośćmi, więc warto wybrać go świadomie. Zebrałam 8 pomysłów z realnymi cenami za sztukę i uczciwym podziałem: co znika w wieczór, a co zostaje.",
      },
      { type: "h2", text: "Zanim wybierzecie: trzy pytania" },
      {
        type: "ul",
        items: [
          "**Czy to zostaje?** - krówka znika w wieczór, świeca po miesiącu, portret nigdy; sama trwałość nie przesądza wyboru, ale trzeba ją znać",
          "**Ile sztuk naprawdę potrzebujecie?** - część upominków (miód, świeca, nalewka) wręcza się „na parę” albo „na rodzinę”, co przy 100 gościach potrafi zmniejszyć zamówienie o połowę",
          "**Kto to rozłoży?** - upominki na talerzach musi ktoś rozłożyć przed wejściem gości; dogadajcie to z salą albo wyznaczcie osobę, bo w dniu ślubu Wy nie będziecie mieć na to głowy",
        ],
      },
      { type: "h2", text: "1. Portret gościa malowany na żywo" },
      {
        type: "p",
        text: "Zaczynam od swojej działki, bo to jedyny punkt tej listy, który jest jednocześnie **atrakcją wieczoru i podziękowaniem**: podczas przyjęcia maluję akwarelowe portrety gości, a każdy zabiera swój do domu - podpisany, na papierze 300 g, gotowy do oprawienia. W pakiecie Klasycznym (6 000 zł, do 40 ilustracji) wychodzi **około 150 zł za gościa** - najdrożej na tej liście, ale to jedyne podziękowanie, które ląduje w ramce, a nie w szufladzie. I jedyne, przy którym wręczanie samo w sobie bawi całą salę. Szczegóły na stronie o [malowaniu na żywo na weselu](/malowanie-na-zywo-wesele).",
      },
      { type: "h2", text: "2. Personalizowane słodycze - 2-5 zł za sztukę" },
      {
        type: "p",
        text: "Krówki, czekoladki, lizaki z imionami i datą - klasyka, która nigdy nie obraża i niczego nie udaje. Umówmy się tylko co do jednego: to akcent na talerzu, nie pamiątka. Jeśli budżet jest napięty, słodycze plus jedna mocna atrakcja to lepszy układ niż drogi drobiazg, którego nikt nie zapamięta.",
      },
      { type: "h2", text: "3. Świece sojowe - 15-35 zł za sztukę" },
      {
        type: "p",
        text: "Rozsądny środek stawki: świeca pali się tygodniami i przypomina o Was przy każdym zapaleniu. Praktyczna rada z wesel, na których je widziałam: wybierzcie **jeden dobry zapach zamiast personalizowanej etykiety** - etykietę z datą goście widzą raz, zapach czują przez miesiąc.",
      },
      { type: "h2", text: "4. Miody i domowe przetwory - 10-25 zł za słoiczek" },
      {
        type: "p",
        text: "Miód z lokalnej pasieki albo konfitura według rodzinnego przepisu opowiada historię: o regionie, o Waszej rodzinie, o tym, że ktoś się postarał. Upominek szczególnie doceniany przez starszych gości - i jeden z niewielu, które wręcza się „na rodzinę”, co realnie obniża koszt całości.",
      },
      { type: "h2", text: "5. Lawenda albo herbata - 5-12 zł za sztukę" },
      {
        type: "p",
        text: "Woreczek lawendy wędruje do szafy i pachnie przez sezon albo dwa; słoiczek herbaty z płatkami róży wygląda elegancko na talerzu i kosztuje grosze. Najtańsza opcja z kategorii „zostaje dłużej niż wieczór” - dobra, gdy liczba gości idzie w setki.",
      },
      { type: "h2", text: "6. Sadzonki i nasiona - 8-15 zł za sztukę" },
      {
        type: "p",
        text: "Mini sukulent albo torebka nasion łąki kwietnej z liścikiem „niech rośnie z nami”. Jedyny upominek na tej liście, który z czasem **rośnie** - i wraca do Was w rozmowach na rocznicach. Jedno zastrzeżenie logistyczne: sadzonki źle znoszą noc w aucie zimą, to pomysł na wesela od wiosny do września.",
      },
      { type: "h2", text: "7. Nalewka domowa - koszt własny plus 3-6 zł za buteleczkę" },
      {
        type: "p",
        text: "Jeśli w rodzinie jest ktoś, kto robi dobrą nalewkę - to jest ten moment. Mała buteleczka z ręcznie podpisaną etykietą ma charakter, którego nie kupicie w hurtowni ślubnych gadżetów. Zacznijcie przygotowania kilka miesięcy przed weselem: dobra nalewka potrzebuje czasu, a butelkowanie stu sztuk to wieczór pracy.",
      },
      { type: "h2", text: "8. Wachlarze na letnie wesele - 5-12 zł za sztukę" },
      {
        type: "p",
        text: "Jedyny upominek, który pracuje już podczas ceremonii: bambusowy wachlarz w sierpniowy skwar to ratunek, nie gadżet. Po weselu zostaje jako pamiątka z konkretnym wspomnieniem - „to z tego upału na Waszym ślubie”.",
      },
      { type: "h2", text: "Trzy błędy, które widuję najczęściej" },
      {
        type: "ul",
        items: [
          "**Wręczanie przy wyjściu** - goście wychodzą falami i połowa upominków zostaje na stole; lepiej położyć je na talerzach albo przy winietkach, gdzie pracują też jako dekoracja",
          "**Personalizacja zamiast jakości** - data ślubu na byle świecy nie robi z niej pamiątki; goście zapamiętują rzecz, nie nadruk",
          "**Trzy drobiazgi zamiast jednego konkretu** - budżet rozmieniony na krówkę, magnes i wachlarz zrobi mniejsze wrażenie niż jedna rzecz wybrana z sensem",
        ],
      },
      { type: "h2", text: "Jak wybrać mądrze" },
      {
        type: "p",
        text: "Moja zasada zza sztalugi: **jedna rzecz, która zostaje, zamiast trzech, które znikają**. Goście nie pamiętają liczby upominków - pamiętają ten jeden, który wisi na ścianie albo stoi na półce. Jeśli ma nim być portret malowany na żywo, sprawdźcie [wolne terminy](/terminy) - sezonowe weekendy znikają pierwsze. A o pamiątkach, które z wesela zabieracie Wy, a nie goście, piszę we wpisie o [pamiątkach z wesela](/blog/pamiatka-z-wesela-pomysly).",
      },
    ],
  },
  {
    slug: "ksiega-gosci-alternatywy",
    title: "Księga gości na weselu - 7 alternatyw dla zeszytu z życzeniami",
    description:
      "Klasyczna księga gości bywa martwa już przed północą. 7 alternatyw: audio-księga, wspólne płótno, wino-kapsuła czasu, portrety gości i inne pomysły, które naprawdę działają.",
    date: "2026-07-19",
    dateLabel: "19 lipca 2026",
    excerpt:
      "Zeszyt z życzeniami zwykle kończy z trzema wpisami i odciskiem kieliszka. Zebrałam 7 alternatyw dla księgi gości - od audio-księgi po portrety malowane na żywo.",
    image: "/gfx/prace/wesele-k-j-ilustracje-gosci.webp",
    imageAlt: "Galeria akwarelowych portretów gości z jednego wesela",
    imageSize: [900, 1200],
    imageCap: "galeria gości zamiast zeszytu z wpisami",
    body: [
      {
        type: "p",
        text: "Klasyczna **księga gości** umiera zawsze tak samo: leży na stoliku przy wejściu, dostaje trzy wpisy „wszystkiego najlepszego” przed obiadem i odcisk kieliszka po północy. Problem nie leży w gościach, tylko w formule - zeszyt stoi tam, gdzie nikt się nie zatrzymuje, i prosi o wpis w momencie, gdy nikt nie ma jeszcze nic do powiedzenia. Dobre alternatywy odwracają jedno albo drugie: zmieniają miejsce, moment albo medium. Oto 7 sprawdzonych - z kosztami i pułapkami logistycznymi, o których mało kto uprzedza.",
      },
      { type: "h2", text: "1. Audio-księga gości" },
      {
        type: "p",
        text: "Stary telefon z centralką nagrywa życzenia zamiast zeszytu - a po kilku toastach goście mówią rzeczy, których nigdy by nie napisali. Wynajem to zwykle **600-1 200 zł** za weekend, z nagraniami zgranymi na pendrive. Rada logistyczna: postawcie telefon **przy barze, nie przy wejściu** - życzenia nagrywa się najlepiej między drugim a czwartym toastem, a nie na trzeźwo o siedemnastej.",
      },
      { type: "h2", text: "2. Wspólne płótno" },
      {
        type: "p",
        text: "Goście odciskają palce jako listki drzewa, dorysowują, podpisują się na jednym dużym obrazie. Koszt w wersji własnej to **około 200-300 zł** (płótno, farby akrylowe, pędzle) - najtańsza pozycja na liście. Dwa warunki powodzenia: wyznaczcie osobę, która pilnuje stanowiska przez pierwszą godzinę i ośmiela gości, oraz połóżcie obok wilgotne chusteczki, bo farba na palcach skutecznie zniechęca kolejnych chętnych.",
      },
      { type: "h2", text: "3. Wideo-budka z życzeniami" },
      {
        type: "p",
        text: "Kamera w ustronnym kącie, przycisk „nagraj”, minuta na życzenia. Z nagrań powstaje film, który po latach ogląda się lepiej niż teledysk ślubny - zwłaszcza fragmenty z okolic północy. Potrzebuje dwóch rzeczy, o których wynajmujący nie zawsze mówią: **dobrego światła** (ciemny kąt to ciemne nagrania) i miejsca na tyle osobnego, żeby nieśmiali goście nie mieli publiczności.",
      },
      { type: "h2", text: "4. Polaroidy z albumem" },
      {
        type: "p",
        text: "Goście robią sobie zdjęcie instaxem, wklejają do albumu, dopisują życzenia - jedyny „zeszyt”, do którego naprawdę ustawia się kolejka. Pułapka jest w budżecie wkładów: **jedno zdjęcie to 4-5 zł**, więc sto zdjęć kosztuje więcej niż niejeden aparat. Kupcie dwa aparaty (kolejka!), zapas wkładów z górką i taśmę klejącą, która nie niszczy zdjęć.",
      },
      { type: "h2", text: "5. Wino-kapsuła czasu" },
      {
        type: "p",
        text: "Skrzynka z winem i listami od gości, zamykana na weselu i otwierana na piątą rocznicę. Kosztuje tyle, co skrzynka i dobre wino, a po latach robi większe wrażenie niż wszystkie pozostałe punkty razem wzięte. Dwie rady: wybierzcie wino, które zniesie pięć lat leżakowania (sommelier w dobrym sklepie doradzi w pięć minut), i przygotujcie papeterię z piórem na stole - „napiszcie list” działa dopiero, gdy jest czym i na czym.",
      },
      { type: "h2", text: "6. Karty z pytaniami na stołach" },
      {
        type: "p",
        text: "Na każdym stole karty z pytaniami, goście wypełniają je między daniami, a Wy zbieracie po weselu pudełko odpowiedzi. Koszt: domowa drukarka i ryza grubszego papieru. Cała robota jest w pytaniach - ogólne („życzenia dla Młodej Pary”) dają ogólne odpowiedzi, konkretne dają złoto: „co nam wróżysz za 10 lat?”, „najlepsza rada na pierwszą kłótnię?”, „co musimy ugotować, gdy wpadniesz w odwiedziny?”.",
      },
      { type: "h2", text: "7. Portrety gości - księga w drugą stronę" },
      {
        type: "p",
        text: "Mój faworyt, z oczywistych względów - i jedyna pozycja, która odwraca kierunek: zamiast zbierać wpisy od gości, to **Wy zostawiacie każdemu gościowi pamiątkę**. Kącik live art działa jak księga gości na odwrót: każdy, kto podszedł na szybkie zdjęcie, wychodzi z wesela z ręcznie malowaną akwarelą, a Wam zostaje portret Pary Młodej A4 i galeria, która rosła na oczach wszystkich przez cały wieczór. Pakiety zaczynają się od 4 000 zł - a jak dokładnie wygląda taki wieczór, opisuję we wpisie [live painting na weselu krok po kroku](/blog/live-painting-na-weselu-jak-to-wyglada).",
      },
      { type: "h2", text: "Jak to spiąć w całość" },
      {
        type: "p",
        text: "Najlepszy układ, jaki widuję na weselach, to para: **jedno od gości dla Was** (audio-księga, wino-kapsuła, karty) i **jedno od Was dla gości** (portrety albo przemyślane podziękowania - pomysły zebrałam [w osobnym wpisie](/blog/podziekowania-dla-gosci-weselnych-pomysly)). Więcej niż dwie rzeczy zaczynają ze sobą konkurować o uwagę gości. Jeśli portrety mają być Waszą połową tej pary - [sprawdźcie swój termin](/terminy).",
      },
    ],
  },
  {
    slug: "pamiatka-z-wesela-pomysly",
    title: "Pamiątka z wesela - 7 pomysłów na coś więcej niż album ze zdjęciami",
    description:
      "Jaka pamiątka z wesela zostaje na lata? 7 pomysłów: portret Pary Młodej malowany na żywo, portrety gości, portret ze zdjęcia ślubnego, bukiet w ramce, kapsuła czasu i inne.",
    date: "2026-07-19",
    dateLabel: "19 lipca 2026",
    excerpt:
      "Album i film to podstawa - ale najlepsze pamiątki z wesela to te, które wiszą na ścianie i widzi się je codziennie. 7 pomysłów, od akwareli malowanych na żywo po kapsułę czasu.",
    image: "/gfx/prace/karta-wesele-czworka.webp",
    imageAlt: "Akwarelowa ilustracja czwórki gości weselnych",
    imageSize: [560, 790],
    imageCap: "pamiątka, którą widuje się codziennie",
    body: [
      {
        type: "p",
        text: "Album ze zdjęciami i film to podstawa - ale otwieracie je kilka razy w roku. Najlepsze **pamiątki z wesela** to te, które widzicie codziennie przy porannej kawie: wiszą na ścianie, stoją na półce, rosną na parapecie. Zebrałam 7 pomysłów w dwóch grupach, bo to podział, od którego zależy Wasz kalendarz: część pamiątek **musi powstać w trakcie wesela** i trzeba je zaplanować przed, a część można zamówić spokojnie po przyjęciu.",
      },
      { type: "h2", text: "Powstają w trakcie wesela - planujcie przed" },
      {
        type: "p",
        text: "Trzy pierwsze pozycje mają wspólną cechę: nie da się ich „dorobić” po fakcie. Jeśli któraś ma być na Waszym weselu, rezerwujcie z wyprzedzeniem - dobrzy wykonawcy w sezonie znikają na rok naprzód.",
      },
      { type: "h2", text: "1. Portret Pary Młodej malowany na weselu" },
      {
        type: "p",
        text: "Akwarela **A4 na papierze 300 g**, malowana na żywo w trakcie Waszego przyjęcia - w cenie każdego mojego pakietu [malowania na żywo](/malowanie-na-zywo-wesele) (od 4 000 zł, razem z portretami gości). Różnica względem portretu ze zdjęcia jest subtelna, ale realna: ta praca **fizycznie powstała na Waszej sali**, między pierwszym tańcem a toastami, i była częścią wieczoru, a nie wspomnieniem o nim. Z pamiątek, które maluję, ta wisi potem najbliżej sypialni.",
      },
      { type: "h2", text: "2. Galeria portretów gości" },
      {
        type: "p",
        text: "Pamiątka rozproszona: kilkadziesiąt akwarel malowanych w trakcie wesela wisi potem w kilkudziesięciu domach i w każdym z nich przypomina o Waszym przyjęciu. To jedyna pozycja na liście, która działa w obie strony - goście mają pamiątkę od Was, a Wy wspomnienie galerii rosnącej przez cały wieczór i zdjęcia kącika, które i tak zrobi połowa sali.",
      },
      { type: "h2", text: "3. Bukiet ślubny zasuszony w ramce" },
      {
        type: "p",
        text: "Kwiaty z bukietu, sprasowane i oprawione w ramę 3D, zamieniają się w botaniczną kompozycję na ścianę - u florystek specjalizujących się w suszeniu to zwykle **300-700 zł** z oprawą. Kluczowy jest czas: bukiet musi trafić do suszenia **w 2-3 dni po weselu**, kiedy Wy będziecie najmniej zdolni do ogarniania czegokolwiek. Wyznaczcie osobę odpowiedzialną już teraz - to jedno zdanie ratuje całą pamiątkę.",
      },
      { type: "h2", text: "Można zamówić po weselu - bez pośpiechu" },
      {
        type: "p",
        text: "Druga grupa to pamiątki, na które macie czas: powstają ze zdjęć, dokumentów i przedmiotów, które z wesela i tak zostaną.",
      },
      { type: "h2", text: "4. Portret ze zdjęcia ślubnego" },
      {
        type: "p",
        text: "Akwarela z Waszego ulubionego kadru - w [konfiguratorze portretów](/portrety-na-zamowienie) wybieracie format (od 490 zł za A4) i widzicie cenę od razu, realizacja trwa 10-14 dni. Ciekawostka z mojej pracowni: połowę takich portretów zamawiają nie pary, tylko **świadkowie i rodzice** - jako prezent na pierwszą rocznicę. Jeśli czytacie to jako świadkowa: tak, to jest ten pomysł.",
      },
      { type: "h2", text: "5. Album fine art zamiast pliku w chmurze" },
      {
        type: "p",
        text: "Zdjęcia z wesela zasługują na coś więcej niż folder „wesele_final_v2” na dysku. Album na papierze archiwalnym, z selekcją 60-80 kadrów, u fotografów kosztuje zwykle **1 500-4 000 zł** ekstra - i to on będzie krążył po stole na każdym rodzinnym spotkaniu przez następne dekady. Rada: zamawiajcie selekcję razem z fotografem, póki pamięta Wasze wesele; po dwóch latach to już tylko katalog plików.",
      },
      { type: "h2", text: "6. Kapsuła czasu" },
      {
        type: "p",
        text: "Skrzynka zamykana po weselu i otwierana na piątą rocznicę: butelka wina z przyjęcia, listy od Was do siebie nawzajem, menu, zaproszenie, gazeta z dnia ślubu. Koszt bliski zeru, efekt po latach - największy na tej liście. Najtrudniejsze jest jedno: naprawdę jej nie otwierać.",
      },
      { type: "h2", text: "7. Zaproszenie albo przysięga w ramce" },
      {
        type: "p",
        text: "Najprostszy pomysł: pięknie złożone zaproszenie albo tekst przysięgi przepisany kaligrafią (u kaligrafek zwykle **150-400 zł**) w dobrej ramie. Kosztuje najmniej ze wszystkiego, a na ścianie robi więcej, niż podpowiada cena - bo to Wasze własne słowa, nie dekoracja ze sklepu.",
      },
      { type: "h2", text: "Plan minimum" },
      {
        type: "p",
        text: "Jeśli miałabym to sprowadzić do jednej zasady: **jedna pamiątka na ścianę, jedna do otwierania**. Ściana pracuje codziennie, pudełko raz w roku - i właśnie ta para pokrywa oba rodzaje wspominania. Jeśli tą pierwszą ma być akwarela malowana na żywo, zajrzyjcie do [cennika](/cennik) i [kalendarza terminów](/terminy). A o pamiątkach, które z wesela wynoszą goście, piszę we wpisie o [podziękowaniach dla gości](/blog/podziekowania-dla-gosci-weselnych-pomysly).",
      },
    ],
  },
  {
    slug: "atrakcje-na-event-firmowy-pomysly",
    title: "Atrakcje na event firmowy - 7 pomysłów, które nie są kolejną fotobudką",
    description:
      "Szukacie atrakcji na event firmowy, galę lub imprezę integracyjną? 7 sprawdzonych pomysłów - od malowania gości na żywo po silent disco - i jak wybrać pod cel wydarzenia.",
    date: "2026-07-19",
    dateLabel: "19 lipca 2026",
    excerpt:
      "Fotobudka i DJ to za mało, żeby goście zapamiętali firmowe wydarzenie. 7 atrakcji na event, galę i integrację - w tym kilka, po których uczestnicy wychodzą z pamiątką.",
    image: "/gfx/prace/event-fashion-days-ilustracje.webp",
    imageAlt: "Akwarelowe ilustracje gości z eventu modowego",
    imageSize: [900, 1200],
    imageCap: "ilustracje z eventu modowego",
    body: [
      {
        type: "p",
        text: "Jest sala, jest budżet, jest agenda - brakuje punktu programu, który goście będą pamiętać po miesiącu. Znam to z drugiej strony sztalugi: regularnie maluję na galach, jubileuszach i konferencjach i widzę, które atrakcje pracują, a które tylko stoją. Wzór, który się powtarza, jest prosty: **wygrywają atrakcje, po których coś zostaje** - w rękach gościa, w telefonach uczestników albo w materiałach z eventu. Oto 7 pomysłów z orientacyjnymi budżetami i dopasowaniem do typu wydarzenia.",
      },
      { type: "h2", text: "1. Malowanie gości na żywo (live painting)" },
      {
        type: "p",
        text: "Moja działka, więc znam liczby z pierwszej ręki: podczas wydarzenia maluję **akwarelowe portrety gości** - 15-30 prac na żywo, każda trafia do rąk uczestnika. Dla organizatora to trzy efekty naraz: atrakcja, przy której zawsze stoi grupka ludzi; **pamiątka z logo wydarzenia**, bo papier przygotowuję pod branding; i najbardziej fotogeniczny kącik na sali - materiał do relacji robi się sam. Pakiety eventowe od **4 500 zł**, z umową i fakturą VAT. Malowałam m.in. na evencie modowym, 40-leciu firmy i całodniowej konferencji - szczegóły i realizacje na stronie o [malowaniu na żywo na eventach](/malowanie-na-zywo-eventy).",
      },
      { type: "h2", text: "2. Silent disco - zwykle 2 000-4 000 zł" },
      {
        type: "p",
        text: "Bezprzewodowe słuchawki z kilkoma kanałami muzyki rozwiązują odwieczny konflikt eventów: głośna zabawa i rozmowy biznesowe w tej samej sali, w tym samym czasie. Dodatkowy atut, o którym mówi się rzadziej: działa w miejscach z ciszą nocną i w przestrzeniach biurowych, gdzie klasyczna impreza z nagłośnieniem odpada.",
      },
      { type: "h2", text: "3. Warsztaty kulinarne albo degustacja - od 150-250 zł za osobę" },
      {
        type: "p",
        text: "Wspólne gotowanie pod okiem kucharza albo prowadzona degustacja win, kaw czy serów. To najlepszy wybór, gdy celem jest **integracja małych zespołów**: przy krojeniu i próbowaniu rozmowa toczy się sama, bez wymuszonych gier. Skala jest ograniczeniem - powyżej 40-50 osób warsztaty zamieniają się w pokaz, a cena rośnie liniowo z liczbą gości.",
      },
      { type: "h2", text: "4. Iluzjonista lub mentalista - zwykle 3 000-8 000 zł" },
      {
        type: "p",
        text: "Na galach zasiadanych najlepiej działa wariant **close-up**: artysta przechodzi między stolikami w trakcie kolacji i robi iluzję z centymetra, na oczach ośmiu osób naraz. To skuteczniejszy lodołamacz niż występ sceniczny - daje każdemu stolikowi wspólny temat na resztę wieczoru, a nie piętnaście minut patrzenia w scenę.",
      },
      { type: "h2", text: "5. Strefa gier retro - zwykle 1 500-3 000 zł" },
      {
        type: "p",
        text: "Automaty arcade, flipery, konsole z lat 90. Atrakcja **bezobsługowa i falowa**: goście podchodzą, grają, wracają - przez cały wieczór, bez kolejki i bez harmonogramu. Dobra na duże konferencje i eventy z ciągłym przepływem gości, gdzie atrakcje „na godzinę” się nie sprawdzają.",
      },
      { type: "h2", text: "6. Kaligraf personalizujący upominki" },
      {
        type: "p",
        text: "Artysta podpisuje na miejscu notesy, butelki, torby - gość wybiera przedmiot i patrzy, jak jego imię powstaje na żywo. Mechanizm jest ten sam, na którym opiera się moja praca: **gadżet z imieniem przestaje być gadżetem, a zaczyna być prezentem**. Idealne na premiery produktów i stoiska targowe, gdzie firma i tak rozdaje upominki - personalizacja wielokrotnie podnosi ich postrzeganą wartość przy niewielkim koszcie.",
      },
      { type: "h2", text: "7. Muzyka na żywo - zwykle 2 000-6 000 zł" },
      {
        type: "p",
        text: "Kwartet smyczkowy na powitanie, duet jazzowy do kolacji, band na wieczór - żywa muzyka ustawia rangę wydarzenia w pierwszych trzech minutach, zanim ktokolwiek zdąży przeczytać agendę. Jedna rada z sal, na których pracuję: repertuar dobierajcie do profilu gości, nie do gustu zarządu.",
      },
      { type: "h2", text: "Dobór pod typ wydarzenia" },
      {
        type: "ul",
        items: [
          "**Gala zasiadana** - close-up magic, muzyka na żywo, live painting: atrakcje, które działają przy stolikach, bez wyciągania gości z krzeseł",
          "**Integracja zespołu** - warsztaty kulinarne, silent disco: tu celem jest rozmowa, nie widowisko",
          "**Konferencja i targi** - strefy bezobsługowe (gry retro), kaligraf i live painting przy stoisku: atrakcje falowe, dopasowane do ciągłego przepływu ludzi",
          "**Jubileusz firmy** - atrakcje z pamiątką: portrety gości na brandowanym papierze zostają w domach pracowników na lata, a to dokładnie ten efekt, o który chodzi w jubileuszu",
        ],
      },
      { type: "h2", text: "Jedno kryterium, które porządkuje wybór" },
      {
        type: "p",
        text: "Gdy porównujecie oferty, zadajcie każdej to samo pytanie: **co z tej atrakcji zostanie tydzień po evencie?** Wspomnienie, zdjęcie w telefonie, przedmiot w domu gościa - im dalej w tej skali, tym dłużej wydarzenie pracuje na markę. Jeśli odpowiedzią ma być ręcznie malowany portret z logo Waszego wydarzenia, napiszcie przez [formularz kontaktowy](/kontakt) albo sprawdźcie [wolne terminy](/terminy) - do wyceny wystarczy data, miejsce i orientacyjna liczba gości.",
      },
    ],
  },
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
        text: "Wolne daty do końca 2027 roku widać w [kalendarzu terminów](/terminy) - w formularzu wybierzcie rodzaj wydarzenia „Urodziny / jubileusz”. Piszecie do mnie i w ciągu 24-48 godzin wracam z odpowiedzią. To po prostu początek rozmowy o Waszym przyjęciu.",
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
        text: "Wszystkie wolne daty do końca 2027 roku widać w [kalendarzu terminów](/terminy). Wybieracie dzień, piszecie do mnie i w ciągu 24-48 godzin wracam z odpowiedzią. To po prostu początek rozmowy.",
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
        text: "Każda kolejna osoba na portrecie to +160 zł, a ręcznie napisana dedykacja - +90 zł. Cenę swojej konfiguracji zobaczycie na żywo w [konfiguratorze portretów akwarelowych](/portrety-na-zamowienie), bez pisania po wycenę.",
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
      "Zapisy oraz cennik na malowanie gości na żywo na 2027 właśnie ruszyły. Sprawdź wolne terminy w kalendarzu online i zarezerwuj swój dzień.",
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
        text: "Rezerwacja działa tak jak lubicie: wybieracie dzień, piszecie do mnie i w ciągu 24 - 48 godzin wracam z potwierdzeniem dostępności. To po prostu początek rozmowy o Waszym weselu albo evencie.",
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
