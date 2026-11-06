"use client";

import { useEffect, useRef } from "react";
import { sections } from "@/components/sections/registry";
import { PresentationProvider, usePresentation } from "@/components/interactive/presentation-context";
import { PresentationMode } from "@/components/interactive/presentation-mode";
import { Navbar } from "./navbar";
import { SectionDots } from "./section-dots";
import { Footer } from "./footer";
import { scrollToSection } from "@/lib/utils";

function Body() {
  const { active, index } = usePresentation();
  const wasActive = useRef(false);

  // Restore scroll to the last presented section when exiting presentation mode.
  useEffect(() => {
    if (wasActive.current && !active) {
      requestAnimationFrame(() => scrollToSection(sections[index].id));
    }
    wasActive.current = active;
  }, [active, index]);

  return (
    <>
      {active ? (
        <PresentationMode />
      ) : (
        <>
          <Navbar />
          <SectionDots />
          <main id="main">
            {sections.map(({ id, Component }) => (
              <Component key={id} />
            ))}
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export function PageShell() {
  return (
    <PresentationProvider total={sections.length}>
      <Body />
    </PresentationProvider>
  );
}
