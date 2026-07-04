import { SITE_URL } from "~/lib/seo";

const PATHS = [
  "/",
  "/live-painting-wesele",
  "/live-painting-eventy",
  "/portrety-na-zamowienie",
  "/realizacje",
  "/cennik",
  "/o-mnie",
  "/terminy",
  "/polityka-prywatnosci",
];

// sitemap.xml generowany na żądanie z listy tras (SPEC.md sekcja 2).
export async function loader() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = PATHS.map(
    (p) =>
      `  <url><loc>${SITE_URL}${p === "/" ? "" : p}</loc><lastmod>${lastmod}</lastmod></url>`,
  ).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
