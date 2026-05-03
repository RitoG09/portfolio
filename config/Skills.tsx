import Tailwindcss from "@/components/technologies/Tailwindcss";
import AWS from "@/components/technologies/AWS";
import JavaScript from "@/components/technologies/JavaScript";
import MongoDB from "@/components/technologies/MongoDB";
import NextJs from "@/components/technologies/NextJs";
import NodeJs from "@/components/technologies/NodeJs";
import PostgreSQL from "@/components/technologies/PostgreSQL";
import Prisma from "@/components/technologies/Prisma";
import ReactIcon from "@/components/technologies/React";
import TypeScript from "@/components/technologies/Typescript";

export interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

export const mySkills: Skill[] = [
  { name: "React", icon: <ReactIcon />, color: "#61DAFB" },
  { name: "AWS", icon: <AWS />, color: "#FF9900" },
  { name: "Tailwind CSS", icon: <Tailwindcss />, color: "#06B6D4" },
  { name: "JavaScript", icon: <JavaScript />, color: "#F7DF1E" },
  { name: "TypeScript", icon: <TypeScript />, color: "#3178C6" },
  { name: "MongoDB", icon: <MongoDB />, color: "#47A248" },
  { name: "Next.js", icon: <NextJs />, color: "#808080" },
  { name: "Node.js", icon: <NodeJs />, color: "#5FA04E" },
  { name: "PostgreSQL", icon: <PostgreSQL />, color: "#4169E1" },
  { name: "Prisma", icon: <Prisma />, color: "#5A67D8" },
];
