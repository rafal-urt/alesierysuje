// Warstwa SEO - meta, canonical, OG (SPEC.md sekcja 2 i 7).

export const SITE_URL = "https://alesierysuje.pl";
export const SITE_NAME = "alesierysuje";

type PageMetaArgs = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
};

// Komplet meta dla trasy: title, description, canonical, OG, twitter.
export function pageMeta({ title, description, path, ogImage }: PageMetaArgs) {
  const url = SITE_URL + (path === "/" ? "" : path);
  return [
    { title },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: url || SITE_URL },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url || SITE_URL },
    { property: "og:type", content: "website" },
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
      { "@type": "ListItem", position: 1, name: "Strona główna", item: SITE_URL },
      ...items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: it.name,
        item: SITE_URL + it.path,
      })),
    ],
  };
}

export function localBusinessJsonLd(reviewCount: number) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": SITE_URL + "#business",
    name: "alesierysuje - Aleksandra Sienica",
    description:
      "Live painting i malowanie na żywo na weselach i eventach. Portrety na zamówienie ze zdjęcia.",
    url: SITE_URL,
    areaServed: "PL",
    priceRange: "490 - 11500 PLN",
    taxID: "1133135946",
    vatID: "PL1133135946",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: String(Math.max(reviewCount, 1)),
    },
  };
}
