import { useEffect, useState } from "react";
import { useFetcher } from "react-router";
import { track } from "~/lib/track";
import {
  ILLUSTRATION_PRICES,
  ILLUSTRATION_SHIPPING_PLN,
  illustrationPrice,
  formatZl,
  type IllustrationFormat,
} from "~/data/prices";

const FORMATS = Object.entries(ILLUSTRATION_PRICES).map(([key, v]) => ({
  key: key as IllustrationFormat,
  ...v,
}));

// Powyzej tylu postaci cena idzie indywidualnie - nie zgadujemy jej w kalkulatorze.
const MAX_SUBJECTS = 5;

export function IllustrationConfigurator() {
  const [format, setFormat] = useState<IllustrationFormat>("A5");
  const [subjects, setSubjects] = useState(1);
  const [photoInfo, setPhotoInfo] = useState<string | null>(null);
  const [photoError, setPhotoError] = useState<string | null>(null);
  const fetcher = useFetcher<{ ok?: boolean; error?: string }>();
  const sent = Boolean(fetcher.data?.ok);
  const error = fetcher.data?.error ?? null;
  const sending = fetcher.state !== "idle";

  const fmt = FORMATS.find((f) => f.key === format)!;
  const art = illustrationPrice(format, subjects);
  const total = art + ILLUSTRATION_SHIPPING_PLN;

  useEffect(() => {
    if (sent) track("zamowienie_ilustracja", { format, postaci: subjects, cena: total });
  }, [sent, format, subjects, total]);

  const summary =
    `Minimalistyczna ilustracja ${fmt.label} (${fmt.dims}), postaci: ${subjects} - ` +
    `${formatZl(art)} + wysyłka ${formatZl(ILLUSTRATION_SHIPPING_PLN)} = ${formatZl(total)}`;

  return (
    <div className="wrap config">
      <div>
        <div className="cstep soak">
          <div className="clabel">1 &middot; Format</div>
          <div className="optrow optrow-cards">
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
                  {f.dims} &middot; od {formatZl(f.one)}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="cstep soak d1">
          <div className="clabel">2 &middot; Ile postaci na ilustracji</div>
          <div className="optrow optrow-nums">
            {Array.from({ length: MAX_SUBJECTS }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                className={`opt${subjects === n ? " sel" : ""}`}
                onClick={() => setSubjects(n)}
                aria-pressed={subjects === n}
              >
                {n}
              </button>
            ))}
          </div>
          <p className="cstep-hint">
            Zwierzęta liczą się tak samo jak osoby. Pierwsza postać w cenie formatu, druga
            +{formatZl(fmt.two - fmt.one)}, każda kolejna +{formatZl(fmt.extra)}. Więcej niż{" "}
            {MAX_SUBJECTS} postaci - napiszcie, uzgodnimy szczegóły.
          </p>
        </div>
      </div>

      <div className="config-side">
        {sent ? (
          <div className="pricebox soak">
            <div className="success">
              <div className="check">&#10003;</div>
              <h3>Zamówienie przyjęte</h3>
              <p className="success-sub">
                {summary}. Odezwę się mailowo w 24 - 48 godzin - potwierdzimy szczegóły, a
                płatność ustalimy dopiero po obustronnej akceptacji.
              </p>
            </div>
          </div>
        ) : (
          <div className="pricebox soak">
            <div className="clabel">3 &middot; Podsumowanie i zamówienie</div>
            <div className="row">
              <span>
                Ilustracja {fmt.label}, {subjects}{" "}
                {subjects === 1 ? "postać" : subjects < 5 ? "postacie" : "postaci"}
              </span>
              <span>{formatZl(art)}</span>
            </div>
            <div className="row">
              <span>Wysyłka</span>
              <span>{formatZl(ILLUSTRATION_SHIPPING_PLN)}</span>
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
              <label htmlFor="ic-names">Imię i nazwisko</label>
              <input
                id="ic-names"
                name="names"
                type="text"
                placeholder="np. Anna Kowalska"
                autoComplete="name"
                required
              />
              <label htmlFor="ic-email">E-mail</label>
              <input
                id="ic-email"
                name="email"
                type="email"
                placeholder="anna@..."
                autoComplete="email"
                inputMode="email"
                required
              />
              <label htmlFor="ic-photo">
                Zdjęcie <span className="optional">(opcjonalnie)</span>
              </label>
              <input
                id="ic-photo"
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
                bez płatności online - szczegóły i płatność potwierdzimy mailowo
              </p>
            </fetcher.Form>
          </div>
        )}
      </div>
    </div>
  );
}
