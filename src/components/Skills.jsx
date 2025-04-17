// components/Skills.js
import React from "react";

const SkillCategory = ({ title, icon, skills }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <i className={`${icon} mr-2 text-blue-600`}></i>
        {title}
      </h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <i className="fas fa-check-circle text-green-500 mr-2"></i>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "fas fa-code",
      skills: [
        "HTML5 / CSS3 / SASS",
        "JavaScript (ES6+)",
        "React.js",
        "Next.js",
        "Responsive Design",
        "Tailwind CSS",
        "Redux",
      ],
    },
    {
      title: "Backend",
      icon: "fas fa-server",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "Authentication & Security",
      
      ],
    },
    {
      title: "Database",
      icon: "fas fa-database",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "SQL",
        "ORM / ODM",
      ],
    },
    {
      title: "DevOps & Tools",
      icon: "fas fa-tools",
      skills: [
        "Git / GitHub",
        "Agile Methodology",
      ],
    },
    {
      title: "ERP & CMS",
      icon: "fas fa-cube",
      skills: [
        "Odoo ERP",
        "Odoo Module Development",
        "Odoo Customization",
        "Business Process Modeling",
        "ERP Implementation",
        "Data Migration",
        "Integration",
      ],
    },
    {
      title: "Soft Skills",
      icon: "fas fa-users",
      skills: [
        "Problem Solving",
        "Team Collaboration",
        "Communication",
        "Time Management",
        "Adaptability",
        "Critical Thinking",
        "Continuous Learning",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 relative">
          Skills & Expertise
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 h-1 w-20 bg-gradient-to-r from-blue-600 to-teal-500 rounded"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
