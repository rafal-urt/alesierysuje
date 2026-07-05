// Generuje favicony z sygnetu "AS" (public/gfx/znak-as.png):
// favicon.svg + favicon.ico + apple-touch-icon.png.
// Uruchomienie: npx payload run scripts/generate-favicon.ts
import path from "node:path";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const PUB = path.resolve(dirname, "../public");
const MASTER = path.join(PUB, "gfx", "znak-as.png");

// ICO = nagłówek + 1 wpis katalogu + PNG (PNG-in-ICO, wspierane od Visty)
function pngToIco(png: Buffer, size: number): Buffer {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2); // typ: icon
  header.writeUInt16LE(1, 4); // liczba obrazów
  const entry = Buffer.alloc(16);
  entry.writeUInt8(size >= 256 ? 0 : size, 0);
  entry.writeUInt8(size >= 256 ? 0 : size, 1);
  entry.writeUInt16LE(1, 4); // color planes
  entry.writeUInt16LE(32, 6); // bpp
  entry.writeUInt32LE(png.length, 8);
  entry.writeUInt32LE(22, 12); // offset danych
  return Buffer.concat([header, entry, png]);
}

// favicon.ico: 32 px
const png32 = await sharp(MASTER).resize(32, 32).png().toBuffer();
await fs.writeFile(path.join(PUB, "favicon.ico"), pngToIco(png32, 32));

// favicon.svg: 64 px PNG osadzony w SVG (ostry sygnet, maly plik)
const png64 = await sharp(MASTER).resize(64, 64).png().toBuffer();
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><image width="64" height="64" href="data:image/png;base64,${png64.toString("base64")}"/></svg>`;
await fs.writeFile(path.join(PUB, "favicon.svg"), svg);

// apple-touch-icon: 180 px z lekkim marginesem (iOS sam zaokragla rogi)
await sharp(MASTER)
  .resize(160, 160)
  .extend({ top: 10, bottom: 10, left: 10, right: 10, background: "#ffffff" })
  .png()
  .toFile(path.join(PUB, "apple-touch-icon.png"));

console.log("favicony z sygnetu AS wygenerowane");
