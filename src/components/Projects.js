import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaServer,
  FaUserShield,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiJsonwebtokens,
  SiPostman,
  SiVercel,
} from "react-icons/si";

import "../styles/Projects.css";

const Projects = () => {
  // Converted to an array so you can easily add more projects in the future!
  const projectsData = [
    {
      title: "MediTrack - Healthcare Management System",
      description:
        "A role-based healthcare system featuring custom Admin, Doctor, and Patient modules. Streamlines digital appointments, secure medical record-keeping, and streamlined credential validation.",
      features: [
        "Role-based authentication",
        "Appointment booking system",
        "Doctor credential approval",
        "Interactive analytics dashboard",
        "Secure, encrypted data handling",
      ],
      tech: [
        { name: "React", icon: <FaReact style={{ color: "#61dafb" }} /> },
        { name: "Node.js", icon: <FaNodeJs style={{ color: "#339933" }} /> },
        { name: "Express", icon: <SiExpress style={{ color: "#ffffff" }} /> },
        { name: "MongoDB", icon: <SiMongodb style={{ color: "#47a248" }} /> },
        { name: "JWT", icon: <SiJsonwebtokens style={{ color: "#ffffff" }} /> },
        { name: "REST API", icon: <FaServer style={{ color: "#a855f7" }} /> },
        { name: "Vercel", icon: <SiVercel style={{ color: "#ffffff" }} /> },
        { name: "Postman", icon: <SiPostman style={{ color: "#ff6c37" }} /> },
      ],
      github: "https://github.com/pMaitri01/Medi-Track-Frontend",
      live: "https://medi-track-frontend-rosy.vercel.app/",
      admin: "https://tinyurl.com/3pjvn4dr",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        
        <div className="section-header">
          <h2>Featured Projects</h2>
          <span className="header-underline"></span>
          <p>Some of my recent digital creations and engineering work</p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              
              <div className="project-card-header">
                <h3 className="project-title">{project.title}</h3>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-features-wrapper">
                <h4>Key Implementations:</h4>
                <ul className="project-features">
                  {project.features.map((f, i) => (
                    <li key={i}>
                      <span className="feature-dot"></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="tech-stack-wrapper">
                <h4>Technologies Used:</h4>
                <div className="tech-stack">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-item">
                      {t.icon} {t.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary">
                  <FaExternalLinkAlt /> Live Demo
                </a>

                <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
                  <FaGithub /> Source Code
                </a>

                <a href={project.admin} target="_blank" rel="noreferrer" className="btn btn-outline">
                  <FaUserShield /> Admin Panel
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;