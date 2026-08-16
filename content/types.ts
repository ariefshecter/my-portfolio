export type SkillCategoryId = "frontend" | "backend" | "data" | "engineering";

export interface SkillGroup {
  id: SkillCategoryId;
  label: string;
  summary: string;
  skills: string[];
}

export type ExperienceKind = "project" | "academic" | "research";

export interface ExperienceEntry {
  id: string;
  kind: ExperienceKind;
  /** Honest label: no employment claim unless it is employment. */
  title: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  canonicalUrl: string;
  resumePath: string;
  availability: string;
  headline: string;
  summary: string;
  avatar: {
    src: string;
    alt: string;
  };
}

export type ProjectMediaKind = "screenshot" | "placeholder";

export interface ProjectMedia {
  kind: ProjectMediaKind;
  /** Only present for real captured media. */
  src?: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
  /** Shown on labeled placeholders so nothing implies media that does not exist. */
  placeholderLabel?: string;
}

export interface ArchitectureLayer {
  label: string;
  detail: string;
}

export interface StackSection {
  label: string;
  items: string[];
}

export interface CaseStudy {
  problem: string[];
  role: string;
  contribution: string[];
  architectureSummary: string;
  architecture: ArchitectureLayer[];
  stack: StackSection[];
  decisions: { title: string; detail: string }[];
  challenges: { title: string; detail: string }[];
  limitations: string[];
}

export interface Project {
  slug: string;
  title: string;
  shortLabel: string;
  outcome: string;
  description: string;
  year: string;
  tags: string[];
  primaryStack: string[];
  repositoryUrl: string;
  /** Omitted when no verified public deployment exists. Never use "#". */
  liveUrl?: string;
  featured: boolean;
  media: ProjectMedia[];
  caseStudy: CaseStudy;
}

export interface ArchiveProject {
  name: string;
  category: "Machine learning" | "Games" | "Mobile" | "Web" | "Experiments";
  description: string;
  tech: string[];
  repositoryUrl: string;
}
