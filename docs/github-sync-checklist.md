# GitHub Profile Optimization Checklist

Status: **not applied**. Verified against the public GitHub API on 2026-08-16.

No GitHub profile resource has been modified from this workspace. Apply this checklist through the
GitHub web UI because authenticated GitHub CLI or API access is unavailable here.

Current public state:

- Display name: `arief`
- Bio, location, and website: empty
- Public repositories: 28, including 10 forks
- Repository topics: none assigned
- Profile README repository: missing (`ariefshecter/ariefshecter` returns 404)

---

## 1. Profile settings

Settings → Public profile.

- [ ] **Name:** `Ferry Khusnil Arief`
- [ ] **Bio:** `Fresh Graduate & Full Stack Developer | Next.js, TypeScript, Go/Fiber, Laravel, PostgreSQL`
- [ ] **Location:** `Lampung, Indonesia`
- [ ] **Website:** `https://my-portfolio-eta-ten-60.vercel.app`
- [ ] **Social:** LinkedIn `https://www.linkedin.com/in/rief-shecter-127571227/`
- [ ] Enable "Available for hire" only while it is actually true.

Do not claim years of professional experience or employment that has not happened.

## 2. Profile README (`ariefshecter/ariefshecter`)

Create the public repository `ariefshecter` (exactly the same as the account name), enable the
`Add a README file` option, and replace its `README.md` with:

```markdown
# Ferry Khusnil Arief

Fresh Informatics Technology graduate (GPA 3.90/4.00) and Full Stack Developer from Lampung,
Indonesia.

I build web systems end to end: typed Next.js and TypeScript interfaces, Go/Fiber and Laravel
backends, and relational data models in PostgreSQL and MySQL/MariaDB. I also work with Python and
machine learning, which informs a data-oriented approach to product development.

[Portfolio](https://my-portfolio-eta-ten-60.vercel.app) ·
[LinkedIn](https://www.linkedin.com/in/rief-shecter-127571227/) ·
[Email](mailto:ceryover@gmail.com)

## Selected work

- **[Campus Reservation System](https://github.com/ariefshecter/campus-reservation-system)** —
  Next.js + TypeScript client, Go/Fiber API with 37 REST endpoints, PostgreSQL, JWT and OTP
  authentication, QR check-in, and Docker Compose.
- **[Sistem Rapor](https://github.com/ariefshecter/sistem-rapor)** —
  Laravel 12 academic reporting across six domain models, role-based access, migrations and
  seeders, and PDF report cards.
- **[Portfolio](https://github.com/ariefshecter/my-portfolio)** —
  Next.js App Router, TypeScript, typed content, metadata-driven SEO, accessible UI, and 52 tests.
- **[Player Clustering with K-Means](https://github.com/ariefshecter/gamer-clustering-kmeans)** —
  Undergraduate thesis analysing player characteristics in a reproducible Jupyter workflow.

## Stack

**Frontend:** HTML · CSS · JavaScript · React · Next.js · TypeScript · Tailwind CSS · Blade

**Backend:** Go · Fiber · PHP · Laravel · REST APIs · JWT · OTP · RBAC

**Data:** PostgreSQL · MySQL/MariaDB · Python · Jupyter · TensorFlow · scikit-learn

**Engineering:** Docker Compose · Swagger/OpenAPI · Git/GitHub · Vitest · PHPUnit · Vercel

## Contact

- Portfolio: <https://my-portfolio-eta-ten-60.vercel.app>
- Email: <ceryover@gmail.com>
- LinkedIn: <https://www.linkedin.com/in/rief-shecter-127571227/>
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
| `campus-reservation-system` | Full-stack campus facility reservation platform: Next.js/TypeScript client, Go/Fiber API with 37 REST endpoints, PostgreSQL, JWT and OTP auth, QR check-in. | `nextjs` `typescript` `golang` `fiber` `postgresql` `jwt` `docker` `rest-api` `monorepo` | — (no deployment) |
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
- [ ] Clear inherited homepage URLs from retained forks so they are not mistaken for personal deployments

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

## 9. Final quality check

- [ ] Open the profile in a signed-out browser window
- [ ] Confirm the full name, Full Stack bio, location, portfolio, and LinkedIn are visible
- [ ] Confirm the profile README appears and every link resolves
- [ ] Confirm the first three pins immediately show TypeScript/Next.js, Go/Fiber, and Laravel work
- [ ] Confirm no fork is pinned or described as original work
- [ ] Confirm flagship repository descriptions and topics display without truncating the core stack
- [ ] Confirm the portfolio homepage serves the redesigned Next.js site before promoting its URL

Suggested completion order: profile fields, profile README, pinned repositories, flagship metadata,
remaining original repository metadata, fork hygiene, then the signed-out quality check.
