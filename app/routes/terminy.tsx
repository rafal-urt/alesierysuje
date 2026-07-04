import { useState } from "react";
import { useFetcher } from "react-router";
import type { Route } from "./+types/terminy";
import { Calendar } from "~/components/Calendar";
import { WatercolorStain } from "~/components/WatercolorStain";
import { getDb } from "~/lib/payload.server";
import { getTakenDates, getCalendarEnd } from "~/lib/availability.server";
import { plFullDate, todayWarsaw } from "~/lib/dates";
import { sendMail } from "~/lib/email.server";
import { clientIp, rateLimit } from "~/lib/rateLimit.server";
import { pageMeta, breadcrumbJsonLd } from "~/lib/seo";
import { JsonLd } from "~/components/JsonLd";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Wolne terminy live painting 2026 / 2027 - rezerwacja online | alesierysuje",
    description:
      "Kalendarz dostępności live paintingu do sierpnia 2027. Wybierz wolny dzień i wyślij bezpłatne zapytanie o termin - odpowiedź w 24 - 48 godzin.",
    path: "/terminy",
    ogImage: "/og/terminy.png",
  });
}

export async function loader() {
  const [taken, end] = await Promise.all([getTakenDates(), getCalendarEnd()]);
  const today = todayWarsaw();
  return {
    takenDates: [...taken],
    todayISO: today,
    minMonth: today.slice(0, 7),
    maxMonth: end.slice(0, 7),
    endISO: end,
  };
}

const EVENT_TYPES = [
  { label: "Wesele", value: "wesele" },
  { label: "Event firmowy", value: "event-firmowy" },
  { label: "Urodziny / jubileusz", value: "urodziny-jubileusz" },
  { label: "Inna okazja", value: "inne" },
] as const;

