export const profile = {
  // Identitas dasar
  name: "Ferry Khusnil Arief",
  displayName: "Ferry Khusnil Arief", // untuk logo / header singkat
  role: "Front-end Developer",
  tagline: "Design & build elegant, accessible web apps",

  // Ringkasan / bio (dipakai di About / Hero)
  shortBio:
    "Front-end developer passionate about building performant and accessible user interfaces using modern web tools.",
  longBio:
    "Saya seorang front-end developer yang fokus pada pembuatan antarmuka yang bersih, mudah diakses, dan memiliki performa baik. " +
    "Pengalaman saya meliputi pembuatan SPA dengan React, styling dengan Tailwind CSS, serta pengembangan komponen yang dapat diuji dan direuse. " +
    "Saya tertarik pada desain sistem, optimisasi performa, dan integrasi API sederhana untuk solusi nyata.",

  // Kontak & lokasi
  location: "Lampung, Indonesia",
  email: "ceryover@gmail.com",
  phone: "083199837037", // isi jika mau tampilkan
  website: "https://your-website.com", // atau GitHub Pages / personal domain

  // Foto / avatar (letakkan file di public/assets/profile/)
  avatar: "/assets/profile/profile.jpg",
  avatarPlaceholder: "/assets/profile/profile-placeholder.png",

  // Link resume (opsional)
  resume: "/assets/resume/resume.pdf", // atau external URL

  // Sosial (dipakai Footer / Contact)
  social: {
    github: "https://github.com/ariefshecter",
    linkedin: "https://linkedin.com/in/yourhandle",
    twitter: "https://twitter.com/yourhandle",
    instagram: "",
    website: "https://your-website.com",
    email: "ceryover@gmail.com",
  },

  // Quick stats / headline data (opsional, tampilkan di Hero)
  stats: [
    { id: "s1", label: "Years experience", value: "2+" },
    { id: "s2", label: "Projects", value: "10+" },
    { id: "s3", label: "Open source", value: "3" }
  ],

  // Skills utama (dipakai di About / Skills)
  skills: [
    { name: "HTML", level: "advanced" },
    { name: "CSS / Tailwind", level: "advanced" },
    { name: "JavaScript", level: "advanced" },
    { name: "React", level: "advanced" },
    { name: "Python", level: "intermediate" },
    { name: "Git", level: "advanced" }
  ],

  // Short list of tools / stack tags (dipakai untuk filter/tag)
  stack: ["React", "Tailwind", "JavaScript", "Python", "Vite/CRA", "Figma"],

  // Optional: preferensi tampilan yang bisa dipakai oleh ThemeToggle
  preferences: {
    preferredTheme: null // "light" | "dark" | null (null = follow system)
  }
};

export default profile;
