// components/About.js
import React from "react";
import profileImage from "../assets/Screenshot_2024-12-21_145355-removebg-preview.png"; // You'll need to add this image

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 relative">
          About Me
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 h-1 w-20 bg-gradient-to-r from-blue-600 to-teal-500 rounded"></span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-teal-500 transform rotate-6 rounded-2xl"></div>
            <img
              src={profileImage}
              alt="Rami Abdelhamid - Full Stack Developer"
              className="relative z-10 rounded-2xl shadow-xl w-70 h-auto object-cover transform -rotate-3"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Hello, I'm Rami!
            </h3>
            <p className="text-gray-600 mb-4">
              I'm a passionate Full-Stack Web Developer with extensive
              experience building web applications using modern technologies.
              With a strong foundation in both front-end and back-end
              development, I create seamless, responsive, and user-friendly web
              experiences.
            </p>
            <p className="text-gray-600 mb-4">
              My expertise spans across HTML, CSS, JavaScript, React, Node.js,
              PostgreSQL, MongoDB, Next.js, and Odoo. I'm dedicated to writing
              clean, maintainable code and staying up-to-date with the latest
              industry trends and best practices.
            </p>
            <p className="text-gray-600 mb-6">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              through tech blogs and community forums.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/RamiAbdelhamid"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded-md inline-flex items-center hover:bg-gray-900 transition-colors"
              >
                <i className="fab fa-github mr-2"></i> GitHub
              </a>
              <a
                href="https://linkedin.com/in/rami-abdelhamid-289a1b212"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-md inline-flex items-center hover:bg-blue-700 transition-colors"
              >
                <i className="fab fa-linkedin mr-2"></i> LinkedIn
              </a>
              <a
                href="mailto:alex@example.com"
                className="bg-teal-500 text-white px-4 py-2 rounded-md inline-flex items-center hover:bg-teal-600 transition-colors"
              >
                <i className="fas fa-envelope mr-2"></i> Email Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
