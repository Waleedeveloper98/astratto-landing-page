import { Sparkle } from "lucide-react";
import React from "react";

const AboutSection = () => {
  return (
    <section className="px-3 flex flex-col gap-6 md:py-10 md:pb-20">
      <h4 className="text-center uppercase font-medium text-zinc-400 text-sm">
        about astritto
      </h4>
      <div
        className="content text-center sm:text-lg md:text-3xl lg:text-5xl"
        style={{ lineHeight: 1.2 }}
      >
        <h3 className="flex items-end justify-center relative">
          <img className="size-8 md:size-14 lg:size-18 relative -translate-x-1 md:-translate-x-8 -translate-y-2 md:-translate-y-6" src="./arrow.png" alt="" />{" "}
          Our <span className="gray-text">visionary</span>{" "}
          <span className="orange-text">artisans</span> collaborate
        </h3>
        <h3>
          <span className="purple-text">seamlessly</span> to craft <span></span>{" "}
          inspiring <span className="gray-text">experiences,</span>{" "}
        </h3>
        <h3>
          <span className="orange-text">leaving</span> lasting{" "}
          <span className="gray-text">imprints</span> on{" "}
          <span className="purple-text">brands</span>{" "}
        </h3>
        <h3 className="flex items-center justify-center gap-2">
          and spaces.{" "}
          <div>
            <Sparkle
              className="md:size-10 rotate-45"
              fill="orange"
              strokeWidth={0}
              size={28}
            />
          </div>
        </h3>
      </div>
      <img className="w-4/5 mb-10 pl-10 opacity-80 sm:max-w-120 sm:pl-28" src="./purple.svg" alt="" />
    </section>
  );
};

export default AboutSection;
