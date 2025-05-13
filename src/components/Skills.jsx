import React from "react";

const skills = [
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "Git", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Figma", category: "tools" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-indigo-600">
              Frontend
            </h3>
            <ul className="space-y-2">
              {skills
                .filter((skill) => skill.category === "frontend")
                .map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                    {skill.name}
                  </li>
                ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-indigo-600">
              Backend
            </h3>
            <ul className="space-y-2">
              {skills
                .filter((skill) => skill.category === "backend")
                .map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                    {skill.name}
                  </li>
                ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-indigo-600">
              Tools
            </h3>
            <ul className="space-y-2">
              {skills
                .filter((skill) => skill.category === "tools")
                .map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                    {skill.name}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
