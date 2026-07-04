// Generuje obrazy OG (1200x630) per strona do public/og/.
// Uruchomienie: npx payload run scripts/generate-og.ts (sharp rasteryzuje SVG).
import path from "node:path";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(dirname, "../public/og");

const PAGES: { file: string; lines: string[]; sub: string }[] = [
  { file: "default", lines: ["Malowanie na żywo,", "które zostaje na zawsze."], sub: "alesierysuje.pl" },
  { file: "home", lines: ["Malowanie na żywo,", "które zostaje na zawsze."], sub: "alesierysuje.pl" },
  { file: "wesele", lines: ["Live painting na wesele -", "portrety gości na żywo."], sub: "alesierysuje.pl/live-painting-wesele" },
  { file: "eventy", lines: ["Live art na event firmowy -", "malowanie na żywo."], sub: "alesierysuje.pl/live-painting-eventy" },
  { file: "portrety", lines: ["Portrety na zamówienie -", "portret ze zdjęcia."], sub: "alesierysuje.pl/portrety-na-zamowienie" },
  { file: "realizacje", lines: ["Realizacje - malowanie", "na żywo i portrety."], sub: "alesierysuje.pl/realizacje" },
  { file: "cennik", lines: ["Cennik - live painting", "i portrety na zamówienie."], sub: "alesierysuje.pl/cennik" },
  { file: "o-mnie", lines: ["Aleksandra Sienica -", "maluję na żywo."], sub: "alesierysuje.pl/o-mnie" },
  { file: "terminy", lines: ["Wolne terminy live paintingu -", "kalendarz do końca 2027."], sub: "alesierysuje.pl/terminy" },
];

function ogSvg(lines: string[], sub: string): string {
  const text = lines
    .map(
      (l, i) =>
        `<text x="90" y="${300 + i * 78}" font-family="Georgia, serif" font-size="58" fill="#2B2B2B">${l}</text>`,
    )
    .join("");
  return `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#FAF7F2"/>
  <ellipse cx="1050" cy="80" rx="330" ry="220" fill="#7FA8C9" fill-opacity="0.35"/>
  <ellipse cx="1130" cy="540" rx="300" ry="200" fill="#D98BA3" fill-opacity="0.3"/>
  <ellipse cx="180" cy="600" rx="280" ry="170" fill="#D9A85C" fill-opacity="0.25"/>
  <ellipse cx="60" cy="60" rx="200" ry="140" fill="#8FB08A" fill-opacity="0.25"/>
  <circle cx="96" cy="146" r="14" fill="#7FA8C9"/>
  <text x="126" y="160" font-family="Georgia, serif" font-style="italic" font-size="40" fill="#2B2B2B">alesierysuje</text>
  ${text}
  <text x="90" y="560" font-family="Helvetica, Arial, sans-serif" font-size="26" letter-spacing="2" fill="#9A938A">${sub}</text>
</svg>`;
}

await fs.mkdir(OUT, { recursive: true });
for (const p of PAGES) {
  const png = await sharp(Buffer.from(ogSvg(p.lines, p.sub))).png().toBuffer();
  await fs.writeFile(path.join(OUT, `${p.file}.png`), png);
  console.log(`og: ${p.file}.png (${(png.length / 1024).toFixed(0)} kB)`);
}
