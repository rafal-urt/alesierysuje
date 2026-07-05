import { Link } from "react-router";

// Poligon testowy: zastosowania wariantu B (tekstura akwareli + bialy woal)
// w realnych elementach strony. TYLKO lokalnie - na Vercelu 404.
export function loader() {
  if (process.env.VERCEL) throw new Response("Not Found", { status: 404 });
  return null;
}

export function meta() {
  return [
    { title: "TEST: wash + woal w elementach strony (localhost)" },
    { name: "robots", content: "noindex" },
  ];
}

const ROZ = "/gfx/tla/tlo-roz.webp";
const BLEKIT = "/gfx/tla/tlo-blekit.webp";
const BRZOSKW = "/gfx/tla/tlo-brzoskwinia.webp";

/** wash + bialy woal o zadanej mocy */
const washBg = (src: string, veil: number, pos = "center") => ({
  backgroundImage: `linear-gradient(rgba(250,247,242,${veil}), rgba(250,247,242,${veil})), url(${src})`,
  backgroundSize: "cover",
  backgroundPosition: pos,
});

function Tag({ children }: { children: string }) {
  return (
    <div
      style={{
        position: "absolute",
        top: 14,
        left: 14,
        zIndex: 5,
        background: "#2b2b2b",
        color: "#faf7f2",
        fontSize: "0.72rem",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        padding: "6px 12px",
        borderRadius: 999,
      }}
    >
      {children}
    </div>
  );
}

