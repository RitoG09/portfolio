import { navbarConfig } from "@/config/Navbar";
import Container from "./Container";
import { ThemeToggleButton } from "./ThemeSwitch";
import Link from "next/link";
import Image from "next/image";

const items = navbarConfig.navItems;

export default function Navbar() {
  return (
    <Container className="sticky top-0 z-20 rounded-md py-4 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6">
        <div className="flex flex-1 justify-start">
          <Link href="/">
            <Image
              className="h-15 w-15 rounded-md border transition-all duration-300 ease-in-out hover:scale-90"
              src={navbarConfig.logo.src}
              alt={navbarConfig.logo.alt}
              width={navbarConfig.logo.width}
              height={navbarConfig.logo.height}
            />
          </Link>
        </div>
        <div className="flex flex-1 justify-center items-center gap-1 sm:gap-2 rounded-full border border-black/10 dark:border-white/10 bg-background/50 dark:bg-black/20 px-2 sm:px-4 py-2 shadow-sm backdrop-blur-md">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 rounded-full"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-1 justify-end gap-4">
          <ThemeToggleButton variant="circle" start="top-right" blur />
        </div>
      </div>
    </Container>
  );
}
