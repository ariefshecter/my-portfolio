import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import MainLayout from "./components/MainLayout";

// pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

/**
 * ScrollToTop - scrolls window to top on route change
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

/**
 * Theme init:
 * - reads localStorage.theme
 * - if not present, respects prefers-color-scheme
 * - applies/removes "dark" class on document.documentElement
 */
function useThemeInit() {
  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      const root = document.documentElement;
      if (saved === "dark") {
        root.classList.add("dark");
      } else if (saved === "light") {
        root.classList.remove("dark");
      } else {
        // follow system
        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (prefersDark) root.classList.add("dark");
        else root.classList.remove("dark");
      }
    } catch (e) {
      // ignore (e.g., localStorage not available)
    }
  }, []);
}

export default function App() {
  useThemeInit();

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark text-neutral-800 dark:text-neutral-100">
      <ScrollToTop />

      <Routes>
        {/* All pages use MainLayout which includes Sidebar, Navbar, Footer */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          {/* fallback 404 (nested route will render inside MainLayout) */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
