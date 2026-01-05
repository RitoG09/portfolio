import Image from "next/image";
import AchievementCard from "./AchievementCard";
import { hackathons } from "@/config/Achievements";

export default function HackathonsTab() {
  return (
    <AchievementCard>
      {hackathons.map((hack, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row gap-6 border-b border-border py-6 first:pt-0 last:pb-0 last:border-none"
        >
          <Image
            src={hack.image}
            alt={hack.title}
            width={192}
            height={128}
            className="rounded-xl object-cover w-48 h-32 shrink-0 border border-border/50 bg-muted"
          />

          <div className="flex-1">
            <h3 className="text-lg font-semibold">{hack.title}</h3>

            <p className="text-muted-foreground text-sm mt-1">
              Position: #{hack.position} · Prize ₹{hack.prize}
            </p>

            <div className="flex gap-4 mt-3 text-sm">
              {hack.relatedPost && (
                <a
                  href={hack.relatedPost}
                  target="_blank"
                  className="text-primary hover:underline underline-offset-4"
                >
                  LinkedIn
                </a>
              )}
              {hack.relatedBlogSlug && (
                <a
                  href={hack.relatedBlogSlug}
                  className="text-primary hover:underline underline-offset-4"
                >
                  Case Study
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </AchievementCard>
  );
}
