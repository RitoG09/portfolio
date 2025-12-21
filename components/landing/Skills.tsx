import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { mySkills } from "@/config/Skills";
import { OrbitingCircles } from "../ui/orbiting-circles";

export default function Skills() {
  return (
    <Container>
      <SectionHeading subHeading="Skills" heading="My Skills" />
      <div className="relative h-[500px] w-full overflow-hidden">
        {/* OUTER – regular */}
        <OrbitingCircles radius={190} duration={40}>
          {mySkills.slice(0, 5)}
        </OrbitingCircles>

        {/* INNER – reverse + smooth */}
        <OrbitingCircles radius={120} duration={30} smooth>
          {mySkills.slice(5)}
        </OrbitingCircles>
      </div>
    </Container>
  );
}
