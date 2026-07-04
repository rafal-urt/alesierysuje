import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Panel admina serwuje wyłącznie /admin i /api Payloada.
  reactStrictMode: true,
  async redirects() {
    return [{ source: "/", destination: "/admin", permanent: false }];
  },
};

export default withPayload(nextConfig);
