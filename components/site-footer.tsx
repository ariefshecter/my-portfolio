import Link from "next/link";
import { profile } from "@/content/profile";

const year = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="vintage-border-t bg-paper-muted py-12">
      <div className="container-editorial">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-serif text-base font-bold tracking-tight text-ink-950">{profile.name}</p>
            <p className="mt-1 font-mono text-xs text-ink-600">
              {profile.role} · {profile.location}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-6 sm:flex-row sm:gap-12">
            <div>
              <h2 className="eyebrow mb-3">Pages</h2>
              <ul className="space-y-2 font-mono text-xs uppercase tracking-wider">
                <li>
                  <Link href="/" className="text-ink-700 hover:text-ink-950 underline-offset-4 hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="text-ink-700 hover:text-ink-950 underline-offset-4 hover:underline">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-ink-700 hover:text-ink-950 underline-offset-4 hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="eyebrow mb-3">Contact</h2>
              <ul className="space-y-2 font-mono text-xs tracking-wider">
                <li>
                  <a href={`mailto:${profile.email}`} className="text-ink-700 hover:text-ink-950 underline-offset-4 hover:underline">
                    Email
                  </a>
                </li>
                <li>
                  <a href={`tel:${profile.phone}`} className="text-ink-700 hover:text-ink-950 underline-offset-4 hover:underline">
                    Phone
                  </a>
                </li>
                <li>
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-ink-700 hover:text-ink-950 underline-offset-4 hover:underline"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-ink-700 hover:text-ink-950 underline-offset-4 hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={profile.resumePath} className="text-ink-700 hover:text-ink-950 underline-offset-4 hover:underline">
                    Resume (PDF)
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <p className="mt-10 border-t border-ink-300 pt-6 font-mono text-xs text-ink-500">
          © {year} {profile.name}. Typed Edition — Next.js & TypeScript.
        </p>
      </div>
    </footer>
  );
}
