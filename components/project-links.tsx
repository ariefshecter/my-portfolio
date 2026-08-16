import type { Project } from "@/content/types";

interface ProjectLinksProps {
  project: Project;
  className?: string;
}

/**
 * Renders a repository link always, and a live link only when a deployment
 * is verified. No placeholder or inactive demo control is ever rendered.
 */
export function ProjectLinks({ project, className = "" }: ProjectLinksProps) {
  return (
    <span className={`inline-flex flex-wrap items-center gap-x-6 gap-y-2 ${className}`.trim()}>
      <a
        href={project.repositoryUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="text-ink-600 underline decoration-ink-400 decoration-2 underline-offset-4 hover:text-ink-900 hover:decoration-accent-600"
      >
        View repository
        <span className="sr-only"> for {project.title} on GitHub</span>
      </a>
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="text-ink-600 underline decoration-ink-400 decoration-2 underline-offset-4 hover:text-ink-900 hover:decoration-accent-600"
        >
          View live site
          <span className="sr-only"> for {project.title}</span>
        </a>
      ) : null}
    </span>
  );
}
