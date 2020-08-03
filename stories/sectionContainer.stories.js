import React from "react";

import {SectionContainer} from  "/home/aman/Desktop/ReactAssignment/src/components/Tempelate/SectionContainer/SectionContainer.js";

export default {
  component: SectionContainer,
  title: "SectionContainer",
 
};

export const sectionContainer = () => {
 
  return (
    
      <SectionContainer  
      selectedSection={"about"}
					selectedHeading={"About"}
                    selectedQuote={"Aman Sachaan"}
      />
    
  );
};

