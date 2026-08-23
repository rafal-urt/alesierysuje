import type { Route } from "./+types/minimalistyczne-ilustracje-ze-zdjecia";
import { Link } from "react-router";
import { WatercolorStain } from "~/components/WatercolorStain";
import { IllustrationConfigurator } from "~/components/IllustrationConfigurator";
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
            "Minimalistyczne ilustracje malowane ręcznie na podstawie zdjęcia, w formatach A5 i A4.",
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

      <section className="pageshero">
        <WatercolorStain color="blue" width={440} height={400} style={{ top: 40, right: -140 }} />
        <div className="wrap">
          <Crumbs items={[{ name: "Minimalistyczne ilustracje" }]} />
          <h1 className="soak d1">Minimalistyczne ilustracje ze zdjęcia - A5 i A4</h1>
          {/* TRESC: lead - czym te ilustracje roznia sie od portretow akwarelowych */}
          <p className="lead soak d2">
            Oszczędna kreska zamiast dosłowności - tyle szczegółu, ile potrzeba, żeby rozpoznać
            osobę, i tyle światła, żeby rysunek oddychał. Malowane ręcznie na papierze
            akwarelowym, na podstawie przysłanego zdjęcia.
          </p>
          <p className="soak d3">
            <a className="btn" href="#konfigurator">
              Zamów ilustrację
            </a>
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">Formaty i ceny</div>
            <h2>Dwa rozmiary, dwa różne zastosowania</h2>
          </div>
          <div className="steps">
            {/* TRESC: dla kogo kazdy format, co sie na nim miesci */}
            <div className="step soak">
              <div className="brush" style={{ background: "var(--color-wash-rose)" }} />
              <h3>
                A5 - {ILLUSTRATION_PRICES.A5.dims}
              </h3>
              <p>
                Format kameralny - jedna postać albo para. Dobrze wygląda na półce i w małej
                ramce, naturalnie sprawdza się jako drobny upominek.
              </p>
              <p>
                <b>{formatZl(ILLUSTRATION_PRICES.A5.one)}</b> za jedną postać,{" "}
                {formatZl(ILLUSTRATION_PRICES.A5.two)} za dwie, każda kolejna
                +{formatZl(ILLUSTRATION_PRICES.A5.extra)}.
              </p>
            </div>
            <div className="step soak d1">
              <div className="brush" style={{ background: "var(--color-wash-blue)" }} />
              <h3>
                A4 - {ILLUSTRATION_PRICES.A4.dims}
              </h3>
              <p>
                Więcej miejsca na tło i detal - wybór na ścianę i na prezent, który ma być
                zauważony od progu.
              </p>
              <p>
                <b>{formatZl(ILLUSTRATION_PRICES.A4.one)}</b> za jedną postać,{" "}
                {formatZl(ILLUSTRATION_PRICES.A4.two)} za dwie, każda kolejna
                +{formatZl(ILLUSTRATION_PRICES.A4.extra)}.
              </p>
            </div>
          </div>
          <p className="soak" style={{ textAlign: "center", opacity: 0.75 }}>
            Zwierzęta liczą się tak samo jak osoby. Do każdego zamówienia dochodzi wysyłka{" "}
            {formatZl(ILLUSTRATION_SHIPPING_PLN)}.
          </p>
        </div>
      </section>

      <section id="konfigurator">
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">Konfigurator</div>
            <h2>Złóż zamówienie</h2>
          </div>
        </div>
        <IllustrationConfigurator />
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">Jak to działa</div>
            <h2>Od zdjęcia do gotowej ilustracji</h2>
          </div>
          {/* TRESC: kroki zamowienia, wymagania wobec zdjecia, co dostaje klient,
              czas realizacji i wysylka. Do uzupelnienia razem z cennikiem. */}
          <div className="steps">
            <div className="step soak">
              <div className="brush" style={{ background: "var(--color-wash-ochre)" }} />
              <h3>Przysyłasz zdjęcie</h3>
              <p>
                Wystarczy zwykła fotografia - liczy się ostra twarz i dobre światło. Podpowiem,
                które ujęcie da najlepszy efekt.
              </p>
            </div>
            <div className="step soak d1">
              <div className="brush" style={{ background: "var(--color-wash-rose)" }} />
              <h3>Ustalamy format</h3>
              <p>
                Wybieramy A5 albo A4 i omawiamy szczegóły - ile postaci, czy zostaje tło, czy
                ilustracja ma nieść podpis.
              </p>
            </div>
            <div className="step soak d2">
              <div className="brush" style={{ background: "var(--color-wash-blue)" }} />
              <h3>Maluję i wysyłam</h3>
              <p>
                Ilustracja powstaje ręcznie na papierze akwarelowym. Do Ciebie trafia oryginał,
                zabezpieczony na czas transportu.
              </p>
            </div>
          </div>
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
            <h2>Masz zdjęcie, które chcesz zamienić w ilustrację?</h2>
            <Link className="btn light" to="/kontakt">
              Napisz do mnie
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export const headers = cacheContent;