export default function TestTla() {
  return (
    <main className="page">
      {/* ===== 1. HEADER: wyspa z washem ===== */}
      <section style={{ position: "relative", padding: "40px 0 30px" }}>
        <Tag>1 · wyspa nav z washem + woal 80%</Tag>
        <div className="wrap">
          <p style={{ margin: "26px 0 18px", color: "var(--color-ink-faint)", fontSize: ".9rem" }}>
            Makieta headera (prawdziwy zostaje bez zmian do decyzji):
          </p>
          <div
            style={{
              borderRadius: 999,
              border: "1px solid rgba(43,43,43,0.09)",
              boxShadow: "0 6px 24px rgba(43,43,43,0.08)",
              padding: "12px 14px 12px 32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              ...washBg(ROZ, 0.8),
            }}
          >
            <img src="/gfx/logo.png" alt="alesierysuje" style={{ height: 32, width: "auto" }} />
            <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
              {["Wesela", "Eventy", "Portrety", "Cennik"].map((l) => (
                <span
                  key={l}
                  style={{
                    fontSize: ".82rem",
                    fontWeight: 500,
                    letterSpacing: ".04em",
                    textTransform: "uppercase",
                    color: "var(--color-ink-soft)",
                    padding: "9px 13px",
                  }}
                >
                  {l}
                </span>
              ))}
              <span className="btn" style={{ padding: "11px 22px", fontSize: ".82rem" }}>
                Sprawdź termin
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2. HERO PODSTRONY ===== */}
      <section style={{ position: "relative", padding: "90px 0 70px", ...washBg(ROZ, 0.72) }}>
        <Tag>2 · hero podstrony (np. wesela) - woal 72%</Tag>
        <div className="wrap">
          <div style={{ fontSize: ".78rem", color: "var(--color-ink-faint)", marginBottom: 20 }}>
            Strona główna &rsaquo; Wesela
          </div>
          <h1 style={{ maxWidth: 680 }}>Dziesiątki akwarel z jednego wesela</h1>
          <p className="lead" style={{ maxWidth: 560 }}>
            Zamiast jednego obrazu - kącik live art, z którego każdy gość zabiera swój portret.
            Tekstura gra w tle, treść zostaje w pełni czytelna.
          </p>
          <div className="hero-cta" style={{ marginTop: 26 }}>
            <span className="btn">Sprawdź swój termin</span>
            <span className="btn ghost">Zobacz pakiety i ceny</span>
          </div>
        </div>
      </section>

      {/* ===== 3. PANELE PAKIETOW ===== */}
      <section style={{ position: "relative", padding: "80px 0" }}>
        <Tag>3 · panele pakietów: wash zamiast plaskiej mgielki</Tag>
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">Pakiety</div>
            <h2>Każdy pakiet w swojej akwareli</h2>
            <p>Dziś panele mają płaskie pastelowe tła - tu wersja z teksturą + woal 85%.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
            {[
              { n: "Kameralny", p: "4 000 zł", src: BLEKIT, pos: "right top" },
              { n: "Klasyczny", p: "6 000 zł", src: ROZ, pos: "left center" },
              { n: "Premium", p: "9 000 zł", src: BRZOSKW, pos: "left bottom" },
            ].map((x) => (
              <div
                key={x.n}
                style={{
                  borderRadius: 18,
                  border: "1px solid var(--color-line-soft)",
                  padding: "28px 26px",
                  ...washBg(x.src, 0.85, x.pos),
                }}
              >
                <h3 style={{ fontSize: "1.2rem", marginBottom: 6 }}>{x.n}</h3>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.9rem" }}>{x.p}</div>
                <p style={{ color: "var(--color-ink-soft)", fontSize: ".9rem", marginTop: 10 }}>
                  6 h malowania na żywo, 20 ilustracji A5, kącik live art i konsultacja online.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. BANNER CTA ===== */}
      <section style={{ position: "relative", padding: "10px 0 60px" }}>
        <Tag>4 · jasny banner CTA (zamiast ciemnego)</Tag>
        <div className="wrap">
          <div
            style={{
              borderRadius: 26,
              border: "1px solid var(--color-line-soft)",
              padding: "64px 40px",
              textAlign: "center",
              ...washBg(BLEKIT, 0.68, "right center"),
            }}
          >
            <h2 style={{ marginBottom: 22 }}>Wasz wieczór może być na tej ścianie</h2>
            <span className="btn">Sprawdź wolne terminy</span>
          </div>
        </div>
      </section>

      {/* ===== 5. KARTY OPINII ===== */}
      <section style={{ position: "relative", padding: "60px 0", ...washBg(BRZOSKW, 0.88) }}>
        <Tag>5 · cala sekcja opinii pod woalem 88%</Tag>
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">Opinie</div>
            <h2>Sekcja na ledwo widocznym washu</h2>
          </div>
          <div className="quotes">
            {[
              "Najpiękniejsza pamiątka z naszego wesela - goście do dziś wspominają kącik.",
              "Aleksandra namalowała 34 portrety w jeden wieczór. Magia.",
              "Profesjonalizm i spokój, a prace wiszą u nas w salonie.",
            ].map((t, i) => (
              <div className="quote" key={i}>
                <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p>{t}</p>
                <div className="who">Para młoda &middot; 2026</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. STOPKA ===== */}
      <section style={{ position: "relative", padding: "60px 0 0" }}>
        <Tag>6 · stopka z washem u dolu strony</Tag>
        <div
          style={{
            marginTop: 20,
            borderTop: "1px solid var(--color-line-soft)",
            padding: "56px 0 40px",
            ...washBg(ROZ, 0.78, "center bottom"),
          }}
        >
          <div className="wrap" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 40 }}>
            <div>
              <img src="/gfx/logo.png" alt="" style={{ height: 30, width: "auto" }} />
              <p style={{ color: "var(--color-ink-soft)", fontSize: ".9rem", marginTop: 14, maxWidth: 320 }}>
                Malowanie na żywo na weselach i eventach. Portrety na zamówienie ze zdjęcia.
              </p>
            </div>
            <div>
              <b style={{ fontSize: ".82rem", textTransform: "uppercase", letterSpacing: ".1em" }}>Usługi</b>
              <p style={{ fontSize: ".9rem", color: "var(--color-ink-soft)", marginTop: 10 }}>
                Wesela<br />Eventy<br />Portrety
              </p>
            </div>
            <div>
              <b style={{ fontSize: ".82rem", textTransform: "uppercase", letterSpacing: ".1em" }}>Kontakt</b>
              <p style={{ fontSize: ".9rem", color: "var(--color-ink-soft)", marginTop: 10 }}>
                alesierysuje@gmail.com<br />@alesierysuje
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 7. TLO GLOBALNE ===== */}
      <section style={{ position: "relative", padding: "80px 0 100px", ...washBg(ROZ, 0.9) }}>
        <Tag>7 · tlo globalne pod woal 90% - wersja "wszedzie"</Tag>
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">Najcichszy wariant</div>
            <h2>Woal 90% - kolor prawie znika, zostaje "cieplo"</h2>
            <p>
              Tak mógłby wyglądać podkład całych stron: zamiast płaskiego #FAF7F2 delikatna
              różowa poświata z teksturą papieru. Panele i karty stoją na tym bez zmian.
            </p>
          </div>
          <div className="panel" style={{ maxWidth: 480 }}>
            <h2 style={{ fontSize: "1.25rem", marginBottom: 8 }}>Biała karta kontrolna</h2>
            <p style={{ color: "var(--color-ink-soft)", fontSize: ".92rem" }}>
              Sprawdź, czy karta dalej "siedzi" na tle i nie zlewa się z nim.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 0" }}>
        <div className="wrap">
          <p style={{ color: "var(--color-ink-faint)", fontSize: ".9rem" }}>
            Siła woalu rośnie z numerem: banner 68% &rarr; hero 72% &rarr; stopka 78% &rarr; wyspa
            80% &rarr; panele 85% &rarr; opinie 88% &rarr; tło globalne 90%. Im więcej treści na
            teksturze, tym mocniejszy woal.
          </p>
          <p style={{ color: "var(--color-ink-faint)", fontSize: ".9rem" }}>
            <Link to="/">&larr; wróć na stronę</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
