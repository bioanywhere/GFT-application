# AI Ventures & Business Innovation — Executive Proposal for GFT Technologies

An independent, interactive executive proposal by **Andrés García Montoya** for the role of
**Head of AI Ventures & Business Innovation** at GFT Technologies, addressed to Rohan Malik,
COO Andean Region.

> From Artificial Intelligence to Business Opportunities. From Opportunities to Revenue.

This is not an official GFT website. It is a personal professional proposal.

## Stack

- Next.js 16 (App Router, Cache Components, static prerender)
- React 19 + TypeScript
- Tailwind CSS v4 with design tokens in `src/app/globals.css`
- shadcn/ui-style primitives (Radix UI + class-variance-authority) in `src/components/ui`
- Motion for React (animations, reduced-motion aware)
- Recharts (capability radar, pipeline scenario)
- Lucide icons

No API keys, authentication, or database are required. Deploys to Vercel with zero configuration.

## Getting started

```bash
npm install
npm run dev
```

Production build and checks:

```bash
npm run lint
npm run build
npm start
```

## Updating the proposal content

All copy, opportunities, roadmap, KPIs and candidate data live in `src/content/` as typed
configuration objects. Components only render what they are given.

| File | What it controls |
| --- | --- |
| `site.ts` | Candidate identity, contact, email subject, navigation, disclaimer |
| `hero.ts` | Hero headline, description, CTAs, hero network nodes |
| `why-gft.ts` | Verified GFT facts, proposed opportunities, pillars, source links |
| `engine.ts` | The six-stage framework and the venture lifecycle labels |
| `opportunities.ts` | Five industries and 25 opportunity hypotheses with full detail |
| `profile.ts` | Why Andrés: summary, advantages, capabilities, radar, education, recognition |
| `experience.ts` | Career timeline, highlights, metric cards |
| `impact.ts` | Scorecard KPIs, value framework, hypothetical pipeline scenario defaults |
| `roadmap.ts` | First 90 days |
| `fit.ts` | Proposed role, mission, responsibilities, collaborators |
| `availability.ts` | Availability facts and map regions |
| `closing.ts` | Final call to action |

## Assets

- `public/documents/Andres-Garcia-Montoya-CV.pdf` — the downloadable CV. Replace the file to update it; the
  path and filename are configured in `src/content/site.ts`.
- `public/images/` — place the candidate's real photograph here and set `site.candidate.photo` to its path.
  No portrait is generated or substituted; while `photo` is `null` the site shows monogram marks.

## Features

- Sticky navigation with scroll progress and section indicator
- **Presentation Mode**: fullscreen slides, arrow-key navigation, Esc to exit
- **Executive Summary** at `/executive-summary`: one-page, print-friendly, exportable to PDF
- Interactive AI Business Opportunity Engine (clickable stages)
- AI Opportunity Explorer with industry selector, filters by business value and commercial model, and detail dialogs
- Editable, clearly labelled hypothetical pipeline scenario (no financial projections)
- Dark theme by default with light mode, reduced-motion support, keyboard-accessible controls
- SEO metadata, Open Graph image, sitemap and robots

## Content rules observed

- GFT facts are limited to public communications and are visually separated from proposed ideas.
- All opportunities are presented as hypotheses, not existing GFT products or confirmed demand.
- No invented revenue, investment, customer figures, testimonials or endorsements.
