import { useEffect, useState } from "react";
import { useFetcher } from "react-router";
import { track } from "~/lib/track";
import { formatZl } from "~/data/prices";

export type PortraitPrices = {
  a4: number;
  a3: number;
  b50x70: number;
  extraPerson: number;
  dedication: number;
};

// Wymiary ramki podglądu w skali pokoju (kanapa 220 cm) - z prototypu.
const FORMATS = [
  { key: "A4", label: "A4", w: 60, h: 84 },
  { key: "A3", label: "A3", w: 84, h: 118 },
  { key: "50x70", label: "50 × 70 cm", w: 100, h: 140 },
] as const;

type FormatKey = (typeof FORMATS)[number]["key"];

function formatPrice(prices: PortraitPrices, key: FormatKey): number {
  if (key === "A4") return prices.a4;
  if (key === "A3") return prices.a3;
  return prices.b50x70;
}

export function PortraitConfigurator({ prices }: { prices: PortraitPrices }) {
  const [people, setPeople] = useState(1);
  const [format, setFormat] = useState<FormatKey>("A4");
  const [dedication, setDedication] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const fetcher = useFetcher<{ ok?: boolean; error?: string; names?: string }>();
  const sent = Boolean(fetcher.data?.ok);
  const error = fetcher.data?.error ?? null;

  const sending = fetcher.state !== "idle";

  const fmt = FORMATS.find((f) => f.key === format)!;
  const base = formatPrice(prices, format);
  const extra = (people - 1) * prices.extraPerson;
  const total = base + extra + (dedication ? prices.dedication : 0);

  useEffect(() => {
    if (sent) track("zamowienie_portret", { format, osoby: people, cena: total });
  }, [sent, format, people, total]);
  const formatLabel = format === "50x70" ? "50 × 70" : format;
  const summary = `Portret ${formatLabel}, osoby: ${people === 5 ? "5+" : people}, ${
    dedication ? "z dedykacją" : "bez dedykacji"
  } - ${formatZl(total)}`;

  return (
    <div className="wrap config">
      <div>
        <div className="cstep soak">
          <div className="clabel">1 &middot; Ile osób na portrecie</div>
          <div className="optrow">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                className={`opt${people === n ? " sel" : ""}`}
                onClick={() => setPeople(n)}
              >
                {n === 5 ? "5+" : n}
              </button>
            ))}
          </div>
        </div>
        <div className="cstep soak d1">
          <div className="clabel">2 &middot; Format</div>
          <div className="optrow">
            {FORMATS.map((f) => (
              <button
                key={f.key}
                type="button"
                className={`opt${format === f.key ? " sel" : ""}`}
                onClick={() => setFormat(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
        <div className="cstep soak d2">
          <div className="clabel">3 &middot; Odręczna dedykacja na odwrocie</div>
          <div className="optrow">
            <button
              type="button"
              className={`opt${!dedication ? " sel" : ""}`}
              onClick={() => setDedication(false)}
            >
              Bez dedykacji
            </button>
            <button
              type="button"
              className={`opt${dedication ? " sel" : ""}`}
              onClick={() => setDedication(true)}
            >
              Z dedykacją (+{prices.dedication} zł)
            </button>
          </div>
        </div>
        <div className="cstep soak d3">
          <div className="clabel">4 &middot; Zdjęcie referencyjne</div>
          <div className="upload" style={{ cursor: "default" }}>
            Zdjęcie prześlecie mailem po wysłaniu zapytania.
            <br />
            <small>Upload online i płatność w przygotowaniu - na razie bez zobowiązań.</small>
          </div>
        </div>
      </div>
      <div>
        <div className="room soak">
          <div className="rframe" style={{ width: fmt.w, height: fmt.h }}>
            <img src="/gfx/portret-podglad.webp" alt="" width={300} height={420} loading="lazy" />
          </div>
          <div className="sofa" />
          <div className="scale-note">podgląd w skali - kanapa 220 cm</div>
        </div>
        <div className="pricebox soak d1">
          <div className="row">
            <span>Portret, format {formatLabel}</span>
            <span>{formatZl(base)}</span>
          </div>
          {extra > 0 && (
            <div className="row">
              <span>Dodatkowe osoby &times; {people - 1}</span>
              <span>{formatZl(extra)}</span>
            </div>
          )}
          {dedication && (
            <div className="row">
              <span>Odręczna dedykacja</span>
              <span>{formatZl(prices.dedication)}</span>
            </div>
          )}
          <div className="total">
            <span>Razem</span>
            <b>{formatZl(total)}</b>
          </div>

          {sent ? (
            <div className="success">
              <div className="check">&#10003;</div>
              <h3>Zamówienie przyjęte</h3>
              <p style={{ color: "var(--color-ink-soft)", fontSize: "0.95rem", marginTop: 8 }}>
                Odezwę się mailowo w 24 - 48 godzin z prośbą o zdjęcie i potwierdzeniem terminu
                realizacji.
              </p>
            </div>
          ) : showForm ? (
            <fetcher.Form method="post">
              <input type="hidden" name="details" value={summary} />
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: "absolute", left: -9999, width: 1, height: 1, opacity: 0 }}
              />
              <label
                htmlFor="pc-names"
                style={{
                  display: "block",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-ink-faint)",
                  margin: "16px 0 6px",
                }}
              >
                Imię i nazwisko
              </label>
              <input
                id="pc-names"
                name="names"
                type="text"
                placeholder="np. Anna Kowalska"
                required
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  border: "1px solid var(--color-line)",
                  borderRadius: 10,
                  background: "var(--color-paper)",
                }}
              />
              <label
                htmlFor="pc-email"
                style={{
                  display: "block",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-ink-faint)",
                  margin: "16px 0 6px",
                }}
              >
                E-mail
              </label>
              <input
                id="pc-email"
                name="email"
                type="email"
                placeholder="anna@..."
                required
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  border: "1px solid var(--color-line)",
                  borderRadius: 10,
                  background: "var(--color-paper)",
                }}
              />
              {error && (
                <p style={{ color: "#a33", fontSize: "0.88rem", marginTop: 14 }}>{error}</p>
              )}
              <button className="btn" type="submit" disabled={sending}>
                {sending ? "Wysyłanie..." : "Zamawiam - bez płatności online"}
              </button>
            </fetcher.Form>
          ) : (
            <button className="btn" type="button" onClick={() => setShowForm(true)}>
              Zamów portret
            </button>
          )}
          <div className="small">
            realizacja 10 - 14 dni &middot; wysyłka w cenie &middot; szkic do akceptacji przed
            malowaniem
          </div>
        </div>
      </div>
    </div>
  );
}
