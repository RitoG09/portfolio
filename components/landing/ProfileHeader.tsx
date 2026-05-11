import Image from "next/image";
import { Link } from "next-view-transitions";
import { ThemeToggleButton } from "@/components/common/ThemeSwitch";
import Github from "@/components/svgs/Github";
import Linkedin from "@/components/svgs/Linkedin";
import X from "@/components/svgs/X";
import { Cat, Instagram } from "lucide-react";
import RotatingText from "../ui/RotatingText";
import { heroConfig, socialLinks } from "@/config/Hero";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import CV from "../svgs/CV";
import Chat from "../svgs/Chat";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const buttonIcons = {
  CV: CV,
  Chat: Chat,
};

export default function ProfileHeader() {
  const { buttons } = heroConfig;
  return (
    <div className="w-full flex flex-col items-center mt-8 mb-8 z-10 relative">
      <div className="w-full h-[250px] md:h-[300px] relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
          alt="Mountains"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center text-white mt-12 px-4 text-center">
            <span className="text-xl md:text-2xl font-serif italic mb-2 tracking-wide text-white drop-shadow-md">
              Luck is just what persistence looks like from the outside.
            </span>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#1c1c1c] dark:bg-[#1a1a1a] border border-black/10 dark:border-white/5 relative px-6 md:px-10 pb-6 pt-16">
        {/* Avatar */}
        <div className="absolute -top-16 left-6 md:left-10 rounded-full border-[6px] border-[#1c1c1c] dark:border-[#1a1a1a] overflow-hidden size-[140px] bg-[#222]">
          <Image
            src="/rito.webp"
            alt="Profile Avatar"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute top-4 right-6 md:right-10 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 font-medium">
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
                    button.variant === "default" &&
                      "shadow-lg shadow-primary/25",
                  )}
                >
                  {IconComponent && <IconComponent className="mr-2" />}
                  <Link href={button.href}>{button.text}</Link>
                </Button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full">
          <div className="mt-4">
            <h1 className="text-3xl md:text-4xl font-serif italic text-white mb-1">
              Rito
            </h1>
            {/* <p className="text-sm md:text-base text-gray-400 font-medium tracking-wide">
              21 • Developer • Builder • Web Dev
            </p> */}
            <span className="text-secondary block mt-2">
              <RotatingText
                texts={[
                  "Fullstack Developer",
                  "Opensource Contributor",
                  "Backend Developer",
                  "DevOps Enthusiast",
                ]}
                mainClassName="inline-flex px-3 sm:px-2 md:px-4 bg-gradient-to-r from-yellow-400 to-blue-400 text-black overflow-hidden py-1 md:py-2 rounded-xl text-2xl md:text-4xl shadow-lg transform"
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
      </div>
    </div>
  );
}
