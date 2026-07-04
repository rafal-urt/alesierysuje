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

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || "",
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || `file:${path.resolve(dirname, "dev.db")}`,
    },
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
});
