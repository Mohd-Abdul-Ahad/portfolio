import React, { useEffect, useRef } from 'react';
import './SkillsShowcase.css';

const SkillsShowcase = () => {
  const demoProjects = [
    {
      title: "Course Platform",
      description: "Full-featured learning management system with payment integration.",
      url: "https://course-selling-website-navy.vercel.app/",
      imageUrl: "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["React", "E-commerce", "LMS"]
    },
    {
      title: "Educational Portal",
      description: "Modern course presentation platform with student dashboard.",
      url: "https://course-site-cyan.vercel.app/",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["Next.js", "Tailwind", "Responsive"]
    },
    {
      title: "Construction Company",
      description: "Professional construction services website with project gallery.",
      url: "https://constructionwebsite-lyart.vercel.app/",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["HTML/CSS", "JavaScript", "Gallery"]
    },
    {
      title: "Fitness Center",
      description: "Gym membership platform with class scheduling features.",
      url: "https://gym-rho-ashy.vercel.app/",
      imageUrl: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80",
      tags: ["React", "Booking System", "UI/UX"]
    },
    {
      title: "Restaurant Website",
      description: "Elegant dining establishment with online reservation system.",
      url: "https://restaurant-sooty-theta.vercel.app/",
      imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["Responsive", "Menu System", "CSS Animations"]
    },
    {
      title: "Luxury Watch Landing Page",
      description: "Premium watch company showcase with product highlights and CTAs.",
      url: "https://kyros-iota.vercel.app/",
      imageUrl: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      tags: ["Landing Page", "Product Showcase", "Minimalist"]
    },
    {
      title: "Fashion E-commerce",
      description: "Complete online store with product catalog and shopping cart.",
      url: "https://juzegreyweb.vercel.app/",
      imageUrl: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["E-commerce", "Shopping Cart", "Product Filtering"]
    }
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
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
    <section className="skills-showcase" id="skills-showcase" ref={sectionRef}>
      <div className="section-header">
        <h2 className="section-title">Skills Showcase</h2>
        <p className="section-subtitle">Interactive demos highlighting my capabilities</p>
        <div className="section-divider"></div>
      </div>
      
      <div className="showcase-grid">
        {demoProjects.map((project, index) => (
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="showcase-card" 
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="card-image-container">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="card-image"
                loading="lazy"
              />
              <div className="card-hover-overlay">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>View Demo</span>
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-title">{project.title}</h3>
              <p className="card-description">{project.description}</p>
              <div className="card-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="card-tag">{tag}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SkillsShowcase;