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
import Turborepo from "@/components/technologies/Turborepo";

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
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
    company: "Cronlabs Solutions",
    position: "Jr. Software Engineer",
    location: "Bangalore, India (On-Site)",
    image: "/images/company/cron-labs.jpeg",
    description: [
      "Engineered a high-concurrency reservation and checkout system using Django + Redis distributed locks; transitioned inventory reconciliation to async ETL/polling, cutting race conditions by 99.9% and handling 10,000+ daily cart operations at peak load across 1,000+ concurrent users.",
      "Architected a system-wide Global Search infrastructure driven by MySQL Full-Text Search and frontend debouncing, reducing API query latency by ~45% and standardizing search UX across 15+ marketplace modules.",
      "Scaffolded SmartGrow Marketplace from zero using Turborepo — defined monorepo structure, routing, state management, component library, and API layer across a 3-person cross-functional team.",
      "Built multi-tenant dashboards managing cultivation, inventory, and transfer workflows across 10+ farms; reduced user search time by ~60% via advanced filtering, tag-based search, and pagination.",
      "Strengthened organizational security by implementing RBAC, double-submit protection, and multi-tenant access controls, effectively neutralizing 100% of unauthorized payload execution risks.",
      "Unified 15+ disjointed UI components into a shared reusable architecture, reducing boilerplate by ~35% and frontend response delay by 200–300ms via optimistic UI updates.",
      "Delivered 8+ client-facing Cisco features; implemented Redis-cached high-frequency dropdowns achieving sub-10ms response times and ~95% backend load reduction.",
      "Automated compliance reporting for 50,000+ plant records, cutting manual effort by ~80%; shipped a cross-platform React Native app for field operators with offline-capable workflows.",
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
        name: "Postman",
        href: "https://www.postman.com/",
        icon: <Postman />,
      },
      {
        name: "Django",
        href: "https://www.djangoproject.com/",
        icon: <Django />,
      },
    ],
    website:
      "https://www.linkedin.com/company/strategify-analytics/posts/?feedView=all",
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
