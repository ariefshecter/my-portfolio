"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { profile } from "@/content/profile";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink-900 bg-paper/95 backdrop-blur-sm">
      <div className="container-editorial flex min-h-16 items-center justify-between gap-3 py-3 sm:h-16 sm:py-0">
        <Link
          href="/"
          className="max-w-[13rem] font-serif text-[0.9375rem] font-bold tracking-tight text-ink-950 sm:max-w-none sm:text-base"
          aria-label={`${profile.name} — home`}
        >
          {profile.name}
          <span aria-hidden="true" className="ml-2 inline-block h-2 w-2 bg-accent-500" />
        </Link>

        <nav aria-label="Primary" className="hidden sm:block">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`py-1 font-mono text-xs uppercase tracking-wider transition-colors ${
                      active
                        ? "border-b-2 border-accent-500 font-bold text-ink-950"
                        : "border-b-2 border-transparent text-ink-700 hover:text-ink-950 hover:border-ink-400"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <a
                href={profile.resumePath}
                className="rounded-editorial border-2 border-ink-900 bg-paper px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-ink-900 shadow-[2px_2px_0px_var(--color-ink-900)] transition-all hover:bg-paper-muted hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-editorial border-2 border-ink-900 bg-paper px-3 font-mono text-xs font-semibold uppercase tracking-wider text-ink-900 shadow-[2px_2px_0px_var(--color-ink-900)] sm:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true" className="text-lg leading-none">
            {open ? "×" : "≡"}
          </span>
          {open ? "Close menu" : "Menu"}
        </button>
      </div>

      <div id={menuId} hidden={!open} className="border-t-2 border-ink-900 bg-paper-muted sm:hidden">
        <nav aria-label="Primary mobile" className="container-editorial py-3">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`block py-2 font-mono text-xs uppercase tracking-wider ${
                      active ? "font-bold text-accent-600" : "text-ink-800"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <a
                href={profile.resumePath}
                className="block border-2 border-ink-900 bg-paper py-2 text-center font-mono text-xs font-bold uppercase tracking-wider text-ink-900 shadow-[2px_2px_0px_var(--color-ink-900)]"
              >
                Resume (PDF)
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
