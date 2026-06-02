import React from 'react';
import { 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaCheckCircle, 
  FaGraduationCap 
} from 'react-icons/fa';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'MERN Stack Developer Intern',
      company: 'Toshal Infotech',
      duration: 'Jan 2026 – Present',
      type: 'Full-time',
      location: 'Surat, Gujarat, India',
      responsibilities: [
        'Worked on full-stack web applications using MongoDB, Express.js, React.js, and Node.js',
        'Developed REST APIs and handled database operations',
        'Implemented authentication systems and user dashboards',
        'Built CRUD functionality for various application modules',
        'Collaborated with team members using Git and GitHub'
      ],
      tech: [
        'React.js', 'Node.js', 'Express.js', 'MongoDB',
        'REST APIs', 'JWT', 'Git', 'GitHub',
        'Postman', 'VS Code'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        
        {/* Header */}
        <div className="section-header">
          <h2>Experience</h2>
          <span className="header-underline"></span>
          <p>My professional journey and hands-on experience in web development</p>
        </div>

        {/* Experience Cards */}
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="project-card experience-card">
              
              <h3 className="project-title">{exp.role}</h3>
              <div className="timeline-company">{exp.company}</div>

              <div className="timeline-meta">
                <div className="meta-item">
                  <FaCalendarAlt /> <span>{exp.duration}</span>
                </div>
                <div className="meta-item type-badge">
                  <span>{exp.type}</span>
                </div>
                <div className="meta-item">
                  <FaMapMarkerAlt /> <span>{exp.location}</span>
                </div>
              </div>

              <div className="project-features-wrapper">
                <h4>Key Responsibilities & Achievements:</h4>
                <ul className="project-features">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>
                      <FaCheckCircle className="check-icon" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="tech-stack-wrapper">
                <h4>Technologies Used:</h4>
                <div className="tech-stack">
                  {exp.tech.map((tech, i) => (
                    <span key={i} className="tech-item">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Education */}
        <div className="education-wrapper-block">
          <div className="section-header sub-education-header">
            <h2>Education</h2>
            <span className="header-underline"></span>
          </div>

          <div className="project-card education-card">
            <div className="education-card-header">
              <div className="edu-avatar">
                <FaGraduationCap />
              </div>

              <div className="education-main-details">
                <h3 className="project-title">Master of Computer Applications (MCA)</h3>
                <div className="edu-meta-row">
                  <span className="edu-specialization">Computer Science & Applications</span>
                  <span className="edu-duration-badge">2024 – 2026</span>
                </div>
                <p className="education-college">
                  Department of Computer Science, Rollwala Computer Center, Gujarat University, Ahmedabad.
                </p>
              </div>
            </div>

            <div className="education-content-grid">
              <div className="edu-info-block">
                <h5>Overview</h5>
                <p className="project-description">
                  Focused on software development, web technologies, and database management.
                </p>
              </div>

              <div className="edu-info-block">
                <h5>Key Subjects</h5>
                <div className="edu-tags-flex">
                  <span>Data Structures</span>
                  <span>DBMS</span>
                  <span>Web Development</span>
                  <span>Software Engineering</span>
                  <span>Operating Systems</span>
                </div>
              </div>

              <div className="edu-info-block">
                <h5>Skills Gained</h5>
                <div className="edu-tags-flex">
                  <span>Problem Solving</span>
                  <span>Full Stack</span>
                  <span>Database Design</span>
                  <span>REST APIs</span>
                </div>
              </div>

              <div className="edu-info-block">
                <h5>Highlights</h5>
                <p className="project-description">
                  Built strong foundation in MERN stack and modern web development.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;