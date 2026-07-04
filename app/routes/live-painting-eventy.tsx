import { useFetcher } from "react-router";
import type { Route } from "./+types/live-painting-eventy";
import { WatercolorStain } from "~/components/WatercolorStain";
import { getDb } from "~/lib/payload.server";
import { sendMail } from "~/lib/email.server";
import { clientIp, rateLimit } from "~/lib/rateLimit.server";
import { pageMeta, breadcrumbJsonLd, SITE_URL } from "~/lib/seo";
import { JsonLd } from "~/components/JsonLd";

const GUESTS = [
  { label: "do 50", value: "do-50" },
  { label: "50 - 120", value: "50-120" },
  { label: "120 - 250", value: "120-250" },
  { label: "250+", value: "250-plus" },
] as const;
const FORMATS = [
  { label: "Szybkie portrety gości", value: "portrety" },
  { label: "Jeden obraz sceny wydarzenia", value: "scena" },
  { label: "Jeszcze nie wiemy - doradźcie", value: "doradzcie" },
] as const;

export async function action({ request }: Route.ActionArgs) {
  const form = await request.formData();

  if (String(form.get("website") ?? "").length > 0) {
    return { ok: true as const };
  }
  if (!rateLimit(`brief:${clientIp(request)}`)) {
    return { error: "Za dużo zgłoszeń z tego adresu. Spróbujcie ponownie za kilka minut." };
  }

  const company = String(form.get("company") ?? "").trim();
  const dateCity = String(form.get("dateCity") ?? "").trim();
  const guests = String(form.get("guests") ?? "");
  const format = String(form.get("format") ?? "");
  const email = String(form.get("email") ?? "").trim();

  if (!company) return { error: "Podajcie nazwę firmy lub agencji." };
  if (!dateCity) return { error: "Podajcie datę i miasto wydarzenia." };
  if (!GUESTS.some((g) => g.value === guests)) return { error: "Wybierzcie liczbę gości." };
  if (!FORMATS.some((f) => f.value === format)) return { error: "Wybierzcie formułę." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { error: "Podajcie poprawny adres e-mail." };

  const db = await getDb();
  await db.create({
    collection: "briefs",
    data: {
      company,
      dateCity,
      guests: guests as "do-50",
      format: format as "portrety",
      email,
      status: "nowe",
    },
  });

  const settings = await db.findGlobal({ slug: "settings" });
  const guestsLabel = GUESTS.find((g) => g.value === guests)?.label ?? guests;
  const formatLabel = FORMATS.find((f) => f.value === format)?.label ?? format;
  try {
    await Promise.all([
      sendMail({
        to: settings.contactEmail,
        subject: `Nowy brief eventowy - ${company}`,
        text: [
          "Nowy brief z alesierysuje.pl/live-painting-eventy",
          "",
          `Firma / agencja: ${company}`,
          `Data i miasto: ${dateCity}`,
          `Liczba gości: ${guestsLabel}`,
          `Formuła: ${formatLabel}`,
          `E-mail: ${email}`,
          "",
          "Szczegóły w panelu: /admin (kolekcja Briefy)",
        ].join("\n"),
        replyTo: email,
      }),
      sendMail({
        to: email,
        subject: "Brief dotarł - alesierysuje",
        text: [
          "Dzień dobry!",
          "",
          `Brief dla ${company} dotarł do pracowni.`,
          "Wycena i propozycja formuły wrócą na ten adres najpóźniej w 48 godzin.",
          "",
          "pozdrawiam,",
          "Aleksandra Sienica - alesierysuje.pl",
        ].join("\n"),
      }),
    ]);
  } catch (err) {
    console.error("Błąd wysyłki maila briefu:", err);
  }

  return { ok: true as const };
}

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Live art na event firmowy - malowanie na żywo | alesierysuje",
    description:
      "Live art na eventy firmowe - malowanie na żywo i szybkie portrety gości na papierze pod branding. Faktura VAT, umowa, odpowiedź na brief z wyceną w 48 h.",
    path: "/live-painting-eventy",
    ogImage: "/og/eventy.png",
  });
}

