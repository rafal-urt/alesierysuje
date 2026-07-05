import type { Route } from "./+types/portrety-na-zamowienie";
import { WatercolorStain } from "~/components/WatercolorStain";
import { PortraitConfigurator } from "~/components/PortraitConfigurator";
import { getDb } from "~/lib/payload.server";
import { sendMail } from "~/lib/email.server";
import { clientIp, rateLimit } from "~/lib/rateLimit.server";
import { pageMeta, breadcrumbJsonLd, SITE_URL, WZK_PROFILE_URL } from "~/lib/seo";
import { JsonLd } from "~/components/JsonLd";
import { Crumbs } from "~/components/Crumbs";
import { Faq } from "~/components/Faq";
import { WorksGallery } from "~/components/WorksGallery";
import { PORTRAIT_WORKS } from "~/data/works-static";
import { plMonthYear } from "~/lib/dates";

export async function loader() {
  const db = await getDb();
  const [s, reviews] = await Promise.all([
    db.findGlobal({ slug: "settings" }),
    db.find({ collection: "reviews", sort: "-date", limit: 3 }),
  ]);
  return {
    portraits: {
      a4: s.portraits?.a4 ?? 490,
      a3: s.portraits?.a3 ?? 690,
      b50x70: s.portraits?.b50x70 ?? 990,
      extraPerson: s.portraits?.extraPerson ?? 160,
      dedication: s.portraits?.dedication ?? 90,
    },
    reviews: reviews.docs.map((r) => ({
      author: r.author,
      text: r.text,
      where: r.location ?? "",
      when: plMonthYear(r.date),
    })),
  };
}

export async function action({ request }: Route.ActionArgs) {
  const form = await request.formData();

  if (String(form.get("website") ?? "").length > 0) {
    return { ok: true as const };
  }
  if (!rateLimit(`portrait:${clientIp(request)}`)) {
    return { error: "Za dużo zapytań z tego adresu. Spróbujcie ponownie za kilka minut." };
  }

  const names = String(form.get("names") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const details = String(form.get("details") ?? "").trim();

  if (!names) return { error: "Podajcie imię i nazwisko." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { error: "Podajcie poprawny adres e-mail." };
  if (!details) return { error: "Brak konfiguracji portretu - odświeżcie stronę." };

  // zdjecia referencyjne (opcjonalne, kilka) - trafiaja jako zalaczniki maila;
  // lacznie do 4 MB, bo tyle przyjmie funkcja serverless na Vercelu
  const photos = form.getAll("photo").filter((f): f is File => f instanceof File && f.size > 0);
  if (photos.length > 6) return { error: "Maksymalnie 6 zdjęć - resztę doślijcie mailem." };
  const totalSize = photos.reduce((a, f) => a + f.size, 0);
  if (totalSize > 4 * 1024 * 1024)
    return { error: "Zdjęcia ważą łącznie ponad 4 MB - zmniejszcie je albo doślijcie później mailem." };
  const attachments: { filename: string; content: string }[] = [];
  for (const photo of photos) {
    if (!photo.type.startsWith("image/") && !/\.(heic|heif)$/i.test(photo.name))
      return { error: "Załączniki muszą być zdjęciami (JPG, PNG, HEIC...)." };
    const buf = Buffer.from(await photo.arrayBuffer());
    const safeName = photo.name.replace(/[^\w.-]+/g, "_").slice(-80) || "zdjecie.jpg";
    attachments.push({ filename: safeName, content: buf.toString("base64") });
  }

  const db = await getDb();
  await db.create({
    collection: "inquiries",
    data: {
      names,
      email,
      eventType: "portret",
      status: "nowe",
      details: attachments.length
        ? `${details}\nZdjęcia referencyjne (${attachments.length}): ${attachments.map((a) => a.filename).join(", ")} (w mailu)`
        : details,
    },
  });

  const settings = await db.findGlobal({ slug: "settings" });
  try {
    await Promise.all([
      sendMail({
        to: settings.contactEmail,
        subject: `Nowe zamówienie portretu - ${names}`,
        text: [
          "Nowe zamówienie portretu z alesierysuje.pl/portrety-na-zamowienie",
          "",
          `Zamawia: ${names}`,
          `E-mail: ${email}`,
          `Konfiguracja: ${details}`,
          attachments.length
            ? `Zdjęcia referencyjne (${attachments.length}): ${attachments.map((a) => a.filename).join(", ")} - w załącznikach`
            : "Zdjęcia referencyjne: brak - poproś mailowo",
          "",
          "Szczegóły w panelu: /admin (kolekcja Zapytania)",
        ].join("\n"),
        replyTo: email,
        ...(attachments.length ? { attachments } : {}),
      }),
      sendMail({
        to: email,
        subject: "Zapytanie o portret dotarło - alesierysuje",
        text: [
          `Cześć ${names}!`,
          "",
          "Zamówienie portretu dotarło do pracowni.",
          `Wybrana konfiguracja: ${details}`,
          attachments.length
            ? `Zdjęcia referencyjne (${attachments.length}) dotarły razem z zamówieniem - dziękuję!`
            : "Odezwę się w 24 - 48 godzin z prośbą o zdjęcia referencyjne.",
          "Potwierdzimy mailowo termin i szczegóły - płatność dopiero po obustronnej akceptacji.",
          "Zamówienie do niczego nie zobowiązuje.",
          "",
          "do usłyszenia,",
          "Aleksandra Sienica - alesierysuje.pl",
        ].join("\n"),
      }),
    ]);
  } catch (err) {
    console.error("Błąd wysyłki maila portretu:", err);
  }

  return { ok: true as const };
}

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Portret ze zdjęcia - portrety na zamówienie | alesierysuje",
    description:
      "Portret ze zdjęcia malowany ręcznie akwarelą. Konfigurator online z ceną na żywo od 490 zł, realizacja 10 - 14 dni, wysyłka w cenie.",
    path: "/portrety-na-zamowienie",
    ogImage: "/og/portrety.png",
  });
}

