// src/pages/About.jsx
import React from "react";
import profile from "../data/profile";
import skillsData from "../data/skills";
import experience from "../data/experience";
import { Link } from "react-router-dom";
import ArtworkPanel from "../components/ArtworkPanel";

/**
 * About page — Endfield-inspired layout
 * - Profile summary + artwork
 * - Skills grid from skillsData
 * - Experience timeline from experience data
 */

function SkillBadge({ name, level }) {
  return (
    <div className="px-4 py-2 rounded-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm text-neutral-700 dark:text-neutral-200 shadow-sm">
      <div className="font-medium">{name}</div>
      <div className="text-xs text-neutral-500 dark:text-neutral-400">
        {level}
      </div>
    </div>
  );
}

export default function About() {
  // gabungkan semua kategori skill dari skillsData
  const allSkills = Object.values(skillsData || {}).flat();

  return (
    <div className="page-content">
      {/* HEADER */}
      <header className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-semibold">About Me</h1>
          <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-300">
            {profile.shortBio ||
              "A developer who builds focused, accessible, and performant web experiences."}
          </p>
        </div>
      </header>

      {/* PROFILE + ARTWORK */}
      <section className="py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* artwork / avatar */}
          <div className="flex justify-center lg:justify-start">
            <ArtworkPanel
              src={profile.avatar || "/assets/profile/profile.jpg"}
              alt={profile.name || "Profile"}
              size="md"
              badge={profile.role}
            />
          </div>

          {/* main bio */}
          <div className="lg:col-span-2 space-y-5">
            <h2 className="text-2xl font-semibold">
              Hi, I'm {profile.displayName ?? profile.name}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {profile.longBio ||
                "I build UI-driven applications with an emphasis on accessibility, performance, and clear UX. I work with React, Tailwind CSS, and dabble in practical machine learning projects."}
            </p>

            <div className="mt-4 text-sm text-neutral-500 dark:text-neutral-400 space-y-1">
              <div>{profile.location}</div>
              <div>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-primary-600 hover:underline"
                >
                  {profile.email}
                </a>
              </div>
              {profile.website && (
                <div>
                  <a
                    href={profile.website}
                    className="text-primary-600 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {profile.website}
                  </a>
                </div>
              )}
            </div>

            <div className="mt-6 flex items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accentYellow-500 text-black font-medium"
              >
                Contact
              </Link>
              <a
                href={profile.resume || "#"}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-12 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold">Skills &amp; Tools</h2>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {allSkills.map((s) => (
              <SkillBadge key={s.name} name={s.name} level={s.level} />
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>

          <div className="space-y-8 border-l border-neutral-300 dark:border-neutral-700 pl-6">
            {experience.map((e) => (
              <div key={e.id} className="relative">
                <span className="absolute -left-3 top-1 w-3 h-3 rounded-full bg-accentYellow-500" />
                <h3 className="font-medium text-lg">
                  {e.role}{" "}
                  <span className="text-sm text-neutral-500">
                    — {e.organization}
                  </span>
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {e.start} — {e.end}
                </p>
                <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                  {e.description}
                </p>
                {Array.isArray(e.highlights) && e.highlights.length > 0 && (
                  <ul className="mt-2 list-disc list-inside text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
                    {e.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-accentYellow-50 dark:bg-neutral-800 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold">
                Interested in collaboration?
              </h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                I'm available for freelance projects and collaborations.
              </p>
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
