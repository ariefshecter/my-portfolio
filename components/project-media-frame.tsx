import Image from "next/image";
import type { ProjectMedia } from "@/content/types";

interface ProjectMediaFrameProps {
  media: ProjectMedia;
  priority?: boolean;
  sizes?: string;
}

export function ProjectMediaFrame({
  media,
  priority = false,
  sizes = "(min-width: 1024px) 62rem, 100vw",
}: ProjectMediaFrameProps) {
  if (media.kind === "screenshot" && media.src) {
    return (
      <figure className="not-prose">
        <div className="vintage-border-box overflow-hidden bg-paper-sunken">
          <Image
            src={media.src}
            alt={media.alt}
            width={media.width ?? 1350}
            height={media.height ?? 576}
            priority={priority}
            sizes={sizes}
            className="h-auto w-full sepia-[0.15] contrast-[1.05] transition-all hover:sepia-0"
          />
        </div>
        <figcaption className="mt-3 font-mono text-xs leading-relaxed text-ink-600">
          [FIG. 01] — {media.caption}
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className="not-prose">
      <div
        role="img"
        aria-label={media.alt}
        className="vintage-border-box flex min-h-56 flex-col justify-between gap-6 border-dashed bg-paper-muted p-6 sm:min-h-64 sm:p-8"
      >
        <span className="inline-flex w-fit items-center gap-2 rounded-editorial border-2 border-ink-800 bg-paper px-3 py-1 shadow-[2px_2px_0px_var(--color-ink-800)]">
          <span aria-hidden="true" className="h-2 w-2 bg-accent-500" />
          <span className="eyebrow">{media.placeholderLabel ?? "Media placeholder"}</span>
        </span>
        <p className="max-w-xl font-mono text-sm leading-relaxed text-ink-700">{media.caption}</p>
      </div>
      <figcaption className="mt-3 font-mono text-xs leading-relaxed text-ink-500">
        [ARCHIVE NOTICE] — Labelled placeholder; no screenshot is being represented as available.
      </figcaption>
    </figure>
  );
}
