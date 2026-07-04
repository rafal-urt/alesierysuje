import { getPayload } from "payload";
import config from "../../payload.config";
import type { Work as WorkDoc } from "../../payload-types";
import type { GalleryWork } from "~/components/WorksGallery";

// Local API Payloada dla loaderów/akcji RR7. getPayload cache'uje instancję,
// więc wielokrotne wywołania nie otwierają nowych połączeń.
export function getDb() {
  return getPayload({ config });
}

const MONTHS = [
  "stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca",
  "lipca", "sierpnia", "września", "października", "listopada", "grudnia",
];
const MONTHS_NOMINATIVE = [
  "styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec",
  "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień",
];

// "2026-04-12" -> "kwiecień 2026" (do podpisów opinii)
export function plMonthYear(iso: string): string {
  const d = new Date(iso);
  return `${MONTHS_NOMINATIVE[d.getMonth()]} ${d.getFullYear()}`;
}

// "2026-04-12" -> "niedziela, 12 kwietnia 2026" (do panelu zapytania)
export function plFullDate(iso: string): string {
  const d = new Date(iso + "T12:00:00");
  const dows = ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"];
  return `${dows[d.getDay()]}, ${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

// Dokument works -> obiekt galerii. Prawdziwy skan (upload) wygrywa z placeholderem.
export function mapWork(doc: WorkDoc): GalleryWork {
  const image = doc.image && typeof doc.image === "object" ? doc.image : undefined;
  const filename = image?.sizes?.card?.filename ?? image?.filename ?? undefined;
  return {
    title: doc.title,
    meta: doc.caption,
    seed: doc.seed ?? 1,
    palette: doc.palette ?? 0,
    big: Boolean(doc.bigFormat),
    imageUrl: filename ? `/media/${filename}` : undefined,
    imageAlt: image?.alt ?? doc.title,
  };
}
