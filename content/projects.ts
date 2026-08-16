import type { ArchiveProject, Project } from "./types";

export const projects: Project[] = [
  {
    slug: "campus-reservation-system",
    title: "Campus Reservation System",
    shortLabel: "UniSpace",
    outcome:
      "A campus facility booking platform that turns manual room requests into a tracked digital workflow with QR-verified attendance.",
    description:
      "A full-stack campus room reservation platform that combines a Next.js and TypeScript interface with a Go/Fiber API, PostgreSQL persistence, JWT authentication, QR-based workflows, and Dockerized development. The system is designed to make room availability, booking, attendance, and administrative review more transparent.",
    year: "2026",
    tags: ["Full stack", "Next.js", "TypeScript", "Go", "Fiber", "PostgreSQL", "Docker"],
    primaryStack: ["Next.js", "TypeScript", "Go / Fiber", "PostgreSQL"],
    repositoryUrl: "https://github.com/ariefshecter/campus-reservation-system",
    featured: true,
    media: [
      {
        kind: "screenshot",
        src: "/images/projects/campus-reservation/home-hero.jpg",
        width: 1350,
        height: 576,
        alt: "UniSpace landing page showing the app header with Masuk and Daftar actions, a Sistem Reservasi Kampus Online badge, the headline Pinjam Ruangan Tanpa Ribet & Transparan, and Booking Ruangan and Buat Akun Baru buttons on a dark blue background.",
        caption:
          "UniSpace landing page running locally: entry points for signing in, registering, and starting a room booking.",
      },
    ],
    caseStudy: {
      problem: [
        "Campus facility borrowing is usually handled through chat messages, paper forms, and repeated visits to an administrator, so nobody has a reliable view of what is already booked.",
        "Two problems follow from that: schedule conflicts are discovered late, and actual attendance is never verified against the approved booking.",
        "The system needed to cover the full loop — availability, request, approval, attendance, and reporting — rather than only replacing the request form.",
      ],
      role: "Sole developer. I designed the data model, implemented the Go API and the Next.js client, and set up the local Docker-based database environment.",
      contribution: [
        "Structured the repository as a monorepo with `apps/backend` (Go) and `apps/web` (Next.js) so API and client evolve together.",
        "Implemented authentication with JWT plus an OTP verification path, and separated user and administrator route groups in the App Router.",
        "Built booking, facility, profile, user, and dashboard modules in the backend, each with handler, service, and repository layers.",
        "Implemented QR ticket generation and a browser-based scanner flow for check-in and check-out verification.",
        "Added a background worker that auto-completes bookings when a user forgets to check out.",
        "Documented endpoints with Swagger annotations so the API is explorable without reading handler code.",
      ],
      architectureSummary:
        "A monorepo with two deployable units. The Next.js client calls a Go/Fiber HTTP API over JSON with a bearer token; the API owns all persistence against PostgreSQL, which runs locally through Docker Compose.",
      architecture: [
        {
          label: "Client — Next.js App Router",
          detail:
            "Route groups for authentication, `/user` (facilities, bookings, profile), and `/admin` (dashboard, bookings, facilities, users, scanner, attendance, reviews). Zustand holds session state; Axios carries the bearer token.",
        },
        {
          label: "API — Go + Fiber v2",
          detail:
            "Feature modules for auth, booking, facility, profile, user, and dashboard. Each module splits HTTP handling from service rules and SQL access, with JWT middleware guarding protected routes.",
        },
        {
          label: "Persistence — PostgreSQL 16",
          detail:
            "Tables for users, profiles, facilities, bookings, and verification codes, initialised from a SQL script so a fresh environment matches the application expectations.",
        },
        {
          label: "Local infrastructure — Docker Compose",
          detail:
            "PostgreSQL is provisioned as a container with an init script and a health check, keeping database setup identical between machines.",
        },
      ],
      stack: [
        {
          label: "Frontend",
          items: [
            "Next.js 16 (App Router)",
            "TypeScript",
            "Tailwind CSS v4",
            "Radix UI primitives",
            "Zustand",
            "Axios",
            "html5-qrcode",
            "jsPDF",
            "Recharts",
          ],
        },
        {
          label: "Backend",
          items: [
            "Go 1.25",
            "Fiber v2",
            "golang-jwt v5",
            "lib/pq",
            "go-qrcode",
            "Swagger (Swaggo)",
          ],
        },
        { label: "Data", items: ["PostgreSQL 16", "SQL init script"] },
        {
          label: "Authentication",
          items: ["Email and password login", "JWT bearer tokens", "OTP verification codes"],
        },
        { label: "Infrastructure", items: ["Docker Compose", "Environment-based configuration"] },
      ],
      decisions: [
        {
          title: "Separate Go API instead of Next.js route handlers",
          detail:
            "Keeping persistence and authorisation in a standalone Go service made the boundary explicit and let me document the whole surface with Swagger rather than spreading logic across server actions.",
        },
        {
          title: "Handler / service / repository split per feature",
          detail:
            "Each backend module keeps HTTP parsing, business rules, and SQL in separate files, so a booking rule change does not require touching request decoding.",
        },
        {
          title: "QR tickets over manual attendance lists",
          detail:
            "A generated QR ticket ties a physical check-in to a specific approved booking, which is what makes the attendance report trustworthy.",
        },
        {
          title: "Database provisioned through Compose",
          detail:
            "An init script plus a health check removes the class of bug where the schema on one machine silently differs from another.",
        },
      ],
      challenges: [
        {
          title: "Keeping booking state consistent",
          detail:
            "Bookings move through pending, approved, rejected, and completed states across two different actors. I pushed the transition rules into the service layer so the client only reflects state rather than deciding it.",
        },
        {
          title: "Unclosed sessions",
          detail:
            "Users forget to check out, which would leave rooms permanently occupied in the data. A background worker closes stale bookings so occupancy reporting stays usable.",
        },
        {
          title: "Scanner reliability in the browser",
          detail:
            "Camera-based scanning depends on permissions and device support, so the admin scanner needed clear failure states instead of silently not reading a code.",
        },
      ],
      limitations: [
        "The system runs locally against a Docker PostgreSQL instance; there is no public deployment, so no live demo link is offered.",
        "The WhatsApp OTP gateway is an optional external integration and is not part of the repository.",
        "Automated test coverage on the Go modules is limited; validation so far has been manual against the Swagger surface.",
      ],
    },
  },
  {
    slug: "sistem-rapor",
    title: "Sistem Rapor",
    shortLabel: "Academic reporting",
    outcome:
      "A Laravel reporting system that takes school assessment data from teacher input through to a printable PDF report card.",
    description:
      "A Laravel-based academic reporting system for managing assessment workflows, role-specific access, student records, and printable report documents. The project combines Blade and Tailwind interfaces with PHP application logic, MySQL/MariaDB persistence, authentication, migrations, seeders, and PDF generation.",
    year: "2026",
    tags: ["Full stack", "Laravel", "PHP", "Blade", "MySQL", "PDF"],
    primaryStack: ["Laravel 12", "PHP 8.2", "Blade", "MySQL / MariaDB"],
    repositoryUrl: "https://github.com/ariefshecter/sistem-rapor",
    featured: true,
    media: [
      {
        kind: "screenshot",
        src: "/images/projects/rapor.png",
        width: 1366,
        height: 768,
        alt: "Sistem Rapor administrator dashboard showing academic navigation, report priorities, PDF output, statistics, and quick access to class, student, teacher, and subject modules.",
        caption:
          "Sistem Rapor administrator dashboard: academic data management, statistics, and report generation in one workspace.",
      },
    ],
    caseStudy: {
      problem: [
        "Report card preparation involves several roles touching the same records: administrators maintain reference data, teachers enter marks, and the final document must be consistent for every student.",
        "Spreadsheet-based workflows make it hard to keep class assignments, subject lists, and grade entries aligned, and reformatting the printable output is manual work every term.",
        "The application needed role-appropriate access and a single generated document rather than shared editable files.",
      ],
      role: "Sole developer for a coursework project. I modelled the domain, implemented the controllers and Blade views, and wired up PDF report generation.",
      contribution: [
        "Modelled the academic domain across classes, students, teachers, subjects, and grades using migrations, with a later migration adding homeroom teacher assignment to classes.",
        "Implemented resource controllers for class, student, teacher, and subject management plus grade entry and report views.",
        "Applied a role middleware so `/admin` and `/guru` route groups expose only the actions each role should have.",
        "Disabled public Breeze registration so teacher accounts are provisioned by an administrator instead of self-signup.",
        "Added report viewing in the browser and PDF download through DomPDF, plus a statistics view over recorded grades.",
      ],
      architectureSummary:
        "A conventional server-rendered Laravel application: Blade views styled with Tailwind, Eloquent models over MySQL/MariaDB, route groups guarded by authentication and a role middleware, and DomPDF for the printable report.",
      architecture: [
        {
          label: "Presentation — Blade + Tailwind",
          detail:
            "Server-rendered views compiled with Vite, split by role area so administrators and teachers see different dashboards.",
        },
        {
          label: "Application — Laravel 12 controllers",
          detail:
            "Resource controllers for classes, students, teachers, and subjects; dedicated controllers for grades, reports, and statistics.",
        },
        {
          label: "Authorisation",
          detail:
            "Laravel Breeze authentication with `auth`, `verified`, and a custom `role` middleware applied per route group for the `admin` and `guru` roles.",
        },
        {
          label: "Persistence — MySQL / MariaDB",
          detail:
            "Eloquent models (ClassRoom, Student, Teacher, Subject, Grade, User) backed by migrations and seeders for repeatable setup.",
        },
        {
          label: "Documents — DomPDF",
          detail:
            "Report cards render from the same data as the screen view and are downloadable as PDF per student.",
        },
      ],
      stack: [
        { label: "Frontend", items: ["Blade templates", "Tailwind CSS", "Vite"] },
        {
          label: "Backend",
          items: ["PHP 8.2", "Laravel 12", "Laravel Breeze", "barryvdh/laravel-dompdf"],
        },
        { label: "Data", items: ["MySQL / MariaDB", "Migrations", "Seeders", "SQL dump"] },
        {
          label: "Authentication",
          items: ["Session authentication", "Role middleware (admin, guru)", "Registration disabled"],
        },
        { label: "Tooling", items: ["Composer", "npm", "Pint", "PHPUnit"] },
      ],
      decisions: [
        {
          title: "Role middleware over per-view checks",
          detail:
            "Guarding whole route groups keeps authorisation in one place; a view cannot accidentally become reachable by the wrong role.",
        },
        {
          title: "Admin-provisioned accounts",
          detail:
            "Public registration is disabled because anyone entering grades must be a known teacher, not an arbitrary visitor.",
        },
        {
          title: "One data source for screen and PDF",
          detail:
            "The printable report is generated from the same records as the on-screen report, so the document cannot drift from the stored grades.",
        },
        {
          title: "Homeroom teacher added by migration",
          detail:
            "Rather than reshaping the original classes table, the relation was introduced in a follow-up migration to keep the history reproducible.",
        },
      ],
      challenges: [
        {
          title: "Grade entry across many relations",
          detail:
            "A grade belongs to a student, a subject, and a class context at once. Getting the entry screens to stay simple while respecting those relations took the most iteration.",
        },
        {
          title: "Printable layout fidelity",
          detail:
            "PDF rendering does not behave like a browser, so the report template needed layout that survives DomPDF's CSS support rather than relying on modern layout features.",
        },
        {
          title: "Reproducible local setup",
          detail:
            "The project depends on a specific PHP version and a database; migrations, seeders, and a SQL dump are included so it can be brought up from scratch.",
        },
      ],
      limitations: [
        "No public deployment exists, so the repository is the only verifiable artefact.",
        "Feature tests currently cover the Breeze authentication scaffolding rather than the grading and reporting flows.",
      ],
    },
  },
  {
    slug: "portfolio-redesign",
    title: "Portfolio redesign",
    shortLabel: "This site",
    outcome:
      "This site, rebuilt from a Create React App SPA into a typed Next.js App Router portfolio aimed at technical reviewers.",
    description:
      "A recruiter-focused developer portfolio rebuilt with Next.js App Router, TypeScript, typed project content, accessible responsive UI, metadata-driven SEO, optimized project media, and a deployment-ready editorial presentation.",
    year: "2026",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Accessibility", "SEO"],
    primaryStack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Vitest"],
    repositoryUrl: "https://github.com/ariefshecter/my-portfolio",
    liveUrl: "https://my-portfolio-eta-ten-60.vercel.app",
    featured: true,
    media: [
      {
        kind: "screenshot",
        src: "/images/projects/portofolio.png",
        width: 1366,
        height: 768,
        alt: "Portfolio home page showing Ferry Khusnil Arief's Full Stack Developer introduction, capabilities, and actions to view selected work or download the resume.",
        caption:
          "Portfolio home page: Full Stack positioning, capability summary, selected work, and resume access.",
      },
    ],
    caseStudy: {
      problem: [
        "The previous version was a Create React App single-page application that presented me as a front-end developer only, which did not match the backend and data work in my repositories.",
        "It also carried the usual defects of an unfinished template: duplicated data files, `#` placeholder links, a contact form that only simulated success, and Create React App metadata still in the document head.",
        "A reviewer landing on it could not quickly answer the one question that matters: what has this person actually built, and how.",
      ],
      role: "Sole developer. I planned the information architecture, migrated the toolchain, wrote the content model, and implemented every route.",
      contribution: [
        "Replaced the CRA toolchain and React Router with the Next.js App Router and TypeScript, removing `react-scripts` and the default template tests.",
        "Consolidated five overlapping data files into one typed content model consumed by every route.",
        "Rebuilt the visual language around a neutral editorial palette with a single restrained accent, replacing the previous game-inspired framing.",
        "Removed the simulated contact form in favour of real, verifiable contact actions in the global footer.",
        "Added route-level metadata, Open Graph and Twitter cards, `Person` and `WebSite` JSON-LD, a generated sitemap, and robots rules.",
        "Cropped and optimised the project screenshot to remove browser chrome and the operating system taskbar before serving it through Next Image.",
      ],
      architectureSummary:
        "A static-first Next.js App Router site. Content lives in typed modules, routes render from that content at build time, and only the mobile navigation needs client-side JavaScript.",
      architecture: [
        {
          label: "Routing — App Router",
          detail:
            "`/`, `/work`, `/work/[slug]`, and `/about`, with `generateStaticParams` producing one static page per case study and a typed not-found route for unknown slugs.",
        },
        {
          label: "Content — typed modules",
          detail:
            "`content/` exports profile, skills, experience, projects, and archive data behind explicit interfaces, so a missing field is a build error rather than an empty section.",
        },
        {
          label: "Presentation — Tailwind CSS v4",
          detail:
            "A CSS-first theme defines the neutral scale, accent, and typography tokens; components stay server-rendered unless interaction requires otherwise.",
        },
        {
          label: "Metadata",
          detail:
            "The root layout sets the canonical base and shared Open Graph defaults; each route exports its own title, description, and canonical path.",
        },
        {
          label: "Testing — Vitest",
          detail:
            "Component and route tests assert navigation, link destinations, resume access, contact actions, and that no placeholder link renders.",
        },
      ],
      stack: [
        {
          label: "Frontend",
          items: ["Next.js 16 App Router", "React 19", "TypeScript (strict)", "Tailwind CSS v4"],
        },
        { label: "Content", items: ["Typed TypeScript content modules", "No CMS or database"] },
        {
          label: "Quality",
          items: ["Vitest", "Testing Library", "ESLint flat config", "tsc --noEmit"],
        },
        { label: "Media", items: ["Next Image", "WebP and JPEG variants"] },
        { label: "Deployment", items: ["Vercel", "Static route generation"] },
      ],
      decisions: [
        {
          title: "Typed content instead of a CMS",
          detail:
            "The content changes rarely and only I edit it. Typed modules give compile-time safety and keep the site fully static with no runtime data fetching.",
        },
        {
          title: "No contact form",
          detail:
            "A form implies a backend that does not exist. Direct email, GitHub, and LinkedIn links are honest and immediately actionable for a recruiter.",
        },
        {
          title: "Explicit `liveUrl` rather than a placeholder",
          detail:
            "Live demo controls only render when a deployment is actually verified, so a reviewer never clicks a link that goes nowhere.",
        },
        {
          title: "Evidence-led project media",
          detail:
            "Case studies use captured product screens with descriptive captions, so reviewers can inspect the interface alongside the architecture and implementation details.",
        },
      ],
      challenges: [
        {
          title: "Preserving the public resume path during migration",
          detail:
            "The resume was rebuilt for the Full Stack positioning while retaining `/assets/resume/resume.pdf`, so existing links continue to resolve without redirects.",
        },
        {
          title: "Writing honest project copy",
          detail:
            "The harder editorial constraint was describing solo coursework and personal projects accurately: no invented team, scale, or business metrics.",
        },
        {
          title: "Keeping the accent restrained",
          detail:
            "The previous design leaned on saturated yellow throughout. Limiting it to rules, focus states, and small markers made the typography carry the hierarchy instead.",
        },
      ],
      limitations: [
        "There is no analytics or error monitoring wired up.",
        "Tests cover rendering and link contracts, not visual regression.",
      ],
    },
  },
];

