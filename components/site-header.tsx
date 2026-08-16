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
    <header className="sticky top-0 z-40 border-b border-ink-100 bg-paper/95 backdrop-blur-sm">
      <div className="container-editorial flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="font-serif text-base font-semibold tracking-tight text-ink-900"
          aria-label={`${profile.name} — home`}
        >
          {profile.name}
          <span aria-hidden="true" className="ml-2 inline-block h-1.5 w-1.5 bg-accent-400" />
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
                    className={`py-1 text-sm transition-colors ${
                      active
                        ? "border-b-2 border-accent-400 font-medium text-ink-900"
                        : "border-b-2 border-transparent text-ink-600 hover:text-ink-900"
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
                className="rounded-editorial border border-ink-400 px-3 py-1.5 text-sm text-ink-800 transition-colors hover:border-ink-700 hover:bg-paper-muted"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-editorial border border-ink-400 px-3 py-2 text-sm text-ink-800 sm:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true">{open ? "×" : "≡"}</span>
          {open ? "Close menu" : "Menu"}
        </button>
      </div>

      <div id={menuId} hidden={!open} className="border-t border-ink-100 sm:hidden">
        <nav aria-label="Primary mobile" className="container-editorial py-4">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-editorial px-2 py-2.5 text-sm ${
                      active ? "bg-paper-muted font-medium text-ink-900" : "text-ink-700"
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
                className="block rounded-editorial px-2 py-2.5 text-sm text-ink-700"
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
