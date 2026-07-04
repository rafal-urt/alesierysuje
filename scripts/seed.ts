// Seed bazy danymi z prototypu. Uruchomienie: npm run seed (idempotentny).
import { getPayload } from "payload";
import config from "../payload.config";
import { seedIfEmpty } from "../payload/seedData";

// Top-level await: `payload run` importuje moduł i czeka na jego ewaluację,
// bez tego proces kończy się zanim seed dobiegnie końca.
const payload = await getPayload({ config });
await seedIfEmpty(payload);
process.exit(0);
