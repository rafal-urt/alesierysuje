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
  { key: "A4", label: "A4", dims: "21 × 30 cm", w: 60, h: 84 },
  { key: "A3", label: "A3", dims: "30 × 42 cm", w: 84, h: 118 },
  { key: "50x70", label: "50 × 70", dims: "50 × 70 cm", w: 100, h: 140 },
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
  const [photoInfo, setPhotoInfo] = useState<string | null>(null);
  const [photoError, setPhotoError] = useState<string | null>(null);
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
      {/* lewa kolumna: konfiguracja + podglad w skali */}
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
                aria-pressed={people === n}
              >
                {n === 5 ? "5+" : n}
              </button>
            ))}
          </div>
          <p className="cstep-hint">
            Pierwsza osoba w cenie formatu, każda kolejna +{prices.extraPerson} zł. Mogę łączyć
            osoby z różnych zdjęć.
          </p>
        </div>

        <div className="cstep soak d1">
          <div className="clabel">2 &middot; Format</div>
          <div className="optrow">
            {FORMATS.map((f) => (
              <button
                key={f.key}
                type="button"
                className={`opt opt-2l${format === f.key ? " sel" : ""}`}
                onClick={() => setFormat(f.key)}
                aria-pressed={format === f.key}
              >
                {f.label}
                <span className="opt-sub">
                  {f.dims} &middot; {formatZl(formatPrice(prices, f.key))}
                </span>
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
              aria-pressed={!dedication}
            >
              Bez dedykacji
            </button>
            <button
              type="button"
              className={`opt${dedication ? " sel" : ""}`}
              onClick={() => setDedication(true)}
              aria-pressed={dedication}
            >
              Z dedykacją <span className="opt-inline-sub">+{prices.dedication} zł</span>
            </button>
          </div>
        </div>

        {/* wizualizacja: rosnie i maleje razem z wyborem formatu */}
        <div className="room soak d3">
          <div className="rframe" style={{ width: fmt.w, height: fmt.h }}>
            <img src="/gfx/portret-podglad.webp" alt="" width={300} height={420} loading="lazy" />
          </div>
          <div className="sofa" />
          <div className="scale-note">
            {fmt.dims} na ścianie - podgląd w skali, kanapa 220 cm
          </div>
        </div>
      </div>

      {/* prawa kolumna: podsumowanie + zamowienie (sticky na desktopie) */}
      <div className="config-side">
        {sent ? (
          <div className="pricebox soak">
            <div className="success">
              <div className="check">&#10003;</div>
              <h3>Zamówienie przyjęte</h3>
              <p className="success-sub">
                {summary}. Odezwę się mailowo w 24 - 48 godzin - potwierdzimy termin i szczegóły,
                a płatność ustalimy dopiero po obustronnej akceptacji.
              </p>
            </div>
          </div>
        ) : (
          <div className="pricebox soak">
            <div className="clabel">4 &middot; Podsumowanie i zamówienie</div>
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
            <div className="row row-free">
              <span>Wysyłka kurierem</span>
              <span>w cenie</span>
            </div>
            <div className="total">
              <span>Razem</span>
              <b>{formatZl(total)}</b>
            </div>

            <fetcher.Form method="post" encType="multipart/form-data" className="pcform">
              <input type="hidden" name="details" value={summary} />
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hp-field"
              />
              <label htmlFor="pc-names">Imię i nazwisko</label>
              <input
                id="pc-names"
                name="names"
                type="text"
                placeholder="np. Anna Kowalska"
                autoComplete="name"
                required
              />
              <label htmlFor="pc-email">E-mail</label>
              <input
                id="pc-email"
                name="email"
                type="email"
                placeholder="anna@..."
                autoComplete="email"
                inputMode="email"
                required
              />
              <label htmlFor="pc-photo">
                Zdjęcia referencyjne <span className="optional">(opcjonalnie)</span>
              </label>
              <input
                id="pc-photo"
                name="photo"
                type="file"
                accept="image/*,.heic,.heif"
                multiple
                className="pc-file"
                onChange={(e) => {
                  const files = [...(e.currentTarget.files ?? [])];
                  const size = files.reduce((a, f) => a + f.size, 0);
                  if (files.length > 6) {
                    setPhotoError("Maksymalnie 6 zdjęć - resztę możecie dosłać mailem.");
                    setPhotoInfo(null);
                    e.currentTarget.value = "";
                  } else if (size > 4 * 1024 * 1024) {
                    setPhotoError(
                      "Zdjęcia ważą łącznie ponad 4 MB - wybierzcie mniej albo mniejsze pliki.",
                    );
                    setPhotoInfo(null);
                    e.currentTarget.value = "";
                  } else {
                    setPhotoError(null);
                    setPhotoInfo(
                      files.length
                        ? `Wybrano: ${files.length} ${files.length === 1 ? "zdjęcie" : files.length < 5 ? "zdjęcia" : "zdjęć"} (${(size / 1024 / 1024).toFixed(1).replace(".", ",")} MB)`
                        : null,
                    );
                  }
                }}
              />
              <p className="pc-hint">
                {photoInfo ??
                  "Do 6 zdjęć, łącznie 4 MB. Możecie je też dosłać później - napiszę mailowo."}
              </p>
              {(error || photoError) && (
                <p className="field-error" role="alert">
                  {error ?? photoError}
                </p>
              )}
              <button className="btn pc-submit" type="submit" disabled={sending}>
                {sending ? "Wysyłanie..." : `Zamawiam za ${formatZl(total)}`}
              </button>
              <p className="pc-trust">
                bez płatności online - termin, szczegóły i płatność potwierdzimy mailowo
              </p>
            </fetcher.Form>

            <div className="small">
              szkic do akceptacji &middot; realizacja 10 - 14 dni &middot; wysyłka w cenie
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
