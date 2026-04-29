// Main App Component - This is the root component that holds the entire portfolio
import React, { useEffect } from 'react';
import AOS from 'aos'; // AOS (Animate On Scroll) library for scroll animations
import 'aos/dist/aos.css'; // AOS styles
import './App.css';

// Import all section components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Initialize AOS (Animate On Scroll) when component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration in milliseconds
      once: true,      // Animation happens only once when scrolling down
      offset: 100      // Offset (in px) from the original trigger point
    });
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="App">
      {/* Navigation bar - Fixed at top */}
      <Navbar />
      
      {/* Hero section - Landing page with introduction */}
      <Hero />
      
      {/* About section - Personal information and statistics */}
      <About />
      
      {/* Skills section - Technical skills with progress bars */}
      <Skills />
      
      {/* Projects section - Portfolio of work */}
      <Projects />
      
      {/* Experience section - Work history and education timeline */}
      <Experience />
      
      {/* Contact section - Contact form and information */}
      <Contact />
      
      {/* Footer - Links and copyright */}
      <Footer />
    </div>
  );
}

export default App;
