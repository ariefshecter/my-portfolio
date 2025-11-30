// src/components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
import profile from "../data/profile";

/**
 * Clean Hero — uses CSS variables for colors so dark-mode adapts automatically.
 * Make sure index.css defines --c-subtext, --c-border, --c-cta-text as in instructions.
 */

export default function Hero({
  titleTop = "Portofolio",
  titleMain = `${profile.displayName ?? profile.name ?? "Nama Kamu"}`,
  subtitle = profile.tagline ?? "Design & build elegant, accessible web apps."
}) {
  return (
    <section
      className="pt-24 pb-20 relative overflow-hidden"
      style={{
        background: "var(--c-bg, #ffffff)"
      }}
    >
      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <p
            className="text-sm font-medium"
            style={{ color: "var(--c-accent, #ffd400)" }}
          >
            {titleTop}
          </p>

          <h1
            className="mt-3 text-4xl md:text-5xl font-serif font-bold leading-tight"
            style={{ color: "var(--c-text, #0b0b0b)" }}
          >
            {titleMain}
          </h1>

          {/* subtitle now uses variable that changes in dark mode */}
          <p
            className="mt-6"
            style={{ color: "var(--c-subtext, rgba(0,0,0,0.65))" }}
          >
            {subtitle}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition"
              style={{
                background: "var(--c-accent, #ffd400)",
                color: "var(--c-cta-text, #000)",
                boxShadow: "0 8px 24px rgba(255,212,0,0.12)"
              }}
            >
              View Projects
            </Link>

            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border transition"
              style={{
                borderColor: "var(--c-border, rgba(11,11,11,0.08))",
                color: "var(--c-subtext, rgba(0,0,0,0.65))",
                background: "transparent"
              }}
            >
              Contact
            </a>
          </div>

          {/* Quick stats */}
          {profile?.stats && (
            <div className="mt-8 flex flex-wrap items-center gap-10" style={{ color: "var(--c-text, #0b0b0b)" }}>
              {profile.stats.map((s) => (
                <div key={s.id} className="flex flex-col">
                  <span className="text-xl md:text-2xl font-semibold">{s.value}</span>
                  <span className="text-xs" style={{ color: "var(--c-subtext, rgba(0,0,0,0.65))" }}>{s.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* decorative background element placeholder (non-interactive) */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background: "transparent"
        }}
      />
    </section>
  );
}
