import { ArrowUpRight } from "lucide-react";
import React from "react";

const ProjectCardThumbnail = ({img,tag}) => {
  return (
    <div className="w-full relative bg-red-300 h-[clamp(200px,30vw,300px)] rounded-xl overflow-hidden">
      <img
        className="size-full absolute z-10 object-cover"
        src={img}
        alt={tag}
      />
      <div className="overlay size-full absolute z-30 flex flex-col justify-between p-2">
        <div className="self-end bg-zinc-50 rounded-full size-10 flex items-center justify-center">
          <ArrowUpRight />
        </div>
        <div className="tag bg-zinc-50 rounded-full text-sm px-3 py-1 w-fit">
          {tag}
        </div>
      </div>
    </div>
  );
};

export default ProjectCardThumbnail;
