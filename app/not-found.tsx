import Link from "next/link";
import { ActionLink } from "@/components/action-link";

export default function NotFound() {
  return (
    <section aria-labelledby="not-found-heading" className="py-24 sm:py-32">
      <div className="container-editorial">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">Error 404</p>
          <h1 id="not-found-heading" className="text-display font-serif font-semibold">
            Page not found
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-600">
            That URL does not match any page on this site. If you were looking for a project, the
            work index lists every case study and supporting repository.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ActionLink href="/work" variant="primary">
              View selected work
            </ActionLink>
            <ActionLink href="/" variant="secondary">
              Back to home
            </ActionLink>
          </div>
          <p className="mt-8 text-sm text-ink-500">
            Or read the{" "}
            <Link
              href="/about"
              className="underline decoration-accent-600 decoration-2 underline-offset-4 hover:text-ink-900"
            >
              about page
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
