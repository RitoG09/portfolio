import Dock from "@/components/Dock";
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
        <div className="flex flex-1 justify-center">
          <Dock
            items={items}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
            floating={false}
          />
        </div>
        <div className="flex flex-1 justify-end gap-4">
          <ThemeToggleButton variant="circle" start="top-right" blur />
        </div>
      </div>
    </Container>
  );
}
