import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import manifest from "@/app/manifest";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { PersonJsonLd, WebSiteJsonLd } from "@/components/json-ld";
import { profile, SITE_URL } from "@/content/profile";
import { projects } from "@/content/projects";

describe("sitemap", () => {
  it("includes every route on the canonical host", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);

    expect(urls).toContain(`${SITE_URL}/`);
    expect(urls).toContain(`${SITE_URL}/work`);
    expect(urls).toContain(`${SITE_URL}/about`);
    for (const project of projects) {
      expect(urls).toContain(`${SITE_URL}/work/${project.slug}`);
    }
    for (const url of urls) {
      expect(url.startsWith(SITE_URL)).toBe(true);
    }
  });
});

describe("robots", () => {
  it("allows indexing and points at the sitemap", () => {
    const result = robots();
    expect(result.sitemap).toBe(`${SITE_URL}/sitemap.xml`);
    expect(result.host).toBe(SITE_URL);
    expect(JSON.stringify(result.rules)).toContain('"allow":"/"');
  });
});

describe("manifest", () => {
  it("replaces the Create React App defaults", () => {
    const result = manifest();
    expect(result.name).toContain(profile.name);
    expect(result.short_name).not.toBe("React App");
    expect(result.theme_color).toBe("#171613");
    expect(result.lang).toBe("en");
  });
});

describe("JSON-LD", () => {
  it("describes the person with verified links only", () => {
    const { container } = render(<PersonJsonLd />);
    const script = container.querySelector('script[type="application/ld+json"]');
    const data = JSON.parse(script?.innerHTML ?? "{}");

    expect(data["@type"]).toBe("Person");
    expect(data.name).toBe(profile.name);
    expect(data.jobTitle).toBe(profile.role);
    expect(data.sameAs).toEqual([profile.githubUrl, profile.linkedinUrl]);
    expect(data.url).toBe(SITE_URL);
  });

  it("describes the website with the canonical URL", () => {
    const { container } = render(<WebSiteJsonLd />);
    const script = container.querySelector('script[type="application/ld+json"]');
    const data = JSON.parse(script?.innerHTML ?? "{}");

    expect(data["@type"]).toBe("WebSite");
    expect(data.url).toBe(SITE_URL);
    expect(data.inLanguage).toBe("en");
  });
});
