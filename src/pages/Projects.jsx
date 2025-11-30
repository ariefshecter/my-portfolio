// src/pages/Projects.jsx
import React, { useState } from "react";
import ProjectsGrid from "../components/ProjectsGrid";
import { projects as allProjects } from "../data/projects";

/**
 * Projects page (operator / gallery style)
 * - Default shows gallery mode (big thumbnails)
 * - Switch to grid (compact) via toggle
 * - Shows total count and simple search (client-side)
 */

export default function Projects() {
  const [view, setView] = useState("gallery"); // "gallery" | "grid"
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState(null);

  // derive tags
  const tags = Array.from(
    new Set((Array.isArray(allProjects) ? allProjects : []).flatMap((p) => p.tags || []))
  );

  // filtered count for header display
  const filteredList = (Array.isArray(allProjects) ? allProjects : []).filter((p) => {
    const matchesTag = activeTag ? (p.tags || []).includes(activeTag) : true;
    const matchesQuery = query
      ? `${p.title} ${p.desc}`.toLowerCase().includes(query.toLowerCase())
      : true;
    return matchesTag && matchesQuery;
  });

  return (
    <div className="page-content">
      <header className="pt-24 pb-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold">Operators & Projects</h1>
            <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-300">
              Browse the gallery of operators and selected projects. Use filters or search to
              quickly find items.
            </p>
            <div className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
              Showing <span className="font-medium text-neutral-800 dark:text-neutral-100">{filteredList.length}</span> items
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-800 rounded-md p-1">
              <button
                onClick={() => setView("gallery")}
                className={`px-3 py-1 rounded-md ${view === "gallery" ? "bg-accentYellow-500 text-black" : "text-neutral-700 dark:text-neutral-200"}`}
              >
                Gallery
              </button>
              <button
                onClick={() => setView("grid")}
                className={`px-3 py-1 rounded-md ${view === "grid" ? "bg-primary-600 text-white" : "text-neutral-700 dark:text-neutral-200"}`}
              >
                Grid
              </button>
            </div>

            <div className="relative w-full md:w-64">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects..."
                className="w-full rounded-md px-3 py-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm"
                aria-label="Search projects"
              />
            </div>
          </div>
        </div>

        {/* tag filters (below header) */}
        <div className="container mx-auto px-4 mt-4">
          <div className="flex gap-2 flex-wrap">
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
        </div>
      </header>

      <main className="pb-20">
        <div className="container mx-auto px-4">
          {/* ProjectsGrid handles mode and filters internally, but we'll pass a sanitized list via data file */}
          {/* To keep ProjectsGrid simple, we'll temporarily override allProjects by filtering via query/activeTag when necessary.
              Easiest approach: if user filters/searches, pass a trimmed data set via prop `items` (ProjectsGrid currently expects data from data/projects,
              but many components fall back if not provided. To avoid editing ProjectsGrid, we rely on global data and instruct user to set tags/filter there.
              For now, we'll render ProjectsGrid with the selected mode prop and let internal filtering handle tags. */}

          {/* Simple approach: when query or activeTag applied, just render a tailored gallery grid manually */}
          { (query || activeTag) ? (
            // manual gallery (filteredList)
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredList.map((p) => (
                <article
                  key={p.id ?? p.title}
                  className="group rounded-2xl overflow-hidden bg-white dark:bg-neutral-800 shadow-card-sm hover:shadow-card-md transition transform hover:-translate-y-1 focus-within:ring-2 focus-within:ring-primary-300"
                  tabIndex={0}
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
                    {p.tags && p.tags.length > 0 && (
                      <div className="absolute left-4 top-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 text-white text-xs font-semibold">
                        {p.tags[0]}
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">{p.title}</h3>
                    {p.desc && <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2">{p.desc}</p>}

                    <div className="mt-4 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <a href={p.link || "#"} target="_blank" rel="noreferrer" className="text-sm inline-flex items-center gap-2 px-3 py-2 rounded-md bg-primary-600 text-white">Visit</a>
                        {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="text-sm inline-flex items-center gap-2 px-3 py-2 rounded-md border border-neutral-200 dark:border-neutral-700">Repo</a>}
                      </div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400">{(p.tags || []).slice(0,2).join(" · ")}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            // default ProjectsGrid which supports mode prop
            <ProjectsGrid mode={view} showFilters={false} columns={3} />
          )}
        </div>
      </main>
    </div>
  );
}
