import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function AchievementCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full h-full rounded-2xl p-6 md:p-10",
        "bg-card text-card-foreground shadow-sm border",
        "overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}
