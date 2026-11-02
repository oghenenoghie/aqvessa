"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Container } from "@/components/container";
import { buttonVariants } from "@/components/ui/button";

/** Shown if a page fails while rendering in the browser. The layout, header and footer stay. */
export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="py-16">
      <p className="type-label text-signal-danger">Error</p>
      <h1 className="mt-4 type-heading-lg text-ink">This page did not load</h1>
      <p className="mt-4 max-w-prose type-body-lg text-ink-muted">
        Something went wrong while showing this page. Try again, or go back to the home page.
      </p>
      {error.digest && <p className="mt-4 type-mono-sm text-ink-muted">Reference: {error.digest}</p>}
      <div className="mt-8 flex flex-wrap gap-4">
        <button type="button" onClick={reset} className={buttonVariants()}>
          Try again
        </button>
        <Link href="/" className={buttonVariants({ variant: "secondary" })}>
          Go to the home page
        </Link>
      </div>
    </Container>
  );
}
