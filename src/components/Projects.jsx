// components/Projects.js
import React, { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "Agriculture and animals",
    description:
      "A full-featured e-commerce platform with user authentication, product catalog, shopping cart, and payment processing.",
    image: "../../src/assets/Masterpiece.png", // You'll need to add these images to your assets folder
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/RamiAbdelhamid/Agriculture-and-Animals.git",
  },
  {
    id: 2,
    title: "يقين",
    description:
      "   منصة لمتابعة الاخبار المنوعة والعامة ونشر المقالات عن طريق الصحفيين     ",
    image: "../../src/assets/يقين.png",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/alexmorgan/chat-app",
  },
  {
    id: 3,
    title: "Burger Kitchen",
    description:
      "A Burger Kitchen management system with inventory, HR, and finance modules built on Odoo framework.",
    image: "../../src/assets/odoo.jpg",
    tech: ["Odoo"],
    github: "https://github.com/alexmorgan/erp-system",
    demo: "https://rami.odoo.com/odoo",
  },
  {
    id: 4,
    title: "Task Management",
    description:
      "A Kanban-style project management tool with drag-and-drop functionality, task assignments, and progress tracking.",
    image: "../../src/assets/Task.png",
    tech: ["React", "Redux", "Firebase"],
    github: "https://github.com/alexmorgan/task-manager",
  },


  {
    id: 7,
    title: "مشكاه",
    description:
      "مشكاه منصة إلكترونية مصممة لمساعدة الأفراد الذين لديهم أفكار مشاريع مبتكرة لكنهم يفتقرون إلى التمويل اللازم لتنفيذها. يمكن للمستخدمين تقديم مشاريعهم، ويمكن للمتبرعين المساهمة في دعمها. هدفنا هو سد الفجوة بين العقول المبدعة والداعمين السخيين.",
    image: "../../src/assets/Mishka.png",
    tech: ["React", "Node.js", "PostgreSQL", "Express"],
    github: "https://github.com/RamiAbdelhamid/Charity-Project.git",
  },
  {
    id: 8,
    title: "VetNova ",
    description:
      "VetNova is your go-to platform for affordable, efficient veterinary care. Whether it's a one-time consultation or ongoing support, connect with professional vets through secure appointments and instant messaging.",
    image: "../../src/assets/Hospital.png",
    tech: ["Next.js", "Node.js", "MongoDB"],
    github: "https://github.com/alexmorgan/real-estate",
  },
  {
    id: 9,
    title: "HabiRent",
    description:
      "HabiRent is an innovative online platform designed to assist students and employees working away from their homes in finding suitable accommodation near their universities or workplaces.",
    image: "../../src/assets/Rent.png",
    tech: ["React", "Redux", "Tailwind CSS", "Firebase"],
    github: "https://github.com/alexmorgan/lms",
  },
 
];

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <div className="h-48 overflow-hidden">
        <img
          src={`/assets/${project.image}`}
          alt={project.title}
          className="w-full h-50 object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium inline-flex items-center"
          >
            <i className="fab fa-github mr-1"></i> Code
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium inline-flex items-center"
            >
              <i className="fas fa-external-link-alt mr-1"></i> Demo
            </a>
          )}
          {project.caseStudy && (
            <a
              href={project.caseStudy}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium inline-flex items-center"
            >
              <i className="fas fa-file-alt mr-1"></i> Case Study
            </a>
          )}
          {project.demoVideo && (
            <a
              href={project.demoVideo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium inline-flex items-center"
            >
              <i className="fas fa-video mr-1"></i> Demo Video
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((project) =>
          project.tech.some((tech) =>
            tech.toLowerCase().includes(filter.toLowerCase())
          )
        );

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 relative">
          My Projects
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 h-1 w-20 bg-gradient-to-r from-blue-600 to-teal-500 rounded"></span>
        </h2>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full ${
              filter === "all"
                ? "bg-gradient-to-r from-blue-600 to-teal-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter("react")}
            className={`px-4 py-2 rounded-full ${
              filter === "react"
                ? "bg-gradient-to-r from-blue-600 to-teal-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            React
          </button>
          <button
            onClick={() => setFilter("next")}
            className={`px-4 py-2 rounded-full ${
              filter === "next"
                ? "bg-gradient-to-r from-blue-600 to-teal-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Next.js
          </button>
          <button
            onClick={() => setFilter("node")}
            className={`px-4 py-2 rounded-full ${
              filter === "node"
                ? "bg-gradient-to-r from-blue-600 to-teal-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Node.js
          </button>
          <button
            onClick={() => setFilter("mongo")}
            className={`px-4 py-2 rounded-full ${
              filter === "mongo"
                ? "bg-gradient-to-r from-blue-600 to-teal-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            MongoDB
          </button>
          <button
            onClick={() => setFilter("postgre")}
            className={`px-4 py-2 rounded-full ${
              filter === "postgre"
                ? "bg-gradient-to-r from-blue-600 to-teal-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            PostgreSQL
          </button>
          <button
            onClick={() => setFilter("odoo")}
            className={`px-4 py-2 rounded-full ${
              filter === "odoo"
                ? "bg-gradient-to-r from-blue-600 to-teal-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Odoo
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
