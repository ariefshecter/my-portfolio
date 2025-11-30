// src/components/Milestones.jsx
import React, { useEffect, useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

/**
 * Milestones / Projects preview carousel
 * - Thumbnail kecil (pakai ProjectCard)
 * - Tidak scroll drag; navigasi pakai tombol kiri/kanan
 * - Responsif: 1 card di mobile, 2 di tablet, 3 di desktop
 */

export default function Milestones() {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  // tentukan jumlah kartu yang kelihatan berdasarkan lebar layar
  useEffect(() => {
    const updateVisible = () => {
      const w = window.innerWidth;
      if (w >= 1024) setVisibleCount(3);        // lg: 3
      else if (w >= 640) setVisibleCount(2);    // sm/md: 2
      else setVisibleCount(1);                  // xs: 1
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, projects.length - visibleCount);

  const goPrev = () => setCurrent((idx) => Math.max(0, idx - 1));
  const goNext = () => setCurrent((idx) => Math.min(maxIndex, idx + 1));

  // berapa persen geseran track
  const translatePercent = (100 / visibleCount) * current;

  return (
    <section className="mt-10">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 mb-3">
        <h2 className="text-2xl font-semibold text-main">Projects</h2>

        <div className="flex items-center gap-3">
          <p className="hidden sm:block text-[12px] text-sub">
            Progress and rewards — use arrows to explore
          </p>

          {/* tombol kiri/kanan */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goPrev}
              disabled={current === 0}
              className={`w-9 h-9 rounded-full border border-sub flex items-center justify-center ${
                current === 0
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-panel"
              }`}
              aria-label="Previous projects"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={goNext}
              disabled={current === maxIndex}
              className={`w-9 h-9 rounded-full border border-sub flex items-center justify-center ${
                current === maxIndex
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-panel"
              }`}
              aria-label="Next projects"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Track carousel */}
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(-${translatePercent}%)`
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="basis-full sm:basis-1/2 lg:basis-1/3 flex-shrink-0 px-2 md:px-3 pb-4"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
