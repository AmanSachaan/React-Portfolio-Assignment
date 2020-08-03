import React from 'react';
import image from './image.jpeg';
import './sidenav.css';
import Header2 from '../../Atoms/Header2.js';

export const SideNav = ({ handleSectionClick }) => {
   
    return (
        <div className="sidenav">
            <img
                src={image}
                className="avatar"
                alt="avatar"
            />

            <Header2 className="main-name" text={"Aman Sachaan"} />
          
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
            </div>
        </div>
    );
};