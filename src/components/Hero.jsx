// components/Hero.js
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text">
            Full-Stack Web Developer
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Crafting exceptional web experiences with modern technologies
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <div className="flex items-center bg-white shadow-md rounded-lg px-4 py-2.5">
            <i className="fab fa-html5 text-orange-500 mr-2"></i>
            <span>HTML</span>
          </div>
          <div className="flex items-center bg-white shadow-md rounded-lg px-4 py-2.5">
            <i className="fab fa-css3-alt text-blue-500 mr-2"></i>
            <span>CSS</span>
          </div>
          <div className="flex items-center bg-white shadow-md rounded-lg px-4 py-2.5">
            <i className="fab fa-js text-yellow-500 mr-2"></i>
            <span>JavaScript</span>
          </div>
          <div className="flex items-center bg-white shadow-md rounded-lg px-4 py-2.5">
            <i className="fab fa-react text-blue-400 mr-2"></i>
            <span>React</span>
          </div>
          <div className="flex items-center bg-white shadow-md rounded-lg px-4 py-2.5">
            <i className="fab fa-node-js text-green-600 mr-2"></i>
            <span>Node.js</span>
          </div>
          <div className="flex items-center bg-white shadow-md rounded-lg px-4 py-2.5">
            <i className="fas fa-database text-blue-800 mr-2"></i>
            <span>PostgreSQL</span>
          </div>
          <div className="flex items-center bg-white shadow-md rounded-lg px-4 py-2.5">
            <i className="fas fa-leaf text-green-700 mr-2"></i>
            <span>MongoDB</span>
          </div>
          <div className="flex items-center bg-white shadow-md rounded-lg px-4 py-2.5">
            <i className="fab fa-react text-black mr-2"></i>
            <span>Next.js</span>
          </div>
          <div className="flex items-center bg-white shadow-md rounded-lg px-4 py-2.5">
            <i className="fas fa-cube text-purple-600 mr-2"></i>
            <span>Odoo</span>
          </div>
        </div>

        <div className="mt-12">
          <Link
            to="/projects"
            className="bg-gradient-to-r from-blue-300 to-teal-500 px-8 py-3 rounded-lg shadow-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            View My Work
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
