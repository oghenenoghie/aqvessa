import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <Container className="py-16">
      <p className="type-mono text-ink-muted">404</p>
      <h1 className="mt-4 type-heading-lg text-ink">Page not found</h1>
      <p className="mt-4 max-w-prose type-body-lg text-ink-muted">
        The page you asked for does not exist or has moved. Check the address, or start again from the home page.
      </p>
      <ButtonLink href="/" className="mt-8">
        Go to the home page
      </ButtonLink>
    </Container>
  );
}
