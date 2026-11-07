"use client";

import { useEffect, useRef } from "react";
import type { NavItem, SectionEntry } from "@/components/layout/types";
import type { Locale } from "@/content/locale";
import { LocaleProvider } from "@/components/layout/locale-provider";
import { PresentationProvider, usePresentation } from "@/components/interactive/presentation-context";
import { PresentationMode } from "@/components/interactive/presentation-mode";
import { Navbar } from "./navbar";
import { SectionDots } from "./section-dots";
import { Footer } from "./footer";
import { scrollToSection } from "@/lib/utils";

export interface ShellProps {
  locale: Locale;
  sections: readonly SectionEntry[];
  navigation: readonly NavItem[];
  brandSub: string;
  summaryHref?: string | null;
  className?: string;
}

function Body({ sections, navigation, brandSub, summaryHref, className }: Omit<ShellProps, "locale">) {
  const { active, index } = usePresentation();
  const wasActive = useRef(false);

  // Restore scroll to the last presented section when exiting presentation mode.
  useEffect(() => {
    if (wasActive.current && !active) {
      requestAnimationFrame(() => scrollToSection(sections[index].id));
    }
    wasActive.current = active;
  }, [active, index, sections]);

  return (
    <div className={className}>
      {active ? (
        <PresentationMode sections={sections} navigation={navigation} />
      ) : (
        <>
          <Navbar navigation={navigation} brandSub={brandSub} summaryHref={summaryHref} homeId={sections[0].id} />
          <SectionDots navigation={navigation} />
          <main id="main">
            {sections.map(({ id, Component }) => (
              <Component key={id} />
            ))}
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export function PageShell({ locale, ...props }: ShellProps) {
  return (
    <LocaleProvider locale={locale}>
      <PresentationProvider total={props.sections.length}>
        <Body {...props} />
      </PresentationProvider>
    </LocaleProvider>
  );
}
