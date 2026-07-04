import type { CollectionConfig } from "payload";

// Briefy B2B z formularza na /live-painting-eventy.
export const Briefs: CollectionConfig = {
  slug: "briefs",
  labels: { singular: "Brief", plural: "Briefy" },
  access: {
    create: () => true,
  },
  admin: {
    useAsTitle: "company",
    defaultColumns: ["company", "dateCity", "guests", "status"],
  },
  defaultSort: "-createdAt",
  fields: [
    { name: "company", type: "text", label: "Firma / agencja", required: true },
    { name: "dateCity", type: "text", label: "Data i miasto", required: true },
    {
      name: "guests",
      type: "select",
      label: "Liczba gości",
      required: true,
      options: [
        { label: "do 50", value: "do-50" },
        { label: "50 - 120", value: "50-120" },
        { label: "120 - 250", value: "120-250" },
        { label: "250+", value: "250-plus" },
      ],
    },
    {
      name: "format",
      type: "select",
      label: "Formuła",
      required: true,
      options: [
        { label: "Szybkie portrety gości", value: "portrety" },
        { label: "Jeden obraz sceny wydarzenia", value: "scena" },
        { label: "Jeszcze nie wiemy - doradźcie", value: "doradzcie" },
      ],
    },
    { name: "email", type: "email", label: "E-mail kontaktowy", required: true },
    {
      name: "status",
      type: "select",
      label: "Status",
      required: true,
      defaultValue: "nowe",
      options: [
        { label: "Nowe", value: "nowe" },
        { label: "Wycenione", value: "wycenione" },
        { label: "Potwierdzone", value: "potwierdzone" },
        { label: "Odrzucone", value: "odrzucone" },
      ],
    },
  ],
};
