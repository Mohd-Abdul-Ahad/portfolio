import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities?
          Feel free to reach out!
        </p>

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-center mb-6">
            Connect with me on
          </h3>
          <div className="flex justify-center space-x-8">
            <a
              href="mailto:abdulahad.mohammedd@gmail.com"
              className="text-gray-600 hover:text-indigo-600 transition"
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href="https://github.com/Mohd-Abdul-Ahad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/abdul-ahad-9b838b360/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
