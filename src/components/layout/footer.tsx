import { Mail, FileDown } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/linkedin-icon";
import { mailtoLink, site } from "@/content";

export function Footer() {
  return (
    <footer className="no-print border-t border-border bg-background-elevated/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
        <div>
          <p className="text-lg font-semibold">{site.candidate.name}</p>
          <p className="mt-1 text-sm text-muted">{site.candidate.footerLine}</p>
          <p className="mt-1 text-sm text-muted">
            {site.candidate.availability} | {site.candidate.languages} | Worldwide
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={mailtoLink()} className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-foreground">
              <Mail className="size-4" /> {site.candidate.email}
            </a>
            <a href={site.candidate.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-foreground">
              <LinkedinIcon className="size-4" /> LinkedIn
            </a>
            <a href={site.candidate.cvPath} download={site.candidate.cvFileName} className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-foreground">
              <FileDown className="size-4" /> Download CV
            </a>
          </div>
        </div>
        <p className="max-w-md text-xs leading-relaxed text-muted lg:text-right">{site.disclaimer}</p>
      </div>
    </footer>
  );
}
