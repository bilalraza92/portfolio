import type { IconType } from "react-icons";

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}

export interface Skill {
  name: string;
  icon: IconType;
  level: number; // 0-100
}

export interface SkillGroup {
  category: "Frontend" | "Backend" | "Tools";
  skills: Skill[];
}

export interface Service {
  title: string;
  description: string;
  icon: IconType;
  features: string[];
}

export type ProjectCategory = "React" | "Next.js" | "JavaScript";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  category: ProjectCategory;
  status: "Live" | "In Progress" | "Completed";
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "work" | "learning";
}

export interface EducationItem {
  id: string;
  institution: string;
  program: string;
  period: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  feedback: string;
  avatar: string;
  rating: number;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}
