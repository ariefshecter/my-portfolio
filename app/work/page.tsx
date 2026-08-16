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
      <section aria-labelledby="work-heading" className="py-16 sm:py-20">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Work</p>
            <h1 id="work-heading" className="text-display font-serif font-semibold">
              Case studies
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-600">
              Three projects carry the most technical weight. Each one documents the problem, the
              architecture, the decisions behind it, and its current limitations. Everything else
              sits in the archive below.
            </p>
          </div>
        </div>
      </section>

      <Section
        id="case-studies"
        eyebrow="Detailed"
        title="Featured case studies"
        intro="Repository links are always live. A live site link appears only where a public deployment exists."
      >
        <ol className="space-y-10">
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
        <div className="space-y-12">
          {grouped.map((group) => (
            <div key={group.category}>
              <h3 className="eyebrow mb-4">{group.category}</h3>
              <ul className="divide-y divide-ink-100 border-t border-ink-100">
                {group.items.map((item) => (
                  <li key={item.repositoryUrl} className="py-5">
                    <div className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8">
                      <div className="max-w-2xl">
                        <h4 className="text-base font-medium text-ink-900">{item.name}</h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                          {item.description}
                        </p>
                        <p className="mt-2 font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-ink-400">
                          {item.tech.join(" · ")}
                        </p>
                      </div>
                      <a
                        href={item.repositoryUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-sm text-ink-700 underline decoration-ink-400 decoration-2 underline-offset-4 hover:text-ink-900 hover:decoration-accent-600 sm:whitespace-nowrap"
                      >
                        View repository
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
