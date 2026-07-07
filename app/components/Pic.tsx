// <img> z automatycznym wariantem AVIF: dla /gfx/*.webp|jpg serwuje siostrzany
// .avif (generowany przez scripts/optimize-images.ts), starsze przeglądarki
// dostają oryginał. Używać dla zdjęć z public/gfx.
export function Pic({
  src,
  alt,
  width,
  height,
  loading,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
}) {
  const avif = src.replace(/\.(webp|jpe?g)$/i, ".avif");
  const img = <img src={src} alt={alt} width={width} height={height} loading={loading} />;
  if (avif === src) return img;
  return (
    <picture>
      <source type="image/avif" srcSet={avif} />
      {img}
    </picture>
  );
}
