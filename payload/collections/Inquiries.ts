import type { CollectionConfig } from "payload";

// Zapytania o termin z /terminy (oraz zapytania o portret z konfiguratora - Etap 5).
export const Inquiries: CollectionConfig = {
  slug: "inquiries",
  labels: { singular: "Zapytanie", plural: "Zapytania" },
  access: {
    create: () => true,
  },
  admin: {
    useAsTitle: "names",
    defaultColumns: ["names", "eventDate", "eventType", "status"],
  },
  defaultSort: "-createdAt",
  fields: [
    {
      name: "eventDate",
      type: "date",
      label: "Data wydarzenia",
      // niewymagane: zapytania o portret (eventType: portret) nie mają daty wydarzenia
      required: false,
      admin: { date: { pickerAppearance: "dayOnly", displayFormat: "d MMMM yyyy" } },
    },
    { name: "names", type: "text", label: "Imiona", required: true },
    { name: "email", type: "email", label: "E-mail", required: true },
    { name: "city", type: "text", label: "Miejscowość" },
    {
      name: "eventType",
      type: "select",
      label: "Rodzaj wydarzenia",
      required: true,
      defaultValue: "wesele",
      options: [
        { label: "Wesele", value: "wesele" },
        { label: "Event firmowy", value: "event-firmowy" },
        { label: "Urodziny / jubileusz", value: "urodziny-jubileusz" },
        { label: "Portret na zamówienie", value: "portret" },
        { label: "Inna okazja", value: "inne" },
      ],
    },
    {
      name: "guests",
      type: "select",
      label: "Liczba gości",
      options: [
        { label: "do 60", value: "do-60" },
        { label: "60 - 100", value: "60-100" },
        { label: "ponad 100", value: "100-plus" },
        { label: "Jeszcze nie wiemy", value: "nie-wiemy" },
      ],
    },
    {
      name: "preferredPackage",
      type: "select",
      label: "Preferowany pakiet",
      options: [
        { label: "Kameralny", value: "kameralny" },
        { label: "Klasyczny", value: "klasyczny" },
        { label: "Premium", value: "premium" },
        { label: "Do doradzenia", value: "doradzcie" },
      ],
    },
    {
      name: "status",
      type: "select",
      label: "Status",
      required: true,
      defaultValue: "nowe",
      options: [
        { label: "Nowe", value: "nowe" },
        { label: "Odpowiedziane", value: "odpowiedziane" },
        { label: "Potwierdzone", value: "potwierdzone" },
        { label: "Odrzucone", value: "odrzucone" },
      ],
    },
    { name: "details", type: "textarea", label: "Szczegóły (np. konfiguracja portretu)" },
    { name: "notes", type: "textarea", label: "Notatki (wewnętrzne)" },
  ],
};
