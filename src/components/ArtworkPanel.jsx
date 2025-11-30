// src/components/ArtworkPanel.jsx
import React from "react";
import PropTypes from "prop-types";

/**
 * ArtworkPanel
 *
 * Right-side artwork container used in the Hero or Milestones detail.
 * - Props:
 *    - src: image URL (required)
 *    - alt: alt text (optional)
 *    - label: vertical small label text (optional)
 *    - badge: small top-left badge text (optional)
 *    - size: "md" | "lg" (controls aspect / cropping)
 *    - children: optional overlay content (buttons, small info)
 *
 * Usage:
 * <ArtworkPanel src="/assets/hero-artwork.jpg" label="Gameplay" badge="Featured" />
 */

export default function ArtworkPanel({
  src,
  alt = "Artwork",
  label = null,
  badge = null,
  size = "lg",
  children = null,
}) {
  const heightClass = size === "md" ? "h-56 md:h-72" : "h-64 md:h-96";

  return (
    <div className="relative w-full flex justify-center items-center">
      {/* Artwork container */}
      <div
        className={`relative w-full max-w-[900px] ${heightClass} rounded-2xl overflow-hidden shadow-2xl bg-neutral-100 dark:bg-neutral-800`}
        aria-hidden={!src}
      >
        {/* Image */}
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out hover:scale-105"
            draggable={false}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-neutral-400">
            No artwork available
          </div>
        )}

        {/* top-left badge */}
        {badge && (
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 text-white text-xs font-semibold">
            {badge}
          </div>
        )}

        {/* vertical label on the right edge */}
        {label && (
          <div className="absolute right-0 top-1/3 transform translate-x-1/2">
            <div className="rotate-90 origin-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accentYellow-500 text-black font-semibold text-sm shadow">
                {label}
              </div>
            </div>
          </div>
        )}

        {/* children overlay (bottom-left) */}
        {children && (
          <div className="absolute left-4 bottom-4">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

ArtworkPanel.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  label: PropTypes.string,
  badge: PropTypes.string,
  size: PropTypes.oneOf(["md", "lg"]),
  children: PropTypes.node,
};
