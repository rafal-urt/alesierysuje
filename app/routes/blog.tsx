import type { Route } from "./+types/blog";
import { Link } from "react-router";
import { WatercolorStain } from "~/components/WatercolorStain";
import { pageMeta, breadcrumbJsonLd } from "~/lib/seo";
import { JsonLd } from "~/components/JsonLd";
import { Crumbs } from "~/components/Crumbs";
import { POSTS, readingMinutes } from "~/data/posts";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Blog - live painting i portrety | alesierysuje",
    description:
      "Aktualności z pracowni alesierysuje: zapisy na nowe sezony, kulisy malowania na żywo na weselach i eventach, porady o portretach na zamówienie.",
    path: "/blog",
  });
}

export default function Blog() {
  const posts = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <main className="page">
      <JsonLd data={breadcrumbJsonLd([{ name: "Blog", path: "/blog" }])} />
      <WatercolorStain color="ochre" width={460} height={420} style={{ top: 80, right: -150 }} />
      <section className="pageshero">
        <div className="wrap">
          <Crumbs items={[{ name: "Blog" }]} />
          <h1 className="soak d1">Blog - z pracowni i sprzed sztalugi</h1>
          <p className="lead soak d2">
            Aktualności o zapisach, kulisy malowania na żywo i porady - od cen po wybór zdjęcia do
            portretu.
          </p>
        </div>
      </section>
      <section style={{ paddingTop: 10 }}>
        <div className="wrap">
          <div className="bloglist">
            {posts.map((p, i) => (
              <article key={p.slug} className={`blogcard soak d${Math.min(i % 3, 2) + 1}`}>
                {p.image && (
                  <Link to={`/blog/${p.slug}`} className="blogcard-img" tabIndex={-1}>
                    <img
                      src={p.image}
                      alt={p.imageAlt ?? p.title}
                      width={p.imageSize?.[0] ?? 675}
                      height={p.imageSize?.[1] ?? 1200}
                      loading={i < 2 ? "eager" : "lazy"}
                    />
                  </Link>
                )}
                <p className="blogcard-meta">
                  {p.dateLabel} &middot; {readingMinutes(p)} min czytania
                </p>
                <h2>
                  <Link to={`/blog/${p.slug}`}>{p.title}</Link>
                </h2>
                <p className="blogcard-excerpt">{p.excerpt}</p>
                <Link className="blogcard-more" to={`/blog/${p.slug}`}>
                  Czytaj dalej &rarr;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
