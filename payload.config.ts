import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { buildConfig } from "payload";

// Kolekcje (works, reviews, availability, inquiries, briefs, settings)
// dochodzą w Etapie 3 - patrz docs/SPEC.md sekcja 3.
export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || "",
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || "file:./dev.db",
    },
  }),
  collections: [],
  typescript: {
    outputFile: "payload-types.ts",
  },
});
