import { PROJECTS } from "@/data/projects";
import { Panel, PanelHeader, PanelTitle } from "./panel";
import { ExperienceItem } from "./experience-item";

export function Projects() {
  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>Projects</PanelTitle>
      </PanelHeader>

      <div className="pr-2 pl-4">
        {PROJECTS.map((project) => (
          <ExperienceItem key={project.id} experience={project} />
        ))}
      </div>
    </Panel>
  );
}

