import Link from "next/link";
import { profile } from "@/content/profile";

const year = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-100 py-12">
      <div className="container-editorial">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-serif text-base font-semibold text-ink-900">{profile.name}</p>
            <p className="mt-1 text-sm text-ink-500">
              {profile.role} · {profile.location}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-6 sm:flex-row sm:gap-12">
            <div>
              <h2 className="eyebrow mb-3">Pages</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-ink-700 hover:text-ink-900">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="text-ink-700 hover:text-ink-900">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-ink-700 hover:text-ink-900">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="eyebrow mb-3">Contact</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href={`mailto:${profile.email}`} className="text-ink-700 hover:text-ink-900">
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-ink-700 hover:text-ink-900"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-ink-700 hover:text-ink-900"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={profile.resumePath} className="text-ink-700 hover:text-ink-900">
                    Resume (PDF)
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <p className="mt-10 border-t border-ink-100 pt-6 text-xs text-ink-400">
          © {year} {profile.name}. Built with Next.js and TypeScript.
        </p>
      </div>
    </footer>
  );
}
