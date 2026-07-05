import { type MigrateUpArgs, type MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // Wygenerowany wariant kopiowal kolumne "company" ze starej tabeli, ktora jej
  // nie miala - kazdy start konczyl sie bledem. Reczna, bezpieczna wersja:
  // stare wartosci guests (przedzialy tekstowe) nie mapuja sie na liczbe -> NULL.
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`DROP TABLE IF EXISTS \`__new_inquiries\`;`)
  await db.run(sql`CREATE TABLE \`__new_inquiries\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`event_date\` text,
  	\`names\` text NOT NULL,
  	\`email\` text NOT NULL,
  	\`city\` text,
  	\`event_type\` text DEFAULT 'wesele' NOT NULL,
  	\`guests\` numeric,
  	\`company\` text,
  	\`preferred_package\` text,
  	\`status\` text DEFAULT 'nowe' NOT NULL,
  	\`details\` text,
  	\`notes\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`INSERT INTO \`__new_inquiries\`("id", "event_date", "names", "email", "city", "event_type", "guests", "company", "preferred_package", "status", "details", "notes", "updated_at", "created_at") SELECT "id", "event_date", "names", "email", "city", "event_type", NULL, NULL, "preferred_package", "status", "details", "notes", "updated_at", "created_at" FROM \`inquiries\`;`)
  await db.run(sql`DROP TABLE \`inquiries\`;`)
  await db.run(sql`ALTER TABLE \`__new_inquiries\` RENAME TO \`inquiries\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`inquiries_updated_at_idx\` ON \`inquiries\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`inquiries_created_at_idx\` ON \`inquiries\` (\`created_at\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_inquiries\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`event_date\` text,
  	\`names\` text NOT NULL,
  	\`email\` text NOT NULL,
  	\`city\` text,
  	\`event_type\` text DEFAULT 'wesele' NOT NULL,
  	\`guests\` text,
  	\`preferred_package\` text,
  	\`status\` text DEFAULT 'nowe' NOT NULL,
  	\`details\` text,
  	\`notes\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`INSERT INTO \`__new_inquiries\`("id", "event_date", "names", "email", "city", "event_type", "guests", "preferred_package", "status", "details", "notes", "updated_at", "created_at") SELECT "id", "event_date", "names", "email", "city", "event_type", "guests", "preferred_package", "status", "details", "notes", "updated_at", "created_at" FROM \`inquiries\`;`)
  await db.run(sql`DROP TABLE \`inquiries\`;`)
  await db.run(sql`ALTER TABLE \`__new_inquiries\` RENAME TO \`inquiries\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`inquiries_updated_at_idx\` ON \`inquiries\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`inquiries_created_at_idx\` ON \`inquiries\` (\`created_at\`);`)
}
