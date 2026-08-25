import type { ExperienceEntry, Profile, SkillGroup } from "./types";

export const SITE_URL = "https://my-portfolio-eta-ten-60.vercel.app";

export const profile: Profile = {
  name: "Ferry Khusnil Arief",
  role: "Junior Full Stack Developer",
  location: "Lampung, Indonesia",
  email: "ceryover@gmail.com",
  githubUrl: "https://github.com/ariefshecter",
  linkedinUrl: "https://www.linkedin.com/in/ferry-khusnil-arief/",
  canonicalUrl: SITE_URL,
  resumePath: "/assets/resume/resume.pdf",
  availability: "Open to junior full stack roles and selected freelance work",
  headline: "I build web systems from interface to database.",
  summary:
    "I am a junior Full Stack Developer from Lampung, Indonesia, focused on building practical web systems from interface to database. My experience includes Next.js and TypeScript frontends, Laravel and PHP applications, Go/Fiber APIs, PostgreSQL and MySQL/MariaDB workflows, authentication, reporting, and Docker-based development. I also work with Python and machine learning, which helps me approach product development with a data-oriented mindset. I enjoy turning operational requirements into clear, maintainable user experiences and reliable application workflows.",
  avatar: {
    src: "/images/profile/ferry-khusnil-arief.jpg",
    alt: "Portrait photograph of Ferry Khusnil Arief wearing a black t-shirt, standing outdoors in the evening.",
  },
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    summary: "Typed component work, responsive layout, and accessible interface states.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    summary: "Application logic, HTTP APIs, and access control across Go and PHP stacks.",
    skills: [
      "PHP",
      "Laravel",
      "Go",
      "Fiber",
      "REST API development",
      "Authentication / JWT",
      "Role-based access control",
    ],
  },
  {
    id: "data",
    label: "Data",
    summary: "Relational schema work plus applied experimentation in Python notebooks.",
    skills: [
      "PostgreSQL",
      "MySQL / MariaDB",
      "Python",
      "Jupyter",
      "TensorFlow",
      "Keras",
      "K-Means",
    ],
  },
  {
    id: "engineering",
    label: "Engineering",
    summary: "Local environment reproducibility, API documentation, and delivery hygiene.",
    skills: [
      "Docker Compose",
      "Swagger / OpenAPI",
      "Git / GitHub",
      "Testing",
      "Deployment",
    ],
  },
];

export const experience: ExperienceEntry[] = [
  {
    id: "campus-reservation",
    kind: "internship",
    title: "Web Developer Intern — Campus Reservation System",
    organization: "PT Microdata Indonesia",
    period: "Dec 2025 — Feb 2026",
    location: "Lampung, Indonesia",
    description:
      "Contributed to a web-based Campus Reservation system that digitized campus facility availability, booking requests, administrative approval, attendance verification, and reporting.",
    highlights: [
      "Developed reservation workflows and CRUD functionality for facilities, bookings, user profiles, and reservation records.",
      "Implemented JWT authentication, role-based access, booking approval flows, and QR-based check-in and check-out handling.",
      "Tested features, investigated defects, and collaborated with the development team to improve application reliability and usability.",
    ],
  },
  {
    id: "sistem-rapor",
    kind: "academic",
    title: "Full Stack Developer — Sistem Rapor",
    organization: "Coursework project",
    period: "2026",
    location: "Lampung, Indonesia",
    description:
      "Built a Laravel academic reporting application covering class, student, teacher, subject, and grade management with printable report documents.",
    highlights: [
      "Modelled the academic domain with migrations and seeders across classes, students, teachers, subjects, and grades.",
      "Applied role-based routing for admin and teacher access using Laravel Breeze authentication with public registration disabled.",
      "Generated printable and downloadable PDF report cards using DomPDF.",
    ],
  },
  {
    id: "portfolio",
    kind: "project",
    title: "Developer — Portfolio redesign",
    organization: "Personal project",
    period: "2026",
    location: "Remote",
    description:
      "Rebuilt this portfolio from a Create React App single-page application into a Next.js App Router site with TypeScript, a typed content model, and metadata-driven SEO.",
    highlights: [
      "Replaced duplicated static data with one typed content source used by every route.",
      "Implemented route-level metadata, JSON-LD, sitemap, and robots handling.",
      "Added component and route tests covering navigation, project links, and contact actions.",
    ],
  },
  {
    id: "kmeans-thesis",
    kind: "research",
    title: "Researcher — Player clustering with K-Means",
    organization: "Undergraduate thesis",
    period: "2025 — 2026",
    location: "Lampung, Indonesia",
    description:
      "Clustered game player characteristics by feature preference and business model using K-Means in a Python notebook workflow.",
    highlights: [
      "Prepared and cleaned survey-style tabular data before clustering.",
      "Evaluated cluster counts and interpreted segment characteristics.",
      "Documented the analysis as a reproducible Jupyter notebook.",
    ],
  },
  {
    id: "cnn-research",
    kind: "research",
    title: "Researcher — CNN image classification studies",
    organization: "Academic and personal projects",
    period: "2023 — 2024",
    location: "Remote",
    description:
      "Implemented convolutional neural network pipelines for animal image classification and compared transfer learning architectures.",
    highlights: [
      "Built training and evaluation pipelines with TensorFlow and Keras.",
      "Compared InceptionV3, ResNet152V2, and Xception on the same dataset.",
      "Reported accuracy alongside model size and training cost trade-offs.",
    ],
  },
];
