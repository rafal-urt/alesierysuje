import type { Route } from "./+types/blog";
import { Link } from "react-router";
import { WatercolorStain } from "~/components/WatercolorStain";
import { pageMeta, breadcrumbJsonLd } from "~/lib/seo";
import { JsonLd } from "~/components/JsonLd";
import { POSTS } from "~/data/posts";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Blog - live painting i portrety | alesierysuje",
    description:
      "Aktualności z pracowni alesierysuje: zapisy na nowe sezony, kulisy malowania na żywo na weselach i eventach.",
    path: "/blog",
  });
}

export default function Blog() {
  return (
    <main className="page">
      <JsonLd data={breadcrumbJsonLd([{ name: "Blog", path: "/blog" }])} />
      <WatercolorStain color="ochre" width={460} height={420} style={{ top: 80, right: -150 }} />
      <section className="pageshero">
        <div className="wrap">
          <h1 className="soak d1">Blog - z pracowni i sprzed sztalugi</h1>
          <p className="lead soak d2">
            Aktualności o zapisach, kulisy malowania na żywo i portretów na zamówienie.
          </p>
        </div>
      </section>
      <section style={{ paddingTop: 10 }}>
        <div className="wrap legal">
          {POSTS.map((p) => (
            <article key={p.slug} className="soak" style={{ marginBottom: 40 }}>
              <h2>
                <Link to={`/blog/${p.slug}`} style={{ borderBottom: "1px solid transparent" }}>
                  {p.title}
                </Link>
              </h2>
              <p style={{ fontSize: "0.85rem", color: "var(--color-ink-faint)", marginBottom: 8 }}>
                {p.dateLabel}
              </p>
              <p>{p.excerpt}</p>
              <Link className="btn ghost sm" to={`/blog/${p.slug}`}>
                Czytaj dalej &rarr;
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
