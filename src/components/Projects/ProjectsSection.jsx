import React from "react";
import Header from "../UI/Header";
import ProjectsCardsContainer from "./ProjectsCardsContainer";

const ProjectsSection = () => {
  return (
    <section className="py-10 lg:px-6 flex flex-col gap-6">
      <Header
        title={"Recent Projects"}
        text={
          "Step into the world of our most recent projects, a showcase of our unwavering commitment ot progressive design"
        }
      />
      <ProjectsCardsContainer />
    </section>
  );
};

export default ProjectsSection;
