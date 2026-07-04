// Seed bazy danymi z prototypu: 8 prac, 6 opinii, ceny i ustawienia.
// Uruchomienie: npm run seed (idempotentny - pomija istniejące dane).
import { getPayload } from "payload";
import config from "../payload.config";

const WORKS = [
  { title: "Pierwszy taniec", caption: "Marta i Paweł - Zamek Gniew, sierpień", category: "wesele", palette: 0, seed: 11, bigFormat: true },
  { title: "Sala pełna światła", caption: "Karolina i Jan - Pałac Rozalin, czerwiec", category: "wesele", palette: 1, seed: 23, bigFormat: false },
  { title: "Plener nad jeziorem", caption: "Ola i Tomek - Mazury, lipiec", category: "wesele", palette: 3, seed: 37, bigFormat: true },
  { title: "Wieczór firmowy", caption: "event, 120 gości - Mielno", category: "event", palette: 2, seed: 41, bigFormat: false },
  { title: "Portret rodziców", caption: "zamówienie z Pracowni - prezent na 40. rocznicę", category: "portret", palette: 4, seed: 53, bigFormat: false },
  { title: "Oczepiny o północy", caption: "Basia i Piotr - Serock, wrzesień", category: "wesele", palette: 1, seed: 67, bigFormat: true },
  { title: "Toast", caption: "Magda i Adam - Warszawa, maj", category: "wesele", palette: 0, seed: 71, bigFormat: false },
  { title: "Szybkie portrety gości", caption: "gala jubileuszowa - Płock", category: "event", palette: 2, seed: 83, bigFormat: false },
] as const;

const REVIEWS = [
  { author: "Klara", location: "wesele, Kaszuby", date: "2026-04-15", text: "Termin złapany półtora miesiąca przed ślubem, gdy poprzednia artystka odwołała w ostatniej chwili. Goście zachwyceni, a dojazd aż na Kaszuby nie był problemem." },
  { author: "Oliwia", location: "wesele, Zagruszany", date: "2026-06-10", text: "Malowanie na żywo okazało się strzałem w dziesiątkę. Profesjonalizm, serdeczność i talent - wszystko przebiegło dokładnie tak, jak ustaliliśmy." },
  { author: "Maria", location: "impreza, Warszawa", date: "2026-02-12", text: "Dwa dni przed walentynkową imprezą uratowała nam event po odwołaniu innej artystki - prawie 30 ilustracji i pełne uszanowanie naszej prywatności. Dałabym 10 gwiazdek." },
  { author: "Rafał", location: "event, Płock", date: "2025-09-20", text: "Portrety powstawały na żywo, jeden po drugim, a sam proces robił wrażenie. To nie jednorazowa atrakcja, tylko pamiątka, do której chce się wracać." },
  { author: "Kasia", location: "event firmowy, Mielno", date: "2025-08-14", text: "Event firmowy na 120 osób - jedna z najlepiej zapamiętanych części całego wydarzenia. Styl ilustracji i papier dopasowane do motywu przewodniego imprezy." },
  { author: "Adam", location: "impreza firmowa, Kraków", date: "2025-05-17", text: "Nazwanie tego usługą nie jest adekwatne - to zdolności i możliwości. Włączenie live paintingu do programu było zaskoczeniem samym w sobie." },
] as const;

async function seed() {
  const payload = await getPayload({ config });

  // Prace
  const worksCount = await payload.count({ collection: "works" });
  if (worksCount.totalDocs === 0) {
    for (let i = 0; i < WORKS.length; i++) {
      const w = WORKS[i];
      await payload.create({
        collection: "works",
        data: { ...w, order: i },
      });
    }
    payload.logger.info(`Seed: dodano ${WORKS.length} prac`);
  } else {
    payload.logger.info("Seed: prace już istnieją - pomijam");
  }

  // Opinie
  const reviewsCount = await payload.count({ collection: "reviews" });
  if (reviewsCount.totalDocs === 0) {
    for (const r of REVIEWS) {
      await payload.create({
        collection: "reviews",
        data: { ...r, source: "wesele-z-klasa", rating: 5 },
      });
    }
    payload.logger.info(`Seed: dodano ${REVIEWS.length} opinii`);
  } else {
    payload.logger.info("Seed: opinie już istnieją - pomijam");
  }

  // Ustawienia (ceny z prototypu)
  await payload.updateGlobal({
    slug: "settings",
    data: {
      contactEmail: "kontakt@alesierysuje.pl",
      instagram: "https://www.instagram.com/alesierysuje",
      calendarEnd: "2027-08-31",
      weddingPackages: { kameralny: 3900, klasyczny: 5900, prestizowy: 8900 },
      eventPricing: { portraits: 3500, scene: 4500 },
      portraits: { a4: 490, a3: 690, b50x70: 990, extraPerson: 160, dedication: 90 },
    },
  });
  payload.logger.info("Seed: ustawienia zapisane");

  // Konto administratorki (tylko gdy nie ma żadnego użytkownika)
  const usersCount = await payload.count({ collection: "users" });
  if (usersCount.totalDocs === 0) {
    const password = process.env.SEED_ADMIN_PASSWORD || "zmien-mnie-po-seedzie";
    await payload.create({
      collection: "users",
      data: { email: "kontakt@alesierysuje.pl", password },
    });
    payload.logger.info(
      `Seed: utworzono konto kontakt@alesierysuje.pl (hasło: ${process.env.SEED_ADMIN_PASSWORD ? "z SEED_ADMIN_PASSWORD" : "zmien-mnie-po-seedzie - ZMIEŃ JE w panelu!"})`,
    );
  }

  process.exit(0);
}

// Top-level await: `payload run` importuje moduł i czeka na jego ewaluację,
// bez tego proces kończy się zanim seed dobiegnie końca.
await seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
