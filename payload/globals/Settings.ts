import type { GlobalConfig } from "payload";

// Jedno źródło prawdy dla cen i ustawień serwisu (SPEC.md sekcja 3).
export const Settings: GlobalConfig = {
  slug: "settings",
  label: "Ustawienia",
  access: { read: () => true },
  fields: [
    { name: "contactEmail", type: "email", label: "E-mail kontaktowy", required: true },
    { name: "instagram", type: "text", label: "Instagram (link)" },
    {
      name: "calendarEnd",
      type: "date",
      label: "Data końcowa kalendarza",
      required: true,
    },
    {
      name: "weddingPackages",
      type: "group",
      label: "Ceny pakietów weselnych (zł)",
      fields: [
        { name: "kameralny", type: "number", label: "Kameralny", required: true },
        { name: "klasyczny", type: "number", label: "Klasyczny", required: true },
        { name: "prestizowy", type: "number", label: "Premium", required: true },
      ],
    },
    {
      name: "eventPricing",
      type: "group",
      label: "Ceny eventowe - legacy (nieużywane)",
      fields: [
        { name: "portraits", type: "number", label: "Szybkie portrety gości (od)", required: true },
        { name: "scene", type: "number", label: "Obraz sceny wydarzenia (od)", required: true },
      ],
    },
    {
      name: "eventPackages",
      type: "group",
      label: "Ceny pakietów eventowych (zł)",
      fields: [
        { name: "networking", type: "number", label: "Akcent" },
        { name: "gala", type: "number", label: "Atelier" },
        { name: "konferencja", type: "number", label: "Galeria" },
      ],
    },
    {
      name: "portraits",
      type: "group",
      label: "Ceny portretów (zł)",
      fields: [
        { name: "a4", type: "number", label: "Format A4", required: true },
        { name: "a3", type: "number", label: "Format A3", required: true },
        { name: "b50x70", type: "number", label: "Format 50 × 70 cm", required: true },
        { name: "extraPerson", type: "number", label: "Każda dodatkowa osoba", required: true },
        { name: "dedication", type: "number", label: "Odręczna dedykacja", required: true },
      ],
    },
  ],
};
