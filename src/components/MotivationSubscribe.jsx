// src/components/MotivationSubscribe.jsx
import React, { useState } from 'react';
import '../styles/MotivationSubscribe.css';

const MotivationSubscribe = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email) {
      setSuccessMessage("Thank you for subscribing!");
      setEmail('');
    } else {
      setSuccessMessage("Please enter a valid email.");
    }
  };

  return (
    <section className="motivation-subscribe">
      <div className="motivation-content">
        <h2>Stay Ahead with the Latest in Smart Cities</h2>
        <p>Get exclusive updates, tips, and insights directly to your inbox. Stay informed and join the smart city revolution.</p>
      </div>
      <div className="subscribe-content">
        <h3>Subscribe Now</h3>
        <p>Be the first to hear about the latest trends and advancements in urban mobility and technology.</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={handleEmailChange} 
            required 
          />
          <button type="submit">Subscribe</button>
        </form>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </section>
  );
};

export default MotivationSubscribe;
