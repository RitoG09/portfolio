import { DockItemData } from "../components/ui/Dock";
import { Book, BriefcaseBusiness, NotebookText } from "lucide-react";

export const navbarConfig = {
  logo: {
    src: "/rito.webp",
    alt: "logo",
    width: 80,
    height: 80,
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
