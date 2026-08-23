// Warstwa SEO - meta, canonical, OG (SPEC.md sekcja 2 i 7).

export const SITE_URL = "https://alesierysuje.pl";
export const SITE_NAME = "alesierysuje";

type PageMetaArgs = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  /** "article" dla wpisow bloga - reszta serwisu to "website" */
  ogType?: "website" | "article";
};

// Adres kanoniczny trasy. Podstrony bez ukosnika na koncu (tak samo jak
// trailingSlash:false na Vercelu i wpisy w sitemapie), ale korzen serwisu
// zawsze z ukosnikiem - "/" to jego sciezka, a nie jej brak.
export function canonicalUrl(path: string): string {
  return path === "/" ? SITE_URL + "/" : SITE_URL + path;
}

// Komplet meta dla trasy: title, description, canonical, OG, twitter.
export function pageMeta({ title, description, path, ogImage, ogType }: PageMetaArgs) {
  const url = canonicalUrl(path);
  return [
    { title },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:type", content: ogType ?? "website" },
    { property: "og:locale", content: "pl_PL" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:image", content: SITE_URL + (ogImage ?? "/og/default.png") },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}

// BreadcrumbList JSON-LD dla podstron (strona główna -> podstrona).
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Strona główna", item: canonicalUrl("/") },
      ...items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: it.name,
        item: SITE_URL + it.path,
      })),
    ],
  };
}

// Profil z opiniami w serwisie Wesele z klasą - jedyne (zewnętrzne) źródło ocen.
// Self-serving AggregateRating/Review na własnej stronie są niezgodne z wytycznymi
// Google - ocen NIE dodajemy do JSON-LD, tylko linkujemy widocznie do źródła.
export const WZK_PROFILE_URL = "https://www.weselezklasa.pl/ogloszenia-weselne/alesierysuje,60334/";
export const INSTAGRAM_URL = "https://www.instagram.com/alesierysuje";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": SITE_URL + "#business",
    name: "alesierysuje - Aleksandra Sienica",
    description:
      "Malowanie na żywo (live painting) na weselach i eventach. Portrety na zamówienie ze zdjęcia.",
    url: canonicalUrl("/"),
    logo: SITE_URL + "/gfx/logo.png",
    image: SITE_URL + "/og/home.png",
    email: "alesierysuje@gmail.com",
    address: { "@type": "PostalAddress", addressLocality: "Warszawa", addressCountry: "PL" },
    areaServed: "PL",
    priceRange: "490 - 11500 PLN",
    taxID: "1133135946",
    vatID: "PL1133135946",
    founder: { "@type": "Person", name: "Aleksandra Sienica" },
    sameAs: [INSTAGRAM_URL, WZK_PROFILE_URL],
  };
}
