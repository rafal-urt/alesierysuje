import { getPayload } from "payload";
import config from "../../payload.config";
import type { Work as WorkDoc } from "../../payload-types";
import type { GalleryWork } from "~/components/WorksGallery";

// Local API Payloada dla loaderów/akcji RR7. getPayload cache'uje instancję,
// więc wielokrotne wywołania nie otwierają nowych połączeń.
export function getDb() {
  return getPayload({ config });
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
