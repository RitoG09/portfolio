import Image from "next/image";
import { Link } from "next-view-transitions";
import { ThemeToggleButton } from "@/components/common/ThemeSwitch";
import Github from "@/components/svgs/Github";
import Linkedin from "@/components/svgs/Linkedin";
import X from "@/components/svgs/X";
import { Cat } from "lucide-react";

export default function ProfileHeader() {
  return (
    <div className="w-full flex flex-col items-center mt-8 mb-8 z-10 relative">
      <div className="w-full h-[250px] md:h-[300px] relative overflow-hidden rounded-t-xl">
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
      
      <div className="w-full bg-[#1c1c1c] dark:bg-[#1a1a1a] rounded-b-xl border border-black/10 dark:border-white/5 relative px-6 md:px-10 pb-6 pt-16">
        {/* Avatar */}
        <div className="absolute -top-16 left-6 md:left-10 rounded-full border-[6px] border-[#1c1c1c] dark:border-[#1a1a1a] overflow-hidden size-[140px] bg-[#222]">
          <Image
            src="/rito.webp"
            alt="Profile Avatar"
            fill
            className="object-cover"
          />
        </div>
        
        {/* GitHub Stats top right */}
        <div className="absolute top-4 right-6 md:right-10 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 font-medium">
          <Github className="size-5" />
          <span>0</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif italic text-white mb-1">Rito Ghosh</h1>
            <p className="text-sm md:text-base text-gray-400 font-medium tracking-wide">
              21 • Developer • Builder • Web Dev
            </p>
          </div>
          
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Link href="https://github.com/ritog09" target="_blank" className="size-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
              <Github className="size-4" />
            </Link>
            <Link href="https://x.com/RitoGhosh10" target="_blank" className="size-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
              <X className="size-4" />
            </Link>
            <Link href="https://www.linkedin.com/in/ritog09/" target="_blank" className="size-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
              <Linkedin className="size-4" />
            </Link>
            <div className="size-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors overflow-hidden">
               <ThemeToggleButton className="size-full text-white bg-transparent hover:bg-transparent [&>svg]:size-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
