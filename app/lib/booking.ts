// Gdzie prowadzi główne wezwanie do działania. Na razie kalendarz /terminy jest
// ukryty i wszystkie przyciski prowadzą do formularza kontaktowego. Żeby go
// przywrócić, wystarczy ustawić CALENDAR_ENABLED na true: wróci przekierowanie
// w nawigacji, przyciskach, sitemapie i trasie /terminy.
export const CALENDAR_ENABLED = false;

export type InquiryType = "wesele" | "event-firmowy";

// Nazwy pakietów pod kluczami przekazywanymi w ?pakiet= (te same co w /terminy).
export const PACKAGE_LABELS: Record<string, string> = {
  kameralny: "Kameralny",
  klasyczny: "Klasyczny",
  premium: "Premium",
  networking: "Akcent",
  gala: "Atelier",
  konferencja: "Galeria",
};

export const TYPE_LABELS: Record<InquiryType, string> = {
  wesele: "wesele",
  "event-firmowy": "event firmowy",
};

/** Adres głównego CTA, opcjonalnie z rodzajem wydarzenia i pakietem. */
export function inquiryHref(params?: { typ?: InquiryType; pakiet?: string }): string {
  const base = CALENDAR_ENABLED ? "/terminy" : "/kontakt";
  const qs = new URLSearchParams();
  if (params?.typ) qs.set("typ", params.typ);
  if (params?.pakiet) qs.set("pakiet", params.pakiet);
  const q = qs.toString();
  return q ? `${base}?${q}` : base;
}

/** Podpis głównego przycisku - zależny od tego, dokąd prowadzi. */
export const INQUIRY_CTA = CALENDAR_ENABLED ? "Sprawdź swój termin" : "Napisz do mnie";

/** Wstępna treść wiadomości w /kontakt dla wejścia z wybranym pakietem. */
export function prefillMessage(typ: string | null, pakiet: string | null): string {
  const typLabel = typ && typ in TYPE_LABELS ? TYPE_LABELS[typ as InquiryType] : null;
  const pakietLabel = pakiet ? PACKAGE_LABELS[pakiet] : undefined;
  if (!typLabel && !pakietLabel) return "";
  const what = [
    pakietLabel ? `pakiet ${pakietLabel}` : "malowanie na żywo",
    typLabel ? `na ${typLabel}` : null,
  ]
    .filter(Boolean)
    .join(" ");
  return `Dzień dobry, interesuje mnie ${what}.\nData: \nMiejscowość: \nLiczba gości: \n`;
}
