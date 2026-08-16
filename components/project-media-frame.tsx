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
        <div className="overflow-hidden rounded-editorial border border-ink-200 bg-paper-sunken">
          <Image
            src={media.src}
            alt={media.alt}
            width={media.width ?? 1350}
            height={media.height ?? 576}
            priority={priority}
            sizes={sizes}
            className="h-auto w-full"
          />
        </div>
        <figcaption className="mt-3 text-sm leading-relaxed text-ink-500">
          {media.caption}
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className="not-prose">
      <div
        role="img"
        aria-label={media.alt}
        className="flex min-h-56 flex-col justify-between gap-6 rounded-editorial border border-dashed border-ink-400 bg-paper-muted p-6 sm:min-h-64 sm:p-8"
      >
        <span className="inline-flex w-fit items-center gap-2 rounded-editorial border border-ink-400 bg-paper px-3 py-1">
          <span aria-hidden="true" className="h-1.5 w-1.5 bg-accent-400" />
          <span className="eyebrow">{media.placeholderLabel ?? "Media placeholder"}</span>
        </span>
        <p className="max-w-xl text-sm leading-relaxed text-ink-600">{media.caption}</p>
      </div>
      <figcaption className="mt-3 text-sm leading-relaxed text-ink-500">
        Labelled placeholder — no screenshot is being represented as available.
      </figcaption>
    </figure>
  );
}
