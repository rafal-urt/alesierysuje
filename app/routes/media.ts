import path from "node:path";
import { createReadStream, existsSync, statSync } from "node:fs";
import type { Route } from "./+types/media";

const MEDIA_DIR = path.resolve(process.cwd(), "media");

const MIME: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
};

// Serwuje uploady Payloada (staticDir: media/) pod /media/<plik>.
export async function loader({ params }: Route.LoaderArgs) {
  const name = params["*"] ?? "";
  // tylko płaskie nazwy plików - bez traversal
  if (!name || name.includes("/") || name.includes("..")) {
    throw new Response("Not found", { status: 404 });
  }
  const filePath = path.join(MEDIA_DIR, name);
  if (!existsSync(filePath) || !statSync(filePath).isFile()) {
    throw new Response("Not found", { status: 404 });
  }
  const type = MIME[path.extname(name).toLowerCase()] ?? "application/octet-stream";
  const stream = createReadStream(filePath);
  return new Response(stream as unknown as ReadableStream, {
    headers: {
      "Content-Type": type,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
