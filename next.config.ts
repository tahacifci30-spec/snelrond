import type { NextConfig } from "next";

const common = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

/**
 * Wat de site mag laden. Alles komt van onszelf; alleen het adres opzoeken in het klantformulier gaat naar PDOK.
 * Next.js zet kleine stukjes script in de pagina zelf, daarom staat 'unsafe-inline' aan. In ontwikkeling zijn
 * ook 'unsafe-eval' en een websocket nodig voor het live verversen.
 */
const dev = process.env.NODE_ENV !== "production";
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${dev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  `connect-src 'self' https://api.pdok.nl${dev ? " ws: wss:" : ""}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");
common.push({ key: "Content-Security-Policy", value: csp });

const nextConfig: NextConfig = {
  // Alleen in ontwikkeling: zo opent u de testversie ook op uw telefoon, via het adres van deze computer op
  // hetzelfde wifi-netwerk (bijvoorbeeld http://192.168.68.121:3000). Zonder dit blokkeert Next.js dat.
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*", "172.*.*.*"],
  // Alleen voor een tweede, aparte testserver; standaard blijft het gewone .next.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  experimental: {
    // Geen bouwcache op schijf: daarin bewaart Turbopack ook de waarden van geheimen zoals AUTH_SECRET, en daar
    // valt de geheimen-scan van Netlify over. De cache komt nooit online, maar zo ontstaat hij niet eens.
    // Gevolg: elke bouw begint koud. Lokaal ontwikkelen (next dev) houdt zijn eigen cache.
    turbopackFileSystemCacheForBuild: false,
  },
  async headers() {
    return [
      { source: "/:path*", headers: common },
      // Alles behalve de intake mag niet in een iframe: het klantformulier is bedoeld als insluitbare widget.
      {
        source: "/((?!intake).*)",
        headers: [{ key: "X-Frame-Options", value: "DENY" }],
      },
    ];
  },
};

export default nextConfig;
