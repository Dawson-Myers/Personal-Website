import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Project 1</h3>
          <p>A brief description of the project.</p>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>A brief description of the project.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
