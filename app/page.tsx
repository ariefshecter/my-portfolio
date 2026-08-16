import Link from "next/link";
import { ActionLink } from "@/components/action-link";
import { ContactCta } from "@/components/contact-cta";
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
          <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-12">
            <div className="max-w-2xl">
              <p className="eyebrow mb-5">
                {profile.role} · {profile.location}
              </p>
              <h1 id="intro-heading" className="text-display font-serif font-semibold">
                {profile.name}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600 sm:text-xl">
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

            <dl className="grid grid-cols-2 gap-x-5 gap-y-5 border-t border-ink-100 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              {skillGroups.map((group) => (
                <div key={group.id}>
                  <dt className="eyebrow mb-2">{group.label}</dt>
                  <dd className="text-sm leading-relaxed text-ink-700">
                    {group.skills.slice(0, 4).join(", ")}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {leadProject ? (
        <Section
          id="lead-project"
          eyebrow="Featured build"
          title={leadProject.title}
          intro={leadProject.outcome}
        >
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
              <p className="mt-5 text-base leading-relaxed text-ink-600 sm:mt-6">
                {leadProject.caseStudy.architectureSummary}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm sm:mt-7">
                <Link
                  href={`/work/${leadProject.slug}`}
                  className="font-medium text-ink-900 underline decoration-accent-600 decoration-2 underline-offset-4"
                >
                  Read case study
                </Link>
                <ProjectLinks project={leadProject} />
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
        <ol className="space-y-10">
          {featuredProjects.map((project, index) => (
            <li key={project.slug}>
              <article className="border-t border-ink-200 pt-6 sm:pt-8">
                <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
                  <div>
                    <p aria-hidden="true" className="mb-2 font-mono text-sm text-ink-300">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-serif text-2xl font-semibold sm:text-3xl">
                      <Link
                        href={`/work/${project.slug}`}
                        className="decoration-accent-600 decoration-2 underline-offset-[6px] hover:underline"
                      >
                        {project.title}
                      </Link>
                    </h3>
                    <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-ink-600 sm:text-base">
                      {project.outcome}
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm sm:mt-6">
                      <Link
                        href={`/work/${project.slug}`}
                        className="font-medium text-ink-900 underline decoration-accent-600 decoration-2 underline-offset-4"
                      >
                        Read case study
                      </Link>
                      <ProjectLinks project={project} />
                    </div>
                  </div>
                  <div className="lg:pt-14">
                    <TagList
                      items={project.primaryStack}
                      label={`Primary stack for ${project.title}`}
                    />
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
        <p className="mt-10 text-sm sm:mt-12">
          <Link
            href="/work"
            className="font-medium text-ink-900 underline decoration-accent-600 decoration-2 underline-offset-4"
          >
            See all work, including supporting projects
          </Link>
        </p>
      </Section>

      <ContactCta />
    </>
  );
}
