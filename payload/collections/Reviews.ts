import type { CollectionConfig } from "payload";

export const Reviews: CollectionConfig = {
  slug: "reviews",
  labels: { singular: "Opinia", plural: "Opinie" },
  access: { read: () => true },
  admin: { useAsTitle: "author", defaultColumns: ["author", "source", "date", "rating"] },
  defaultSort: "-date",
  fields: [
    { name: "author", type: "text", label: "Autor", required: true },
    { name: "text", type: "textarea", label: "Treść opinii", required: true },
    {
      name: "source",
      type: "select",
      label: "Źródło",
      required: true,
      defaultValue: "wesele-z-klasa",
      options: [
        { label: "Wesele z klasą", value: "wesele-z-klasa" },
        { label: "Google", value: "google" },
      ],
    },
    { name: "date", type: "date", label: "Data", required: true },
    { name: "location", type: "text", label: "Lokalizacja (np. wesele, Kaszuby)" },
    { name: "rating", type: "number", label: "Ocena", defaultValue: 5, min: 1, max: 5 },
  ],
};
