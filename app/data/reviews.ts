// Opinie z portalu Wesele z klasą (skondensowane parafrazy z prototypu).
// Pełne treści wklei właścicielka w panelu Payload (Etap 3).
export type Review = {
  author: string;
  text: string;
  where: string;
  when: string;
};

export const REVIEWS: Review[] = [
  {
    author: "Klara",
    text: "Termin złapany półtora miesiąca przed ślubem, gdy poprzednia artystka odwołała w ostatniej chwili. Goście zachwyceni, a dojazd aż na Kaszuby nie był problemem.",
    where: "wesele, Kaszuby",
    when: "kwiecień 2026",
  },
  {
    author: "Oliwia",
    text: "Malowanie na żywo okazało się strzałem w dziesiątkę. Profesjonalizm, serdeczność i talent - wszystko przebiegło dokładnie tak, jak ustaliliśmy.",
    where: "wesele, Zagruszany",
    when: "czerwiec 2026",
  },
  {
    author: "Maria",
    text: "Dwa dni przed walentynkową imprezą uratowała nam event po odwołaniu innej artystki - prawie 30 ilustracji i pełne uszanowanie naszej prywatności. Dałabym 10 gwiazdek.",
    where: "impreza, Warszawa",
    when: "luty 2026",
  },
  {
    author: "Rafał",
    text: "Portrety powstawały na żywo, jeden po drugim, a sam proces robił wrażenie. To nie jednorazowa atrakcja, tylko pamiątka, do której chce się wracać.",
    where: "event, Płock",
    when: "wrzesień 2025",
  },
  {
    author: "Kasia",
    text: "Event firmowy na 120 osób - jedna z najlepiej zapamiętanych części całego wydarzenia. Styl ilustracji i papier dopasowane do motywu przewodniego imprezy.",
    where: "event firmowy, Mielno",
    when: "sierpień 2025",
  },
  {
    author: "Adam",
    text: "Nazwanie tego usługą nie jest adekwatne - to zdolności i możliwości. Włączenie live paintingu do programu było zaskoczeniem samym w sobie.",
    where: "impreza firmowa, Kraków",
    when: "maj 2025",
  },
];
