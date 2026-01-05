import AchievementCard from "./AchievementCard";
import { osc } from "@/config/Achievements";

export default function OpenSourceTab() {
  return (
    <AchievementCard>
      {osc.map((item, idx) => (
        <div key={idx} className="border-b border-border pb-6 last:border-none">
          <h3 className="text-lg font-semibold">
            {item.title || "Open Source Contribution"}
          </h3>

          <p className="text-muted-foreground text-sm mt-1">
            {item.organization}
          </p>

          <div className="flex gap-4 mt-3 text-sm">
            {item.issueLink && (
              <a
                href={item.issueLink}
                target="_blank"
                className="text-primary hover:underline underline-offset-4"
              >
                Issue
              </a>
            )}
            {item.prLink && (
              <a
                href={item.prLink}
                target="_blank"
                className="text-primary hover:underline underline-offset-4"
              >
                PR ({item.status})
              </a>
            )}
          </div>
        </div>
      ))}
    </AchievementCard>
  );
}
