/**
 * About Section Component
 * Features:
 * - Personal introduction and bio
 * - Animated morphing shape background
 * - Statistics cards (projects completed, years of experience)
 * - Feature highlights with icons
 * - Responsive two-column layout
 * 
 * TODO: Update statistics and bio text with your actual information
 */

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCode, FaLaptopCode, FaMobileAlt, FaDatabase } from 'react-icons/fa';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <Container>
        {/* Section title with animated underline */}
        <h2 className="section-title" data-aos="fade-up">About Me</h2>
        
        <Row className="align-items-center">
          {/* Left column - Your photo with statistics */}
          <Col lg={6} data-aos="fade-right">
            <div className="about-image-wrapper">
              {/* YOUR PHOTO HERE */}
              <div className="about-photo-container">
                <img 
                  src="/image/miphoto.jfif" 
                  alt="Naol Daniel" 
                  className="about-photo"
                />
              </div>
              
              {/* Animated morphing gradient shape - Hidden to show photo */}
              {/* <div className="about-image-bg"></div> */}
              
              {/* Statistics cards - UPDATE THESE WITH YOUR ACTUAL NUMBERS */}
              <div className="about-stats">
                <div className="stat-item">
                  <h3>5+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat-item">
                  <h3>3+</h3>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
          </Col>
          
          {/* Right column - Text content */}
          <Col lg={6} data-aos="fade-left">
            <div className="about-content">
              {/* Subtitle */}
              <h3 className="about-subtitle">Full Stack Developer & Problem Solver</h3>
              
              {/* Bio paragraphs - UPDATE THESE WITH YOUR OWN STORY */}
              <p className="about-text">
                I'm a passionate Full Stack Developer with expertise in building modern web applications. 
                I love turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <p className="about-text">
                With a strong foundation in both frontend and backend technologies, I create 
                seamless user experiences while ensuring robust and scalable server-side architecture.
              </p>
              
              {/* Feature highlights grid - 2x2 layout */}
              <div className="about-features">
                {/* Feature 1: Clean Code */}
                <div className="feature-item">
                  <FaCode className="feature-icon" />
                  <div>
                    <h4>Clean Code</h4>
                    <p>Writing maintainable and scalable code</p>
                  </div>
                </div>
                
                {/* Feature 2: Responsive Design */}
                <div className="feature-item">
                  <FaLaptopCode className="feature-icon" />
                  <div>
                    <h4>Responsive Design</h4>
                    <p>Mobile-first approach for all devices</p>
                  </div>
                </div>
                
                {/* Feature 3: Modern UI/UX */}
                <div className="feature-item">
                  <FaMobileAlt className="feature-icon" />
                  <div>
                    <h4>Modern UI/UX</h4>
                    <p>Creating intuitive user interfaces</p>
                  </div>
                </div>
                
                {/* Feature 4: Database Design */}
                <div className="feature-item">
                  <FaDatabase className="feature-icon" />
                  <div>
                    <h4>Database Design</h4>
                    <p>Efficient data architecture</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
