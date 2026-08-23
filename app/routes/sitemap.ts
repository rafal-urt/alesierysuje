import { SITE_URL, canonicalUrl } from "~/lib/seo";
import { POSTS } from "~/data/posts";
import { CARD_WORKS, PORTRAIT_WORKS, STATIC_WORKS } from "~/data/works-static";

type SitemapEntry = { path: string; images?: string[]; lastmod?: string };

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
  { path: "/minimalistyczne-ilustracje-ze-zdjecia" },
  { path: "/portrety-na-zamowienie", images: imagesOf(PORTRAIT_WORKS) },
  { path: "/realizacje", images: imagesOf(STATIC_WORKS) },
  { path: "/cennik" },
  { path: "/o-mnie" },
  { path: "/terminy" },
  { path: "/kontakt" },
  { path: "/polityka-prywatnosci" },
  { path: "/blog" },
  ...POSTS.map((p) => ({ path: `/blog/${p.slug}`, lastmod: p.date })),
];

const xmlEscape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Sciezki stron ida przez canonicalUrl, zeby <loc> bylo znak w znak tym samym
// adresem co <link rel="canonical"> na stronie. Adresy obrazkow to zwykle pliki.
const assetUrl = (p: string) => SITE_URL + p;

// sitemap.xml generowany na żądanie z listy tras (SPEC.md sekcja 2).
export async function loader() {
  const urls = ENTRIES.map(({ path, images, lastmod }) => {
    const imageTags = (images ?? [])
      .map((src) => `\n    <image:image><image:loc>${xmlEscape(assetUrl(src))}</image:loc></image:image>`)
      .join("");
    // lastmod tylko tam, gdzie znamy prawdziwa date zmiany (wpisy bloga maja
    // wlasna). Google jasno ostrzega, ze niewiarygodny lastmod prowadzi do
    // zignorowania go w calym serwisie - lepiej go nie podawac, niz sciemniac,
    // ze wszystko zmienilo sie dzisiaj.
    const lastmodTag = lastmod ? `<lastmod>${lastmod}</lastmod>` : "";
    return `  <url><loc>${xmlEscape(canonicalUrl(path))}</loc>${lastmodTag}${imageTags}${imageTags ? "\n  " : ""}</url>`;
  }).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>\n`;
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
