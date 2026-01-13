import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import { projectsData } from "../../utils/data";

const ProjectsCardsContainer = () => {
  return (
    <section className="py-5 px-4 lg:px-10 w-full md:flex md:justify-between">
      <div className="left-top flex flex-col gap-10">
        {projectsData.slice(0,2).map((project, i) => (
        <ProjectCard key={i} project={project}/>
      ))}
      </div>
      <div className="right-bottom flex flex-col gap-10 md:mt-20">
        {projectsData.slice(2).map((project, i) => (
        <ProjectCard key={i} project={project}/>
      ))}
      </div>
    </section>
  );
};

export default ProjectsCardsContainer;
