import { profile } from "@/content/profile";
import { ActionLink } from "./action-link";

export function ContactCta() {
  return (
    <section
      aria-labelledby="contact-heading"
      id="contact"
      className="vintage-border-t bg-paper-muted py-14 sm:py-20"
    >
      <div className="container-editorial">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div className="max-w-xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="vintage-stamp">Available</span>
              <p className="eyebrow">Dispatch Desk</p>
            </div>
            <h2 id="contact-heading" className="text-headline font-sans font-bold tracking-tight text-ink-950">
              {profile.availability}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-700">
              The fastest way to reach me is email. My repositories show how I work, and my
              resume covers the same history in a single page.
            </p>
            <div className="mobile-stack-actions mt-8 gap-3">
              <ActionLink href={`mailto:${profile.email}`} variant="primary">
                Email me
              </ActionLink>
              <ActionLink href={profile.resumePath} variant="secondary">
                Download resume
              </ActionLink>
            </div>
          </div>

          <div className="vintage-border-box bg-paper p-6 sm:p-8">
            <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
              <div>
                <dt className="eyebrow mb-1.5">Email</dt>
                <dd>
                  <a
                    href={`mailto:${profile.email}`}
                    className="break-all font-mono text-sm text-ink-900 underline decoration-accent-600 decoration-2 underline-offset-4 hover:text-accent-600"
                  >
                    {profile.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow mb-1.5">Location</dt>
                <dd className="font-mono text-sm text-ink-800">{profile.location}</dd>
              </div>
              <div>
                <dt className="eyebrow mb-1.5">Phone</dt>
                <dd>
                  <a
                    href={`tel:${profile.phone}`}
                    className="font-mono text-sm text-ink-900 underline decoration-accent-600 decoration-2 underline-offset-4 hover:text-accent-600"
                  >
                    {profile.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow mb-1.5">GitHub</dt>
                <dd>
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-mono text-sm text-ink-900 underline decoration-accent-600 decoration-2 underline-offset-4 hover:text-accent-600"
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
                    className="font-mono text-sm text-ink-900 underline decoration-accent-600 decoration-2 underline-offset-4 hover:text-accent-600"
                  >
                    rief-shecter
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
