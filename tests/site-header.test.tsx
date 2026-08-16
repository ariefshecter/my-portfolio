import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SiteHeader } from "@/components/site-header";

const { usePathnameMock } = vi.hoisted(() => ({
  usePathnameMock: vi.fn(() => "/"),
}));

vi.mock("next/navigation", () => ({
  usePathname: usePathnameMock,
}));

describe("SiteHeader navigation", () => {
  it("renders every primary route link", () => {
    usePathnameMock.mockReturnValue("/");
    render(<SiteHeader />);

    const primaryNav = screen.getByRole("navigation", { name: "Primary" });
    expect(primaryNav.querySelector('a[href="/"]')).not.toBeNull();
    expect(primaryNav.querySelector('a[href="/work"]')).not.toBeNull();
    expect(primaryNav.querySelector('a[href="/about"]')).not.toBeNull();
  });

  it("marks the current page with aria-current", () => {
    usePathnameMock.mockReturnValue("/work");
    render(<SiteHeader />);

    const primaryNav = screen.getByRole("navigation", { name: "Primary" });
    const current = primaryNav.querySelector('[aria-current="page"]');
    expect(current).not.toBeNull();
    expect(current).toHaveAttribute("href", "/work");
  });

  it("treats a case study route as part of work", () => {
    usePathnameMock.mockReturnValue("/work/campus-reservation-system");
    render(<SiteHeader />);

    const primaryNav = screen.getByRole("navigation", { name: "Primary" });
    expect(primaryNav.querySelector('[aria-current="page"]')).toHaveAttribute("href", "/work");
  });

  it("links the resume to the stable PDF path", () => {
    usePathnameMock.mockReturnValue("/");
    render(<SiteHeader />);

    const resumeLinks = screen.getAllByRole("link", { name: /resume/i });
    expect(resumeLinks.length).toBeGreaterThan(0);
    for (const link of resumeLinks) {
      expect(link).toHaveAttribute("href", "/assets/resume/resume.pdf");
    }
  });

  it("exposes a collapsed mobile menu with correct aria wiring", () => {
    usePathnameMock.mockReturnValue("/");
    render(<SiteHeader />);

    const toggle = screen.getByRole("button", { name: /menu/i });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    const controlled = toggle.getAttribute("aria-controls");
    expect(controlled).toBeTruthy();
    expect(document.getElementById(controlled as string)).toHaveAttribute("hidden");
  });
});
