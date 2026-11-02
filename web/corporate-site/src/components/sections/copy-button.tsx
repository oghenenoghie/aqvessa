"use client";

import { useEffect, useRef, useState } from "react";

/** Copies `value`; if the clipboard is unavailable, selects the sibling `.copy-value` text instead. */
export function CopyButton({ value, label }: { value: string; label: string }) {
  const [state, setState] = useState<"idle" | "copied" | "selected">("idle");
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (state === "idle") return;
    const t = setTimeout(() => setState("idle"), 1600);
    return () => clearTimeout(t);
  }, [state]);

  function selectFallback() {
    const el = ref.current?.parentElement?.querySelector(".copy-value");
    const sel = window.getSelection();
    if (!el || !sel) return;
    const range = document.createRange();
    range.selectNodeContents(el);
    sel.removeAllRanges();
    sel.addRange(range);
    setState("selected");
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setState("copied");
    } catch {
      selectFallback();
    }
  }

  return (
    <button
      ref={ref}
      type="button"
      onClick={copy}
      aria-label={`Copy ${label}`}
      className="cursor-pointer rounded-md border border-deep-line bg-transparent px-3 py-1 type-label text-deep-brand transition-colors duration-120 hover:border-deep-brand"
    >
      <span aria-live="polite">{state === "copied" ? "Copied" : state === "selected" ? "Selected" : "Copy"}</span>
    </button>
  );
}
