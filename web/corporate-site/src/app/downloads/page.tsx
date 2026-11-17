import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { SectionHead, sectionClass } from "@/components/section-head";
import { ArrowIcon, ButtonLink } from "@/components/ui/button";
import { PAGES } from "@/content/pages";
import { pageMetadata } from "@/lib/metadata";

const page = PAGES.downloads;
const release = "https://github.com/oghenenoghie/cbt/releases/latest/download";

export const metadata: Metadata = pageMetadata(page, "/downloads");

export default function DownloadsPage() {
  return (
    <main id="main" tabIndex={-1} className="focus:outline-none">
      <PageIntro eyebrow={page.label} title={page.title}>
        {page.lead}
      </PageIntro>

      <section aria-labelledby="trust-root-title" className={sectionClass}>
        <div className="wrap grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="type-label text-brand-text">Windows · x64 · CBT security tooling</p>
            <h2 id="trust-root-title" className="type-heading-lg mt-3">Offline key generation. Local custody.</h2>
            <p className="type-body-lg mt-4 text-ink-muted">
              The utility creates an encrypted Ed25519 root private key and a matching public-key
              export on your own workstation. It does not connect to the CBT backend and does not
              upload key material.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href={`${release}/CBT-Offline-Trust-Root-Setup.exe`} target="_blank" rel="noopener noreferrer">
                Download Windows utility <ArrowIcon />
              </ButtonLink>
              <ButtonLink variant="line" href={`${release}/SHA256SUMS.txt`} target="_blank" rel="noopener noreferrer">
                SHA-256 checksum
              </ButtonLink>
            </div>
            <p className="mt-4 type-caption text-ink-muted">
              Download the checksum file and verify the executable before running it.
            </p>
          </div>
          <aside className="lg:col-span-4 lg:col-start-9 rounded-lg border border-hairline bg-surface p-6">
            <h3 className="type-body-lg font-medium">Before you run it</h3>
            <ul className="brand-list mt-4">
              <li>Use a dedicated offline Windows workstation.</li>
              <li>Use an empty folder on a BitLocker-encrypted NTFS drive.</li>
              <li>Keep root-private.pem offline and back it up encrypted.</li>
              <li>Share only the public key and independently verified fingerprint.</li>
              <li>Never upload or email the private key or passphrase.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className={sectionClass}>
        <div className="wrap">
          <SectionHead id="downloads-security-title" eyebrow="Security notice" title="Protect the root key.">
            This is an administrative security utility, not a general CBT installer. The Windows
            executable is not code-signed in this release pipeline, so verify its SHA-256 checksum
            and download it only from this official page or the linked CBT GitHub release.
          </SectionHead>
          <p className="type-body-sm text-ink-muted">
            The utility only generates the root key pair. It does not create trust sets, rotate the
            operational signing key, or activate version 2 artifact verification.
          </p>
        </div>
      </section>
    </main>
  );
}
