import Bun from "@/components/technologies/Bun";
import ExpressJs from "@/components/technologies/ExpressJs";
import Github from "@/components/svgs/Github";
import MDXIcon from "@/components/technologies/MDXIcon";
import MongoDB from "@/components/technologies/MongoDB";
import Motion from "@/components/technologies/Motion";
import NextJs from "@/components/technologies/NextJs";
import NodeJs from "@/components/technologies/NodeJs";
import PostgreSQL from "@/components/technologies/PostgreSQL";
import Prisma from "@/components/technologies/Prisma";
import React from "@/components/technologies/React";
import Sanity from "@/components/technologies/Sanity";
import Shadcn from "@/components/technologies/Shadcn";
import WebSocket from "@/components/technologies/WebSocket";
import TailwindCss from "@/components/technologies/Tailwindcss";
import ThreeJs from "@/components/technologies/ThreeJS";
import TypeScript from "@/components/technologies/Typescript";
import Vercel from "@/components/technologies/Vercel";
import { Project } from "@/types/Projects";
import Inngest from "@/components/technologies/Inngest";
import Chatgpt from "@/components/technologies/Chatgpt";
import Gemini from "@/components/technologies/Gemini";
import TRPC from "@/components/technologies/TRPC";
import Turborepo from "@/components/technologies/Turborepo";

export const projects: Project[] = [
  {
    title: "Trad Bot Automation",
    description:
      "An automation system for trade alerts and workflows, focusing on backend reliability, scheduling, and real-time execution.",
    image: "/projects/portfolio.png",
    video: "",
    link: "https://github.com/RitoG09/trad-bot-automation",
    technologies: [
      { name: "Next.js", icon: <NextJs /> },
      { name: "Node.js", icon: <NodeJs /> },
      { name: "TRPC", icon: <TRPC /> },
      { name: "PostgreSQL", icon: <PostgreSQL /> },
      { name: "Prisma", icon: <Prisma /> },
      { name: "Inngest", icon: <Inngest /> },
      { name: "TypeScript", icon: <TypeScript /> },
    ],
    github: "https://github.com/RitoG09/trad-bot-automation",
    live: "",
    details: true,
    projectDetailsPageSlug: "/projects/trad-bot-automation",
    isWorking: true,
  },

  {
    title: "Portfolio",
    description:
      "My personal developer portfolio showcasing projects, skills, experience, and contact information with a clean, modern UI.",
    image: "/projects/portfolio.png",
    video: "",
    link: "https://github.com/RitoG09/portfolio",
    technologies: [
      { name: "Next.js", icon: <NextJs /> },
      { name: "React", icon: <React /> },
      { name: "TypeScript", icon: <TypeScript /> },
      { name: "Tailwind CSS", icon: <TailwindCss /> },
      { name: "shadcn/ui", icon: <Shadcn /> },
      { name: "Vercel", icon: <Vercel /> },
    ],
    github: "https://github.com/RitoG09/portfolio",
    live: "",
    details: true,
    projectDetailsPageSlug: "/projects/portfolio",
    isWorking: true,
  },

  {
    title: "CollabDraw",
    description:
      "A real-time collaborative drawing application supporting multiple users with live canvas synchronization and real time chatting.",
    image: "/projects/portfolio.png",
    video: "",
    link: "https://collabdraw-peach.vercel.app/",
    technologies: [
      { name: "Turborepo", icon: <Turborepo /> },
      { name: "Next.js", icon: <NextJs /> },
      { name: "React", icon: <React /> },
      { name: "WebSockets", icon: <WebSocket /> },
      { name: "TypeScript", icon: <TypeScript /> },
      { name: "Tailwind CSS", icon: <TailwindCss /> },
      { name: "Vercel", icon: <Vercel /> },
    ],
    github: "https://github.com/RitoG09/collabdraw",
    live: "https://collabdraw-peach.vercel.app/",
    details: true,
    projectDetailsPageSlug: "/projects/collabdraw",
    isWorking: true,
  },
  {
    title: "BrainDock",
    description:
      "A document-based AI chat platform that allows users to upload files and interact with them using intelligent search and Q&A.",
    image: "/projects/portfolio.png",
    video: "",
    link: "https://braindoc-web.vercel.app/",
    technologies: [
      { name: "Next.js", icon: <NextJs /> },
      { name: "React", icon: <React /> },
      { name: "TypeScript", icon: <TypeScript /> },
      { name: "ChatGPT", icon: <Chatgpt /> },
      { name: "Tailwind CSS", icon: <TailwindCss /> },
      { name: "Vercel", icon: <Vercel /> },
    ],
    github: "https://github.com/RitoG09/braindoc",
    live: "https://braindoc-web.vercel.app/",
    details: true,
    projectDetailsPageSlug: "/projects/braindock",
    isWorking: true,
  },

  {
    title: "Planova",
    description:
      "An AI-powered trip planning application that generates personalized itineraries based on budget, duration, and preferences.",
    image: "/projects/portfolio.png",
    video: "",
    link: "https://planova-web.onrender.com/",
    technologies: [
      { name: "Next.js", icon: <NextJs /> },
      { name: "React", icon: <React /> },
      { name: "Node.js", icon: <NodeJs /> },
      { name: "MongoDB", icon: <MongoDB /> },
      { name: "Gemini", icon: <Gemini /> },
      { name: "Tailwind CSS", icon: <TailwindCss /> },
    ],
    github: "https://github.com/RitoG09/Planova",
    live: "https://planova-web.onrender.com/",
    details: true,
    projectDetailsPageSlug: "/projects/planova",
    isWorking: true,
  },
];
