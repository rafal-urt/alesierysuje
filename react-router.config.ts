import type { Config } from "@react-router/dev/config";
import { vercelPreset } from "@vercel/react-router/vite";
import { POSTS } from "./app/data/posts";

// SSR obowiązkowo - serwis SEO-first (CLAUDE.md zasada 3)
// Poniższe trasy nie biorą nic z Payloada, więc ich HTML powstaje przy buildzie:
// gość dostaje je z CDN-u i nigdy nie czeka na zimny start funkcji.
// Gdy któraś zacznie zasilać się z CMS-u (np. realizacje po podpięciu trwałego
// storage'u mediów, albo blog w Fazie 3), usuń ją z tej listy.
const PRERENDER = [
  "/o-mnie",
  "/polityka-prywatnosci",
  "/realizacje",
  "/blog",
  ...POSTS.map((post) => `/blog/${post.slug}`),
];

export default {
  ssr: true,
  // preset aktywny tylko na Vercelu, lokalny build zostaje standardowy
  presets: process.env.VERCEL ? [vercelPreset()] : [],
  prerender: PRERENDER,
} satisfies Config;
