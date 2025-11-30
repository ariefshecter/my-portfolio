// src/components/MainLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

/**
 * MainLayout
 *
 * - Wraps pages with Sidebar (fixed), Navbar (fixed), and Footer.
 * - Provides proper left margin so content isn't hidden under Sidebar.
 * - Renders children via react-router <Outlet /> or you can pass children directly.
 *
 * Usage in App.js (example):
 * <MainLayout>
 *   <YourPage />
 * </MainLayout>
 *
 * Or with routing:
 * <Route element={<MainLayout />}>
 *   <Route index element={<Home />} />
 *   ...
 * </Route>
 */

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark text-neutral-800 dark:text-neutral-100">
      {/* fixed sidebar */}
      <Sidebar />

      {/* main content area (push right by sidebar width) */}
      <div className="ml-side">
        {/* Skip link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-16 focus:left-[4.5rem] focus:bg-white focus:dark:bg-neutral-900 focus:px-3 focus:py-2 focus:rounded-md focus:shadow"
        >
          Skip to content
        </a>

        {/* top navbar */}
        <Navbar />

        {/* page content */}
        <main id="main-content" className="pt-20">
          {children ?? <Outlet />}
        </main>

        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}
