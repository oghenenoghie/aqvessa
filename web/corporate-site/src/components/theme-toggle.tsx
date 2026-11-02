"use client";

import { Moon, Sun } from "lucide-react";
import { THEME_STORAGE_KEY } from "@/lib/theme";

function currentTheme(): "light" | "dark" {
  const forced = document.documentElement.getAttribute("data-theme");
  if (forced === "light" || forced === "dark") return forced;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/**
 * Switches between light and dark. The icon and label are swapped by CSS (theme-*-only), so the
 * server and client render the same markup and nothing mismatches on hydration.
 */
export function ThemeToggle() {
  function toggle() {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage can be blocked. The theme still applies for this page view.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="motion-colors inline-flex size-12 items-center justify-center rounded-md border border-hairline bg-surface text-ink hover:border-ink active:bg-surface-sunk disabled:cursor-not-allowed disabled:text-ink-muted"
    >
      <Moon aria-hidden="true" className="theme-light-only size-4" />
      <Sun aria-hidden="true" className="theme-dark-only size-4" />
      <span className="sr-only theme-light-only">Switch to dark theme</span>
      <span className="sr-only theme-dark-only">Switch to light theme</span>
    </button>
  );
}
