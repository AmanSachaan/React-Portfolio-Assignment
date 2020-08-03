import React from 'react';

import { SideNav } from '/home/aman/Desktop/ReactAssignment/src/components/Molecule/SideNav/SideNav.js';
import { SectionContainer } from '/home/aman/Desktop/ReactAssignment/src/components/Tempelate/SectionContainer/SectionContainer.js';

import './portfolio.css';

export const Portfolio = ({ 
    handleSectionClick,
    selectedHeading, 
    selectedQuote,
    selectedSection,
    about,
    skills,
    projects }) => {
    return (
        <div className="portfolio-container">
            <div className="sidenav-container">
                <SideNav
                    handleSectionClick={handleSectionClick}
                />
            </div>
            <div className="main-section-container">
                <SectionContainer
                    selectedSection={selectedSection}
					selectedHeading={selectedHeading}
					selectedQuote={selectedQuote}
				    about={about}
					skills={skills}
					projects={projects} />
            </div>
        </div>
    );
};