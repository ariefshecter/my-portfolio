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

/**
 * Only the known case-study slugs are valid routes. Anything else resolves to the
 * static not-found page instead of being rendered on demand, so a deep link to a
 * missing slug returns real 404 markup even without client-side JavaScript.
 */
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
    <section aria-labelledby={`${id}-heading`} className="border-t border-ink-100 pt-8 sm:pt-10">
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 id={`${id}-heading`} className="font-serif text-2xl font-semibold sm:text-3xl">
        {title}
      </h2>
      <div className="mt-4 sm:mt-5">{children}</div>
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
      <article>
        <header className="py-14 sm:py-20">
          <div className="container-editorial">
            <nav aria-label="Breadcrumb" className="mb-7 sm:mb-8">
              <ol className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-ink-400">
                <li>
                  <Link href="/work" className="hover:text-ink-700">
                    Work
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-ink-600">{project.shortLabel}</li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <p className="eyebrow mb-4">
                {project.year} · {project.primaryStack.join(" · ")}
              </p>
              <h1 className="text-display font-serif font-semibold">{project.title}</h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-600 sm:mt-6 sm:text-xl">
                {project.outcome}
              </p>
              <p className="mt-5 text-base leading-relaxed text-ink-600">{project.description}</p>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm sm:mt-8">
                <ProjectLinks project={project} />
              </div>
            </div>
          </div>
        </header>

        <div className="container-editorial pb-14 sm:pb-20">
          <div className="space-y-9 sm:space-y-10">
            {project.media.map((media, index) => (
              <ProjectMediaFrame
                key={media.src ?? `${project.slug}-media-${index}`}
                media={media}
                priority={index === 0}
              />
            ))}

            <SubSection id="problem" eyebrow="Context" title="The problem">
              <div className="max-w-2xl space-y-4 text-base leading-relaxed text-ink-600">
                {caseStudy.problem.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </SubSection>

            <SubSection id="role" eyebrow="Ownership" title="Role and contribution">
              <p className="max-w-2xl text-base leading-relaxed text-ink-700">{caseStudy.role}</p>
              <ul className="mt-6 max-w-2xl space-y-3">
                {caseStudy.contribution.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-relaxed text-ink-600">
                    <span aria-hidden="true" className="mt-2.5 h-1 w-3 shrink-0 bg-accent-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </SubSection>

            <SubSection id="architecture" eyebrow="System" title="Architecture">
              <p className="max-w-2xl text-base leading-relaxed text-ink-600">
                {caseStudy.architectureSummary}
              </p>
              <ol className="mt-8 space-y-0 border-t border-ink-100">
                {caseStudy.architecture.map((layer, index) => (
                  <li
                    key={layer.label}
                    className="grid gap-2 border-b border-ink-100 py-5 sm:grid-cols-[auto_1fr] sm:gap-8"
                  >
                    <p
                      aria-hidden="true"
                      className="font-mono text-xs uppercase tracking-[0.12em] text-ink-300 sm:pt-1"
                    >
                      L{index + 1}
                    </p>
                    <div>
                      <h3 className="text-base font-medium text-ink-900">{layer.label}</h3>
                      <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-ink-600">
                        {layer.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </SubSection>

            <SubSection id="stack" eyebrow="Implementation" title="Stack detail">
              <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {caseStudy.stack.map((section) => (
                  <div key={section.label}>
                    <dt className="eyebrow mb-3">{section.label}</dt>
                    <dd>
                      <TagList items={section.items} label={`${section.label} technologies`} />
                    </dd>
                  </div>
                ))}
              </dl>
            </SubSection>

            <SubSection id="decisions" eyebrow="Reasoning" title="Key decisions">
              <ul className="grid gap-6 sm:grid-cols-2">
                {caseStudy.decisions.map((decision) => (
                  <li
                    key={decision.title}
                    className="rounded-editorial border border-ink-100 bg-paper-muted p-5"
                  >
                    <h3 className="text-base font-medium text-ink-900">{decision.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">{decision.detail}</p>
                  </li>
                ))}
              </ul>
            </SubSection>

            <SubSection id="challenges" eyebrow="Friction" title="Challenges">
              <ul className="max-w-2xl space-y-6">
                {caseStudy.challenges.map((challenge) => (
                  <li key={challenge.title} className="rule-accent pt-5">
                    <h3 className="text-base font-medium text-ink-900">{challenge.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">{challenge.detail}</p>
                  </li>
                ))}
              </ul>
            </SubSection>

            <SubSection id="limitations" eyebrow="Honest scope" title="Limitations and next steps">
              <ul className="max-w-2xl space-y-3">
                {caseStudy.limitations.map((limitation) => (
                  <li key={limitation} className="flex gap-3 text-base leading-relaxed text-ink-600">
                    <span aria-hidden="true" className="mt-2.5 h-1 w-3 shrink-0 bg-ink-300" />
                    <span>{limitation}</span>
                  </li>
                ))}
              </ul>
            </SubSection>

            <SubSection id="links" eyebrow="Verify" title="Source and deployment">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-base">
                <ProjectLinks project={project} />
              </div>
              {!project.liveUrl && (
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-500">
                  This project runs locally and has no public deployment, so no live demo link is
                  offered.
                </p>
              )}
              <p className="mt-8 text-sm">
                <Link
                  href="/work"
                  className="font-medium text-ink-900 underline decoration-accent-600 decoration-2 underline-offset-4"
                >
                  Back to all work
                </Link>
              </p>
            </SubSection>
          </div>
        </div>
      </article>

      <ContactCta />
    </>
  );
}
