/**
 * EXAMPLES: How to Comment Different Parts of Experience.js
 * Copy the examples you need to your actual Experience.js file
 */

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './Experience.css';

function Experience() {
  
  // ============================================
  // EXAMPLE 1: Comment out specific job entries
  // ============================================
  const experiences = [
    {
      type: 'work',
      title: 'Full Stack Developer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Leading development...',
      achievements: [
        'Improved application performance by 40%',
        'Led team of 5 developers',
        'Implemented CI/CD pipeline'
      ]
    },
    /* COMMENTED OUT - Second job
    {
      type: 'work',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      description: 'Developed and maintained...',
      achievements: [
        'Delivered 15+ successful projects',
        'Reduced bug reports by 30%',
        'Implemented automated testing'
      ]
    },
    */
    /* COMMENTED OUT - Third job
    {
      type: 'work',
      title: 'Junior Developer',
      company: 'StartUp Ventures',
      period: '2019 - 2020',
      description: 'Started career building...',
      achievements: [
        'Built 10+ responsive websites',
        'Learned modern frameworks',
        'Collaborated with senior developers'
      ]
    }
    */
  ];

  // ============================================
  // EXAMPLE 2: Education with empty achievements
  // ============================================
  const education = [
    {
      type: 'education',
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'Haramaya University',
      period: '2023 - 2027',
      description: 'Focusing on software engineering, algorithms, and web development.',
      achievements: [
        // Add your achievements here when ready
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <Container>
        <h2 className="section-title" data-aos="fade-up">Experience & Education</h2>
        
        <Row>
          <Col lg={8} className="mx-auto">
            <div className="timeline">
              
              {/* ============================================ */}
              {/* EXAMPLE 3: Comment out entire Work section */}
              {/* ============================================ */}
              
              {/* WORK EXPERIENCE SECTION - COMMENTED OUT */}
              {/*
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
              */}

              {/* ============================================ */}
              {/* EXAMPLE 4: Show only Education section */}
              {/* ============================================ */}
              
              <div className="timeline-header" data-aos="fade-up">
                <FaGraduationCap className="timeline-header-icon" />
                <h3>Education</h3>
              </div>
              
              {education.map((edu, idx) => (
                <div className="timeline-item" key={idx} data-aos="fade-up">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-period">{edu.period}</div>
                    <h4 className="timeline-title">{edu.degree}</h4>
                    <h5 className="timeline-company">{edu.institution}</h5>
                    <p className="timeline-description">{edu.description}</p>
                    
                    {/* ============================================ */}
                    {/* EXAMPLE 5: Comment out achievements if empty */}
                    {/* ============================================ */}
                    {/* 
                    <ul className="timeline-achievements">
                      {edu.achievements.map((achievement, achIdx) => (
                        <li key={achIdx}>{achievement}</li>
                      ))}
                    </ul>
                    */}
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
