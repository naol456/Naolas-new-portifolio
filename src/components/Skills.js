/**
 * Skills Section Component
 * Features:
 * - Three categories of skills (Frontend, Backend, Database & Tools)
 * - Animated progress bars showing proficiency level
 * - Technology icons from react-icons
 * - Shimmer animation on progress bars
 * - Responsive grid layout (3 columns on desktop, 2 on tablet, 1 on mobile)
 * 
 * TODO: Update skills and proficiency levels to match your actual expertise
 * You can add or remove skills, change percentages, or add new categories
 */

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt, FaDocker,
  FaHtml5, FaCss3Alt, FaJs, FaAws 
} from 'react-icons/fa';
import { 
  SiMongodb, SiPostgresql, SiExpress, SiDjango, SiTypescript,
  SiRedis, SiGraphql, SiTailwindcss
} from 'react-icons/si';
import './Skills.css';

function Skills() {
  // Skills data organized by category
  // Each skill has: name, icon component, and proficiency level (0-100)
  // UPDATE THESE WITH YOUR ACTUAL SKILLS AND LEVELS
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: <FaReact />, level: 90 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 85 },
        { name: 'JavaScript', icon: <FaJs />, level: 95 },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
        { name: 'Tailwind', icon: <SiTailwindcss />, level: 85 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 90 },
        { name: 'Express', icon: <SiExpress />, level: 85 },
        { name: 'Python', icon: <FaPython />, level: 80 },
        //{ name: 'Django', icon: <SiDjango />, level: 75 },
        { name: 'GraphQL', icon: <SiGraphql />, level: 60 }
      ]
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 80 },
       // { name: 'Redis', icon: <SiRedis />, level: 75 },
        { name: 'Git', icon: <FaGitAlt />, level: 90 },
        { name: 'Docker', icon: <FaDocker />, level: 70 },
        { name: 'AWS', icon: <FaAws />, level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <Container>
        {/* Section title */}
        <h2 className="section-title" data-aos="fade-up">Skills & Technologies</h2>
        
        <Row>
          {/* Loop through each skill category */}
          {skillCategories.map((category, idx) => (
            <Col 
              lg={4}  // 3 columns on large screens
              md={6}  // 2 columns on medium screens
              key={idx} 
              className="mb-4" 
              data-aos="fade-up" 
              data-aos-delay={idx * 100}  // Stagger animation for each category
            >
              <div className="skill-category">
                {/* Category title (Frontend, Backend, etc.) */}
                <h3 className="category-title">{category.title}</h3>
                
                {/* List of skills in this category */}
                <div className="skills-list">
                  {category.skills.map((skill, skillIdx) => (
                    <div className="skill-item" key={skillIdx}>
                      {/* Skill name and percentage */}
                      <div className="skill-header">
                        <div className="skill-name">
                          {/* Technology icon */}
                          <span className="skill-icon">{skill.icon}</span>
                          {/* Technology name */}
                          <span>{skill.name}</span>
                        </div>
                        {/* Proficiency percentage */}
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      
                      {/* Progress bar */}
                      <div className="skill-bar">
                        {/* Filled portion based on skill level */}
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}  // Dynamic width
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
