
import React from "react";

import {SideNav} from  "/home/aman/Desktop/ReactAssignment/src/components/Molecule/SideNav/SideNav.js";

import App from "/home/aman/Desktop/ReactAssignment/src/components/App.js";
export default {
  component: SideNav,
  title: "SidNav",
 
};

export const sideNav = () => {
 
  return (
    
      <SideNav handleSectionClick={App.handleSectionClick} />
    
  );
};


