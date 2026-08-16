# GitHub Synchronization Checklist (Draft)

Status: **not applied**. This is a preparation document only.

Nothing in this file has been pushed, and no GitHub resource has been modified. Two blockers stand
in the way of applying it from this workspace:

1. This workspace has no `.git` directory, so it is not a clone and cannot push.
2. `gh` is not installed or authenticated here.

Apply the items below manually through the GitHub web UI, or from an authenticated clone once one
is available. Verify each claim before publishing it.

---

## 1. Profile settings

Settings → Public profile.

- [ ] **Name:** `Ferry Khusnil Arief`
- [ ] **Bio:** `Junior Full Stack Developer — Next.js/TypeScript, Laravel, Go/Fiber, PostgreSQL. Also Python and applied ML.`
- [ ] **Location:** `Lampung, Indonesia`
- [ ] **Website:** `https://my-portfolio-eta-ten-60.vercel.app`
- [ ] **Social:** LinkedIn `https://www.linkedin.com/in/rief-shecter-127571227/`
- [ ] Enable "Available for hire" only while it is actually true.

Do not claim years of professional experience or employment that has not happened.

## 2. Profile README (`ariefshecter/ariefshecter`)

Create the repository `ariefshecter` (same name as the account) with a `README.md`. Suggested
content, matching the portfolio copy exactly:

```markdown
# Ferry Khusnil Arief

Junior Full Stack Developer from Lampung, Indonesia.

I am a junior Full Stack Developer from Lampung, Indonesia, focused on building practical web
systems from interface to database. My experience includes Next.js and TypeScript frontends,
Laravel and PHP applications, Go/Fiber APIs, PostgreSQL and MySQL/MariaDB workflows,
authentication, reporting, and Docker-based development. I also work with Python and machine
learning, which helps me approach product development with a data-oriented mindset. I enjoy
turning operational requirements into clear, maintainable user experiences and reliable
application workflows.

## Selected work

- **[Campus Reservation System](https://github.com/ariefshecter/campus-reservation-system)** —
  Next.js + TypeScript client, Go/Fiber API, PostgreSQL, JWT auth, QR check-in, Docker Compose.
- **[Sistem Rapor](https://github.com/ariefshecter/sistem-rapor)** —
  Laravel 12 academic reporting with role-based access, migrations/seeders, and PDF report cards.
- **[Portfolio](https://github.com/ariefshecter/my-portfolio)** —
  Next.js App Router, TypeScript, typed content model, metadata-driven SEO, accessible UI.

## Stack

**Frontend:** HTML, CSS, JavaScript, React, Next.js, TypeScript, Tailwind CSS, Vite
**Backend:** PHP, Laravel, Go, Fiber, REST APIs, JWT, RBAC
**Data:** PostgreSQL, MySQL/MariaDB, Python, Jupyter, TensorFlow, Keras, K-Means
**Engineering:** Docker Compose, Swagger/OpenAPI, Git/GitHub, testing, deployment

## Contact

- Portfolio: https://my-portfolio-eta-ten-60.vercel.app
- Email: ceryover@gmail.com
- LinkedIn: https://www.linkedin.com/in/rief-shecter-127571227/
```

- [ ] Repository created and public
- [ ] README renders on the profile
- [ ] Every link resolves

## 3. Pinned repositories

Pin exactly these four, in this order:

- [ ] `campus-reservation-system`
- [ ] `sistem-rapor`
- [ ] `my-portfolio`
- [ ] `gamer-clustering-kmeans` (data/ML representative)

Unpin anything with `fork = true`.

## 4. Descriptions, topics, and homepage URLs

Only for original (non-fork) repositories. English descriptions.

