// src/components/VerticalLabel.jsx
import React from "react";
import PropTypes from "prop-types";

/**
 * VerticalLabel
 *
 * A rotated vertical label inspired by Endfield UI.
 * Useful for: Hero section, artwork panels, right-side category tags, etc.
 *
 * Props:
 * - text: the label text
 * - color: tailwind class for bg color (default: bg-accentYellow-500)
 * - position: "right" | "left" (default right side)
 * - offset: additional translate offset (default: "translate-x-1/2")
 *
 * Usage:
 * <VerticalLabel text="GAMEPLAY" />
 */

export default function VerticalLabel({
  text,
  color = "bg-accentYellow-500",
  position = "right",
  offset = "translate-x-1/2"
}) {
  const sideClass =
    position === "left"
      ? "-translate-x-1/2 left-0"
      : "right-0"; // default right side

  return (
    <div
      className={`absolute top-1/3 ${sideClass} pointer-events-none select-none`}
      aria-hidden="true"
    >
      <div className={`rotate-90 origin-center`}>
        <span
          className={`inline-flex items-center px-3 py-1 rounded-md shadow font-semibold text-sm text-black ${color} ${offset}`}
        >
          {text}
        </span>
      </div>
    </div>
  );
}

VerticalLabel.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  position: PropTypes.oneOf(["right", "left"]),
  offset: PropTypes.string
};
