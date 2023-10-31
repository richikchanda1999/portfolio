import { PROJECTS } from "../constants";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
      <div
        id="projects"
        className="flex flex-col w-full justify-between py-[2%] px-[10%]"
      >
        <h1 className="text-3xl md:text-6xl font-bold text-secondary">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {PROJECTS.map((project, i) => {
            return (
              <ProjectCard key={i} {...project} />
            );
          })}
        </div>
      </div>
    );
  }
  