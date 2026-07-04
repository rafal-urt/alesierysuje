import { wcSVG } from "~/lib/watercolor";

// Placeholder prawdziwych skanów prac - później podmieniany na obrazy z Payload.
export function WatercolorPlaceholder({
  seed,
  palette,
  width = 300,
  height = 380,
}: {
  seed: number;
  palette: number;
  width?: number;
  height?: number;
}) {
  return <div dangerouslySetInnerHTML={{ __html: wcSVG(seed, palette, width, height) }} />;
}
