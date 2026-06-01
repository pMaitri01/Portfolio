import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaCode } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss, SiMysql, SiPostman } from 'react-icons/si';
import '../styles/Skills.css';

const Skills = () => {

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <FaReact />,
      skills: [
        { name: 'React.js', icon: <FaReact /> },
        { name: 'HTML5', icon: <FaHtml5 /> },
        { name: 'CSS3', icon: <FaCss3Alt /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      ]
    },
    {
      title: 'Backend',
      icon: <FaNodeJs />,
      skills: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express.js', icon: <SiExpress /> },
        { name: 'REST APIs', icon: <FaCode /> },
      ]
    },
    {
      title: 'Database & Tools',
      icon: <FaCode />,
      skills: [
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'Postman', icon: <SiPostman /> },
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'GitHub', icon: <FaGithub /> },
        { name: 'VS Code', icon: <FaCode /> },
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Technologies and tools I use to build scalable web applications
          </p>
        </div>

        {/* Technical Skills */}
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">
                {category.icon}
                {category.title}
              </h3>

              <div className="category-skills">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;