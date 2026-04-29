/**
 * Projects Section Component
 * Features:
 * - Grid layout of project cards (3 columns on desktop, 2 on tablet, 1 on mobile)
 * - Project images with hover overlay effect
 * - GitHub and live demo links
 * - Technology tags for each project
 * - Smooth animations on scroll
 * 
 * TODO: Replace with your actual projects, images, and links
 * You can add or remove projects from the array below
 */

import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

function Projects() {
  // Array of project objects
  // Each project has: title, description, image, tags, github link, demo link
  // UPDATE THIS ARRAY WITH YOUR ACTUAL PROJECTS
  const projects = [
   /* {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard. Built with modern technologies for optimal performance.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/naoldaniel/ecommerce',
      demo: 'https://demo.example.com'
    },*/
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      tags: ['React', 'Firebase', 'Material-UI'],
      github: 'https://github.com/naol456/taskmanager',
      demo: 'https://demo.example.com'
    },
   /* {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization, scheduling features, and comprehensive reporting tools.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      tags: ['React', 'TypeScript', 'Chart.js', 'Express'],
      github: 'https://github.com/naoldaniel/dashboard',
      demo: 'https://demo.example.com'
    },*/
    /*{
      title: 'Weather Forecast App',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed weather information for any location worldwide.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80',
      tags: ['React', 'API Integration', 'CSS3'],
      github: 'https://github.com/naoldaniel/weather',
      demo: 'https://demo.example.com'
    },*/
   /*{
      title: 'Blog Platform',
      description: 'Modern blogging platform with markdown support, SEO optimization, comment system, and user-friendly content management interface.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
      tags: ['Next.js', 'PostgreSQL', 'Tailwind'],
      github: 'https://github.com/naoldaniel/blog',
      demo: 'https://demo.example.com'
    },*/
    {
      title: 'Fitness Tracker',
      description: 'Comprehensive fitness tracking application with workout plans, progress tracking, nutrition logging, and personalized recommendations.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
      tags: ['React Native', 'Node.js', 'MongoDB'],
      github: 'https://github.com/naol456/inventory-frontend',
      demo: 'https://demo.example.com'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <Container>
        {/* Section title */}
        <h2 className="section-title" data-aos="fade-up">Featured Projects</h2>
        
        <Row>
          {/* Loop through each project and create a card */}
          {projects.map((project, idx) => (
            <Col 
              lg={4}  // 3 columns on large screens
              md={6}  // 2 columns on medium screens
              key={idx} 
              className="mb-4" 
              data-aos="fade-up" 
              data-aos-delay={idx * 100}  // Stagger animation for each card
            >
              <div className="project-card">
                {/* Project image with hover overlay */}
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  
                  {/* Overlay that appears on hover with links */}
                  <div className="project-overlay">
                    <div className="project-links">
                      {/* GitHub repository link */}
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaGithub />
                      </a>
                      {/* Live demo link */}
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Project information */}
                <div className="project-content">
                  {/* Project title */}
                  <h3 className="project-title">{project.title}</h3>
                  
                  {/* Project description */}
                  <p className="project-description">{project.description}</p>
                  
                  {/* Technology tags */}
                  <div className="project-tags">
                    {project.tags.map((tag, tagIdx) => (
                      <Badge key={tagIdx} bg="" className="project-tag">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
