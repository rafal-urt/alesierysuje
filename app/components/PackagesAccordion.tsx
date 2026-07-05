import { useState } from "react";
import { Link } from "react-router";
import { formatZl } from "~/data/prices";

export type PackageDef = {
  key: string;
  name: string;
  forWho: string;
  price: number;
  scope: string;
  features: string[];
  featured: boolean;
};

// "**tekst**" -> pogrubienie; prefiks "+ " -> cecha, której nie ma w niższym pakiecie
function FeatureText({ text }: { text: string }) {
  return <>{text.split("**").map((part, i) => (i % 2 ? <b key={i}>{part}</b> : part))}</>;
}

// Poziomy akordeon pakietów: jeden moduł, aktywny panel rozwinięty,
// pozostałe zwinięte do kolumny z nazwą i ceną. Hover / klik / focus przełącza.
export function PackagesAccordion({
  packages,
  prices,
  ctaLabel = "Wybierz datę",
  palette = "w",
  eventTypeParam = "wesele",
}: {
  packages: PackageDef[];
  prices: Record<string, number>;
  ctaLabel?: string;
  /** "w" = wesela (blekit/roz/ochra), "e" = eventy (ziele/fiolet/morski) */
  palette?: "w" | "e";
  /** rodzaj wydarzenia przekazywany do formularza /terminy */
  eventTypeParam?: "wesele" | "event-firmowy";
}) {
  const [active, setActive] = useState(packages.find((p) => p.featured)?.key ?? packages[0].key);

  return (
    <div className="packflow">
      {packages.map((p, i) => {
        const open = active === p.key;
        return (
          <div
            key={p.key}
            className={`packpanel t${i + 1} ${palette}-${i + 1}${open ? " open" : ""}`}
            onMouseEnter={() => setActive(p.key)}
            onClick={() => setActive(p.key)}
            onFocus={() => setActive(p.key)}
            tabIndex={0}
            role="button"
            aria-expanded={open}
            aria-label={`Pakiet ${p.name}`}
          >
            {p.featured && <div className="tag">najczęściej wybierany</div>}
            <div className="packpanel-head">
              <h3>{p.name}</h3>
              <div className="for">{p.forWho}</div>
              <div className="price">
                {formatZl(prices[p.key] ?? p.price).replace(" zł", "")} <span>zł</span>
              </div>
            </div>
            <div className="packpanel-body" aria-hidden={!open}>
              <ul>
                {p.features.map((f) => {
                  const extra = f.startsWith("+ ");
                  return (
                    <li key={f} className={extra ? "extra" : undefined}>
                      <FeatureText text={extra ? f.slice(2) : f} />
                    </li>
                  );
                })}
              </ul>
              <Link
                className={p.featured ? "btn" : "btn ghost"}
                to={`/terminy?typ=${eventTypeParam}&pakiet=${p.key === "prestizowy" ? "premium" : p.key}`}
                tabIndex={open ? 0 : -1}
                onClick={(e) => e.stopPropagation()}
              >
                {ctaLabel}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
