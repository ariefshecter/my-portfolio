import { profile } from "@/content/profile";
import { ActionLink } from "./action-link";

export function ContactCta() {
  return (
    <section
      aria-labelledby="contact-heading"
      id="contact"
      className="border-t border-ink-100 bg-paper-muted py-16 sm:py-20"
    >
      <div className="container-editorial">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div className="max-w-xl">
            <p className="eyebrow mb-3">Availability</p>
            <h2 id="contact-heading" className="text-headline font-serif font-semibold">
              {profile.availability}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-600">
              The fastest way to reach me is email. My repositories show how I work, and my
              resume covers the same history in a single page.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionLink href={`mailto:${profile.email}`} variant="primary">
                Email me
              </ActionLink>
              <ActionLink href={profile.resumePath} variant="secondary">
                Download resume
              </ActionLink>
            </div>
          </div>

          <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
            <div>
              <dt className="eyebrow mb-1.5">Email</dt>
              <dd>
                <a
                  href={`mailto:${profile.email}`}
                  className="break-all text-sm text-ink-800 underline decoration-accent-600 decoration-2 underline-offset-4 hover:text-ink-900"
                >
                  {profile.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow mb-1.5">Location</dt>
              <dd className="text-sm text-ink-700">{profile.location}</dd>
            </div>
            <div>
              <dt className="eyebrow mb-1.5">GitHub</dt>
              <dd>
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm text-ink-800 underline decoration-accent-600 decoration-2 underline-offset-4 hover:text-ink-900"
                >
                  ariefshecter
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow mb-1.5">LinkedIn</dt>
              <dd>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm text-ink-800 underline decoration-accent-600 decoration-2 underline-offset-4 hover:text-ink-900"
                >
                  rief-shecter
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
