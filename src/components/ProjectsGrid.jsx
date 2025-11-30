// src/components/ProjectsGrid.jsx
import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";
import { projects as allProjects } from "../data/projects";

/**
 * ProjectsGrid
 *
 * Props:
 *  - limit: number | null
 *  - showFilters: boolean
 *  - mode: "grid" | "gallery"   // gallery = large thumbnails
 *  - columns: number (for grid mode, default 3)
 */
export default function ProjectsGrid({
  limit = null,
  showFilters = true,
  mode = "grid",
  columns = 3,
}) {
  const list = Array.isArray(allProjects) ? allProjects : [];

  // derive tags
  const tags = useMemo(() => {
    const s = new Set();
    list.forEach((p) => {
      if (Array.isArray(p.tags)) p.tags.forEach((t) => s.add(t));
    });
    return Array.from(s);
  }, [list]);

  const [activeTag, setActiveTag] = useState(null);

  const filtered = useMemo(() => {
    const base = activeTag ? list.filter((p) => Array.isArray(p.tags) && p.tags.includes(activeTag)) : list;
    return limit ? base.slice(0, limit) : base;
  }, [list, activeTag, limit]);

  if (!Array.isArray(allProjects)) {
    return (
      <div className="py-12 text-center text-neutral-500 dark:text-neutral-400">
        Project data not found. Create <code>src/data/projects.js</code> exporting an array named <code>projects</code>.
      </div>
    );
  }

  // GALLERY MODE (big thumbnails)
  if (mode === "gallery") {
    if (filtered.length === 0) {
      return (
        <div className="py-12 text-center text-neutral-500 dark:text-neutral-400">
          No projects to show.
        </div>
      );
    }

    return (
      <section className="py-8" aria-labelledby="projects-heading">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6 gap-4">
            <h2 id="projects-heading" className="text-2xl font-semibold">Gallery</h2>

            {showFilters && tags.length > 0 && (
              <div className="flex items-center gap-2 flex-wrap">
                <button
                  onClick={() => setActiveTag(null)}
                  className={`text-sm px-3 py-1 rounded-md ${activeTag === null ? "bg-primary-600 text-white" : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200"}`}
                >
                  All
                </button>

                {tags.map((t) => (
                  <button
                    key={t}
                    onClick={() => setActiveTag((prev) => (prev === t ? null : t))}
                    className={`text-sm px-3 py-1 rounded-md ${activeTag === t ? "bg-primary-600 text-white" : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200"}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p) => (
              <article
                key={p.id ?? p.title}
                className="group rounded-2xl overflow-hidden bg-white dark:bg-neutral-800 shadow-card-sm hover:shadow-card-md transition transform hover:-translate-y-1 focus-within:ring-2 focus-within:ring-primary-300"
                tabIndex={0}
                aria-labelledby={`proj-${p.id}-title`}
              >
                <div className="relative w-full aspect-[16/11] bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
                  {p.img ? (
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full image-placeholder">No preview</div>
                  )}

                  {/* badge */}
                  {p.tags && p.tags.length > 0 && (
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 text-white text-xs font-semibold">
                      {p.tags[0]}
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 id={`proj-${p.id}-title`} className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">
                    {p.title}
                  </h3>

                  {p.desc && <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2">{p.desc}</p>}

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <a
                        href={p.link || "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm inline-flex items-center gap-2 px-3 py-2 rounded-md bg-primary-600 text-white"
                      >
                        Visit
                      </a>

                      {p.repo && (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm inline-flex items-center gap-2 px-3 py-2 rounded-md border border-neutral-200 dark:border-neutral-700"
                        >
                          Repo
                        </a>
                      )}
                    </div>

                    <div className="text-xs text-neutral-500 dark:text-neutral-400">{(p.tags || []).slice(0,2).join(" · ")}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // GRID MODE (compact cards using ProjectCard)
  const gridColsClass = columns === 1 ? "grid-cols-1" : columns === 2 ? "sm:grid-cols-2" : columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="py-8" aria-labelledby="projects-heading">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6 gap-4">
          <h2 id="projects-heading" className="text-2xl font-semibold">Projects</h2>

          {showFilters && tags.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => setActiveTag(null)}
                className={`text-sm px-3 py-1 rounded-md ${activeTag === null ? "bg-primary-600 text-white" : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200"}`}
              >
                All
              </button>

              {tags.map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTag((prev) => (prev === t ? null : t))}
                  className={`text-sm px-3 py-1 rounded-md ${activeTag === t ? "bg-primary-600 text-white" : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="py-12 text-center text-neutral-500 dark:text-neutral-400">
            No projects match the selected filter.
          </div>
        ) : (
          <div className={`grid gap-6 ${gridColsClass}`}>
            {filtered.map((p) => (
              <ProjectCard key={p.id ?? p.title} project={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

ProjectsGrid.propTypes = {
  limit: PropTypes.number,
  showFilters: PropTypes.bool,
  mode: PropTypes.oneOf(["grid", "gallery"]),
  columns: PropTypes.number,
};
