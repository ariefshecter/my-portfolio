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
      <section aria-labelledby="intro-heading" className="py-14 sm:py-24">
        <div className="container-editorial">
          {/* Retro Newspaper Header Masthead */}
          <div className="mb-10 vintage-border-b pb-4 text-center">
            <div className="flex flex-wrap items-center justify-between border-b border-ink-300 pb-1.5 font-mono text-[0.6875rem] uppercase tracking-wider text-ink-600">
              <span>EDITION: PERSONAL ARCHIVE</span>
              <span>DEV DISPATCH & FIELD REPORT</span>
              <span>{profile.location.toUpperCase()}</span>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-12">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="vintage-stamp">Certified Portfolio</span>
                <p className="eyebrow">
                  {profile.role}
                </p>
              </div>
              <h1 id="intro-heading" className="text-display font-serif font-bold tracking-tight text-ink-950">
                {profile.name}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-700 sm:text-xl">
                I build web systems end to end: typed Next.js interfaces, Laravel and Go APIs,
                relational data models, and the authentication and reporting workflows that make
                them usable. Applied Python and machine learning work shapes how I read product
                data.
              </p>
              <div className="mobile-stack-actions mt-8 gap-3 sm:mt-9">
                <ActionLink href="/work" variant="primary">
                  View selected work
                </ActionLink>
                <ActionLink href={profile.resumePath} variant="secondary">
                  Download resume
                </ActionLink>
              </div>
            </div>

            <div className="vintage-border-box bg-paper p-6 sm:p-7">
              <div className="mb-4 border-b border-ink-300 pb-2">
                <span className="eyebrow font-bold text-ink-900">CORE COMPETENCIES & INDEX</span>
              </div>
              <dl className="grid grid-cols-2 gap-x-5 gap-y-5">
                {skillGroups.map((group) => (
                  <div key={group.id}>
                    <dt className="eyebrow mb-1.5 text-accent-700">{group.label}</dt>
                    <dd className="font-mono text-xs leading-relaxed text-ink-800">
                      {group.skills.slice(0, 4).join(", ")}
                    </dd>
                  </div>
                ))}
              </dl>
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
          <div className="vintage-border-box bg-paper p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start lg:gap-10">
              <ProjectMediaFrame
                media={leadProject.media[0]!}
                priority
                sizes="(min-width: 1024px) 40rem, 100vw"
              />
              <div>
                <TagList
                  items={leadProject.primaryStack}
                  label={`Primary stack for ${leadProject.title}`}
                />
                <p className="mt-5 text-base leading-relaxed text-ink-700 sm:mt-6">
                  {leadProject.caseStudy.architectureSummary}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm sm:mt-7">
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
        <p className="mt-10 text-sm sm:mt-12">
          <Link
            href="/work"
            className="font-mono text-xs font-bold uppercase tracking-wider text-ink-950 underline decoration-accent-600 decoration-2 underline-offset-4 hover:text-accent-600"
          >
            See all work, including supporting projects →
          </Link>
        </p>
      </Section>

      <ContactCta />
    </>
  );
}
