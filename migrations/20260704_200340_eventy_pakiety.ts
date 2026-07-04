import { type MigrateUpArgs, type MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`ALTER TABLE \`settings\` ADD \`event_packages_networking\` numeric;`)
  await db.run(sql`ALTER TABLE \`settings\` ADD \`event_packages_gala\` numeric;`)
  await db.run(sql`ALTER TABLE \`settings\` ADD \`event_packages_konferencja\` numeric;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`ALTER TABLE \`settings\` DROP COLUMN \`event_packages_networking\`;`)
  await db.run(sql`ALTER TABLE \`settings\` DROP COLUMN \`event_packages_gala\`;`)
  await db.run(sql`ALTER TABLE \`settings\` DROP COLUMN \`event_packages_konferencja\`;`)
}
