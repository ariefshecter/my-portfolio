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
    <article className="border-t border-ink-200 pt-6 sm:pt-8">
      <div className="grid gap-4 lg:grid-cols-[auto_1fr_auto] lg:items-start lg:gap-10">
        <p aria-hidden="true" className="font-mono text-sm text-ink-300">
          {String(index + 1).padStart(2, "0")}
        </p>

        <div className="max-w-2xl">
          <h3 className="font-serif text-2xl font-semibold sm:text-3xl">
            <Link
              href={`/work/${project.slug}`}
              className="decoration-accent-600 decoration-2 underline-offset-[6px] hover:underline"
            >
              {project.title}
            </Link>
          </h3>
          <p className="mt-3 text-base leading-relaxed text-ink-600">{project.outcome}</p>
          <TagList
            items={project.primaryStack}
            label={`Primary stack for ${project.title}`}
            className="mt-5"
          />
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <Link
              href={`/work/${project.slug}`}
              className="font-medium text-ink-900 underline decoration-accent-600 decoration-2 underline-offset-4"
            >
              Read case study
            </Link>
            <ProjectLinks project={project} />
          </div>
        </div>

        <p className="order-first font-mono text-xs uppercase tracking-[0.12em] text-ink-400 lg:order-none lg:text-right">
          {project.year}
        </p>
      </div>
    </article>
  );
}
