import AchievementCard from "./AchievementCard";
import { certifications } from "@/config/Achievements";

export default function CertificationsTab() {
  if (!certifications.length) {
    return (
      <AchievementCard>
        <p className="text-muted-foreground">
          Certifications will be added soon.
        </p>
      </AchievementCard>
    );
  }

  return (
    <AchievementCard>
      {certifications.map((cert, idx) => (
        <div key={idx}>
          <h3 className="text-lg font-semibold">{cert.title}</h3>
          <p className="text-muted-foreground text-sm">{cert.description}</p>
        </div>
      ))}
    </AchievementCard>
  );
}
