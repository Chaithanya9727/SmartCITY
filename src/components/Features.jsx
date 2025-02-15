import React from "react";
import "../styles/Features.css"; // Import the updated Features CSS

const Features = () => {
  return (
    <section className="features">
      <h2>Discover Our Unique Features</h2>
      <p>
        Our features are designed to enhance your experience and simplify your
        daily tasks. From intelligent traffic analysis to cutting-edge projects,
        we bring the future to your fingertips.
      </p>

      <div className="feature-cards">
        {/* Feature 1 */}
        <div className="feature-card">
          <img src="https://shorturl.at/FWLm7" alt="Real-Time Traffic" />
          <h3>Real-Time Traffic Insights</h3>
          <p>
            Monitor traffic conditions and receive real-time alerts to stay ahead
            of traffic jams.
          </p>
          <button className="btn">Learn More</button>
        </div>

        {/* Feature 2 */}
        <div className="feature-card">
          <img src="https://shorturl.at/FyrFc" alt="Smart Monitoring" />
          <h3>Smart Monitoring</h3>
          <p>
            Analyze data and optimize operations with our intuitive monitoring
            system.
          </p>
          <button className="btn">Learn More</button>
        </div>

        {/* Feature 3 */}
        <div className="feature-card">
          <img src="https://shorturl.at/Wpa8i" alt="Innovative Projects" />
          <h3>Innovative City Projects</h3>
          <p>
            Explore cutting-edge city projects and join the movement to create
            a smarter urban space.
          </p>
          <button className="btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Features;
