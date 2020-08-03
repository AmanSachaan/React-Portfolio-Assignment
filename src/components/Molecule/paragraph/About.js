import React from 'react';
import Paragraph from '/home/aman/Desktop/ReactAssignment/src/components/Atoms/Paragraph.js';
import './about.css';

export const About = ({bio,name,college,company}) => {
   
    return (
        <div>
       <Paragraph text={bio} />
       <Paragraph text={name} />
       <Paragraph text={college} />
       <Paragraph text={company} />
       <Paragraph text={"Zemoso"} />
        </div>


        
    )
}



