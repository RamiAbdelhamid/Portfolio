// components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CV from "../assets/Rami Abdelhamid- Full Stack Web Developer.PDF"; // You'll need to create and add this file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">
                Rami<span className="text-teal-500">Abdelhamid</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Home
              </Link>

              <Link
                to="/projects"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Projects
              </Link>
              <Link
                to="/skills"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Skills
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Contact
              </Link>
              <a
                href={CV}
                download="Rami-Abdelhamid-CV.pdf"
                className="bg-gradient-to-r from-blue-300 to-teal-500 text-black px-4 py-2 rounded hover:bg-blue-700 transition-colors font-medium"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link
              to="/#about"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/#projects"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/#skills"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
            <Link
              to="/#contact"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <a
              href={CV}
              download="Alex-Morgan-CV.pdf"
              className="bg-blue-600 text-white block px-3 py-2 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
