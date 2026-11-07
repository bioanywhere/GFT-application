"use client";

import { Mail, FileDown } from "lucide-react";
import { useContent } from "@/components/layout/locale-provider";
import { mailto } from "@/content/dictionary";
import { LinkedinIcon } from "@/components/ui/linkedin-icon";

export function Footer() {
  const d = useContent();
  const { site, ui } = d;
  return (
    <footer className="no-print border-t border-border bg-background-elevated/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
        <div>
          <p className="text-lg font-semibold">{site.candidate.name}</p>
          <p className="mt-1 text-sm text-muted">{site.candidate.footerLine}</p>
          <p className="mt-1 text-sm text-muted">
            {site.candidate.availability} | {site.candidate.languages} | {ui.common.worldwide}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={mailto(d)} className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-foreground">
              <Mail className="size-4" /> {site.candidate.email}
            </a>
            <a href={site.candidate.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-foreground">
              <LinkedinIcon className="size-4" /> {ui.common.linkedin}
            </a>
            <a href={site.candidate.cvPath} download={site.candidate.cvFileName} className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-foreground">
              <FileDown className="size-4" /> {ui.common.downloadCvShort}
            </a>
          </div>
        </div>
        <p className="max-w-md text-xs leading-relaxed text-muted lg:text-right">{site.disclaimer}</p>
      </div>
    </footer>
  );
}
