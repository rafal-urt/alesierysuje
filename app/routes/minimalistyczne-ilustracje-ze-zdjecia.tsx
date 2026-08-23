import type { Route } from "./+types/minimalistyczne-ilustracje-ze-zdjecia";
import { WatercolorStain } from "~/components/WatercolorStain";
import { IllustrationConfigurator } from "~/components/IllustrationConfigurator";
import { CardFan } from "~/components/CardFan";
import { WorksGallery } from "~/components/WorksGallery";
import { Faq } from "~/components/Faq";
import { CARD_WORKS } from "~/data/works-static";
import { getDb } from "~/lib/payload.server";
import { sendMail } from "~/lib/email.server";
import { clientIp, rateLimit } from "~/lib/rateLimit.server";
import { pageMeta, breadcrumbJsonLd, SITE_URL, WZK_PROFILE_URL } from "~/lib/seo";
import { JsonLd } from "~/components/JsonLd";
import { Crumbs } from "~/components/Crumbs";
import { cacheContent } from "~/lib/cache";
import {
  ILLUSTRATION_PRICES,
  ILLUSTRATION_SHIPPING_PLN,
  illustrationPrice,
  formatZl,
} from "~/data/prices";

/*
 * Czesc tekstow jest wstepna - akapity do dopracowania nosza komentarz TRESC.
 * Ceny sa juz prawdziwe i mieszkaja w app/data/prices.ts (jedno zrodlo prawdy
 * dla konfiguratora, sekcji cennikowej i JSON-LD).
 *
 * Zamowienie idzie ta sama droga co portrety: zapis do kolekcji inquiries
 * plus mail do pracowni ze zdjeciami w zalacznikach. Zdjecia nie ladują do
 * Payloada swiadomie - storage na Vercelu jest ulotny (/tmp), wiec mail jest
 * jedynym trwalym nosnikiem, dopoki nie stanie Blob/S3.
 */

export async function action({ request }: Route.ActionArgs) {
  const form = await request.formData();

  if (String(form.get("website") ?? "").length > 0) {
    return { ok: true as const };
  }
  if (!rateLimit(`ilustracja:${clientIp(request)}`)) {
    return { error: "Za dużo zamówień z tego adresu. Spróbujcie ponownie za kilka minut." };
  }

  const names = String(form.get("names") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const details = String(form.get("details") ?? "").trim();

  if (!names) return { error: "Podajcie imię i nazwisko." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { error: "Podajcie poprawny adres e-mail." };
  if (!details) return { error: "Brak konfiguracji ilustracji - odświeżcie stronę." };

  // Zdjecia jada jako zalaczniki maila; lacznie do 4 MB, bo tyle przyjmie
  // funkcja serverless na Vercelu.
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
      eventType: "ilustracja",
      status: "nowe",
      details: attachments.length
        ? `${details}\nZdjęcia (${attachments.length}): ${attachments.map((a) => a.filename).join(", ")} (w mailu)`
        : details,
    },
  });

  const settings = await db.findGlobal({ slug: "settings" });
  try {
    await Promise.all([
      sendMail({
        to: settings.contactEmail,
        subject: `Nowe zamówienie ilustracji - ${names}`,
        text: [
          "Nowe zamówienie z alesierysuje.pl/minimalistyczne-ilustracje-ze-zdjecia",
          "",
          `Zamawia: ${names}`,
          `E-mail: ${email}`,
          `Konfiguracja: ${details}`,
          attachments.length
            ? `Zdjęcia (${attachments.length}): ${attachments.map((a) => a.filename).join(", ")} - w załącznikach`
            : "Zdjęcia: brak - poproś mailowo",
          "",
          "Szczegóły w panelu: /admin (kolekcja Zapytania)",
        ].join("\n"),
        replyTo: email,
        ...(attachments.length ? { attachments } : {}),
      }),
      sendMail({
        to: email,
        subject: "Zamówienie ilustracji dotarło - alesierysuje",
        text: [
          `Cześć ${names}!`,
          "",
          "Zamówienie ilustracji dotarło do pracowni.",
          `Wybrana konfiguracja: ${details}`,
          "",
          "Odezwę się w ciągu 24 - 48 godzin - potwierdzimy szczegóły i sposób płatności.",
          attachments.length ? "" : "Jeśli masz już zdjęcie, odpisz na tego maila i dołącz je.",
          "",
          "do usłyszenia,",
          "Aleksandra Sienica - alesierysuje.pl",
        ]
          .filter(Boolean)
          .join("\n"),
      }),
    ]);
  } catch (err) {
    console.error("Błąd wysyłki maila o ilustracji:", err);
  }

  return { ok: true as const };
}

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Minimalistyczne ilustracje ze zdjęcia - A5 i A4 | alesierysuje",
    description:
      "Minimalistyczne ilustracje ze zdjęcia malowane ręcznie - formaty A5 i A4. Oszczędna kreska, dużo światła, papier akwarelowy.",
    path: "/minimalistyczne-ilustracje-ze-zdjecia",
  });
}

