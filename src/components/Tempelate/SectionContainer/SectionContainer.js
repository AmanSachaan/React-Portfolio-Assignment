import React from 'react';
import {About} from '/home/aman/Desktop/ReactAssignment/src/components/Molecule/paragraph/About.js';
import { Skills } from '../../Organism/Skills/Skills';
import { Projects } from '../../Organism/Projects/Projects';
import Header1 from '../../Atoms/Header1/Header1.js';
import Paragraph from '/home/aman/Desktop/ReactAssignment/src/components/Atoms/Paragraph.js';
import './section-container.css';

export const SectionContainer = ({ 
    selectedHeading, 
    selectedQuote,
    selectedSection,
    about,
    skills,
    projects }) => {
    return (
        <div className="section-container">
            <div className="section-heading-container">
                
                <Header1  text={selectedHeading}/>
                <Paragraph  text={selectedQuote}/>
            </div>
            <div className="section-component">
                {
                    {
                        about:<About about={about}/>,
                        skills: <Skills skills={skills} />,
                        projects: <Projects projects={projects} />
                    }[selectedSection]
                }
            </div>
        </div>
    )
}