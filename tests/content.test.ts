import { describe, expect, it } from "vitest";
import { archiveProjects, featuredProjects, getProjectBySlug, projects } from "@/content/projects";
import { experience, profile, skillGroups, SITE_URL } from "@/content/profile";

const FORBIDDEN_STRINGS = [
  "yourhandle",
  "lorem ipsum",
  "TODO",
  "Arknights",
  "Endfield",
  "learn react",
  "Personal portfolio website",
];

function serialisedContent(): string {
  return JSON.stringify({ projects, archiveProjects, profile, skillGroups, experience });
}

describe("content model integrity", () => {
  it("exposes exactly three featured case studies", () => {
    expect(featuredProjects).toHaveLength(3);
    expect(featuredProjects.map((project) => project.slug)).toEqual([
      "campus-reservation-system",
      "sistem-rapor",
      "portfolio-redesign",
    ]);
  });

  it("keeps project slugs unique and resolvable", () => {
    const slugs = projects.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) {
      expect(getProjectBySlug(slug)?.slug).toBe(slug);
    }
    expect(getProjectBySlug("not-a-real-project")).toBeUndefined();
  });

  it("uses real repository URLs and never a placeholder destination", () => {
    for (const project of [...projects]) {
      expect(project.repositoryUrl).toMatch(/^https:\/\/github\.com\/ariefshecter\//);
      expect(project.liveUrl ?? "https://valid").toMatch(/^https:\/\//);
    }
    for (const item of archiveProjects) {
      expect(item.repositoryUrl).toMatch(/^https:\/\/github\.com\/ariefshecter\//);
    }
  });

  it("never lists a forked repository as original work", () => {
    const forkedSlugs = [
      "spurtcommerce",
      "Toko-Online-Laravel",
      "Anime-Shrine",
      "Sistem-Informasi-Desa-Laravel",
      "anime-recommendation-system",
    ];
    const allUrls = [...projects, ...archiveProjects].map((item) => item.repositoryUrl);
    for (const forked of forkedSlugs) {
      expect(allUrls.some((url) => url.endsWith(`/${forked}`))).toBe(false);
    }
  });

  it("describes every media item with meaningful alt text and honest labelling", () => {
    for (const project of projects) {
      expect(project.media.length).toBeGreaterThan(0);
      for (const media of project.media) {
        expect(media.alt.length).toBeGreaterThan(30);
        expect(media.caption.length).toBeGreaterThan(10);
        if (media.kind === "screenshot") {
          expect(media.src).toMatch(/^\/images\/projects\//);
        } else {
          expect(media.src).toBeUndefined();
          expect(media.placeholderLabel).toBeTruthy();
        }
      }
    }
  });

  it("gives every case study the full required narrative", () => {
    for (const project of featuredProjects) {
      const { caseStudy } = project;
      expect(project.outcome.length).toBeGreaterThan(40);
      expect(caseStudy.problem.length).toBeGreaterThan(0);
      expect(caseStudy.contribution.length).toBeGreaterThan(0);
      expect(caseStudy.architecture.length).toBeGreaterThan(0);
      expect(caseStudy.stack.length).toBeGreaterThan(0);
      expect(caseStudy.decisions.length).toBeGreaterThan(0);
      expect(caseStudy.challenges.length).toBeGreaterThan(0);
      expect(caseStudy.limitations.length).toBeGreaterThan(0);
      expect(caseStudy.architectureSummary.length).toBeGreaterThan(40);
    }
  });

  it("keeps profile identity fields verified and free of placeholders", () => {
    expect(profile.role).toBe("Junior Full Stack Developer");
    expect(profile.email).toBe("ceryover@gmail.com");
    expect(profile.linkedinUrl).toBe(
      "https://www.linkedin.com/in/ferry-khusnil-arief/",
    );
    expect(profile.githubUrl).toBe("https://github.com/ariefshecter");
    expect(profile.resumePath).toBe("/assets/resume/resume.pdf");
    expect(SITE_URL).toBe("https://my-portfolio-eta-ten-60.vercel.app");
    expect(profile.canonicalUrl).toBe(SITE_URL);
  });

  it("groups skills into the four evidence categories", () => {
    expect(skillGroups.map((group) => group.id)).toEqual([
      "frontend",
      "backend",
      "data",
      "engineering",
    ]);
    for (const group of skillGroups) {
      expect(group.skills.length).toBeGreaterThan(2);
    }
  });

  it("labels experience with the correct evidence type", () => {
    for (const entry of experience) {
      expect(["internship", "project", "academic", "research"]).toContain(entry.kind);
      expect(entry.highlights.length).toBeGreaterThan(0);
    }
    expect(experience).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          kind: "internship",
          organization: "PT Microdata Indonesia",
          period: "Dec 2025 — Feb 2026",
        }),
      ]),
    );
  });

  it("contains no legacy template or placeholder copy", () => {
    const serialised = serialisedContent().toLowerCase();
    for (const forbidden of FORBIDDEN_STRINGS) {
      expect(serialised).not.toContain(forbidden.toLowerCase());
    }
    expect(serialised).not.toContain('"#"');
  });

  it("only mentions Create React App as migration history, never as identity", () => {
    // The phrase is legitimate inside the portfolio case study narrative, but it must
    // never appear in a title, label, tag, or declared stack entry.
    const identityFields = [
      ...projects.flatMap((project) => [
        project.title,
        project.shortLabel,
        ...project.tags,
        ...project.primaryStack,
        ...project.caseStudy.stack.flatMap((section) => [section.label, ...section.items]),
      ]),
      profile.name,
      profile.role,
      profile.headline,
      ...archiveProjects.map((item) => item.name),
    ]
      .join(" | ")
      .toLowerCase();

    expect(identityFields).not.toContain("react app");
    expect(identityFields).not.toContain("react-scripts");
    expect(identityFields).not.toContain("react router");
  });
});
