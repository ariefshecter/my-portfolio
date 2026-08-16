# Portfolio — Ferry Khusnil Arief

Recruiter-focused portfolio for a junior Full Stack Developer, built with the Next.js App Router,
TypeScript, and Tailwind CSS. Content is a typed source of truth, every route is statically
generated, and project claims are limited to what the public repositories can evidence.

Canonical URL: <https://my-portfolio-eta-ten-60.vercel.app>

## Stack

| Concern    | Choice                                     |
| ---------- | ------------------------------------------ |
| Framework  | Next.js 16 (App Router)                    |
| Language   | TypeScript (strict, `noUncheckedIndexedAccess`) |
| Styling    | Tailwind CSS v4 (CSS-first `@theme` tokens) |
| Testing    | Vitest + Testing Library (jsdom)           |
| Linting    | ESLint 9 flat config + `@next/eslint-plugin-next` |
| Fonts      | Inter and Fraunces via `next/font`         |

## Routes

| Route            | Rendering | Purpose                                          |
| ---------------- | --------- | ------------------------------------------------ |
| `/`              | Static    | Identity, capability strip, featured work, contact |
| `/work`          | Static    | Three case studies plus the supporting archive    |
| `/work/[slug]`   | SSG       | One page per case study (`dynamicParams = false`) |
| `/about`         | Static    | Positioning, skills by evidence, experience       |
| `/robots.txt`    | Static    | Generated from `app/robots.ts`                     |
| `/sitemap.xml`   | Static    | Generated from `app/sitemap.ts`                    |
| `/manifest.webmanifest` | Static | Generated from `app/manifest.ts`               |

Unknown case-study slugs and unknown paths both return the static 404 page with real markup,
so deep links degrade correctly without client-side JavaScript.

## Project layout

```
app/          Routes, layout, global styles, metadata routes (robots, sitemap, manifest, icon)
components/   Shared UI: header, footer, contact CTA, project cards, media frame, JSON-LD
content/      Typed content model — the single source of truth
tests/        Vitest suites for content, routes, navigation, contact, and SEO
public/       Resume PDF, optimised project media, favicon
```

### Content model

`content/types.ts` defines the shape and `content/profile.ts` plus `content/projects.ts` supply the
data. Two rules are enforced by types and tests:

- `repositoryUrl` is required; `liveUrl` is optional and omitted unless a deployment is verified.
  No route ever renders a `#` placeholder or an inactive demo control.
- Project media is either a real `screenshot` with a `src`, or an explicitly labelled
  `placeholder`. A placeholder never implies that an unavailable screenshot exists.

## Commands

```bash
npm install      # install dependencies
npm run dev      # development server
npm run build    # production build
npm start        # serve the production build
npm run lint     # ESLint
npm run typecheck# tsc --noEmit
npm test         # Vitest suite
```

## Media

- `public/images/projects/campus-reservation/home-hero.{jpg,webp}` — UniSpace landing page,
  cropped to remove browser chrome, the OS taskbar, the scrollbar, and the dev-tools badge.
- `public/images/profile/ferry-khusnil-arief.{jpg,webp}` — portrait crop.
- `public/assets/resume/resume.pdf` — **unchanged**. The PDF is the original binary; its contents
  have not been regenerated or edited.

Sistem Rapor has no captured screenshot yet, so its case study renders a labelled placeholder.
To add one later, drop the image under `public/images/projects/sistem-rapor/` and replace the
`placeholder` media entry in `content/projects.ts` with a `screenshot` entry including
`src`, `width`, `height`, descriptive `alt`, and a `caption`.

## Accessibility

- Skip link to `#main` is the first tab stop on every page.
- One `h1` per page and no skipped heading levels.
- Visible 2px focus ring via `:focus-visible`, verified by keyboard traversal.
- Body text meets WCAG AA contrast; interactive borders and link underlines meet the 3:1
  non-text minimum. Yellow is reserved for decorative marks, not for text or sole affordances.
- `prefers-reduced-motion` disables transitions and smooth scrolling.
- No horizontal overflow between 320px and 1440px.
- Contact is link-based only; there is no form and no backend endpoint.

## Deployment

Static output on Vercel with no environment variables and no secrets. `metadataBase` and the
sitemap read the canonical URL from `SITE_URL` in `content/profile.ts`; change it there if the
domain changes.
