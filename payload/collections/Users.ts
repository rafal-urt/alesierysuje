import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  labels: { singular: "Użytkownik", plural: "Użytkownicy" },
  auth: true,
  admin: { useAsTitle: "email" },
  fields: [],
};
