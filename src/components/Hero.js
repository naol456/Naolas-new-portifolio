/**
 * Hero Section Component - Landing Page
 * Features:
 * - Full-screen introduction section
 * - Animated floating cards showing key features
 * - Social media links
 * - Call-to-action buttons
 * - Scroll indicator animation
 * - Morphing gradient circle animation
 * 
 * TODO: Update social media links with your actual profiles
 */

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <Container>
        {/* Main hero content - Full viewport height */}
        <Row className="align-items-center min-vh-100">
          
          {/* Left column - Text content */}
          <Col lg={6} className="hero-content" data-aos="fade-right">
            {/* Welcome tag with emoji */}
            <div className="hero-tag"> Welcome to my portfolio</div>
            
            {/* Main heading with your name */}
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Naol Daniel mulata</span>
            </h1>
            
            {/* Your professional title */}
            <h2 className="hero-subtitle">Full Stack Developer</h2>
            
            {/* Brief introduction - Update this with your own description */}
            <p className="hero-description">
              I craft beautiful, functional, and user-friendly web applications. 
              Passionate about creating seamless digital experiences with modern technologies.
            </p>
            
            {/* Call-to-action buttons */}
            <div className="hero-buttons">
              <a href="#projects" className="btn-primary-custom me-3">View My Work</a>
              <a href="#contact" className="btn-outline-custom">Get In Touch</a>
            </div>
            
            {/* Social media links - UPDATE THESE WITH YOUR ACTUAL PROFILES */}
            {/*<div className="social-links">
              <a href="https://github.com/naoldaniel" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/naoldaniel" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://t.me/Naola456" target="_blank" rel="noopener noreferrer">
                <FaTelegram />
              </a>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=danielnaol393@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Send me an email"
              >
                <FaEnvelope />
              </a>
            </div>*/}

            
          </Col>
          
          {/* Right column - Your photo with animated elements */}
          <Col lg={6} className="hero-image-col" data-aos="fade-left">
            <div className="hero-image-wrapper">
              {/* YOUR PHOTO - Main focal point */}
              <div className="hero-photo-container">
                <img 
                  src="/image/new new.jfif" 
                  alt="Naol Daniel" 
                  className="hero-photo"
                />
              </div>
              
              {/* Floating cards with animations - Smaller size, positioned around photo */}
              <div className="floating-card card-1">
                <span className="icon">💻</span>
                <span className="text">Clean Code</span>
              </div>
              <div className="floating-card card-2">
                <span className="icon">🚀</span>
                <span className="text">Fast Performance</span>
              </div>
              <div className="floating-card card-3">
                <span className="icon">🎨</span>
                <span className="text">Beautiful UI</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
      {/* Scroll indicator - Animated mouse icon */}
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
}

export default Hero;