// Karty do wachlarza w hero - dobrane tak, zeby od razu bylo widac, ze cena
// rosnie z liczba postaci: pojedyncza osoba, para, grupa.
const HERO_CARDS = [
  { src: "/gfx/prace/karta-wesele-przyjaciolki.webp", alt: "Minimalistyczna akwarelowa ilustracja dwóch przyjaciółek" },
  { src: "/gfx/prace/karta-wesele-para.webp", alt: "Minimalistyczna akwarelowa ilustracja pary" },
  { src: "/gfx/prace/karta-wesele-rodzina-zielen.webp", alt: "Minimalistyczna akwarelowa ilustracja rodziny" },
];

const FAQ_ITEMS = [
  {
    q: "Czym to się różni od portretu akwarelowego na zamówienie?",
    a: "Kreską i skalą. Minimalistyczna ilustracja to kilka pewnych pociągnięć pędzla - sylwetka, gest, charakter - na formacie A5 albo A4. Portret akwarelowy ze zdjęcia idzie w drugą stronę: więcej detalu twarzy, więcej warstw, większe formaty i wyższa cena. Jeśli szukacie czegoś na ścianę nad kanapą, zajrzyjcie do portretów; jeśli na półkę, biurko albo na prezent - jesteście we właściwym miejscu.",
  },
  {
    q: "Jakie zdjęcie się nada?",
    a: "Zwykłe, z telefonu. Liczy się ostra twarz i światło - najlepiej dzienne, bez mocnego kontrastu z tyłu. Nie musicie pozować ani niczego ustawiać; im bardziej naturalne ujęcie, tym lepiej wychodzi gest, o który w tych ilustracjach chodzi. Mogę też połączyć osoby z kilku różnych zdjęć na jednej ilustracji - wystarczy je dołączyć i napisać, kto z kim.",
  },
  {
    q: "Czy pies albo kot może być na ilustracji?",
    a: "Jak najbardziej i traktuję go dokładnie tak samo jak osobę - liczy się do postaci na ilustracji i kosztuje tyle samo co kolejny człowiek. Zwierzęta wychodzą w tej kresce wyjątkowo dobrze, bo minimalizm wyłapuje ich sylwetkę i charakter bez wchodzenia w każdy włos.",
  },
  {
    q: "Ile czeka się na gotową ilustrację?",
    a: "Termin potwierdzam mailowo przy przyjmowaniu zamówienia - zależy od tego, ile prac mam akurat w pracowni i czy nie wypada właśnie sezon weselny. Odzywam się w ciągu 24 - 48 godzin od złożenia zamówienia i wtedy podaję konkretną datę, zanim cokolwiek zapłacicie.",
  },
  {
    q: "Czy płacę od razu przy zamówieniu?",
    a: "Nie. Formularz nie pobiera żadnych płatności - to zapytanie z gotową wyceną. Po jego wysłaniu odzywam się mailowo, potwierdzamy szczegóły i termin, i dopiero wtedy ustalamy płatność. Do tego momentu nic Was nie wiąże.",
  },
];

