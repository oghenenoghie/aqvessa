import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/** The type-* utilities form one group, so a later one replaces an earlier one. */
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
