import React, { useEffect, useRef } from "react";
import "./ProjectsSection.css";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Tuner Life Style",
      description: "Live",
      imageUrl: "/thumbnail1.png", // assuming thumbnail1.png is in the public folder
    },
    {
      title: "Law Firm Website",
      description: "Upcoming",
      imageUrl:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    // Add more projects here as needed
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="projects-section" id="work" ref={sectionRef}>
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Explore our selected professional works
        </p>
        <div className="section-divider"></div>
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
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
