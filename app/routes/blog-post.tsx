import type { Route } from "./+types/blog-post";
import { Link } from "react-router";
import { WatercolorStain } from "~/components/WatercolorStain";
import { pageMeta, breadcrumbJsonLd, SITE_URL } from "~/lib/seo";
import { JsonLd } from "~/components/JsonLd";
import { Crumbs } from "~/components/Crumbs";
import { getPost } from "~/data/posts";

export function loader({ params }: Route.LoaderArgs) {
  const post = getPost(params.slug);
  if (!post) {
    throw new Response("Not found", { status: 404 });
  }
  return { post };
}

export function meta({ data }: Route.MetaArgs) {
  if (!data) return [{ title: "Nie znaleziono wpisu | alesierysuje" }];
  return pageMeta({
    title: data.post.title.length <= 45 ? `${data.post.title} | alesierysuje` : data.post.title,
    description: data.post.description,
    path: `/blog/${data.post.slug}`,
  });
}

export default function BlogPost({ loaderData }: Route.ComponentProps) {
  const { post } = loaderData;
  return (
    <main className="page">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          inLanguage: "pl-PL",
          author: { "@type": "Person", name: "Aleksandra Sienica" },
          publisher: { "@id": SITE_URL + "#business" },
          mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
        }}
      />
      <WatercolorStain color="green" width={460} height={420} style={{ top: 80, left: -150 }} />
      <section className="pageshero">
        <div className="wrap legal">
          <p style={{ fontSize: "0.85rem", color: "var(--color-ink-faint)", marginBottom: 10 }}>
            <Link to="/blog">Blog</Link> &middot; {post.dateLabel}
          </p>
          <Crumbs items={[{ name: "Blog", path: "/blog" }, { name: post.title }]} />
          <h1 className="soak d1" style={{ fontSize: "clamp(1.9rem,3.6vw,2.8rem)" }}>
            {post.title}
          </h1>
        </div>
      </section>
      <section style={{ paddingTop: 10 }}>
        <div className="wrap legal">
          {post.image && (
            <div className="frame" style={{ maxWidth: 420, marginBottom: 34 }}>
              <img src={post.image} alt={post.imageAlt ?? post.title} width={675} height={1200} />
            </div>
          )}
          {post.body.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
              {paragraph}
            </p>
          ))}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 30 }}>
            <Link className="btn" to="/terminy">
              Zobacz kalendarz terminów
            </Link>
            <Link className="btn ghost" to="/cennik">
              Sprawdź cennik
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
