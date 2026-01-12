import { ArrowUpRight } from "lucide-react";
import React from "react";

const ServiceCard = ({ title1, title2, desc, img, cardClass }) => {
  return (
    <div
      className={`w-[clamp(250px,85vw,310px)] lg:w-[clamp(250px,85vw,350px)] border border-[var(--purple)] rounded-xl lg:rounded-2xl lg:h-100 lg:max-h-100 px-4 py-6 flex flex-col gap-4 lg:justify-between ${cardClass} ${cardClass && "roundCard"}`}
    >
      <div
        className={`top border-b ${
          cardClass ? "border-white" : "border-[var(--purple)]"
        } flex justify-between py-3 lg:pb-5`}
      >
        <div
          className={`card-title text-2xl lg:text-3xl font-medium ${
            cardClass && "text-white"
          }`}
        >
          <h3>{title1}</h3>
          <h3>{title2}</h3>
        </div>
        <div
          className={`flex items-center justify-center size-13 rounded-full bg-[var(--purple)] text-white cursor-pointer ${
            cardClass && "hidden"
          }`}
        >
          <ArrowUpRight />
        </div>
      </div>
      <div className="bottom flex flex-col gap-4">
        <p
          className={`text-sm ${cardClass ? "text-zinc-100" : "text-zinc-400"}`}
        >
          {desc}
        </p>
        <img
          className={`w-full h-40 lg:h-44 ${cardClass ? "rounded-2xl":"rounded-2xl"} ${cardClass && "roundimg"}  object-cover`}
          src={img}
          alt=""
        />
      </div>
    </div>
  );
};

export default ServiceCard;
