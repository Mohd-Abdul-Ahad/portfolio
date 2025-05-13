import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>© {new Date().getFullYear()} Mohd Ahad. All rights reserved.</p>
        <p className="mt-2 text-gray-400">Built with React and Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;