const FAQ_ITEMS = [
  {
    q: "Jakie zdjęcie najlepiej wysłać?",
    a: "Takie, na którym dobrze widać twarze - ostre, w miarę równym świetle, bez mocnych filtrów. Nie musi być profesjonalne: większość portretów maluję ze zwykłych zdjęć z telefonu. Jeśli macie wątpliwości, wyślijcie kilka - doradzę, z którego portret wyjdzie najlepiej.",
  },
  {
    q: "Czy można połączyć osoby z różnych zdjęć?",
    a: "Tak - to jedna z najczęstszych próśb. Łączę osoby z kilku fotografii w jedną kompozycję, np. dziadków z wnukami albo całą rodzinę, której nie udało się zebrać do jednego kadru. Kompozycję zobaczycie na szkicu do akceptacji.",
  },
  {
    q: "Ile trwa realizacja portretu?",
    a: "Standardowo 10 - 14 dni od otrzymania zdjęcia i akceptacji szkicu. Jeśli portret ma zdążyć na konkretną datę - urodziny, rocznicę, wesele - napiszcie o tym w zamówieniu, potwierdzę termin mailowo.",
  },
  {
    q: "Czy mogę zgłosić poprawki?",
    a: "Tak. Najpierw dostajecie szkic kompozycji do akceptacji - to moment na zmiany układu, kadru czy liczby osób. Przed wysyłką pokazuję zdjęcie gotowej pracy i wtedy można zgłosić drobne uwagi do detali.",
  },
  {
    q: "Jak pakowana jest przesyłka?",
    a: "Portret jedzie w sztywnym, usztywnionym opakowaniu chroniącym rogi i powierzchnię pracy, kurierem z numerem śledzenia. Wysyłka na terenie Polski jest w cenie portretu.",
  },
  {
    q: "Czy portret można oprawić?",
    a: "Tak - maluję w standardowych formatach (A4, A3, 50 × 70 cm), więc pasują do ram dostępnych od ręki. Najlepiej wyglądają w ramie z passe-partout i za szkłem. Chętnie podpowiem konkretne rozwiązanie do Waszego wnętrza.",
  },
];