export async function action({ request }: Route.ActionArgs) {
  const form = await request.formData();

  // honeypot - boty wypełniają ukryte pole; udajemy sukces
  if (String(form.get("website") ?? "").length > 0) {
    return { ok: true as const, names: "" };
  }

  if (!rateLimit(`inquiry:${clientIp(request)}`)) {
    return { error: "Za dużo zapytań z tego adresu. Spróbujcie ponownie za kilka minut." };
  }

  const date = String(form.get("date") ?? "").slice(0, 10);
  const names = String(form.get("names") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const city = String(form.get("city") ?? "").trim();
  const eventType = String(form.get("eventType") ?? "wesele");

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return { error: "Wybierzcie dzień w kalendarzu." };
  if (!names) return { error: "Podajcie swoje imiona." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { error: "Podajcie poprawny adres e-mail." };
  if (!EVENT_TYPES.some((t) => t.value === eventType)) return { error: "Nieprawidłowy rodzaj wydarzenia." };

  const today = todayWarsaw();
  const end = await getCalendarEnd();
  if (date < today) return { error: "Ten dzień już minął - wybierzcie inny." };
  if (date > end) return { error: "Ten dzień jest poza zakresem kalendarza." };
  const taken = await getTakenDates();
  if (taken.has(date)) return { error: "Ten termin jest już zajęty - wybierzcie inny dzień." };

  const db = await getDb();
  await db.create({
    collection: "inquiries",
    data: { eventDate: date, names, email, city, eventType: eventType as "wesele", status: "nowe" },
  });

  const settings = await db.findGlobal({ slug: "settings" });
  const dateLabel = plFullDate(date);
  const typeLabel = EVENT_TYPES.find((t) => t.value === eventType)?.label ?? eventType;

  // maile nie mogą wywrócić zapisu - błędy tylko logujemy
  try {
    await Promise.all([
      sendMail({
        to: settings.contactEmail,
        subject: `Nowe zapytanie o termin - ${dateLabel}`,
        text: [
          `Nowe zapytanie o termin z alesierysuje.pl`,
          ``,
          `Data: ${dateLabel}`,
          `Imiona: ${names}`,
          `E-mail: ${email}`,
          `Miejscowość: ${city || "-"}`,
          `Rodzaj: ${typeLabel}`,
          ``,
          `Szczegóły w panelu: /admin (kolekcja Zapytania)`,
        ].join("\n"),
        replyTo: email,
      }),
      sendMail({
        to: email,
        subject: "Zapytanie dotarło - alesierysuje",
        text: [
          `Cześć${names ? " " + names : ""}!`,
          ``,
          `Wasze zapytanie o termin ${dateLabel} dotarło do pracowni.`,
          `Ale sprawdzi dostępność i wróci do Was mailowo - zwykle w ciągu 24 - 48 godzin.`,
          `Zapytanie jest bezpłatne i do niczego nie zobowiązuje.`,
          ``,
          `do usłyszenia,`,
          `Aleksandra Sienica - alesierysuje.pl`,
        ].join("\n"),
      }),
    ]);
  } catch (err) {
    console.error("Błąd wysyłki maila zapytania:", err);
  }

  return { ok: true as const, names };
}

export default function Terminy({ loaderData }: Route.ComponentProps) {
  const { takenDates, todayISO, minMonth, maxMonth } = loaderData;
  const [selected, setSelected] = useState<string | null>(null);
  const fetcher = useFetcher<typeof action>();
  const sent = fetcher.data && "ok" in fetcher.data && fetcher.data.ok;
  const error = fetcher.data && "error" in fetcher.data ? fetcher.data.error : null;
  const sending = fetcher.state !== "idle";

  function pick(iso: string) {
    setSelected(iso);
    if (typeof window !== "undefined" && window.innerWidth < 920) {
      document.getElementById("bkPanel")?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <main className="page">
      <JsonLd data={breadcrumbJsonLd([{ name: "Wolne terminy", path: "/terminy" }])} />
      <WatercolorStain color="green" width={460} height={420} style={{ top: 60, left: -160 }} />
      <section className="pageshero" style={{ paddingBottom: 30 }}>
        <div className="wrap">
          <div className="eyebrow soak">Terminy &middot; alesierysuje.pl/terminy</div>
          <h1 className="soak d1">Wolne terminy live paintingu - kalendarz do sierpnia 2027.</h1>
          <p className="lead soak d2">
            Kalendarz jest prawdziwy w czasie rzeczywistym - to, co widzicie, jest dostępne teraz.
            Wybierzcie dzień i wyślijcie bezpłatne zapytanie o rezerwację - odpowiedź wraca w 24 - 48
            godzin.
          </p>
        </div>
      </section>
      <section style={{ paddingTop: 0 }}>
        <div className="wrap cal-wrap">
          <div className="soak">
            <div className="legend">
              <span>
                <span className="ldot free" />
                termin wolny
              </span>
              <span>
                <span className="ldot taken" />
                termin zajęty
              </span>
              <span>
                <span className="ldot today" />
                dziś
              </span>
            </div>
            <Calendar
              takenDates={takenDates}
              todayISO={todayISO}
              minMonth={minMonth}
              maxMonth={maxMonth}
              selected={selected}
              onPick={pick}
            />
          </div>
          <div className="bk soak d1" id="bkPanel">
            {sent ? (
              <div className="success">
                <div className="check">&#10003;</div>
                <h3>Zapytanie wysłane.</h3>
                <p style={{ color: "var(--color-ink-soft)", fontSize: "0.95rem", marginTop: 8 }}>
                  Ale sprawdzi dostępność terminu i wróci do Was mailowo z propozycją - zwykle w
                  ciągu 24 - 48 godzin. Do niczego to nie zobowiązuje.
                </p>
                <span className="hand">
                  {fetcher.data && "names" in fetcher.data && fetcher.data.names
                    ? `do usłyszenia, ${fetcher.data.names}!`
                    : "do usłyszenia!"}
                </span>
              </div>
            ) : (
              <>
                <h3>Zapytanie o termin</h3>
                {selected ? (
                  <div className="picked">{plFullDate(selected)}</div>
                ) : (
                  <div className="picked none">Najpierw wybierzcie wolny dzień w kalendarzu.</div>
                )}
                {selected && (
                  <fetcher.Form method="post">
                    <input type="hidden" name="date" value={selected} />
                    {/* honeypot - pole niewidoczne dla ludzi */}
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      style={{ position: "absolute", left: -9999, width: 1, height: 1, opacity: 0 }}
                    />
                    <label htmlFor="bk-names">Wasze imiona</label>
                    <input id="bk-names" name="names" type="text" placeholder="np. Ania i Michał" required />
                    <label htmlFor="bk-email">E-mail</label>
                    <input id="bk-email" name="email" type="email" placeholder="ania@..." required />
                    <label htmlFor="bk-city">Miejscowość wydarzenia</label>
                    <input id="bk-city" name="city" type="text" placeholder="np. Serock" />
                    <label htmlFor="bk-type">Rodzaj wydarzenia</label>
                    <select id="bk-type" name="eventType" defaultValue="wesele">
                      {EVENT_TYPES.map((t) => (
                        <option key={t.value} value={t.value}>
                          {t.label}
                        </option>
                      ))}
                    </select>
                    {error && (
                      <p style={{ color: "#a33", fontSize: "0.88rem", marginTop: 14 }}>{error}</p>
                    )}
                    <button className="btn" type="submit" disabled={sending}>
                      {sending ? "Wysyłanie..." : "Wyślij bezpłatne zapytanie"}
                    </button>
                    <div className="fine">
                      Zapytanie jest bezpłatne i do niczego nie zobowiązuje. Odpowiedź w 24 - 48
                      godzin.
                    </div>
                  </fetcher.Form>
                )}
                {!selected && (
                  <div className="fine">
                    Zapytanie jest bezpłatne i do niczego nie zobowiązuje. Odpowiedź w 24 - 48
                    godzin.
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
