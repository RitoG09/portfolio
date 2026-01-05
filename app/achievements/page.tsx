import AchievementsSection from "@/components/achievements/AchievementsSection";
import Container from "@/components/common/Container";
import TextPressure from "@/components/ui/TextPressure";

export default function Achievements() {
  return (
    <Container className="py-13">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Achievements
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Hackathons, open source impact, and certifications.
          </p>
        </div>
        {/* Achievements */}
        <AchievementsSection />
      </div>
    </Container>
  );
}
