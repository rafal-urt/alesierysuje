import type { Route } from "./+types/blog-post";
import { Link } from "react-router";
import { WatercolorStain } from "~/components/WatercolorStain";
import { pageMeta, breadcrumbJsonLd, SITE_URL } from "~/lib/seo";
import { JsonLd } from "~/components/JsonLd";
import { Crumbs } from "~/components/Crumbs";
import { getPost, readingMinutes, POSTS, type PostBlock } from "~/data/posts";

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

// "**tekst**" -> pogrubienie, "[tekst](/sciezka)" -> link wewnętrzny
function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <b key={i}>{part.slice(2, -2)}</b>;
        }
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          return (
            <Link key={i} to={link[2]}>
              {link[1]}
            </Link>
          );
        }
        return part;
      })}
    </>
  );
}

function Block({ block, lead }: { block: PostBlock; lead: boolean }) {
  if (block.type === "h2") {
    return (
      <h2>
        <Inline text={block.text} />
      </h2>
    );
  }
  if (block.type === "ul") {
    return (
      <ul>
        {block.items.map((item) => (
          <li key={item.slice(0, 40)}>
            <Inline text={item} />
          </li>
        ))}
      </ul>
    );
  }
  return (
    <p className={lead ? "postlead" : undefined}>
      <Inline text={block.text} />
    </p>
  );
}

export default function BlogPost({ loaderData }: Route.ComponentProps) {
  const { post } = loaderData;
  const minutes = readingMinutes(post);
  const others = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);
  const [imgW, imgH] = post.imageSize ?? [675, 1200];
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
          ...(post.image ? { image: SITE_URL + post.image } : {}),
          author: { "@type": "Person", name: "Aleksandra Sienica" },
          publisher: { "@id": SITE_URL + "#business" },
          mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
        }}
      />
      <WatercolorStain color="green" width={460} height={420} style={{ top: 80, left: -150 }} />
      <section className="pageshero">
        <div className="wrap legal">
          <Crumbs items={[{ name: "Blog", path: "/blog" }, { name: post.title }]} />
          <p className="postmeta">
            <Link to="/blog">Blog</Link> &middot; {post.dateLabel} &middot; {minutes} min czytania
          </p>
          <h1 className="soak d1" style={{ fontSize: "clamp(1.9rem,3.6vw,2.8rem)" }}>
            {post.title}
          </h1>
        </div>
      </section>
      <section style={{ paddingTop: 10 }}>
        <div className="wrap legal">
          {post.image && (
            <figure className="postcover">
              <img src={post.image} alt={post.imageAlt ?? post.title} width={imgW} height={imgH} />
              {post.imageCap && <figcaption>{post.imageCap}</figcaption>}
            </figure>
          )}
          <div className="post">
            {post.body.map((block, i) => (
              <Block
                key={block.type === "ul" ? block.items[0].slice(0, 40) : block.text.slice(0, 40)}
                block={block}
                lead={i === 0 && block.type === "p"}
              />
            ))}
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 34 }}>
            <Link className="btn" to="/terminy">
              Zobacz kalendarz terminów
            </Link>
            <Link className="btn ghost" to="/cennik">
              Sprawdź cennik
            </Link>
          </div>
          {others.length > 0 && (
            <aside className="postmore">
              <p className="postmore-label">Czytajcie też</p>
              {others.map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="postmore-link">
                  <span>{p.title}</span>
                  <span className="postmore-date">{p.dateLabel}</span>
                </Link>
              ))}
            </aside>
          )}
        </div>
      </section>
    </main>
  );
}
