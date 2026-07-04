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
      "Kalendarz dostępności live paintingu do końca 2027. Wybierz wolny dzień i wyślij bezpłatne zapytanie o termin - odpowiedź w 24 - 48 godzin.",
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

const GUEST_OPTIONS = [
  { label: "do 60", value: "do-60" },
  { label: "60 - 100", value: "60-100" },
  { label: "ponad 100", value: "100-plus" },
  { label: "Jeszcze nie wiemy", value: "nie-wiemy" },
] as const;

const PACKAGE_OPTIONS = [
  { label: "Kameralny", value: "kameralny" },
  { label: "Klasyczny", value: "klasyczny" },
  { label: "Premium", value: "premium" },
  { label: "Doradźcie mi", value: "doradzcie" },
] as const;

type ActionResult = { ok: true; names: string } | { error: string; field?: string };

export async function action({ request }: Route.ActionArgs): Promise<ActionResult> {
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
  const guests = String(form.get("guests") ?? "");
  const preferredPackage = String(form.get("preferredPackage") ?? "doradzcie");

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return { error: "Wybierzcie dzień w kalendarzu." };
  if (!EVENT_TYPES.some((t) => t.value === eventType))
    return { error: "Nieprawidłowy rodzaj wydarzenia.", field: "eventType" };
  if (!GUEST_OPTIONS.some((g) => g.value === guests))
    return { error: "Wybierzcie przybliżoną liczbę gości.", field: "guests" };
  if (!PACKAGE_OPTIONS.some((p) => p.value === preferredPackage))
    return { error: "Nieprawidłowy pakiet.", field: "preferredPackage" };
  if (!names) return { error: "Podajcie swoje imiona.", field: "names" };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return { error: "Podajcie poprawny adres e-mail.", field: "email" };

  const today = todayWarsaw();
  const end = await getCalendarEnd();
  if (date < today) return { error: "Ten dzień już minął - wybierzcie inny." };
  if (date > end) return { error: "Ten dzień jest poza zakresem kalendarza." };
  const taken = await getTakenDates();
  if (taken.has(date)) return { error: "Ten termin jest już zajęty - wybierzcie inny dzień." };

  const db = await getDb();
  await db.create({
    collection: "inquiries",
    data: {
      eventDate: date,
      names,
      email,
      city,
      eventType: eventType as "wesele",
      guests: guests as "do-60",
      preferredPackage: preferredPackage as "doradzcie",
      status: "nowe",
    },
  });

  const settings = await db.findGlobal({ slug: "settings" });
  const dateLabel = plFullDate(date);
  const typeLabel = EVENT_TYPES.find((t) => t.value === eventType)?.label ?? eventType;
  const guestsLabel = GUEST_OPTIONS.find((g) => g.value === guests)?.label ?? guests;
  const packageLabel =
    PACKAGE_OPTIONS.find((p) => p.value === preferredPackage)?.label ?? preferredPackage;

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
          `Liczba gości: ${guestsLabel}`,
          `Preferowany pakiet: ${packageLabel}`,
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
          `Aleksandra sprawdzi dostępność i wróci do Was mailowo - zwykle w ciągu 24 - 48 godzin.`,
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

// Chipy jednokrotnego wyboru (radiogroup) - wg Baymard szybsze i czytelniejsze niż dropdown
function ChipGroup({
  label,
  name,
  options,
  value,
  onChange,
  error,
}: {
  label: string;
  name: string;
  options: readonly { label: string; value: string }[];
  value: string | null;
  onChange: (v: string) => void;
  error?: string | null;
}) {
  return (
    <div className="chipset">
      <span className="chipset-label" id={`${name}-label`}>
        {label}
      </span>
      <div className="optrow" role="radiogroup" aria-labelledby={`${name}-label`}>
        {options.map((o) => (
          <button
            type="button"
            key={o.value}
            role="radio"
            aria-checked={value === o.value}
            className={`opt chip${value === o.value ? " sel" : ""}`}
            onClick={() => onChange(o.value)}
          >
            {o.label}
          </button>
        ))}
      </div>
      {error && (
        <p className="field-error" role="alert">
          {error}
        </p>
      )}
      <input type="hidden" name={name} value={value ?? ""} />
    </div>
  );
}

export default function Terminy({ loaderData }: Route.ComponentProps) {
  const { takenDates, todayISO, minMonth, maxMonth } = loaderData;
  const [selected, setSelected] = useState<string | null>(null);
  const [eventType, setEventType] = useState<string>("wesele");
  const [guests, setGuests] = useState<string | null>(null);
  const [pkg, setPkg] = useState<string>("doradzcie");
  const [guestsError, setGuestsError] = useState<string | null>(null);
  const fetcher = useFetcher<typeof action>();
  const sent = fetcher.data && "ok" in fetcher.data && fetcher.data.ok;
  const serverError = fetcher.data && "error" in fetcher.data ? fetcher.data : null;
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
          <h1 className="soak d1">Wolne terminy live paintingu.</h1>
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
            <div className="krok">Krok 1 &middot; wybierzcie wolny dzień</div>
            <Calendar
              takenDates={takenDates}
              todayISO={todayISO}
              minMonth={minMonth}
              maxMonth={maxMonth}
              selected={selected}
              onPick={pick}
            />
            <div className="legend">
              <span>
                <span className="ldot free" />
                termin wolny
              </span>
              <span>
                <span className="ldot taken" />
                termin zajęty
              </span>
            </div>
          </div>
          <div className="bk soak d1" id="bkPanel">
            {sent ? (
              <div className="success">
                <div className="check">&#10003;</div>
                <h3>Zapytanie wysłane.</h3>
                <p style={{ color: "var(--color-ink-soft)", fontSize: "0.95rem", marginTop: 8 }}>
                  Aleksandra sprawdzi dostępność terminu i wróci do Was mailowo z propozycją -
                  zwykle w ciągu 24 - 48 godzin. Do niczego to nie zobowiązuje.
                </p>
                <span className="hand">
                  {fetcher.data && "names" in fetcher.data && fetcher.data.names
                    ? `do usłyszenia, ${fetcher.data.names}!`
                    : "do usłyszenia!"}
                </span>
              </div>
            ) : (
              <>
                <div className="krok">Krok 2 &middot; kilka szczegółów</div>
                <h3>Zapytanie o termin</h3>
                {selected ? (
                  <>
                    <div className="picked">{plFullDate(selected)}</div>
                    <p className="picked-hint">Chcecie inny dzień? Kliknijcie go w kalendarzu.</p>
                  </>
                ) : (
                  <div className="picked none">
                    Najpierw wybierzcie wolny dzień w kalendarzu - formularz zajmie Wam mniej niż
                    minutę.
                  </div>
                )}
                {selected && (
                  <fetcher.Form
                    method="post"
                    onSubmit={(e) => {
                      if (!guests) {
                        e.preventDefault();
                        setGuestsError("Wybierzcie przybliżoną liczbę gości.");
                      }
                    }}
                  >
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
                    <ChipGroup
                      label="Rodzaj wydarzenia"
                      name="eventType"
                      options={EVENT_TYPES}
                      value={eventType}
                      onChange={setEventType}
                      error={serverError?.field === "eventType" ? serverError.error : null}
                    />
                    <ChipGroup
                      label="Przybliżona liczba gości"
                      name="guests"
                      options={GUEST_OPTIONS}
                      value={guests}
                      onChange={(v) => {
                        setGuests(v);
                        setGuestsError(null);
                      }}
                      error={
                        guestsError ?? (serverError?.field === "guests" ? serverError.error : null)
                      }
                    />
                    <ChipGroup
                      label="Preferowany pakiet"
                      name="preferredPackage"
                      options={PACKAGE_OPTIONS}
                      value={pkg}
                      onChange={setPkg}
                      error={serverError?.field === "preferredPackage" ? serverError.error : null}
                    />
                    <label htmlFor="bk-names">Wasze imiona</label>
                    <input
                      id="bk-names"
                      name="names"
                      type="text"
                      placeholder="np. Ania i Michał"
                      autoComplete="name"
                      required
                      aria-invalid={serverError?.field === "names" || undefined}
                    />
                    {serverError?.field === "names" && (
                      <p className="field-error" role="alert">
                        {serverError.error}
                      </p>
                    )}
                    <label htmlFor="bk-email">E-mail</label>
                    <input
                      id="bk-email"
                      name="email"
                      type="email"
                      placeholder="ania@..."
                      autoComplete="email"
                      inputMode="email"
                      required
                      aria-invalid={serverError?.field === "email" || undefined}
                    />
                    {serverError?.field === "email" && (
                      <p className="field-error" role="alert">
                        {serverError.error}
                      </p>
                    )}
                    <label htmlFor="bk-city">
                      Miejscowość wydarzenia <span className="optional">(opcjonalnie)</span>
                    </label>
                    <input id="bk-city" name="city" type="text" placeholder="np. Serock" />
                    {serverError && !serverError.field && (
                      <p className="field-error" role="alert" style={{ marginTop: 14 }}>
                        {serverError.error}
                      </p>
                    )}
                    <button className="btn" type="submit" disabled={sending}>
                      {sending ? "Wysyłanie..." : "Wyślij bezpłatne zapytanie"}
                    </button>
                    <div className="fine">
                      Bezpłatne i niezobowiązujące - to początek rozmowy, nie rezerwacja. Odpowiedź
                      w 24 - 48 godzin.
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
