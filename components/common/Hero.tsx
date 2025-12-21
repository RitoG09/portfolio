import { heroConfig, skillComponents, socialLinks } from "@/config/Hero";
import { parseTemplate } from "@/lib/hero";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import Image from "next/image";
import React from "react";
import Container from "./Container";
import Skill from "./Skill";
import CV from "../svgs/CV";
import Chat from "../svgs/Chat";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Button } from "../ui/button";
import RotatingText from "../ui/RotatingText";
import Model3d from "../3d/Model3d";

const buttonIcons = {
  CV: CV,
  Chat: Chat,
};

export default function Hero() {
  const { name, title, avatar, description, skills, buttons } = heroConfig;

  const renderDescription = () => {
    const parts = parseTemplate(description.template, skills);

    return parts.map((part) => {
      if (part.type === "skill" && "skill" in part && part.skill) {
        const SkillComponent =
          skillComponents[part.skill.component as keyof typeof skillComponents];
        if (!SkillComponent) {
          console.error(
            `Skill component not found: ${part.skill.component}`,
            skillComponents
          );
          return null;
        }
        return (
          <Skill key={part.key} name={part.skill.name} href={part.skill.href}>
            <SkillComponent />
          </Skill>
        );
      } else if (part.type === "bold" && "text" in part) {
        return (
          <b key={part.key} className="whitespace-pre-wrap text-primary">
            {part.text}
          </b>
        );
      } else if (part.type === "text" && "text" in part) {
        return (
          <span key={part.key} className="whitespace-pre-wrap">
            {part.text}
          </span>
        );
      }
      return null;
    });
  };

  return (
    <Container className="max-w-7xl! flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 min-h-[calc(100vh-80px)] py-8 md:py-0">
      {/* Left: Text, Buttons, Socials */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6 md:gap-8 z-10 w-full md:max-w-[55%]">
        {/* Heading & Desc */}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-6xl font-bold font-outfit leading-[1.1] tracking-tight text-foreground">
            Hi, I&apos;m {name}
            <span className="text-secondary block mt-2">
              <RotatingText
                texts={[
                  "Fullstack Developer",
                  "Opensource Contributor",
                  "Backend Developer",
                  "DevOps Enthusiast",
                ]}
                mainClassName="inline-flex px-3 sm:px-2 md:px-4 bg-yellow-400 text-black overflow-hidden py-1 md:py-2 rounded-xl text-2xl md:text-4xl shadow-lg transform -rotate-1"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </span>
          </h1>

          <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-2 gap-y-2 text-base md:text-lg text-muted-foreground font-medium max-w-xl mx-auto md:mx-0">
            {renderDescription()}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center md:justify-start">
          {buttons.map((button, ind) => {
            const IconComponent =
              buttonIcons[button.icon as keyof typeof buttonIcons];
            return (
              <Button
                key={ind}
                variant={button.variant as "outline" | "default"}
                className={cn(
                  "h-12 px-8 text-base md:text-lg rounded-lg w-full sm:w-auto",
                  button.variant === "outline" &&
                    "border-2 hover:bg-secondary/10",
                  button.variant === "default" && "shadow-lg shadow-primary/25"
                )}
              >
                {IconComponent && <IconComponent className="mr-2" />}
                <Link href={button.href}>{button.text}</Link>
              </Button>
            );
          })}
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center md:justify-start">
          {socialLinks.map((link) => (
            <Tooltip key={link.name} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href={link.href}
                  key={link.name}
                  className="text-muted-foreground hover:text-primary transition-all transform hover:scale-110 hover:-translate-y-1"
                >
                  <span className="size-5 md:size-5 flex items-center justify-center [&_svg]:size-full">
                    {link.icon}
                  </span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>{link.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>

      {/* Right: 3D Model */}
      <figure className="relative flex-1 w-full h-[350px] md:h-[500px] flex items-center justify-center pointer-events-none md:pointer-events-auto order-first md:order-last">
        {/* Absolute glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-primary/20 blur-[90px] rounded-full -z-10" />
        <Model3d />
      </figure>
    </Container>
  );
}
