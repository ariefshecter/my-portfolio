// src/components/Footer.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import socials from "../data/socials";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="mt-16 border-t border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/40 backdrop-blur-md"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* LEFT — brand */}
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accentYellow-500 flex items-center justify-center font-bold text-black shadow">
              R
            </div>
            <span className="text-lg font-semibold">Riefzy Project</span>
          </div>

          <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400 max-w-sm leading-relaxed">
            A personal portfolio showcasing modern web projects with a clean, futuristic visual style. Built using React and Tailwind CSS with a focus on responsive design and accessibility.

          </p>
        </div>

        {/* CENTER — navigation */}
        <div>
          <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-3">
            Navigation
          </h4>
          <nav className="flex flex-col gap-2 text-sm">
            <NavLink
              to="/"
              className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Contact
            </NavLink>
          </nav>
        </div>

        {/* RIGHT — social links */}
        <div>
          <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-3">
            Socials
          </h4>

          <div className="flex flex-col gap-2 text-sm">
            {Object.entries(socials || {}).map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors capitalize"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-neutral-200 dark:border-neutral-800 py-4 text-center text-xs text-neutral-600 dark:text-neutral-400">
        © {year} — Built by <span className="text-accentYellow-600">Ferry Khusnil Arief</span>
      </div>
    </footer>
  );
}
