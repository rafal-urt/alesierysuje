import { SITE_URL } from "~/lib/seo";
import { POSTS } from "~/data/posts";
import { CARD_WORKS, PORTRAIT_WORKS, STATIC_WORKS } from "~/data/works-static";

type SitemapEntry = { path: string; images?: string[] };

// Obrazy prac dopięte do stron, na których faktycznie są osadzone - intencja
// na frazy portretowe jest mocno obrazkowa, więc Google Images to realny kanał.
// Uwaga: Google od 2022 czyta z rozszerzenia obrazkowego wyłącznie <image:loc>;
// image:caption / image:title / image:license są deprecated i je pomijamy
// (opisy niosą alt-teksty i ImageObject JSON-LD na stronie).
const imagesOf = (works: { imageUrl?: string }[]) =>
  works.map((w) => w.imageUrl).filter((u): u is string => Boolean(u));

const ENTRIES: SitemapEntry[] = [
  { path: "/" },
  { path: "/malowanie-na-zywo-wesele", images: imagesOf(CARD_WORKS) },
  { path: "/malowanie-na-zywo-eventy" },
  { path: "/malowanie-na-zywo-warszawa" },
  { path: "/malowanie-na-zywo-trojmiasto" },
  { path: "/malowanie-na-zywo-poznan" },
  { path: "/malowanie-na-zywo-krakow" },
  { path: "/malowanie-na-zywo-lodz" },
  { path: "/portrety-na-zamowienie", images: imagesOf(PORTRAIT_WORKS) },
  { path: "/realizacje", images: imagesOf(STATIC_WORKS) },
  { path: "/cennik" },
  { path: "/o-mnie" },
  { path: "/terminy" },
  { path: "/kontakt" },
  { path: "/polityka-prywatnosci" },
  { path: "/blog" },
  ...POSTS.map((p) => ({ path: `/blog/${p.slug}` })),
];

const xmlEscape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const absolute = (p: string) => SITE_URL + (p === "/" ? "" : p);

// sitemap.xml generowany na żądanie z listy tras (SPEC.md sekcja 2).
export async function loader() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = ENTRIES.map(({ path, images }) => {
    const imageTags = (images ?? [])
      .map((src) => `\n    <image:image><image:loc>${xmlEscape(absolute(src))}</image:loc></image:image>`)
      .join("");
    return `  <url><loc>${xmlEscape(absolute(path))}</loc><lastmod>${lastmod}</lastmod>${imageTags}${imageTags ? "\n  " : ""}</url>`;
  }).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>\n`;
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
