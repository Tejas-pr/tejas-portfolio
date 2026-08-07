import AWS from "@/components/technologies/AWS";
import BootStrap from "@/components/technologies/BootStrap";
import Bun from "@/components/technologies/Bun";
import CSS from "@/components/technologies/CSS";
import ExpressJs from "@/components/technologies/ExpressJs";
import Figma from "@/components/technologies/Figma";
import Html from "@/components/technologies/Html";
import JavaScript from "@/components/technologies/JavaScript";
import MongoDB from "@/components/technologies/MongoDB";
import NestJs from "@/components/technologies/NestJs";
import NextJs from "@/components/technologies/NextJs";
import NodeJs from "@/components/technologies/NodeJs";
import Reactjs from "@/components/technologies/Reactjs";
import PostgreSQL from "@/components/technologies/PostgreSQL";
import Postman from "@/components/technologies/Postman";
import Prisma from "@/components/technologies/Prisma";
import ReactIcon from "@/components/technologies/ReactIcon";
import TailwindCss from "@/components/technologies/TailwindCss";
import TypeScript from "@/components/technologies/TypeScript";
import Vercel from "@/components/technologies/Vercel";
import Angular from "@/components/technologies/Angular";
import Django from "@/components/technologies/Django";
import Redis from "@/components/technologies/Redis";
import MySql from "@/components/technologies/MySql";
import Shadcn from "@/components/technologies/Shadcn";
import Turborepo from "@/components/technologies/Turborepo";

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface ProjectDetails {
  name: string;
  description: string[];
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description?: string[];
  projects?: ProjectDetails[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    isBlur: false,
    company: "Cronlab Solutions",
    position: "Junior Software Developer",
    location: "Bangalore, India (On-Site)",
    image: "/images/company/cron-labs.jpeg",
    description: [
      "Re-architected a high-concurrency checkout system (Django + Redis + Celery) into a 3-tier async pipeline, cutting latency from 5–10s to 50–100ms and verifying 1,000-thread stress tests with zero overselling.",
      "Designed a decoupled data-sync architecture and centralized RBAC layer for a B2B marketplace, eliminating cross-service dependencies and securing 100+ API endpoints.",
      "Built an audit-immutable offer-negotiation engine and a 3-step bulk-lot auction wizard, successfully shipping two independent B2B trading workflows.",
      "Scaffolded a Turborepo monorepo from scratch with shared UI libraries and Zod validation, standardizing architecture and reducing new-app bootstrap time.",
      "Implemented a type-safe frontend API layer and built interactive KPI/cultivation dashboards, unifying multi-tenant data into a single operator view.",
      "Engineered AI agents by writing behavioral instructions in Markdown and integrating external APIs like ChatGPT to execute logic and deploying them to production.",
      "Built a self-healing Redis/Postgres reconciliation engine to purge orphaned reservations and implemented secure cookie-based JWT authentication to resolve XSS vulnerabilities.",
    ],
    startDate: "March 2025",
    endDate: "Present",
    technologies: [
      {
        name: "React.js",
        href: "https://reactjs.org/",
        icon: <Reactjs />,
      },
      {
        name: "turborepo",
        href: "https://turborepo.dev/",
        icon: <Turborepo />,
      },
      {
        name: "TypeScript",
        href: "https://www.typescriptlang.org/",
        icon: <TypeScript />,
      },
      {
        name: "Django",
        href: "https://www.djangoproject.com/",
        icon: <Django />,
      },
      {
        name: "Redis",
        href: "https://redis.io/",
        icon: <Redis />,
      },
      {
        name: "MySQL",
        href: "https://www.mysql.com/",
        icon: <MySql />,
      },
      {
        name: "Shadcn/UI",
        href: "https://ui.shadcn.com/",
        icon: <Shadcn />,
      },
      {
        name: "Turborepo",
        href: "https://turbo.build/repo",
        icon: <Turborepo />,
      },
    ],
    website: "https://www.cronlabs.io/",
    github: "#",
    x: "#",
  },
  {
    isCurrent: false,
    company: "ETF Ninja",
    position: "Full Stack Developer Intern",
    location: "Remote",
    image: "/images/company/etf-ninja.jpeg",
    description: [
      "Redesigned the UI with the UX team, boosting responsiveness and growing the user base by 22%.",
      "Developed backend logic for landing page graphs, referral amount calculations, and coupon system.",
      "Implemented blog management (add/delete), feedback pages, and user guidelines.",
      "Merged the Free & Silver tiers into a Free tier and retained the gold tier, implementing the necessary backend logic to support the change.",
    ],
    startDate: "December 2024",
    endDate: "February 2025",
    technologies: [
      {
        name: "React.js",
        href: "https://reactjs.org/",
        icon: <Reactjs />,
      },
      {
        name: "Express",
        href: "https://expressjs.com/",
        icon: <ExpressJs />,
      },
      {
        name: "Node.js",
        href: "https://nodejs.org/",
        icon: <NodeJs />,
      },
      {
        name: "TypeScript",
        href: "https://www.typescriptlang.org/",
        icon: <TypeScript />,
      },
      {
        name: "Postman",
        href: "https://www.postman.com/",
        icon: <Postman />,
      },
      {
        name: "TypeScript",
        href: "https://www.typescriptlang.org/",
        icon: <TypeScript />,
      },
    ],
    website: "https://etfkidukaan.in/",
    github: "#",
    x: "#",
    linkedin: "https://www.linkedin.com/company/etfninja/",
  },
];
