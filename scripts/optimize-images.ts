// Generuje warianty AVIF dla zdjęć w public/gfx (prace/, tla/ i luzem),
// pomijając pliki, które już mają siostrzany .avif oraz grafiki z kanałem
// alpha używane jako logo/znaki. Uruchomienie: npx payload run scripts/optimize-images.ts
import path from "node:path";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const GFX = path.resolve(dirname, "../public/gfx");
const SKIP = new Set(["logo.png", "znak-as.png"]);

async function* walk(dir: string): AsyncGenerator<string> {
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else yield p;
  }
}

let before = 0;
let after = 0;
let count = 0;
for await (const file of walk(GFX)) {
  const ext = path.extname(file).toLowerCase();
  if (![".webp", ".jpg", ".jpeg"].includes(ext)) continue;
  if (SKIP.has(path.basename(file))) continue;
  const avif = file.slice(0, -ext.length) + ".avif";
  try {
    await fs.access(avif);
    continue; // już istnieje
  } catch {
    /* brak - generujemy */
  }
  const src = await fs.stat(file);
  await sharp(file).avif({ quality: 50, effort: 6 }).toFile(avif);
  const out = await fs.stat(avif);
  if (out.size >= src.size) {
    // AVIF większy niż oryginał - nie ma sensu go serwować
    await fs.unlink(avif);
    console.log(`pomijam (avif większy): ${path.relative(GFX, file)}`);
    continue;
  }
  before += src.size;
  after += out.size;
  count += 1;
  console.log(
    `${path.relative(GFX, file)}: ${Math.round(src.size / 1024)} kB -> ${Math.round(out.size / 1024)} kB`,
  );
}
console.log(
  `\nRazem: ${count} plików, ${Math.round(before / 1024)} kB -> ${Math.round(after / 1024)} kB (-${Math.round((1 - after / before) * 100)}%)`,
);
