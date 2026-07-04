// Czyści kolekcję availability i nakłada zajęte terminy z payload/seedData.ts.
// Uruchomienie: npx payload run scripts/reset-availability.ts
import { getPayload } from "payload";
import config from "../payload.config";
import { TAKEN_DATES } from "../payload/seedData";

const payload = await getPayload({ config });

const existing = await payload.find({ collection: "availability", limit: 1000, pagination: false });
for (const doc of existing.docs) {
  await payload.delete({ collection: "availability", id: doc.id });
}
payload.logger.info(`Usunięto ${existing.docs.length} starych rekordów dostępności`);

for (const date of TAKEN_DATES) {
  await payload.create({ collection: "availability", data: { date, status: "zajety" } });
}
payload.logger.info(`Oznaczono ${TAKEN_DATES.length} zajętych dni`);
process.exit(0);
