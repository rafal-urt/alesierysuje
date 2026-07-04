import type { CollectionConfig } from "payload";

// Dostępność terminów. Dni bez rekordu = wolne (default).
export const Availability: CollectionConfig = {
  slug: "availability",
  labels: { singular: "Termin", plural: "Dostępność terminów" },
  access: { read: () => true },
  admin: { useAsTitle: "date", defaultColumns: ["date", "status"] },
  defaultSort: "date",
  fields: [
    {
      name: "date",
      type: "date",
      label: "Data",
      required: true,
      unique: true,
      admin: { date: { pickerAppearance: "dayOnly", displayFormat: "d MMMM yyyy" } },
    },
    {
      name: "status",
      type: "select",
      label: "Status",
      required: true,
      defaultValue: "zajety",
      options: [
        { label: "Wolny", value: "wolny" },
        { label: "Zajęty", value: "zajety" },
        { label: "Zablokowany", value: "zablokowany" },
      ],
    },
  ],
};
