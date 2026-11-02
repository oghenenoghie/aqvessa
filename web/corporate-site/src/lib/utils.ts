import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge needs to know the custom type utilities form one group, so that a later
 * `type-heading-lg` replaces an earlier `type-body` instead of both being kept.
 */
const twMerge = extendTailwindMerge<"aqvessa-type">({
  extend: {
    classGroups: {
      "aqvessa-type": [
        {
          type: [
            "display-xl",
            "display-lg",
            "heading-lg",
            "heading-md",
            "body-lg",
            "body",
            "body-sm",
            "label",
            "descriptor",
            "caption",
            "mono",
            "mono-sm",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
