import React from 'react';

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Hi, I'm Mohd Ahad</h1>
        <h2 className="text-2xl md:text-3xl text-indigo-600 mb-8">Fullstack Web Developer</h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          I build exceptional digital experiences with modern web technologies.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#projects" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition shadow-lg">
            View Projects
          </a>
          <a href="#contact" className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg font-medium transition">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;