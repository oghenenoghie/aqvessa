import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/**
 * Open Graph card for a route: the lockup, the page label and the page title on the light ground.
 * An image renderer cannot read CSS variables, so the light-theme token values are repeated here.
 * Keep them in step with globals.css: ground, ink, ink-muted, brand-text, hairline.
 */
const TOKENS = { ground: "#f6f4ef", ink: "#16181d", inkMuted: "#5b6472", brandText: "#b5440a", hairline: "#d9d5cb" } as const;

const LOCKUP = { width: 580, height: 180 };

export async function renderOgCard({ eyebrow, title }: { eyebrow: string; title: string }) {
  const root = process.cwd();
  const [logo, bold] = await Promise.all([
    readFile(join(root, "public/brand/aqvessa-lockup-light.png")),
    readFile(join(root, "node_modules/@fontsource/inter-tight/files/inter-tight-latin-700-normal.woff")),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: TOKENS.ground,
          color: TOKENS.ink,
          padding: "64px 72px",
          fontFamily: "Inter Tight",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="" width={LOCKUP.width * 0.5} height={LOCKUP.height * 0.5} />
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, letterSpacing: "0.12em", textTransform: "uppercase", color: TOKENS.brandText }}>
            <div style={{ width: 40, height: 4, background: TOKENS.brandText }} />
            {eyebrow}
          </div>
          <div style={{ fontSize: 84, lineHeight: 1.05, letterSpacing: "-0.03em", fontWeight: 700, maxWidth: 1000 }}>{title}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", borderTop: `2px solid ${TOKENS.hairline}`, paddingTop: 24, fontSize: 26, color: TOKENS.inkMuted }}>
          <span>AQVESSA LIMITED</span>
          <span>aqvessa.org</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630, fonts: [{ name: "Inter Tight", data: bold, weight: 700, style: "normal" }] },
  );
}
