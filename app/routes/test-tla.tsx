import { Link } from "react-router";
import { Faq } from "~/components/Faq";

// Poligon testowy tekstur papieru akwarelowego - TYLKO lokalnie.
// Na Vercelu zwraca 404; nie ma go w sitemapie, do tego noindex.
export function loader() {
  if (process.env.VERCEL) throw new Response("Not Found", { status: 404 });
  return null;
}

export function meta() {
  return [{ title: "TEST: tekstury tła (localhost)" }, { name: "robots", content: "noindex" }];
}

const TLA = {
  roz: "/gfx/tla/tlo-roz.webp",
  morski: "/gfx/tla/tlo-morski.webp",
  blekit: "/gfx/tla/tlo-blekit.webp",
  brzoskwinia: "/gfx/tla/tlo-brzoskwinia.webp",
  gladki: "/gfx/tla/tlo-papier-gladki.webp",
  ziarno: "/gfx/tla/tlo-papier-ziarno.webp",
};

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

const bg = (src: string, extra?: string) => ({
  backgroundImage: `${extra ? extra + ", " : ""}url(${src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
});

export default function TestTla() {
  return (
    <main className="page" style={{ paddingTop: 76 }}>
      {/* ===== A: hero na rozowym washu ===== */}
      <section style={{ position: "relative", padding: "110px 0 90px", ...bg(TLA.roz) }}>
        <Tag>A · hero na tlo-roz (pełna moc)</Tag>
        <div className="wrap">
          <h1 style={{ maxWidth: 700 }}>
            Malowanie <span style={{ fontStyle: "italic" }}>na żywo</span>, które zostaje na
            zawsze.
          </h1>
          <p className="lead" style={{ maxWidth: 560 }}>
            Live painting na weselach i eventach firmowych, szybkie portrety gości oraz portrety
            na zamówienie ze zdjęcia.
          </p>
          <div className="hero-cta" style={{ marginTop: 26 }}>
            <Link className="btn" to="/terminy">
              Sprawdź swój termin
            </Link>
          </div>
        </div>
      </section>

      {/* ===== B: hero na rozowym washu wyciszonym bialym woalem ===== */}
      <section
        style={{
          position: "relative",
          padding: "110px 0 90px",
          ...bg(TLA.roz, "linear-gradient(rgba(250,247,242,0.72), rgba(250,247,242,0.72))"),
        }}
      >
        <Tag>B · to samo tło + biały woal 72%</Tag>
        <div className="wrap">
          <h1 style={{ maxWidth: 700 }}>Ten sam róż, ale wyciszony woalem</h1>
          <p className="lead" style={{ maxWidth: 560 }}>
            Tekstura zostaje w tle, typografia i przyciski odzyskują pełny kontrast. Tak
            najczęściej używa się papierowych tekstur w brandach premium.
          </p>
          <div className="hero-cta" style={{ marginTop: 26 }}>
            <Link className="btn" to="/terminy">
              Sprawdź swój termin
            </Link>
          </div>
        </div>
      </section>

      {/* ===== C: sekcja z panelami na brzoskwini ===== */}
      <section style={{ position: "relative", padding: "90px 0", ...bg(TLA.brzoskwinia) }}>
        <Tag>C · sekcja opinii na tlo-brzoskwinia</Tag>
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">Opinie</div>
            <h2>Słowo od par i gości</h2>
          </div>
          <div className="quotes">
            {[
              "Aleksandra to złoto, a jej prace to najpiękniejsza pamiątka z naszego wesela.",
              "Goście ustawiali się do kącika cały wieczór - a portrety wisiały u nich w domach tydzień później.",
              "Profesjonalizm, spokój i talent. Polecamy każdej parze.",
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

      {/* ===== D: banner CTA na niebieskim splashu ===== */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap">
          <div
            className="banner"
            style={{
              position: "relative",
              overflow: "hidden",
              background: "#fff",
              color: "var(--color-ink)",
              border: "1px solid var(--color-line-soft)",
              ...bg(TLA.blekit),
            }}
          >
            <Tag>D · banner na tlo-blekit (zamiast ciemnego)</Tag>
            <h2 style={{ color: "var(--color-ink)" }}>Wasz wieczór może być na tej ścianie</h2>
            <Link className="btn" to="/terminy">
              Sprawdź wolne terminy
            </Link>
          </div>
        </div>
      </section>

      {/* ===== E: morski wash dolem sekcji FAQ ===== */}
      <section
        style={{
          position: "relative",
          padding: "90px 0 130px",
          backgroundImage: `url(${TLA.morski})`,
          backgroundSize: "100% auto",
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Tag>E · FAQ z morskim washem przy dolnej krawędzi</Tag>
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">FAQ</div>
            <h2>Krótko o najważniejszym</h2>
          </div>
          <Faq
            items={[
              {
                q: "Czy tekstura nie gryzie się z treścią?",
                a: "Wash siedzi tylko przy krawędzi sekcji, treść zostaje na czystym papierze.",
              },
              {
                q: "A na mobile?",
                a: "Tekstury skalują się przez background-size, a najcięższa waży 271 kB w WebP.",
              },
            ]}
          />
        </div>
      </section>

      {/* ===== F: papier z ziarnem jako tlo calej strony ===== */}
      <section
        style={{
          position: "relative",
          padding: "90px 0",
          backgroundImage: `url(${TLA.ziarno})`,
          backgroundSize: "900px auto",
          backgroundRepeat: "repeat",
        }}
      >
        <Tag>F · tlo-papier-ziarno jako tło globalne (kafelkowane)</Tag>
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">Papier zamiast gładkiego tła</div>
            <h2>Tak wyglądałoby tło całej strony</h2>
            <p>
              Delikatne ziarno papieru akwarelowego zamiast jednolitego koloru - na tym tle stoją
              wszystkie sekcje, panele i karty.
            </p>
          </div>
          <div className="panel" style={{ maxWidth: 520 }}>
            <h2 style={{ fontSize: "1.3rem", marginBottom: 10 }}>Biała karta na papierze</h2>
            <p style={{ color: "var(--color-ink-soft)", fontSize: "0.95rem" }}>
              Panele i formularze łapią wtedy naturalny kontrast - jak kartka położona na
              fakturowanym blacie.
            </p>
          </div>
        </div>
      </section>

      {/* ===== G: papier gladki jako tlo globalne ===== */}
      <section
        style={{
          position: "relative",
          padding: "90px 0",
          backgroundImage: `url(${TLA.gladki})`,
          backgroundSize: "1100px auto",
          backgroundRepeat: "repeat",
        }}
      >
        <Tag>G · tlo-papier-gladki jako tło globalne (subtelniejsze)</Tag>
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">Wariant cichszy</div>
            <h2>Gładki tynk/papier - ledwo widoczna faktura</h2>
            <p>Bezpieczniejsza opcja: faktura widoczna dopiero przy uważnym spojrzeniu.</p>
          </div>
          <div className="panel" style={{ maxWidth: 520 }}>
            <h2 style={{ fontSize: "1.3rem", marginBottom: 10 }}>Ta sama karta, cichsze tło</h2>
            <p style={{ color: "var(--color-ink-soft)", fontSize: "0.95rem" }}>
              Różnica względem obecnego jednolitego #FAF7F2 jest subtelna, ale dodaje "papieru".
            </p>
          </div>
        </div>
      </section>

      {/* ===== H: hero z washem tylko w rogu (jak nasze plamy, ale foto) ===== */}
      <section
        style={{
          position: "relative",
          padding: "110px 0 90px",
          backgroundImage: `url(${TLA.blekit})`,
          backgroundSize: "cover",
          backgroundPosition: "right top",
        }}
      >
        <Tag>H · tlo-blekit: splash w rogu, treść na czystej części</Tag>
        <div className="wrap">
          <h1 style={{ maxWidth: 640 }}>Splash tylko w rogu kadru</h1>
          <p className="lead" style={{ maxWidth: 520 }}>
            Zdjęciowa wersja naszych proceduralnych plam - kolor wchodzi z prawego górnego rogu,
            copy zostaje na białym.
          </p>
          <Link className="btn" to="/terminy">
            Sprawdź swój termin
          </Link>
        </div>
      </section>

      <section style={{ padding: "50px 0" }}>
        <div className="wrap">
          <p style={{ color: "var(--color-ink-faint)", fontSize: "0.9rem" }}>
            Strona testowa - dostępna tylko lokalnie (na produkcji 404). Warianty: A/B hero z
            różem, C sekcja na brzoskwini, D banner na błękicie, E morski wash przy krawędzi, F/G
            papier jako tło globalne, H splash w rogu.
          </p>
        </div>
      </section>
    </main>
  );
}
