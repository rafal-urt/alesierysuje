// Proceduralne akwarele - port funkcji wcSVG z docs/prototyp.html.
// Deterministyczne po seedzie, więc SSR i klient renderują identyczny SVG.

function mulberry32(a: number) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const PALETTES = [
  ["#7FA8C9", "#4A7BA6", "#A8C6DD", "#2E5E8A"],
  ["#D98BA3", "#C25E7E", "#EBB7C5", "#8E3A56"],
  ["#D9A85C", "#B77E33", "#E8CB93", "#8A5A22"],
  ["#8FB08A", "#5E8A5E", "#BFD4B8", "#3E6647"],
  ["#9B8FC0", "#6F5FA0", "#C6BEDD", "#4A3D78"],
] as const;

export function wcSVG(seed: number, pi: number, w = 300, h = 380): string {
  const r = mulberry32(seed);
  const pal = PALETTES[pi % PALETTES.length];
  let blobs = "";
  const n = 6 + Math.floor(r() * 4);
  for (let i = 0; i < n; i++) {
    const cx = w * (0.15 + r() * 0.7);
    const cy = h * (0.12 + r() * 0.76);
    const rx = w * (0.1 + r() * 0.24);
    const ry = h * (0.07 + r() * 0.2);
    const c = pal[Math.floor(r() * pal.length)];
    const o = (0.18 + r() * 0.3).toFixed(2);
    const rot = Math.floor(r() * 360);
    blobs +=
      '<ellipse cx="' + cx.toFixed(0) + '" cy="' + cy.toFixed(0) +
      '" rx="' + rx.toFixed(0) + '" ry="' + ry.toFixed(0) +
      '" fill="' + c + '" fill-opacity="' + o +
      '" transform="rotate(' + rot + " " + cx.toFixed(0) + " " + cy.toFixed(0) + ')"/>';
  }
  const gl = pal[3];
  blobs +=
    '<rect x="' + w * 0.1 + '" y="' + h * 0.72 + '" width="' + w * 0.8 +
    '" height="3" fill="' + gl + '" fill-opacity="0.25"/>';
  for (let i = 0; i < 3; i++) {
    const px = w * (0.3 + r() * 0.4);
    blobs +=
      '<ellipse cx="' + px.toFixed(0) + '" cy="' + (h * 0.62).toFixed(0) +
      '" rx="' + (6 + r() * 5).toFixed(0) + '" ry="' + (20 + r() * 16).toFixed(0) +
      '" fill="' + gl + '" fill-opacity="0.35"/>';
  }
  const fid = "f" + seed + "_" + w;
  return (
    '<svg viewBox="0 0 ' + w + " " + h +
    '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="akwarela - malowanie na żywo">' +
    '<defs><filter id="' + fid + '" x="-20%" y="-20%" width="140%" height="140%">' +
    '<feTurbulence type="fractalNoise" baseFrequency="0.012 0.02" numOctaves="2" seed="' + seed + '" result="t"/>' +
    '<feDisplacementMap in="SourceGraphic" in2="t" scale="26"/>' +
    '<feGaussianBlur stdDeviation="1.4"/></filter></defs>' +
    '<rect width="' + w + '" height="' + h + '" fill="#FDFCF9"/>' +
    '<g filter="url(#' + fid + ')">' + blobs + "</g></svg>"
  );
}
