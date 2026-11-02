import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";
// The Vercel Toolbar runs on preview deployments only, so its origins are allowed only there.
const isPreview = process.env.VERCEL_ENV === "preview";
const toolbar = (...sources: string[]) => (isPreview ? sources : []);

/**
 * Content Security Policy without nonces. Nonces would make every page render on request, and
 * this site is fully static. Scripts may only come from this origin; inline scripts stay allowed
 * because Next.js streams page data in inline scripts and the theme script runs inline before
 * first paint. The site takes no user input, which keeps the inline-script risk low.
 */
const csp: Record<string, string[]> = {
  "default-src": ["'self'"],
  "script-src": ["'self'", "'unsafe-inline'", ...(isDev ? ["'unsafe-eval'"] : []), ...toolbar("https://vercel.live")],
  "style-src": ["'self'", "'unsafe-inline'", ...toolbar("https://vercel.live")],
  "img-src": ["'self'", "data:", "blob:", ...toolbar("https://vercel.live", "https://vercel.com")],
  "font-src": ["'self'", ...toolbar("https://vercel.live", "https://assets.vercel.com")],
  "connect-src": ["'self'", ...toolbar("https://vercel.live", "wss://ws-us3.pusher.com")],
  "frame-src": isPreview ? ["https://vercel.live"] : ["'none'"],
  "object-src": ["'none'"],
  "base-uri": ["'self'"],
  "form-action": ["'self'"],
  "frame-ancestors": ["'none'"],
};

const contentSecurityPolicy = Object.entries(csp)
  .map(([directive, sources]) => `${directive} ${sources.join(" ")}`)
  .join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  reactStrictMode: true,
  env: {
    // Read once at build time, so the footer year never makes a page dynamic.
    NEXT_PUBLIC_BUILD_YEAR: String(new Date().getFullYear()),
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
