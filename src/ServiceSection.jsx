import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      title: "E-Commerce Websites",
      description: "Complete online stores with payment gateways, inventory management, and secure checkout systems.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M3 10H21M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Real Estate Platforms",
      description: "Property listing sites with advanced search, virtual tours, and CRM integrations.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M3 21H21M4 18H6M9 18H15M18 18H20M6.6 8H17.4C17.9601 8 18.2401 8 18.454 8.10899C18.6422 8.20487 18.7951 8.35785 18.891 8.54601C19 8.75992 19 9.03995 19 9.6V18H5V9.6C5 9.03995 5 8.75992 5.10899 8.54601C5.20487 8.35785 5.35785 8.20487 5.54601 8.10899C5.75992 8 6.03995 8 6.6 8ZM9 8V5C9 4.07003 9 3.60504 9.15224 3.22354C9.35523 2.71218 9.71218 2.35523 10.2235 2.15224C10.605 2 11.07 2 12 2C12.93 2 13.395 2 13.7765 2.15224C14.2878 2.35523 14.6448 2.71218 14.8478 3.22354C15 3.60504 15 4.07003 15 5V8H9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Restaurant Websites",
      description: "Online reservations, menu displays, food ordering systems with table management.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M3 10H21M12 3V21M8 6V10M16 6V10M6 14H8M16 14H18M6 18H8M16 18H18M12 14H13M12 18H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Landing Pages",
      description: "High-converting single page designs with lead capture forms and analytics.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M3 10H21M7 15H11M7 18H11M6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V7.8C22 6.11984 22 5.27976 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3H6.8C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8V16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Course Selling Platforms",
      description: "Learning management systems with video hosting, progress tracking, and payment processing.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M12 6V8M12 14V16M12 10V12M12 18V20M9 22H15C17.8284 22 19.2426 22 20.1213 21.1213C21 20.2426 21 18.8284 21 16V8C21 5.17157 21 3.75736 20.1213 2.87868C19.2426 2 17.8284 2 15 2H9C6.17157 2 4.75736 2 3.87868 2.87868C3 3.75736 3 5.17157 3 8V16C3 18.8284 3 20.2426 3.87868 21.1213C4.75736 22 6.17157 22 9 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Gym & Fitness Sites",
      description: "Membership portals, class scheduling, and workout tracking systems.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M12 4H8.8C7.11984 4 6.27976 4 5.63803 4.32698C5.07354 4.6146 4.6146 5.07354 4.32698 5.63803C4 6.27976 4 7.11984 4 8.8V15.2C4 16.8802 4 17.7202 4.32698 18.362C4.6146 18.9265 5.07354 19.3854 5.63803 19.673C6.27976 20 7.11984 20 8.8 20H15.2C16.8802 20 17.7202 20 18.362 19.673C18.9265 19.3854 19.3854 18.9265 19.673 18.362C20 17.7202 20 16.8802 20 15.2V12M16 8H16.01M12 8H12.01M8 8H8.01M16 12H16.01M12 12H12.01M8 12H8.01M16 16H16.01M12 16H12.01M8 16H8.01M18 2V6M18 6V10M18 6H22M18 6H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Tools & Utilities",
      description: "Custom web applications for specific business needs and workflows.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M11 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V17.2C2 18.8802 2 19.7202 2.32698 20.362C2.6146 20.9265 3.07354 21.3854 3.63803 21.673C4.27976 22 5.11984 22 6.8 22H15.2C16.8802 22 17.7202 22 18.362 21.673C18.9265 21.3854 19.3854 20.9265 19.673 20.362C20 19.7202 20 18.8802 20 17.2V13M7 11H9M7 15H9M7 19H9M13 5L19 11M13 5V9M13 5H17M19 11L15 15M19 11V15M19 11H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Custom Web Solutions",
      description: "Tailored websites for unique business requirements and specialized industries.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M3 10H21M7 15H10M14 15H17M12 3V5M12 21V19M9 3L11 5M15 3L13 5M9 21L11 19M15 21L13 19M6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V7.8C22 6.11984 22 5.27976 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3H6.8C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8V16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="section-header">
        <h2 className="section-title">Services I Provide</h2>
        <p className="section-subtitle">Professional web solutions tailored to your needs</p>
      </div>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div 
            className="service-card" 
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <div className="service-hover-effect"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;