import { Sparkles } from "lucide-react";
import React from "react";

const FooterTop = () => {
  return (
    <div className="text-center p-3 flex flex-col gap-4 py-6 lg:gap-8">
      <h5 className="text-[var(--purple)] font-medium text-sm">
        Open the door to forging your brand's story
      </h5>
      <div className="content text-sm sm:text-base md:text-xl lg:text-4xl flex flex-col gap-1 md:gap-3 items-center">
        <h3 className="flex items-end relative"><Sparkles className="absolute -translate-x-7 sm:-translate-y-3 sm:-translate-x-9 lg:-translate-y-7 sm:size-7" strokeWidth={0} fill="orange"/> Embark on a Transformative Journey</h3>
        <div className="flex items-center whitespace-nowrap gap-1">
          <h3>Shaping</h3>
          <div className="inline-block relative">
            <div className="overlay bg-[var(--yellow)] rotate-2 inline-block absolute inset-0 rounded-md "></div>
            <h3 className="px-2 py-1 relative">Your Brand's Destiny</h3>
          </div>{" "}
          <h3>Through Our</h3>
        </div>
        <h3>Dedicated Partnership</h3>
      </div>
      <div className="relative">
        <p className="text-xs text-zinc-400 md:w-3/5 lg:2/5 md:mx-auto md:text-center md:text-sm">
        Join us on a transformative journey to shape your brand's destiny
        through our dedicated partnership, crafting a narrative that resonates
      </p>
      <img className="absolute size-10 md:size-20 lg:size-28 right-0 md:right-30 top-0 md:-top-7 lg:-top-17 lg:right-50 -translate-y-10" src="./circle.webp" alt="" />
      </div>
    </div>
  );
};

export default FooterTop;
