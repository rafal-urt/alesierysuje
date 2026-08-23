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
import { pageMeta, breadcrumbJsonLd, SITE_URL } from "~/lib/seo";
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
    q: "Czym to się różni od portretu akwarelowego?",
    a: "Kreską i skalą. Tutaj chodzi o skrót - kilka pociągnięć pędzla, sylwetka, gest, charakter. Portret akwarelowy idzie w drugą stronę: więcej detalu twarzy, więcej warstw, większy format. Ilustracja staje na półce albo na biurku, portret wisi na ścianie.",
  },
  {
    q: "Jakie zdjęcie się nada?",
    a: "Zwykłe, z telefonu. Najlepiej w dziennym świetle i bez ostrego kontrastu za plecami. Nie trzeba pozować ani niczego ustawiać - im bardziej naturalne ujęcie, tym lepiej wychodzi gest, o który w tych ilustracjach chodzi. Jeśli chcesz połączyć osoby z kilku zdjęć, przyślij wszystkie i napisz, kto z kim.",
  },
  {
    q: "Czy pies albo kot może być na ilustracji?",
    a: "Może i wychodzi zwykle świetnie - oszczędna kreska wyłapuje sylwetkę i charakter zwierzaka, nie wchodząc w każdy włos. Liczy się tak samo jak osoba, więc kosztuje tyle, co kolejny człowiek na ilustracji.",
  },
  {
    q: "Ile trwa malowanie?",
    a: "Termin podaję, kiedy się odezwę - zależy, ile prac mam akurat na stole i czy nie trwa właśnie sezon weselny. Jeśli ilustracja ma być prezentem na konkretną datę, napisz o tym od razu - wtedy od początku wiem, czy zdążę.",
  },
  {
    q: "Jak wygląda płatność?",
    a: "Wypełnienie formularza to jeszcze nie zakup - najpierw piszemy do siebie i ustalamy, co dokładnie maluję. O płatności rozmawiamy, kiedy wiadomo już wszystko.",
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
              Przysyłasz mi zdjęcie kogoś, kogo lubisz. Maluję je akwarelą - oszczędną kreską,
              która nie kopiuje twarzy, tylko wyłapuje to, jak ta osoba stoi, przechyla głowę,
              trzyma psa. Powstaje jedna, na papierze, malowana ręką.
            </p>
            <div className="hero-cta soak d3">
              <a className="btn" href="#konfigurator">
                Zamów ilustrację
              </a>
              <a className="btn ghost" href="#przyklady">
                Zobacz prace
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
            <h2>Zobacz, jak to wygląda</h2>
          </div>
          <p className="soak" style={{ maxWidth: 720, margin: "0 auto 8px", textAlign: "center" }}>
            Te malowałam na weselach, przy stoliku, między jednym a drugim tańcem. Twoja
            powstanie w pracowni - spokojniej i z większą uwagą dla szczegółu.
          </p>
        </div>
        <WorksGallery
          works={CARD_WORKS}
          variant="strip"
          cta={{ label: "Chcę taką ze swojego zdjęcia", to: "#konfigurator" }}
        />
      </section>

      {/* zamowienie zaraz po dowodzie - to moment, w ktorym zapada decyzja */}
      <section id="konfigurator">
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">Wycena i zamówienie</div>
            <h2>Zamów swoją ilustrację</h2>
          </div>
          <p className="soak" style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
            Cena zależy od formatu i od tego, ile postaci ma się zmieścić. Wysyłka jest
            już wliczona w sumę na dole.
          </p>
        </div>
        <IllustrationConfigurator />
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">Jak to działa</div>
            <h2>Jak to wygląda od Twojej strony</h2>
          </div>
          <div className="steps">
            <div className="step soak">
              <div className="brush" style={{ background: "var(--color-wash-ochre)" }} />
              <h3>Przysyłasz zdjęcie</h3>
              <p>
                Zwykłe, z telefonu. Liczy się ostra twarz i dzienne światło. Jeśli masz kilka
                ujęć, przyślij wszystkie - powiem, z którego wyjdzie najlepiej, i mogę zebrać
                osoby z różnych kadrów na jednej ilustracji.
              </p>
            </div>
            <div className="step soak d1">
              <div className="brush" style={{ background: "var(--color-wash-rose)" }} />
              <h3>Piszemy do siebie</h3>
              <p>
                Odzywam się w ciągu doby albo dwóch. Ustalamy format, kto ma się znaleźć na
                ilustracji i na kiedy ma dojechać - zwłaszcza jeśli to prezent z konkretną datą.
              </p>
            </div>
            <div className="step soak d2">
              <div className="brush" style={{ background: "var(--color-wash-blue)" }} />
              <h3>Maluję i wysyłam</h3>
              <p>
                Akwarela na papierze 300 g, podpisana. Z tego samego zdjęcia dwa razy wyszłaby
                inaczej - i to jest w tym najlepsze. Pakuję ją płasko, między sztywne kartony,
                żeby dojechała w takim stanie, w jakim schodzi ze stołu.
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
            <h2>Który format wybrać</h2>
          </div>
          <div className="steps">
            <div className="step soak">
              <div className="brush" style={{ background: "var(--color-wash-rose)" }} />
              <h3>A5 &middot; {ILLUSTRATION_PRICES.A5.dims}</h3>
              <p>
                Kameralny - jedna postać albo para. Staje na półce, mieści się w małej ramce
                i najczęściej jest prezentem, który nie potrzebuje okazji.
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
                Dwa razy więcej miejsca na gest i powietrze wokół postaci. Na ścianę i na
                większe rodziny - przy czwórce czy piątce A5 robi się ciasno.
              </p>
              <p>
                <b>{formatZl(ILLUSTRATION_PRICES.A4.one)}</b> za jedną postać,{" "}
                {formatZl(ILLUSTRATION_PRICES.A4.two)} za dwie, każda kolejna
                +{formatZl(ILLUSTRATION_PRICES.A4.extra)}.
              </p>
            </div>
          </div>
          <p className="soak" style={{ textAlign: "center", opacity: 0.75, marginTop: 18 }}>
            Do każdego zamówienia dochodzi wysyłka {formatZl(ILLUSTRATION_SHIPPING_PLN)}.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">Pytania</div>
            <h2>Zanim zamówisz</h2>
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
            <h2>Masz takie zdjęcie?</h2>
            <a className="btn light" href="#konfigurator">
              Zamów ilustrację
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export const headers = cacheContent;
