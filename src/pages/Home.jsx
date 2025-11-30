// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import Milestones from "../components/Milestones";
import ProjectsGrid from "../components/ProjectsGrid";
import profile from "../data/profile";
import { Link } from "react-router-dom";

/**
 * Home page (Endfield-inspired)
 * - Hero (left text, right artwork)
 * - Milestones (horizontal scrollable preview)
 * - Selected Projects grid (preview)
 * - Short about snippet + CTA
 */

export default function Home() {
  // prepare milestone items from projects (take progress if present)
  const milestoneItems = (Array.isArray(profile?.milestones) && profile.milestones.length)
    ? profile.milestones
    : undefined; // Milestones.jsx will fallback to projects list

  return (
    <div className="page-content">
      <Hero
        titleTop="Portofolio"
        titleMain={`${profile.displayName ?? profile.name ?? "Nama Kamu"}`}
        subtitle={profile.tagline ?? "Track progress, unlock rewards, and follow the campaign milestones."}
        artworkSrc="/assets/hero-artwork.jpg"
        artworkLabel="GAMEPLAY"
        badge="Featured"
      />

      <Milestones items={milestoneItems} />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Selected Projects</h2>
            <Link to="/projects" className="text-sm text-primary-600 hover:underline">
              View all projects →
            </Link>
          </div>

          <ProjectsGrid limit={6} showFilters={false} />
        </div>
      </section>

      <section className="py-12 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold">About</h3>
            <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {profile.longBio ||
                "I build focused, accessible, and performant web experiences. I work across frontend engineering, UI design, and practical ML experiments."}
            </p>

            <div className="mt-4 flex items-center gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600 text-white font-medium"
              >
                Read more
              </Link>

              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200"
              >
                Contact
              </a>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="rounded-lg p-4 bg-white dark:bg-neutral-800 shadow-sm">
              <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Quick facts</h4>
              <ul className="mt-3 text-sm text-neutral-600 dark:text-neutral-300 space-y-2">
                <li>{profile.location ?? "Your City"}</li>
                <li>{profile.preferences?.availability ?? "Open to freelance & full-time"}</li>
                <li>{ (profile.stack || []).slice(0,4).join(" · ") }</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section id="contact" className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-accentYellow-50 dark:bg-neutral-800 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold">Have a project in mind?</h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300">Let's talk — I’m available for freelance work and collaborations.</p>
            </div>

            <div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accentYellow-500 text-black font-medium"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
