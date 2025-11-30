// src/components/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

/**
 * Sidebar futuristik dengan ikon baru khusus:
 * - Home → futuristic home minimal
 * - Projects → grid holo icon
 * - About → profile chip hologram
 * - Contact → signal/message icon
 */

const NavItem = ({ to, label, icon }) => (
  <NavLink
    to={to}
    aria-label={label}
    title={label}
    className={({ isActive }) =>
      `w-12 h-12 flex items-center justify-center rounded-md transition-colors 
      ${isActive 
          ? "bg-accentYellow-500 text-black shadow-[0_0_12px_rgba(255,210,0,0.45)]"
          : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
      }`
    }
  >
    {icon}
  </NavLink>
);

export default function Sidebar() {
  return (
    <aside
      className="fixed left-0 top-0 z-50 h-full w-16 flex flex-col items-center py-6 gap-4"
      aria-label="Primary Sidebar Navigation"
    >
      {/* Logo utamanya tetap */}
      <div className="mb-2">
        <NavLink to="/" aria-label="Home" title="Home">
          <div className="w-10 h-10 rounded-lg bg-accentYellow-500 flex items-center justify-center font-black text-black shadow">
            R
          </div>
        </NavLink>
      </div>

      <div className="w-6 h-px bg-neutral-200 dark:bg-neutral-700" />

      {/* === Ikon Menu Baru Futuristik === */}
      <nav className="mt-2 flex flex-col items-center gap-4" aria-label="Sidebar Menu">

        {/* HOME — futuristik hex home */}
        <NavItem
          to="/"
          label="Home"
          icon={
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M11 3L3 9v10h6v-5h6v5h6V9l-8-6z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          }
        />

        {/* PROJECTS — holo grid futuristic */}
        <NavItem
          to="/projects"
          label="Projects"
          icon={
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="6" height="6" rx="1.5" />
              <rect x="13" y="3" width="6" height="6" rx="1.5" />
              <rect x="3" y="13" width="6" height="6" rx="1.5" />
              <rect x="13" y="13" width="6" height="6" rx="1.5" />
            </svg>
          }
        />

        {/* ABOUT — profile hologram chip */}
        <NavItem
          to="/about"
          label="About"
          icon={
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="7" r="3" />
              <path d="M4 19c1.4-4 5.6-6 7-6s5.6 2 7 6" strokeLinecap="round" />
            </svg>
          }
        />

        {/* CONTACT — futuristic signal/message icon */}
        <NavItem
          to="/contact"
          label="Contact"
          icon={
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="5" width="16" height="12" rx="2" />
              <path d="M3 7l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          }
        />

      </nav>

      <div className="flex-1" />
      <div className="w-6 h-px bg-neutral-200 dark:bg-neutral-700 mb-4" />
    </aside>
  );
}
