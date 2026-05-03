"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { mySkills } from "@/config/Skills";
import { OrbitingCircles } from "../ui/orbiting-circles";

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const outerSkills = mySkills.slice(0, 5);
  const innerSkills = mySkills.slice(5);

  return (
    <Container>
      <SectionHeading subHeading="Skills" heading="My Skills" />

      <div
        ref={ref}
        className="mt-6 mb-16 flex flex-col md:flex-row items-center gap-6"
      >
        {/* Left: Orbiting Circles */}
        <div className="relative h-[400px] w-full md:w-1/2 flex-shrink-0 overflow-hidden">
          {/* OUTER – regular */}
          <OrbitingCircles radius={150} duration={40}>
            {outerSkills.map((skill) => (
              <div key={skill.name} className="w-8 h-8">
                {skill.icon}
              </div>
            ))}
          </OrbitingCircles>

          {/* INNER – reverse + smooth */}
          <OrbitingCircles radius={90} duration={30} smooth>
            {innerSkills.map((skill) => (
              <div key={skill.name} className="w-8 h-8">
                {skill.icon}
              </div>
            ))}
          </OrbitingCircles>
        </div>

        {/* Right: Skill Names List */}
        <div className="w-full md:w-1/2 flex flex-col gap-2.5">
          {mySkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: 20 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 20 }
              }
              transition={{
                duration: 0.4,
                delay: index * 0.06,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="group flex items-center gap-3 px-4 py-2.5 rounded-xl
                         border border-black/[0.05] dark:border-white/[0.07]
                         bg-white/50 dark:bg-white/[0.03]
                         backdrop-blur-sm
                         transition-all duration-300 ease-out
                         hover:border-black/[0.1] dark:hover:border-white/[0.14]
                         hover:bg-white/70 dark:hover:bg-white/[0.06]
                         hover:-translate-x-1 hover:shadow-md
                         dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.25)]
                         cursor-default relative overflow-hidden"
            >
              {/* Left accent bar */}
              <div
                className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 group-hover:h-3/5 rounded-full transition-all duration-400 ease-out"
                style={{ backgroundColor: skill.color }}
              />

              {/* Icon */}
              <div className="w-6 h-6 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>

              {/* Name */}
              <span className="text-sm font-medium text-foreground/75 dark:text-foreground/65 group-hover:text-foreground transition-colors duration-300">
                {skill.name}
              </span>

              {/* Subtle color dot */}
              <div
                className="ml-auto w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ backgroundColor: skill.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
}
