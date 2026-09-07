import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactCta } from "@/components/contact-cta";
import { ProjectLinks } from "@/components/project-links";
import { ProjectMediaFrame } from "@/components/project-media-frame";
import { TagList } from "@/components/tag-list";
import { getProjectBySlug, projects } from "@/content/projects";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Case study not found",
      description: "The requested case study does not exist.",
      robots: { index: false, follow: false },
    };
  }

  const screenshot = project.media.find((item) => item.kind === "screenshot" && item.src);

  return {
    title: project.title,
    description: project.outcome,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      title: `${project.title} — Ferry Khusnil Arief`,
      description: project.outcome,
      url: `/work/${project.slug}`,
      ...(screenshot?.src
        ? {
            images: [
              {
                url: screenshot.src,
                width: screenshot.width ?? 1350,
                height: screenshot.height ?? 576,
                alt: screenshot.alt,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Ferry Khusnil Arief`,
      description: project.outcome,
      ...(screenshot?.src ? { images: [screenshot.src] } : {}),
    },
  };
}

function SubSection({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section aria-labelledby={`${id}-heading`} className="vintage-border-t pt-8 sm:pt-10">
      {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
      <h2 id={`${id}-heading`} className="font-serif text-2xl font-bold tracking-tight text-ink-950 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-4 sm:mt-5 text-ink-800">{children}</div>
    </section>
  );
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <>
      <article className="py-12 sm:py-20">
        <div className="container-editorial">
          <div className="vintage-panel p-6 sm:p-10 lg:p-12">
            <nav aria-label="Breadcrumb" className="mb-6 font-mono text-xs uppercase tracking-wider text-ink-600">
              <Link href="/work" className="underline hover:text-ink-950">
                Work
              </Link>{" "}
              / <span className="text-ink-950 font-bold">{project.title}</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="vintage-stamp">Field Dossier</span>
              <span className="font-mono text-xs font-bold text-accent-700 uppercase">
                EST. {project.year} // {caseStudy.role}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-ink-950 tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="mt-5 max-w-3xl font-serif text-lg sm:text-xl leading-relaxed text-ink-800 italic border-l-4 border-accent-500 pl-4 bg-paper-muted py-2">
              {project.outcome}
            </p>

            <div className="mt-6">
              <TagList items={project.primaryStack} label={`Primary stack for ${project.title}`} />
            </div>

            <div className="mt-8">
              <ProjectMediaFrame
                media={project.media[0]!}
                priority
                sizes="(min-width: 1024px) 62rem, 100vw"
              />
            </div>

            <div className="mt-12 space-y-12 max-w-4xl">
              <SubSection id="problem" eyebrow="Context" title="The problem">
                <div className="space-y-4">
                  {caseStudy.problem.map((para) => (
                    <p key={para} className="leading-relaxed sm:text-lg">
                      {para}
                    </p>
                  ))}
                </div>
              </SubSection>

              <SubSection id="contribution" eyebrow="Ownership" title="Role and contribution">
                <div className="space-y-4">
                  {caseStudy.contribution.map((para) => (
                    <p key={para} className="leading-relaxed sm:text-lg">
                      {para}
                    </p>
                  ))}
                </div>
              </SubSection>

              <SubSection id="architecture" eyebrow="System Design" title="Architecture">
                <p className="leading-relaxed sm:text-lg">{caseStudy.architectureSummary}</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {caseStudy.architecture.map((item) => (
                    <div key={item.label} className="vintage-border-box p-4 bg-paper">
                      <p className="font-mono text-xs font-bold uppercase text-accent-700 mb-1">
                        {item.label}
                      </p>
                      <p className="text-xs sm:text-sm text-ink-700">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </SubSection>

              <SubSection id="stack" eyebrow="Components" title="Stack detail">
                <div className="grid gap-4 sm:grid-cols-2">
                  {caseStudy.stack.map((item) => (
                    <div key={item.label} className="vintage-border-box p-4 bg-paper">
                      <p className="font-mono text-xs font-bold uppercase text-accent-700 mb-2">
                        {item.label}
                      </p>
                      <ul className="space-y-1 font-mono text-xs text-ink-900">
                        {item.items.map((tech) => (
                          <li key={tech} className="list-disc list-inside">
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </SubSection>

              <SubSection id="decisions" eyebrow="Rationale" title="Key decisions">
                <ul className="space-y-4">
                  {caseStudy.decisions.map((decision) => (
                    <li key={decision.title} className="vintage-border-box p-5 bg-paper">
                      <h3 className="font-serif text-base font-bold text-ink-950">{decision.title}</h3>
                      <p className="mt-1 text-sm text-ink-700">{decision.detail}</p>
                    </li>
                  ))}
                </ul>
              </SubSection>

              <SubSection id="challenges" eyebrow="Hard Problems" title="Challenges">
                <ul className="space-y-4">
                  {caseStudy.challenges.map((challenge) => (
                    <li key={challenge.title} className="vintage-border-box p-5 bg-paper">
                      <h3 className="font-serif text-base font-bold text-ink-950">{challenge.title}</h3>
                      <p className="mt-1 text-sm text-ink-700">{challenge.detail}</p>
                    </li>
                  ))}
                </ul>
              </SubSection>

              <SubSection id="limitations" eyebrow="Honest Reflection" title="Limitations and next steps">
                <ul className="space-y-3">
                  {caseStudy.limitations.map((limitation) => (
                    <li key={limitation} className="text-sm leading-relaxed text-ink-700 list-disc list-inside">
                      {limitation}
                    </li>
                  ))}
                </ul>
              </SubSection>

              <SubSection id="links" eyebrow="Verification" title="Source and deployment">
                <div className="vintage-border-box p-6 bg-paper">
                  <div className="flex flex-wrap items-center gap-6">
                    <ProjectLinks project={project} />
                  </div>
                  {!project.liveUrl && (
                    <p className="mt-4 font-mono text-xs text-ink-600 border-t border-ink-200 pt-3">
                      [DISCLOSURE] — Internal university or client codebase; no live demo link is offered. Repository code is accessible above.
                    </p>
                  )}
                </div>
              </SubSection>
            </div>
          </div>
        </div>
      </article>

      <ContactCta />
    </>
  );
}
