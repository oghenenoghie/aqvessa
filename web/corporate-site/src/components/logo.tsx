import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import lockupDark from "../../public/brand/aqvessa-lockup-dark.png";
import lockupLight from "../../public/brand/aqvessa-lockup-light.png";

/**
 * The full lockup, swapped with the theme. Each PNG carries its own ground, equal to `ground` in
 * its theme, so the lockup must sit directly on `ground`. Keep it 120px wide or more and keep the
 * height of the A clear on every side (about 0.6 of the lockup's height).
 */
export function Logo({
  width = 128,
  className,
  eager = false,
}: {
  width?: number;
  className?: string;
  /** Load immediately, for a lockup above the fold. */
  eager?: boolean;
}) {
  if (width < 120) throw new Error("The full lockup must be at least 120px wide. Use the compact mark instead.");
  const height = Math.round((lockupLight.height / lockupLight.width) * width);
  return (
    <Link href="/" aria-label="Aqvessa home" className={cn("inline-flex shrink-0 rounded-sm", className)}>
      <Image
        src={lockupLight}
        alt=""
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        className="theme-light-only"
      />
      <Image
        src={lockupDark}
        alt=""
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        className="theme-dark-only"
      />
    </Link>
  );
}