export default function PortretyNaZamowienie({ loaderData }: Route.ComponentProps) {
  const { portraits, reviews } = loaderData;
  return (
    <main className="page">
      <JsonLd data={breadcrumbJsonLd([{ name: "Portrety na zamówienie", path: "/portrety-na-zamowienie" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Portret na zamówienie ze zdjęcia",
          description: "Portret akwarelowy malowany ręcznie na podstawie zdjęcia, formaty A4 - 50 × 70 cm.",
          brand: { "@type": "Brand", name: "alesierysuje" },
          offers: {
            "@type": "AggregateOffer",
            lowPrice: String(portraits.a4),
            highPrice: String(portraits.b50x70 + 4 * portraits.extraPerson + portraits.dedication),
            priceCurrency: "PLN",
            availability: "https://schema.org/InStock",
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_ITEMS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <WatercolorStain color="green" width={480} height={420} style={{ top: 80, left: -160 }} />

      {/* hero */}
      <section className="pageshero">
        <div className="wrap">
          <Crumbs items={[{ name: "Portrety na zamówienie" }]} />
          <h1 className="soak d1">Portrety na zamówienie - portret ze zdjęcia malowany ręcznie</h1>
          <p className="lead soak d2">
            Wybieracie liczbę osób i format, cena układa się na Waszych oczach, a zamówienie
            składacie formularzem - bez żadnej płatności online. Szczegóły i płatność ustalamy
            mailowo, dopiero gdy obie strony wszystko zaakceptują.
          </p>
        </div>
      </section>

      {/* konfigurator */}
      <section id="konfigurator" style={{ paddingTop: 20 }}>
        <PortraitConfigurator prices={portraits} />
      </section>

      {/* intro SEO */}
      <section style={{ paddingTop: 30, paddingBottom: 10 }}>
        <div className="wrap manifesto">
          <div className="eyebrow soak">Portret ze zdjęcia</div>
          <h2 className="soak d1">Obraz ze zdjęcia na zamówienie - jak to wygląda u mnie</h2>
          <p className="soak d2">
            Portret ze zdjęcia to najprostszy sposób, żeby zatrzymać kogoś ważnego na papierze -
            nie w chmurze, nie w rolce telefonu, tylko na ścianie. Wysyłacie fotografię, a ja
            maluję na jej podstawie ręcznie malowany portret: akwarela na papierze 300 g, od
            formatu A4 po 50 × 70 cm, jedna lub kilka osób na jednej pracy. Mogę połączyć osoby z
            różnych zdjęć - na przykład dziadków z wnukami, które mieszkają po drugiej stronie
            Polski.
          </p>
          <p className="soak d2">
            Każdy portret akwarelowy zaczyna się od szkicu, który dostajecie do akceptacji.
            Malujecie się u mnie tylko raz: nie robię wydruków, kopii ani dodruków - obraz ze
            zdjęcia powstaje w jednym egzemplarzu, z podpisem na froncie. Realizacja trwa zwykle
            10 - 14 dni, a wysyłka kurierem jest w cenie.
          </p>
        </div>
      </section>

      {/* galeria portretow */}
      <section style={{ paddingTop: 20, paddingBottom: 10 }}>
        <div className="wrap sec-top soak">
          <div className="sec-head">
            <div className="eyebrow">Realizacje</div>
            <h2>Portrety, które już wiszą na ścianach</h2>
            <p>Kliknijcie pracę, żeby przyjrzeć się z bliska.</p>
          </div>
        </div>
        <div className="cards-strip">
          <WorksGallery
            works={PORTRAIT_WORKS}
            variant="strip"
            cta={{ label: "Chcę taki portret - wyceń mój", to: "/portrety-na-zamowienie#konfigurator" }}
          />
        </div>
      </section>

      {/* jak to dziala */}
      <section>
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">Jak to działa</div>
            <h2>Od zdjęcia do gotowej pracy w czterech krokach</h2>
            <p>
              Zanim sięgnę po farby, zawsze dostajecie szkic do akceptacji - malujemy dopiero
              wtedy, gdy kompozycja Wam się podoba.
            </p>
          </div>
          <div className="timeline">
            <div className="tl soak">
              <h3>Zdjęcie i wycena</h3>
              <p>
                Konfigurujecie portret powyżej i wysyłacie zamówienie - bez płatności. Mailowo
                proszę o zdjęcie referencyjne i potwierdzam termin.
              </p>
            </div>
            <div className="tl soak d1">
              <h3>Szkic do akceptacji</h3>
              <p>
                Zaczynam od ołówkowego szkicu kompozycji i wysyłam Wam jego zdjęcie. Uwagi do
                układu czy kadru zgłaszacie, zanim sięgnę po farby.
              </p>
            </div>
            <div className="tl soak d2">
              <h3>Warstwy akwareli</h3>
              <p>
                Maluję warstwami - od świateł po detale. Akwarela nie wybacza skrótów, dlatego
                każda warstwa musi wyschnąć, zanim położę kolejną.
              </p>
            </div>
            <div className="tl soak d3">
              <h3>Gotowa praca i wysyłka</h3>
              <p>
                Podpisany oryginał jedzie do Was kurierem w usztywnionym opakowaniu - wysyłka w
                cenie. Płatność finalizujemy po akceptacji gotowej pracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* okazje */}
      <section style={{ paddingTop: 10 }}>
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">Okazje</div>
            <h2>Na jakie okazje zamawia się portret</h2>
          </div>
          <div className="occasions">
            <div className="occasion soak">
              <h3>Podziękowania dla rodziców</h3>
              <p>
                Zamiast kwiatów, które zwiędną - portret rodziców wręczany podczas wesela.
                Najczęściej zamawiany duet z moim malowaniem na żywo.
              </p>
            </div>
            <div className="occasion soak d1">
              <h3>Rocznica ślubu</h3>
              <p>
                Portret ze zdjęcia ślubnego - także tego sprzed dekad. Piękny sposób, by wrócić
                do dnia, od którego wszystko się zaczęło.
              </p>
            </div>
            <div className="occasion soak d2">
              <h3>Prezent dla rodziców i dziadków</h3>
              <p>
                Portret rodzinny na zamówienie z wnukami - również z osób łączonych z kilku
                zdjęć, gdy nie sposób zebrać wszystkich do jednego kadru.
              </p>
            </div>
            <div className="occasion soak">
              <h3>Dzień Matki i Dzień Ojca</h3>
              <p>
                Zamiast kolejnego kubka - ręcznie malowany portret z dedykacją. Jedyny taki
                egzemplarz na świecie, z datą i podpisem.
              </p>
            </div>
            <div className="occasion soak d1">
              <h3>Urodziny i jubileusze</h3>
              <p>
                Okrągłe urodziny, osiemnastka, jubileusz pracy - portret akwarelowy działa
                wszędzie tam, gdzie prezent ma coś znaczyć.
              </p>
            </div>
            <div className="occasion soak d2">
              <h3>Pamiątka chrztu i narodzin</h3>
              <p>
                Delikatny portret maleństwa - samego albo w ramionach rodziców. Pamiątka, która
                dorasta razem z dzieckiem na ścianie pokoju.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* recznie, nie z drukarki */}
      <section style={{ paddingTop: 40 }}>
        <div className="wrap manifesto">
          <div className="eyebrow soak">Dlaczego oryginał</div>
          <h2 className="soak d1">Ręcznie, nie z drukarki</h2>
          <p className="soak d2">
            W internecie łatwo o "obraz ze zdjęcia" z drukarki albo z generatora - tani, szybki i
            taki sam jak tysiące innych. U mnie dostajecie coś innego: portret malowany ręcznie,
            kreska po kresce, na papierze akwarelowym 300 g. Jeden egzemplarz, żadnych wydruków
            ani kopii, podpis artystki na froncie i szkic, który akceptujecie przed malowaniem.
            Wydruk na płótnie wyblaknie razem z modą - oryginał z każdym rokiem robi się tylko
            cenniejszy.
          </p>
        </div>
      </section>

      {/* opinie */}
      {reviews.length > 0 && (
        <section style={{ paddingTop: 20 }}>
          <div className="wrap">
            <div className="sec-head soak">
              <div className="eyebrow">Opinie</div>
              <h2>Słowo od zamawiających</h2>
              <p>
              Opinie klientek i klientów alesierysuje - źródło:{" "}
              <a href={WZK_PROFILE_URL} target="_blank" rel="noopener noreferrer">
                profil Wesele z klasą
              </a>
              .
            </p>
            </div>
            <div className="quotes">
              {reviews.map((r, i) => (
                <div className={`quote soak${i === 1 ? " d1" : i === 2 ? " d2" : ""}`} key={r.author}>
                  <div className="stars" aria-label="5 gwiazdek">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </div>
                  <p>{r.text}</p>
                  <div className="who">
                    {r.author} &middot; {r.where} &middot; {r.when}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section style={{ paddingTop: 20 }}>
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">FAQ</div>
            <h2>Pytania o portrety na zamówienie</h2>
          </div>
          <Faq items={FAQ_ITEMS} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="banner soak">
            <WatercolorStain color="green" width={420} height={380} style={{ bottom: -140, left: -80 }} />
            <h2>Wyceńcie swój portret w minutę</h2>
            <a className="btn light" href="#konfigurator">
              Przejdź do konfiguratora
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
