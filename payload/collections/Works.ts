import type { CollectionConfig } from "payload";

export const Works: CollectionConfig = {
  slug: "works",
  labels: { singular: "Praca", plural: "Prace" },
  access: { read: () => true },
  admin: { useAsTitle: "title", defaultColumns: ["title", "category", "order"] },
  defaultSort: "order",
  fields: [
    { name: "title", type: "text", label: "Tytuł", required: true },
    {
      name: "caption",
      type: "text",
      label: "Podpis (np. Marta i Paweł - Zamek Gniew, sierpień)",
      required: true,
    },
    {
      name: "category",
      type: "select",
      label: "Kategoria",
      required: true,
      options: [
        { label: "Wesele", value: "wesele" },
        { label: "Event", value: "event" },
        { label: "Portret", value: "portret" },
      ],
    },
    { name: "image", type: "upload", relationTo: "media", label: "Skan pracy" },
    { name: "bigFormat", type: "checkbox", label: "Duży format w galerii", defaultValue: false },
    { name: "order", type: "number", label: "Kolejność", defaultValue: 0 },
    {
      type: "collapsible",
      label: "Placeholder akwareli (dopóki nie ma skanu)",
      fields: [
        { name: "seed", type: "number", label: "Seed", defaultValue: 1 },
        { name: "palette", type: "number", label: "Paleta (0-4)", defaultValue: 0, min: 0, max: 4 },
      ],
    },
  ],
};
