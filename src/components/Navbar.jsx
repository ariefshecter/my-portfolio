// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

/**
 * Navbar with mobile menu support
 * - Mobile hamburger toggles an accessible dropdown panel
 * - Click outside or press Escape to close
 * - Uses Tailwind classes for animations and responsiveness
 */

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const btnRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    function onClick(e) {
      if (!open) return;
      if (panelRef.current && !panelRef.current.contains(e.target) && !btnRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("touchstart", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("touchstart", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Prevent body scroll when open (mobile)
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const NavItem = ({ to, children }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-sm font-medium px-3 py-2 rounded-md transition-colors block ${
          isActive ? "text-primary-600" : "text-neutral-700 dark:text-neutral-200 hover:text-primary-600"
        }`
      }
      onClick={() => setOpen(false)} // close menu when navigating on mobile
    >
      {children}
    </NavLink>
  );

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 ml-side backdrop-blur-md bg-white/60 dark:bg-neutral-900/50 border-b border-neutral-200/60 dark:border-neutral-800/60"
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left: brand */}
          <div className="flex items-center gap-4">
            <NavLink to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-accentYellow-500 flex items-center justify-center font-bold text-black shadow">
                R
              </div>
              <span className="hidden md:inline-block text-lg font-semibold">Riefzy Project</span>
            </NavLink>

            {/* Desktop nav (hidden on small screens) */}
            <nav className="hidden lg:flex items-center gap-1">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/projects">Projects</NavItem>
              <NavItem to="/about">About</NavItem>
              <NavItem to="/contact">Contact</NavItem>
            </nav>
          </div>

          {/* Right: actions */}
          <div className="flex items-center gap-3">
            {/* Search icon (non-functional placeholder) */}
            <button
              aria-label="Search"
              title="Search"
              className="hidden sm:inline-flex p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition text-neutral-700 dark:text-neutral-200"
            >
              <svg className="w-5 h-5 stroke-current" viewBox="0 0 24 24" fill="none">
                <path d="M21 21l-4.35-4.35" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="11" cy="11" r="6" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Explore CTA (desktop only) */}
            <NavLink
              to="/projects"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accentYellow-500 text-black font-medium shadow hover:opacity-95 transition"
            >
              Explore
            </NavLink>

            {/* Theme toggle */}
            <div className="inline-flex items-center">
              <ThemeToggle />
            </div>

            {/* Mobile hamburger */}
            <div className="lg:hidden">
              <button
                ref={btnRef}
                onClick={() => setOpen((s) => !s)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label="Toggle menu"
                className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition text-neutral-700 dark:text-neutral-200"
                title="Menu"
              >
                {/* hamburger icon */}
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 6h18" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 12h18" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 18h18" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu panel (animated) */}
      <div
        id="mobile-menu"
        ref={panelRef}
        className={`lg:hidden fixed inset-x-4 top-16 z-50 transform-gpu transition-all duration-250 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          aria-hidden="true"
        />
        {/* Panel */}
        <div className="relative mx-auto max-w-3xl bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-lg overflow-hidden">
          <div className="px-4 py-4">
            {/* close header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-accentYellow-500 flex items-center justify-center font-bold text-black shadow">
                  E
                </div>
                <div>
                  <div className="text-sm font-semibold">Endfield Style</div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">Navigation</div>
                </div>
              </div>

              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M6 6l12 12M6 18L18 6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* menu links */}
            <nav className="mt-4 grid gap-2">
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className="block px-3 py-3 rounded-md text-neutral-800 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition"
              >
                Home
              </NavLink>

              <NavLink
                to="/projects"
                onClick={() => setOpen(false)}
                className="block px-3 py-3 rounded-md text-neutral-800 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition"
              >
                Projects
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setOpen(false)}
                className="block px-3 py-3 rounded-md text-neutral-800 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition"
              >
                About
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className="block px-3 py-3 rounded-md text-neutral-800 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition"
              >
                Contact
              </NavLink>
            </nav>

            {/* optional footer actions */}
            <div className="mt-4 border-t border-neutral-100 dark:border-neutral-800 pt-3 flex items-center justify-between">
              <div className="text-sm text-neutral-500 dark:text-neutral-400">Theme</div>
              <div><ThemeToggle /></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
