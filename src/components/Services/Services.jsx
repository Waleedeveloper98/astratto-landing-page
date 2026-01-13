import React from "react";
import Header from "../UI/Header";
import ServiceList from "./ServiceList";

const Services = () => {
  return (
    <section className="w-full py-10 lg:pt-16 flex flex-col gap-10">
      <Header
        title={"Our Services"}
        text={
          "Discover a wide range of opportunities through a comprehensive range of qualified services"
        }
      />
      <ServiceList />
    </section>
  );
};

export default Services;
