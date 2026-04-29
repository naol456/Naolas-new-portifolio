/**
 * Contact Section Component - WITH EMAILJS INTEGRATION
 * Features:
 * - Contact information cards (email, phone, location)
 * - WORKING contact form that sends real emails using EmailJS
 * - Form state management using React hooks
 * - Loading state while sending
 * - Success/error notifications
 * 
 * SETUP REQUIRED:
 * 1. Go to https://www.emailjs.com/ and create a free account
 * 2. Add your email service (Gmail)
 * 3. Create an email template
 * 4. Replace the IDs below with your actual EmailJS credentials
 */

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  // Form state management using useState hook
  // Stores all form field values in a single object
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Loading state - shows "Sending..." while email is being sent
  const [sending, setSending] = useState(false);

  // Handle input changes for all form fields
  // Updates the specific field that changed while keeping others unchanged
  const handleChange = (e) => {
    setFormData({
      ...formData,  // Spread existing form data
      [e.target.name]: e.target.value  // Update only the changed field
    });
  };

  // Handle form submission with EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent page reload
    setSending(true);    // Show loading state

    // ⚠️ IMPORTANT: Replace these with YOUR EmailJS credentials
    // Get them from: https://dashboard.emailjs.com/
    const serviceID = 'service_spkr3em';      // e.g., 'service_abc123'
    const templateID = 'template_mdifkbk';    // e.g., 'template_xyz789'
    const publicKey = 'fSmMilrBoRtQjXFi6';      // e.g., 'abcdefghijk123'

    // Prepare email parameters matching your EmailJS template
    const templateParams = {
      from_name: formData.name,      // Sender's name
      from_email: formData.email,    // Sender's email
      subject: formData.subject,     // Email subject
      message: formData.message,     // Message content
      to_email: 'danielnaol393@gmail.com'  // Your email (optional)
    };

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('✅ Email sent successfully!', response.status, response.text);
        alert('✅ Message sent successfully! I will get back to you soon.');
        
        // Reset form after successful submission
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSending(false);
      })
      .catch((error) => {
        console.error('❌ Failed to send email:', error);
        alert('❌ Failed to send message. Please try again or email me directly at danielnaol393@gmail.com');
        setSending(false);
      });
  };

  // Contact information array
  // UPDATE THESE WITH YOUR ACTUAL CONTACT DETAILS
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'danielnaol393@gmail.com',
      link: 'mailto:danielnaol393@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+251-989-288-766',
      link: 'tel:+251989288766'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Addis Ababa, Ethiopia',
      link: null  // No link for location
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <Container>
        {/* Section title */}
        <h2 className="section-title" data-aos="fade-up">Get In Touch</h2>
        
        {/* Section subtitle */}
        <p className="contact-subtitle" data-aos="fade-up">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>
        
        <Row className="mt-5">
          {/* Left column - Contact information cards */}
          <Col lg={4} className="mb-4" data-aos="fade-right">
            <div className="contact-info">
              {/* Loop through contact info items */}
              {contactInfo.map((info, idx) => (
                <div className="contact-info-item" key={idx}>
                  {/* Icon */}
                  <div className="contact-icon">{info.icon}</div>
                  
                  {/* Contact details */}
                  <div className="contact-details">
                    <h4>{info.title}</h4>
                    {/* Show as link if link exists, otherwise plain text */}
                    {info.link ? (
                      <a href={info.link}>{info.value}</a>
                    ) : (
                      <p>{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Col>
          
          {/* Right column - Contact form */}
          <Col lg={8} data-aos="fade-left">
            <div className="contact-form-wrapper">
              <Form onSubmit={handleSubmit}>
                {/* First row - Name and Email (side by side) */}
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-control-custom"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-control-custom"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                {/* Subject field (full width) */}
                <Form.Group className="mb-4">
                  <Form.Control
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-control-custom"
                  />
                </Form.Group>
                
                {/* Message textarea (full width) */}
                <Form.Group className="mb-4">
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={6}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-control-custom"
                  />
                </Form.Group>
                
                {/* Submit button with loading state */}
                <Button type="submit" className="btn-submit" disabled={sending}>
                  <FaPaperPlane className="me-2" />
                  {sending ? 'Sending...' : 'Send Message'}
                </Button>
                
                {/* Helper text */}
                {sending && (
                  <p style={{ color: '#6c63ff', marginTop: '10px', fontSize: '0.9rem' }}>
                    📧 Sending your message...
                  </p>
                )}
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
