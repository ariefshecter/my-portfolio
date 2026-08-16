import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProjectLinks } from "@/components/project-links";
import { projects } from "@/content/projects";
import type { Project } from "@/content/types";

const withLive = projects.find((project) => project.liveUrl) as Project;
const withoutLive = projects.find((project) => !project.liveUrl) as Project;

describe("ProjectLinks", () => {
  it("always renders a repository link that opens safely in a new tab", () => {
    render(<ProjectLinks project={withoutLive} />);

    const repo = screen.getByRole("link", { name: /view repository/i });
    expect(repo).toHaveAttribute("href", withoutLive.repositoryUrl);
    expect(repo).toHaveAttribute("target", "_blank");
    expect(repo.getAttribute("rel")).toContain("noopener");
  });

  it("omits the live link when no deployment is verified", () => {
    render(<ProjectLinks project={withoutLive} />);
    expect(screen.queryByRole("link", { name: /live/i })).toBeNull();
  });

  it("renders the live link when a deployment exists", () => {
    render(<ProjectLinks project={withLive} />);
    expect(screen.getByRole("link", { name: /view live site/i })).toHaveAttribute(
      "href",
      withLive.liveUrl as string,
    );
  });

  it("never renders a placeholder href", () => {
    for (const project of projects) {
      const { container, unmount } = render(<ProjectLinks project={project} />);
      for (const anchor of Array.from(container.querySelectorAll("a"))) {
        const href = anchor.getAttribute("href") ?? "";
        expect(href).not.toBe("#");
        expect(href).not.toBe("");
        expect(href).toMatch(/^https:\/\//);
      }
      unmount();
    }
  });
});
