import React from "react";

import Header from "/home/aman/Desktop/ReactAssignment/src/components/Atoms/Header1/Header1.js";

import Anchor from "/home/aman/Desktop/ReactAssignment/src/components/Atoms/Anchor.js";

import {SkillCard} from "/home/aman/Desktop/ReactAssignment/src/components/Atoms/SkillCard/SkillCard.js";

import Paragraph from "/home/aman/Desktop/ReactAssignment/src/components/Atoms/Paragraph.js";

export default {
  component: Header,
  title: "AtomsStory",
 
};

export const Header1 = () => {
  
  return (
    <Header text={"Skills"} />
  );

};

export const anchor = () => {
 
  return (
     <Anchor text="https://github.com/AmanSachaan/SpringBootApplication" />
  );
  
};

export const skillCard = () => {
  const skill="skill";
  return (
    
      <SkillCard text={skill} />
    
  );
};


export const paragraph = () => {
 
  return (
    <Paragraph text="paragraph text used in projects and about section" />
  );
  
};
