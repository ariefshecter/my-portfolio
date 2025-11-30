import React, { useEffect, useState } from "react";

/**
 * ThemeToggle
 * - toggles dark/light mode
 * - persists preference in localStorage
 * - respects system preference when no saved preference exists
 */

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else if (theme === "light") {
      root.classList.remove("dark");
    } else {
      // follow system
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (prefersDark) root.classList.add("dark");
      else root.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);

    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  // Check actual dark mode state (if theme === null, follow system)
  const isDark =
    theme === "dark" ||
    (theme === null &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <button
      aria-label="Toggle theme"
      title="Toggle theme"
      onClick={toggleTheme}
      className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
    >
      {isDark ? (
        /* ☀ Light mode icon */
        <svg
          className="w-5 h-5 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="3" strokeWidth="1.8" />
          <path
            d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        /* 🌙 Dark mode icon */
        <svg
          className="w-5 h-5 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      )}
    </button>
  );
}
