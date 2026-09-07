import Link from "next/link";
import type { Project } from "@/content/types";
import { ProjectLinks } from "./project-links";
import { TagList } from "./tag-list";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="vintage-border-box bg-paper p-6 sm:p-8">
      <div className="grid gap-4 lg:grid-cols-[auto_1fr_auto] lg:items-start lg:gap-10">
        <div className="flex items-center gap-3 lg:block">
          <p aria-hidden="true" className="font-mono text-xl font-bold text-accent-600">
            №{String(index + 1).padStart(2, "0")}
          </p>
        </div>

        <div className="max-w-2xl">
          <h3 className="font-serif text-2xl font-bold tracking-tight text-ink-950 sm:text-3xl">
            <Link
              href={`/work/${project.slug}`}
              className="decoration-accent-500 decoration-2 underline-offset-[6px] hover:underline hover:text-accent-600 transition-colors"
            >
              {project.title}
            </Link>
          </h3>
          <p className="mt-3 text-base leading-relaxed text-ink-700">{project.outcome}</p>
          <TagList
            items={project.primaryStack}
            label={`Primary stack for ${project.title}`}
            className="mt-5"
          />
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <Link
              href={`/work/${project.slug}`}
              className="font-mono text-xs font-bold uppercase tracking-wider text-ink-950 underline decoration-accent-600 decoration-2 underline-offset-4 hover:text-accent-600"
            >
              Read case study →
            </Link>
            <ProjectLinks project={project} />
          </div>
        </div>

        <div className="order-first lg:order-none lg:text-right">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-ink-600 border border-ink-300 bg-paper-muted px-2 py-0.5 rounded-editorial">
            EST. {project.year}
          </span>
        </div>
      </div>
    </article>
  );
}
