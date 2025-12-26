import { ProjectList } from "@/components/projects/ProjectList";
import { projects } from "@/config/Projects";

export default function Blogs() {
  return (
    <div>
      <ProjectList projects={projects} />
    </div>
  );
}
