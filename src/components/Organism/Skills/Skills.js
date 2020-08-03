import React from 'react';

import { SkillCard } from '../../Atoms/SkillCard/SkillCard';
import Header3 from '/home/aman/Desktop/ReactAssignment/src/components/Atoms/Header3.js';
import './skills.css';

export const Skills = ({ skills }) => {
    return (
        <div className="skills-container">
            
            <Header3 text={"Industry Knowledge"}/>
            <div className="industry-skill-container">
                {
                    skills.industryKnowledge.map(skill => <SkillCard skill={skill} />)
                }
            </div>
          
            <Header3 text={"Tech Skills"}/>
            <div className="industry-skill-container">
                {
                    skills.techSkills.map(skill => <SkillCard skill={skill} />)
                }
            </div>
           
            <Header3 text={"Interpersonal Skills"}/>
            <div className="industry-skill-container">
                {
                    skills.interpersonalSkills.map(skill => <SkillCard skill={skill} />)
                }
            </div>
            
        </div>
    )
}