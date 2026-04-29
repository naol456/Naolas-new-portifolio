/**
 * Experience Section Component
 * Features:
 * - Vertical timeline layout showing work history and education
 * - Animated timeline with gradient line
 * - Work experience and education sections
 * - Achievement lists for each position
 * - Responsive design with adjusted layout for mobile
 * 
 * TODO: Update with your actual work experience and education
 * You can add or remove positions from the arrays below
 */

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './Experience.css';

function Experience() {
  // Work experience array
  // Each entry has: type, title, company, period, description, achievements
  // UPDATE THIS WITH YOUR ACTUAL WORK HISTORY
  const experiences = [
    {
      type: 'work',
      title: ' Full Stack Developer',
      company: '  Study at Haramaya university & internship at FDRE Mesob .',
      period: '2023 - Present',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. collaborate with ather developers and implementing best practices.',
      achievements: [
        'Improved application performance by 50%',
        'work on diffrent projects and complete them',
        'I gained alot of skills from the team i worked with'
      ]
    },
     /*{
      type: 'work',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with cross-functional teams to deliver high-quality solutions.',
      achievements: [
        'Delivered 15+ successful projects',
        'Reduced bug reports by 30%',
        'Implemented automated testing'
      ]
     },*/

    /*{
      type: 'work',
      title: 'Junior Developer',
      company: 'StartUp Ventures',
      period: '2019 - 2020',
      description: 'Started career building responsive web applications and learning industry best practices. Contributed to various frontend and backend projects.',
      achievements: [
        'Built 10+ responsive websites',
        'Learned modern frameworks',
        'Collaborated with senior developers'
      ]
    }*/
  ];

  // Education array
  // UPDATE THIS WITH YOUR ACTUAL EDUCATION
  const education = [
    {
      type: 'education',
      degree: 'Bachelor of Science in Software engineering',
      institution: 'at Haramaya University',
      period: '2023 - 2027',
      description: 'Focusing on software engineering, algorithms, and web development. I will going to graduate next year.',
      achievements: [
        /* i will write my achivements here*/
        'I have a good grade till now ;'
        
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <Container>
        {/* Section title */}
        <h2 className="section-title" data-aos="fade-up">Education & Experiance</h2>
        
        <Row>
          {/* Centered column for timeline */}
          <Col lg={8} className="mx-auto">
            <div className="timeline">
              
              {/* Work Experience Section Header - COMMENTED OUT */}
               
              <div className="timeline-header" data-aos="fade-up">
                <FaBriefcase className="timeline-header-icon" />
                <h3>Work Experience</h3>
              </div>
              
              {experiences.map((exp, idx) => (
                <div className="timeline-item" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-period">{exp.period}</div>
                    <h4 className="timeline-title">{exp.title}</h4>
                    <h5 className="timeline-company">{exp.company}</h5>
                    <p className="timeline-description">{exp.description}</p>
                    <ul className="timeline-achievements">
                      {exp.achievements.map((achievement, achIdx) => (
                        <li key={achIdx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              

              {/* Education Section Header */}
              <div className="timeline-header" data-aos="fade-up">
                <FaGraduationCap className="timeline-header-icon" />
                <h3>Education</h3>
              </div>
              
              {/* Loop through education entries */}
              {education.map((edu, idx) => (
                <div className="timeline-item" key={idx} data-aos="fade-up">
                  {/* Timeline dot indicator */}
                  <div className="timeline-dot"></div>
                  
                  {/* Timeline content card */}
                  <div className="timeline-content">
                    {/* Time period badge */}
                    <div className="timeline-period">{edu.period}</div>
                    
                    {/* Degree name */}
                    <h4 className="timeline-title">{edu.degree}</h4>
                    
                    {/* Institution name */}
                    <h5 className="timeline-company">{edu.institution}</h5>
                    
                    {/* Education description */}
                    <p className="timeline-description">{edu.description}</p>
                    
                    {/* Achievements/honors list - Hidden until you add achievements */}
                    {edu.achievements.length > 0 && (
                      <ul className="timeline-achievements">
                        {edu.achievements.map((achievement, achIdx) => (
                          <li key={achIdx}>{achievement}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Experience;
