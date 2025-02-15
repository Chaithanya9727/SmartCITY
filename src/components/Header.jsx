import React from "react";
import "../styles/Header.css"; // Link to the CSS file for styling

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <h1 className="header-title">Welcome to City Pulse!!</h1>
        <p className="header-subtitle">
          Your go-to source for urban insights, traffic updates, and city analytics.
        </p>
        <div className="header-buttons">
          <button className="cta-button">Explore Features</button>
          {/* <button className="cta-button secondary">Get Started </button> */}
        </div>
      </div>
      <div className="header-image">
        <img
          src="https://surl.li/zpqwzl" // Link to the image in the public folder
          alt="City Skyline"
          className="header-img"
        />
      </div>
    </header>
  );
};

export default Header;