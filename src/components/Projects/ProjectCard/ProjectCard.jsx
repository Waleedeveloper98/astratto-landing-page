import React from "react";
import ProjectCardThumbnail from "./ProjectCardThumbnail";
import ProjectCardTitle from "./ProjectCardTitle";
import ProjectCardDescription from "./ProjectCardDescription";

const ProjectCard = ({ project }) => {
  const { title, description, tag, img } = project;
  return (
    <div className="rounded-xl cursor-pointer w-[clamp(250px,90vw,360px)] md:w-[clamp(250px,90vw,350px)] lg:w-[clamp(250px,90vw,520px)]  flex flex-col justify-between gap-4 pb-7 h-[clamp(300px,50vh,370px)] lg:h-112.5 lg:max-h-112.5">
      <ProjectCardThumbnail img={img} tag={tag} />
      <div className="px-3 flex flex-col gap-2">
        <ProjectCardTitle title={title} />
        <ProjectCardDescription description={description} />
      </div>
    </div>
  );
};

export default ProjectCard;
