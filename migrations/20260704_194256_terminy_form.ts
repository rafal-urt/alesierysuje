import { type MigrateUpArgs, type MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`ALTER TABLE \`inquiries\` ADD \`guests\` text;`)
  await db.run(sql`ALTER TABLE \`inquiries\` ADD \`preferred_package\` text;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`ALTER TABLE \`inquiries\` DROP COLUMN \`guests\`;`)
  await db.run(sql`ALTER TABLE \`inquiries\` DROP COLUMN \`preferred_package\`;`)
}
