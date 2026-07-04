import type { CSSProperties } from "react";

const WASHES = {
  blue: "var(--color-wash-blue)",
  rose: "var(--color-wash-rose)",
  ochre: "var(--color-wash-ochre)",
  green: "var(--color-wash-green)",
} as const;

// Rozmyta plama akwarelowa w tle sekcji (prototyp: .stain / .stain.bloom).
export function WatercolorStain({
  color,
  width,
  height,
  bloom = false,
  style,
}: {
  color: keyof typeof WASHES;
  width: number;
  height: number;
  bloom?: boolean;
  style?: CSSProperties;
}) {
  return (
    <div
      className={bloom ? "stain bloom" : "stain"}
      aria-hidden="true"
      style={{
        width,
        height,
        background: `radial-gradient(circle, ${WASHES[color]}, transparent 70%)`,
        ...style,
      }}
    />
  );
}
