import Appwrite from "@/components/technologies/Appwrite";
import Bun from "@/components/technologies/Bun";
import Docker from "@/components/technologies/Docker";
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
import Turborepo from "@/components/technologies/Turborepo";
import TypeScript from "@/components/technologies/TypeScript";
import Vercel from "@/components/technologies/Vercel";
import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Sketchly – AI Powered Drawing App",
    description:
      "Interactive AI-powered drawing platform where users can draw shapes like rectangles, circles, triangles, and freehand strokes using a refined ShadCN UI. Built with a scalable monorepo architecture using Turborepo, Next.js, Prisma ORM, and TailwindCSS — featuring Better Auth for authentication and real-time collaboration powered by WebSockets. Includes BullMQ + Redis for job queueing, CI/CD-enabled automated Docker deployments, and LangChain-driven AI to generate shapes and assist with creativity.",
    image: "/images/projects/sketchly.png",
    video: "https://youtu.be/_FFDLwJ_pJY",
    link: "https://drawing.tejaspr.site/",
    technologies: [
      { name: "Turborepo", icon: <Turborepo key="turborepo" /> },
      { name: "Next.js", icon: <NextJs key="nextjs" /> },
      { name: "TypeScript", icon: <TypeScript key="typescript" /> },
      { name: "Vercel", icon: <Vercel key="vercel" /> },
      { name: "PostgreSQL", icon: <PostgreSQL key="postgresql" /> },
      { name: "Tailwind CSS", icon: <TailwindCss key="tailwindcss" /> },
      { name: "shadcn/ui", icon: <Shadcn key="shadcn" /> },
      { name: "Prisma", icon: <Prisma key="prisma" /> },
      { name: "Docker", icon: <Docker key="docker" /> },
      { name: "Node.js", icon: <NodeJs key="nodejs" /> },
      { name: "Express.js", icon: <ExpressJs key="expressjs" /> },
    ],
    github: "https://github.com/Tejas-pr/Sketchly",
    live: "https://drawing.tejaspr.site/",
    details: true,
    projectDetailsPageSlug: "/projects/sketchly",
    isWorking: true,
  },
  {
    title: "Stackwatch",
    description: "Built Stackwatch, a distributed, real-time uptime monitoring platform with a scalable microservices architecture.",
    image: "/images/projects/stackwatch.png",
    video: "/videos/weekend.mp4",
    link: "https://github.com/Tejas-pr/stackwatch",
    technologies: [
      { name: "Turborepo", icon: <Turborepo key="turborepo" /> },
      { name: "Next.js", icon: <NextJs key="nextjs" /> },
      { name: "TypeScript", icon: <TypeScript key="typescript" /> },
      { name: "Vercel", icon: <Vercel key="vercel" /> },
      { name: "PostgreSQL", icon: <PostgreSQL key="postgresql" /> },
      { name: "Tailwind CSS", icon: <TailwindCss key="tailwindcss" /> },
      { name: "shadcn/ui", icon: <Shadcn key="shadcn" /> },
      { name: "Prisma", icon: <Prisma key="prisma" /> },
      { name: "Docker", icon: <Docker key="docker" /> },
      { name: "Node.js", icon: <NodeJs key="nodejs" /> },
      { name: "Express.js", icon: <ExpressJs key="expressjs" /> },
    ],
    github: "https://github.com/Tejas-pr/stackwatch",
    live: "https://github.com/Tejas-pr/stackwatch",
    details: true,
    projectDetailsPageSlug: "/projects/stackwatch",
    isWorking: true,
  },
  {
    title: "Dentora",
    description:
      "Dental booking platform. with appointment booking, patient management, doctor management, insurance processing, and billing features.",
    image: "/images/projects/dentora.png",
    video: "",
    link: "https://github.com/Dentora-in/dentora",
    technologies: [
      { name: "Turborepo", icon: <Turborepo key="turborepo" /> },
      { name: "Next.js", icon: <NextJs key="nextjs" /> },
      { name: "TypeScript", icon: <TypeScript key="typescript" /> },
      { name: "Vercel", icon: <Vercel key="vercel" /> },
      { name: "PostgreSQL", icon: <PostgreSQL key="postgresql" /> },
      { name: "Tailwind CSS", icon: <TailwindCss key="tailwindcss" /> },
      { name: "shadcn/ui", icon: <Shadcn key="shadcn" /> },
      { name: "Prisma", icon: <Prisma key="prisma" /> },
      { name: "Docker", icon: <Docker key="docker" /> },
      { name: "Node.js", icon: <NodeJs key="nodejs" /> },
      { name: "Express.js", icon: <ExpressJs key="expressjs" /> },
    ],
    github: "https://github.com/Dentora-in/dentora",
    live: "https://github.com/Dentora-in/dentora",
    details: true,
    projectDetailsPageSlug: "/projects/dentora",
    isWorking: false,
  },
  {
    title: "Real-Time Chat App",
    description:
      "A full-stack real-time chat application built with a modern monorepo architecture using Turborepo. It features instant messaging powered by WebSockets, secure user authentication, and persistent message storage with Prisma ORM. The app is designed with a clean UI using TailwindCSS and TypeScript for type safety, ensuring both performance and scalability.",
    image: "/images/projects/chat-app.png",
    video: "",
    link: "https://github.com/Tejas-pr/chatapp",
    technologies: [
      { name: "Turborepo", icon: <Turborepo key="turborepo" /> },
      { name: "Next.js", icon: <NextJs key="nextjs" /> },
      { name: "TypeScript", icon: <TypeScript key="typescript" /> },
      { name: "Vercel", icon: <Vercel key="vercel" /> },
      { name: "PostgreSQL", icon: <PostgreSQL key="postgresql" /> },
      { name: "Tailwind CSS", icon: <TailwindCss key="tailwindcss" /> },
      { name: "shadcn/ui", icon: <Shadcn key="shadcn" /> },
      { name: "Prisma", icon: <Prisma key="prisma" /> },
      { name: "Docker", icon: <Docker key="docker" /> },
      { name: "Node.js", icon: <NodeJs key="nodejs" /> },
      { name: "Express.js", icon: <ExpressJs key="expressjs" /> },
    ],
    github: "https://github.com/Tejas-pr/chatapp",
    live: "https://github.com/Tejas-pr/chatapp",
    details: true,
    projectDetailsPageSlug: "/projects/real-time-chat-app",
    isWorking: true,
  },
  {
    title: "AI PDF Chatbot Fullstack",
    description:
      "AI PDF Chatbot Fullstack is a SaaS platform designed to help users interact with and analyze PDF documents using advanced AI.",
    image: "/images/projects/ai-pdf.png",
    video: "",
    link: "https://ai-pdf-chatbot-fullstack.vercel.app/",
    technologies: [
      { name: "Next.js", icon: <NextJs key="nextjs" /> },
      { name: "TypeScript", icon: <TypeScript key="typescript" /> },
      { name: "Vercel", icon: <Vercel key="vercel" /> },
      { name: "PostgreSQL", icon: <PostgreSQL key="postgresql" /> },
      { name: "Tailwind CSS", icon: <TailwindCss key="tailwindcss" /> },
      { name: "Node.js", icon: <NodeJs key="nodejs" /> },
      { name: "Express.js", icon: <ExpressJs key="expressjs" /> },
    ],
    github: "https://github.com/Tejas-pr/AI-PDF-Chatbot-Fullstack",
    live: "https://ai-pdf-chatbot-fullstack.vercel.app/",
    details: true,
    projectDetailsPageSlug: "/projects/ai-pdf-chatbot-fullstack",
    isWorking: true,
  },
  {
    title: "Space Landing Page",
    description:
      "A visually stunning Space Landing Page built using React, TypeScript, and Tailwind CSS. This project creates an engaging and modern UI to showcase space-related content.",
    image: "/images/projects/space.png",
    video: "",
    link: "https://space-ts-landingpage.vercel.app/",
    technologies: [
      { name: "React", icon: <ReactIcon key="react" /> },
      { name: "TypeScript", icon: <TypeScript key="typescript" /> },
      { name: "Vercel", icon: <Vercel key="vercel" /> },
      { name: "Tailwind CSS", icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: "https://github.com/Tejas-pr/Space-ts-landingpage",
    live: "https://space-ts-landingpage.vercel.app/",
    details: true,
    projectDetailsPageSlug: "/projects/space-landing-page",
    isWorking: true,
  },
  {
    title: "Paytm Clone",
    description:
      "A Paytm-inspired wallet and transaction system built to understand real-world money transfers. It supports user-to-user transactions using MongoDB sessions to ensure atomicity and consistency. The project focuses on backend correctness, secure transfers, and a clean React-based UI.",
    image: "/images/projects/paytm-clone.png",
    video: "",
    link: "https://github.com/Tejas-pr/paytm",
    technologies: [
      { name: "React", icon: <ReactIcon key="react" /> },
      { name: "TypeScript", icon: <TypeScript key="typescript" /> },
      { name: "Vercel", icon: <Vercel key="vercel" /> },
      { name: "Tailwind CSS", icon: <TailwindCss key="tailwindcss" /> },
      { name: "Node.js", icon: <NodeJs key="nodejs" /> },
      { name: "Express.js", icon: <ExpressJs key="expressjs" /> },
    ],
    github: "https://github.com/Tejas-pr/paytm",
    live: "https://github.com/Tejas-pr/paytm",
    details: true,
    projectDetailsPageSlug: "/projects/paytm-clone",
    isWorking: true,
  },
  {
    title: "Shoptopia – E-commerce Platform",
    description:
      "Shoptopia is a full-stack e-commerce platform that allows users to browse, add, and view products seamlessly. It includes a dedicated admin panel for efficient product management, focusing on scalability, clean architecture, and a smooth shopping experience.",
    image: "/images/projects/shoptopia.png",
    video: "",
    link: "https://github.com/Tejas-pr/Shoptopia",
    technologies: [
      { name: "React", icon: <ReactIcon key="react" /> },
      { name: "TypeScript", icon: <TypeScript key="typescript" /> },
      { name: "Vercel", icon: <Vercel key="vercel" /> },
      { name: "Tailwind CSS", icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: "https://github.com/Tejas-pr/Shoptopia",
    live: "https://github.com/Tejas-pr/Shoptopia",
    details: true,
    projectDetailsPageSlug: "/projects/shoptopia",
    isWorking: true,
  },
  {
    title: "Weather",
    description:
      "Develop a real-time data processing system to monitor weather conditions and provide summarized insights using rollups and aggregates.",
    image: "/images/projects/weather.png",
    video: "",
    link: "https://github.com/Tejas-pr/",
    technologies: [
      { name: "React", icon: <ReactIcon key="react" /> },
      { name: "TypeScript", icon: <TypeScript key="typescript" /> },
      { name: "Vercel", icon: <Vercel key="vercel" /> },
      { name: "Tailwind CSS", icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: "https://github.com/Tejas-pr/WeatherSphere",
    live: "https://github.com/Tejas-pr/WeatherSphere",
    details: true,
    projectDetailsPageSlug: "/projects/weather-sphere",
    isWorking: true,
  },
];