| Repository | Description | Topics | Homepage |
| --- | --- | --- | --- |
| `campus-reservation-system` | Full-stack campus facility reservation platform: Next.js/TypeScript client, Go/Fiber API, PostgreSQL, JWT auth, QR check-in. | `nextjs` `typescript` `golang` `fiber` `postgresql` `jwt` `docker` `monorepo` | — (no deployment) |
| `sistem-rapor` | Laravel academic reporting system with role-based access, grade management, and printable PDF report cards. | `laravel` `php` `blade` `mysql` `dompdf` `rbac` | — (no deployment) |
| `my-portfolio` | Developer portfolio built with Next.js App Router, TypeScript, and Tailwind CSS. | `nextjs` `typescript` `tailwindcss` `portfolio` `accessibility` `seo` | `https://my-portfolio-eta-ten-60.vercel.app` |
| `gamer-clustering-kmeans` | K-Means clustering of game player characteristics by feature preference and business model. | `python` `jupyter` `kmeans` `clustering` `data-analysis` | — |
| `Comparative-Analysis-of-...-Xception-...` | Comparison of InceptionV3, ResNet152V2, and Xception for animal image classification. | `python` `tensorflow` `keras` `transfer-learning` `cnn` | — |
| `Implementasi-dan-Analisis-Model-CNN-...` | CNN implementation and analysis for animal image classification. | `python` `tensorflow` `keras` `cnn` | — |
| `FuzzyFaceRecognizer` | Face recognition experiment applying fuzzy logic concepts. | `python` `fuzzy-logic` `face-recognition` | — |
| `AplikasiIslami` | Android application written in Kotlin. | `kotlin` `android` | — |
| `php-account-management-system` | Server-rendered PHP account management system. | `php` `mysql` `crud` | — |
| `family100-game` | Browser implementation of the Family 100 quiz format. | `javascript` `html` `css` `game` | — |
| `GameLabirin` | Vanilla JavaScript maze game with keyboard movement and collision handling. | `javascript` `html` `css` `game` | — |
| `kuis_matematika_sederhana` | Simple browser maths quiz. | `javascript` `html` `css` | — |
| `projek_python` | Collection of small Python exercises covering automation and data manipulation. | `python` `automation` | — |

- [ ] Leave `homepage` empty where no deployment exists. Never point it at a dead URL.

## 5. README structure for flagship repositories

Apply to `campus-reservation-system`, `sistem-rapor`, and `my-portfolio`:

- [ ] Problem statement — what the system solves
- [ ] Features — grouped by role or module
- [ ] Architecture — layers and how they communicate
- [ ] Stack — with versions
- [ ] Setup — prerequisites, environment variables, run commands
- [ ] Screenshots — real captures only
- [ ] API notes — Swagger path for `campus-reservation-system`
- [ ] Database notes — schema summary, migrations, seeders
- [ ] Testing — how to run the suite and what it covers
- [ ] Deployment — status, and explicitly state "local only" where true
- [ ] Limitations — honest gaps, including thin test coverage

`campus-reservation-system` already has a strong Indonesian README. Consider an English
`README.md` with a linked `README.id.md`, or a bilingual structure. Do not delete the existing
Indonesian content.

## 6. Fork hygiene

These are forks and must never be presented as original work:

`Sistem-Informasi-Desa-Laravel`, `spurtcommerce`, `Data-Analyst-Customer-Segmentation`,
`laravel-multi-vendor-e-commerce-application`, `shopbite-ecommerce-marketplace`,
`Toko-Online-Laravel`, `Sistem-Informasi-Produk-Swalayan-Edo`,
`Sistem-Informasi-Monitoring-Akademik-Sekolah`, `anime-recommendation-system`, `Anime-Shrine`

- [ ] Not pinned
- [ ] Not referenced as personal projects in the profile README or portfolio
- [ ] Archive or delete any fork kept only for reference (optional)

## 7. Repositories needing a decision

- [ ] `coplay` — non-fork, but provenance and complexity need review. Kept out of featured work
      in the portfolio deliberately. Inspect before making any contribution claim.
- [ ] `esaturasi_web`, `hitagi`, `hitagi_web`, `anime-recommendation-website` — currently
      undescribed. Either add an honest English description or archive them.

## 8. Repository artefacts to clean

Only after confirming nothing depends on them:

- [ ] `sistem-rapor` contains committed Word artefacts (`Laporan_Praktikum_Sistem_Rapor.docx`) and
      temp files (`~$…docx`, `~WRL….tmp`). Remove temp files; decide whether the report belongs
      in the repository or in `docs/`.
- [ ] Verify no `.env` file with real credentials is tracked in any repository.
- [ ] Verify no database dump contains real personal data before leaving it public.

## 9. Portfolio repository push (separate step)

This workspace is not a clone, so the redesign cannot be pushed from here.

- [ ] Clone `https://github.com/ariefshecter/my-portfolio` into a separate directory
- [ ] Copy the redesigned application into the clone (excluding `node_modules` and `.next`)
- [ ] Confirm `npm install && npm run lint && npm test && npm run build` all pass in the clone
- [ ] Commit and push on a branch, then merge after reviewing the diff
- [ ] Confirm the Vercel deployment picks up the change and the canonical URL still resolves