export const archiveProjects: ArchiveProject[] = [
  {
    name: "Player clustering with K-Means",
    category: "Machine learning",
    description:
      "Undergraduate thesis work clustering game player characteristics by feature preference and business model, prepared as a Jupyter notebook.",
    tech: ["Python", "Jupyter", "scikit-learn", "K-Means"],
    repositoryUrl: "https://github.com/ariefshecter/gamer-clustering-kmeans",
  },
  {
    name: "Comparative CNN analysis",
    category: "Machine learning",
    description:
      "Comparison of InceptionV3, ResNet152V2, and Xception transfer learning models on the same animal image classification dataset.",
    tech: ["Python", "TensorFlow", "Keras", "Jupyter"],
    repositoryUrl:
      "https://github.com/ariefshecter/Comparative-Analysis-of-InceptionV3-ResNet152V2-and-Xception-for-Animal-Image-Classification",
  },
  {
    name: "CNN animal image classification",
    category: "Machine learning",
    description:
      "Implementation and analysis of a convolutional neural network for animal image classification, covering preprocessing, training, and evaluation.",
    tech: ["Python", "TensorFlow", "Keras", "CNN"],
    repositoryUrl:
      "https://github.com/ariefshecter/Implementasi-dan-Analisis-Model-CNN-untuk-Klasifikasi-Gambar-Hewan",
  },
  {
    name: "Fuzzy face recognizer",
    category: "Experiments",
    description:
      "Python experiment applying fuzzy logic concepts to a face recognition pipeline.",
    tech: ["Python"],
    repositoryUrl: "https://github.com/ariefshecter/FuzzyFaceRecognizer",
  },
  {
    name: "AplikasiIslami",
    category: "Mobile",
    description: "Android application project written in Kotlin.",
    tech: ["Kotlin", "Android"],
    repositoryUrl: "https://github.com/ariefshecter/AplikasiIslami",
  },
  {
    name: "PHP account management system",
    category: "Web",
    description:
      "Earlier server-rendered PHP application covering account records with HTML and CSS interfaces.",
    tech: ["PHP", "HTML", "CSS", "MySQL"],
    repositoryUrl: "https://github.com/ariefshecter/php-account-management-system",
  },
  {
    name: "Family 100 game",
    category: "Games",
    description: "Browser implementation of the Family 100 quiz format.",
    tech: ["HTML", "CSS", "JavaScript"],
    repositoryUrl: "https://github.com/ariefshecter/family100-game",
  },
  {
    name: "Game Labirin",
    category: "Games",
    description:
      "Vanilla JavaScript maze game with keyboard movement and collision handling.",
    tech: ["JavaScript", "HTML", "CSS"],
    repositoryUrl: "https://github.com/ariefshecter/GameLabirin",
  },
  {
    name: "Kuis matematika sederhana",
    category: "Games",
    description: "Small browser maths quiz built while learning DOM scripting.",
    tech: ["HTML", "CSS", "JavaScript"],
    repositoryUrl: "https://github.com/ariefshecter/kuis_matematika_sederhana",
  },
  {
    name: "Projek Python",
    category: "Experiments",
    description:
      "Collection of small Python exercises covering automation and data manipulation practice.",
    tech: ["Python"],
    repositoryUrl: "https://github.com/ariefshecter/projek_python",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
