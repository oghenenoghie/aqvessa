"use client";

import { useEffect } from "react";

/**
 * Adds one-time, viewport-triggered reveals without wrapping semantic sections
 * or changing the server-rendered page structure.
 */
export function MotionEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main > section, main > div"),
    );
    const cards = Array.from(
      document.querySelectorAll<HTMLElement>(".frontier-card, .frontier-tile"),
    );

    sections.forEach((element) => element.setAttribute("data-motion-reveal", ""));
    cards.forEach((element) => element.setAttribute("data-motion-card", ""));
    document.documentElement.classList.add("motion-enabled");

    if (!("IntersectionObserver" in window)) {
      [...sections, ...cards].forEach((element) => element.classList.add("motion-visible"));
      return () => document.documentElement.classList.remove("motion-enabled");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("motion-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -36px 0px" },
    );

    [...sections, ...cards].forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-enabled");
    };
  }, []);

  return null;
}
