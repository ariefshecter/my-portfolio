import { profile, SITE_URL } from "@/content/profile";

export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: SITE_URL,
    email: `mailto:${profile.email}`,
    image: `${SITE_URL}${profile.avatar.src}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lampung",
      addressCountry: "ID",
    },
    knowsAbout: [
      "Next.js",
      "TypeScript",
      "React",
      "Laravel",
      "PHP",
      "Go",
      "PostgreSQL",
      "MySQL",
      "Python",
    ],
    sameAs: [profile.githubUrl, profile.linkedinUrl],
  };

  return (
    <script
      type="application/ld+json"
      // Verified facts only: name, role, location, links, and technologies evidenced by repositories.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${profile.name} — ${profile.role}`,
    url: SITE_URL,
    inLanguage: "en",
    author: {
      "@type": "Person",
      name: profile.name,
      url: SITE_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
