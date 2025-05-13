import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-indigo-600">Mohd Ahad</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#about"
              className="text-gray-600 hover:text-indigo-600 transition"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-indigo-600 transition"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-gray-600 hover:text-indigo-600 transition"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-indigo-600 transition"
            >
              Contact
            </a>
            <div className="flex space-x-4 ml-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <a
              href="#about"
              className="block px-3 py-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded transition"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#skills"
              className="block px-3 py-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded transition"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <div className="flex space-x-4 pt-2 px-3">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
