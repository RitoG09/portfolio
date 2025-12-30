"use client";

import { Button } from "../ui/button";
import { Link } from "next-view-transitions";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { ProjectList } from "../projects/ProjectList";
import { projects } from "@/config/Projects";

export default function Projects() {
  return (
    <Container>
      <SectionHeading subHeading="Featured" heading="Projects" />
      <ProjectList className="mt-8" projects={projects.slice(0, 4)} />
      <div className="mt-8 flex justify-center">
        <Button variant="outline">
          <Link href="/projects">Show all projects</Link>
        </Button>
      </div>
    </Container>
  );
}
