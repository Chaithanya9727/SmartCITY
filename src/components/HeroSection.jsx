// src/components/HeroSection.jsx
import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2 className="hero-title">Transforming Urban Mobility</h2>
        <p className="hero-description">
          Join us in creating smarter, more efficient cities for a better tomorrow.
        </p>
        <button className="cta-button">Learn More</button>
      </div>
    </section>
  );
};

export default HeroSection;
