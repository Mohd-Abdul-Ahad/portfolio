import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    message: '',
    timeline: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const floatingOrbs = Array(8).fill().map((_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: Math.random() * 10 + 10
  }));

  const handleBudgetChange = (e) => {
    let value = e.target.value;
    value = value.replace(/[^0-9$]/g, '');
    if (value.length > 0 && !value.startsWith('$')) {
      value = '$' + value;
    }
    setFormData(prev => ({ ...prev, budget: value }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="contact-section" id="contact">
      {/* Floating animated orbs */}
      <div className="floating-orbs">
        {floatingOrbs.map(orb => (
          <motion.div
            key={orb.id}
            className="orb"
            style={{
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              opacity: 0.05
            }}
            animate={{
              y: [0, 30, 0],
              x: [0, 15, 0],
            }}
            transition={{
              duration: orb.duration,
              delay: orb.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <motion.div 
        className="contact-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div className="contact-header" variants={itemVariants}>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">Get in touch to discuss your project</p>
        </motion.div>

        <form 
          action="https://formsubmit.co/mohdahad.dev@gmail.com" 
          method="POST"
          className="contact-form"
        >
          {/* FormSubmit Configuration */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />
          <input type="hidden" name="_next" value={`${window.location.origin}/thanks`} />
          <input type="text" name="_honey" style={{ display: 'none' }} />
          
          <div className="form-grid">
            <motion.div className="form-group" variants={itemVariants}>
              <label htmlFor="name">Name <span className="required">*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-field"
              />
              <div className="input-highlight"></div>
            </motion.div>

            <motion.div className="form-group" variants={itemVariants}>
              <label htmlFor="email">Email <span className="required">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-field"
              />
              <div className="input-highlight"></div>
            </motion.div>

            <motion.div className="form-group" variants={itemVariants}>
              <label htmlFor="phone">Phone <span className="optional">(optional)</span></label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input-field"
              />
              <div className="input-highlight"></div>
            </motion.div>

            <motion.div className="form-group" variants={itemVariants}>
              <label htmlFor="company">Company/Brand <span className="optional">(optional)</span></label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="input-field"
              />
              <div className="input-highlight"></div>
            </motion.div>

            <motion.div className="form-group" variants={itemVariants}>
              <label htmlFor="budget">Budget Range <span className="optional">(optional)</span></label>
              <input
                type="text"
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleBudgetChange}
                placeholder="$500 - $1,000"
                className="input-field"
              />
              <div className="input-highlight"></div>
            </motion.div>

            <motion.div className="form-group" variants={itemVariants}>
              <label htmlFor="timeline">Project Timeline <span className="optional">(optional)</span></label>
              <input
                type="text"
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                placeholder="e.g., 1-2 months"
                className="input-field"
              />
              <div className="input-highlight"></div>
            </motion.div>

            <motion.div className="form-group full-width" variants={itemVariants}>
              <label htmlFor="message">Project Details <span className="required">*</span></label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="input-field"
                rows="5"
              />
              <div className="input-highlight"></div>
            </motion.div>
          </div>

          <div className="form-actions">
            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              variants={itemVariants}
            >
              Send Message
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;