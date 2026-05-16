import { Award, Code, Cloud } from "lucide-react";
import React from "react";

export type CertificationItem = {
  name: string;
  issuer: string;
  date: string;
  description?: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
};

export const certifications: CertificationItem[] = [
  {
    name: "Full Stack Web Development & DevOps — Cohort 3",
    issuer: "100xDevs",
    date: "May 2026",
    description: "Skills: Docker, Redis, Full-Stack Development",
    icon: Code,
    href: "#",
  },
  {
    name: "Introduction to Generative AI",
    issuer: "Google Cloud",
    date: "May 2026",
    description: "Credential ID 24064741",
    icon: Cloud,
    href: "https://www.skills.google/public_profiles/9d1bc0f7-8d1a-4379-b574-d59859ce9cf4",
  },
  {
    name: "Arcade Base Camp May 2026",
    issuer: "Google Cloud",
    date: "May 2026",
    description: "Credential ID 24068882",
    icon: Cloud,
    href: "https://www.skills.google/public_profiles/9d1bc0f7-8d1a-4379-b574-d59859ce9cf4",
  },
  {
    name: "The Basics of Google Cloud Compute",
    issuer: "Google Cloud",
    date: "May 2026",
    description: "Credential ID 24069487",
    icon: Cloud,
    href: "https://www.skills.google/public_profiles/9d1bc0f7-8d1a-4379-b574-d59859ce9cf4",
  },
];
