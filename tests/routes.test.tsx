import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import AboutPage, { metadata as aboutMetadata } from "@/app/about/page";
import HomePage from "@/app/page";
import NotFound from "@/app/not-found";
import WorkPage, { metadata as workMetadata } from "@/app/work/page";
import CaseStudyPage, {
  generateMetadata,
  generateStaticParams,
} from "@/app/work/[slug]/page";
import { metadata as rootMetadata } from "@/app/layout";
import { profile, SITE_URL } from "@/content/profile";
import { projects } from "@/content/projects";

const { notFoundMock } = vi.hoisted(() => ({
  notFoundMock: vi.fn(() => {
    throw new Error("NEXT_NOT_FOUND");
  }),
}));

vi.mock("next/navigation", () => ({
  notFound: notFoundMock,
  usePathname: () => "/",
}));

vi.mock("next/font/google", () => ({
  Inter: () => ({ variable: "--font-inter", className: "font-inter" }),
  Fraunces: () => ({ variable: "--font-fraunces", className: "font-fraunces" }),
}));

describe("home route", () => {
  it("renders identity, role, and both primary calls to action", () => {
    render(<HomePage />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(profile.name);
    expect(screen.getAllByText(new RegExp(profile.role, "i")).length).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: /view selected work/i })).toHaveAttribute(
      "href",
      "/work",
    );
    expect(screen.getAllByRole("link", { name: /download resume/i })[0]).toHaveAttribute(
      "href",
      profile.resumePath,
    );
  });

  it("features the campus reservation screenshot with descriptive alt text", () => {
    render(<HomePage />);

    const image = screen.getByAltText(/UniSpace landing page/i);
    expect(image).toHaveAttribute(
      "src",
      "/images/projects/campus-reservation/home-hero.jpg",
    );
  });

  it("links every featured case study", () => {
    const { container } = render(<HomePage />);

    for (const project of projects.filter((item) => item.featured)) {
      expect(container.querySelector(`a[href="/work/${project.slug}"]`)).not.toBeNull();
    }
  });

  it("renders a single h1 and no skipped heading levels", () => {
    const { container } = render(<HomePage />);

    expect(container.querySelectorAll("h1")).toHaveLength(1);
    const levels = Array.from(container.querySelectorAll("h1,h2,h3,h4")).map((node) =>
      Number(node.tagName.slice(1)),
    );
    for (let index = 1; index < levels.length; index += 1) {
      expect((levels[index] as number) - (levels[index - 1] as number)).toBeLessThanOrEqual(1);
    }
  });
});

