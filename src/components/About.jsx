import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="bg-gray-100 rounded-lg p-8">
              <p className="text-lg text-gray-700 mb-6">
                I'm a passionate web developer with expertise in building
                modern, responsive web applications. With a strong foundation in
                JavaScript and its ecosystem, I create efficient, scalable, and
                user-friendly solutions.
              </p>
              <p className="text-lg text-gray-700">
                My approach combines technical excellence with attention to
                design details, ensuring that applications not only work well
                but also provide an excellent user experience.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-indigo-600 mb-2">Frontend</h4>
                <ul className="space-y-1">
                  <li>Html</li>
                  <li>Css</li>
                  <li>JavaScript</li>
                  <li>React.js</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-indigo-600 mb-2">Backend</h4>
                <ul className="space-y-1">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>REST APIs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
