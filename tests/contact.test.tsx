import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ContactCta } from "@/components/contact-cta";
import { SiteFooter } from "@/components/site-footer";
import { profile } from "@/content/profile";

describe("contact actions", () => {
  it("offers a mailto link instead of a form", () => {
    const { container } = render(<ContactCta />);

    expect(container.querySelector("form")).toBeNull();
    expect(container.querySelector("input")).toBeNull();
    expect(container.querySelector("textarea")).toBeNull();

    const mailLinks = Array.from(container.querySelectorAll('a[href^="mailto:"]'));
    expect(mailLinks.length).toBeGreaterThan(0);
    expect(mailLinks[0]).toHaveAttribute("href", `mailto:${profile.email}`);
  });

  it("links GitHub, LinkedIn, and the resume from the CTA or footer", () => {
    const { container } = render(
      <>
        <ContactCta />
        <SiteFooter />
      </>,
    );

    expect(container.querySelector(`a[href="${profile.githubUrl}"]`)).not.toBeNull();
    expect(container.querySelector(`a[href="${profile.linkedinUrl}"]`)).not.toBeNull();
    expect(container.querySelector(`a[href="${profile.resumePath}"]`)).not.toBeNull();
  });

  it("does not render any placeholder or javascript href in the footer", () => {
    const { container } = render(<SiteFooter />);

    for (const anchor of Array.from(container.querySelectorAll("a"))) {
      const href = anchor.getAttribute("href") ?? "";
      expect(href).not.toBe("#");
      expect(href).not.toMatch(/^javascript:/);
      expect(href).not.toContain("yourhandle");
    }
  });

  it("does not advertise a simulated submission state", () => {
    render(<ContactCta />);
    expect(screen.queryByText(/message sent/i)).toBeNull();
    expect(screen.queryByRole("button", { name: /send/i })).toBeNull();
  });

  it("states availability without placeholder values", () => {
    render(<ContactCta />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(profile.availability);
    expect(screen.getByText(profile.location)).toBeInTheDocument();
  });
});
