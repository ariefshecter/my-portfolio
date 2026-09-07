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
    "Ferry Khusnil Arief is a junior Full Stack Developer from Lampung, Indonesia, with internship experience building reservation workflows and working across Next.js and TypeScript frontends, Laravel and Go/Fiber backends, relational databases, and applied machine learning.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Ferry Khusnil Arief",
    description:
      "Full stack positioning, internship experience, evidence-based skills, and project and academic work.",
    url: "/about",
  },
};

const kindLabel: Record<string, string> = {
  internship: "Internship",
  project: "Personal project",
  academic: "Coursework",
  research: "Research",
};

export default function AboutPage() {
  return (
    <>
      <section aria-labelledby="about-heading" className="py-12 sm:py-20">
        <div className="container-editorial">
          <div className="vintage-panel p-6 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start lg:gap-14">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="vintage-stamp">Dossier</span>
                  <p className="eyebrow">Personnel Record</p>
                </div>
                <h1 id="about-heading" className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-ink-950 tracking-tight leading-tight">
                  {profile.headline}
                </h1>
                <p className="mt-6 text-base sm:text-lg leading-relaxed text-ink-800 font-mono border-l-4 border-accent-500 pl-4 bg-paper-muted py-2">
                  {profile.summary}
                </p>

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
                <div className="vintage-border-box overflow-hidden bg-paper-sunken p-2">
                  <Image
                    src={profile.avatar.src}
                    alt={profile.avatar.alt}
                    width={720}
                    height={720}
                    sizes="(min-width: 1024px) 24rem, (min-width: 640px) 60vw, 100vw"
                    className="h-auto w-full sepia-[0.2] contrast-[1.08] border border-ink-800"
                    priority
                  />
                  <div className="pt-2 text-center font-mono text-[0.65rem] uppercase tracking-widest text-ink-600">
                    IDENTIFICATION RECORD // 2026
                  </div>
                </div>

                <div className="vintage-border-box mt-5 bg-paper-sunken p-5 sm:mt-6">
                  <dl className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
                    <div>
                      <dt className="eyebrow mb-1 text-accent-700">Role</dt>
                      <dd className="font-mono text-sm font-bold text-ink-900">{profile.role}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow mb-1 text-accent-700">Location</dt>
                      <dd className="font-mono text-sm font-bold text-ink-900">{profile.location}</dd>
                    </div>
                    <div className="sm:col-span-2 border-t border-ink-300 pt-3">
                      <dt className="eyebrow mb-1 text-accent-700">Availability</dt>
                      <dd className="font-mono text-sm font-bold text-ink-900">{profile.availability}</dd>
                    </div>
                  </dl>
                </div>
              </div>
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
        <div className="grid gap-6 sm:grid-cols-3 sm:gap-8">
          <div className="vintage-border-box bg-paper p-6">
            <span className="font-mono text-xs font-bold text-accent-700 uppercase tracking-widest">STRAND I</span>
            <h3 className="mt-2 font-sans text-lg font-bold text-ink-950">Web application development</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-700">
              Typed Next.js and React interfaces, Blade templates, responsive layout, and
              accessible interaction states. I care about the states a screen has, not only its
              happy path.
            </p>
          </div>
          <div className="vintage-border-box bg-paper p-6">
            <span className="font-mono text-xs font-bold text-accent-700 uppercase tracking-widest">STRAND II</span>
            <h3 className="mt-2 font-sans text-lg font-bold text-ink-950">Backend APIs &amp; schemas</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-700">
              Clean HTTP endpoints, explicit request validation, database transactions, and
              relational models that match the real domain. I would rather make invalid state
              unrepresentable than patch it after deployment.
            </p>
          </div>
          <div className="vintage-border-box bg-paper p-6">
            <span className="font-mono text-xs font-bold text-accent-700 uppercase tracking-widest">STRAND III</span>
            <h3 className="mt-2 font-sans text-lg font-bold text-ink-950">Applied ML &amp; product data</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-700">
              Feature extraction, classification workflows, and model evaluations that answer
              product questions. ML work taught me to distrust intuition and test against real
              distributions.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="skills"
        eyebrow="Capabilities"
        title="Skills by category"
        intro="Grouped by how they appear in my work. Listed where I have produced working systems or coursework, not where I have only read the documentation."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.id} className="vintage-border-box bg-paper p-5">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-accent-700 border-b-2 border-ink-800 pb-2">
                {group.label}
              </h3>
              <p className="mt-2 text-xs text-ink-600 italic">{group.summary}</p>
              <TagList items={group.skills} label={group.label} className="mt-4" />
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="experience"
        eyebrow="History"
        title="Experience &amp; milestones"
        intro="Internship work, education, and significant build phases. Each entry reflects real responsibilities and deliverables."
      >
        <ol className="space-y-6">
          {experience.map((item) => (
            <li key={`${item.title}-${item.period}`} className="vintage-border-box bg-paper p-6 sm:p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-ink-300 pb-2">
                <div>
                  <span className="mr-2 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-accent-700 border border-accent-600 px-1.5 py-0.5">
                    {kindLabel[item.kind] ?? item.kind}
                  </span>
                  <h3 className="inline font-sans text-lg font-bold text-ink-950">{item.title}</h3>
                </div>
                <span className="font-mono text-xs text-ink-600 font-semibold">{item.period}</span>
              </div>
              <p className="mt-2 font-mono text-xs text-ink-700">{item.organization}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">{item.description}</p>
              {item.highlights && item.highlights.length > 0 ? (
                <ul className="mt-4 space-y-1.5 border-t border-ink-200 pt-3">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="text-xs text-ink-600 list-disc list-inside">
                      {highlight}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ol>
      </Section>

      <ContactCta />
    </>
  );
}
