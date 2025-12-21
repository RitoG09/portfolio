import Github from "@/components/svgs/Github";
import LinkedIn from "@/components/svgs/Linkedin";
import Mail from "@/components/svgs/Mail";
import X from "@/components/svgs/X";
import Bun from "@/components/technologies/Bun";
import JavaScript from "@/components/technologies/JavaScript";
import MongoDB from "@/components/technologies/MongoDB";
import NextJs from "@/components/technologies/NextJs";
import NodeJs from "@/components/technologies/NodeJs";
import PostgreSQL from "@/components/technologies/PostgreSQL";
import Prisma from "@/components/technologies/Prisma";
import React from "@/components/technologies/React";
import TypeScript from "@/components/technologies/Typescript";

// Component mapping for skills
export const skillComponents = {
  TypeScript: TypeScript,
  React: React,
  NextJs: NextJs,
  PostgreSQL: PostgreSQL,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  Prisma: Prisma,
  JavaScript: JavaScript,
};

export const heroConfig = {
  // Personal Information
  name: "Rito",
  title: "A Full Stack web developer.",
  avatar: "/rito.webp",

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
      component: "React",
    },
    {
      name: "Next.js",
      href: "https://nextjs.org/",
      component: "NextJs",
    },
    {
      name: "PostgreSQL",
      href: "https://www.postgresql.org/",
      component: "PostgreSQL",
    },
    {
      name: "MongoDB",
      href: "https://www.mongodb.com/docs/",
      component: "MongoDB",
    },
  ],

  // Description Configuration
  description: {
    template:
      "I build scalable web apps using {skills:0}, {skills:1}, {skills:2}, {skills:3} and {skills:4}. With a focus on <b>Database</b> schema design. Enthusiastic about <b>DevOps</b>, keen to build production ready apps.",
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
    href: "https://x.com/RitoGhosh10",
    icon: <X />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ritog09/",
    icon: <LinkedIn />,
  },
  {
    name: "Github",
    href: "https://github.com/ritog09",
    icon: <Github />,
  },
  {
    name: "Email",
    href: "mailto:ritabrataghosh09@gmail.com",
    icon: <Mail />,
  },
];
