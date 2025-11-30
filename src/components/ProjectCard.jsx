import React from "react";

/**
 * ProjectCard
 * Props:
 *  - project: {
 *      id, title, desc, img, link, repo, tags: []
 *    }
 */
export default function ProjectCard({ project }) {
  if (!project) return null;

  const { title, desc, img, link, repo, tags } = project;

  return (
    <article className="group bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-card-sm hover:shadow-card-md transition transform hover:-translate-y-1">
      {/* Image / preview */}
      <div className="h-44 w-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center overflow-hidden">
        {img ? (
          <img
            src={img}
            alt={title || "Project image"}
            loading="lazy"
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="text-neutral-400 text-sm px-4 text-center">
            No preview available
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-base font-semibold text-neutral-800 dark:text-neutral-100">
          {title}
        </h3>

        {desc && (
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
            {desc}
          </p>
        )}

        {/* Tags */}
        {Array.isArray(tags) && tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="mt-4 flex items-center gap-3">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-primary-600 text-white text-sm font-medium shadow-sm hover:opacity-95"
            >
              Live
            </a>
          ) : (
            <button
              disabled
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-neutral-200 text-neutral-500 text-sm"
              title="No live link"
            >
              Live
            </button>
          )}

          {repo ? (
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-neutral-200 dark:border-neutral-700 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-700"
            >
              Repo
            </a>
          ) : (
            <button
              disabled
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-neutral-100 text-sm text-neutral-400"
              title="No repository"
            >
              Repo
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
