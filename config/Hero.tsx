import Bun from "@/components/technologies/Bun";
import JavaScript from "@/components/technologies/JavaScript";
import MongoDB from "@/components/technologies/MongoDB";
import NextJs from "@/components/technologies/NextJs";
import NodeJs from "@/components/technologies/NodeJs";
import PostgreSQL from "@/components/technologies/PostgreSQL";
import Prisma from "@/components/technologies/Prisma";
import ReactIcon from "@/components/technologies/ReactIcon";
import Github from "@/components/svg/Github";
import LinkedIn from "@/components/svg/LinkedIn";
import Mail from "@/components/svg/Mail";
import X from "@/components/svg/X";
import { Instagram } from "lucide-react";
import TypeScript from "@/components/technologies/TypeScript";
import { resumeConfig } from "@/config/Resume";
import Notion from "@/components/svg/Notion";
import LeetCode from "@/components/svg/LeetCode";

// Component mapping for skills
export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  Bun: Bun,
  PostgreSQL: PostgreSQL,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  Prisma: Prisma,
  JavaScript: JavaScript,
};

export const heroConfig = {
  // Personal Information
  name: "Tejas",
  title: "A Software Developer",
  avatar: "/images/logos/dnchat.png",

  // Skills Configuration
  skills: [
    {
      name: "Typescript",
      href: "https://www.typescriptlang.org/",
      component: "TypeScript",
    },
    {
      name: "React",
      href: "https://react.dev/",
      component: "ReactIcon",
    },
    {
      name: "Next.js",
      href: "https://nextjs.org/",
      component: "NextJs",
    },
    {
      name: "Bun",
      href: "https://bun.sh/",
      component: "Bun",
    },
    {
      name: "PostgreSQL",
      href: "https://www.postgresql.org/",
      component: "PostgreSQL",
    },
  ],

  // Description Configuration
  description: {
    template:
      "I build scalable and interactive web applications using {skills:0}, {skills:1}, {skills:2}, {skills:3}, and {skills:4}, with a strong focus on <b>UI</b>, performance, and clean architecture.",
  },

  // Buttons Configuration
  buttons: [
    {
      variant: "outline",
      text: "Resume / CV",
      href: "/resume",
      icon: "CV",
    },
    {
      variant: "outline",
      text: "",
      href: resumeConfig.downloadHref,
      icon: "Download",
      isDownload: true,
    },
    {
      variant: "default",
      text: "Get in touch",
      href: "/contact",
      icon: "Chat",
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: "X",
    href: "https://x.com/Tejas67061437",
    icon: <X />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tejas-p-r-057a4622a/",
    icon: <LinkedIn />,
  },
  {
    name: "Github",
    href: "https://github.com/Tejas-pr",
    icon: <Github />,
  },
  {
    name: "Email",
    href: "mailto:tejas.teju02@gmail.com",
    icon: <Mail />,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/tejas_p_r",
    icon: <Instagram />,
  },
  {
    name: "Notion",
    href: "https://www.notion.so/TEJAS-P-R-36262e5f423e802e8a1bf9799e94dabe",
    icon: <Notion />,
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/tejas_pr/",
    icon: <LeetCode />,
  },
];
