import path from "node:path";
import { fileURLToPath } from "node:url";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { buildConfig } from "payload";
import sharp from "sharp";

import { Users } from "./payload/collections/Users";
import { Media } from "./payload/collections/Media";
import { Works } from "./payload/collections/Works";
import { Reviews } from "./payload/collections/Reviews";
import { Availability } from "./payload/collections/Availability";
import { Inquiries } from "./payload/collections/Inquiries";
import { Briefs } from "./payload/collections/Briefs";
import { Settings } from "./payload/globals/Settings";
import { migrations } from "./migrations";
import { seedIfEmpty } from "./payload/seedData";

const dirname = path.dirname(fileURLToPath(import.meta.url));

// Na Vercelu (serverless) zapisywalny jest tylko /tmp - baza per instancja,
// dopóki DATABASE_URI nie wskaże trwałej bazy (Turso) - patrz docs/DEPLOY.md.
const defaultDbUrl = process.env.VERCEL
  ? "file:/tmp/alesierysuje.db"
  : `file:${path.resolve(dirname, "dev.db")}`;

export default buildConfig({
  secret:
    process.env.PAYLOAD_SECRET ||
    (process.env.VERCEL ? "tymczasowy-sekret-ustaw-PAYLOAD_SECRET" : ""),
  db: sqliteAdapter({
    client: {
      // akceptujemy obie konwencje nazw: nasza (DATABASE_*) i domyslna Turso (TURSO_*)
      url: process.env.DATABASE_URI || process.env.TURSO_DATABASE_URL || defaultDbUrl,
      ...(process.env.DATABASE_AUTH_TOKEN || process.env.TURSO_AUTH_TOKEN
        ? { authToken: process.env.DATABASE_AUTH_TOKEN || process.env.TURSO_AUTH_TOKEN }
        : {}),
    },
    // na produkcji (bez push) schemat wchodzi przez migracje przy starcie
    prodMigrations: migrations,
  }),
  collections: [Users, Media, Works, Reviews, Availability, Inquiries, Briefs],
  globals: [Settings],
  sharp,
  admin: {
    user: "users",
    importMap: {
      baseDir: path.resolve(dirname, "admin"),
      importMapFile: path.resolve(dirname, "admin/app/(payload)/admin/importMap.js"),
    },
  },
  upload: {
    limits: { fileSize: 20_000_000 },
  },
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  async onInit(payload) {
    // pusta baza (np. świeży /tmp na serverless) dostaje dane startowe
    if (process.env.SEED_ON_INIT !== "false") {
      try {
        await seedIfEmpty(payload);
      } catch (err) {
        payload.logger.error({ err }, "Seed przy starcie nie powiódł się");
      }
    }
    // dodatkowy administrator z env (ADMIN_EMAIL + ADMIN_PASSWORD) - bez hasel w repo;
    // idempotentne, wiec dziala tez na ulotnej bazie serverless (tworzy przy kazdym starcie)
    if (process.env.ADMIN_EMAIL && process.env.ADMIN_PASSWORD) {
      try {
        const existing = await payload.find({
          collection: "users",
          where: { email: { equals: process.env.ADMIN_EMAIL } },
          limit: 1,
        });
        if (existing.docs.length === 0) {
          await payload.create({
            collection: "users",
            data: { email: process.env.ADMIN_EMAIL, password: process.env.ADMIN_PASSWORD },
          });
          payload.logger.info(`Utworzono administratora ${process.env.ADMIN_EMAIL} (z env)`);
        }
      } catch (err) {
        payload.logger.error({ err }, "Nie udało się utworzyć administratora z env");
      }
    }
  },
});
