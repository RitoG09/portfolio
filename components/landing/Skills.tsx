"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { mySkills } from "@/config/Skills";
import { OrbitingCircles } from "../ui/orbiting-circles";
import Skill from "../common/Skill";

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
        className="mt-6 mb-16 flex flex-col md:flex-row items-center gap-12 md:gap-6"
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

        {/* Right: Skills Tags */}
        <div className="w-full md:w-1/2 flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-wrap justify-start items-center gap-x-3 gap-y-4"
          >
            {mySkills.map((skill) => (
              <Skill key={skill.name} name={skill.name} href="#">
                {skill.icon}
              </Skill>
            ))}
          </motion.div>
        </div>
      </div>
    </Container>
  );
}
