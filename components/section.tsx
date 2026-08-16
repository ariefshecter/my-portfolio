import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  headingLevel?: "h2" | "h3";
  className?: string;
  children: ReactNode;
  labelledBy?: string;
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  headingLevel = "h2",
  className = "",
  children,
  labelledBy,
}: SectionProps) {
  const Heading = headingLevel;
  const headingId = title ? `${id ?? title.toLowerCase().replace(/\s+/g, "-")}-heading` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={labelledBy ?? headingId}
      className={`border-t border-ink-100 py-16 sm:py-20 ${className}`.trim()}
    >
      <div className="container-editorial">
        {(eyebrow || title || intro) && (
          <div className="mb-10 max-w-2xl">
            {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
            {title && (
              <Heading id={headingId} className="text-headline font-serif font-semibold">
                {title}
              </Heading>
            )}
            {intro && <p className="mt-4 text-base leading-relaxed text-ink-600">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
