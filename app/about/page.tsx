import type { Metadata } from "next";
import Image from "next/image";
import { ActionLink } from "@/components/action-link";
import { ContactCta } from "@/components/contact-cta";
import { Section } from "@/components/section";
import { TagList } from "@/components/tag-list";
import { experience, profile, skillGroups } from "@/content/profile";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ferry Khusnil Arief is a junior Full Stack Developer from Lampung, Indonesia, working across Next.js and TypeScript frontends, Laravel and Go/Fiber backends, relational databases, and applied machine learning.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Ferry Khusnil Arief",
    description:
      "Full stack positioning, evidence-based skills, and project and academic experience.",
    url: "/about",
  },
};

const kindLabel: Record<string, string> = {
  project: "Personal project",
  academic: "Coursework",
  research: "Research",
};

export default function AboutPage() {
  return (
    <>
      <section aria-labelledby="about-heading" className="py-14 sm:py-20">
        <div className="container-editorial">
          <div className="grid gap-9 lg:grid-cols-[1.3fr_1fr] lg:items-start lg:gap-12">
            <div className="max-w-2xl">
              <p className="eyebrow mb-4">About</p>
              <h1 id="about-heading" className="text-display font-serif font-semibold">
                {profile.headline}
              </h1>
              <p className="mt-7 text-lg leading-relaxed text-ink-600">{profile.summary}</p>
              <div className="mobile-stack-actions mt-8 gap-3 sm:mt-9">
                <ActionLink href={profile.resumePath} variant="primary">
                  Download resume
                </ActionLink>
                <ActionLink href={profile.githubUrl} variant="secondary" external>
                  GitHub
                </ActionLink>
                <ActionLink href={profile.linkedinUrl} variant="secondary" external>
                  LinkedIn
                </ActionLink>
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-editorial border border-ink-200 bg-paper-sunken">
                <Image
                  src={profile.avatar.src}
                  alt={profile.avatar.alt}
                  width={720}
                  height={720}
                  sizes="(min-width: 1024px) 24rem, (min-width: 640px) 60vw, 100vw"
                  className="h-auto w-full"
                  priority
                />
              </div>
              <dl className="mt-5 grid gap-x-6 gap-y-4 sm:mt-6 sm:grid-cols-2">
                <div>
                  <dt className="eyebrow mb-1.5">Role</dt>
                  <dd className="text-sm text-ink-700">{profile.role}</dd>
                </div>
                <div>
                  <dt className="eyebrow mb-1.5">Location</dt>
                  <dd className="text-sm text-ink-700">{profile.location}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="eyebrow mb-1.5">Availability</dt>
                  <dd className="text-sm text-ink-700">{profile.availability}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <Section
        id="profile"
        eyebrow="Positioning"
        title="A complementary profile"
        intro="Three strands of work that reinforce each other rather than three unrelated interests."
      >
        <div className="grid gap-7 sm:grid-cols-3 sm:gap-8">
          <div className="rule-accent pt-6">
            <h3 className="text-base font-medium text-ink-900">Web application development</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">
              Typed Next.js and React interfaces, Blade templates, responsive layout, and
              accessible interaction states. I care about the states a screen has, not only its
              happy path.
            </p>
          </div>
          <div className="rule-accent pt-6">
            <h3 className="text-base font-medium text-ink-900">Backend and data workflows</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">
              Go/Fiber and Laravel APIs, JWT and session authentication, role-based access,
              relational schema design with PostgreSQL and MySQL, and document generation.
            </p>
          </div>
          <div className="rule-accent pt-6">
            <h3 className="text-base font-medium text-ink-900">Practical ML experimentation</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">
              Python notebooks covering CNN image classification and K-Means clustering. Not a
              research career — a habit of validating assumptions against data.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="skills"
        eyebrow="Evidence"
        title="Skills by category"
        intro="Grouped by where I have actually shipped something. Each group maps to code in a public repository."
      >
        <div className="space-y-0 border-t border-ink-100">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className="grid gap-4 border-b border-ink-100 py-6 sm:py-7 lg:grid-cols-[14rem_1fr] lg:gap-10"
            >
              <div>
                <h3 className="text-base font-medium text-ink-900">{group.label}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{group.summary}</p>
              </div>
              <TagList items={group.skills} label={`${group.label} skills`} className="lg:pt-1" />
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="experience"
        eyebrow="History"
        title="Project and academic experience"
        intro="Labelled honestly. These are personal projects, coursework, and research — not employment."
      >
        <ol className="space-y-0 border-t border-ink-100">
          {experience.map((entry) => (
            <li key={entry.id} className="border-b border-ink-100 py-7 sm:py-8">
              <div className="grid gap-4 lg:grid-cols-[12rem_1fr] lg:gap-10">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-ink-400">
                    {entry.period}
                  </p>
                  <p className="mt-2 inline-flex rounded-editorial border border-ink-100 bg-paper-muted px-2 py-0.5 font-mono text-[0.625rem] uppercase tracking-[0.1em] text-ink-500">
                    {kindLabel[entry.kind] ?? entry.kind}
                  </p>
                </div>
                <div className="max-w-2xl">
                  <h3 className="text-base font-medium text-ink-900">{entry.title}</h3>
                  <p className="mt-1 text-sm text-ink-500">
                    {entry.organization} · {entry.location}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">{entry.description}</p>
                  <ul className="mt-4 space-y-2">
                    {entry.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-relaxed text-ink-600"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-3 shrink-0 bg-accent-400"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <ContactCta />
    </>
  );
}
