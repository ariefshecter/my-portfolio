import Link from "next/link";
import { ActionLink } from "@/components/action-link";
import { ContactCta } from "@/components/contact-cta";
import { ProjectCard } from "@/components/project-card";
import { ProjectMediaFrame } from "@/components/project-media-frame";
import { ProjectLinks } from "@/components/project-links";
import { Section } from "@/components/section";
import { TagList } from "@/components/tag-list";
import { featuredProjects } from "@/content/projects";
import { profile, skillGroups } from "@/content/profile";

const leadProject = featuredProjects[0];

export default function HomePage() {
  return (
    <>
      {/* Front-page Gazette Masthead */}
      <div className="border-b-4 border-ink-900 bg-paper-sunken py-3">
        <div className="container-editorial">
          <div className="flex flex-col gap-2 border-y-2 border-ink-800 py-2 sm:flex-row sm:items-center sm:justify-between font-mono text-[0.7rem] uppercase tracking-widest text-ink-700">
            <span className="font-bold">VOL. 02 — SPECIAL PORTFOLIO ISSUE</span>
            <span className="hidden sm:inline">OFFICIAL GAZETTE &amp; WORK ARCHIVE</span>
            <span className="font-semibold">{profile.location.toUpperCase()} · EST. 2026</span>
          </div>
        </div>
      </div>

      <section aria-labelledby="intro-heading" className="py-12 sm:py-20">
        <div className="container-editorial">
          <div className="vintage-panel p-6 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-start lg:gap-14">
              <div>
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="vintage-stamp">Available for Hire</span>
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-ink-600">
                    {profile.role}
                  </span>
                </div>

                <h1
                  id="intro-heading"
                  className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-ink-950 leading-[1.05]"
                >
                  {profile.name}
                </h1>

                <p className="mt-6 font-serif text-lg sm:text-xl leading-relaxed text-ink-800 italic border-l-4 border-accent-500 pl-4 bg-paper-muted py-2">
                  &ldquo;Building resilient web applications end to end: typed Next.js interfaces,
                  robust Laravel &amp; Go APIs, and structured relational workflows.&rdquo;
                </p>

                <p className="mt-5 text-base sm:text-lg leading-relaxed text-ink-700 font-sans">
                  Specialized in modern web engineering backed by practical machine learning analysis.
                  Delivering clean architectures, typed APIs, relational schema clarity, and verifiable production code.
                </p>

                <div className="mobile-stack-actions mt-8 gap-4 sm:mt-10">
                  <ActionLink href="/work" variant="primary">
                    View selected work
                  </ActionLink>
                  <ActionLink href={profile.resumePath} variant="secondary">
                    Download resume
                  </ActionLink>
                </div>
              </div>

              {/* Sidebar Index Card */}
              <div className="vintage-border-box p-5 sm:p-6 bg-paper-sunken">
                <div className="mb-4 border-b-2 border-ink-800 pb-2 flex items-center justify-between">
                  <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-ink-950">
                    Classification Index
                  </h2>
                  <span className="font-mono text-[0.65rem] uppercase text-accent-700 font-bold">
                    SEC. A-1
                  </span>
                </div>

                <dl className="divide-y divide-ink-300">
                  {skillGroups.map((group) => (
                    <div key={group.id} className="py-3 first:pt-0 last:pb-0">
                      <dt className="font-mono text-xs font-bold text-accent-700 uppercase tracking-wide">
                        {group.label}
                      </dt>
                      <dd className="mt-1 font-mono text-xs leading-relaxed text-ink-800">
                        {group.skills.join(", ")}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {leadProject ? (
        <Section
          id="lead-project"
          eyebrow="Lead Dispatch"
          title={leadProject.title}
          intro={leadProject.outcome}
        >
          <div className="vintage-panel p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start lg:gap-10">
              <ProjectMediaFrame
                media={leadProject.media[0]!}
                priority
                sizes="(min-width: 1024px) 40rem, 100vw"
              />
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="mb-4 inline-block font-mono text-xs font-bold uppercase tracking-widest text-accent-700 border-b-2 border-accent-600 pb-1">
                    Featured Architectural Case Study
                  </div>
                  <TagList
                    items={leadProject.primaryStack}
                    label={`Primary stack for ${leadProject.title}`}
                  />
                  <p className="mt-5 text-base leading-relaxed text-ink-800 sm:mt-6">
                    {leadProject.caseStudy.architectureSummary}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t-2 border-ink-800 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                  <Link
                    href={`/work/${leadProject.slug}`}
                    className="font-mono text-xs font-bold uppercase tracking-wider text-ink-950 underline decoration-accent-600 decoration-2 underline-offset-4 hover:text-accent-600"
                  >
                    Read case study →
                  </Link>
                  <ProjectLinks project={leadProject} />
                </div>
              </div>
            </div>
          </div>
        </Section>
      ) : null}

      <Section
        id="selected-work"
        eyebrow="Selected work"
        title="Three builds worth reviewing"
        intro="Each case study covers the problem, the architecture, the decisions I made, and what is still incomplete."
      >
        <ol className="space-y-6 sm:space-y-8">
          {featuredProjects.map((project, index) => (
            <li key={project.slug}>
              <ProjectCard project={project} index={index} />
            </li>
          ))}
        </ol>
        <div className="mt-10 border-t-2 border-ink-800 pt-6">
          <Link
            href="/work"
            className="font-mono text-xs font-bold uppercase tracking-widest text-ink-950 underline decoration-accent-600 decoration-2 underline-offset-4 hover:text-accent-600"
          >
            See all work, including supporting projects →
          </Link>
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
