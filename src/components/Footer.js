/**
 * Footer Component
 * Features:
 * - Three-column layout (brand, quick links, social media)
 * - Animated heart icon in copyright text
 * - Social media links
 * - Navigation quick links
 * - Dynamic year in copyright
 * - Responsive design (stacks on mobile)
 * 
 * TODO: Update social media links with your actual profiles
 */

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  // Get current year dynamically for copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <Container>
        <Row className="footer-content">
          
          {/* Column 1: Brand and description */}
          <Col lg={4} md={6} className="mb-4">
            <h3 className="footer-brand">Naol Daniel</h3>
            <p className="footer-description">
              Full Stack Developer passionate about creating beautiful and functional web applications.
            </p>
          </Col>
          
          {/* Column 2: Quick navigation links */}
          <Col lg={4} md={6} className="mb-4">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>
          
          {/* Column 3: Social media links */}
          <Col lg={4} md={12} className="mb-4">
            <h4 className="footer-title">Connect With Me</h4>
            {/* Social media icons - UPDATE THESE WITH YOUR ACTUAL PROFILES */}
            <div className="footer-social">
              <a href="https://github.com/naol456" target="_blank" rel="noopener noreferrer">
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
            </div>
          </Col>
        </Row>
        
        {/* Bottom section: Copyright with animated heart */}
        <div className="footer-bottom">
          <p>
            © {currentYear} Naol Daniel.  from Ethiopia 
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
