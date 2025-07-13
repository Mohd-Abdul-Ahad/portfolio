import React from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Law Firm Website",
      description: "Professional legal services platform with case management features and client portal.",
      imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["Legal", "Professional", "Client Portal"],
      status: "Upcoming"
    },
    // Add more projects here as needed
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <h2 className="section-title">Project Portfolio</h2>
        <p className="section-subtitle">Selected professional works</p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            className="project-card" 
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="project-image-container">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="project-image"
                loading="lazy"
              />
              <div className="project-status">
                <span>{project.status}</span>
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;