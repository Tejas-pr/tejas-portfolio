/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info:
 *    name: "Your Name"
 *    title: "Your Professional Title"
 *    avatar: "/path/to/your/image.jpg"
 *
 * 2. Add your skills:
 *    skills: [
 *      { name: "Python", href: "https://python.org", component: "Python" }, // Note: You'd need to create Python component
 *      { name: "React", href: "https://react.dev", component: "ReactIcon" },
 *      { name: "Node.js", href: "https://nodejs.org", component: "NodeJs" },
 *    ]
 *
 * 3. Write your description using the template:
 *    template: "I'm a **passionate developer** who loves building apps with {skills:0} and {skills:1}. I specialize in **web development** and enjoy working with {skills:2}."
 *
 * 4. Update your social links:
 *    Just change the href values to your own social media profiles
 *
 * That's it! Your portfolio will automatically update with your information.
 */
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

// Technology Components
import Youtube from "@/components/svg/Youtube";
import TypeScript from "@/components/technologies/TypeScript";

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
  title: "A Full Stack Developer.",
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
    name: "Youtube",
    href: "https://youtube.com",
    icon: <Youtube />,
  },
  {
    name: "Email",
    href: "mailto:tejas.teju02@gmail.com",
    icon: <Mail />,
  },
];
