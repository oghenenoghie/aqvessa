import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <main id="main" tabIndex={-1} className="focus:outline-none">
      <section className="py-16">
        <div className="wrap grid gap-4">
          <p className="type-mono text-ink-muted">404</p>
          <h1 className="type-heading-lg">Page not found</h1>
          <p className="lede">The page you asked for does not exist or has moved. Check the address, or start again from the home page.</p>
          <div className="pt-4">
            <ButtonLink href="/">Go to the home page</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
