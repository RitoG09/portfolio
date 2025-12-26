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
      <Button variant="outline" className="mt-4">
        <Link href="/projects">View all projects</Link>
      </Button>
    </Container>
  );
}
