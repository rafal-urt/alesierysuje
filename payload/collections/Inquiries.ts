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
      required: true,
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
