import Container from "@/components/common/Container";
import TextPressure from "@/components/ui/TextPressure";

export default function Achievements() {
  return (
    <Container className="min-h-screen flex items-center justify-center">
      <TextPressure
        text="Coming Soon"
        flex={true}
        alpha={false}
        stroke={false}
        width={true}
        weight={true}
        italic={true}
        textColor="var(--foreground)"
        strokeColor="#ff0000"
        minFontSize={24}
      />
    </Container>
  );
}
