import React from "react";

import {ProjectCard} from "/home/aman/Desktop/ReactAssignment/src/components/Molecule/ProjectCard/ProjectCard.js";


export default {
  component: ProjectCard,
  title: "projectCard",
 
};

export const projectCard = () => {
  const project =    {
    name: "Restaurant",
    description: "Restaurant Application each for waiter, manager and owner using Sping",
    link: "https://github.com/AmanSachaan/SpringBootApplication"
};
 
  return (
    <ProjectCard project={project} />
  );
};


