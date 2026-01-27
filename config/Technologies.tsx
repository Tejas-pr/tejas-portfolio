import AWS from "@/components/technologies/AWS";
import Bun from "@/components/technologies/Bun";
import CSS from "@/components/technologies/CSS";
import ExpressJs from "@/components/technologies/ExpressJs";
import Figma from "@/components/technologies/Figma";
import Html from "@/components/technologies/Html";
import JavaScript from "@/components/technologies/JavaScript";
import MongoDB from "@/components/technologies/MongoDB";
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
import Java from "@/components/technologies/Java";
import GO from "@/components/technologies/Go";
import MySql from "@/components/technologies/MySql";
import Redis from "@/components/technologies/Redis";
import Docker from "@/components/technologies/Docker";
import K8s from "@/components/technologies/K8s";
import Npm from "@/components/technologies/Npm";
import Pnpm from "@/components/technologies/Pnpm";
import Prometheus from "@/components/technologies/Prometheus";
import Grafana from "@/components/technologies/Grafana";
import Github from "@/components/svg/Github";
import Git from "@/components/technologies/Git";
import IOS from "@/components/technologies/IOS";
import Ubuntu from "@/components/technologies/Ubuntu";
import Windows from "@/components/technologies/Windows";

export const technologies = [
  {
    category: "Frontend",
    items: [
      {
        name: "Turborepo",
        href: "https://turborepo.org/",
        icon: <Turborepo />,
      },
      { name: "Next.js", href: "https://nextjs.org/", icon: <NextJs /> },
      { name: "React.js", href: "https://reactjs.org/", icon: <Reactjs /> },
      { name: "Angular", href: "https://angular.io/", icon: <Angular /> },
      {
        name: "Tailwind CSS",
        href: "https://tailwindcss.com/",
        icon: <TailwindCss />,
      },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", href: "https://nodejs.org/", icon: <NodeJs /> },
      {
        name: "Express.js",
        href: "https://expressjs.com/",
        icon: <ExpressJs />,
      },
      {
        name: "Django",
        href: "https://www.djangoproject.com/",
        icon: <Django />,
      },
      { name: "Prisma", href: "https://www.prisma.io/", icon: <Prisma /> },
    ],
  },
  {
    category: "Cores",
    items: [
      {
        name: "JavaScript",
        href: "https://www.javascript.com/",
        icon: <JavaScript />,
      },
      {
        name: "TypeScript",
        href: "https://www.typescriptlang.org/",
        icon: <TypeScript />,
      },
      { name: "Java", href: "https://www.java.com/", icon: <Java /> },
      { name: "GO", href: "https://golang.org/", icon: <GO /> },
      { name: "HTML", href: "https://html.com/", icon: <Html /> },
      { name: "CSS", href: "https://css-tricks.com/", icon: <CSS /> },
    ],
  },
  {
    category: "Databases",
    items: [
      {
        name: "PostgreSQL",
        href: "https://www.postgresql.org/",
        icon: <PostgreSQL />,
      },
      {
        name: "MySQL",
        href: "https://www.mysql.com/",
        icon: <MySql />,
      },
      { name: "MongoDB", href: "https://mongodb.com/", icon: <MongoDB /> },
      { name: "Redis", href: "https://www.redis.io/", icon: <Redis /> },
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      { name: "Docker", href: "https://www.docker.com/", icon: <Docker /> },
      { name: "Kubernetes", href: "https://www.kubernetes.io/", icon: <K8s /> },
      { name: "AWS", href: "https://aws.amazon.com/", icon: <AWS /> },
      {
        name: "Prometheus",
        href: "https://aws.amazon.com/",
        icon: <Prometheus />,
      },
      { name: "Grafana", href: "https://aws.amazon.com/", icon: <Grafana /> },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Postman", href: "https://www.postman.com/", icon: <Postman /> },
      { name: "Git", href: "https://www.postman.com/", icon: <Git /> },
      { name: "Github", href: "https://www.postman.com/", icon: <Github /> },
      { name: "Vercel", href: "https://vercel.com/", icon: <Vercel /> },
      { name: "Figma", href: "https://www.figma.com/", icon: <Figma /> },
      { name: "Bun", href: "https://bun.sh/", icon: <Bun /> },
      { name: "Npm", href: "https://npmjs.com/", icon: <Npm /> },
      { name: "Pnpm", href: "https://pnpm.io/", icon: <Pnpm /> },
      {
        name: "Icons",
        href: "https://react-icons.github.io/react-icons/",
        icon: <ReactIcon />,
      },
    ],
  },
  {
    category: "Os",
    items: [
      { name: "Ubuntu", href: "https://www.postman.com/", icon: <Ubuntu /> },
      { name: "IOS", href: "https://www.postman.com/", icon: <IOS /> },
      { name: "Windows", href: "https://www.postman.com/", icon: <Windows /> },
    ],
  },
];
