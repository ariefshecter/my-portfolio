import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "quiet";

const base =
  "inline-flex items-center justify-center gap-2 rounded-editorial px-5 py-3 text-sm font-medium transition-colors duration-150";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink-900 text-paper hover:bg-ink-700 border border-ink-900 hover:border-ink-700",
  secondary:
    "border border-ink-400 bg-paper text-ink-800 hover:border-ink-700 hover:bg-paper-muted",
  quiet: "text-ink-700 underline decoration-accent-600 decoration-2 underline-offset-4 hover:text-ink-900",
};

interface ActionLinkProps extends Omit<ComponentPropsWithoutRef<"a">, "className"> {
  href: string;
  variant?: Variant;
  external?: boolean;
  children: ReactNode;
  className?: string;
}

export function ActionLink({
  href,
  variant = "primary",
  external = false,
  children,
  className = "",
  ...rest
}: ActionLinkProps) {
  const classes = `${base} ${variants[variant]} ${className}`.trim();

  if (external || href.startsWith("http") || href.startsWith("mailto:") || href.endsWith(".pdf")) {
    const relTarget = href.startsWith("http")
      ? { target: "_blank", rel: "noreferrer noopener" }
      : {};
    return (
      <a href={href} className={classes} {...relTarget} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