export default function MinimalistyczneIlustracje() {
  return (
    <main className="page">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Minimalistyczne ilustracje", path: "/minimalistyczne-ilustracje-ze-zdjecia" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${SITE_URL}/minimalistyczne-ilustracje-ze-zdjecia#usluga`,
          name: "Minimalistyczne ilustracje ze zdjęcia",
          serviceType: "Ilustracja na zamówienie",
          description:
            "Minimalistyczne ilustracje malowane ręcznie akwarelą na podstawie zdjęcia, w formatach A5 i A4. Ta sama kreska, którą Aleksandra Sienica maluje na żywo na weselach i eventach.",
          provider: { "@id": `${SITE_URL}#business` },
          areaServed: "PL",
          inLanguage: "pl-PL",
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "PLN",
            lowPrice: ILLUSTRATION_PRICES.A5.one,
            highPrice: illustrationPrice("A4", 5),
            offerCount: 2,
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

      {/* hero: obietnica po lewej, dowod po prawej - wachlarz prawdziwych kartek */}
      <section className="pageshero">
        <WatercolorStain color="blue" width={440} height={400} style={{ top: 40, right: -150 }} />
        <div className="wrap split-hero">
          <div>
            <Crumbs items={[{ name: "Minimalistyczne ilustracje" }]} />
            <h1 className="soak d1">Minimalistyczne ilustracje ze zdjęcia - A5 i A4</h1>
            <p className="lead soak d2">
              Kilka pewnych pociągnięć pędzla zamiast dosłowności - tyle, żeby od razu wiedzieć,
              kto to jest, i tyle światła, żeby rysunek oddychał. Ta sama kreska, którą maluję na
              żywo na weselach i eventach, tylko że tym razem z Waszego zdjęcia i spokojnie,
              w pracowni.
            </p>
            <div className="hero-cta soak d3">
              <a className="btn" href="#konfigurator">
                Zamów i poznaj cenę
              </a>
              <a className="btn ghost" href="#przyklady">
                Zobacz przykłady
              </a>
            </div>
            <div className="trust-line soak d3">
              <span className="stars" aria-hidden="true">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
              5/5 &middot;{" "}
              <a href={WZK_PROFILE_URL} target="_blank" rel="noopener noreferrer">
                opinie z portalu Wesele z klasą
              </a>
            </div>
          </div>
          <CardFan cards={HERO_CARDS} />
        </div>
      </section>

      {/* dowod przed decyzja: to sa prawdziwe prace, nie wizualizacje */}
      <section id="przyklady">
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">Przykłady</div>
            <h2>Tak wygląda ta kreska</h2>
          </div>
          <p className="soak" style={{ maxWidth: 720, margin: "0 auto 8px", textAlign: "center" }}>
            Poniższe ilustracje powstały na żywo, w trakcie wesel i eventów - przy stoliku,
            w kilkanaście minut na sztukę. Zamawiając ilustrację ze zdjęcia, dostajecie dokładnie
            tę samą rękę i tę samą technikę, tylko malowaną bez pośpiechu.
          </p>
        </div>
        <WorksGallery
          works={CARD_WORKS}
          variant="strip"
          cta={{ label: "Chcę taką ilustrację ze swojego zdjęcia", to: "#konfigurator" }}
        />
      </section>

      {/* zamowienie zaraz po dowodzie - to moment, w ktorym zapada decyzja */}
      <section id="konfigurator">
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">Wycena i zamówienie</div>
            <h2>Policz swoją ilustrację</h2>
          </div>
          <p className="soak" style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
            Cena zależy tylko od dwóch rzeczy: formatu i liczby postaci. Żadnych dopłat
            za tło, kadr czy poprawki - wysyłka {formatZl(ILLUSTRATION_SHIPPING_PLN)} doliczona
            od razu, żeby kwota na dole była tą ostateczną.
          </p>
        </div>
        <IllustrationConfigurator />
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">Jak to działa</div>
            <h2>Od zdjęcia do przesyłki w trzech krokach</h2>
          </div>
          <div className="steps">
            <div className="step soak">
              <div className="brush" style={{ background: "var(--color-wash-ochre)" }} />
              <h3>Przysyłacie zdjęcie</h3>
              <p>
                Zwykła fotografia z telefonu wystarczy - liczy się ostra twarz i dobre światło.
                Jeśli macie kilka ujęć do wyboru, dołączcie wszystkie; podpowiem, które da
                najlepszy efekt, i mogę połączyć osoby z różnych zdjęć.
              </p>
            </div>
            <div className="step soak d1">
              <div className="brush" style={{ background: "var(--color-wash-rose)" }} />
              <h3>Ustalamy szczegóły</h3>
              <p>
                Odzywam się w ciągu 24 - 48 godzin. Potwierdzamy format, liczbę postaci i termin,
                a jeśli ilustracja ma być prezentem - także datę, na którą musi dojechać. Dopiero
                wtedy rozmawiamy o płatności.
              </p>
            </div>
            <div className="step soak d2">
              <div className="brush" style={{ background: "var(--color-wash-blue)" }} />
              <h3>Maluję i wysyłam</h3>
              <p>
                Ilustracja powstaje ręcznie, akwarelą na papierze 300 g. Do Was jedzie oryginał -
                podpisany i zabezpieczony na czas transportu - a nie wydruk pliku.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* cennik tekstem, obok konfiguratora - dla tych, ktorzy wola tabelke */}
      <section>
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">Formaty</div>
            <h2>Dwa rozmiary, dwa różne zastosowania</h2>
          </div>
          <div className="steps">
            <div className="step soak">
              <div className="brush" style={{ background: "var(--color-wash-rose)" }} />
              <h3>A5 &middot; {ILLUSTRATION_PRICES.A5.dims}</h3>
              <p>
                Format kameralny - jedna postać albo para. Staje na półce, mieści się w małej
                ramce i najczęściej wyjeżdża jako prezent, który nie wymaga okazji.
              </p>
              <p>
                <b>{formatZl(ILLUSTRATION_PRICES.A5.one)}</b> za jedną postać,{" "}
                {formatZl(ILLUSTRATION_PRICES.A5.two)} za dwie, każda kolejna
                +{formatZl(ILLUSTRATION_PRICES.A5.extra)}.
              </p>
            </div>
            <div className="step soak d1">
              <div className="brush" style={{ background: "var(--color-wash-blue)" }} />
              <h3>A4 &middot; {ILLUSTRATION_PRICES.A4.dims}</h3>
              <p>
                Dwa razy więcej miejsca na gest i oddech wokół postaci. Naturalny wybór na ścianę
                i na większe rodziny - przy czwórce czy piątce A5 zaczyna być ciasne.
              </p>
              <p>
                <b>{formatZl(ILLUSTRATION_PRICES.A4.one)}</b> za jedną postać,{" "}
                {formatZl(ILLUSTRATION_PRICES.A4.two)} za dwie, każda kolejna
                +{formatZl(ILLUSTRATION_PRICES.A4.extra)}.
              </p>
            </div>
          </div>
          <p className="soak" style={{ textAlign: "center", opacity: 0.75, marginTop: 18 }}>
            Zwierzęta liczą się tak samo jak osoby. Do każdego zamówienia dochodzi wysyłka{" "}
            {formatZl(ILLUSTRATION_SHIPPING_PLN)}.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 20 }}>
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">Pytania</div>
            <h2>Zanim zamówicie</h2>
          </div>
          <Faq items={FAQ_ITEMS} />
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="banner soak">
            <WatercolorStain
              color="ochre"
              width={420}
              height={380}
              style={{ bottom: -140, left: -80 }}
            />
            <h2>Macie zdjęcie, które chce być ilustracją?</h2>
            <a className="btn light" href="#konfigurator">
              Policz cenę i zamów
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export const headers = cacheContent;
