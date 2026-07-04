import type { Config } from "@react-router/dev/config";
import { vercelPreset } from "@vercel/react-router/vite";

export default {
  // SSR obowiązkowo - serwis SEO-first (CLAUDE.md zasada 3)
  ssr: true,
  // preset aktywny tylko na Vercelu, lokalny build zostaje standardowy
  presets: process.env.VERCEL ? [vercelPreset()] : [],
} satisfies Config;
