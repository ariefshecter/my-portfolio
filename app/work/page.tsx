import type { Metadata } from "next";
import { ContactCta } from "@/components/contact-cta";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { archiveProjects, featuredProjects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Three full stack case studies — a Go/Fiber campus reservation platform, a Laravel academic reporting system, and this Next.js portfolio — plus supporting machine learning, game, and mobile projects.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work — Ferry Khusnil Arief",
    description:
      "Full stack case studies covering Next.js, Go/Fiber, Laravel, PostgreSQL, and MySQL, plus a supporting project archive.",
    url: "/work",
  },
};

const categoryOrder = [
  "Machine learning",
  "Web",
  "Mobile",
  "Games",
  "Experiments",
] as const;

export default function WorkPage() {
  const grouped = categoryOrder
    .map((category) => ({
      category,
      items: archiveProjects.filter((project) => project.category === category),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <>
      <section aria-labelledby="work-heading" className="py-12 sm:py-20">
        <div className="container-editorial">
          <div className="vintage-panel p-6 sm:p-10 lg:p-12">
            <div className="max-w-3xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="vintage-stamp">Index</span>
                <p className="eyebrow">Engineering Repository</p>
              </div>
              <h1 id="work-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-ink-950 tracking-tight">
                Case studies &amp; Project Archive
              </h1>
              <p className="mt-6 font-serif text-lg leading-relaxed text-ink-800 italic border-l-4 border-accent-500 pl-4 bg-paper-muted py-2">
                Documenting production-ready applications, architectural trade-offs, database schemes,
                and technical constraints across multiple ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Section
        id="case-studies"
        eyebrow="Detailed"
        title="Featured case studies"
        intro="Repository links are always live. A live site link appears only where a public deployment exists."
      >
        <ol className="space-y-6 sm:space-y-8">
          {featuredProjects.map((project, index) => (
            <li key={project.slug}>
              <ProjectCard project={project} index={index} />
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="archive"
        eyebrow="Archive"
        title="Supporting work"
        intro="Smaller projects, research notebooks, and earlier experiments. Listed for completeness rather than presented as flagship work."
      >
        <div className="space-y-10 sm:space-y-12">
          {grouped.map((group) => (
            <div key={group.category} className="vintage-panel p-6 sm:p-8">
              <div className="mb-6 flex items-center justify-between border-b-2 border-ink-800 pb-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-accent-700 uppercase tracking-widest">
                    ARCHIVE CATEGORY
                  </span>
                  <span className="text-ink-400">/</span>
                  <h3 className="font-serif text-xl font-bold text-ink-950">{group.category}</h3>
                </div>
                <span className="font-mono text-xs text-ink-700 font-bold bg-paper-sunken px-2.5 py-1 border border-ink-400">
                  {group.items.length} RECORDS
                </span>
              </div>
              <ul className="divide-y-2 divide-ink-200">
                {group.items.map((item) => (
                  <li key={item.repositoryUrl} className="py-5 first:pt-2 last:pb-2 sm:py-6">
                    <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8">
                      <div className="max-w-2xl">
                        <h4 className="font-serif text-lg font-bold text-ink-950">{item.name}</h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-700">
                          {item.description}
                        </p>
                        <p className="mt-2.5 font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-accent-700 font-bold">
                          {item.tech.join(" · ")}
                        </p>
                      </div>
                      <a
                        href={item.repositoryUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="min-h-11 pt-2 font-mono text-xs font-bold uppercase tracking-wider text-ink-950 underline decoration-accent-600 decoration-2 underline-offset-4 hover:text-accent-600 sm:min-h-0 sm:pt-0 sm:whitespace-nowrap"
                      >
                        View repository →
                        <span className="sr-only"> for {item.name} on GitHub</span>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