export default function LivePaintingEventy() {
  const fetcher = useFetcher<typeof action>();
  const sent = fetcher.data && "ok" in fetcher.data && fetcher.data.ok;
  const error = fetcher.data && "error" in fetcher.data ? fetcher.data.error : null;
  const sending = fetcher.state !== "idle";
  return (
    <main className="page">
      <JsonLd data={breadcrumbJsonLd([{ name: "Live art na event firmowy", path: "/live-painting-eventy" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Live art na event firmowy",
          serviceType: "Malowanie na żywo i szybkie portrety gości na evencie",
          provider: { "@id": SITE_URL + "#business" },
          areaServed: "PL",
        }}
      />
      <WatercolorStain color="ochre" width={500} height={440} style={{ top: 60, right: -140 }} />
      <section className="pageshero">
        <div className="wrap">
          <div className="eyebrow soak">Eventy firmowe &middot; alesierysuje.pl/live-painting-eventy</div>
          <h1 className="soak d1">Live art na event firmowy - malowanie na żywo i portrety gości.</h1>
          <p className="lead soak d2">
            Jeden obraz sceny wydarzenia albo seria szybkich portretów gości na papierze
            przygotowanym pod branding eventu. Faktura VAT, umowa, jedna osoba kontaktowa. Brief
            zajmuje minutę.
          </p>
        </div>
      </section>
      <section style={{ paddingTop: 10 }}>
        <div className="wrap">
          <div className="bstats">
            <div className="bstat soak">
              <b>40+</b>
              <span>portretów gości w jeden wieczór - każdy podpisany i gotowy do zabrania</span>
            </div>
            <div className="bstat soak d1">
              <b>120</b>
              <span>osób na największym dotąd obsłużonym evencie firmowym nad morzem</span>
            </div>
            <div className="bstat soak d2">
              <b>48 h</b>
              <span>maksymalny czas odpowiedzi na brief z gotową wyceną i propozycją formuły</span>
            </div>
          </div>
          <div className="sec-head soak">
            <h2>Brief w pięciu polach.</h2>
            <p>Bez PDF-ów na start. Wystarczy zarys, resztę doprecyzujemy w rozmowie.</p>
          </div>
          {sent ? (
            <div className="brief soak">
              <div className="success">
                <div className="check">&#10003;</div>
                <h3>Brief wysłany.</h3>
                <p style={{ color: "var(--color-ink-soft)", fontSize: "0.95rem", marginTop: 8 }}>
                  Wycena i propozycja formuły wrócą na podany adres najpóźniej w 48 godzin.
                </p>
              </div>
            </div>
          ) : (
            <fetcher.Form method="post" className="brief soak">
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: "absolute", left: -9999, width: 1, height: 1, opacity: 0 }}
              />
              <label htmlFor="brief-company">Firma / agencja</label>
              <input id="brief-company" name="company" type="text" placeholder="np. Studio Eventowe Północ" required />
              <label htmlFor="brief-datecity">Data i miasto</label>
              <input id="brief-datecity" name="dateCity" type="text" placeholder="np. 18 września 2027, Gdańsk" required />
              <label htmlFor="brief-guests">Liczba gości</label>
              <select id="brief-guests" name="guests" defaultValue="do-50">
                {GUESTS.map((g) => (
                  <option key={g.value} value={g.value}>
                    {g.label}
                  </option>
                ))}
              </select>
              <label htmlFor="brief-format">Formuła</label>
              <select id="brief-format" name="format" defaultValue="portrety">
                {FORMATS.map((f) => (
                  <option key={f.value} value={f.value}>
                    {f.label}
                  </option>
                ))}
              </select>
              <label htmlFor="brief-email">E-mail kontaktowy</label>
              <input id="brief-email" name="email" type="email" placeholder="imie@firma.pl" required />
              {error && <p style={{ color: "#a33", fontSize: "0.88rem", marginTop: 14 }}>{error}</p>}
              <button className="btn" type="submit" disabled={sending}>
                {sending ? "Wysyłanie..." : "Wyślij brief"}
              </button>
            </fetcher.Form>
          )}
        </div>
      </section>
    </main>
  );
}
