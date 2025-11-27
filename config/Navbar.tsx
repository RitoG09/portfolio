import { DockItemData } from "@/components/Dock";
import { Book, BriefcaseBusiness, NotebookText } from "lucide-react";

export const navbarConfig = {
  logo: {
    src: "/logo.jpg",
    alt: "logo",
    width: 100,
    height: 100,
  },
  navItems: [
    {
      icon: <BriefcaseBusiness size={18} />,
      label: "Projects",
      href: "/projects",
    },
    {
      icon: <Book size={18} />,
      label: "Blogs",
      href: "/blog",
    },
    {
      icon: <NotebookText size={18} />,
      label: "Achievements",
      href: "/achievements",
    },
  ] as DockItemData[],
};
