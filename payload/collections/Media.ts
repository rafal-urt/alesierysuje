import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  labels: { singular: "Plik", plural: "Media" },
  access: { read: () => true },
  upload: {
    staticDir: "media",
    imageSizes: [
      { name: "thumb", width: 480, height: undefined, position: "centre" },
      { name: "card", width: 900, height: undefined, position: "centre" },
      { name: "large", width: 1600, height: undefined, position: "centre" },
    ],
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      label: "Tekst alternatywny (opis dla SEO)",
      required: true,
    },
  ],
};
