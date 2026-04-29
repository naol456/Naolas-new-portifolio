/**
 * Navigation Bar Component
 * Features:
 * - Fixed navigation bar that stays at the top while scrolling
 * - Changes background when user scrolls down (adds blur effect)
 * - Responsive mobile menu (hamburger menu on small screens)
 * - Smooth scroll to sections when clicking links
 */

import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';

function NavigationBar() {
  // State to track if user has scrolled down
  const [scrolled, setScrolled] = useState(false);

  // Effect to listen for scroll events
  useEffect(() => {
    // Function to check scroll position
    const handleScroll = () => {
      // If scrolled more than 50px, set scrolled to true
      setScrolled(window.scrollY > 50);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup: remove event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Navbar with dynamic class based on scroll state
    // 'scrolled' class adds background blur and shadow
    <Navbar expand="lg" fixed="top" className={scrolled ? 'navbar-custom scrolled' : 'navbar-custom'}>
      <Container>
        {/* Brand/Logo - Your name with gradient effect */}
        <Navbar.Brand href="#home" className="brand-name">
          <span className="gradient-text">Naol Daniel</span>
        </Navbar.Brand>
        
        {/* Mobile menu toggle button (hamburger icon) */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        {/* Collapsible navigation menu */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navigation links - ms-auto pushes them to the right */}
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
