import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "A watch company Landing Page",
    description: "A Watch company landing page to showcase work.",
    tech: ["React", "Html", "Css", "Tailwind CSS"],
    github: "#",
    live: "#",
    image: "/Home.png",
  },
  {
    title: "Salon Website",
    description:
      "A salon website to showcase offers increase walkins in store.",
    tech: ["React", "Html", "Css", "Tailwind CSS"],
    github: "https://github.com/Mohd-Abdul-Ahad/Salon.git",
    live: "https://salon-theta-virid.vercel.app/",
    image: "/ss1.png",
  },
  {
    title: "Gym Website",
    description:
      "A gym website to show case your gym client reviews and increase walkins in store",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Html", "Css"],
    github: "#",
    live: "https://gym-rho-ashy.vercel.app/",
    image: "/ss2.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">My Projects</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Here are some of my selected works. Each project was built to solve
          specific problems and deliver value.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-indigo-600 transition"
                  >
                    <FiGithub className="mr-1" /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-indigo-600 transition"
                  >
                    <FiExternalLink className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
