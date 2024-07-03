import React from 'react';
import './Projects.css';
import mainpic from './braint.png';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project">
          <h3>Project 1</h3>
          <a href='https://github.com/Deceit77/BrainTIme/tree/master'>
            <img className="Projectim" src={mainpic} alt="Example" />
          </a>
          <p>This is BrainTIme, a Quiz Application developed by myself using the MERN stack. Click on the image to visit the GitHub repository.</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Description of the project...</p>
        </div>
        {/* Add more projects as needed */}
      </div>
    </section>
  );
}

export default Projects;
