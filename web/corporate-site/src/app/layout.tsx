import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { IconSprite } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { UtilityBar } from "@/components/utility-bar";
import { SITE } from "@/lib/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-space-grotesk", display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400"], variable: "--font-jetbrains-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name}: technology and software engineering`, template: `%s · ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
};

export const viewport: Viewport = {
  themeColor: "#101318",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-NG" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <IconSprite />
        <UtilityBar />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
