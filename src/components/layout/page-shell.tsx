"use client";

import { useEffect, useRef } from "react";
import { sections as defaultSections } from "@/components/sections/registry";
import { navigation as defaultNavigation } from "@/content";
import type { NavItem, SectionEntry } from "@/components/layout/types";
import { PresentationProvider, usePresentation } from "@/components/interactive/presentation-context";
import { PresentationMode } from "@/components/interactive/presentation-mode";
import { Navbar } from "./navbar";
import { SectionDots } from "./section-dots";
import { Footer } from "./footer";
import { scrollToSection } from "@/lib/utils";

interface ShellProps {
  sections?: readonly SectionEntry[];
  navigation?: readonly NavItem[];
  brandSub?: string;
  summaryHref?: string | null;
  className?: string;
}

function Body({ sections = defaultSections, navigation = defaultNavigation, brandSub, summaryHref, className }: ShellProps) {
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
        <PresentationMode sections={sections} />
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

export function PageShell(props: ShellProps) {
  const total = (props.sections ?? defaultSections).length;
  return (
    <PresentationProvider total={total}>
      <Body {...props} />
    </PresentationProvider>
  );
}
