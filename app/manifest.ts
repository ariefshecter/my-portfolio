import type { MetadataRoute } from "next";
import { profile } from "@/content/profile";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} — ${profile.role}`,
    short_name: "F. K. Arief",
    description:
      "Portfolio of Ferry Khusnil Arief, a junior Full Stack Developer working with Next.js, TypeScript, Laravel, Go, and relational databases.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#171613",
    lang: "en",
    icons: [
      {
        src: "/icon.svg",
        type: "image/svg+xml",
        sizes: "any",
        purpose: "any",
      },
    ],
  };
}