describe("work index route", () => {
  it("lists case studies before archive entries", () => {
    render(<WorkPage />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Case studies");
    expect(
      screen.getByRole("heading", { name: /featured case studies/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /supporting work/i })).toBeInTheDocument();
  });

  it("never renders an inactive live demo control", () => {
    const { container } = render(<WorkPage />);

    const liveLinks = Array.from(container.querySelectorAll("a")).filter((anchor) =>
      /live/i.test(anchor.textContent ?? ""),
    );
    for (const link of liveLinks) {
      expect(link.getAttribute("href")).toMatch(/^https:\/\//);
    }
    expect(container.querySelectorAll('a[href="#"]')).toHaveLength(0);
  });

  it("declares canonical metadata for /work", () => {
    expect(workMetadata.alternates?.canonical).toBe("/work");
    expect(workMetadata.title).toBe("Work");
  });
});

describe("about route", () => {
  it("presents full stack positioning and grouped skills", () => {
    render(<AboutPage />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(profile.headline);
    expect(screen.getByRole("heading", { name: /skills by category/i })).toBeInTheDocument();
    for (const label of ["Frontend", "Backend", "Data", "Engineering"]) {
      expect(screen.getByRole("heading", { name: label, level: 3 })).toBeInTheDocument();
    }
  });

  it("does not describe the profile as front-end only", () => {
    const { container } = render(<AboutPage />);
    expect(container.textContent).not.toMatch(/front-end developer/i);
  });

  it("renders the portrait with descriptive alt text", () => {
    render(<AboutPage />);
    expect(screen.getByAltText(profile.avatar.alt)).toHaveAttribute("src", profile.avatar.src);
  });

  it("declares canonical metadata for /about", () => {
    expect(aboutMetadata.alternates?.canonical).toBe("/about");
  });
});

describe("case study route", () => {
  it("generates one static param per project", () => {
    expect(generateStaticParams()).toEqual(projects.map((project) => ({ slug: project.slug })));
  });

  it("renders the full case study narrative", async () => {
    const ui = await CaseStudyPage({
      params: Promise.resolve({ slug: "campus-reservation-system" }),
    });
    render(ui);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Campus Reservation System",
    );
    for (const heading of [
      /the problem/i,
      /role and contribution/i,
      /architecture/i,
      /stack detail/i,
      /key decisions/i,
      /challenges/i,
      /limitations and next steps/i,
      /source and deployment/i,
    ]) {
      expect(screen.getByRole("heading", { name: heading })).toBeInTheDocument();
    }
  });

  it("explains the absence of a deployment instead of rendering a dead link", async () => {
    const ui = await CaseStudyPage({
      params: Promise.resolve({ slug: "sistem-rapor" }),
    });
    const { container } = render(ui);

    expect(container.querySelector('a[href="#"]')).toBeNull();
    const explanations = screen.getAllByText(/no public deployment/i);
    expect(explanations.length).toBeGreaterThan(0);
    const linksSection = container.querySelector('section[aria-labelledby="links-heading"]');
    expect(linksSection?.textContent).toMatch(/no live demo link is offered/i);
  });

  it("renders the Sistem Rapor screenshot", async () => {
    const ui = await CaseStudyPage({ params: Promise.resolve({ slug: "sistem-rapor" }) });
    render(ui);

    expect(screen.getByRole("img", { name: /Sistem Rapor administrator dashboard/i })).toHaveAttribute(
      "src",
      expect.stringContaining("/images/projects/rapor.png"),
    );
  });

  it("calls notFound for an unknown slug", async () => {
    await expect(
      CaseStudyPage({ params: Promise.resolve({ slug: "does-not-exist" }) }),
    ).rejects.toThrow("NEXT_NOT_FOUND");
    expect(notFoundMock).toHaveBeenCalled();
  });

  it("builds canonical and social metadata per case study", async () => {
    const meta = await generateMetadata({
      params: Promise.resolve({ slug: "campus-reservation-system" }),
    });

    expect(meta.title).toBe("Campus Reservation System");
    expect(meta.alternates?.canonical).toBe("/work/campus-reservation-system");
    expect(meta.openGraph?.title).toContain("Campus Reservation System");
    expect(meta.twitter).toMatchObject({ card: "summary_large_image" });
  });

  it("marks an unknown slug as non-indexable", async () => {
    const meta = await generateMetadata({ params: Promise.resolve({ slug: "nope" }) });
    expect(meta.robots).toEqual({ index: false, follow: false });
  });
});

describe("not found route", () => {
  it("offers recovery links", () => {
    render(<NotFound />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/page not found/i);
    expect(screen.getByRole("link", { name: /view selected work/i })).toHaveAttribute(
      "href",
      "/work",
    );
    expect(screen.getByRole("link", { name: /back to home/i })).toHaveAttribute("href", "/");
  });
});

describe("root metadata", () => {
  it("uses the canonical Vercel URL and Ferry's identity", () => {
    expect(rootMetadata.metadataBase?.toString()).toBe(`${SITE_URL}/`);
    expect(JSON.stringify(rootMetadata.title)).toContain(profile.name);
    expect(rootMetadata.description).toMatch(/full stack/i);
    expect(rootMetadata.alternates?.canonical).toBe("/");
  });

  it("replaces Create React App metadata", () => {
    const serialised = JSON.stringify(rootMetadata).toLowerCase();
    expect(serialised).not.toContain("react app");
    expect(serialised).not.toContain("create react app");
    expect(serialised).not.toContain("#14b8a6");
  });

  it("declares Open Graph and Twitter cards", () => {
    expect(rootMetadata.openGraph?.locale).toBe("en_US");
    expect(rootMetadata.twitter).toMatchObject({ card: "summary_large_image" });
    expect(rootMetadata.manifest).toBe("/manifest.webmanifest");
  });
});
