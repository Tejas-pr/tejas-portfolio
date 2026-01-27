import Appwrite from "@/components/technologies/Appwrite";
import Bun from "@/components/technologies/Bun";
import ExpressJs from "@/components/technologies/ExpressJs";
import Github from "@/components/technologies/Github";
import MDXIcon from "@/components/technologies/MDXIcon";
import MongoDB from "@/components/technologies/MongoDB";
import Motion from "@/components/technologies/Motion";
import Netlify from "@/components/technologies/Netlify";
import NextJs from "@/components/technologies/NextJs";
import NodeJs from "@/components/technologies/NodeJs";
import PostgreSQL from "@/components/technologies/PostgreSQL";
import Prisma from "@/components/technologies/Prisma";
import ReactIcon from "@/components/technologies/ReactIcon";
import Sanity from "@/components/technologies/Sanity";
import Shadcn from "@/components/technologies/Shadcn";
import SocketIo from "@/components/technologies/SocketIo";
import TailwindCss from "@/components/technologies/TailwindCss";
import ThreeJs from "@/components/technologies/ThreeJs";
import TypeScript from "@/components/technologies/TypeScript";
import Vercel from "@/components/technologies/Vercel";
import { Project } from "@/types/project";

// https://ramx.in/

export const projects: Project[] = [
  {
    title: "Sketchly – AI-Powered Drawing App",
    description:
      "Interactive AI-powered drawing platform where users can draw shapes like rectangles, circles, triangles, and freehand strokes using a refined ShadCN UI. Built with a scalable monorepo architecture using Turborepo, Next.js, Prisma ORM, and TailwindCSS — featuring Better Auth for authentication and real-time collaboration powered by WebSockets. Includes BullMQ + Redis for job queueing, CI/CD-enabled automated Docker deployments, and LangChain-driven AI to generate shapes and assist with creativity.",
    image: "/images/projects/sketchly.png",
    video: "#",
    link: "https://drawing.tejaspr.site/",
    technologies: [
      { name: "Next.js", icon: <NextJs key="nextjs" /> },
      { name: "TypeScript", icon: <TypeScript key="typescript" /> },
      { name: "React", icon: <ReactIcon key="react" /> },
      { name: "Vercel", icon: <Vercel key="vercel" /> },
      { name: "MongoDB", icon: <MongoDB key="mongodb" /> },
      { name: "Tailwind CSS", icon: <TailwindCss key="tailwindcss" /> },
      { name: "shadcn/ui", icon: <Shadcn key="shadcn" /> },
    ],
    github: "https://github.com/Tejas-pr/Sketchly",
    live: "https://drawing.tejaspr.site/",
    details: true,
    projectDetailsPageSlug: "/projects/sketchly",
    isWorking: true,
  },
];
