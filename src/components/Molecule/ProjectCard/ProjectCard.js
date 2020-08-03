import React from 'react'
import Paragraph from '/home/aman/Desktop/ReactAssignment/src/components/Atoms/Paragraph.js';
import './project-card.css';
import Header2 from '/home/aman/Desktop/ReactAssignment/src/components/Atoms/Header2.js';
import Anchor from '/home/aman/Desktop/ReactAssignment/src/components/Atoms/Anchor.js';
export const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <Header2 text={project.name} />
            <Paragraph text={project.description} />
            <Anchor text={project.link}  />
            
        </div>
    )
}
