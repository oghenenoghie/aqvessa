import Image from "next/image";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import lockupDark from "../../public/brand/aqvessa-lockup-dark.png";
import lockupLight from "../../public/brand/aqvessa-lockup-light.png";

/**
 * The Aqvessa lockup. Each PNG carries its own ground, so it must sit on `ground` (light) or the
 * deep band (reversed). Keep it 120px wide or more, with the height of the A clear around it.
 */
export function Logo({ tone = "ground", width = 128, className }: { tone?: "ground" | "deep"; width?: number; className?: string }) {
  const height = Math.round((lockupLight.height / lockupLight.width) * width);
  return (
    <a href="/" aria-label={`${SITE.name}, home`} className={cn("flex flex-none rounded-sm no-underline", className)}>
      {tone === "deep" ? (
        <Image src={lockupDark} alt="" width={width} height={height} />
      ) : (
        <>
          <Image src={lockupLight} alt="" width={width} height={height} loading="eager" className="theme-light-only" />
          <Image src={lockupDark} alt="" width={width} height={height} loading="eager" className="theme-dark-only" />
        </>
      )}
    </a>
  );
}
