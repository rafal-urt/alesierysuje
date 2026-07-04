// Generuje favicony z akwarelową kropką logo: favicon.svg + favicon.ico + apple-touch-icon.png.
// Uruchomienie: npx payload run scripts/generate-favicon.ts
import path from "node:path";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const PUB = path.resolve(dirname, "../public");

// Akwarelowy blob jak .logo .dot w nav - filtr feTurbulence daje nieregularną krawędź.
function faviconSvg(size: number, withPaper = false): string {
  return `<svg viewBox="0 0 64 64" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  ${withPaper ? '<rect width="64" height="64" fill="#FAF7F2"/>' : ""}
  <defs>
    <filter id="w" x="-25%" y="-25%" width="150%" height="150%">
      <feTurbulence type="fractalNoise" baseFrequency="0.09 0.11" numOctaves="2" seed="7" result="t"/>
      <feDisplacementMap in="SourceGraphic" in2="t" scale="5"/>
      <feGaussianBlur stdDeviation="0.4"/>
    </filter>
  </defs>
  <g filter="url(#w)">
    <ellipse cx="32" cy="31" rx="24" ry="22" fill="#7FA8C9" fill-opacity="0.95" transform="rotate(-14 32 31)"/>
    <ellipse cx="41" cy="41" rx="13" ry="11" fill="#D98BA3" fill-opacity="0.5" transform="rotate(22 41 41)"/>
    <ellipse cx="21" cy="23" rx="11" ry="9" fill="#2E5E8A" fill-opacity="0.35" transform="rotate(-30 21 23)"/>
  </g>
  <text x="32" y="43" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="32" fill="#FAF7F2">a</text>
</svg>`;
}

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

await fs.writeFile(path.join(PUB, "favicon.svg"), faviconSvg(64));

const png32 = await sharp(Buffer.from(faviconSvg(32))).resize(32, 32).png().toBuffer();
await fs.writeFile(path.join(PUB, "favicon.ico"), pngToIco(png32, 32));

const apple = await sharp(Buffer.from(faviconSvg(180, true))).resize(180, 180).png().toBuffer();
await fs.writeFile(path.join(PUB, "apple-touch-icon.png"), apple);

console.log("favicon.svg, favicon.ico (32px), apple-touch-icon.png (180px) - gotowe");
